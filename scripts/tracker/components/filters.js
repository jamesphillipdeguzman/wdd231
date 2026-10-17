/**
 * BYU-Idaho Degree Tracker - Filter Controls Component
 * Provides debounced search bar, status tabs, certificate pills, level toggles,
 * sort controls, and view mode switchers.
 *
 * Scoped DOM updates ensure the search input is never re-rendered while typing,
 * preventing premature focus loss and cursor position resets.
 */

import { trackerState } from '../state.js';

let debounceTimeout = null;

const statusOptions = [
  { label: 'All Courses', value: 'All' },
  { label: 'Completed / Fulfilled', value: 'Completed' },
  { label: 'In Progress (Current)', value: 'Current' },
  { label: 'Scheduled / Upcoming', value: 'Scheduled' },
];

const trackPills = [
  { label: 'All Tracks', value: 'All' },
  { label: 'PathwayConnect', value: 'Pathway Connect' },
  { label: 'Web & Computer Programming', value: 'Web and Computer Programming' },
  { label: 'Web Development', value: 'Web Development' },
  { label: 'Software Development', value: 'Software Development' },
  { label: 'General Education', value: 'General Education' },
  { label: 'Religion', value: 'Religion' },
];

/**
 * Mounts or incrementally updates the Filter Controls bar without destroying input focus.
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

  const searchInput = container.querySelector('#tracker-search-input');

  // 1. Initial Mount: If not yet built, construct HTML template and bind events
  if (!searchInput) {
    mountFilterTemplate(container, filters, totalCount, filteredCount);
    wireFilterEvents(container);
    return;
  }

  // 2. Incremental Update: Update state indicators WITHOUT touching the search input DOM
  updateFilterStateIndicators(container, filters, totalCount, filteredCount);
}

/**
 * Constructs the base filter scaffolding (rendered once)
 */
function mountFilterTemplate(container, filters, totalCount, filteredCount) {
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
            class="w-full pl-10 pr-10 py-2.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            aria-label="Search courses by code, title, or technology"
            autocomplete="off"
            spellcheck="false"
          />
          <button
            type="button"
            id="clear-search-btn"
            class="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors focus:outline-none ${filters.searchQuery ? '' : 'hidden'}"
            aria-label="Clear search input"
            title="Clear search"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>

        <div class="flex flex-wrap items-center gap-2.5">
          <!-- Course Level Selector (Lower vs Upper Division) -->
          <div class="inline-flex p-1 bg-slate-100 dark:bg-slate-900 rounded-xl text-xs font-medium border border-slate-200/60 dark:border-slate-700/60" role="group" aria-label="Course Level">
            <button
              type="button"
              class="level-filter-btn px-3 py-1.5 rounded-lg transition-all ${filters.courseLevel === 'All' ? 'bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-sm font-semibold' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}"
              data-level="All"
            >
              All Levels
            </button>
            <button
              type="button"
              class="level-filter-btn px-3 py-1.5 rounded-lg transition-all ${filters.courseLevel === 'Lower Division' ? 'bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-sm font-semibold' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}"
              data-level="Lower Division"
            >
              Lower Division (100-200)
            </button>
            <button
              type="button"
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
              type="button"
              id="view-mode-grid"
              class="px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all ${filters.viewMode === 'grid' ? 'bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-sm font-semibold' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}"
              title="Grid Card View"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/></svg>
              <span>Cards</span>
            </button>
            <button
              type="button"
              id="view-mode-table"
              class="px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all ${filters.viewMode === 'table' ? 'bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-sm font-semibold' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}"
              title="Compact Table View"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/></svg>
              <span>Table</span>
            </button>
            <button
              type="button"
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
        <div id="status-tabs-group" class="flex flex-wrap gap-1.5">
          ${statusOptions
            .map(
              (opt) => `
            <button
              type="button"
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
        <div id="track-pills-group" class="flex flex-wrap gap-1.5">
          ${trackPills
            .map(
              (track) => `
            <button
              type="button"
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
          <span id="filter-results-count" class="text-slate-500 dark:text-slate-400">
            Showing <strong class="text-slate-900 dark:text-white font-bold">${filteredCount}</strong> of ${totalCount} courses
          </span>

          <span id="active-tech-pill-container"></span>
          <span id="reset-filters-container"></span>
        </div>

        <div class="text-slate-400 dark:text-slate-500 text-[11px] font-mono">
          Click any technology pill on course cards to filter
        </div>
      </div>

    </div>
  `;
}

/**
 * Incrementally updates filter UI elements without touching search input focus
 */
function updateFilterStateIndicators(container, filters, totalCount, filteredCount) {
  // 1. Sync search input value ONLY if the user is not actively typing in it
  const searchInput = container.querySelector('#tracker-search-input');
  if (searchInput && document.activeElement !== searchInput) {
    if (searchInput.value !== filters.searchQuery) {
      searchInput.value = filters.searchQuery;
    }
  }

  // 2. Toggle custom Clear button visibility
  const clearBtn = container.querySelector('#clear-search-btn');
  if (clearBtn) {
    const hasValue = searchInput ? Boolean(searchInput.value.trim()) : Boolean(filters.searchQuery);
    clearBtn.classList.toggle('hidden', !hasValue);
  }

  // 3. Update Course Level active states
  container.querySelectorAll('.level-filter-btn').forEach((btn) => {
    const isActive = btn.dataset.level === filters.courseLevel;
    btn.className = `level-filter-btn px-3 py-1.5 rounded-lg transition-all ${
      isActive
        ? 'bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-sm font-semibold'
        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
    }`;
  });

  // 4. Update Sort Dropdown selection if changed externally
  const sortSelect = container.querySelector('#tracker-sort-select');
  if (sortSelect && sortSelect.value !== filters.sortBy) {
    sortSelect.value = filters.sortBy;
  }

  // 5. Update View Mode buttons
  const viewModes = ['grid', 'table', 'timeline'];
  viewModes.forEach((mode) => {
    const btn = container.querySelector(`#view-mode-${mode}`);
    if (btn) {
      const isActive = filters.viewMode === mode;
      btn.className = `px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all ${
        isActive
          ? 'bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-sm font-semibold'
          : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
      }`;
    }
  });

  // 6. Update Status Tabs
  container.querySelectorAll('.status-tab-btn').forEach((btn) => {
    const isActive = btn.dataset.status === filters.status;
    btn.className = `status-tab-btn px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
      isActive
        ? 'bg-blue-600 text-white shadow-sm font-semibold ring-2 ring-blue-600/30'
        : 'bg-slate-100 dark:bg-slate-700/60 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
    }`;
  });

  // 7. Update Track Pills
  container.querySelectorAll('.track-pill-btn').forEach((btn) => {
    const isActive = btn.dataset.cert === filters.certificate;
    btn.className = `track-pill-btn px-3 py-1 rounded-lg text-xs font-medium transition-all ${
      isActive
        ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
        : 'bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-500'
    }`;
  });

  // 8. Update Result Count Text
  const countEl = container.querySelector('#filter-results-count');
  if (countEl) {
    countEl.innerHTML = `Showing <strong class="text-slate-900 dark:text-white font-bold">${filteredCount}</strong> of ${totalCount} courses`;
  }

  // 9. Update Active Technology Filter Pill
  const techContainer = container.querySelector('#active-tech-pill-container');
  if (techContainer) {
    if (filters.technologyTag) {
      techContainer.innerHTML = `
        <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 font-medium">
          <span>Tech: <strong>${escapeHtml(filters.technologyTag)}</strong></span>
          <button type="button" id="clear-tech-filter-btn" class="hover:text-blue-950 dark:hover:text-white" aria-label="Clear technology filter">&times;</button>
        </span>
      `;
      const clearTechBtn = techContainer.querySelector('#clear-tech-filter-btn');
      if (clearTechBtn) {
        clearTechBtn.addEventListener('click', () => {
          trackerState.setTechnologyFilter(null);
        });
      }
    } else {
      techContainer.innerHTML = '';
    }
  }

  // 10. Update Reset All Filters Button
  const resetContainer = container.querySelector('#reset-filters-container');
  if (resetContainer) {
    const isFiltered = Boolean(
      (searchInput && searchInput.value.trim()) ||
      filters.searchQuery ||
      filters.status !== 'All' ||
      filters.certificate !== 'All' ||
      filters.courseLevel !== 'All' ||
      filters.technologyTag
    );

    if (isFiltered) {
      resetContainer.innerHTML = `
        <button
          type="button"
          id="reset-all-filters-btn"
          class="text-blue-600 dark:text-blue-400 hover:underline font-semibold flex items-center gap-1 ml-2"
        >
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
          Reset filters
        </button>
      `;
      const resetBtn = resetContainer.querySelector('#reset-all-filters-btn');
      if (resetBtn) {
        resetBtn.addEventListener('click', () => {
          trackerState.resetAllFilters();
        });
      }
    } else {
      resetContainer.innerHTML = '';
    }
  }
}

/**
 * Attaches event listeners to the static filter controls
 */
function wireFilterEvents(container) {
  const searchInput = container.querySelector('#tracker-search-input');
  const clearSearchBtn = container.querySelector('#clear-search-btn');

  // Debounced Search Input (280ms)
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const value = e.target.value;

      // Instantly toggle clear button visibility without waiting for debounce
      if (clearSearchBtn) {
        clearSearchBtn.classList.toggle('hidden', !value.trim());
      }

      clearTimeout(debounceTimeout);
      debounceTimeout = setTimeout(() => {
        trackerState.setSearchQuery(value);
      }, 280);
    });

    // Handle pressing Enter to search immediately
    searchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        clearTimeout(debounceTimeout);
        trackerState.setSearchQuery(searchInput.value);
      }
    });
  }

  // Clear Search Button
  if (clearSearchBtn) {
    clearSearchBtn.addEventListener('click', () => {
      clearTimeout(debounceTimeout);
      if (searchInput) {
        searchInput.value = '';
        searchInput.focus();
      }
      clearSearchBtn.classList.add('hidden');
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
