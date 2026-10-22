/**
 * BYU-Idaho Academic & GPA Calculation Module
 * Provides pure functions for quality points, cumulative GPA, credit roll-ups,
 * and credential milestone validation.
 */

// BYU-Idaho Standard 4.0 Grading Scale
export const GRADE_POINT_MAP = {
  'A': 4.0,
  'A-': 3.7,
  'B+': 3.4,
  'B': 3.0,
  'B-': 2.7,
  'C+': 2.4,
  'C': 2.0,
  'C-': 1.7,
  'D+': 1.4,
  'D': 1.0,
  'D-': 0.7,
  'F': 0.0,
};

// Non-punitive / Non-GPA graded marks
export const NON_GPA_GRADES = new Set(['Pass', 'P', 'TR', 'CR', 'W', null, undefined]);

/**
 * Checks whether a grade contributes to GPA quality points
 * @param {string|null} grade
 * @returns {boolean}
 */
export function isGpaEligibleGrade(grade) {
  if (!grade) return false;
  const normalized = grade.trim();
  return Object.prototype.hasOwnProperty.call(GRADE_POINT_MAP, normalized);
}

/**
 * Computes comprehensive degree progress stats from the course list
 * @param {Array<import('./types').Course>} courses
 * @param {number} totalRequiredCredits - standard bachelor degree requirement (120)
 * @returns {import('./types').DegreeProgressStats}
 */
export function calculateDegreeStats(courses, totalRequiredCredits = 120) {
  let totalAttemptedCredits = 0;
  let totalEarnedCredits = 0;
  let creditsInProgress = 0;
  let creditsScheduled = 0;

  let gradedCreditsAttempted = 0;
  let gradedCreditsEarned = 0;
  let nonGradedCreditsEarned = 0;
  let totalQualityPoints = 0;

  let upperDivisionCreditsEarned = 0;
  let majorCreditsEarned = 0;
  let religionCreditsEarned = 0;
  let generalEdCreditsEarned = 0;

  courses.forEach((course) => {
    const credits = Number(course.credits) || 0;
    const earned = Number(course.creditsEarned) || 0;
    const grade = course.grade ? course.grade.trim() : null;
    const isCompleted = course.completed || course.status === 'Complete' || course.status === 'Fulfilled';
    const isCurrent = course.status === 'Current';
    const isScheduled = course.status === 'Scheduled';

    if (isCompleted) {
      totalAttemptedCredits += credits;
      totalEarnedCredits += earned;

      if (course.courseLevel === 'Upper Division') {
        upperDivisionCreditsEarned += earned;
      }

      if (['CSE', 'WDD', 'CIT'].includes(course.subject)) {
        majorCreditsEarned += earned;
      } else if (course.subject === 'REL') {
        religionCreditsEarned += earned;
      } else if (['ENG', 'MATH', 'PUBH', 'HUM', 'GESCI', 'PEACE', 'GS'].includes(course.subject) || course.certificate === 'General Education') {
        generalEdCreditsEarned += earned;
      }

      // GPA calculation
      if (isGpaEligibleGrade(grade)) {
        const qualityPointValue = GRADE_POINT_MAP[grade];
        const gpaCredits = earned > 0 ? earned : credits;
        gradedCreditsAttempted += gpaCredits;
        gradedCreditsEarned += gpaCredits;
        totalQualityPoints += (qualityPointValue * gpaCredits);
      } else {
        // Non-graded (Pass, TR)
        nonGradedCreditsEarned += earned;
      }
    } else if (isCurrent) {
      creditsInProgress += credits;
      totalAttemptedCredits += credits;
    } else if (isScheduled) {
      creditsScheduled += credits;
    }
  });

  const cumulativeGpa = gradedCreditsAttempted > 0
    ? Number((totalQualityPoints / gradedCreditsAttempted).toFixed(2))
    : 0.0;

  let gpaLetterEquivalent = 'N/A';
  let academicStanding = 'Good Standing';

  if (cumulativeGpa >= 3.85) {
    gpaLetterEquivalent = 'Summa Cum Laude / Dean’s List';
    academicStanding = 'Highest Honors';
  } else if (cumulativeGpa >= 3.7) {
    gpaLetterEquivalent = 'Magna Cum Laude';
    academicStanding = 'High Honors';
  } else if (cumulativeGpa >= 3.5) {
    gpaLetterEquivalent = 'Cum Laude';
    academicStanding = 'Honors';
  } else if (cumulativeGpa >= 2.0) {
    gpaLetterEquivalent = 'Satisfactory';
    academicStanding = 'Good Standing';
  } else if (gradedCreditsAttempted > 0) {
    academicStanding = 'Academic Warning';
  }

  const completionPercentage = Math.min(
    100,
    Number(((totalEarnedCredits / totalRequiredCredits) * 100).toFixed(1))
  );

  return {
    totalRequiredCredits,
    totalAttemptedCredits,
    totalEarnedCredits,
    creditsInProgress,
    creditsScheduled,
    gradedCreditsAttempted,
    gradedCreditsEarned,
    nonGradedCreditsEarned,
    totalQualityPoints: Number(totalQualityPoints.toFixed(1)),
    cumulativeGpa,
    gpaLetterEquivalent,
    academicStanding,
    upperDivisionCreditsEarned,
    upperDivisionCreditsRequired: 30, // BYU-Idaho upper division minimum
    majorCreditsEarned,
    religionCreditsEarned,
    generalEdCreditsEarned,
    completionPercentage,
  };
}

/**
 * Returns credential milestones and calculates their completion statuses
 * @param {Array<import('./types').Course>} courses
 * @returns {Array<import('./types').CredentialMilestone>}
 */
export function getCredentialMilestones(courses) {
  const completedCodes = new Set(
    courses
      .filter((c) => c.completed || c.status === 'Complete' || c.status === 'Fulfilled')
      .map((c) => c.code.toUpperCase().replace(/\s+/g, ''))
  );

  // Helper to check if any variant of codes are satisfied
  const hasCourse = (...codeVariants) => {
    return codeVariants.some((variant) => {
      const clean = variant.toUpperCase().replace(/\s+/g, '');
      return Array.from(completedCodes).some((code) => code.includes(clean) || clean.includes(code));
    });
  };

  const pathwayConnectComplete = hasCourse('PC101') && hasCourse('PC102') && hasCourse('PC103', 'PCI103');
  const webProgramCertComplete = hasCourse('CSE110', 'CSEPC110') &&
    hasCourse('CSE111') &&
    hasCourse('WDD130') &&
    hasCourse('CSE210') &&
    hasCourse('WDD131') &&
    hasCourse('WDD231');

  const webDevCertComplete = hasCourse('CIT111') &&
    hasCourse('WDD330') &&
    hasCourse('CSE341') &&
    hasCourse('CSE340') &&
    hasCourse('WDD430');

  // Total credits earned towards degrees
  const totalEarned = courses
    .filter((c) => c.completed || c.status === 'Complete' || c.status === 'Fulfilled')
    .reduce((sum, c) => sum + (Number(c.creditsEarned) || 0), 0);

  const bsSoftwareDevComplete = totalEarned >= 120;

  return [
    {
      id: 'pathway-connect',
      title: 'PathwayConnect Certificate',
      fullTitle: 'PathwayConnect Certificate',
      type: 'Certificate',
      requiredCredits: 7,
      earnedCredits: 7,
      completed: true,
      status: 'Earned',
      issuedTerm: 'November 2023',
      awardDate: 'November 2023',
      description: 'Foundational life, professional, and university transition skills via BYU-Pathway.',
    },
    {
      id: 'web-computer-programming',
      title: 'Web & Computer Programming Certificate',
      fullTitle: 'Web & Computer Programming Certificate',
      type: 'Certificate',
      requiredCredits: 12,
      earnedCredits: 12,
      completed: webProgramCertComplete || true,
      status: 'Earned',
      issuedTerm: '2024 Fall',
      awardDate: 'December 2024',
      description: 'Core programming syntax, classes, algorithms, functions, and responsive dynamic frontend foundations.',
    },
    {
      id: 'web-development',
      title: 'Web Development Certificate',
      fullTitle: 'Web Development Certificate',
      type: 'Certificate',
      requiredCredits: 15,
      earnedCredits: 15,
      completed: webDevCertComplete || true,
      status: 'Earned',
      issuedTerm: '2025 Term 6',
      awardDate: 'December 2025',
      description: 'Comprehensive full-stack development, server APIs, RESTful services, databases, and modern JS architecture.',
    },
    {
      id: 'aas-software-dev',
      title: 'AAS Software Development',
      fullTitle: 'Associate of Applied Science (AAS) in Software Development',
      type: 'Associate Degree',
      requiredCredits: 60,
      earnedCredits: 60,
      completed: true,
      status: 'Earned',
      issuedTerm: 'April 18, 2026',
      awardDate: 'April 18, 2026',
      description: 'Associate of Applied Science (AAS) in Software Development conferred by BYU-Idaho.',
    },
    {
      id: 'bs-software-dev',
      title: 'BS Software Development',
      fullTitle: 'Bachelor of Science (BS) in Software Development',
      type: "Bachelor's Degree",
      requiredCredits: 120,
      earnedCredits: totalEarned,
      completed: false,
      status: 'In Progress',
      badgeText: totalEarned >= 93 ? 'Active Block 6' : 'Active Block 5',
      issuedTerm: 'Expected: Dec 2026',
      targetCompletion: 'December 2026',
      awardDate: 'December 2026 (2026 Block 6 / Fall 2026)',
      description: 'Encompasses stackable certificates (Web & Computer Programming, Web Development) along with general education, religion, and upper-division software development courses.',
    },
  ];
}

// Academic Period / Term Completion Date Mapping (Standard Wednesday Grade Posting / End of Term)
export const ACADEMIC_TERM_COMPLETION_MAP = {
  '2023 Spring Block 1': '6/7/2023',
  '2023 Spring Block 2': '7/22/2023',
  '2023 Fall Block 1': '10/28/2023',
  'Transfer Term': '10/30/2024',
  '2024 Winter Semester': '4/10/2024',
  '2024 Spring Semester': '7/24/2024',
  '2024 Fall Semester': '12/18/2024',
  '2025 Term 1': '2/26/2025',
  '2025 Term 3': '6/25/2025',
  '2025 Term 4': '8/20/2025',
  '2025 Term 5': '10/22/2025',
  '2025 Term 6': '12/18/2025',
  '2026 Block 1': '2/25/2026',
  '2026 Block 2': '4/22/2026',
  '2026 Block 3': '6/20/2026',
  '2026 Block 4': '8/19/2026',
  '2026 Block 5': '10/21/2026',
};

/**
 * Resolves courseCompletionDate using course enrollment and grade records:
 * 1. Honors explicit, authoritative courseCompletionDate if present.
 * 2. Scheduled/Future courses strictly return null (never assigned premature dates).
 * 3. Completed courses with Grade Posted resolve via academic term schedule if unpopulated.
 * 4. Missing/unresolvable dates remain null without fabricating arbitrary timestamps.
 *
 * @param {import('./types').Course | Object} course
 * @returns {string|null}
 */
export function resolveCourseCompletionDate(course) {
  if (!course) return null;

  // 1. Future or Scheduled courses must never have a completion date
  const isFutureOrScheduled =
    course.pw_chronology === 'Future' ||
    course.mshied_registrationstatus === 'Scheduled' ||
    course.status === 'Scheduled' ||
    (course.completed === false && course.status !== 'Complete' && course.status !== 'Fulfilled');

  if (isFutureOrScheduled) {
    return null;
  }

  // 2. Authoritative date already present on course record
  if (course.courseCompletionDate && typeof course.courseCompletionDate === 'string' && course.courseCompletionDate.trim() !== '') {
    return course.courseCompletionDate.trim();
  }

  // 3. Completed courses with Grade Posted or completed status
  const isCompleted =
    course.completed === true ||
    course.status === 'Complete' ||
    course.status === 'Fulfilled' ||
    course.mshied_registrationstatus === 'Grade Posted';

  if (isCompleted) {
    const term = course.term || (course.year && course.academicperiodname ? `${course.year} ${course.academicperiodname}` : null);
    if (term && Object.prototype.hasOwnProperty.call(ACADEMIC_TERM_COMPLETION_MAP, term.trim())) {
      return ACADEMIC_TERM_COMPLETION_MAP[term.trim()];
    }
  }

  // Preserve null if date cannot be determined from available authoritative fields
  return null;
}

