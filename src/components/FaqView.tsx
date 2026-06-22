import { useState, useMemo } from 'react';
import { Search, HelpCircle, Compass, ChevronDown, BookOpen, Briefcase, Award, ShieldAlert } from 'lucide-react';
import { FAQ_ITEMS } from '../data';
import AdSensePlaceholder from './AdSensePlaceholder';

type FAQCategory = 'All' | 'Tech Education' | 'Freelancing' | 'Remote Jobs' | 'Digital Tools';

export default function FAQView() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<FAQCategory>('All');
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({
    'faq-1': true // First FAQ open by default
  });

  const categories: FAQCategory[] = ['All', 'Tech Education', 'Freelancing', 'Remote Jobs', 'Digital Tools'];

  const filteredFaqs = useMemo(() => {
    return FAQ_ITEMS.filter((item) => {
      const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
      const matchesSearch = 
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const toggleFaq = (id: string) => {
    setOpenIds(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Tech Education':
        return <BookOpen className="w-4 h-4 text-[#4DA6FF]" />;
      case 'Remote Jobs':
        return <Briefcase className="w-4 h-4 text-emerald-500" />;
      case 'Freelancing':
        return <Compass className="w-4 h-4 text-indigo-500" />;
      case 'Digital Tools':
      default:
        return <Award className="w-4 h-4 text-amber-500" />;
    }
  };

  // Helper to highlight matched query search keywords
  const renderHighlightedText = (text: string, highlight: string) => {
    if (!highlight.trim()) {
      return <span>{text}</span>;
    }
    const regex = new RegExp(`(${highlight.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')})`, 'gi');
    const parts = text.split(regex);
    return (
      <span>
        {parts.map((part, index) => 
          regex.test(part) ? (
            <mark key={index} className="bg-amber-100 text-slate-900 px-0.5 rounded font-medium">
              {part}
            </mark>
          ) : (
            <span key={index}>{part}</span>
          )
        )}
      </span>
    );
  };

  return (
    <div id="faq-view-container" className="space-y-12 pb-16 animate-in fade-in duration-500">
      
      {/* Header Banner */}
      <section id="faq-hero" className="bg-[#1F2A44] text-white py-14 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <p className="text-[#4DA6FF] text-xs font-mono uppercase tracking-widest font-bold">Frequently Asked Questions</p>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Curated Knowledge Database
          </h1>
          <p className="text-slate-350 text-xs sm:text-sm max-w-2xl mx-auto text-slate-330 text-slate-300 leading-relaxed font-sans">
            Need quick clarification on breaking into remote startups? We drafted clear and actionable solutions to the 10 most common questions regarding digital skills, tools, and portfolios.
          </p>
        </div>
      </section>

      {/* Main Panel */}
      <section className="max-w-4xl mx-auto px-4">
        <div className="space-y-8">
          
          {/* AdSense Top slot */}
          <AdSensePlaceholder slot="header" />

          {/* Search bar + filter panel */}
          <div className="bg-white border p-5 rounded-2xl shadow-premium space-y-4">
            
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              <input 
                type="text" 
                placeholder="Search across questions and answers..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-50 border border-slate-100 rounded-xl pl-10 pr-4 py-3 text-xs sm:text-sm focus:bg-white focus:outline-none transition-all"
              />
            </div>

            {/* Scroller pill filters */}
            <div className="flex flex-wrap items-center gap-1.5 pt-1">
              {categories.map((cat, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium cursor-pointer transition-all ${
                    activeCategory === cat 
                      ? 'bg-[#1F2A44] text-white shadow-md' 
                      : 'bg-slate-50 text-slate-650 hover:bg-slate-100 text-slate-500'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

          </div>

          {/* FAQ Accordion List */}
          {filteredFaqs.length === 0 ? (
            <div className="bg-white border rounded-2xl p-12 text-center space-y-3">
              <HelpCircle className="w-12 h-12 text-slate-300 mx-auto animate-bounce" />
              <h3 className="font-display font-extrabold text-slate-800 text-base">No Matching Answers Left</h3>
              <p className="text-slate-400 text-xs text-slate-400">
                Try typing a broader keyword or resetting category selectors.
              </p>
              <button 
                onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
                className="bg-slate-100 text-[#1F2A44] font-semibold text-xs px-4 py-2 rounded-xl"
              >
                Clear Search Fields
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredFaqs.map((item) => {
                const isOpen = !!openIds[item.id];
                return (
                  <div 
                    key={item.id}
                    id={`faq-accordion-row-${item.id}`}
                    className="bg-white border rounded-2xl overflow-hidden shadow-premium transition-all hover:border-[#4DA6FF]/15"
                  >
                    
                    {/* Accordion heading */}
                    <button
                      onClick={() => toggleFaq(item.id)}
                      className="w-full flex items-center justify-between p-5 text-left font-bold text-xs sm:text-sm text-slate-800 focus:outline-none group"
                    >
                      <span className="flex items-center gap-3">
                        <span className="shrink-0">
                          {getCategoryIcon(item.category)}
                        </span>
                        <span>
                          {renderHighlightedText(item.question, searchQuery)}
                        </span>
                      </span>
                      <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {/* Accordion content */}
                    {isOpen && (
                      <div className="p-6 pt-0 text-xs sm:text-sm text-slate-600 border-t border-slate-55 bg-slate-50/30 leading-relaxed max-w-none">
                        <div className="flex flex-col sm:flex-row items-stretch sm:items-start gap-4 pt-4">
                          <div className="shrink-0 bg-sky-50 text-[#4DA6FF] w-7 h-7 rounded-lg flex items-center justify-center font-extrabold text-xs">
                            A
                          </div>
                          <div>
                            <p className="text-xs sm:text-sm text-slate-600 font-sans">
                              {renderHighlightedText(item.answer, searchQuery)}
                            </p>
                            
                            {/* Meta category label inside card */}
                            <span className="inline-flex items-center gap-1 mt-4 text-[9px] font-bold font-mono tracking-wider text-slate-400 uppercase">
                              curated channel: {item.category}
                            </span>
                          </div>
                        </div>
                      </div>
                    )}

                  </div>
                );
              })}
            </div>
          )}

          {/* AdSense Infeed Slot */}
          <div className="pt-4">
            <AdSensePlaceholder slot="infeed" />
          </div>

        </div>
      </section>

      {/* FAQ Bottom Help CTA */}
      <section className="max-w-4xl mx-auto px-4">
        <div className="bg-sky-50 border border-sky-100 rounded-3xl p-8 text-center space-y-4">
          <h3 className="font-display font-extrabold text-slate-800 text-sm">
            Didn't find what you were searching for?
          </h3>
          <p className="text-xs text-slate-500 max-w-sm mx-auto leading-relaxed">
            Send your specific query or portfolio roadblock directly to Zainab's inbox and get a customized answer!
          </p>
          <button
            onClick={() => {
              const contactElement = document.getElementById('main-navigation');
              if (contactElement) {
                window.location.hash = '#/contact';
              }
            }}
            className="bg-[#1F2A44] text-white text-xs font-bold px-6 py-2.5 rounded-xl transition-all shadow-sm active:scale-95 hover:bg-[#4DA6FF]"
          >
            Ask Zainab Directly
          </button>
        </div>
      </section>

    </div>
  );
}
