import { useState, FormEvent } from 'react';
import { Mail, ArrowRight, Instagram, Twitter, Linkedin, Shield, FileText, AlertTriangle, GraduationCap } from 'lucide-react';

interface FooterProps {
  onNavigate: (view: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    setSubscribed(true);
    setEmail('');
    
    // Auto reset state after 4 seconds
    setTimeout(() => {
      setSubscribed(false);
    }, 5000);
  };

  return (
    <footer id="global-footer" className="bg-[#1F2A44] text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Upper footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-slate-800">
          
          {/* Brand Presentation */}
          <div className="space-y-4">
            <div 
              id="footer-logo"
              className="flex items-center gap-2 cursor-pointer group"
              onClick={() => onNavigate('home')}
            >
              <div className="bg-[#4DA6FF] text-white p-1.5 rounded-lg flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-slate-900" />
              </div>
              <span className="font-display font-bold text-white text-lg">
                TechWith<span className="text-[#4DA6FF]">Zainab</span>
              </span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              We empower beginners, career-changers, and aspiring freelancers to explore modern tech skills and connect with rewarding remote jobs and side hustles.
            </p>
            {/* Social media links */}
            <div className="flex items-center gap-3 pt-2">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer" 
                aria-label="Instagram Link"
                className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-[#4DA6FF] hover:text-slate-900 transition-colors flex items-center justify-center"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noreferrer" 
                aria-label="Twitter Link"
                className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-[#4DA6FF] hover:text-slate-900 transition-colors flex items-center justify-center"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer" 
                aria-label="Linkedin Link"
                className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-[#4DA6FF] hover:text-slate-900 transition-colors flex items-center justify-center"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Core Navigation Quick Links */}
          <div>
            <h3 className="text-white text-xs font-semibold uppercase tracking-wider mb-4">Avenue Pathways</h3>
            <ul className="space-y-2.5 text-xs text-slate-450">
              <li>
                <button 
                  onClick={() => onNavigate('about')} 
                  className="hover:text-white transition-colors flex items-center gap-1 hover:translate-x-0.5 transition-transform"
                >
                  Founder Story & Vision
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('blog')} 
                  className="hover:text-white transition-colors flex items-center gap-1 hover:translate-x-0.5 transition-transform"
                >
                  Tech Knowledge Blog
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('remote-jobs')} 
                  className="hover:text-white transition-colors flex items-center gap-1 hover:translate-x-0.5 transition-transform"
                >
                  Remote & Freelance Board
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('faq')} 
                  className="hover:text-white transition-colors flex items-center gap-1 hover:translate-x-0.5 transition-transform"
                >
                  Frequently Asked Questions
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('contact')} 
                  className="hover:text-white transition-colors flex items-center gap-1 hover:translate-x-0.5 transition-transform"
                >
                  Help Desk & Contact Form
                </button>
              </li>
            </ul>
          </div>

          {/* Legal Pages & Disclaimers */}
          <div>
            <h3 className="text-white text-xs font-semibold uppercase tracking-wider mb-4">AdSense Compliances</h3>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <button 
                  onClick={() => onNavigate('privacy-policy')} 
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <Shield className="w-3.5 h-3.5 text-[#4DA6FF]" />
                  Privacy Policy
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('terms')} 
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <FileText className="w-3.5 h-3.5 text-[#4DA6FF]" />
                  Terms & Conditions
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('disclaimer')} 
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <AlertTriangle className="w-3.5 h-3.5 text-[#4DA6FF]" />
                  AdSense Disclaimer
                </button>
              </li>
              <li className="pt-2 text-[11px] text-slate-500 italic leading-snug">
                Approved for safe Google AdSense publisher rules.
              </li>
            </ul>
          </div>

          {/* In-Footer Newsletter */}
          <div>
            <h3 className="text-white text-xs font-semibold uppercase tracking-wider mb-3">Newsletter</h3>
            <p className="text-slate-400 text-xs mb-4 leading-normal">
              Subscribe to get Zainab's direct weekly remote-job lists and digital tool tutorials.
            </p>
            
            {subscribed ? (
              <div className="bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 text-xs p-3 rounded-lg flex flex-col gap-1">
                <span className="font-bold">✓ Subscribed successfully!</span>
                <span>Zainab will send lists to your inbox.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input 
                    type="email" 
                    placeholder="name@email.com" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 focus:border-[#4DA6FF] focus:outline-none rounded-xl text-white text-xs py-2.5 pl-3 pr-10 placeholder-slate-500"
                    required
                  />
                  <button 
                    type="submit" 
                    className="absolute right-1 top-1 text-[#4DA6FF] hover:text-white transition-colors hover:bg-slate-800 p-1.5 rounded-lg"
                    aria-label="Submit Mail"
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
                {error && <p className="text-rose-400 text-[10px]">{error}</p>}
                <p className="text-slate-500 text-[10px] select-none">No spam. Opt out anytime.</p>
              </form>
            )}
          </div>

        </div>

        {/* Lower copyright section */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 text-center text-[11px] text-slate-500 gap-4">
          <div>
            &copy; {new Date().getFullYear()} TechWithZainab Academy. All Rights Reserved.
          </div>
          <div className="flex items-center gap-1 text-slate-400 font-mono">
            <span>Direct Support:</span>
            <a href="mailto:techwithzainab02@gmail.com" className="text-[#4DA6FF] hover:underline hover:text-white transition-colors">
              techwithzainab02@gmail.com
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
