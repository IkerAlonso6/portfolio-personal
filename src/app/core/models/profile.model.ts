export type Lang = 'es' | 'en';

export interface Bilingual<T = string> {
  es: T;
  en: T;
}

export type ProjectCategory = 'fullstack' | 'backend' | 'frontend' | 'desktop';

export type ProjectLinkType = 'repo' | 'demo' | 'docs';

export interface ProjectLink {
  label: Bilingual;
  url: string;
  type: ProjectLinkType;
}

export interface ProjectMetric {
  value: string;
  label: Bilingual;
}

export interface Project {
  id: string;
  name: Bilingual | string;
  tagline: Bilingual;
  description: Bilingual;
  problem?: Bilingual;
  role?: Bilingual;
  category: ProjectCategory;
  featured: boolean;
  metrics?: ProjectMetric[];
  highlights: Bilingual[];
  stack: string[];
  links: ProjectLink[];
  note?: Bilingual;
  year: string;
  accent: string;
  initials: string;
}

export interface WorkPractice {
  icon: string;
  title: Bilingual;
  description: Bilingual;
}

export interface HeroMetric {
  value: string;
  label: Bilingual;
}

export interface Skill {
  name: string;
  slug?: string;
  initial?: string;
}

export interface SkillGroup {
  id: string;
  title: Bilingual;
  skills: Skill[];
}

export interface EducationItem {
  degree: Bilingual;
  institution: string;
  period: string;
  description: Bilingual[];
}

export interface Course {
  name: Bilingual;
  description: Bilingual;
}

export interface ContactItem {
  id: string;
  label: Bilingual | string;
  value: string;
  href: string;
}

export interface AboutFact {
  label: Bilingual;
  value: Bilingual;
}
