export interface EducationItem {
  institution: string;
  location: string;
  degree: string;
  date: string;
  details?: string[];
  gpa?: string;
}

export interface WorkExperienceItem {
  company: string;
  location: string;
  role: string;
  date: string;
  achievements: string[];
  reflection?: string; // New field for reflective practice
}

export interface ProjectItem {
  title: string;
  description: string[];
  tools: string[];
  reflection?: string; // New field for reflective practice
  course?: string; // For academic projects
  pdfAsset?: string; // Optional single PDF in /public for popup preview
  pdfAssets?: { label: string; path: string }[]; // Optional multi-document project assets
  category: 'academic' | 'professional'; // To split sections
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface CertificationItem {
  name: string;
  issuer: string;
  completedAt: string; // ISO date: YYYY-MM-DD
  link: string;
  status?: 'completed' | 'in-progress' | 'expected';
}

// New Interface for Learning Journey Timeline
export interface Milestone {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  icon: any; // Using any for Lucide icon component type
}

// New Interface for Goals
export interface GoalsData {
  shortTerm: string;
  longTerm: string;
  developingSkills: string[];
}