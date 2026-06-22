export type CategoryType = 'Tech Skills' | 'Freelancing' | 'Remote Jobs' | 'Digital Tools';

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string; // Markdown or rich text
  category: CategoryType;
  author: string;
  authorImage: string;
  date: string;
  readTime: string;
  image: string;
  tags: string[];
  isFeatured?: boolean;
}

export type JobCategory = 'Remote Internships' | 'Entry-Level Remote Jobs' | 'Freelancing Platforms' | 'Remote Resources';

export interface JobOpportunity {
  id: string;
  title: string;
  company: string;
  logo: string; // Initials or design
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Internship';
  salary: string;
  category: JobCategory;
  description: string;
  requirements: string[];
  postedDate: string;
  applyUrl: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'Tech Education' | 'Freelancing' | 'Remote Jobs' | 'Digital Tools';
}

export interface ReviewItem {
  id: string;
  name: string;
  role: string;
  avatar: string;
  content: string;
  rating: number;
}
