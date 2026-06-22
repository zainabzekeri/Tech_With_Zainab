import { Heart, Eye, Award, CheckCircle, GraduationCap, ArrowRight, Star } from 'lucide-react';
import { FOUNDER_INFO } from '../data';
import AdSensePlaceholder from './AdSensePlaceholder';

interface AboutViewProps {
  onNavigate: (view: string) => void;
}

export default function AboutView({ onNavigate }: AboutViewProps) {
  const skills = [
    { name: "Tech Education", percentage: 95, color: "bg-[#4DA6FF]", description: "Structured coding & digital pathways" },
    { name: "Freelancing", percentage: 90, color: "bg-indigo-500", description: "Upwork proposals & client pitch mastery" },
    { name: "Remote Jobs", percentage: 88, color: "bg-emerald-500", description: "Vetting platforms & resume optimization" },
    { name: "Digital Tools", percentage: 85, color: "bg-amber-500", description: "Notion structures, Canva & Slack productivity" }
  ];

  return (
    <div id="about-view-container" className="space-y-16 pb-16 animate-in fade-in duration-500">
      
      {/* Page Header */}
      <section id="about-hero" className="bg-[#1F2A44] text-white py-16 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <p className="text-[#4DA6FF] text-xs font-mono uppercase tracking-widest font-bold">Behind Our Mission</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Empowering Next-Gen Learners
          </h1>
          <p className="text-slate-350 text-xs sm:text-sm max-w-2xl mx-auto text-slate-300 leading-relaxed">
            We bridge the gap between digital training and active remote employment. Discover who is behind TechWithZainab and our core pillars of free education.
          </p>
        </div>
      </section>

      {/* Mission & Vision Section (Grid) */}
      <section id="mission-vision-grid" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Mission Card */}
          <div className="bg-white border border-slate-100 p-8 sm:p-10 rounded-3xl shadow-premium flex items-start gap-5">
            <div className="bg-sky-50 p-4 rounded-2xl text-[#4DA6FF] shrink-0">
              <Heart className="w-6 h-6 fill-[#4DA6FF]/10 text-[#4DA6FF]" />
            </div>
            <div className="space-y-3">
              <h2 className="text-lg sm:text-xl font-extrabold text-[#1F2A44]">Our Mission Statement</h2>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                To simplify the starting learning curve of computer sciences and digital layouts so any beginner can comfortably secure a remote job, regardless of their academic background, geographic location, or financial boundaries.
              </p>
            </div>
          </div>

          {/* Vision Card */}
          <div className="bg-white border border-slate-100 p-8 sm:p-10 rounded-3xl shadow-premium flex items-start gap-5">
            <div className="bg-indigo-50 p-4 rounded-2xl text-indigo-500 shrink-0">
              <Eye className="w-6 h-6 fill-indigo-100/30 text-indigo-500" />
            </div>
            <div className="space-y-3">
              <h2 className="text-lg sm:text-xl font-extrabold text-[#1F2A44]">Our Vision Statement</h2>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                To build a globally-recognized, 100% free digital learning space that matches ambitious young talent with real freelancing solutions, remote contracts, and modern automated productivity skills.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* AD MIDDLE COMPLIANCY ROW */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AdSensePlaceholder slot="header" />
      </div>

      {/* Founder Story Section */}
      <section id="founder-narrative" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="bg-white border border-slate-100 p-8 sm:p-12 lg:p-16 rounded-3xl shadow-premium">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Narrative Copy */}
            <div className="lg:col-span-8 space-y-5 order-2 lg:order-1">
              <div className="inline-flex items-center gap-1 text-[#4DA6FF] text-xs font-semibold bg-sky-50 px-3 py-1 rounded-full uppercase tracking-wider">
                <Award className="w-3.5 h-3.5" /> Founder Story
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1F2A44]">
                “A Degree is No-Longer the Sole Gateway to Tech Success”
              </h2>
              <div className="text-slate-650 text-xs sm:text-sm space-y-4 leading-relaxed text-slate-600">
                <p>
                  As a digital instructor, I watched countless tech prospective learners get absolutely overwhelmed by complex coding tutorials, expensive academy memberships, and career advice that felt out-of-reach for absolute beginners.
                </p>
                <p>
                  I believed there was a better, simpler, and completely free way to break into the industry. Technology is about creation—knowing how to piece elements together, structure clear processes, choose the right digital tool suites, and build practical projects that freelance clients actually pay for.
                </p>
                <p>
                  That's why I started **TechWithZainab**. This is a self-paced learning space, a curated job platform, and a comprehensive handbook aimed directly at career-changers, students, and beginners. By consolidating and vetting the top resources, I hope to shortcut your remote learning curve by years.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-xs text-slate-500 font-semibold ml-1">Zainab's Premium Free Curatables</span>
                </div>
              </div>
            </div>

            {/* Right Photo Container - Circular/Rounded Professional Portrait Card */}
            <div className="lg:col-span-4 flex flex-col items-center order-1 lg:order-2">
              <div id="founder-profile-card" className="w-full max-w-[280px] bg-slate-50 border border-slate-200/80 rounded-[32px] p-6 text-center shadow-sm hover:shadow-md transition-all duration-300">
                
                {/* Profile Image Frame with circular gradient border */}
                <div className="relative mx-auto w-40 h-40 sm:w-44 sm:h-44 rounded-full p-1 bg-gradient-to-tr from-[#4DA6FF] via-indigo-200 to-emerald-200 shadow-inner">
                  <img 
                    src={FOUNDER_INFO.avatar} 
                    alt={FOUNDER_INFO.name} 
                    className="w-full h-full rounded-full object-cover border-4 border-white shadow-md transition-transform duration-500 hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute bottom-2 right-2 flex h-3.5 w-3.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-white"></span>
                  </span>
                </div>

                {/* Profile Information Block */}
                <div className="mt-5 space-y-2">
                  <div className="space-y-1">
                    <h3 className="text-lg font-extrabold text-[#1F2A44] tracking-tight">{FOUNDER_INFO.name}</h3>
                    <span className="text-[10px] text-[#4DA6FF] font-bold tracking-wider font-mono uppercase bg-[#4DA6FF]/10 py-1 px-3 rounded-full inline-block">
                      {FOUNDER_INFO.role}
                    </span>
                  </div>
                  
                  <div className="pt-2 border-t border-slate-200/60">
                    <a 
                      href={`mailto:${FOUNDER_INFO.email}`} 
                      className="text-xs text-slate-500 hover:text-[#4DA6FF] transition-all duration-200 font-mono font-medium block overflow-hidden text-ellipsis whitespace-nowrap active:scale-95"
                      title="Send Zainab an email"
                    >
                      {FOUNDER_INFO.email}
                    </a>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Focus Areas & Progress Metrics */}
      <section id="skills-assessment" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-white border border-slate-100 p-8 sm:p-12 rounded-3xl shadow-premium">
          
          {/* Left Text Explanation */}
          <div className="lg:col-span-5 space-y-5 text-left">
            <span className="text-xs font-mono font-bold text-[#4DA6FF] uppercase bg-sky-50 px-3 py-1 rounded-full">Skill Mapping</span>
            <h2 className="text-2xl sm:text-3.5xl font-extrabold text-[#1F2A44]">Our Direct Training Focus Areas</h2>
            <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
              We allocate premium efforts across our curriculum. By pairing structured lessons with industry demands, we guarantee high transition rates into active freelancing and entry-level positions.
            </p>
            <button
              onClick={() => onNavigate('contact')}
              className="text-xs font-bold text-[#1F2A44] hover:text-[#4DA6FF] flex items-center gap-1.5 transition-colors"
            >
              Request Custom Career Consultation <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Right Progress Indicators */}
          <div className="lg:col-span-7 space-y-6">
            {skills.map((skill, index) => (
              <div key={index} id={`skill-meter-${index}`} className="space-y-1.5">
                <div className="flex justify-between text-xs font-semibold text-[#1F2A44]">
                  <div>
                    <span className="font-extrabold block">{skill.name}</span>
                    <span className="text-[10px] text-slate-400 font-medium block -mt-0.5">{skill.description}</span>
                  </div>
                  <span className="font-bold font-mono text-sm">{skill.percentage}%</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden">
                  <div 
                    className={`${skill.color} h-full rounded-full transition-all duration-1000`} 
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose-us" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <p className="text-xs font-mono text-[#4DA6FF] font-bold uppercase tracking-wider">The Academy Distinction</p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1F2A44]">Why Choose TechWithZainab?</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl flex flex-col space-y-3 border border-transparent hover:border-[#4DA6FF]/10 transition-all">
            <CheckCircle className="w-5 h-5 text-[#4DA6FF]" />
            <h3 className="font-bold text-slate-800 text-sm">Strictly Beginner-First</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              We do not assume you have programmed previously. Every single blog post, Notion framework, and code snippet is formulated using plain and direct language.
            </p>
          </div>
          
          <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl flex flex-col space-y-3 border border-transparent hover:border-[#4DA6FF]/10 transition-all">
            <CheckCircle className="w-5 h-5 text-[#4DA6FF]" />
            <h3 className="font-bold text-slate-800 text-sm">100% Free Lifetime Learning</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              No hidden paywalls, subscription models, or locked features. Zainab believes tech skills are a universal equalizer that should remain free for the community.
            </p>
          </div>

          <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl flex flex-col space-y-3 border border-transparent hover:border-[#4DA6FF]/10 transition-all">
            <CheckCircle className="w-5 h-5 text-[#4DA6FF]" />
            <h3 className="font-bold text-slate-800 text-sm">Direct Professional Portfolios</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              We focus heavily on 'proof of work'. We don't just teach theory; we teach you how to write pitches, format client drafts, and present beautiful portfolio samples.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section id="about-cta" className="max-w-5xl mx-auto px-4">
        <div className="bg-gradient-to-r from-[#1F2A44] to-indigo-950 text-white p-8 sm:p-12 rounded-3xl text-center shadow-lg space-y-6">
          <h3 className="text-xl sm:text-2xl font-extrabold">Let's Create Your Career Growth Blueprint Today</h3>
          <p className="text-xs text-slate-300 max-w-xl mx-auto">
            Browse Zainab's full digital dashboard to learn, study, apply for jobs, and connect directly with remote projects.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 pt-2">
            <button 
              onClick={() => onNavigate('blog')}
              className="w-full sm:w-auto bg-[#4DA6FF] text-slate-900 font-bold px-7 py-3 rounded-xl hover:bg-white hover:text-[#1F2A44] transition-all text-xs"
            >
              Browse Articles
            </button>
            <button 
              onClick={() => onNavigate('remote-jobs')}
              className="w-full sm:w-auto bg-slate-800 text-slate-200 border border-slate-700 font-medium px-7 py-3 rounded-xl hover:text-white transition-colors text-xs"
            >
              View Freelance Internships
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
