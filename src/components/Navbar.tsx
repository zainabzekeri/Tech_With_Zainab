import { useState, useEffect } from 'react';
import { Menu, X, GraduationCap, Compass, Briefcase, BookOpen, HelpCircle, MessageSquare } from 'lucide-react';

interface NavbarProps {
  currentView: string;
  onNavigate: (view: string) => void;
}

export default function Navbar({ currentView, onNavigate }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { id: 'home', label: 'Home', icon: Compass },
    { id: 'about', label: 'About', icon: GraduationCap },
    { id: 'blog', label: 'Blog', icon: BookOpen },
    { id: 'remote-jobs', label: 'Remote Jobs', icon: Briefcase },
    { id: 'faq', label: 'FAQ', icon: HelpCircle },
    { id: 'contact', label: 'Contact', icon: MessageSquare },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setIsOpen(false);
  };

  return (
    <nav 
      id="main-navigation"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-md py-3' 
          : 'bg-white/80 backdrop-blur-sm py-4 border-b border-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Brand */}
          <div 
            id="brand-logo"
            className="flex items-center gap-2 cursor-pointer group"
            onClick={() => handleLinkClick('home')}
          >
            <div className="bg-[#1F2A44] hover:bg-[#4DA6FF] text-white p-2 rounded-xl transition-all shadow-[#1F2A44]/15 shadow-md flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-white group-hover:rotate-6 transition-transform" />
            </div>
            <div>
              <span className="font-display font-extrabold text-[#1F2A44] text-[18px] sm:text-[20px] tracking-tight">
                TechWith<span className="text-[#4DA6FF]">Zainab</span>
              </span>
              <p className="text-[9px] text-slate-400 font-mono tracking-widest uppercase -mt-1 font-bold">Beginner Academy</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentView === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => handleLinkClick(item.id)}
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive 
                      ? 'bg-sky-50 text-[#1F2A44] font-semibold cursor-default border-b-2 border-[#4DA6FF]' 
                      : 'text-slate-600 hover:text-[#1F2A44] hover:bg-slate-50'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-[#4DA6FF]' : 'text-slate-400'}`} />
                  {item.label}
                </button>
              );
            })}
            
            <button
              id="cta-nav-start"
              onClick={() => handleLinkClick('remote-jobs')}
              className="ml-4 bg-[#1F2A44] hover:bg-[#4DA6FF] text-white font-medium text-xs px-4 py-2.5 rounded-xl transition-all shadow-[0_4px_14px_rgba(31,42,68,0.2)] hover:shadow-[#4DA6FF]/30 hover:-translate-y-0.5"
            >
              Start Earning
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-[#1F2A44] hover:bg-slate-50 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay Drawer */}
      {isOpen && (
        <div 
          id="mobile-menu-drawer"
          className="md:hidden fixed top-[61px] left-0 w-full bg-white border-t border-slate-100 shadow-xl py-4 px-4 space-y-2 animate-in slide-in-from-top duration-300 z-40"
        >
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentView === item.id;
            return (
              <button
                key={item.id}
                id={`mobile-nav-link-${item.id}`}
                onClick={() => handleLinkClick(item.id)}
                className={`flex items-center gap-3 w-full px-4 py-3 rounded-xl text-left font-medium transition-all ${
                  isActive 
                    ? 'bg-sky-50 text-[#1F2A44] font-semibold border-l-4 border-[#4DA6FF]' 
                    : 'text-slate-600 hover:text-[#1F2A44] hover:bg-slate-50'
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'text-[#4DA6FF]' : 'text-slate-400'}`} />
                <span className="text-sm">{item.label}</span>
              </button>
            );
          })}
          
          <div className="pt-3 border-t border-slate-100 px-4">
            <button
              id="cta-mobile-start"
              onClick={() => handleLinkClick('remote-jobs')}
              className="w-full bg-[#1F2A44] text-center hover:bg-[#4DA6FF] text-white font-medium text-sm py-3 rounded-xl transition-all shadow-md"
            >
              Start Earning & Learning
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
