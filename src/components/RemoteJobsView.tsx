import { useState, useMemo, FormEvent } from 'react';
import { Search, Briefcase, Building, MapPin, DollarSign, Calendar, ArrowRight, Info, CheckCircle, X, UploadCloud, ChevronRight, Gift } from 'lucide-react';
import { JOB_OPPORTUNITIES } from '../data';
import { JobOpportunity, JobCategory } from '../types';
import AdSensePlaceholder from './AdSensePlaceholder';

export default function RemoteJobsView() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<JobCategory | 'All'>('All');
  
  // Application form states
  const [selectedJobForApply, setSelectedJobForApply] = useState<JobOpportunity | null>(null);
  const [applicantName, setApplicantName] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [applicantCoverLetter, setApplicantCoverLetter] = useState('');
  const [uploadedFileName, setUploadedFileName] = useState('');
  const [isApplyingSubmit, setIsApplyingSubmit] = useState(false);
  const [applySuccess, setApplySuccess] = useState(false);

  const categories: (JobCategory | 'All')[] = [
    'All',
    'Remote Internships',
    'Entry-Level Remote Jobs',
    'Freelancing Platforms',
    'Remote Resources'
  ];

  const filteredJobs = useMemo(() => {
    return JOB_OPPORTUNITIES.filter((job) => {
      const matchesCategory = selectedCategory === 'All' || job.category === selectedCategory;
      const matchesSearch = 
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.requirements.some(req => req.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleApplyClick = (job: JobOpportunity) => {
    setSelectedJobForApply(job);
    setApplySuccess(false);
    setIsApplyingSubmit(false);
    setApplicantName('');
    setApplicantEmail('');
    setApplicantCoverLetter('');
    setUploadedFileName('');
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!applicantName || !applicantEmail) return;

    setIsApplyingSubmit(true);
    // Simulate API delay
    setTimeout(() => {
      setIsApplyingSubmit(false);
      setApplySuccess(true);
    }, 1500);
  };

  const handleMockPdfDrop = () => {
    setUploadedFileName('Resume_TechBeginner_ZainabApproved.pdf');
  };

  const remoteTips = [
    { title: "Optimize Your LinkedIn", desc: "Change your headline to match your target role (e.g. 'Aspiring Social Media Assistant | Certified Digital tools manager'). Recruiter search algorithms scan headlines first!" },
    { title: "Avoid generic bulk applying", desc: "Submit only 5 carefully personalized resumes a week instead of 50 spam copy-pastes. Read the job description and adjust 3 bullet points to match." },
    { title: "Build a single Notion Case Study", desc: "Create a page detailing how you organized a mock project, formatted templates, or designed Canva wireframes. Send it as raw proof-of-work!" },
    { title: "Prepare for asynchronous video interviews", desc: "Many remote companies use video templates. Record yourself answering standard answers beforehand to practice your pacing." }
  ];

  return (
    <div id="remote-jobs-container" className="space-y-12 pb-16 animate-in fade-in duration-500">
      
      {/* Hero Section */}
      <section id="jobs-hero" className="bg-[#1F2A44] text-white py-14 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <p className="text-[#4DA6FF] text-xs font-mono uppercase tracking-widest font-bold">Vetted Opportunities</p>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Curated Remote & Freelance Board
          </h1>
          <p className="text-slate-350 text-xs sm:text-sm max-w-2xl mx-auto text-slate-300 leading-relaxed">
            Skip the endless lists and algorithmic filters. TechWithZainab publishes verified remote internships, entry-level assistant roles, and platform guides aimed specifically at starter operations.
          </p>
        </div>
      </section>

      {/* Main Content Area: Filter and list */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Main Feed */}
          <main className="lg:col-span-8 space-y-6">
            
            {/* Control Panel (Search + Category Filter Cards) */}
            <div className="bg-white border p-5 rounded-2xl shadow-premium space-y-4">
              <div className="relative">
                <Search className="w-4 h-4 text-slate-405 text-slate-400 absolute left-3.5 top-3.5" />
                <input 
                  type="text" 
                  placeholder="Query roles, platform templates, or company keywords..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-100 rounded-xl pl-10 pr-4 py-3 text-xs sm:text-sm focus:bg-white focus:outline-none transition-all"
                />
              </div>

              {/* Responsive Category Scroller */}
              <div className="flex flex-wrap items-center gap-1.5 pt-1">
                {categories.map((cat, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium cursor-pointer transition-all ${
                      selectedCategory === cat 
                        ? 'bg-[#1F2A44] text-white shadow-md' 
                        : 'bg-slate-50 text-slate-650 hover:bg-slate-100 text-slate-500'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* AD HEADER CONTAINER */}
            <AdSensePlaceholder slot="header" />

            {/* Curated Listings list */}
            {filteredJobs.length === 0 ? (
              <div className="bg-white border rounded-3xl p-12 text-center space-y-3">
                <Briefcase className="w-12 h-12 text-slate-300 mx-auto animate-bounce" />
                <h3 className="font-display font-extrabold text-slate-800 text-base">No open postings correspond to your search</h3>
                <p className="text-slate-400 text-xs">
                  We update these lists weekly alongside direct companies. Check back later or adjust filters!
                </p>
                <button 
                  onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
                  className="bg-slate-100 text-[#1F2A44] font-semibold text-xs px-4 py-2 rounded-xl"
                >
                  Clear All Filters
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredJobs.map((job) => (
                  <div 
                    key={job.id}
                    id={`job-row-${job.id}`}
                    className="bg-white border hover:border-[#4DA6FF]/20 p-5 rounded-2xl shadow-premium hover:shadow-md transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 group"
                  >
                    <div className="flex items-start gap-4">
                      {/* Logo Initials circle */}
                      <div className="w-12 h-12 bg-sky-50 text-[#1F2A44] rounded-xl flex items-center justify-center font-extrabold text-xs font-display shrink-0 border border-[#4DA6FF]/10 shadow-sm">
                        {job.logo}
                      </div>
                      
                      {/* Job Metadata block */}
                      <div className="space-y-1">
                        <span className="bg-slate-100 text-slate-600 px-2 py-0.5 rounded text-[9px] font-bold font-mono tracking-wider uppercase inline-block">
                          {job.category}
                        </span>
                        <h3 className="font-display font-extrabold text-slate-800 text-sm group-hover:text-[#4DA6FF] transition-colors">
                          {job.title}
                        </h3>
                        
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-slate-400 text-[11px] font-medium">
                          <span className="flex items-center gap-1 text-[#1F2A44]"><Building className="w-3.5 h-3.5" /> {job.company}</span>
                          <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> {job.location}</span>
                          <span className="flex items-center gap-1"><DollarSign className="w-3.5 h-3.5 text-emerald-500" /> {job.salary}</span>
                        </div>
                      </div>
                    </div>

                    {/* Quick Trigger Buttons */}
                    <div className="flex sm:flex-col items-stretch sm:items-end justify-between w-full sm:w-auto pt-3 sm:pt-0 border-t sm:border-transparent border-slate-100">
                      <span className="text-[10px] text-slate-400 font-mono self-center mb-0 sm:mb-1.5 font-semibold">
                        Posted {job.postedDate}
                      </span>
                      <button
                        onClick={() => handleApplyClick(job)}
                        className="bg-[#1F2A44] text-white hover:bg-[#4DA6FF] text-xs font-bold px-4 py-2 rounded-xl transition-all shadow-sm active:scale-95"
                      >
                        Apply Now
                      </button>
                    </div>

                  </div>
                ))}
              </div>
            )}

            {/* AD IN-FEED BETWEEN BOARD */}
            <AdSensePlaceholder slot="infeed" />

          </main>

          {/* Right Column (Zainab's Remote Hacks) */}
          <aside className="lg:col-span-4 space-y-6">
            
            {/* Ad Space block */}
            <AdSensePlaceholder slot="sidebar" />

            {/* Zainab Tips and Guides Section */}
            <div className="bg-white border rounded-3xl p-6 shadow-premium space-y-4">
              <div className="flex items-center gap-2 text-[#4DA6FF] pb-2 border-b">
                <Gift className="w-5 h-5" />
                <h3 className="font-display font-extrabold text-[#1F2A44] text-sm">
                  Zainab's Remote Application Hacks
                </h3>
              </div>
              
              <div className="space-y-4">
                {remoteTips.map((tip, index) => (
                  <div key={index} className="space-y-1 group">
                    <h4 className="text-xs font-extrabold text-slate-800 transition-colors group-hover:text-[#4DA6FF] flex items-center gap-1.5">
                      <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      {tip.title}
                    </h4>
                    <p className="text-[11px] text-slate-500 leading-relaxed pl-5 font-sans">
                      {tip.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Special Callout */}
            <div className="bg-sky-50 text-sky-950 p-6 rounded-3xl space-y-3 border border-sky-100">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#1F2A44] font-mono">Resume Vetting Offer</h3>
              <p className="text-xs leading-relaxed text-slate-600">
                Subscribers to TechWithZainab can submit their draft resume to Zainab's email completely free of charge for spelling corrections, tag optimization, and remote-readiness reviews.
              </p>
              <p className="text-[10px] font-semibold text-[#1F2A44] font-mono">Write us at: techwithzainab02@gmail.com</p>
            </div>

          </aside>

        </div>
      </section>

      {/* Slide-Up Apply Modal Overlay */}
      {selectedJobForApply && (
        <div className="fixed inset-0 bg-[#1F2A44]/65 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200">
          <div className="bg-white w-full max-w-lg rounded-3xl shadow-2xl relative overflow-hidden flex flex-col max-h-[90vh]">
            
            {/* Modal Header */}
            <div className="bg-[#1F2A44] p-5 text-white flex items-center justify-between border-b">
              <div>
                <span className="text-[10px] font-bold font-mono text-[#4DA6FF] uppercase tracking-wider">{selectedJobForApply.category}</span>
                <h3 className="text-sm sm:text-base font-bold leading-normal">Apply to: {selectedJobForApply.title}</h3>
                <p className="text-[10px] text-slate-300">at {selectedJobForApply.company} ({selectedJobForApply.location})</p>
              </div>
              <button 
                onClick={() => setSelectedJobForApply(null)}
                className="text-slate-300 hover:text-white p-1.5 rounded-lg hover:bg-slate-800"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body (Scrollable) */}
            <div className="p-6 overflow-y-auto flex-1 space-y-6">
              
              {/* Vetting checklist */}
              <div className="bg-sky-50 p-4 rounded-xl space-y-2">
                <p className="text-xs text-sky-950 font-bold flex items-center gap-1.5">
                  <Info className="w-4 h-4 text-[#4DA6FF]" /> Zainab's Direct Prep Tip:
                </p>
                <p className="text-[11px] text-slate-650 leading-relaxed text-slate-650">
                  {selectedJobForApply.category === 'Remote Internships' 
                    ? "In internships, they look for eagerness above all else! Emphasize your prompt communication and past hobby projects done in Canva or basic templates."
                    : selectedJobForApply.category === 'Freelancing Platforms'
                    ? "Ensure your bio clearly lists a niche focus and link at least 1 mock draft portfolio Case Study. Always bid promptly and clearly."
                    : "For customer advocate roles, emphasize your high empathy levels on phone calls and showcase your rapid, professional typing speed."}
                </p>
                
                <div className="pt-2 border-t border-sky-200">
                  <h4 className="text-[10px] uppercase font-bold text-slate-850">Requirements Expected:</h4>
                  <ul className="list-disc pl-4 text-[10px] text-slate-500 mt-1 space-y-1">
                    {selectedJobForApply.requirements.map((req, idx) => (
                      <li key={idx}>{req}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Apply Success State */}
              {applySuccess ? (
                <div className="text-center py-6 space-y-4 animate-in zoom-in-95 duration-250">
                  <div className="w-12 h-12 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <div className="space-y-1.5">
                    <h4 className="font-extrabold text-slate-800 text-sm">Congratulations! Application Lodged</h4>
                    <p className="text-[11px] text-slate-500 max-w-xs mx-auto">
                      Your mock application and files were transmitted securely to {selectedJobForApply.company}'s training coordinators. Zainab will track updates with you via techwithzainab02@gmail.com!
                    </p>
                  </div>
                  <button
                    onClick={() => setSelectedJobForApply(null)}
                    className="bg-[#1F2A44] text-white text-xs font-bold px-6 py-2.5 rounded-xl hover:bg-[#4DA6FF] transition-all"
                  >
                    Return to Job Feed
                  </button>
                </div>
              ) : (
                /* Application form inputs */
                <form onSubmit={handleFormSubmit} className="space-y-4 text-xs text-left">
                  
                  <div className="space-y-1">
                    <label className="font-bold text-slate-700 block">Full Name <span className="text-rose-500">*</span></label>
                    <input 
                      type="text" 
                      placeholder="Jane Doe"
                      value={applicantName}
                      onChange={(e) => setApplicantName(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 focus:bg-white focus:outline-none"
                      required
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="font-bold text-slate-700 block">Email Address <span className="text-rose-500">*</span></label>
                    <input 
                      type="email" 
                      placeholder="jane.doe@email.com"
                      value={applicantEmail}
                      onChange={(e) => setApplicantEmail(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 focus:bg-white focus:outline-none"
                      required
                    />
                  </div>

                  {/* Mock file upload area */}
                  <div className="space-y-1">
                    <label className="font-bold text-slate-700 block">Attach Your CV / Resume (PDF) <span className="text-rose-500">*</span></label>
                    
                    {uploadedFileName ? (
                      <div className="border border-emerald-500/30 bg-emerald-50/55 p-3 rounded-xl flex items-center justify-between text-[11px] text-emerald-800 font-medium">
                        <span className="flex items-center gap-1.5">
                          <CheckCircle className="w-4 h-4 text-emerald-500" />
                          {uploadedFileName}
                        </span>
                        <button 
                          type="button"
                          onClick={() => setUploadedFileName('')}
                          className="text-rose-500 hover:text-rose-600 transition-colors p-1"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ) : (
                      <div 
                        onClick={handleMockPdfDrop}
                        className="border-2 border-dashed border-slate-250 cursor-pointer p-5 rounded-xl hover:bg-slate-50 text-center transition-all bg-slate-50/50"
                      >
                        <UploadCloud className="w-8 h-8 text-slate-400 mx-auto mb-1.5" />
                        <p className="text-[11px] text-slate-500 font-semibold mb-0.5">Click here to attach simulated PDF resume</p>
                        <p className="text-[9px] text-slate-400">PDF, DOC or Pages file sizes less than 10MB</p>
                      </div>
                    )}
                  </div>

                  <div className="space-y-1">
                    <label className="font-bold text-slate-700 block">Short Pitch to Hiring Manager (Optional)</label>
                    <textarea 
                      rows={3}
                      placeholder="Tell them why you are enthusiastic about this entry-level task..."
                      value={applicantCoverLetter}
                      onChange={(e) => setApplicantCoverLetter(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 focus:bg-white focus:outline-none"
                    ></textarea>
                  </div>

                  <div className="pt-3 border-t">
                    <button
                      type="submit"
                      disabled={isApplyingSubmit || !uploadedFileName}
                      className={`w-full py-3 rounded-xl font-bold transition-all text-sm flex items-center justify-center gap-1.5 ${
                        uploadedFileName 
                          ? 'bg-[#1F2A44] hover:bg-[#4DA6FF] text-white cursor-pointer active:scale-98' 
                          : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                      }`}
                    >
                      {isApplyingSubmit ? 'Transmitting application...' : 'Submit Mock Application'}
                    </button>
                    {!uploadedFileName && (
                      <p className="text-center text-[9px] text-slate-400 italic mt-1.5">
                        * Please click the file attachment area to upload your draft CV before submission!
                      </p>
                    )}
                  </div>

                </form>
              )}

            </div>
          </div>
        </div>
      )}

    </div>
  );
}
