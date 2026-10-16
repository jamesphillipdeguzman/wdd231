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
      } else if (['ENG', 'MATH', 'PUBH', 'ART', 'BIO', 'PEACE', 'GS'].includes(course.subject) || course.certificate === 'General Education') {
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

  const pathwayConnectComplete = hasCourse('PC101') && hasCourse('PC102') && hasCourse('PCI103');
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

  const swDevCertComplete = hasCourse('CSE212') &&
    hasCourse('CSE270') &&
    hasCourse('CSE310') &&
    hasCourse('CSE325') &&
    hasCourse('CSE300') &&
    hasCourse('CSE370');

  // Total credits earned towards degrees
  const totalEarned = courses
    .filter((c) => c.completed || c.status === 'Complete' || c.status === 'Fulfilled')
    .reduce((sum, c) => sum + (Number(c.creditsEarned) || 0), 0);

  const aasSoftwareDevComplete = totalEarned >= 60 && webProgramCertComplete && webDevCertComplete;
  const bsSoftwareDevComplete = totalEarned >= 120;

  return [
    {
      id: 'pathway-connect',
      title: 'PathwayConnect Certificate',
      type: 'Certificate',
      requiredCredits: 7,
      earnedCredits: 7,
      completed: pathwayConnectComplete,
      issuedTerm: '2023 Fall',
      description: 'Foundational life, professional, and university transition skills via BYU-Pathway.',
    },
    {
      id: 'web-computer-programming',
      title: 'Web & Computer Programming Certificate',
      type: 'Certificate',
      requiredCredits: 12,
      earnedCredits: 12,
      completed: webProgramCertComplete,
      issuedTerm: '2024 Fall',
      description: 'Core programming syntax, classes, algorithms, functions, and responsive dynamic frontend foundations.',
    },
    {
      id: 'web-development',
      title: 'Web Development Certificate',
      type: 'Certificate',
      requiredCredits: 15,
      earnedCredits: 15,
      completed: webDevCertComplete,
      issuedTerm: '2025 Term 6',
      description: 'Comprehensive full-stack development, server APIs, RESTful services, databases, and modern JS architecture.',
    },
    {
      id: 'software-development-cert',
      title: 'Software Development Certificate',
      type: 'Certificate',
      requiredCredits: 14,
      earnedCredits: swDevCertComplete ? 14 : 11,
      completed: swDevCertComplete,
      issuedTerm: swDevCertComplete ? '2026 Block 4' : 'In Progress',
      description: 'Advanced engineering, data structures, testing automation, .NET ecosystems, and architecture principles.',
    },
    {
      id: 'aas-software-dev',
      title: 'AAS in Software Development',
      type: 'Associate',
      requiredCredits: 60,
      earnedCredits: Math.min(60, totalEarned),
      completed: aasSoftwareDevComplete,
      issuedTerm: 'Earned / Complete',
      description: 'Associate of Applied Science milestone conferred by BYU-Idaho through integrated certificate pathways.',
    },
    {
      id: 'bs-software-dev',
      title: 'BS in Software Development',
      type: 'Bachelor',
      requiredCredits: 120,
      earnedCredits: totalEarned,
      completed: bsSoftwareDevComplete,
      issuedTerm: 'Target: 2026 Block 6',
      description: 'Full Bachelor of Science degree in Software Development at BYU-Idaho.',
    },
  ];
}
