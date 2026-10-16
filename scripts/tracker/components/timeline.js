/**
 * BYU-Idaho Degree Tracker - Chronological Timeline / Term Roadmap View Component
 * Groups courses by academic term from 2023 Spring Block 1 to 2026 Block 6,
 * with visual status indicators for past, current, and upcoming terms.
 */

import { trackerState } from '../state.js';
import { getGradeBadgeStyles, getCertificateColor } from './course-card.js';

/**
 * Renders the Chronological Roadmap Timeline
 * @param {HTMLElement} container
 * @param {Array<import('../types').Course>} courses
 * @param {Array<string>} allTermsChronological
 */
export function renderTimelineRoadmap(container, courses, allTermsChronological) {
  if (!container) return;

  if (courses.length === 0) {
    container.innerHTML = `
      <div class="bg-white dark:bg-slate-800/90 rounded-2xl p-12 text-center border border-dashed border-slate-300 dark:border-slate-700">
        <h4 class="text-base font-bold text-slate-800 dark:text-slate-200">No courses match your filter criteria</h4>
        <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">Reset your filters to see the full academic roadmap.</p>
        <button id="timeline-empty-reset-btn" class="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-semibold shadow-sm transition-all">
          Reset All Filters
        </button>
      </div>
    `;
    const resetBtn = container.querySelector('#timeline-empty-reset-btn');
    if (resetBtn) resetBtn.addEventListener('click', () => trackerState.resetAllFilters());
    return;
  }

  // Group filtered courses by term
  const termMap = new Map();
  courses.forEach((c) => {
    const term = c.term || 'Unassigned Term';
    if (!termMap.has(term)) termMap.set(term, []);
    termMap.get(term).push(c);
  });

  // Sort terms based on defined chronological master list
  const orderedTerms = Array.from(termMap.keys()).sort((a, b) => {
    const idxA = allTermsChronological.indexOf(a);
    const idxB = allTermsChronological.indexOf(b);
    if (idxA === -1 && idxB === -1) return a.localeCompare(b);
    if (idxA === -1) return 1;
    if (idxB === -1) return -1;
    return idxA - idxB;
  });

  container.innerHTML = `
    <div class="relative pl-6 md:pl-10 space-y-10 before:absolute before:left-3 md:before:left-5 before:top-3 before:bottom-3 before:w-0.5 before:bg-slate-200 dark:before:bg-slate-700">
      ${orderedTerms
        .map((termName) => {
          const termCourses = termMap.get(termName);
          const termCredits = termCourses.reduce((sum, c) => sum + (c.credits || 0), 0);
          const termEarned = termCourses.reduce((sum, c) => sum + (c.creditsEarned || 0), 0);

          const hasCurrent = termCourses.some((c) => c.status === 'Current');
          const hasScheduled = termCourses.every((c) => c.status === 'Scheduled');
          const isCompleted = termCourses.every(
            (c) => c.completed || c.status === 'Complete' || c.status === 'Fulfilled'
          );

          let nodeStyle = {
            dot: 'bg-emerald-500 border-emerald-200 dark:border-emerald-900',
            badge: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 border-emerald-300 dark:border-emerald-800',
            label: 'Completed Term',
            icon: `<svg class="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/></svg>`,
          };

          if (hasCurrent) {
            nodeStyle = {
              dot: 'bg-blue-600 border-blue-200 dark:border-blue-900 animate-pulse ring-4 ring-blue-500/30',
              badge: 'bg-blue-100 text-blue-800 dark:bg-blue-950/60 dark:text-blue-300 border-blue-300 dark:border-blue-800 font-bold',
              label: 'Active Term (Current Block)',
              icon: `<span class="w-2 h-2 rounded-full bg-white"></span>`,
            };
          } else if (hasScheduled) {
            nodeStyle = {
              dot: 'bg-slate-400 border-slate-200 dark:border-slate-800',
              badge: 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 border-slate-300 dark:border-slate-700',
              label: 'Upcoming Block',
              icon: `<svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`,
            };
          } else if (termName.toLowerCase().includes('transfer')) {
            nodeStyle = {
              dot: 'bg-purple-600 border-purple-200 dark:border-purple-900',
              badge: 'bg-purple-100 text-purple-800 dark:bg-purple-950/60 dark:text-purple-300 border-purple-300 dark:border-purple-800',
              label: 'Transfer Credits',
              icon: `<svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/></svg>`,
            };
          }

          return `
            <div class="relative group">
              <!-- Timeline node circle -->
              <div class="absolute -left-[30px] md:-left-[46px] top-1.5 w-6 h-6 rounded-full ${nodeStyle.dot} border-2 flex items-center justify-center shadow-md">
                ${nodeStyle.icon}
              </div>

              <!-- Term Header Card -->
              <div class="bg-white dark:bg-slate-800/90 rounded-2xl p-5 shadow-sm border border-slate-200/90 dark:border-slate-700/60">
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-3 border-b border-slate-100 dark:border-slate-700/60">
                  <div class="flex items-center gap-2.5">
                    <h3 class="text-lg font-extrabold text-slate-900 dark:text-white tracking-tight">${termName}</h3>
                    <span class="text-[11px] px-2.5 py-0.5 rounded-full border ${nodeStyle.badge}">
                      ${nodeStyle.label}
                    </span>
                  </div>

                  <div class="flex items-center gap-3 text-xs text-slate-600 dark:text-slate-300">
                    <span class="bg-slate-50 dark:bg-slate-900 px-3 py-1 rounded-lg border border-slate-200 dark:border-slate-700 font-medium">
                      Credits: <strong class="text-slate-900 dark:text-white">${termEarned} earned</strong> / ${termCredits} total
                    </span>
                    <span class="text-slate-400 font-mono text-[11px]">${termCourses.length} course${termCourses.length > 1 ? 's' : ''}</span>
                  </div>
                </div>

                <!-- Courses in Term -->
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
                  ${termCourses
                    .map((course) => {
                      const gradeBadge = getGradeBadgeStyles(course.grade, course.status);
                      const certColor = getCertificateColor(course.certificate);

                      return `
                        <div class="bg-slate-50 dark:bg-slate-900/60 rounded-xl p-3.5 border border-slate-200/80 dark:border-slate-700/60 hover:border-blue-400 dark:hover:border-blue-500 transition-all flex flex-col justify-between group/course">
                          <div>
                            <div class="flex items-center justify-between gap-2 mb-2">
                              <span class="font-mono text-xs font-bold text-slate-900 dark:text-white px-2 py-0.5 rounded bg-white dark:bg-slate-800 shadow-xs border border-slate-200 dark:border-slate-700">
                                ${course.subject} ${course.number}
                              </span>
                              <span class="text-[11px] px-2 py-0.5 rounded ${gradeBadge.bg}">
                                ${gradeBadge.label}
                              </span>
                            </div>

                            <h4
                              class="text-xs font-bold text-slate-800 dark:text-slate-100 group-hover/course:text-blue-600 dark:group-hover/course:text-blue-400 cursor-pointer timeline-course-trigger leading-tight line-clamp-2"
                              data-code="${course.code}"
                            >
                              ${escapeHtml(course.title)}
                            </h4>

                            ${course.certificate ? `
                              <span class="inline-block mt-2 text-[10px] font-medium px-2 py-0.5 rounded border ${certColor} truncate max-w-full">
                                ${escapeHtml(course.certificate)}
                              </span>
                            ` : ''}
                          </div>

                          <div class="mt-3 pt-2.5 border-t border-slate-200/60 dark:border-slate-700/50 flex items-center justify-between text-[11px]">
                            <span class="text-slate-500 font-semibold">${course.credits} Credits</span>
                            <button
                              class="timeline-course-trigger text-blue-600 dark:text-blue-400 hover:underline font-semibold"
                              data-code="${course.code}"
                            >
                              Details &rarr;
                            </button>
                          </div>
                        </div>
                      `;
                    })
                    .join('')}
                </div>
              </div>
            </div>
          `;
        })
        .join('')}
    </div>
  `;

  // Attach modal trigger events
  container.querySelectorAll('.timeline-course-trigger').forEach((el) => {
    el.addEventListener('click', () => {
      const code = el.dataset.code;
      const found = courses.find((c) => c.code === code);
      if (found) trackerState.setSelectedCourse(found);
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
