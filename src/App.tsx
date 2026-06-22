import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SEOHead from './components/SEOHead';
import HomeView from './components/HomeView';
import AboutView from './components/AboutView';
import BlogView from './components/BlogView';
import RemoteJobsView from './components/RemoteJobsView';
import ContactView from './components/ContactView';
import FAQView from './components/FaqView';
import LegalViews from './components/LegalViews';
import { BlogPost } from './types';

export default function App() {
  const [currentView, setCurrentView] = useState('home');
  const [activeBlogPost, setActiveBlogPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase().replace('#/', '');
      const validViews = [
        'home', 
        'about', 
        'blog', 
        'remote-jobs', 
        'faq', 
        'contact', 
        'privacy-policy', 
        'terms', 
        'disclaimer'
      ];
      
      if (validViews.includes(hash)) {
        setCurrentView(hash);
        // If navigating away from blog, close active article
        if (hash !== 'blog') {
          setActiveBlogPost(null);
        }
      } else if (!hash) {
        setCurrentView('home');
        setActiveBlogPost(null);
      }
      
      // Smooth reset scroll position to standard top of screen
      window.scrollTo({ top: 0, behavior: 'instant' });
    };

    // Call on mount to evaluate initial deep link
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (view: string) => {
    window.location.hash = `#/${view}`;
  };

  const handleReadBlogPost = (post: BlogPost) => {
    setActiveBlogPost(post);
    // Explicitly confirm hash is blog
    window.location.hash = '#/blog';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCloseBlogPost = () => {
    setActiveBlogPost(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderActiveView = () => {
    switch (currentView) {
      case 'about':
        return <AboutView onNavigate={navigateTo} />;
      case 'blog':
        return (
          <BlogView 
            onReadBlogPost={handleReadBlogPost} 
            activePost={activeBlogPost} 
            onClosePost={handleCloseBlogPost} 
          />
        );
      case 'remote-jobs':
        return <RemoteJobsView />;
      case 'contact':
        return <ContactView onNavigate={navigateTo} />;
      case 'faq':
        return <FAQView />;
      case 'privacy-policy':
      case 'terms':
      case 'disclaimer':
        return <LegalViews type={currentView as any} />;
      case 'home':
      default:
        return <HomeView onNavigate={navigateTo} onReadBlogPost={handleReadBlogPost} />;
    }
  };

  return (
    <div id="tech-with-zainab-wrapper" className="min-h-screen bg-[#fafbfc] flex flex-col justify-between font-sans">
      
      {/* Dynamic Document Title and SEO Tracker */}
      <SEOHead 
        view={currentView} 
        subTitle={activeBlogPost?.title} 
        description={activeBlogPost?.excerpt} 
      />

      {/* Sticky Universal Header */}
      <Navbar currentView={currentView} onNavigate={navigateTo} />

      {/* Main Content View Container with top margin to offset the sticky header */}
      <main id="main-content-viewport" className="pt-24 flex-grow w-full max-w-7xl mx-auto">
        {renderActiveView()}
      </main>

      {/* Structured Legal and Info-focused Footer */}
      <Footer onNavigate={navigateTo} />
      
    </div>
  );
}
