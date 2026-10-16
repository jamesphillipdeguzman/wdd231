/**
 * BYU-Idaho Degree Tracker - Filter Controls Component
 * Provides debounced search bar, status tabs, certificate pills, level toggles,
 * sort controls, and view mode switchers.
 */

import { trackerState } from '../state.js';

let debounceTimeout = null;

/**
 * Renders and wires the Filter Controls bar
 * @param {HTMLElement} container
 * @param {import('../types').FilterState} filters
 * @param {Array<string>} availableCertificates
 * @param {Array<string>} availableTechnologies
 * @param {number} totalCount
 * @param {number} filteredCount
 */
export function renderFilterControls(
  container,
  filters,
  availableCertificates,
  availableTechnologies,
  totalCount,
  filteredCount
) {
  if (!container) return;

  const statusOptions = [
    { label: 'All Courses', value: 'All' },
    { label: 'Completed / Fulfilled', value: 'Completed' },
    { label: 'In Progress (Current)', value: 'Current' },
    { label: 'Scheduled / Upcoming', value: 'Scheduled' },
  ];

  // Specific certificate track pills requested by user
  const trackPills = [
    { label: 'All Tracks', value: 'All' },
    { label: 'Web & Computer Programming', value: 'Web and Computer Programming' },
    { label: 'Web Development', value: 'Web Development' },
    { label: 'Software Development', value: 'Software Development' },
    { label: 'General Education', value: 'General Education' },
    { label: 'Religion', value: 'Religion' },
  ];

  container.innerHTML = `
    <div class="bg-white dark:bg-slate-800/90 rounded-2xl p-5 shadow-sm border border-slate-200 dark:border-slate-700/60 space-y-4">
      
      <!-- Top Row: Search Bar, Level Filter, Sort Dropdown & View Mode Switcher -->
      <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        
        <!-- Live Search Input -->
        <div class="relative flex-1">
          <div class="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
          </div>
          <input
            type="search"
            id="tracker-search-input"
            value="${escapeHtml(filters.searchQuery)}"
            placeholder="Search course code (e.g. CSE 310), title, or tech (e.g. C#, Python, React)..."
            class="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            aria-label="Search courses by code, title, or technology"
          />
          ${filters.searchQuery ? `
            <button id="clear-search-btn" class="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
          ` : ''}
        </div>

        <div class="flex flex-wrap items-center gap-2.5">
          <!-- Course Level Selector (Lower vs Upper Division) -->
          <div class="inline-flex p-1 bg-slate-100 dark:bg-slate-900 rounded-xl text-xs font-medium border border-slate-200/60 dark:border-slate-700/60" role="group" aria-label="Course Level">
            <button
              class="level-filter-btn px-3 py-1.5 rounded-lg transition-all ${filters.courseLevel === 'All' ? 'bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-sm font-semibold' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}"
              data-level="All"
            >
              All Levels
            </button>
            <button
              class="level-filter-btn px-3 py-1.5 rounded-lg transition-all ${filters.courseLevel === 'Lower Division' ? 'bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-sm font-semibold' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}"
              data-level="Lower Division"
            >
              Lower Division (100-200)
            </button>
            <button
              class="level-filter-btn px-3 py-1.5 rounded-lg transition-all ${filters.courseLevel === 'Upper Division' ? 'bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-sm font-semibold' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}"
              data-level="Upper Division"
            >
              Upper Division (300-400)
            </button>
          </div>

          <!-- Sort Dropdown -->
          <div class="relative">
            <select
              id="tracker-sort-select"
              class="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 text-xs font-medium rounded-xl py-2 pl-3 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer appearance-none"
              aria-label="Sort courses by"
            >
              <option value="term-asc" ${filters.sortBy === 'term-asc' ? 'selected' : ''}>Chronological (Past &rarr; Future)</option>
              <option value="term-desc" ${filters.sortBy === 'term-desc' ? 'selected' : ''}>Chronological (Future &rarr; Past)</option>
              <option value="code-asc" ${filters.sortBy === 'code-asc' ? 'selected' : ''}>Course Code (A-Z)</option>
              <option value="credits-desc" ${filters.sortBy === 'credits-desc' ? 'selected' : ''}>Highest Credits</option>
              <option value="grade-desc" ${filters.sortBy === 'grade-desc' ? 'selected' : ''}>Highest Grade</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2.5 text-slate-400">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
            </div>
          </div>

          <!-- View Mode Switcher -->
          <div class="inline-flex p-1 bg-slate-100 dark:bg-slate-900 rounded-xl text-xs border border-slate-200/60 dark:border-slate-700/60" role="group" aria-label="View Mode">
            <button
              id="view-mode-grid"
              class="px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all ${filters.viewMode === 'grid' ? 'bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-sm font-semibold' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}"
              title="Grid Card View"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/></svg>
              <span>Cards</span>
            </button>
            <button
              id="view-mode-table"
              class="px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all ${filters.viewMode === 'table' ? 'bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-sm font-semibold' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}"
              title="Compact Table View"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/></svg>
              <span>Table</span>
            </button>
            <button
              id="view-mode-timeline"
              class="px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all ${filters.viewMode === 'timeline' ? 'bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-sm font-semibold' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}"
              title="Chronological Roadmap View"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              <span>Timeline</span>
            </button>
          </div>
        </div>

      </div>

      <!-- Second Row: Status Filter Tabs -->
      <div class="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100 dark:border-slate-700/60">
        <span class="text-xs font-semibold text-slate-400 uppercase tracking-wider mr-1">Status:</span>
        <div class="flex flex-wrap gap-1.5">
          ${statusOptions
            .map(
              (opt) => `
            <button
              class="status-tab-btn px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                filters.status === opt.value
                  ? 'bg-blue-600 text-white shadow-sm font-semibold ring-2 ring-blue-600/30'
                  : 'bg-slate-100 dark:bg-slate-700/60 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }"
              data-status="${opt.value}"
            >
              ${opt.label}
            </button>
          `
            )
            .join('')}
        </div>
      </div>

      <!-- Third Row: Certificate / Program Track Filter Pills -->
      <div class="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100 dark:border-slate-700/60">
        <span class="text-xs font-semibold text-slate-400 uppercase tracking-wider mr-1">Certificate Track:</span>
        <div class="flex flex-wrap gap-1.5">
          ${trackPills
            .map(
              (track) => `
            <button
              class="track-pill-btn px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                filters.certificate === track.value
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
                  : 'bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-500'
              }"
              data-cert="${escapeHtml(track.value)}"
            >
              ${track.label}
            </button>
          `
            )
            .join('')}
        </div>
      </div>

      <!-- Active Filters / Count Summary Row -->
      <div class="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-100 dark:border-slate-700/60 text-xs">
        <div class="flex flex-wrap items-center gap-2">
          <span class="text-slate-500 dark:text-slate-400">
            Showing <strong class="text-slate-900 dark:text-white font-bold">${filteredCount}</strong> of ${totalCount} courses
          </span>

          ${filters.technologyTag ? `
            <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 font-medium">
              <span>Tech: <strong>${escapeHtml(filters.technologyTag)}</strong></span>
              <button id="clear-tech-filter-btn" class="hover:text-blue-950 dark:hover:text-white">&times;</button>
            </span>
          ` : ''}

          ${(filters.searchQuery || filters.status !== 'All' || filters.certificate !== 'All' || filters.courseLevel !== 'All' || filters.technologyTag) ? `
            <button
              id="reset-all-filters-btn"
              class="text-blue-600 dark:text-blue-400 hover:underline font-semibold flex items-center gap-1 ml-2"
            >
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
              Reset filters
            </button>
          ` : ''}
        </div>

        <div class="text-slate-400 dark:text-slate-500 text-[11px] font-mono">
          Click any technology pill on course cards to filter
        </div>
      </div>

    </div>
  `;

  // Attach Event Handlers
  wireFilterEvents(container);
}

function wireFilterEvents(container) {
  // Search Input with Debounce
  const searchInput = container.querySelector('#tracker-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      clearTimeout(debounceTimeout);
      debounceTimeout = setTimeout(() => {
        trackerState.setSearchQuery(e.target.value);
      }, 250);
    });
  }

  const clearSearchBtn = container.querySelector('#clear-search-btn');
  if (clearSearchBtn) {
    clearSearchBtn.addEventListener('click', () => {
      trackerState.setSearchQuery('');
    });
  }

  // Course Level Filter Buttons
  container.querySelectorAll('.level-filter-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      trackerState.setCourseLevelFilter(btn.dataset.level);
    });
  });

  // Sort Dropdown
  const sortSelect = container.querySelector('#tracker-sort-select');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      trackerState.setSortBy(e.target.value);
    });
  }

  // View Mode Switchers
  const gridBtn = container.querySelector('#view-mode-grid');
  const tableBtn = container.querySelector('#view-mode-table');
  const timelineBtn = container.querySelector('#view-mode-timeline');

  if (gridBtn) gridBtn.addEventListener('click', () => trackerState.setViewMode('grid'));
  if (tableBtn) tableBtn.addEventListener('click', () => trackerState.setViewMode('table'));
  if (timelineBtn) timelineBtn.addEventListener('click', () => trackerState.setViewMode('timeline'));

  // Status Tabs
  container.querySelectorAll('.status-tab-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      trackerState.setStatusFilter(btn.dataset.status);
    });
  });

  // Track Pills
  container.querySelectorAll('.track-pill-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      trackerState.setCertificateFilter(btn.dataset.cert);
    });
  });

  // Clear specific tech filter
  const clearTechBtn = container.querySelector('#clear-tech-filter-btn');
  if (clearTechBtn) {
    clearTechBtn.addEventListener('click', () => {
      trackerState.setTechnologyFilter(null);
    });
  }

  // Reset All Filters
  const resetBtn = container.querySelector('#reset-all-filters-btn');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      trackerState.resetAllFilters();
    });
  }
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
