import { useState, FormEvent } from 'react';
import { Mail, Send, CheckCircle, Info, ChevronRight, HelpCircle, MapPin, Instagram, Twitter, Linkedin, MessageSquare } from 'lucide-react';
import { FAQ_ITEMS } from '../data';
import AdSensePlaceholder from './AdSensePlaceholder';

interface ContactViewProps {
  onNavigate: (view: string) => void;
}

export default function ContactView({ onNavigate }: ContactViewProps) {
  // Form states
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);

  // Mini FAQ accordion states
  const [openFaqId, setOpenFaqId] = useState<string | null>(null);

  const miniFaqs = FAQ_ITEMS.slice(0, 3); // Preview first 3 FAQs

  const handleMessageSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSuccess(true);
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    }, 1200);
  };

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <div id="contact-view-container" className="space-y-12 pb-16 animate-in fade-in duration-500">
      
      {/* Header banner */}
      <section id="contact-hero" className="bg-[#1F2A44] text-white py-14 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <p className="text-[#4DA6FF] text-xs font-mono uppercase tracking-widest font-bold">Connect With Us</p>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Get In Touch With Zainab
          </h1>
          <p className="text-slate-350 text-xs sm:text-sm max-w-2xl mx-auto text-slate-300 leading-relaxed font-sans">
            Have a question about learning tech? Looking for freelancing guidance? Drop us a line below and we'll reply within 24-48 business hours.
          </p>
        </div>
      </section>

      {/* Main Grid Wrapper */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Form Card */}
          <div className="lg:col-span-7 bg-white border border-slate-150/60 p-6 sm:p-10 rounded-3xl shadow-premium">
            <div className="space-y-6">
              
              <div className="space-y-1">
                <span className="text-[10px] uppercase font-bold text-slate-400 font-mono tracking-widest block">Secure Delivery</span>
                <h2 className="text-lg sm:text-xl font-extrabold text-[#1F2A44] flex items-center gap-1.5 font-display">
                  <MessageSquare className="w-5 h-5 text-[#4DA6FF]" />
                  Send Zainab a Direct Message
                </h2>
              </div>

              {success ? (
                <div className="bg-emerald-50 border border-emerald-500/20 text-emerald-950 p-6 rounded-2xl space-y-4 text-center animate-in zoom-in-95 duration-250">
                  <div className="w-12 h-12 bg-white text-emerald-500 rounded-full flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="font-extrabold text-slate-800 text-sm">Message Transmitted Successfully!</h3>
                    <p className="text-xs text-slate-500 max-w-md mx-auto leading-relaxed">
                      Zainab values your initiative. Your query was dispatched to her direct support desk at **techwithzainab02@gmail.com**. Keep an eye on your inbox!
                    </p>
                  </div>
                  <button 
                    onClick={() => setSuccess(false)}
                    className="bg-[#1F2A44] hover:bg-[#4DA6FF] text-white text-xs font-bold px-5 py-2.5 rounded-xl transition-colors shadow-sm"
                  >
                    Send Another Question
                  </button>
                </div>
              ) : (
                <form onSubmit={handleMessageSubmit} className="space-y-4 text-xs">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="font-bold text-slate-700 block">Your Name <span className="text-rose-500">*</span></label>
                      <input 
                        type="text" 
                        placeholder="Jane Doe"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-150 rounded-xl px-3 py-2.5 pl-4 focus:bg-white focus:outline-none placeholder-slate-400"
                        required
                      />
                    </div>
                    
                    <div className="space-y-1">
                      <label className="font-bold text-slate-700 block">Email Address <span className="text-rose-500">*</span></label>
                      <input 
                        type="email" 
                        placeholder="jane@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-150 rounded-xl px-3 py-2.5 pl-4 focus:bg-white focus:outline-none placeholder-slate-400"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="font-bold text-slate-700 block">Subject</label>
                    <input 
                      type="text" 
                      placeholder="Tech Skills Advice / Resume Vetting Inquiry"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-150 rounded-xl px-3 py-2.5 pl-4 focus:bg-white focus:outline-none placeholder-slate-400"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="font-bold text-slate-700 block">Your Message <span className="text-rose-500">*</span></label>
                    <textarea 
                      rows={5}
                      placeholder="Write your background story here, your career hurdles, and what guidance you are seeking..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-150 rounded-xl px-3 py-3 pl-4 focus:bg-white focus:outline-none placeholder-slate-400"
                      required
                    ></textarea>
                  </div>

                  <p className="text-slate-400 text-[10px] select-none italic leading-relaxed">
                    * TechWithZainab strictly logs private inquiries in lockstep with AdSense and GDPR guidelines. No information will ever be distributed.
                  </p>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={sending}
                      className="w-full sm:w-auto bg-[#1F2A44] hover:bg-[#4DA6FF] text-white font-bold px-6 py-3 rounded-xl transition-all shadow-md active:scale-95 flex items-center justify-center gap-2 text-xs"
                    >
                      {sending ? 'Transmitting...' : 'Send Message Now'}
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </form>
              )}

            </div>
          </div>

          {/* Right Column: Address/Card/Map */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            
            {/* Address Core Details */}
            <div className="bg-white border p-6 sm:p-8 rounded-3xl shadow-premium space-y-6">
              <h3 className="font-display font-bold text-slate-800 text-sm pb-2 border-b">
                Contact Directory
              </h3>
              
              <div className="space-y-4">
                
                {/* Email Item */}
                <div className="flex items-start gap-3.5">
                  <div className="bg-sky-50 text-[#4DA6FF] p-2.5 rounded-xl shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 font-mono leading-none tracking-wider">PRIMARY SUPPORT EMAIL</p>
                    <a href="mailto:techwithzainab02@gmail.com" className="text-[#1F2A44] font-semibold text-xs sm:text-sm hover:underline hover:text-[#4DA6FF]">
                      techwithzainab02@gmail.com
                    </a>
                    <p className="text-[10px] text-slate-400 mt-0.5 leading-snug">Average response delay: under 24 hours.</p>
                  </div>
                </div>

                {/* Social media handles */}
                <div>
                  <p className="text-[10px] text-slate-400 font-mono tracking-wider mb-2.5 uppercase">Social Networks</p>
                  <div className="flex items-center gap-3">
                    <a href="https://instagram.com" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 border rounded-lg text-slate-650 hover:bg-[#4DA6FF] hover:text-slate-900 text-xs font-semibold select-none">
                      <Instagram className="w-4 h-4" /> Instagram
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 border rounded-lg text-slate-650 hover:bg-[#4DA6FF] hover:text-slate-900 text-xs font-semibold select-none">
                      <Twitter className="w-4 h-4" /> Twitter
                    </a>
                  </div>
                </div>

              </div>
            </div>

            {/* AD BANNER FOR SIDEBAR */}
            <AdSensePlaceholder slot="sidebar" />

            {/* Embedded map placeholder */}
            <div className="bg-white border p-4 rounded-3xl shadow-premium relative overflow-hidden flex flex-col justify-end min-h-[180px]">
              <div className="absolute inset-0 bg-slate-100 z-0">
                {/* Visual grid representing cartography wires */}
                <div className="w-full h-full opacity-20 bg-[radial-gradient(#1f2a44_1px,transparent_1px)] [background-size:16px_16px]"></div>
                
                {/* Accent lines representing highways */}
                <div className="absolute left-[30%] top-0 w-2.5 h-full bg-[#4DA6FF]/15 -skew-x-12"></div>
                <div className="absolute left-0 top-[40%] w-full h-2.5 bg-indigo-500/10 skew-y-6"></div>
                
                {/* Pin marker vector */}
                <div className="absolute left-[45%] top-[35%] -translate-x-1/2 -translate-y-1/2 z-10 animate-bounce">
                  <div className="bg-rose-500 text-white p-2 rounded-full shadow-lg flex items-center justify-center border-2 border-white relative">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <span className="w-4 h-1.5 bg-slate-500/45 rounded-full filter blur-[1.5px] block mx-auto -mt-0.5"></span>
                </div>
              </div>
              
              <div className="relative z-10 bg-white/95 backdrop-blur-sm p-3.5 rounded-xl border shadow-sm">
                <p className="text-[10px] text-slate-400 font-mono tracking-wider uppercase font-semibold">Remote Operations Head</p>
                <h4 className="font-extrabold text-slate-800 text-xs mt-0.5">Worldwide (Digital-first Node)</h4>
                <p className="text-[10px] text-slate-500 mt-1">Based asynchronously across Europe/Africa time grids.</p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* FAQ Preview Accordion Block */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="bg-[#1F2A44] text-white p-8 sm:p-12 rounded-3xl space-y-6 relative overflow-hidden shadow-lg">
          <div className="absolute bottom-0 right-0 w-48 h-48 bg-[#4DA6FF]/5 rounded-full filter blur-3xl"></div>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-slate-700 pb-5 gap-4">
            <div>
              <p className="text-[#4DA6FF] text-xs font-mono font-bold uppercase tracking-wider block">Have any quick queries?</p>
              <h2 className="text-xl sm:text-2xl font-extrabold font-display">FAQ Snippet Preview</h2>
            </div>
            <button 
              onClick={() => onNavigate('faq')}
              className="bg-slate-800 text-white border border-slate-700 hover:text-[#4DA6FF] text-xs font-semibold px-4 py-2 rounded-xl transition-all flex items-center gap-1 shrink-0"
            >
              See All 10+ Detailed Answers <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="space-y-3.5 text-left">
            {miniFaqs.map((item) => (
              <div 
                key={item.id} 
                className="bg-slate-850/50 border border-slate-800/80 rounded-xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFaq(item.id)}
                  className="w-full flex items-center justify-between p-4 font-semibold text-xs sm:text-sm text-left hover:text-[#4DA6FF]"
                >
                  <span className="flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-slate-400 shrink-0" />
                    {item.question}
                  </span>
                  <span className="text-slate-400 text-xs shrink-0 pl-2">
                    {openFaqId === item.id ? '−' : '+'}
                  </span>
                </button>
                
                {openFaqId === item.id && (
                  <div className="p-4 pt-0 text-xs text-slate-350 leading-relaxed border-t border-slate-800/80 prose-invert">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
