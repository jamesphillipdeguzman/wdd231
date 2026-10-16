/**
 * BYU-Idaho / BYU-Pathway Worldwide Degree & Course Tracker
 * TypeScript Data Models and Type Definitions
 */

export type CourseLevel = 'Lower Division' | 'Upper Division';

export type CourseStatus = 'Fulfilled' | 'Current' | 'Scheduled' | 'Complete';

export interface Course {
  subject: string;
  number: number;
  code: string;
  title: string;
  courseLevel: CourseLevel;
  credits: number;
  creditsEarned: number;
  grade: string | null;
  term: string;
  courseCompletionDate: string | null;
  certificate: string;
  description: string;
  technology: string[];
  completed: boolean;
  status: CourseStatus;
  courselink: string | null;
}

export interface DegreeProgressStats {
  totalRequiredCredits: number;
  totalAttemptedCredits: number;
  totalEarnedCredits: number;
  creditsInProgress: number;
  creditsScheduled: number;
  gradedCreditsAttempted: number;
  gradedCreditsEarned: number;
  nonGradedCreditsEarned: number; // Pass, TR credits
  totalQualityPoints: number;
  cumulativeGpa: number;
  gpaLetterEquivalent: string;
  academicStanding: string;
  upperDivisionCreditsEarned: number;
  upperDivisionCreditsRequired: number;
  majorCreditsEarned: number;
  religionCreditsEarned: number;
  generalEdCreditsEarned: number;
  completionPercentage: number;
}

export interface CredentialMilestone {
  id: string;
  title: string;
  type: 'Certificate' | 'Associate' | 'Bachelor';
  requiredCredits: number;
  earnedCredits: number;
  completed: boolean;
  issuedTerm?: string;
  coursesRequired?: string[];
  description: string;
}

export type ViewMode = 'grid' | 'table' | 'timeline';

export type StatusFilter = 'All' | 'Completed' | 'Current' | 'Scheduled';

export interface FilterState {
  searchQuery: string;
  status: StatusFilter;
  certificate: string;
  courseLevel: 'All' | CourseLevel;
  technologyTag: string | null;
  sortBy: 'term-asc' | 'term-desc' | 'code-asc' | 'code-desc' | 'credits-desc' | 'grade-desc';
  viewMode: ViewMode;
  selectedCourseCode: string | null;
}
