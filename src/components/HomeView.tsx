import { Compass, Sparkles, BookOpen, Users, Briefcase, Star, ArrowRight, TrendingUp, CheckCircle, Mail } from 'lucide-react';
import { BLOG_POSTS, TESTIMONIALS, FOUNDER_INFO } from '../data';
import { BlogPost } from '../types';
import AdSensePlaceholder from './AdSensePlaceholder';

interface HomeViewProps {
  onNavigate: (view: string) => void;
  onReadBlogPost: (post: BlogPost) => void;
}

export default function HomeView({ onNavigate, onReadBlogPost }: HomeViewProps) {
  const featuredPost = BLOG_POSTS.find(post => post.isFeatured) || BLOG_POSTS[0];

  return (
    <div id="home-view-container" className="space-y-20 pb-16 animate-in fade-in duration-500">
      
      {/* AD STANDARD TOP SLOT */}
      <div className="pt-4 px-4 sm:px-6">
        <AdSensePlaceholder slot="header" />
      </div>

      {/* Hero Section */}
      <section id="hero-banner" className="relative overflow-hidden bg-gradient-to-b from-[#1F2A44]/5 via-white to-white py-12 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div id="badge-promo" className="inline-flex items-center gap-1.5 px-3 py-1 bg-sky-50 text-[#1F2A44] border border-[#4DA6FF]/30 rounded-full text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-[#4DA6FF]" />
                <span>Your trusted gateway to the digital economy</span>
              </div>
              
              <h1 id="hero-headline" className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1F2A44] tracking-tight leading-[1.1]">
                Start Your Tech <br />
                <span className="text-[#4DA6FF] relative inline-block">
                  Journey With Confidence
                  <span className="absolute left-0 bottom-1 w-full h-[6px] bg-[#4DA6FF]/10 -skew-x-12"></span>
                </span>
              </h1>
              
              <p id="hero-subheading" className="text-slate-600 text-base sm:text-lg max-w-xl leading-relaxed">
                TechWithZainab is a beginner-friendly learning ecosystem that simplifies modern technology pathways, provides verified remote internships, and prepares you for high-paying remote job markets and free digital tool suites.
              </p>
              
              {/* Call-to-actions */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <button
                  id="cta-hero-start-learning"
                  onClick={() => onNavigate('blog')}
                  className="bg-[#1F2A44] hover:bg-[#4DA6FF] text-white font-semibold px-8 py-4 rounded-xl shadow-lg shadow-[#1F2A44]/10 hover:shadow-[#4DA6FF]/30 transition-all flex items-center justify-center gap-2 group"
                >
                  Start Learning 
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  id="cta-hero-explore-resources"
                  onClick={() => onNavigate('remote-jobs')}
                  className="bg-white hover:bg-slate-50 text-[#1F2A44] border border-slate-200 font-semibold px-8 py-4 rounded-xl transition-all shadow-sm flex items-center justify-center gap-2"
                >
                  Explore Resources
                </button>
              </div>

              {/* Bullet highlights */}
              <div className="flex flex-wrap items-center gap-y-2 gap-x-6 pt-4 text-xs text-slate-500 font-medium font-sans">
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-[#4DA6FF]" /> No Prior Degree Needed
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-[#4DA6FF]" /> 100% Free Materials
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-[#4DA6FF]" /> Curated Vetted Opportunities
                </span>
              </div>
            </div>

            {/* Right Column: Founder Profile Card */}
            <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
              {/* Soft decorative background glows for depth */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#4DA6FF]/25 to-emerald-400/20 rounded-full filter blur-3xl -z-10 w-80 h-80 mx-auto"></div>
              
              {/* The Profile Card Container */}
              <div 
                id="hero-founder-profile-card" 
                className="w-full max-w-[360px] bg-white border border-slate-100/90 rounded-[40px] p-6 text-center shadow-premium hover:shadow-2xl transition-all duration-500 relative group overflow-hidden"
              >
                {/* Visual top border indicator matching brand colors */}
                <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-[#1F2A44] via-[#4DA6FF] to-emerald-400"></div>
                
                {/* Live Academy Status badge inside card */}
                <div className="flex justify-end mb-4">
                  <span className="text-[9px] font-bold font-mono tracking-wider uppercase bg-emerald-50 text-emerald-600 border border-emerald-200/50 px-2.5 py-1 rounded-full flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping"></span>
                    Lead Educator Online
                  </span>
                </div>

                {/* Main Profile Photo Frame with luxury styling */}
                <div className="relative mx-auto w-56 h-56 sm:w-64 sm:h-64 rounded-[28px] overflow-hidden p-1.5 bg-gradient-to-tr from-[#1F2A44] via-[#4DA6FF] to-emerald-200 shadow-lg">
                  <div className="w-full h-full rounded-[24px] overflow-hidden bg-slate-50 border-[3px] border-white/90">
                    <img 
                      src={FOUNDER_INFO.avatar} 
                      alt="Zainab - Founder & Lead Educator" 
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>

                {/* Identity & Action block */}
                <div className="mt-6 space-y-3">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1F2A44] tracking-tight">
                      Zainab
                    </h3>
                    <p className="text-[11px] sm:text-xs text-[#4DA6FF] font-bold tracking-wider font-mono uppercase mt-1 bg-sky-50 py-1.5 px-3.5 rounded-xl inline-block border border-sky-100">
                      Founder & Lead Educator
                    </p>
                  </div>
                  
                  <p className="text-slate-500 text-xs leading-relaxed italic max-w-xs mx-auto">
                    "Empowering thousands of beginners globally to step into remote careers and master modern digital skills."
                  </p>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2 text-left">
                    <div className="space-y-0.5">
                      <span className="text-[10px] text-slate-400 font-bold uppercase font-mono tracking-wider block">Direct Contact</span>
                      <a 
                        href={`mailto:${FOUNDER_INFO.email}`} 
                        className="text-[11px] sm:text-xs text-[#1F2A44] hover:text-[#4DA6FF] font-mono font-medium transition-colors"
                      >
                        {FOUNDER_INFO.email}
                      </a>
                    </div>
                    <button
                      onClick={() => onNavigate('about')}
                      className="text-xs font-bold text-[#1F2A44] hover:text-[#4DA6FF] transition-colors flex items-center gap-1 group/btn shrink-0 pl-3 border-l border-slate-100"
                    >
                      My Story 
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section id="statistics-tracker" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-slate-100 shadow-premium p-8 rounded-3xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y lg:divide-y-0 lg:divide-x divide-slate-100">
            <div className="text-center p-4">
              <p className="text-3xl sm:text-4xl font-extrabold text-[#1F2A44]">12,500+</p>
              <p className="text-slate-500 text-xs mt-1.5 font-medium">Aspiring Learners Sourced</p>
            </div>
            <div className="text-center p-4 pt-8 lg:pt-4">
              <p className="text-3xl sm:text-4xl font-extrabold text-[#4DA6FF]">95%</p>
              <p className="text-slate-500 text-xs mt-1.5 font-medium">Starter Growth Index</p>
            </div>
            <div className="text-center p-4 pt-8 lg:pt-4">
              <p className="text-3xl sm:text-4xl font-extrabold text-[#1F2A44]">500+</p>
              <p className="text-slate-500 text-xs mt-1.5 font-medium">Curated Entry Listings</p>
            </div>
            <div className="text-center p-4 pt-8 lg:pt-4">
              <p className="text-3xl sm:text-4xl font-extrabold text-[#4DA6FF]">4.9 / 5.0</p>
              <p className="text-slate-500 text-xs mt-1.5 font-semibold">User Support Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services-summary" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <p className="text-xs font-mono text-[#4DA6FF] font-bold uppercase tracking-wider">What We Offer</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1F2A44]">
            Comprehensive Pillars of Tech Success
          </h2>
          <p className="text-slate-500 text-sm leading-relaxed">
            We provide a unified learning hub. Explore tools, practice skills, and review verified career roadmaps. Always free and structured for remote adoption.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Tech Education */}
          <div className="bg-white border border-slate-100 hover:border-[#4DA6FF]/30 p-8 rounded-3xl shadow-premium hover:shadow-2xl transition-all group">
            <div className="bg-sky-50 text-[#4DA6FF] w-12 h-12 rounded-2xl flex items-center justify-center mb-6 shadow-sm transition-transform group-hover:scale-105">
              <BookOpen className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#1F2A44] mb-2">Tech Education</h3>
            <p className="text-slate-550 text-xs leading-relaxed mb-6 text-slate-500">
              Clear, step-by-step guides and pathways for HTML, CSS, JavaScript, responsive styles, and modern frameworks. Demystified for true beginners without high complex terminology.
            </p>
            <button 
              onClick={() => onNavigate('blog')}
              className="font-semibold text-xs text-[#1F2A44] group-hover:text-[#4DA6FF] transition-colors flex items-center gap-1"
            >
              Browse Lessons <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Card 2: Freelancing Opportunities */}
          <div className="bg-white border border-slate-100 hover:border-[#4DA6FF]/30 p-8 rounded-3xl shadow-premium hover:shadow-2xl transition-all group">
            <div className="bg-indigo-50 text-[#1F2A44] w-12 h-12 rounded-2xl flex items-center justify-center mb-6 shadow-sm transition-transform group-hover:scale-105">
              <Compass className="w-6 h-6 text-indigo-500" />
            </div>
            <h3 className="text-lg font-bold text-[#1F2A44] mb-2">Freelancing Opportunities</h3>
            <p className="text-slate-550 text-xs leading-relaxed mb-6 text-slate-500">
              Discover templates, proven Upwork bids, optimized Fiverr layouts, and professional LinkedIn outreach strategies focused on landing high-paying corporate side-contracts.
            </p>
            <button 
              onClick={() => onNavigate('blog')}
              className="font-semibold text-xs text-[#1F2A44] group-hover:text-[#4DA6FF] transition-colors flex items-center gap-1"
            >
              Learn Freelancing <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Card 3: Remote Jobs & Digital Tools */}
          <div className="bg-white border border-slate-100 hover:border-[#4DA6FF]/30 p-8 rounded-3xl shadow-premium hover:shadow-2xl transition-all group">
            <div className="bg-emerald-50 text-emerald-500 w-12 h-12 rounded-2xl flex items-center justify-center mb-6 shadow-sm transition-transform group-hover:scale-105">
              <Briefcase className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#1F2A44] mb-2">Remote Jobs & Digital Tools</h3>
            <p className="text-slate-550 text-xs leading-relaxed mb-6 text-slate-500">
              Curated entries from specialized global tech lists, mock application uploader, plus step-by-step masterclasses on productivity tools like Notion, Asana, and Canva.
            </p>
            <button 
              onClick={() => onNavigate('remote-jobs')}
              className="font-semibold text-xs text-[#1F2A44] group-hover:text-[#4DA6FF] transition-colors flex items-center gap-1"
            >
              Explore Job Board <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </section>

      {/* Featured Blog Section */}
      <section id="featured-learning-post" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-2 mb-10">
          <p className="text-xs font-mono text-[#4DA6FF] font-bold uppercase tracking-wider">Editor's Choice</p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1F2A44]">Featured Article Masterclass</h2>
        </div>

        <div className="bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-premium grid grid-cols-1 lg:grid-cols-2 gap-0 hover:shadow-2xl transition-all">
          <div className="relative aspect-video lg:aspect-auto min-h-[250px] lg:h-full">
            <img 
              src={featuredPost.image} 
              alt={featuredPost.title} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-4 left-4 bg-[#1F2A44] text-white font-semibold text-[10px] uppercase font-mono tracking-wider px-3 py-1 rounded-full">
              {featuredPost.category}
            </div>
          </div>
          <div className="p-8 sm:p-12 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-xs text-slate-500">
                <span>By {featuredPost.author}</span>
                <span>•</span>
                <span>{featuredPost.date}</span>
                <span>•</span>
                <span className="bg-sky-50 text-[#1F2A44] font-semibold px-2 py-0.5 rounded text-[10px]">{featuredPost.readTime}</span>
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#1F2A44] leading-snug">
                {featuredPost.title}
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                {featuredPost.excerpt}
              </p>
            </div>
            
            <div className="flex items-center justify-between border-t border-slate-100 pt-6">
              <div className="flex items-center gap-2.5">
                <img 
                  src={featuredPost.authorImage} 
                  alt={featuredPost.author} 
                  className="w-10 h-10 rounded-full object-cover border"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <p className="text-xs font-bold text-slate-800">{featuredPost.author}</p>
                  <p className="text-[10px] text-slate-400">Academy Lead Founder</p>
                </div>
              </div>
              
              <button
                onClick={() => onReadBlogPost(featuredPost)}
                className="bg-[#1F2A44] hover:bg-[#4DA6FF] text-white px-5 py-2.5 rounded-xl text-xs font-semibold transition-colors flex items-center gap-1"
              >
                Read Article <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* AD MIDDLE IN FEED SLOT */}
      <div className="px-4">
        <AdSensePlaceholder slot="infeed" />
      </div>

      {/* Testimonials Review Section */}
      <section id="student-voice" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <p className="text-xs font-mono text-[#4DA6FF] font-bold uppercase tracking-wider">Success Stories</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1F2A44]">Real Results from Real Beginners</h2>
          <p className="text-slate-550 text-sm leading-normal text-slate-500">
            Hear from career movers, and remote interns who kickstarted their digital routines using the pathways compiled on our boards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((review) => (
            <div 
              key={review.id} 
              id={`testimonial-${review.id}`}
              className="bg-white border border-slate-100 p-8 rounded-3xl shadow-premium relative flex flex-col justify-between"
            >
              <span className="text-slate-200 text-6xl font-serif absolute top-4 right-6 pointer-events-none select-none">“</span>
              <div className="space-y-4">
                {/* Rating component */}
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed relative z-10">
                  {review.content}
                </p>
              </div>

              <div className="flex items-center gap-3.5 border-t border-slate-100 pt-5 mt-6">
                <img 
                  src={review.avatar} 
                  alt={review.name} 
                  className="w-10 h-10 rounded-full object-cover border"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="text-xs font-extrabold text-slate-800">{review.name}</h4>
                  <p className="text-[10px] text-slate-400">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Big Action CTA Banner */}
      <section id="global-final-banner" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#1F2A44] rounded-3xl text-white py-12 px-6 sm:px-12 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-slate-800/20 rounded-full filter blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#4DA6FF]/10 rounded-full filter blur-3xl -z-10 -translate-x-1/2 translate-y-1/2"></div>
          
          <div className="max-w-2xl mx-auto space-y-6 relative z-10">
            <h2 className="text-2xl sm:text-3.5xl lg:text-4xl font-extrabold tracking-tight leading-tight">
              Ready to Secure Your First <br className="hidden sm:inline" />
              Freelance Client or Remote Internship?
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Join thousands of aspiring tech enthusiasts taking charge of their digital education. Free tool checklists, weekly jobs updates, and clear starter tips are waiting for you inside.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => onNavigate('remote-jobs')}
                className="w-full sm:w-auto bg-[#4DA6FF] hover:bg-[#4DA6FF]/90 text-slate-900 font-bold px-8 py-3.5 rounded-xl transition-all shadow-md active:scale-95 text-xs sm:text-sm"
              >
                Access Vetted Job Board
              </button>
              <button
                onClick={() => onNavigate('faq')}
                className="w-full sm:w-auto bg-slate-800/80 hover:bg-slate-700 hover:text-white text-slate-200 border border-slate-700 font-medium px-8 py-3.5 rounded-xl transition-all text-xs sm:text-sm"
              >
                Read FAQs First
              </button>
            </div>
            
            <p className="text-[10px] text-slate-400 italic">No registration fees. Everything remains 100% free of charge.</p>
          </div>
        </div>
      </section>

    </div>
  );
}
