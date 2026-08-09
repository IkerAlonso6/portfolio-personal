export type Lang = 'es' | 'en';

export interface Bilingual<T = string> {
  es: T;
  en: T;
}

export interface ProjectLink {
  label: Bilingual;
  url: string;
}

export interface Project {
  id: string;
  name: Bilingual | string;
  tagline: Bilingual;
  description: Bilingual;
  highlights: Bilingual[];
  stack: string[];
  links: ProjectLink[];
  year: string;
  accent: string;
  initials: string;
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
