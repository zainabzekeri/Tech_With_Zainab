import { BlogPost, JobOpportunity, FAQItem, ReviewItem } from './types';

const zainabPortrait = "https://i.ibb.co/6cYqLwyH/Zainab-s-image4.jpg";

export const FOUNDER_INFO = {
  name: "Zainab",
  email: "techwithzainab02@gmail.com",
  role: "Founder & Lead Educator",
  bio: "Zainab is a digital educator, tech enthusiast, and careers advisor. With years of experience helping beginners transition into digital careers, she built TechWithZainab to democratize technology education and connect young professionals with remote possibilities worldwide.",
  avatar: zainabPortrait
};

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "blog-1",
    title: "10 Essential Digital Tools Every Beginner Needs to Master in 2026",
    excerpt: "Discover the highly requested remote-friendly software tools for project organization, document sharing, design, and seamless online collaboration.",
    content: `Mastering digital tools is the quickest shortcut to landing any remote job. When employers search for candidates, they look for familiarity with modern workflows. In this guide, we dive deep into the top tools Zainab recommends for tech beginners:

### 1. Notion (Information Architecture & Note-taking)
Notion acts as your second brain. Use it to build portfolio timelines, draft research templates, or compile quick bookmarks. Employers love candidates who can organize information clearly.

### 2. Canva (The Visual Builder)
Even if you aren't a seasoned designer, Canva allows you to build professional brochures, resume templates, and social media imagery. Visual branding is an essential modern soft-skill.

### 3. Slack & Discord (Synchronous Comm Channels)
Remote work thrives on text-based communication. Mastering thread etiquette, integrating calendar bots, and expressing updates concisely via Slack is highly valued by remote business operators.

### 4. Trello & Asana (Agile Task Boards)
Understand how Kanban columns move from "Backlog" to "In Progress" to "Completed". Managing spreadsheets or cards represents the core of modern product administration.

### 5. Google Workspace (Sheets, Docs, Forms)
Do not underestimate the power of advanced spreadsheet formulas. Zainab lists Google Sheets mastery as the core underlying skill across digital marketing, administrative virtual assistance, and data analysis.

Start by downloading 2 of these tools today and constructing a mock personal schedule tracker! This helps build a valuable portfolio piece.`,
    category: "Digital Tools",
    author: "Zainab",
    authorImage: zainabPortrait,
    date: "June 18, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",
    tags: ["Productivity", "Notion", "Beginners"],
    isFeatured: true
  },
  {
    id: "blog-2",
    title: "The Ultimate Guide to Launching Your Freelancing Career with No Prior Experience",
    excerpt: "Unpack the exact, step-by-step strategy Zainab used to secure freelance clients on Upwork, Fiverr, and LinkedIn starting completely from scratch.",
    content: `Many aspiring freelancers think they need years of corporate pedigree to secure their first client. In truth, clients care about one thing above all else: **Can you solve their immediate problem?**

Here is Zainab's step-by-step blueprint for non-experienced freelancers:

### Step 1: Identify an Easy-to-Learn Skill
Start with skills that have a low technical barrier but high business demand:
* **Social Media Formatting**: Crafting templates and scheduling posts.
* **Podcast Transcription**: Converting audio to structured blog text.
* **Basic Web Editing**: Writing and updating blog articles on WordPress or Squarespace.

### Step 2: Build a 'Proof of work' Portfolio
Never pitch a client empty-handed. If you have no past jobs, build mock case studies!
* Did you study social media? Create a 30-day visual growth strategy for a fictional coffee shop.
* Did you study digital writing? Draft 3 high-performance articles about local remote startups.

### Step 3: Write Pitches Focused on Value
Avoid "I need a job". Instead, write: *"Hi [Client Name], I noticed your business publishes weekly audio content. I have structured a sample transcript of your latest episode showing how it can be converted into 3 SEO-friendly blog headers. Let me know if you would like me to process your entire catalogue."*

This approach instantly moves you past 99% of other candidates on freelance websites!`,
    category: "Freelancing",
    author: "Zainab",
    authorImage: zainabPortrait,
    date: "June 14, 2026",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800",
    tags: ["Upwork", "Fiverr", "Side Hustle"]
  },
  {
    id: "blog-3",
    title: "How to Land Entry-Level Remote Jobs: Secrets Tech Recruiters Won't Tell You",
    excerpt: "Tired of submitting resumes into black holes? Learn how to stand out and find hidden remote internships and entry-level jobs.",
    content: `Landing a remote tech job at an entry level requires a rewrite of the standard job hunting book. Because remote listings receive hundreds of global applicants, your plain paper CV is rarely enough. 

Here are the secrets used by successful learners at TechWithZainab to secure remote employment:

### 1. Optimize for Applicant Tracking Systems (ATS)
Before a human recruiter ever views your entry-level submission, an automated algorithm scans it for key phrases. If the remote description requests "remote collaboration, customer tickets, Zendesk, and basic HTML", these exact items must be written clearly inside your resume!

### 2. Focus on Remote-Ready Soft Skills
The biggest fear remote managers have is that an entry-level worker will require constant hand-holding. Dispel this fear on day one. Show that you possess:
* **Overcommunication Habits**: Writing proactive, daily status reports.
* **Troubleshooting Aptitude**: Trying to solve an issue with 3 separate approaches before asking for support.
* **High Time-Management**: Autonomously logging focus hours.

### 3. Track Hidden Platforms
Stop looking exclusively on standard platforms like LinkedIn. Use specialized directories, including:
* **TechWithZainab Remote Board** (where we source custom entry-ready roles!)
* We Work Remotely
* Remote.co
* FlexJobs

In corporate remote work, consistency and customized warm outreach on LinkedIn win every single time. Try connecting directly with the Hiring Managers to pitch your enthusiasm!`,
    category: "Remote Jobs",
    author: "Zainab",
    authorImage: zainabPortrait,
    date: "May 29, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800",
    tags: ["Remote Work", "Interview Tips", "Job Prep"]
  },
  {
    id: "blog-4",
    title: "A Beginner's Road Map to Web Development: CSS, HTML, and Dynamic Interfaces",
    excerpt: "No coding background? No worries. This simple, step-by-step tech path guides you from raw code to high-octane dynamic web projects.",
    content: `Coding is the ultimate digital superpower. It opens doors to high-paying development roles, remote freelancing platforms, and tech product design. But with so many frameworks, where should a complete beginner start?

Zainab recommends this linear, low-stress coding roadmap:

### Phase 1: Semantic HTML5 (The Foundation)
HTML defines the skeletal layout of the internet. Focus on semantic tags (\`<header>\`, \`<article>\`, \`<section>\`, \`<nav>\`). Good structures build superior accessibility and high search engine optimization (SEO) scores.

### Phase 2: Modern Responsive CSS3 (The Style)
Make your pages respond beautifully on iPhones, iPads, and large desktop screens. Focus on:
* **Flexbox and CSS Grid** for intuitive alignment.
* **Media queries** to adjust layouts on different screens.
* **Tailwind CSS framework** for rapid, modern design utility.

### Phase 3: Javascript Essentials (The Interaction)
Add dynamic clicks, menus, and visual transitions. Focus on understanding variables, arrays, simple event listeners, and API fetching (\`fetch\`). Once you understand standard JS, transition to **React** for building state-safe interfaces.

Commit to coding 45 minutes every single day. Within 3 months, you'll be building your own remote freelancing client projects.`,
    category: "Tech Skills",
    author: "Zainab",
    authorImage: zainabPortrait,
    date: "April 11, 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800",
    tags: ["HTML", "CSS", "Web Dev"]
  }
];

export const JOB_OPPORTUNITIES: JobOpportunity[] = [
  {
    id: "job-1",
    title: "Remote Social Media Internship",
    company: "EduSphere Media",
    logo: "ES",
    location: "Remote (Global)",
    type: "Internship",
    salary: "$1,200 - $1,800 / month",
    category: "Remote Internships",
    description: "Join a growing educational publisher to format, schedule, and promote beautiful bite-sized learning courses on Instagram, TikTok, and LinkedIn. Perfect first role for beginners to learn marketing tools.",
    requirements: [
      "Familiarity with Canva and standard editing suite",
      "Excellent written English and basic video scripting capabilities",
      "Organization skills to handle standard content calendars",
      "Willingness to learn Buffer or Loomly scheduling platforms"
    ],
    postedDate: "2 days ago",
    applyUrl: "#"
  },
  {
    id: "job-2",
    title: "Customer Support Advocate (Entry-Level)",
    company: "SyncSaaS Technologies",
    logo: "SS",
    location: "Remote (US/EU/Africa time zones)",
    type: "Full-time",
    salary: "$35,000 - $42,000 / year",
    category: "Entry-Level Remote Jobs",
    description: "Support our growing user-base of project managers with tech-related questions. Highly beginner-friendly. Full training will be provided on standard ticketing tools.",
    requirements: [
      "Exceptional client-friendly communication skills",
      "Patience to explain complex steps in straightforward language",
      "Basic troubleshooting logic and tech interest",
      "Stable home internet connection (at least 20Mbps)"
    ],
    postedDate: "3 days ago",
    applyUrl: "#"
  },
  {
    id: "job-3",
    title: "Fiverr/Upwork Kickstart Guide (A-Z Optimization)",
    company: "TechWithZainab Academy",
    logo: "TZ",
    location: "Self-Paced Guide & Direct Access",
    type: "Contract",
    salary: "Earn Freelance Income",
    category: "Freelancing Platforms",
    description: "Access our exclusive toolkit comprising optimized profile templates, high-ROI client pitch drafts, and checklists to get your freelance services noticed by corporate clients in weeks.",
    requirements: [
      "Basic writing or administrative skill of your choice",
      "Willingness to set up and optimize Upwork and Fiverr profiles",
      "Ability to respond to clients within 24 hours"
    ],
    postedDate: "Weekly Update",
    applyUrl: "#"
  },
  {
    id: "job-4",
    title: "Creative Virtual Assistant (Junior-Level)",
    company: "HustleStudio Creative Agency",
    logo: "HS",
    location: "Remote (Worldwide)",
    type: "Part-time",
    salary: "$18 - $25 / hour",
    category: "Entry-Level Remote Jobs",
    description: "Support the founder of an advertising micro-agency. Tasks include responding to general client emails, formatting simple Notion documents, scheduling calendar events, and updating WordPress blog posts.",
    requirements: [
      "Basic understanding of Notion and Slack",
      "Dependable time management and proactivity",
      "Prior exposure to WordPress is a big plus but not mandatory"
    ],
    postedDate: "1 week ago",
    applyUrl: "#"
  },
  {
    id: "job-5",
    title: "Curated Remote Resource Hub",
    company: "TechWithZainab Curations",
    logo: "RC",
    location: "Global Access",
    type: "Contract",
    salary: "Free Educational Vault",
    category: "Remote Resources",
    description: "A hand-curated library of 50+ remote-friendly networks, job scrapers, resume templates, and cover-letter scripts designed to shortcut your remote job search by months.",
    requirements: [
      "High desire to break into a tech-first remote career",
      "Dedication to apply to at least 5 curated roles weekly"
    ],
    postedDate: "Always Active",
    applyUrl: "#"
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: "faq-1",
    question: "Do I need a university computer science degree to get started in technology?",
    answer: "Absolutely not! Up to 60% of entry-level remote workers are self-taught or learned through structured digital bootcamps. Tech companies care far more about your practical portfolio (proven 'proof of work') and your willingness to solve problems than standard university credentials.",
    category: "Tech Education"
  },
  {
    id: "faq-2",
    question: "What digital skills are easiest for complete beginners to learn first?",
    answer: "Zainab recommends starting with Digital Tools, Visual Layouts (using Canva), Social Media Management, virtual administrative support, or basic Web Design (utilizing WordPress/Webflow/Notion). These skills have a low starting learning curve but are highly valued by remote business owners looking for assistance.",
    category: "Digital Tools"
  },
  {
    id: "faq-3",
    question: "How do I secure my first client on Upwork if my profile is entirely new?",
    answer: "First, avoid generic profiles. Instead of listing 'Expert Writer', target a specific niche like 'Blog Writer for Pet Care Apps'. Second, build 3 mock samples (Case Studies) and attach them directly to your proposals. Finally, customize your proposal pitch instantly by answering the client's questions in the first 2 sentences. This positions you as an active helper rather than a copy-paste applicant.",
    category: "Freelancing"
  },
  {
    id: "faq-4",
    question: "Where are the best platforms to look for legitimate remote jobs that avoid spam?",
    answer: "Avoid massive generic sites if possible. Instead, hunt on high-quality specialized networks like We Work Remotely, Remote.co, FlexJobs, and curate lists here on TechWithZainab. Also, search directly on LinkedIn by filtering by 'Remote' combined with key entry terms like 'Junior Customer Success' or 'Operations Assistant'.",
    category: "Remote Jobs"
  },
  {
    id: "faq-5",
    question: "What is 'Notion' and why should I learn it for remote work?",
    answer: "Notion is a highly customizable workspace tool used by thousands of modern startups for note-taking, project task managers, wikis, and team repositories. Knowing how to quickly construct databases, link files, and format clear documents in Notion makes you look incredibly organized and remote-ready to potential employers.",
    category: "Digital Tools"
  },
  {
    id: "faq-6",
    question: "How much can a beginner freelancer realistically expect to earn?",
    answer: "For beginner freelancers starting out with administrative and basic visual support tasks, you can expect to charge $15 to $25 per hour. As you specialize in high-income roles (like advanced web design, Copywriting, or CRM implementation), your hourly rates can quickly grow to $50 - $100+ per hour.",
    category: "Freelancing"
  },
  {
    id: "faq-7",
    question: "How do I avoid remote job scams online?",
    answer: "Legitimate remote jobs will NEVER ask you to pay fee requirements for 'equipment', training materials, or software downloads. Always research the hiring company on Glassdoor/LinkedIn, make sure communication is coming from a genuine custom business domain, and avoid jobs that claim you can earn thousands of dollars for doing zero task work.",
    category: "Remote Jobs"
  },
  {
    id: "faq-8",
    question: "What is an ATS and why is my resume being constantly rejected?",
    answer: "ATS stands for Applicant Tracking System. It is an automated software scanner that scans your resume for specific terms before selection. To circumvent automated rejection, write your resume using simple, readable fonts without complex graphic columns, and match key terms from the target job posting directly (such as 'Slack' or 'Canva').",
    category: "Remote Jobs"
  },
  {
    id: "faq-9",
    question: "Is HTML and CSS considered coding, and should I learn them?",
    answer: "Yes! HTML (HyperText Markup Language) and CSS (Cascading Style Sheets) are the essential bedrock blocks of the visible internet. Learning them is the best starting step into web programming, allowing you to edit emails, customize WordPress, and eventually master full frameworks like React.",
    category: "Tech Education"
  },
  {
    id: "faq-10",
    question: "How can TechWithZainab help me accelerate my learning curve?",
    answer: "We offer completely free, beautifully laid-out learning hubs, curated starter kits, and a vetted remote job search portal. By subscribing to our newsletter and reading our step-by-step guides, you join a supportive educational ecosystem aimed at making technology simple and career entries achievable.",
    category: "Tech Education"
  }
];

export const TESTIMONIALS: ReviewItem[] = [
  {
    id: "test-1",
    name: "Aisha Kamara",
    role: "Junior Web Developer (Remote)",
    avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=150",
    content: "TechWithZainab completely demystified the tech space for me. I went from knowing nothing about CSS to securing my first remote junior front-end developer internship in less than 6 months! Zainab's step-by-step blogs are gold.",
    rating: 5
  },
  {
    id: "test-2",
    name: "David Chen",
    role: "Freelance Notion Consultant",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150",
    content: "I started as a career changer. Following Zainab's tips about Upwork profile optimization and mock portfolios, I obtained my first freelance contract within my first week! The Notion blueprints are an absolute game changer.",
    rating: 5
  },
  {
    id: "test-3",
    name: "Mariam Bello",
    role: "Remote Customer Operations Extraordinaire",
    avatar: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=150",
    content: "Zainab's advice on optimizing my resume for Applicant Tracking Systems completely transformed my remote job hunt. I applied to SyncSaaS Technologies and secured the entry advocate role. Highly recommend subscribing to her posts!",
    rating: 5
  }
];

export const ADSENSE_SLOTS = {
  header: {
    id: "ad-header",
    description: "Responsive Horizontal Banner (Leaderboard 728x90) for premium AdSense visual placement.",
    location: "Home Hero Top / Navigation Header Margin"
  },
  sidebar: {
    id: "ad-sidebar",
    description: "Multi-size Rectangle Ad (300x250 or 300x600 Skyscraper) for content sidebars.",
    location: "Blog Post Sidebar or Jobs Listing Panel"
  },
  infeed: {
    id: "ad-infeed",
    description: "In-Feed Contextual Ad matching search and cards background grids.",
    location: "Between Blog Cards and Job Grid Cards"
  }
};
