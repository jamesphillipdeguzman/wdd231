/**
 * BYU-Idaho Degree Tracker - Hero Metrics Component
 * Visualizes total credits progress ring, cumulative GPA, quality points,
 * and credential milestone achievement badges.
 */

/**
 * Renders the Hero Metric Cards into the specified container element
 * @param {HTMLElement} container
 * @param {import('../types').DegreeProgressStats} stats
 * @param {Array<import('../types').CredentialMilestone>} milestones
 */
export function renderHeroMetrics(container, stats, milestones) {
  if (!container || !stats) return;

  const circumference = 2 * Math.PI * 44; // radius 44
  const progressOffset = circumference - (stats.completionPercentage / 100) * circumference;

  container.innerHTML = `
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
      
      <!-- Card 1: Total Credits & Degree Progress Ring -->
      <div class="bg-white dark:bg-slate-800/90 rounded-2xl p-5 shadow-sm border border-slate-200 dark:border-slate-700/60 transition-all hover:shadow-md flex flex-col justify-between">
        <div class="flex items-center justify-between mb-3">
          <div class="flex items-center space-x-2.5">
            <span class="p-2 rounded-xl bg-blue-50 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
              </svg>
            </span>
            <div>
              <p class="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Total Credits</p>
              <h3 class="text-xl font-bold text-slate-900 dark:text-white">${stats.totalEarnedCredits} <span class="text-xs font-normal text-slate-400 dark:text-slate-500">/ ${stats.totalRequiredCredits} req</span></h3>
            </div>
          </div>
          
          <!-- Circular Progress SVG -->
          <div class="relative w-16 h-16 flex items-center justify-center">
            <svg class="w-16 h-16 transform -rotate-90" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="44" class="stroke-slate-100 dark:stroke-slate-700" stroke-width="8" fill="transparent"/>
              <circle cx="50" cy="50" r="44" class="stroke-blue-600 dark:stroke-blue-500 transition-all duration-1000 ease-out" stroke-width="8" stroke-dasharray="${circumference}" stroke-dashoffset="${progressOffset}" stroke-linecap="round" fill="transparent"/>
            </svg>
            <span class="absolute text-xs font-bold text-slate-800 dark:text-slate-200">${stats.completionPercentage}%</span>
          </div>
        </div>

        <div class="space-y-1.5 pt-3 border-t border-slate-100 dark:border-slate-700/60 text-xs">
          <div class="flex justify-between text-slate-600 dark:text-slate-300">
            <span class="flex items-center gap-1.5">
              <span class="w-2 h-2 rounded-full bg-emerald-500"></span> Completed / Earned
            </span>
            <span class="font-semibold">${stats.totalEarnedCredits} cr</span>
          </div>
          <div class="flex justify-between text-slate-600 dark:text-slate-300">
            <span class="flex items-center gap-1.5">
              <span class="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span> In Progress (Active)
            </span>
            <span class="font-semibold text-blue-600 dark:text-blue-400">${stats.creditsInProgress} cr</span>
          </div>
          <div class="flex justify-between text-slate-500 dark:text-slate-400">
            <span class="flex items-center gap-1.5">
              <span class="w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-600"></span> Scheduled Final Block
            </span>
            <span class="font-semibold">${stats.creditsScheduled} cr</span>
          </div>
        </div>
      </div>

      <!-- Card 2: Cumulative GPA & Quality Points -->
      <div class="bg-white dark:bg-slate-800/90 rounded-2xl p-5 shadow-sm border border-slate-200 dark:border-slate-700/60 transition-all hover:shadow-md flex flex-col justify-between">
        <div class="flex items-start justify-between">
          <div class="flex items-center space-x-2.5">
            <span class="p-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
              </svg>
            </span>
            <div>
              <p class="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Cumulative GPA</p>
              <div class="flex items-baseline gap-2">
                <h3 class="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">${stats.cumulativeGpa.toFixed(2)}</h3>
                <span class="text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/30 px-2 py-0.5 rounded-full">
                  ${stats.academicStanding}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div class="space-y-1.5 pt-3 border-t border-slate-100 dark:border-slate-700/60 text-xs">
          <div class="flex justify-between text-slate-600 dark:text-slate-300">
            <span>Total Quality Points:</span>
            <span class="font-bold text-slate-900 dark:text-white">${stats.totalQualityPoints} pts</span>
          </div>
          <div class="flex justify-between text-slate-600 dark:text-slate-300">
            <span>Graded Credits Attempted:</span>
            <span class="font-semibold">${stats.gradedCreditsAttempted} cr</span>
          </div>
          <div class="flex justify-between text-slate-500 dark:text-slate-400">
            <span>Pass / Transfer (Non-GPA):</span>
            <span class="font-medium">${stats.nonGradedCreditsEarned} cr</span>
          </div>
        </div>
      </div>

      <!-- Card 3: Academic Distribution & Upper Division -->
      <div class="bg-white dark:bg-slate-800/90 rounded-2xl p-5 shadow-sm border border-slate-200 dark:border-slate-700/60 transition-all hover:shadow-md flex flex-col justify-between">
        <div class="flex items-center space-x-2.5 mb-2">
          <span class="p-2 rounded-xl bg-purple-50 dark:bg-purple-950/40 text-purple-600 dark:text-purple-400">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
            </svg>
          </span>
          <div>
            <p class="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Credit Breakdown</p>
            <h3 class="text-xl font-bold text-slate-900 dark:text-white">Distribution</h3>
          </div>
        </div>

        <div class="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-700/60 text-xs">
          <!-- Upper Division Progress -->
          <div>
            <div class="flex justify-between text-slate-700 dark:text-slate-300 mb-1">
              <span>Upper Division (300-400)</span>
              <span class="font-bold">${stats.upperDivisionCreditsEarned} / ${stats.upperDivisionCreditsRequired} cr</span>
            </div>
            <div class="w-full bg-slate-100 dark:bg-slate-700 rounded-full h-1.5 overflow-hidden">
              <div class="bg-purple-600 h-1.5 rounded-full" style="width: ${Math.min(100, (stats.upperDivisionCreditsEarned / stats.upperDivisionCreditsRequired) * 100)}%"></div>
            </div>
          </div>

          <div class="grid grid-cols-2 gap-2 pt-1 text-slate-600 dark:text-slate-300">
            <div class="bg-slate-50 dark:bg-slate-700/40 p-2 rounded-lg">
              <span class="text-[10px] uppercase text-slate-400 block font-semibold">Major CSE/WDD</span>
              <span class="text-sm font-bold text-slate-800 dark:text-slate-100">${stats.majorCreditsEarned} cr</span>
            </div>
            <div class="bg-slate-50 dark:bg-slate-700/40 p-2 rounded-lg">
              <span class="text-[10px] uppercase text-slate-400 block font-semibold">Religion & GE</span>
              <span class="text-sm font-bold text-slate-800 dark:text-slate-100">${stats.religionCreditsEarned + stats.generalEdCreditsEarned} cr</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Card 4: Credential Milestones Quick Summary -->
      <div class="bg-white dark:bg-slate-800/90 rounded-2xl p-5 shadow-sm border border-slate-200 dark:border-slate-700/60 transition-all hover:shadow-md flex flex-col justify-between">
        <div class="flex items-center space-x-2.5 mb-2">
          <span class="p-2 rounded-xl bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
            </svg>
          </span>
          <div>
            <p class="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Milestone Badges</p>
            <h3 class="text-xl font-bold text-slate-900 dark:text-white">Credentials</h3>
          </div>
        </div>

        <div class="space-y-1.5 pt-2 border-t border-slate-100 dark:border-slate-700/60">
          ${milestones
            .slice(0, 5)
            .map((m) => `
              <div class="flex items-center justify-between text-xs py-0.5">
                <span class="flex items-center gap-1.5 truncate text-slate-700 dark:text-slate-300">
                  ${m.completed
                    ? `<svg class="w-4 h-4 text-emerald-500 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>`
                    : `<span class="relative flex h-2 w-2 mx-1 shrink-0"><span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span><span class="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span></span>`}
                  <span class="truncate font-medium ${!m.completed ? 'text-blue-600 dark:text-sky-400 font-semibold' : ''}">${m.title}</span>
                </span>
                <div class="flex items-center gap-1.5 shrink-0">
                  ${!m.completed ? `<span class="text-[10px] text-slate-400 dark:text-slate-500 font-mono hidden xl:inline">Expected Dec 2026</span>` : ''}
                  <span class="px-2 py-0.5 rounded text-[10px] font-semibold ${m.completed ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300' : 'bg-blue-600 text-white dark:bg-sky-500/20 dark:text-sky-300 dark:border dark:border-sky-500/40 shadow-xs'}" title="${!m.completed ? 'Expected Dec 2026' : 'Earned'}">
                    ${m.completed ? 'Earned' : 'In Progress'}
                  </span>
                </div>
              </div>
            `)
            .join('')}
        </div>
      </div>

    </div>
  `;
}

/**
 * Renders the Credential Badges Showcase Row
 * @param {HTMLElement} container
 * @param {Array<import('../types').CredentialMilestone>} milestones
 */
export function renderCredentialBadgesShowcase(container, milestones) {
  if (!container || !milestones) return;

  container.innerHTML = `
    <div class="bg-gradient-to-r from-blue-900 via-slate-900 to-indigo-950 rounded-2xl p-6 text-white shadow-lg border border-blue-800/40 relative overflow-hidden">
      <!-- Decorative background glow -->
      <div class="absolute -right-16 -top-16 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div class="absolute -left-16 -bottom-16 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-5 relative z-10">
        <div>
          <div class="flex items-center gap-2 mb-1">
            <span class="px-2.5 py-0.5 rounded-full text-[11px] font-semibold tracking-wider uppercase bg-amber-400 text-slate-950 shadow-sm">
              BYU-Pathway Worldwide & BYU-Idaho
            </span>
            <span class="text-xs text-slate-300 font-mono">Bachelor of Science in Software Development (BS)</span>
          </div>
          <h2 class="text-2xl font-black tracking-tight text-white">Degree Milestones & Conferred Credentials</h2>
          <p class="text-sm text-slate-300 max-w-2xl">
            Stackable academic credentials awarded toward your Bachelor of Science degree at BYU-Idaho.
          </p>
        </div>
        <div class="text-right shrink-0">
          <span class="text-xs uppercase tracking-wider text-slate-400 block font-semibold">Active Program</span>
          <span class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-blue-500/20 text-blue-300 border border-blue-400/30">
            <span class="w-2 h-2 rounded-full bg-blue-400 animate-ping"></span> Active Candidate • Expected Dec 2026 (Block 6)
          </span>
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 relative z-10" style="grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));">
        ${milestones
          .map(
            (m) => `
          <div class="bg-white/10 hover:bg-white/15 backdrop-blur-md rounded-xl p-4 border ${m.completed ? 'border-emerald-400/40' : 'border-blue-400/40 bg-gradient-to-b from-blue-900/30 to-slate-900/30 shadow-lg shadow-blue-950/20'} transition-all group flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between mb-2">
                <span class="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded ${m.completed ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' : 'bg-blue-500/25 text-blue-200 border border-blue-400/40 font-semibold'}">
                  ${m.type}
                </span>
                ${m.completed
                  ? `<span class="flex items-center gap-1 text-[11px] font-bold text-emerald-400">
                      <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
                      Earned
                    </span>`
                  : `<span class="flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-500/30 text-blue-200 border border-blue-400/40">
                      <span class="w-1.5 h-1.5 rounded-full bg-blue-400 animate-ping"></span>
                      In Progress &bull; ${m.badgeText || 'Active Block 5'}
                    </span>`}
              </div>
              <h4 class="text-sm font-bold text-white group-hover:text-amber-300 transition-colors line-clamp-2">${m.fullTitle || m.title}</h4>
              <p class="text-xs text-slate-300 mt-1 line-clamp-3 leading-relaxed">${m.description}</p>
            </div>
            
            <div class="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-300">
              <span>${m.completed ? 'Conferred' : 'Target'}: <strong class="text-white">${m.targetCompletion || m.issuedTerm || 'December 2026'}</strong></span>
              <span>Credits: <strong class="text-white">${m.earnedCredits}/${m.requiredCredits}</strong></span>
            </div>
          </div>
        `
          )
          .join('')}
      </div>
    </div>
  `;
}
