/**
 * BYU-Idaho Degree Tracker - Detail Modal / Drawer Component
 * Accessible dialog displaying in-depth course information, completion dates,
 * competencies, equivalencies, and syllabus links.
 */

import { trackerState } from '../state.js';
import { getGradeBadgeStyles, getCertificateColor } from './course-card.js';

let activeKeyDownHandler = null;

/**
 * Renders or hides the modal based on state.selectedCourse
 * @param {HTMLElement} modalContainer
 * @param {import('../types').Course|null} course
 */
export function renderCourseModal(modalContainer, course) {
  if (!modalContainer) return;

  if (!course) {
    modalContainer.innerHTML = '';
    modalContainer.classList.add('hidden');
    document.body.style.overflow = '';
    if (activeKeyDownHandler) {
      document.removeEventListener('keydown', activeKeyDownHandler);
      activeKeyDownHandler = null;
    }
    return;
  }

  // Prevent background scrolling
  document.body.style.overflow = 'hidden';

  const gradeBadge = getGradeBadgeStyles(course.grade, course.status);
  const certColor = getCertificateColor(course.certificate);
  const isUpper = course.courseLevel === 'Upper Division';

  modalContainer.classList.remove('hidden');
  modalContainer.innerHTML = `
    <div
      class="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-course-title"
    >
      <!-- Backdrop with blur -->
      <div id="modal-backdrop" class="fixed inset-0 bg-slate-950/70 backdrop-blur-sm transition-opacity"></div>

      <!-- Modal Card Container -->
      <div class="relative bg-white dark:bg-slate-800 rounded-3xl max-w-2xl w-full shadow-2xl border border-slate-200 dark:border-slate-700/80 overflow-hidden transform transition-all z-10 my-8">
        
        <!-- Header Banner with BYU Navy Accent -->
        <div class="bg-gradient-to-r from-blue-900 to-indigo-900 text-white px-6 py-5 relative">
          <div class="flex items-start justify-between gap-4">
            <div>
              <div class="flex flex-wrap items-center gap-2 mb-1.5">
                <span class="font-mono text-xs font-bold px-2.5 py-0.5 rounded bg-white/20 text-white backdrop-blur-sm">
                  ${course.subject} ${course.number} (${course.code})
                </span>
                <span class="text-[11px] font-semibold px-2 py-0.5 rounded bg-amber-400 text-slate-950">
                  ${isUpper ? 'Upper Division (300-400)' : 'Lower Division (100-200)'}
                </span>
                <span class="text-[11px] font-medium text-blue-200">
                  ${course.term}
                </span>
              </div>
              <h2 id="modal-course-title" class="text-xl sm:text-2xl font-black text-white leading-tight">
                ${escapeHtml(course.title)}
              </h2>
            </div>

            <!-- Close Icon Button -->
            <button
              id="modal-close-btn"
              class="text-white/80 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Close course details"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
          </div>
        </div>

        <!-- Body Content -->
        <div class="p-6 space-y-6 max-h-[calc(85vh-160px)] overflow-y-auto">
          
          <!-- Key Metrics Grid -->
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
            <!-- Credits -->
            <div class="bg-slate-50 dark:bg-slate-900/60 p-3 rounded-xl border border-slate-200/80 dark:border-slate-700/60">
              <span class="text-[10px] uppercase font-bold text-slate-400 block mb-0.5">Credits</span>
              <span class="text-base font-bold text-slate-900 dark:text-white">
                ${course.creditsEarned} <span class="text-xs font-normal text-slate-500">/ ${course.credits}</span>
              </span>
            </div>

            <!-- Grade / Mark -->
            <div class="bg-slate-50 dark:bg-slate-900/60 p-3 rounded-xl border border-slate-200/80 dark:border-slate-700/60">
              <span class="text-[10px] uppercase font-bold text-slate-400 block mb-0.5">Final Grade</span>
              <span class="inline-block font-bold text-sm px-2 py-0.5 rounded ${gradeBadge.bg}">
                ${course.grade || 'In Progress'}
              </span>
            </div>

            <!-- Completion Date -->
            <div class="bg-slate-50 dark:bg-slate-900/60 p-3 rounded-xl border border-slate-200/80 dark:border-slate-700/60">
              <span class="text-[10px] uppercase font-bold text-slate-400 block mb-0.5">Completion Date</span>
              <span class="text-xs font-semibold text-slate-800 dark:text-slate-200">
                ${course.courseCompletionDate || (course.status === 'Current' ? 'Target: Oct 2026' : 'Target: Dec 2026')}
              </span>
            </div>

            <!-- Status -->
            <div class="bg-slate-50 dark:bg-slate-900/60 p-3 rounded-xl border border-slate-200/80 dark:border-slate-700/60">
              <span class="text-[10px] uppercase font-bold text-slate-400 block mb-0.5">Status</span>
              <span class="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5 mt-1">
                <span class="w-2 h-2 rounded-full ${course.status === 'Complete' || course.status === 'Fulfilled' ? 'bg-emerald-500' : course.status === 'Current' ? 'bg-blue-500 animate-pulse' : 'bg-slate-400'}"></span>
                ${course.status}
              </span>
            </div>
          </div>

          <!-- Academic Certificate Track -->
          <div>
            <h4 class="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Academic Pathway & Certificate</h4>
            <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border ${certColor} text-xs font-semibold">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/></svg>
              <span>${escapeHtml(course.certificate || 'General Bachelor Requirements')}</span>
            </div>
          </div>

          <!-- Detailed Course Description -->
          <div>
            <h4 class="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Description & Syllabus Overview</h4>
            <p class="text-sm text-slate-700 dark:text-slate-300 leading-relaxed bg-slate-50 dark:bg-slate-900/40 p-4 rounded-xl border border-slate-200/70 dark:border-slate-700/60">
              ${escapeHtml(course.description || 'No detailed syllabus text provided for this course.')}
            </p>
          </div>

          <!-- Technology & Competencies -->
          ${course.technology && course.technology.length > 0 ? `
            <div>
              <h4 class="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Competencies & Tech Stack</h4>
              <div class="flex flex-wrap gap-1.5">
                ${course.technology
                  .map(
                    (tech) => `
                  <button
                    class="modal-tech-pill px-3 py-1 rounded-lg text-xs font-medium bg-slate-100 hover:bg-blue-100 dark:bg-slate-700/60 dark:hover:bg-blue-900/40 text-slate-800 dark:text-slate-200 hover:text-blue-700 dark:hover:text-blue-300 transition-colors border border-slate-200 dark:border-slate-700 focus:outline-none"
                    data-tech="${escapeHtml(tech)}"
                    title="Filter main tracker by ${escapeHtml(tech)}"
                  >
                    ${escapeHtml(tech)}
                  </button>
                `
                  )
                  .join('')}
              </div>
            </div>
          ` : ''}

          <!-- Equivalency & Academic Standing Note -->
          <div class="p-3.5 rounded-xl bg-blue-50/70 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800/60 text-xs text-blue-900 dark:text-blue-300 flex items-start gap-2.5">
            <svg class="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            <div class="space-y-1">
              <p class="font-semibold">BYU-Idaho Academic Standing Record</p>
              <p class="text-blue-800 dark:text-blue-400">
                ${course.status === 'Current'
                  ? 'Currently enrolled in 2026 Block 5. Progress actively monitored toward term graduation.'
                  : course.grade === 'TR' || course.grade === 'Pass'
                  ? 'Credit fulfilled without impacting letter-grade GPA calculation. Verified on degree transcript.'
                  : 'Fulfills degree requirement with evaluated quality points.'}
              </p>
            </div>
          </div>

        </div>

        <!-- Modal Footer Actions -->
        <div class="p-4 px-6 bg-slate-50 dark:bg-slate-900/60 border-t border-slate-200 dark:border-slate-700/70 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div class="text-slate-500 dark:text-slate-400 font-mono text-[11px]">
            Press <kbd class="px-1.5 py-0.5 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded">Esc</kbd> to close
          </div>

          <div class="flex items-center gap-2">
            <button
              id="modal-cancel-btn"
              class="px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              Close
            </button>

            ${course.courselink ? `
              <a
                href="${course.courselink}"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold shadow-sm transition-all"
              >
                <span>Launch Course Site</span>
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
              </a>
            ` : ''}
          </div>
        </div>

      </div>
    </div>
  `;

  // Attach Close Events
  const closeModal = () => trackerState.clearSelectedCourse();

  const closeBtn = modalContainer.querySelector('#modal-close-btn');
  const cancelBtn = modalContainer.querySelector('#modal-cancel-btn');
  const backdrop = modalContainer.querySelector('#modal-backdrop');

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (cancelBtn) cancelBtn.addEventListener('click', closeModal);
  if (backdrop) backdrop.addEventListener('click', closeModal);

  // Keyboard Escape listener
  activeKeyDownHandler = (e) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  };
  document.addEventListener('keydown', activeKeyDownHandler);

  // Tech pill click inside modal filters tracker and closes modal
  modalContainer.querySelectorAll('.modal-tech-pill').forEach((btn) => {
    btn.addEventListener('click', () => {
      trackerState.setTechnologyFilter(btn.dataset.tech);
      closeModal();
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
