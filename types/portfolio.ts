export type SocialLink = {
  label: string;
  href: string;
};

export type EducationItem = {
  school: string;
  degree: string;
  location: string;
  timeframe: string;
  details: string[];
};

export type Profile = {
  name: string;
  title: string;
  intro: string;
  bio: string;
  avatarPath: string;
  location: string;
  email: string;
  phone: string;
  resumePath: string;
  socials: SocialLink[];
  education: EducationItem[];
};

export type SkillCategory = {
  category: string;
  items: string[];
};

export type Project = {
  id: string;
  title: string;
  timeframe: string;
  role: string;
  description: string;
  highlights: string[];
  stack: string[];
  githubUrl: string;
  liveUrl: string;
  image: string;
  imageAlt: string;
};

export type Experience = {
  id: string;
  role: string;
  company: string;
  location: string;
  timeframe: string;
  summary: string;
  achievements: string[];
  stack: string[];
};
