/**
 * BYU-Idaho / BYU-Pathway Degree & Course Tracker
 * Principal Application Orchestrator
 */

import { trackerState } from './state.js';
import { renderHeroMetrics, renderCredentialBadgesShowcase } from './components/metrics.js';
import { renderFilterControls } from './components/filters.js';
import { renderCourseGrid } from './components/course-card.js';
import { renderCourseTable } from './components/course-table.js';
import { renderTimelineRoadmap } from './components/timeline.js';
import { renderCourseModal } from './components/course-modal.js';

import { COURSES_DATA } from './course-data.js';

/**
 * Loads course dataset from data/courses.json with fallback to embedded dataset
 * @returns {Promise<Array<import('./types').Course>>}
 */
async function loadCourseDataset() {
  try {
    const response = await fetch('data/courses.json');
    if (response.ok) {
      const data = await response.json();
      if (data && Array.isArray(data.courses)) {
        console.info(`[Degree Tracker] Successfully loaded ${data.courses.length} courses from data/courses.json`);
        return data.courses;
      }
    }
  } catch (err) {
    console.warn('[Degree Tracker] Direct fetch note:', err.message);
  }

  // Graceful offline & local file:// protocol fallback
  if (COURSES_DATA && Array.isArray(COURSES_DATA.courses)) {
    console.info(`[Degree Tracker] Loaded ${COURSES_DATA.courses.length} courses from local module dataset.`);
    return COURSES_DATA.courses;
  }

  throw new Error('Unable to fetch courses dataset from data/courses.json.');
}

/**
 * Updates UI based on current tracker state snapshot
 * @param {ReturnType<typeof trackerState.getSnapshot>} snapshot
 */
function renderApp(snapshot) {
  const {
    allCourses,
    filteredCourses,
    degreeStats,
    credentialMilestones,
    availableCertificates,
    availableTechnologies,
    allTermsChronological,
    filters,
  } = snapshot;

  // 1. Render Hero Metric Cards
  const heroContainer = document.getElementById('hero-metrics-container');
  if (heroContainer && degreeStats) {
    renderHeroMetrics(heroContainer, degreeStats, credentialMilestones);
  }

  // 2. Render Credential Badges Showcase
  const credContainer = document.getElementById('credential-showcase-container');
  if (credContainer && credentialMilestones) {
    renderCredentialBadgesShowcase(credContainer, credentialMilestones);
  }

  // 3. Render Filter & Search Controls
  const filtersContainer = document.getElementById('filters-container');
  if (filtersContainer) {
    renderFilterControls(
      filtersContainer,
      filters,
      availableCertificates,
      availableTechnologies,
      allCourses.length,
      filteredCourses.length
    );
  }

  // 4. Render Active View Mode
  const viewContainer = document.getElementById('view-container');
  if (viewContainer) {
    if (filters.viewMode === 'grid') {
      renderCourseGrid(viewContainer, filteredCourses);
    } else if (filters.viewMode === 'table') {
      renderCourseTable(viewContainer, filteredCourses, filters.sortBy);
    } else if (filters.viewMode === 'timeline') {
      renderTimelineRoadmap(viewContainer, filteredCourses, allTermsChronological);
    }
  }

  // 5. Render Detail Modal
  const modalContainer = document.getElementById('modal-container');
  if (modalContainer) {
    renderCourseModal(modalContainer, filters.selectedCourse);
  }

  // 6. Update Dark Mode Toggle Icon
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  if (themeToggleBtn) {
    const isDark = document.documentElement.classList.contains('dark');
    themeToggleBtn.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
    themeToggleBtn.innerHTML = isDark
      ? `<svg class="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd"/></svg>`
      : `<svg class="w-5 h-5 text-slate-600" fill="currentColor" viewBox="0 0 20 20"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"/></svg>`;
  }
}

/**
 * Global Keyboard shortcuts
 */
function setupKeyboardShortcuts() {
  document.addEventListener('keydown', (e) => {
    // Press '/' to jump to search bar if not already in input
    if (e.key === '/' && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
      e.preventDefault();
      const searchInput = document.getElementById('tracker-search-input');
      if (searchInput) searchInput.focus();
    }
  });
}

/**
 * Initialize application lifecycle
 */
async function initTracker() {
  const loadingEl = document.getElementById('loading-indicator');
  const errorEl = document.getElementById('error-container');

  try {
    // Wire State Subscription
    trackerState.subscribe(renderApp);

    // Dark Mode Toggle Button
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    if (themeToggleBtn) {
      themeToggleBtn.addEventListener('click', () => {
        trackerState.toggleDarkMode();
      });
    }

    // Load dataset
    const courses = await loadCourseDataset();
    trackerState.initCourses(courses);

    if (loadingEl) loadingEl.classList.add('hidden');
    setupKeyboardShortcuts();
  } catch (err) {
    console.error('[Degree Tracker] Fatal error initializing app:', err);
    if (loadingEl) loadingEl.classList.add('hidden');
    if (errorEl) {
      errorEl.classList.remove('hidden');
      errorEl.querySelector('#error-message').textContent = err.message;
    }
  }
}

// Start when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initTracker);
} else {
  initTracker();
}
