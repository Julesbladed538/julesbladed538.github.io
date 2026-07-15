export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  stars?: number;
  forks?: number;
  category: 'AI' | 'Software Engineering' | 'Tools';
  imageUrl?: string;
  videoUrl?: string;
}

export interface Game {
  id: string;
  title: string;
  description: string;
  type: 'Game' | 'Asset Pack';
  platformUrl: string;
  platform: 'Itch.io' | 'Newgrounds';
  tags: string[];
  imageUrl?: string;
  videoUrl?: string;
}

export interface Publication {
  title: string;
  authors: string[];
  venue: string;
  year: number;
  abstract: string;
  paperUrl?: string;
  bibtex: string;
  keywords: string[];
}

export interface SocialLink {
  name: string;
  url: string;
  iconName: string;
  colorClass: string;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  description?: string;
}
