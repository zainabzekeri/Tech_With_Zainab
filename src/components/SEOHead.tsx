import { useEffect } from 'react';

interface SEOHeadProps {
  view: string;
  subTitle?: string;
  description?: string;
  image?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  imageAlt?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
}

export default function SEOHead({ view, subTitle, description, image, ogTitle, ogDescription, ogImage, imageAlt,twitterTitle, twitterDescription, twitterImage }: SEOHeadProps) {
  useEffect(() => {
    // Determine title
    let title = "TechWithZainab - Start Your Tech Journey With Confidence";
    let metaDesc = "A beginner-friendly platform to gain digital skills, discover freelancing, find remote jobs, and learn useful digital tools under Zainab's expert guidance.";

    if (view === 'about') {
      title = "About Zainab - Our Mission & Vision | TechWithZainab";
      metaDesc = "Learn about the founder story, vision, and core educational pillars of TechWithZainab. Discover how we help beginners excel.";
    } else if (view === 'blog') {
      title = subTitle ? `${subTitle} | TechWithZainab Blog` : "Free Tech & Career Blog Tutorials | TechWithZainab";
      metaDesc = description || "Read high-quality, beginner-friendly resources about remote work, tech pathways, digital productivity, and freelancing techniques.";
    } else if (view === 'remote-jobs') {
      title = subTitle ? `${subTitle} | TechWithZainab Job Board` : "Remote Jobs & Internships for Freelancers | TechWithZainab";
      metaDesc = description || "Find hand-curated entry-level remote work, remote internships, digital tool roles, and freelancing platform checklists updated weekly.";
    } else if (view === 'contact') {
      title = "Get In Touch with Zainab | TechWithZainab Contact";
      metaDesc = "Have questions about learning technology, digital tools, or remote work? Drop a message directly to Zainab for professional guidance.";
    } else if (view === 'faq') {
      title = "Frequently Asked Questions about Digital Careers | TechWithZainab FAQ";
      metaDesc = "Get direct, step-by-step answers to 10+ beginner-friendly tech, freelancing, remote interviews, and portfolio construction questions.";
    } else if (view === 'privacy-policy') {
      title = "Privacy Policy & Data Principles | TechWithZainab";
      metaDesc = "How TechWithZainab collects, uses, and safeguards user preferences and subscriber information securely.";
    } else if (view === 'terms') {
      title = "Terms & Conditions - User Agreement | TechWithZainab";
      metaDesc = "Review terms, acceptable use policies, and learning agreements for exploring TechWithZainab contents.";
    } else if (view === 'disclaimer') {
      title = "Disclaimer & AdSense Consent Information | TechWithZainab";
      metaDesc = "Official publisher disclaimers, external link credentials, and advertising consent explanations for TechWithZainab.";
    }

    // Set Document Title
    document.title = title;

    // Set Meta Description
    let metaDescTag = document.querySelector('meta[name="description"]');
    if (!metaDescTag) {
      metaDescTag = document.createElement('meta');
      metaDescTag.setAttribute('name', 'description');
      document.head.appendChild(metaDescTag);
    }
    metaDescTag.setAttribute('content', metaDesc);

    // Set Open Graph tags
    let ogTitleTag = document.querySelector('meta[property="og:title"]');
    if (!ogTitleTag) {
      ogTitleTag = document.createElement('meta');
      ogTitleTag.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitleTag);
    }
    ogTitleTag.setAttribute('content', ogTitle || title);

    let ogDescTag = document.querySelector('meta[property="og:description"]');
    if (!ogDescTag) {
      ogDescTag = document.createElement('meta');
      ogDescTag.setAttribute('property', 'og:description');
      document.head.appendChild(ogDescTag);
    }
    ogDescTag.setAttribute('content', ogDescription || metaDesc);

    let ogImageTag = document.querySelector('meta[property="og:image"]');
    if (!ogImageTag) {
      ogImageTag = document.createElement('meta');
      ogImageTag.setAttribute('property', 'og:image');
      document.head.appendChild(ogImageTag);
    }
    ogImageTag.setAttribute('content', ogImage || image || 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800');

    // Set Twitter/X tags
    let twitterCardTag = document.querySelector('meta[name="twitter:card"]');
    if (!twitterCardTag) {
      twitterCardTag = document.createElement('meta');
      twitterCardTag.setAttribute('name', 'twitter:card');
      document.head.appendChild(twitterCardTag);
    }
    twitterCardTag.setAttribute('content', 'summary_large_image');

    let twitterTitleTag = document.querySelector('meta[name="twitter:title"]');
    if (!twitterTitleTag) {
      twitterTitleTag = document.createElement('meta');
      twitterTitleTag.setAttribute('name', 'twitter:title');
      document.head.appendChild(twitterTitleTag);
    }
    twitterTitleTag.setAttribute('content', twitterTitle || ogTitle || title);

    let twitterDescriptionTag = document.querySelector('meta[name="twitter:description"]');
    if (!twitterDescriptionTag) {
      twitterDescriptionTag = document.createElement('meta');
      twitterDescriptionTag.setAttribute('name', 'twitter:description');
      document.head.appendChild(twitterDescriptionTag);
    }
    twitterDescriptionTag.setAttribute('content', twitterDescription || ogDescription || metaDesc);

    let twitterImageTag = document.querySelector('meta[name="twitter:image"]');
    if (!twitterImageTag) {
      twitterImageTag = document.createElement('meta');
      twitterImageTag.setAttribute('name', 'twitter:image');
      document.head.appendChild(twitterImageTag);
    }
    twitterImageTag.setAttribute(
      'content', twitterImage || ogImage || image || 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800'
    );
    let twitterImageAltTag = document.querySelector('meta[name="twitter:image:alt"]');
    if (!twitterImageAltTag) {
      twitterImageAltTag = document.createElement('meta');
      twitterImageAltTag.setAttribute('name', 'twitter:image:alt');
      document.head.appendChild(twitterImageAltTag);
    }
    twitterImageAltTag.setAttribute('content', imageAlt || '');

    let ogImageAltTag = document.querySelector('meta[property="og:image:alt"]');
    if (!ogImageAltTag) {
      ogImageAltTag = document.createElement('meta');
      ogImageAltTag.setAttribute('property', 'og:image:alt');
      document.head.appendChild(ogImageAltTag);
    }
    ogImageAltTag.setAttribute('content', imageAlt || '');

        // Add Organization structured data for Google
    const organizationData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://techwithzainabacademy.com/#organization",
      "name": "TechWithZainab Academy",
      "alternateName": "TechWithZainab",
      "url": "https://techwithzainabacademy.com/",
      "description": "TechWithZainab Academy is a beginner-friendly digital learning platform founded by Zainab, helping beginners build digital skills, explore technology, freelancing, remote jobs, and useful digital tools.",
      "founder": {
        "@type": "Person",
        "name": "Zainab"
      }
    };

    let organizationScript = document.querySelector(
      'script[data-seo="organization"]'
    );

    if (!organizationScript) {
      organizationScript = document.createElement("script");
      organizationScript.setAttribute("type", "application/ld+json");
      organizationScript.setAttribute("data-seo", "organization");
      document.head.appendChild(organizationScript);
    }

    organizationScript.textContent = JSON.stringify(organizationData);

  }, [view, subTitle, description, image, ogTitle, ogDescription, ogImage, imageAlt,twitterTitle, twitterDescription, twitterImage]);

  return null; // Side-effect component, returns nothing to view
}