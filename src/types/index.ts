export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  category: string;
  overview: string;
  problemStatement?: string;
  keyFeatures?: string[];
  contributions: string[];
  technologies: string[];
  demoUrl?: string; // If empty or starts with "TODO", button is hidden
  githubUrl?: string; // If empty or starts with "TODO", button is hidden
  image?: string; // If undefined or empty, renders typographic placeholder
  isOngoing?: boolean; // If true, renders "Ongoing Project" pulse badge
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location?: string;
  highlights: string[];
  metrics?: { label: string; value: string }[];
  technologies?: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  cgpa?: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
}

export interface AchievementItem {
  title: string;
  achievement: string;
  url?: string;
  urlLabel?: string;
}

export interface SocialLink {
  label: string;
  url: string;
  isPlaceholder?: boolean;
}

export interface PortfolioContent {
  meta: {
    title: string;
    description: string;
    author: string;
    url: string;
  };
  navigation: {
    monogram: string;
    links: { label: string; href: string }[];
  };
  hero: {
    greeting: string;
    name: string;
    roles: string[];
    tagline: string;
    location: string;
    availability: {
      status: boolean;
      text: string;
    };
    ctas: {
      primary: { label: string; href: string };
      secondary: { label: string; href: string };
      resume: { label: string; href: string };
    };
    socials: {
      github: string;
      linkedin: string;
      codechef: string;
    };
    photo: {
      src: string;
      alt: string;
      caption?: string;
    };
  };
  about: {
    sectionIndex: string;
    title: string;
    paragraphs: string[];
    highlights: string[];
  };
  skills: {
    sectionIndex: string;
    title: string;
    categories: SkillCategory[];
  };
  experience: {
    sectionIndex: string;
    title: string;
    items: ExperienceItem[];
  };
  projects: {
    sectionIndex: string;
    title: string;
    items: ProjectItem[];
  };
  education: {
    sectionIndex: string;
    title: string;
    items: EducationItem[];
  };
  certifications: {
    sectionIndex: string;
    title: string;
    items: CertificationItem[];
  };
  achievements: {
    sectionIndex: string;
    title: string;
    items: AchievementItem[];
  };
  hobbies: {
    title: string;
    items: string[];
  };
  contact: {
    sectionIndex: string;
    title: string;
    copy: string;
    email: string;
    phone: string;
    location: string;
    socials: {
      linkedin: string;
      github: string;
      codechef: string;
    };
    formEndpoint: string;
  };
  footer: {
    name: string;
    year: number;
    backToTopText: string;
  };
}

