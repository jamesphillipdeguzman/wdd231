/**
 * BYU-Idaho Degree Tracker - Course Card Component (Grid View)
 * Displays interactive course cards with pills, expandable description,
 * tech stack tags, direct link footer, and detail modal triggers.
 */

import { trackerState } from '../state.js';

/**
 * Returns color-coded Tailwind classes based on grade and status
 * @param {string|null} grade
 * @param {string} status
 */
export function getGradeBadgeStyles(grade, status) {
  if (status === 'Current') {
    return {
      bg: 'bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300 border border-blue-300 dark:border-blue-700',
      label: 'Current Block',
      icon: 'active',
    };
  }

  if (status === 'Scheduled') {
    return {
      bg: 'bg-slate-100 dark:bg-slate-700/60 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-600',
      label: 'Scheduled',
      icon: 'clock',
    };
  }

  if (!grade) {
    return {
      bg: 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-600',
      label: 'Pending',
      icon: 'pending',
    };
  }

  const clean = grade.trim();
  if (clean === 'Pass' || clean === 'P' || clean === 'TR' || clean === 'CR') {
    return {
      bg: 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700',
      label: clean === 'TR' ? 'Transfer Credit' : 'Pass (Credit)',
      icon: 'check',
    };
  }

  if (clean.startsWith('A')) {
    return {
      bg: 'bg-emerald-100 dark:bg-emerald-950/70 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700 font-bold',
      label: `Grade: ${clean}`,
      icon: 'check',
    };
  }

  if (clean.startsWith('B')) {
    return {
      bg: 'bg-teal-100 dark:bg-teal-950/70 text-teal-800 dark:text-teal-300 border border-teal-300 dark:border-teal-700 font-bold',
      label: `Grade: ${clean}`,
      icon: 'check',
    };
  }

  return {
    bg: 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700',
    label: `Grade: ${clean}`,
    icon: 'info',
  };
}

/**
 * Returns certificate badge color theme
 * @param {string} cert
 */
export function getCertificateColor(cert) {
  if (!cert) return 'bg-slate-100 text-slate-800 dark:bg-slate-700 dark:text-slate-300';
  const c = cert.toLowerCase();
  if (c.includes('web and computer') || c.includes('web & computer')) {
    return 'bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 border-blue-200 dark:border-blue-800/60';
  }
  if (c.includes('web development')) {
    return 'bg-indigo-50 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800/60';
  }
  if (c.includes('software development')) {
    return 'bg-amber-50 text-amber-800 dark:bg-amber-950/40 dark:text-amber-300 border-amber-200 dark:border-amber-800/60';
  }
  if (c.includes('religion')) {
    return 'bg-purple-50 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 border-purple-200 dark:border-purple-800/60';
  }
  if (c.includes('general education')) {
    return 'bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800/60';
  }
  if (c.includes('pathway')) {
    return 'bg-cyan-50 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300 border-cyan-200 dark:border-cyan-800/60';
  }
  return 'bg-slate-50 text-slate-700 dark:bg-slate-800 dark:text-slate-300 border-slate-200 dark:border-slate-700';
}

/**
 * Renders the Grid of Course Cards into the container
 * @param {HTMLElement} container
 * @param {Array<import('../types').Course>} courses
 */
export function renderCourseGrid(container, courses) {
  if (!container) return;

  if (courses.length === 0) {
    container.innerHTML = `
      <div class="col-span-full bg-white dark:bg-slate-800/90 rounded-2xl p-12 text-center border border-dashed border-slate-300 dark:border-slate-700">
        <svg class="w-12 h-12 text-slate-400 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
        <h4 class="text-base font-bold text-slate-800 dark:text-slate-200">No courses match your filter criteria</h4>
        <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">Try resetting filters or searching for another subject or skill.</p>
        <button id="empty-reset-btn" class="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-semibold shadow-sm transition-all">
          Clear All Filters
        </button>
      </div>
    `;

    const resetBtn = container.querySelector('#empty-reset-btn');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => trackerState.resetAllFilters());
    }
    return;
  }

  container.innerHTML = `
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      ${courses
        .map((course) => {
          const gradeBadge = getGradeBadgeStyles(course.grade, course.status);
          const certBadgeClass = getCertificateColor(course.certificate);
          const isUpper = course.courseLevel === 'Upper Division';
          const cardId = `card-${course.code.replace(/[^a-zA-Z0-9]/g, '_')}`;

          return `
            <div
              id="${cardId}"
              class="course-card bg-white dark:bg-slate-800/90 rounded-2xl p-5 shadow-sm border border-slate-200/90 dark:border-slate-700/60 hover:shadow-lg hover:border-blue-400/60 dark:hover:border-blue-500/60 transition-all flex flex-col justify-between group relative"
            >
              <!-- Card Header -->
              <div>
                <div class="flex items-start justify-between gap-2 mb-3">
                  <div class="flex flex-wrap items-center gap-1.5">
                    <!-- Subject & Number Pill -->
                    <span class="inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-mono font-bold bg-slate-900 text-white dark:bg-slate-700 dark:text-slate-100 shadow-sm">
                      ${course.subject} ${course.number}
                    </span>

                    <!-- Division Level Pill -->
                    <span class="text-[10px] uppercase font-semibold px-2 py-0.5 rounded ${isUpper ? 'bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-300' : 'bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300'}">
                      ${isUpper ? 'Upper Div' : 'Lower Div'}
                    </span>
                  </div>

                  <div class="flex items-center gap-1.5 shrink-0">
                    <!-- Credits Badge -->
                    <span class="text-xs font-bold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-700/80 px-2 py-1 rounded-lg">
                      ${course.credits} cr
                    </span>

                    <!-- Grade / Status Pill -->
                    <span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs ${gradeBadge.bg}">
                      ${course.status === 'Current' ? '<span class="w-2 h-2 rounded-full bg-blue-500 animate-ping"></span>' : ''}
                      ${gradeBadge.label}
                    </span>
                  </div>
                </div>

                <!-- Course Title & Term -->
                <h3
                  class="text-base font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors cursor-pointer card-title-trigger leading-snug"
                  data-code="${course.code}"
                  title="Click to view details"
                >
                  ${escapeHtml(course.title)}
                </h3>

                <!-- Term and Certificate Tag -->
                <div class="flex flex-wrap items-center gap-1.5 mt-2 mb-3">
                  <span class="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-900/80 px-2 py-0.5 rounded-md border border-slate-200 dark:border-slate-700">
                    <svg class="w-3 h-3 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                    ${course.term}
                  </span>

                  ${course.certificate ? `
                    <span class="text-[11px] font-medium px-2 py-0.5 rounded-md border ${certBadgeClass} truncate max-w-[190px]" title="${escapeHtml(course.certificate)}">
                      ${escapeHtml(course.certificate)}
                    </span>
                  ` : ''}
                </div>

                <!-- Course Description (Expandable Accordion) -->
                <div class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed my-2">
                  <p class="description-text line-clamp-2 transition-all">
                    ${escapeHtml(course.description || 'No detailed description available for this course.')}
                  </p>
                  ${(course.description && course.description.length > 90) ? `
                    <button class="toggle-desc-btn text-[11px] text-blue-600 dark:text-blue-400 hover:underline font-semibold mt-1 inline-flex items-center gap-0.5 focus:outline-none">
                      <span class="desc-btn-text">Read more</span>
                      <svg class="w-3 h-3 transform transition-transform desc-chevron" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
                    </button>
                  ` : ''}
                </div>

                <!-- Tech Stack Badges -->
                ${course.technology && course.technology.length > 0 ? `
                  <div class="mt-3 pt-3 border-t border-slate-100 dark:border-slate-700/60">
                    <span class="text-[10px] uppercase font-bold text-slate-400 tracking-wider block mb-1.5">Tech & Competencies</span>
                    <div class="flex flex-wrap gap-1">
                      ${course.technology
                        .map(
                          (tech) => `
                        <button
                          class="tech-pill-btn text-[11px] font-medium px-2 py-0.5 rounded-md bg-slate-100 hover:bg-blue-100 dark:bg-slate-700/60 dark:hover:bg-blue-900/40 text-slate-700 dark:text-slate-300 hover:text-blue-700 dark:hover:text-blue-300 transition-colors border border-transparent hover:border-blue-300 dark:hover:border-blue-700 focus:outline-none"
                          data-tech="${escapeHtml(tech)}"
                          title="Filter by ${escapeHtml(tech)}"
                        >
                          ${escapeHtml(tech)}
                        </button>
                      `
                        )
                        .join('')}
                    </div>
                  </div>
                ` : ''}
              </div>

              <!-- Action Footer -->
              <div class="mt-4 pt-3 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between text-xs">
                <!-- Details Trigger -->
                <button
                  class="card-details-btn inline-flex items-center gap-1.5 font-semibold text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus:outline-none"
                  data-code="${course.code}"
                >
                  <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                  <span>View Details</span>
                </button>

                <!-- Direct Course Site Link -->
                ${course.courselink ? `
                  <a
                    href="${course.courselink}"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex items-center gap-1 font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors bg-blue-50 dark:bg-blue-950/40 px-2.5 py-1 rounded-lg border border-blue-200 dark:border-blue-800"
                    title="Launch official course site / repo"
                  >
                    <span>Course Site</span>
                    <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                  </a>
                ` : `
                  <span class="text-[11px] text-slate-400 dark:text-slate-500 italic">No public link</span>
                `}
              </div>
            </div>
          `;
        })
        .join('')}
    </div>
  `;

  // Wire Card Interactions
  wireCardEvents(container, courses);
}

function wireCardEvents(container, courses) {
  // Expand/collapse description accordion
  container.querySelectorAll('.toggle-desc-btn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const parent = btn.closest('.course-card');
      const textEl = parent.querySelector('.description-text');
      const label = btn.querySelector('.desc-btn-text');
      const chevron = btn.querySelector('.desc-chevron');

      if (textEl.classList.contains('line-clamp-2')) {
        textEl.classList.remove('line-clamp-2');
        label.textContent = 'Show less';
        chevron.classList.add('rotate-180');
      } else {
        textEl.classList.add('line-clamp-2');
        label.textContent = 'Read more';
        chevron.classList.remove('rotate-180');
      }
    });
  });

  // Tech tag click to filter
  container.querySelectorAll('.tech-pill-btn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      trackerState.setTechnologyFilter(btn.dataset.tech);
    });
  });

  // Click card title or View Details button to open modal
  const openModal = (code) => {
    const found = courses.find((c) => c.code === code);
    if (found) {
      trackerState.setSelectedCourse(found);
    }
  };

  container.querySelectorAll('.card-title-trigger, .card-details-btn').forEach((el) => {
    el.addEventListener('click', () => {
      openModal(el.dataset.code);
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
