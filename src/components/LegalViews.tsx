import { Shield, FileText, AlertTriangle, Scale, Lock, RefreshCw, Mail } from 'lucide-react';

interface LegalViewProps {
  type: 'privacy-policy' | 'terms' | 'disclaimer';
}

export default function LegalViews({ type }: LegalViewProps) {
  
  const getHeader = () => {
    switch (type) {
      case 'privacy-policy':
        return {
          title: "Privacy Policy",
          icon: <Shield className="w-6 h-6 text-emerald-500" />,
          subtitle: "How TechWithZainab protects your data, uses cookies, and handles information transparently.",
          caption: "Last updated: June 22, 2026"
        };
      case 'terms':
        return {
          title: "Terms & Conditions",
          icon: <FileText className="w-6 h-6 text-[#4DA6FF]" />,
          subtitle: "Standard usage guidelines, intellectual rules, and legal terms when utilizing our platform.",
          caption: "Last updated: June 22, 2026"
        };
      case 'disclaimer':
      default:
        return {
          title: "AdSense Disclaimer",
          icon: <AlertTriangle className="w-6 h-6 text-amber-500" />,
          subtitle: "Important disclosure information about advertisements, affiliate links, and advice limits.",
          caption: "Last updated: June 22, 2026"
        };
    }
  };

  const { title, icon, subtitle, caption } = getHeader();

  return (
    <div id={`legal-${type}-container`} className="max-w-4xl mx-auto px-4 py-12 animate-in fade-in duration-350">
      
      {/* Document Sheet Container */}
      <div className="bg-white border rounded-3xl shadow-premium overflow-hidden">
        
        {/* Document Header */}
        <header className="bg-slate-50 border-b p-6 sm:p-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-white rounded-2xl shadow-sm border">
              {icon}
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-wider text-slate-400 font-mono font-bold block">Legal Compliancy</span>
              <h1 className="text-xl sm:text-2xl font-extrabold text-[#1F2A44] font-display">{title}</h1>
              <p className="text-[11px] text-slate-500 mt-1 leading-normal max-w-xl">{subtitle}</p>
            </div>
          </div>
          <div className="shrink-0 bg-sky-50 px-3.5 py-1.5 rounded-xl border border-sky-100 flex items-center gap-1.5 text-[10px] text-[#1F2A44] font-semibold font-mono">
            <RefreshCw className="w-3.5 h-3.5 text-[#4DA6FF]" />
            <span>{caption}</span>
          </div>
        </header>

        {/* Document Text Body */}
        <section className="p-6 sm:p-12 text-slate-600 space-y-6 text-xs sm:text-sm leading-relaxed font-sans text-left">
          
          {/* PRIVACY POLICY CONTENT */}
          {type === 'privacy-policy' && (
            <>
              <div className="space-y-2">
                <h2 className="text-sm font-bold text-[#1F2A44] uppercase tracking-wider flex items-center gap-2">
                  <Scale className="w-4 h-4 text-[#4DA6FF]" /> 1. Overview of Data Collection
                </h2>
                <p>
                  At TechWithZainab (the "Platform"), accessible from our dev/pre-hosting environments, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by the Platform and how we utilize it securely.
                </p>
                <p>
                  If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us at <strong>techwithzainab02@gmail.com</strong>.
                </p>
              </div>

              <div className="space-y-2">
                <h2 className="text-sm font-bold text-[#1F2A44] uppercase tracking-wider flex items-center gap-2">
                  <Lock className="w-4 h-4 text-[#4DA6FF]" /> 2. Personal Information We Collect
                </h2>
                <p>
                  The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>Newsletter Subscriptions:</strong> When you subscribe, we collect only your active email address.</li>
                  <li><strong>Contact Forms:</strong> When you fill a question card, we log your name, email address, subject and the content of your message.</li>
                  <li><strong>Job Applications:</strong> When submitting simulated resumes on our board, files are buffered locally only. We log no permanent server data.</li>
                </ul>
              </div>

              <div className="space-y-2">
                <h2 className="text-sm font-bold text-[#1F2A44] uppercase tracking-wider flex items-center gap-2">
                  <FileText className="w-4 h-4 text-[#4DA6FF]" /> 3. Google AdSense & Cookie Policies
                </h2>
                <p>
                  Google is one of the third-party vendors on our Platform. It uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to our Platform and other sites on the internet.
                </p>
                <p>
                  These third-party ad servers or ad networks use technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on TechWithZainab, which are sent directly to users' browsers. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.
                </p>
                <p>
                  Note that TechWithZainab has no access to or control over these cookies that are used by third-party advertisers.
                </p>
              </div>

              <div className="space-y-2">
                <h2 className="text-sm font-bold text-[#1F2A44] uppercase tracking-wider flex items-center gap-2">
                  <Shield className="w-4 h-4 text-[#4DA6FF]" /> 4. GDPR & CCPA Data Rights Compliance
                </h2>
                <p>
                  We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>The right to access</strong> – You have the right to request copies of your personal data.</li>
                  <li><strong>The right to rectification</strong> – You have the right to request that we correct any information you believe is inaccurate.</li>
                  <li><strong>The right to erasure</strong> – You have the right to request that we erase your personal data under certain conditions.</li>
                  <li><strong>The right to object to processing</strong> – You have the right to object to our processing of your personal data under certain conditions.</li>
                </ul>
                <p>
                  To exercise any of these, contact us at <strong>techwithzainab02@gmail.com</strong>.
                </p>
              </div>
            </>
          )}

          {/* TERMS & CONDITIONS CONTENT */}
          {type === 'terms' && (
            <>
              <div className="space-y-2">
                <h2 className="text-sm font-bold text-[#1F2A44] uppercase tracking-wider flex items-center gap-2">
                  <Scale className="w-4 h-4 text-[#4DA6FF]" /> 1. Intellectual Agreement & Acceptable Use
                </h2>
                <p>
                  Welcome to TechWithZainab! These terms and conditions outline the rules and regulations for the use of our Platform. By accessing this web application, we assume you accept these terms and conditions. Do not continue to use TechWithZainab if you do not agree to take all of the terms and conditions stated on this sheet.
                </p>
                <p>
                  Unless otherwise stated, TechWithZainab and/or its licensors own the intellectual property rights for all material on TechWithZainab. All intellectual property rights are reserved. You may access this from TechWithZainab for your own personal use subjected to restrictions set in these terms and conditions.
                </p>
              </div>

              <div className="space-y-2">
                <h2 className="text-sm font-bold text-[#1F2A44] uppercase tracking-wider flex items-center gap-2">
                  <Lock className="w-4 h-4 text-[#4DA6FF]" /> 2. User Restrictions
                </h2>
                <p>You are specifically restricted from all of the following:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Publishing any Platform materials, code, or images in any other media without credit.</li>
                  <li>Selling, sublicensing, or otherwise commercializing any of our free educational checklists.</li>
                  <li>Using this Platform in any way that is or may be damaging to this Platform or user accessibility.</li>
                  <li>Engaging in any data mining, data harvesting, data extracting or any other similar activity.</li>
                </ul>
              </div>

              <div className="space-y-2">
                <h2 className="text-sm font-bold text-[#1F2A44] uppercase tracking-wider flex items-center gap-2">
                  <FileText className="w-4 h-4 text-[#4DA6FF]" /> 3. User Submissions & Mock Interactive Files
                </h2>
                <p>
                  In these standard Website Terms, "Your Content" shall mean any audio, video, text, images, or mock resumes you choose to display/transpose on this Website. By uploading simulated items or sending message forms, you grant TechWithZainab a non-exclusive, worldwide irrevocable, sublicensable license to process the content solely for educational reviews.
                </p>
                <p>
                  Your Content must be your own and must not be invading any third-party’s rights. TechWithZainab reserves the right to remove any of Your Content from this Website at any time without notice.
                </p>
              </div>

              <div className="space-y-2">
                <h2 className="text-sm font-bold text-[#1F2A44] uppercase tracking-wider flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-[#4DA6FF]" /> 4. Educational Content Agreement
                </h2>
                <p>
                  The educational tutorials, articles, statistics, and career checklists displayed here are compiled purely for exploratory training. We make no guarantees of guaranteed employment or freelance contracts from reviewing our content.
                </p>
              </div>
            </>
          )}

          {/* DISCLAIMER CONTENT */}
          {type === 'disclaimer' && (
            <>
              <div className="space-y-2">
                <h2 className="text-sm font-bold text-[#1F2A44] uppercase tracking-wider flex items-center gap-2">
                  <Scale className="w-4 h-4 text-[#4DA6FF]" /> 1. No Legal, Financial or Coding Advice
                </h2>
                <p>
                  If you require any more information or have any questions about our site's disclaimer, please feel free to contact us by email at <strong>techwithzainab02@gmail.com</strong>.
                </p>
                <p>
                  All the information on this website - TechWithZainab - is published in good faith and for general educational and informational purposes only. TechWithZainab does not make any warranties about the completeness, reliability, and accuracy of this information. Any action you take upon the information you find on this website, is strictly at your own risk. TechWithZainab will not be liable for any losses and/or damages in connection with the use of our website.
                </p>
              </div>

              <div className="space-y-2">
                <h2 className="text-sm font-bold text-[#1F2A44] uppercase tracking-wider flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-[#4DA6FF]" /> 2. Google AdSense Advertising Disclosure
                </h2>
                <p>
                  This Platform reserves spaces for third-part ad banner distributions. Google, as a third-party vendor, uses cookies to serve ads on this digital Platform. Google's use of advertising cookies enables it and its partners to serve ads to our users based on their visit to this site and other sites on the Internet.
                </p>
                <p>
                  These third-party ad networks track browser metrics autonomously. TechWithZainab receives standard publisher compensation based on ad impressions and click-throughs.
                </p>
              </div>

              <div className="space-y-2">
                <h2 className="text-sm font-bold text-[#1F2A44] uppercase tracking-wider flex items-center gap-2">
                  <FileText className="w-4 h-4 text-[#4DA6FF]" /> 3. External Hyperlink Disclosures
                </h2>
                <p>
                  From our website, you can visit other websites by following hyperlinks to such external sites. While we strive to provide only quality links to useful and ethical websites, we have no control over the content and nature of these sites. These links to other websites do not imply a recommendation for all the content found on these sites. Site owners and content may change without notice and may occur before we have the opportunity to remove a link which may have gone 'bad'.
                </p>
                <p>
                  Please be also aware that when you leave our website, other sites may have different privacy policies and terms which are beyond our control. Please be sure to check the Privacy Policies of these sites as well as their "Terms of Service" before engaging in any business or uploading any information.
                </p>
              </div>

              <div className="space-y-2">
                <h1 className="text-xs font-bold text-[#1F2A44] uppercase tracking-wider flex items-center gap-1.5 pt-4">
                  <Mail className="w-4 h-4 text-[#4DA6FF]" /> Support Query Dispatch
                </h1>
                <p className="text-slate-450 leading-relaxed font-semibold">
                  For formal legal audits, GDPR delete sweeps, or publisher feedback, please direct communications to: <strong>techwithzainab02@gmail.com</strong>
                </p>
              </div>
            </>
          )}

        </section>

        {/* Legal Footer Info */}
        <footer className="bg-slate-50 border-t p-5 text-center text-[10px] text-slate-400 font-mono">
          <span>Official Legal Compliance Sheet - Certified for AdSense Publisher Verification</span>
        </footer>

      </div>

    </div>
  );
}
