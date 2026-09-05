import { useState, useMemo, useEffect } from 'react';
import type { SubmitEvent } from 'react';
import { Search, Compass, BookOpen, Clock, ArrowRight, User, Calendar, Tag, ArrowLeft, Mail, ShieldAlert } from 'lucide-react';
import { BlogPost, CategoryType } from '../types';
import AdSensePlaceholder from './AdSensePlaceholder';
import { client } from '../lib/sanity';
import { POSTS_QUERY } from '../lib/queries';
import { PortableText, PortableTextComponents } from '@portabletext/react';
const portableTextComponents: PortableTextComponents = {
  types: {
    youtube: ({ value }) => {
      if (!value?.url) return null;

      const getYouTubeId = (url: string) => {
        try {
          const parsedUrl = new URL(url);

          if (parsedUrl.hostname.includes('youtu.be')) {
            return parsedUrl.pathname.slice(1);
          }

          if (parsedUrl.hostname.includes('youtube.com')) {
            return parsedUrl.searchParams.get('v');
          }

          return null;
        } catch {
          return null;
        }
      };

      const videoId = getYouTubeId(value.url);

      if (!videoId) {
        return (
          <div className="my-6 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
            Invalid YouTube URL.
          </div>
        );
      }

      return (
        <div className="my-8">
          {value.title && (
            <h3 className="mb-3 text-lg font-extrabold text-[#1F2A44]">
              {value.title}
            </h3>
          )}

          <div className="relative aspect-video overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
            <iframe
              className="absolute inset-0 h-full w-full"
              src={`https://www.youtube.com/embed/${videoId}`}
              title={value.title || 'YouTube video'}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      );
    },

    table: ({ value }) => {
      if (!value?.rows?.length) return null;

      return (
        <div className="my-8 overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
          {value.title && (
            <h3 className="bg-slate-50 px-5 py-4 text-base font-extrabold text-[#1F2A44] border-b border-slate-200">
              {value.title}
            </h3>
          )}

          <table className="w-full min-w-[650px] border-collapse text-sm">
            <tbody>
              {value.rows.map((row: any, rowIndex: number) => (
                <tr
                  key={rowIndex}
                  className={
                    rowIndex === 0
                      ? 'bg-[#1F2A44] text-white'
                      : 'border-t border-slate-200'
                  }
                >
                  {row.cells?.map((cell: string, cellIndex: number) =>
                    rowIndex === 0 ? (
                      <th
                        key={cellIndex}
                        className="px-4 py-3 text-left font-bold"
                      >
                        {cell}
                      </th>
                    ) : (
                      <td
                        key={cellIndex}
                        className="px-4 py-3 text-slate-600"
                      >
                        {cell}
                      </td>
                    )
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    },
  },
};


interface BlogViewProps {
  onReadBlogPost: (post: BlogPost) => void;
  post: BlogPost | null;
  onClosePost: () => void;
}

export default function BlogView({ onReadBlogPost, post, onClosePost }: BlogViewProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<CategoryType | 'All'>('All');
  const [emailSub, setEmailSub] = useState('');
  const [subDone, setSubDone] = useState(false);
  const [posts, setPosts] = useState<BlogPost[]>([]);

  const categories: (CategoryType | 'All')[] = ['All', 'Tech Skills', 'Freelancing', 'Remote Jobs', 'Digital Tools'];

  const filteredPosts = useMemo(() => {
  return posts.filter((post) => {
    const matchesCategory =
      selectedCategory.toLowerCase() === "all" ||
      post.category?.trim().toLowerCase() ===
        selectedCategory.trim().toLowerCase();

    const searchText = searchQuery.trim().toLowerCase();

    const bodyText = JSON.stringify(post.content || "").toLowerCase();

    const matchesSearch =
  post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
  (post.excerpt || "").toLowerCase().includes(searchQuery.toLowerCase()) ||
  post.tags.some((tag) =>
    tag.toLowerCase().includes(searchQuery.toLowerCase())
  );

    return matchesCategory && matchesSearch;
  });
}, [posts, selectedCategory, searchQuery]);

  useEffect(() => {
  console.log("useEffect started");

  async function fetchPosts() {
    console.log("fetchPosts started");

    try {
      const data = await client.fetch(POSTS_QUERY);

      console.log("Sanity data:", data);

      console.log(
  "SEARCH TEST:",
  JSON.stringify(data[0]?.body || "").toLowerCase().includes("competence practice")
);

      setPosts(
  data.map((post: any) => ({
    id: post._id,
    title: post.title,
    excerpt: post.excerpt || "",
    content: post.body,

    downloadResource: post.downloadResource
      ? {
          title: post.downloadResource.title || "",
          description: post.downloadResource.description || "",
          url: post.downloadResource.url || "",
        }
      : null,

    image: post.featuredImage?.asset?.url || "",
          category: post.category?.trim() || "General",
          date: post.publishedAt
            ? new Date(post.publishedAt).toLocaleDateString()
            : "",
          readTime: post.readingTime || "5 min read",
          tags: post.tags || [],
          author: post.author || "TechWithZainab",
          authorImage: post.authorImage || "",
          relatedPosts: post.relatedPosts || [],
          isFeatured: post.isFeatured || false,
        }))
      );

    } catch (error) {
      console.error("Sanity Error:", error);
    }
  }

  fetchPosts();
}, []);
  const recentPosts = useMemo(() => {
  return posts.slice(0, 3);
}, [posts]);

const featuredPosts = useMemo(() => {
  return posts.filter((post) => post.isFeatured);
}, [posts]);

  const handleSubscribe = async (e: SubmitEvent) => {
  e.preventDefault();

  if (!emailSub || !emailSub.includes('@')) {
    return;
  }

  try {
    const response = await fetch('/.netlify/functions/subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: emailSub,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Subscription failed');
    }

    setSubDone(true);
    setEmailSub('');

    setTimeout(() => {
      setSubDone(false);
    }, 5000);
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    alert('Sorry, we could not subscribe you right now. Please try again.');
  }
};

  // If viewing a single post in detail
if (post) {

  const matchedRelated = post.relatedPosts?.length
  ? posts.filter(
      (p) => p.id !== post.id && post.relatedPosts?.includes(p.id)
    )
  : posts.filter((p) => p.id !== post.id).slice(0, 2);

    return (
      <div id="single-blog-reader" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-in fade-in duration-350">
        
        {/* Back Button */}
        <button 
          onClick={onClosePost}
          className="flex items-center gap-2 text-slate-500 hover:text-[#1F2A44] text-xs font-semibold mb-8 group bg-white border border-slate-200 px-4 py-2 rounded-xl transition-all shadow-sm"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Articles Hub
        </button>

        {/* AdSense Top Header */}
        <div className="mb-8">
          <AdSensePlaceholder slot="header" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Article Body */}
          <article className="lg:col-span-8 bg-white border border-slate-150/60 p-6 sm:p-10 rounded-3xl shadow-premium space-y-6">
            
            {/* Metadata and Categories */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="bg-sky-50 text-[#1F2A44] font-semibold text-xs px-3 py-1 rounded-full uppercase tracking-wider font-mono">
                {post.category}
              </span>
              <div className="flex items-center gap-1.5 text-xs text-slate-400">
                <Calendar className="w-3.5 h-3.5" />
                <span>{post.date}</span>
                <span>•</span>
                <Clock className="w-3.5 h-3.5" />
                <span>{post.readTime}</span>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-2xl sm:text-3.5xl lg:text-4xl font-extrabold text-[#1F2A44] leading-tight font-display">
              {post.title}
            </h1>

            {/* Hero Image */}
            <div className="rounded-2xl overflow-hidden aspect-video border shadow-sm">
              <img 
                src={post.image || undefined} 
                alt={post.title} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Tags line */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className="text-xs text-slate-400 flex items-center gap-1 font-medium">
                <Tag className="w-3.5 h-3.5" /> Filed under:
              </span>
              {post.tags.map((tag, idx) => (
                <span key={idx} className="bg-slate-100 hover:bg-[#4DA6FF]/10 hover:text-[#1F2A44] transition-colors text-slate-600 text-[10px] sm:text-xs px-2.5 py-0.5 rounded-md font-medium">
                  #{tag}
                </span>
              ))}
            </div>

            {/* Styled Rendered Content body */}
            <div className="text-slate-650 space-y-5 text-sm sm:text-base leading-relaxed text-slate-600 border-t border-slate-100 pt-6">
              <PortableText
  value={post.content}
  components={portableTextComponents}
/>
            </div>
{post.downloadResource?.url && (
  <div className="my-8 bg-sky-50 border border-sky-100 rounded-2xl p-6">
    <div className="flex items-start gap-4">
      
      <div className="w-11 h-11 rounded-xl bg-[#4DA6FF] text-white flex items-center justify-center shrink-0 text-xl">
        📥
      </div>

      <div className="flex-1">
        <h3 className="text-base font-extrabold text-[#1F2A44]">
          {post.downloadResource.title || "Download Resource"}
        </h3>

        {post.downloadResource.description && (
          <p className="text-sm text-slate-600 mt-1 mb-4">
            {post.downloadResource.description}
          </p>
        )}

        <a
          href={post.downloadResource.url}
          target="_blank"
          rel="noopener noreferrer"
          download
          className="inline-flex items-center gap-2 bg-[#1F2A44] text-white px-4 py-2.5 rounded-xl text-xs font-bold hover:bg-[#4DA6FF] transition-all"
        >
          📥 Download Now
        </a>
      </div>

    </div>
  </div>
)}
            {/* AdSense In-feed middle advertisement */}
            <div className="py-6 border-t border-b border-dashed border-slate-150">
              <AdSensePlaceholder slot="infeed" />
            </div>

            {/* Author Block */}
            <div id="author-reference" className="bg-slate-50 border border-slate-100 p-6 rounded-2xl flex flex-col sm:flex-row items-center sm:items-start gap-4">
              <img 
                src={post.authorImage || undefined}
                alt={post.author} 
                className="w-14 h-14 rounded-2xl object-cover border-2 border-[#4DA6FF] shadow-sm shrink-0"
                referrerPolicy="no-referrer"
              />
              <div className="text-center sm:text-left space-y-1.5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <h4 className="text-sm font-extrabold text-[#1F2A44]">Authored by {post.author}</h4>
                  <span className="bg-[#1F2A44] text-white px-2.0 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider font-mono inline-block">
                    Founder
                  </span>
                </div>
                <p className="text-xs text-slate-450 leading-relaxed text-slate-500">
                  Zainab is the lead educator at TechWithZainab Academy, dedicating her time to curating free learning frameworks, reviewing remote applications, and producing step-by-step digital articles.
                </p>
              </div>
            </div>

          </article>

          {/* Single Page Sidebar */}
          <aside className="lg:col-span-4 space-y-8">
            
            {/* Sidebar Ad Slot */}
            <AdSensePlaceholder slot="sidebar" />

            {/* Related Posts */}
            <div className="bg-white border rounded-3xl p-6 shadow-premium space-y-4">
              <h3 className="font-display font-extrabold text-slate-800 text-sm pb-2 border-b">
                Related Articles
              </h3>
              <div className="space-y-4">
                {matchedRelated.map(post => (
                  <div 
                    key={post.id} 
                    onClick={() => onReadBlogPost(post)}
                    className="flex gap-3 hover:bg-slate-50 p-2 rounded-xl transition-all cursor-pointer group"
                  >
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-16 h-16 rounded-lg object-cover border group-hover:scale-102 transition-transform shrink-0"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <h4 className="text-xs font-bold text-slate-800 leading-snug group-hover:text-[#4DA6FF] transition-colors line-clamp-2">
                        {post.title}
                      </h4>
                      <p className="text-[10px] text-slate-400 mt-1">{post.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter widget */}
            <div className="bg-[#1F2A44] text-white rounded-3xl p-6 shadow-premium space-y-4 relative overflow-hidden">
              <h3 className="font-display font-extrabold text-white text-sm">
                Join Zainab's Newsletter
              </h3>
              <p className="text-xs text-slate-300 leading-normal">
                Don't miss the next remote tutorial list or freelancer bid framework.
              </p>
              {subDone ? (
                <div className="bg-[#4DA6FF]/10 text-[#4DA6FF] p-3 rounded-xl text-xs font-semibold">
                  ✓ Successfully signed up!
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="space-y-2">
                  <input 
  type="email" 
  id="newsletter-email"
  name="email"
  placeholder="you@domain.com" 
  value={emailSub}
  onChange={(e) => setEmailSub(e.target.value)}
  className="w-full bg-slate-900/95 border border-slate-800 rounded-xl px-3 py-2.5 text-xs focus:border-[#4DA6FF] focus:outline-none placeholder-slate-600 font-sans text-white"
  required
/>
                  <button 
                    type="submit" 
                    className="w-full bg-[#4DA6FF] text-slate-900 text-xs font-bold py-2 rounded-xl hover:bg-white transition-all shadow-md"
                  >
                    Sign Me Up For Free
                  </button>
                </form>
              )}
            </div>

          </aside>

        </div>
      </div>
    );
  }

  return (
    <div id="blog-search-and-listing" className="space-y-12 pb-16 animate-in fade-in duration-500">
      
      {/* Blog Hero Heading */}
      <section id="blog-hero" className="bg-[#1F2A44] text-white py-14 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <p className="text-[#4DA6FF] text-xs font-mono uppercase tracking-widest font-bold">Free Curriculum & Insights</p>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Learn Tech Skills & Get Clients
          </h1>
          <p className="text-slate-350 text-xs sm:text-sm max-w-2xl mx-auto text-slate-300 leading-relaxed">
            Zero jargon. Zero fluff. Explore simple tutorials crafted specifically to help complete beginners jump-start their digital and freelance operations.
          </p>
        </div>
      </section>

      {/* Main Filter, Search and Listing Container */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column (Search, Categories, Blog Feed) */}
          <main className="lg:col-span-8 space-y-8">
            
            {/* Search and Filters Strip */}
            <div className="bg-white border p-5 rounded-2xl shadow-premium space-y-4">
              
              {/* Dynamic Search */}
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5 animate-pulse" />
                <input 
                  type="text" 
                  placeholder="Search articles by title, keywords or tags..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-100 rounded-xl pl-10 pr-4 py-3 text-xs sm:text-sm focus:bg-white focus:ring-1 focus:ring-brand-light focus:border-brand-light focus:outline-none transition-all"
                />
              </div>

              {/* Category pills */}
              <div className="flex flex-wrap items-center gap-1.5 pt-1">
                {categories.map((cat, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium cursor-pointer transition-all ${
                      selectedCategory === cat 
                        ? 'bg-[#1F2A44] text-white shadow-md' 
                        : 'bg-slate-50 text-slate-650 hover:bg-slate-100 text-slate-600'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

            </div>

            {/* AD BANNER BETWEEN LISTING FILTERS AND FEED */}
            <AdSensePlaceholder slot="header" />

            {/* Featured Posts */}
{featuredPosts.length > 0 && (
  <section className="space-y-4">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-[10px] font-mono uppercase tracking-widest text-[#4DA6FF] font-bold">
          Editor's Picks
        </p>
        <h2 className="text-xl font-extrabold text-[#1F2A44]">
          Featured Articles
        </h2>
      </div>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {featuredPosts.map((featuredPost) => (
        <article
          key={featuredPost.id}
          onClick={() => onReadBlogPost(featuredPost)}
          className="bg-white border-2 border-[#4DA6FF]/20 p-4 rounded-3xl shadow-premium hover:shadow-2xl transition-all flex flex-col justify-between group cursor-pointer"
        >
          <div className="space-y-4">
            <div className="relative aspect-video rounded-2xl overflow-hidden border">
              <img
                src={featuredPost.image || undefined}
                alt={featuredPost.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />

              <span className="absolute top-2.5 left-2.5 bg-[#1F2A44] text-white text-[9px] uppercase tracking-wider font-mono font-bold px-2.5 py-1 rounded-md shadow-sm">
                ⭐ Featured
              </span>
            </div>

            <div className="space-y-2">
              <p className="text-[10px] text-slate-400 font-medium">
                {featuredPost.date} • {featuredPost.readTime}
              </p>

              <h3 className="text-sm sm:text-base font-extrabold text-[#1F2A44] leading-snug group-hover:text-[#4DA6FF] transition-colors">
                {featuredPost.title}
              </h3>

              <p className="text-slate-500 text-xs leading-relaxed line-clamp-3">
                {featuredPost.excerpt}
              </p>
            </div>
          </div>
        </article>
      ))}
    </div>
  </section>
)}

{/* Feed Grid */}

            {/* Feed Grid */}
            {filteredPosts.length === 0 ? (
              <div className="bg-white rounded-3xl p-12 text-center border space-y-3">
                <Compass className="w-12 h-12 text-slate-300 mx-auto animate-bounce" />
                <h3 className="font-display font-extrabold text-slate-800 text-base">No matching articles found</h3>
                <p className="text-slate-400 text-xs">
                  Try clearing your search keyword or selecting a different category filter above!
                </p>
                <button 
                  onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
                  className="bg-slate-100 text-[#1F2A44] font-semibold text-xs px-4 py-2 rounded-xl hover:bg-slate-200 transition-colors"
                >
                  Clear All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {filteredPosts.map((post) => (
                  <article 
                    key={post.id}
                    id={`blog-card-${post.id}`}
                    onClick={() => onReadBlogPost(post)}
                    className="bg-white border hover:border-[#4DA6FF]/30 p-4 rounded-3xl shadow-premium hover:shadow-2xl transition-all flex flex-col justify-between group cursor-pointer"
                  >
                    <div className="space-y-4">
                      {/* Image block */}
                     <div className="relative aspect-video rounded-2xl overflow-hidden border">
                        <img 
                          src={post.image || undefined}
                          alt={post.title} 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          referrerPolicy="no-referrer"
                        />
                        <span className="absolute top-2.5 right-2.5 bg-white/95 backdrop-blur text-slate-800 text-[9px] uppercase tracking-wider font-mono font-bold px-2.5 py-0.5 rounded-md shadow-sm">
                          {post.category}
                        </span>
                      </div>

                      {/* Info & Data */}
                      <div className="space-y-2">
                        <p className="text-[10px] text-slate-400 font-medium font-sans">
                          {post.date} • {post.readTime}
                        </p>
                        <h3 className="text-sm sm:text-base font-extrabold text-[#1F2A44] leading-snug group-hover:text-[#4DA6FF] transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-slate-500 text-xs leading-relaxed line-clamp-3">
                          {post.excerpt}
                        </p>
                      </div>
                    </div>

                    {/* Footer Trigger */}
                    <div className="flex items-center justify-between border-t border-slate-50 pt-3 mt-4 text-[11px] font-bold text-slate-600 transition-colors group-hover:text-[#4DA6FF]">
                      <span className="flex items-center gap-1.5 pt-0.5">
                        <img 
                          src={post.authorImage || undefined}
                          alt={post.author} 
                          className="w-5 h-5 rounded-full object-cover border"
                          referrerPolicy="no-referrer"
                        />
                        <span>By {post.author}</span>
                      </span>
                      <span className="flex items-center gap-1">
                        Read Story <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
                      </span>
                    </div>

                  </article>
                ))}
              </div>
            )}

          </main>

          {/* Right Column (Sidebar, Categories, Newsletter, Ad Space) */}
          <aside className="lg:col-span-4 space-y-8">
            
            {/* Ad Space widget */}
            <AdSensePlaceholder slot="sidebar" />

            {/* Recent Posts widget */}
            <div className="bg-white border rounded-3xl p-6 shadow-premium space-y-4">
              <h3 className="font-display font-extrabold text-slate-800 text-sm pb-2 border-b">
                Recent Posts
              </h3>
              <div className="space-y-4">
                {recentPosts.map((post) => (
                  <div 
                    key={post.id}
                    onClick={() => onReadBlogPost(post)}
                    className="flex gap-3 hover:bg-slate-50 p-2 rounded-xl transition-all cursor-pointer group"
                  >
                    <img 
                      src={post.image || undefined}
                      alt={post.title} 
                      className="w-14 h-14 rounded-lg object-cover border shrink-0"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <h4 className="text-xs font-bold text-slate-800 leading-tight group-hover:text-[#4DA6FF] transition-colors line-clamp-2">
                        {post.title}
                      </h4>
                      <p className="text-[10px] text-slate-400 mt-1">{post.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter Subscription Card */}
            <div className="bg-gradient-to-br from-[#1F2A44] to-slate-900 text-white rounded-3xl p-6 shadow-premium space-y-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#4DA6FF]/10 rounded-full filter blur-xl"></div>
              <Mail className="w-8 h-8 text-[#4DA6FF]" />
              <h3 className="font-display font-extrabold text-white text-sm">
                Get Weekly Learning Lists
              </h3>
              <p className="text-xs text-slate-300 leading-normal">
                Structured PDF toollists, resume guidelines, and side hustles straight to your email.
              </p>

              {subDone ? (
                <div className="bg-emerald-950/50 border border-emerald-500/30 text-emerald-400 text-xs p-3 rounded-xl font-bold">
                  ✓ Success! Zainab has saved your access.
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="space-y-2 relative z-10">
                  <input 
                    type="email" 
                    placeholder="you@domain.com" 
                    value={emailSub}
                    onChange={(e) => setEmailSub(e.target.value)}
                    className="w-full bg-slate-900/95 border border-slate-800 rounded-xl px-3 py-2.5 text-xs focus:border-[#4DA6FF] focus:outline-none placeholder-slate-600 font-sans text-white"
                    required
                  />
                  <button 
                    type="submit" 
                    className="w-full bg-[#4DA6FF] hover:bg-white text-slate-900 text-xs font-bold py-2.5 rounded-xl transition-all shadow-md active:scale-98"
                  >
                    Get Free Access
                  </button>
                </form>
              )}
              <p className="text-[9px] text-slate-500 italic">By signing up, you consent to our terms.</p>
            </div>

          </aside>

        </div>
      </section>

    </div>
  );
}