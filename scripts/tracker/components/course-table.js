/**
 * BYU-Idaho Degree Tracker - Compact Data Table View Component
 * Accessible, sortable data table providing high-density academic inspection.
 */

import { trackerState } from '../state.js';
import { getGradeBadgeStyles, getCertificateColor } from './course-card.js';

/**
 * Renders the Compact Data Table View
 * @param {HTMLElement} container
 * @param {Array<import('../types').Course>} courses
 * @param {string} currentSortBy
 */
export function renderCourseTable(container, courses, currentSortBy) {
  if (!container) return;

  if (courses.length === 0) {
    container.innerHTML = `
      <div class="bg-white dark:bg-slate-800/90 rounded-2xl p-12 text-center border border-dashed border-slate-300 dark:border-slate-700">
        <h4 class="text-base font-bold text-slate-800 dark:text-slate-200">No courses match your filter criteria</h4>
        <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">Try resetting filters to show academic entries.</p>
        <button id="table-empty-reset-btn" class="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-semibold shadow-sm transition-all">
          Reset All Filters
        </button>
      </div>
    `;
    const resetBtn = container.querySelector('#table-empty-reset-btn');
    if (resetBtn) resetBtn.addEventListener('click', () => trackerState.resetAllFilters());
    return;
  }

  const renderSortIndicator = (key) => {
    if (currentSortBy.startsWith(key)) {
      const isDesc = currentSortBy.endsWith('desc');
      return `<svg class="w-3.5 h-3.5 ml-1 text-blue-600 dark:text-blue-400 inline-block transform ${isDesc ? 'rotate-180' : ''}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"/></svg>`;
    }
    return `<svg class="w-3.5 h-3.5 ml-1 text-slate-300 dark:text-slate-600 inline-block opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"/></svg>`;
  };

  container.innerHTML = `
    <div class="bg-white dark:bg-slate-800/90 rounded-2xl shadow-sm border border-slate-200/90 dark:border-slate-700/60 overflow-hidden">
      <div class="overflow-x-auto">
        <table class="w-full text-left border-collapse text-xs" role="table" aria-label="Course list table">
          <thead class="bg-slate-50 dark:bg-slate-900/60 text-slate-600 dark:text-slate-400 font-semibold border-b border-slate-200 dark:border-slate-700/80 uppercase tracking-wider text-[11px]">
            <tr>
              <th scope="col" class="py-3.5 px-4 cursor-pointer group hover:text-blue-600 table-sort-th" data-sort="code">
                <div class="flex items-center">
                  <span>Code</span>
                  ${renderSortIndicator('code')}
                </div>
              </th>
              <th scope="col" class="py-3.5 px-4 min-w-[220px]">Course Title & Track</th>
              <th scope="col" class="py-3.5 px-3">Level</th>
              <th scope="col" class="py-3.5 px-3 text-center cursor-pointer group hover:text-blue-600 table-sort-th" data-sort="credits">
                <div class="flex items-center justify-center">
                  <span>Credits</span>
                  ${renderSortIndicator('credits')}
                </div>
              </th>
              <th scope="col" class="py-3.5 px-4 cursor-pointer group hover:text-blue-600 table-sort-th" data-sort="term">
                <div class="flex items-center">
                  <span>Term</span>
                  ${renderSortIndicator('term')}
                </div>
              </th>
              <th scope="col" class="py-3.5 px-3 text-center cursor-pointer group hover:text-blue-600 table-sort-th" data-sort="grade">
                <div class="flex items-center justify-center">
                  <span>Grade</span>
                  ${renderSortIndicator('grade')}
                </div>
              </th>
              <th scope="col" class="py-3.5 px-4 text-center">Status</th>
              <th scope="col" class="py-3.5 px-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-100 dark:divide-slate-700/60 text-slate-700 dark:text-slate-300">
            ${courses
              .map((course) => {
                const gradeBadge = getGradeBadgeStyles(course.grade, course.status);
                const certColor = getCertificateColor(course.certificate);
                const isUpper = course.courseLevel === 'Upper Division';

                return `
                  <tr class="hover:bg-blue-50/40 dark:hover:bg-slate-700/40 transition-colors group">
                    <!-- Code -->
                    <td class="py-3.5 px-4 font-mono font-bold text-slate-900 dark:text-white whitespace-nowrap">
                      ${course.subject} ${course.number}
                    </td>

                    <!-- Title & Certificate -->
                    <td class="py-3.5 px-4">
                      <div class="font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 cursor-pointer table-row-modal-trigger transition-colors" data-code="${course.code}">
                        ${escapeHtml(course.title)}
                      </div>
                      ${course.certificate ? `
                        <span class="inline-block mt-1 text-[10px] font-medium px-2 py-0.5 rounded border ${certColor}">
                          ${escapeHtml(course.certificate)}
                        </span>
                      ` : ''}
                    </td>

                    <!-- Level -->
                    <td class="py-3.5 px-3 whitespace-nowrap">
                      <span class="text-[10px] font-semibold px-2 py-0.5 rounded ${isUpper ? 'bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-300' : 'bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300'}">
                        ${isUpper ? 'Upper' : 'Lower'}
                      </span>
                    </td>

                    <!-- Credits -->
                    <td class="py-3.5 px-3 text-center whitespace-nowrap font-bold text-slate-800 dark:text-slate-200">
                      ${course.credits}
                    </td>

                    <!-- Term -->
                    <td class="py-3.5 px-4 whitespace-nowrap text-slate-600 dark:text-slate-400 font-medium">
                      ${course.term}
                    </td>

                    <!-- Grade -->
                    <td class="py-3.5 px-3 text-center whitespace-nowrap">
                      <span class="inline-block px-2.5 py-0.5 rounded text-[11px] ${gradeBadge.bg}">
                        ${course.grade || (course.status === 'Current' ? 'In Prog' : '—')}
                      </span>
                    </td>

                    <!-- Status -->
                    <td class="py-3.5 px-4 text-center whitespace-nowrap">
                      <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold ${
                        course.status === 'Complete' || course.status === 'Fulfilled'
                          ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300'
                          : course.status === 'Current'
                          ? 'bg-blue-50 text-blue-700 dark:bg-blue-950/50 dark:text-blue-300'
                          : 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400'
                      }">
                        <span class="w-1.5 h-1.5 rounded-full ${
                          course.status === 'Complete' || course.status === 'Fulfilled'
                            ? 'bg-emerald-500'
                            : course.status === 'Current'
                            ? 'bg-blue-500 animate-pulse'
                            : 'bg-slate-400'
                        }"></span>
                        ${course.status}
                      </span>
                    </td>

                    <!-- Actions -->
                    <td class="py-3.5 px-4 text-right whitespace-nowrap space-x-2">
                      <button
                        class="table-row-modal-trigger font-semibold text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                        data-code="${course.code}"
                        title="View Course Details"
                        aria-label="View Details for ${course.subject} ${course.number}"
                      >
                        <svg class="w-4 h-4 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
                      </button>

                      ${course.courselink ? `
                        <a
                          href="${course.courselink}"
                          target="_blank"
                          rel="noopener noreferrer"
                          class="font-semibold text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 p-1.5 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/40 inline-block transition-colors"
                          title="Open Course Website"
                          aria-label="Open Course Website for ${course.subject} ${course.number}"
                        >
                          <svg class="w-4 h-4 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                        </a>
                      ` : ''}
                    </td>
                  </tr>
                `;
              })
              .join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;

  // Attach Table Events
  container.querySelectorAll('.table-row-modal-trigger').forEach((el) => {
    el.addEventListener('click', () => {
      const code = el.dataset.code;
      const found = courses.find((c) => c.code === code);
      if (found) trackerState.setSelectedCourse(found);
    });
  });

  // Table header sorting
  container.querySelectorAll('.table-sort-th').forEach((th) => {
    th.addEventListener('click', () => {
      const key = th.dataset.sort;
      if (currentSortBy.startsWith(key)) {
        trackerState.setSortBy(currentSortBy.endsWith('asc') ? `${key}-desc` : `${key}-asc`);
      } else {
        trackerState.setSortBy(`${key}-asc`);
      }
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
