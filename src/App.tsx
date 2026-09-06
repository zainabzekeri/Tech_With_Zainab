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
  const [requestedSlug, setRequestedSlug] = useState('');

  useEffect(() => {
  const handleRouteChange = () => {
    const path = window.location.pathname.replace(/^\/+|\/+$/g, '');
    const [route, slug] = path.split('/');

    if (route === 'blog' && slug) {
      setCurrentView('blog');
      setRequestedSlug(slug);
      window.scrollTo({ top: 0, behavior: 'instant' });
      return;
    }

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

    if (validViews.includes(route)) {
      setCurrentView(route);

      if (route !== 'blog') {
        setActiveBlogPost(null);
        setRequestedSlug('');
      }
    } else if (!route) {
      setCurrentView('home');
      setActiveBlogPost(null);
      setRequestedSlug('');
    }

    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  handleRouteChange();

  window.addEventListener('popstate', handleRouteChange);

  return () => {
    window.removeEventListener('popstate', handleRouteChange);
  };
}, []);

  const navigateTo = (view: string) => {
    window.history.pushState({}, '', `/${view}`);
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  const handleReadBlogPost = (post: BlogPost) => {
   setActiveBlogPost(post);
   window.history.pushState({}, '', `/blog/${post.slug}`);
   window.dispatchEvent(new PopStateEvent('popstate'));
   window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  const handleCloseBlogPost = () => {
    setActiveBlogPost(null);
    setRequestedSlug('');
    window.history.pushState({}, '', '/blog');
    window.dispatchEvent(new PopStateEvent('popstate'));
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
            post={activeBlogPost}
            onClosePost={handleCloseBlogPost}
            requestedSlug={requestedSlug}
 
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
        image={activeBlogPost?.featuredImage?.asset?.url}
        ogTitle={activeBlogPost?.ogTitle}
        ogDescription={activeBlogPost?.ogDescription}
        ogImage={activeBlogPost?.ogImage?.asset?.url}
        twitterTitle={activeBlogPost?.twitterTitle}
        twitterDescription={activeBlogPost?.twitterDescription}
        twitterImage={activeBlogPost?.twitterImage?.asset?.url}
        imageAlt={activeBlogPost?.featuredImage?.alt}
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