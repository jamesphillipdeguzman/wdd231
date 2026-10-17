/**
 * BYU-Idaho Degree Tracker - Reactive State Manager
 * Provides centralized reactive store for courses, filters, view modes, and modal states.
 */

import { calculateDegreeStats, getCredentialMilestones } from './gpa-calculator.js';

class TrackerState {
  constructor() {
    this.allCourses = [];
    this.filteredCourses = [];
    this.degreeStats = null;
    this.credentialMilestones = [];
    this.availableCertificates = [];
    this.availableTechnologies = [];
    this.allTermsChronological = [];

    this.filters = {
      searchQuery: '',
      status: 'All', // 'All' | 'Completed' | 'Current' | 'Scheduled'
      certificate: 'All',
      courseLevel: 'All', // 'All' | 'Lower Division' | 'Upper Division'
      technologyTag: null,
      sortBy: 'term-asc',
      viewMode: 'grid', // 'grid' | 'table' | 'timeline'
      selectedCourse: null,
      isDarkMode: false,
    };

    this.subscribers = new Set();
  }

  /**
   * Subscribe a callback to state change notifications
   * @param {Function} callback
   * @returns {Function} unsubscribe function
   */
  subscribe(callback) {
    this.subscribers.add(callback);
    return () => this.subscribers.delete(callback);
  }

  /**
   * Notify all registered subscribers of state updates
   */
  notify() {
    const snapshot = this.getSnapshot();
    this.subscribers.forEach((cb) => {
      try {
        cb(snapshot);
      } catch (err) {
        console.error('State subscriber error:', err);
      }
    });
  }

  /**
   * Retrieve an immutable snapshot of current state
   */
  getSnapshot() {
    return {
      allCourses: this.allCourses,
      filteredCourses: this.filteredCourses,
      degreeStats: this.degreeStats,
      credentialMilestones: this.credentialMilestones,
      availableCertificates: this.availableCertificates,
      availableTechnologies: this.availableTechnologies,
      allTermsChronological: this.allTermsChronological,
      filters: { ...this.filters },
    };
  }

  /**
   * Initialize state with courses loaded from courses.json
   * @param {Array<import('./types').Course>} courses
   */
  initCourses(courses) {
    this.allCourses = courses.map((course) => ({
      ...course,
      credits: Number(course.credits) || 0,
      creditsEarned: Number(course.creditsEarned) || 0,
      technology: Array.isArray(course.technology) ? course.technology : [],
      status: course.status || (course.completed ? 'Complete' : 'Scheduled'),
    }));

    // Extract unique certificates
    const certSet = new Set();
    const techCountMap = new Map();
    const termOrderMap = new Map();

    this.allCourses.forEach((c) => {
      if (c.certificate) certSet.add(c.certificate.trim());
      if (Array.isArray(c.technology)) {
        c.technology.forEach((tech) => {
          const t = tech.trim();
          techCountMap.set(t, (techCountMap.get(t) || 0) + 1);
        });
      }
      if (c.term) {
        if (!termOrderMap.has(c.term)) {
          termOrderMap.set(c.term, termOrderMap.size);
        }
      }
    });

    this.availableCertificates = Array.from(certSet).sort();
    this.availableTechnologies = Array.from(techCountMap.entries())
      .sort((a, b) => b[1] - a[1])
      .map(([tech]) => tech);

    this.allTermsChronological = Array.from(termOrderMap.keys());

    // Initialize dark mode from system preference or localStorage
    const savedTheme = localStorage.getItem('dev-courses-theme') || localStorage.getItem('theme') || localStorage.getItem('degree-tracker-theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    this.filters.isDarkMode = savedTheme ? savedTheme === 'dark' : prefersDark;
    this.applyDarkMode(this.filters.isDarkMode);

    // Listen for SET_THEME postMessage if embedded in iframe
    window.addEventListener('message', (event) => {
      if (event.data && (event.data.type === 'SET_THEME' || event.data.type === 'THEME_CHANGE')) {
        const isDark = event.data.theme === 'dark';
        if (this.filters.isDarkMode !== isDark) {
          this.filters.isDarkMode = isDark;
          this.applyDarkMode(isDark);
          this.notify();
        }
      }
    });

    this.recomputeStatsAndFilters();
  }

  /**
   * Recompute stats and filter course array based on active filters
   */
  recomputeStatsAndFilters() {
    this.degreeStats = calculateDegreeStats(this.allCourses);
    this.credentialMilestones = getCredentialMilestones(this.allCourses);

    const query = this.filters.searchQuery.trim().toLowerCase();
    const statusFilter = this.filters.status;
    const certFilter = this.filters.certificate;
    const levelFilter = this.filters.courseLevel;
    const techFilter = this.filters.technologyTag;

    let result = this.allCourses.filter((course) => {
      // Status filtering
      if (statusFilter !== 'All') {
        if (statusFilter === 'Completed') {
          const isDone = course.completed || course.status === 'Complete' || course.status === 'Fulfilled';
          if (!isDone) return false;
        } else if (statusFilter === 'Current') {
          if (course.status !== 'Current') return false;
        } else if (statusFilter === 'Scheduled') {
          if (course.status !== 'Scheduled') return false;
        }
      }

      // Certificate filtering
      if (certFilter !== 'All') {
        if (certFilter === 'General Education') {
          const isGE =
            course.certificate === 'General Education' ||
            course.certificate === 'Foundational Studies' ||
            course.certificate === 'Business Core' ||
            course.certificate === 'Family Studies' ||
            course.certificate === 'General Studies';
          if (!isGE) return false;
        } else if (certFilter === 'Pathway Connect') {
          const isPC = (course.certificate || '').toLowerCase().includes('pathway');
          if (!isPC) return false;
        } else if (course.certificate !== certFilter) {
          return false;
        }
      }

      // Course Level filtering
      if (levelFilter !== 'All' && course.courseLevel !== levelFilter) {
        return false;
      }

      // Specific Technology Tag filter
      if (techFilter) {
        const hasTech = course.technology.some(
          (t) => t.toLowerCase() === techFilter.toLowerCase()
        );
        if (!hasTech) return false;
      }

      // Text search query
      if (query) {
        const inCode = course.code.toLowerCase().includes(query);
        const inSubjectNum = `${course.subject} ${course.number}`.toLowerCase().includes(query);
        const inTitle = course.title.toLowerCase().includes(query);
        const inDesc = course.description ? course.description.toLowerCase().includes(query) : false;
        const inTerm = course.term ? course.term.toLowerCase().includes(query) : false;
        const inTech = course.technology.some((t) => t.toLowerCase().includes(query));

        if (!inCode && !inSubjectNum && !inTitle && !inDesc && !inTerm && !inTech) {
          return false;
        }
      }

      return true;
    });

    // Sorting
    result.sort((a, b) => {
      switch (this.filters.sortBy) {
        case 'code-asc':
          return a.code.localeCompare(b.code);
        case 'code-desc':
          return b.code.localeCompare(a.code);
        case 'credits-desc':
          return b.credits - a.credits;
        case 'grade-desc': {
          const gradeVal = (g) => {
            if (!g) return -1;
            if (g === 'A') return 4.0;
            if (g === 'A-') return 3.7;
            if (g === 'B+') return 3.3;
            if (g === 'B') return 3.0;
            if (g === 'Pass' || g === 'TR') return 2.5;
            return 0;
          };
          return gradeVal(b.grade) - gradeVal(a.grade);
        }
        case 'term-desc': {
          const idxA = this.allTermsChronological.indexOf(a.term);
          const idxB = this.allTermsChronological.indexOf(b.term);
          return idxB - idxA;
        }
        case 'term-asc':
        default: {
          const idxA = this.allTermsChronological.indexOf(a.term);
          const idxB = this.allTermsChronological.indexOf(b.term);
          return idxA - idxB;
        }
      }
    });

    this.filteredCourses = result;
    this.notify();
  }

  // --- Filter Mutation Actions ---

  setSearchQuery(query) {
    this.filters.searchQuery = query;
    this.recomputeStatsAndFilters();
  }

  setStatusFilter(status) {
    this.filters.status = status;
    this.recomputeStatsAndFilters();
  }

  setCertificateFilter(cert) {
    this.filters.certificate = cert;
    this.recomputeStatsAndFilters();
  }

  setCourseLevelFilter(level) {
    this.filters.courseLevel = level;
    this.recomputeStatsAndFilters();
  }

  setTechnologyFilter(tech) {
    // Toggle technology filter: clicking again clears it
    if (this.filters.technologyTag === tech) {
      this.filters.technologyTag = null;
    } else {
      this.filters.technologyTag = tech;
    }
    this.recomputeStatsAndFilters();
  }

  setSortBy(sortBy) {
    this.filters.sortBy = sortBy;
    this.recomputeStatsAndFilters();
  }

  setViewMode(viewMode) {
    this.filters.viewMode = viewMode;
    this.notify();
  }

  setSelectedCourse(course) {
    this.filters.selectedCourse = course;
    this.notify();
  }

  clearSelectedCourse() {
    this.filters.selectedCourse = null;
    this.notify();
  }

  resetAllFilters() {
    this.filters.searchQuery = '';
    this.filters.status = 'All';
    this.filters.certificate = 'All';
    this.filters.courseLevel = 'All';
    this.filters.technologyTag = null;
    this.filters.sortBy = 'term-asc';
    this.recomputeStatsAndFilters();
  }

  toggleDarkMode() {
    this.filters.isDarkMode = !this.filters.isDarkMode;
    this.applyDarkMode(this.filters.isDarkMode);
    const themeStr = this.filters.isDarkMode ? 'dark' : 'light';
    localStorage.setItem('degree-tracker-theme', themeStr);
    localStorage.setItem('dev-courses-theme', themeStr);
    localStorage.setItem('theme', themeStr);
    this.notify();
  }

  applyDarkMode(isDark) {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
}

export const trackerState = new TrackerState();
