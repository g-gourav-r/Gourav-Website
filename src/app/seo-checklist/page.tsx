// This file would be at src/app/seo-checklist/page.tsx

import Hero from "../components/Hero-section";
import Checklist from "./Checklist";
// import FAQAccordion from "../components/seo-checklist/FAQAccordion";
import { Footer } from "../components/services/Footer";
import BackgroundPattern from "../components/services/BackgroundPattern";
import Script from "next/script";
import Link from "next/link";
import FormModal from "../components/services/FormModal";
import { heroData } from "@/data/data";

// Define the SEO metadata for this specific page
export const metadata = {
  title: "186-Point SEO Checklist for 2025 - Your Guide to Better SEO",
  description:
    "A comprehensive SEO checklist with 186 actionable tips for 2025. Boost your website's traffic and visibility with this guide covering content, technical, and on-page SEO.",
};

// Data for the checklist items.
// This structure allows for easy rendering of the collapsible list.
const checklistData = [
  {
    label: "CRAWLING & INDEXING",
    subItems: [
      "URL is indexed",
      "Important content indexed",
      "Returns a 200 status code",
      "Indexable by robots meta tag and X-robots-tag",
      "URL not blocked by robots.txt file",
      "Sitemap file location defined in robots.txt",
      "Sitemap file submitted to search engines",
      "URL is discoverable via internal links/navigation",
      "Content is available at a single, canonicalized URL",
      "Google-selected canonical matches user-selected canonical",
      "No canonical/indexation mixed-signal errors",
      "Friendly URL structure",
      "Important CSS, JS, and images not blocked by robots.txt",
      "Are there any redirects other than 301?",
      "Are there any 5xx errors?",
      "Are images ALT tags in use?",
      "Is the website W3C Compliant?",
    ],
  },
  {
    label: "META & STRUCTURED DATA, PAGE-LEVEL & ELEMENTS ANALYSIS",
    subItems: [
      "Are all page titles under 65 characters? (570 pixels)",
      "Are any Page Titles under 30 characters?",
      "Are any page titles being duplicated without canonical/pagination?",
      "Any signs of keyword cannibalization?",
      "Is the primary keyword/phrase close to the start?",
      "Are page titles descriptive of the page content?",
      "Are any page titles missing?",
      "Are all Meta Descriptions unique and descriptive?",
      "Are any Meta Descriptions missing?",
      "Are any Meta Descriptions being duplicated without canonical/pagination?",
      "Are any Meta Descriptions below 70 characters?",
      "Are Meta Keywords in use?",
    ],
  },
  {
    label: "CONTENT",
    subItems: [
      "Are all fonts large enough to read clearly?",
      "Are hyperlinks clear?",
      "Could font color be considered too light?",
      "Are there clear primary and supplementary content types?",
      "Is content Evergreen or Fresh?",
      "Are there any thin pages? < 200 words of content?",
      "Does the website carry an up-to-date Privacy Policy?",
      "Is there any duplicate content internally?",
      "Is there any duplicate content externally?",
      "Is any content scraped from external sources?",
      "Is the contact page easy to find and use?",
      "Content Gap Analysis",
      "Copy and classification checks",
      "Has page grammar and spelling been checked?",
      "Content organized with hierarchical HTML tags",
      "Content is keyword-targeted",
      "Content doesn't violate Google's Quality Guidelines",
      "Avoids intrusive interstitials",
      "Avoid heavy ads above the fold",
      "Content isn't loaded in an iFrame",
      "Lazy-loaded content is visible in the viewport",
      "Supports paginated loading for infinite scroll",
      "Current publication and updated dates",
      "Clear who the author and/or publisher Is",
      "Content doesn't trigger Google Safe Search filters",
      "Hidden text",
      "Cloaking",
      "Doorway pages",
      "Are there too many ads on any pages?",
      "Does the website bombard you with popups?",
      "Does the website carry clear Call to Action?",
      "Does each page have a clear H1 tag?",
      "Are H2's being used across the site?",
      "AI content detect",
    ],
  },
  {
    label: "KEYWORD ANALYSIS",
    subItems: [
      "Site keyword research for Benchmarks",
      "Brand search - Does the homepage come up #1 when searched?",
      "Is there evidence of keyword duplication or overuse?",
      "Are keywords in Page Titles?",
      "Are keywords in H1?",
      "Are keywords in H2?",
      "Are keywords in Meta Description?",
      "Are keywords in the main page document?",
      "Make sure that your target keyword is included in your opening paragraph",
    ],
  },
  {
    label: "BACKLINKS",
    subItems: [
      "Backlink health & Score",
      "Spammy domains",
      "Has disavow file been created and checked?",
      "Anchor Text Use",
      "Backlinks lost",
      "Broken Backlinks",
      "Are there large number of backlinks from 1 domain or more?",
      "Domain Age",
      "Total Number of Backlinks",
      "Total Number of Linking Root Domains",
      "URL has relevant backlinks",
      "Disavow file doesn't block important links",
      "Create social media profiles on the platforms your target audiences hang out on",
      "Get on LinkedIn Pulse",
      "Do guest podcasting",
    ],
  },
  {
    label: "MOBILE",
    subItems: [
      "Responsive check",
      "Popups/Interstitials",
      "Mobile Page Size",
      "Image use",
      "Image optimization",
      "Image resizing",
      "Search console errors",
      "AMP Check",
      "Mobile UX issues (see UX)",
      "Mobile Navigation",
      "Use of video on mobile",
      "Are buttons and links easy to click?",
      "Is the Favicon being displayed in mobile SERPs?",
      "Parity checks - Content, Meta & Directives the same as desktop?",
      "Mobile Testing",
    ],
  },
  {
    label: "SPEED",
    subItems: [
      "Content fully loads within a reasonable time",
      "URL passes Google's Core Web Vitals assessment",
      "Address common speed traps",
      "General website speed check",
      "Desktop website Speed Checks in the Search Console",
      "Mobile website Speed Checks in the Search Console",
    ],
  },
  {
    label: "SECURITY",
    subItems: [
      "Malware & Security Checks",
      "Is an HSTS policy in place?",
      "No hacked content, malware, or other security issues",
      "Using the main protocol on all website pages (HTTP / HTTPS)?",
      "Does the website have a valid SSL certificate?",
    ],
  },
  {
    label: "INTERNATIONAL & MULTILINGUAL SITES",
    subItems: [
      "Signal location targeting",
      "Valid hreflang annotation",
      "Page language is obvious",
      "Avoid automatic redirection",
      "Does the website have an international audience?",
      "Is the website being translated without errors?",
      "Is the website using an international URL structure?",
      "Are the correct localized web pages being used?",
      "Does the website have backlinks from target countries?",
      "Is the website Multilingual, Multiregional or both?",
    ],
  },
  {
    label: "GOOGLE",
    subItems: [
      "Install Google Analytics 4",
      "GA duplication check",
      "Setup Search Console",
      "Search console errors",
      "Google cache analysis",
      "Presence of a sitemap.xml file",
      "The discrepancy between indexed pages in Google and Sitemap",
      "Invalid pages in the sitemap",
      "Negative search results for the brand",
      "Is there a Google News sitemap.xml file?",
      "Any manual actions",
      "Any crawl errors",
      "Optimize your posts for Google website links",
      "Optimize your posts for Google featured snippets",
    ],
  },
  {
    label: "WEBSITE ARCHITECTURE",
    subItems: [
      "Pagination checks",
      "Use short URLs",
      "Site Visualization Checks",
      "Internal redirects",
      "Redirect chains & Redirect loops",
      "Robots.txt present?",
      "Are pages being correctly blocked by Robots.txt?",
      "Site Structure & Silo Use",
      "Category Use (ecomm)",
      "URL naming convention - is this well optimized?",
      "Error Pages 404",
      "Are Tag Pages being used?",
      "Is the website using a Breadcrumb trail?",
      "Is primary navigation easy to use?",
      "Footer navigation checks?",
      "Menu setup and use",
    ],
  },
  {
    label: "TECHNICAL SEO CHECKS",
    subItems: [
      "Does the website use Subdomains?",
      "Does the website carry a Favicon?",
      "Site Uptime",
      "Broken / Redirected Internal/External Links",
      "Javascript Use",
      "Is the .htaccess file configured correctly?",
      "Blacklist check",
      "Structured Data & Schema Use",
      "Are there any Chrome Console Errors?",
      "Is CSS being minified?",
      "Is every website page secure and without errors?",
      "Are there any canonical errors?",
      "Can the website be crawled and used without Javascript on?",
      "Check all sites on the webserver",
      "Check domain history",
      "Accessibility Checks",
      "HTML Validation",
      "Is the website using a Cookie Acceptance notice?",
    ],
  },
  {
    label: "IMAGES/VIDEO",
    subItems: [
      "How many images are used sitewide?",
      "Are images being optimized?",
      "Are ALT tags being regularly used?",
      "Are there any dead images?",
      "Are too many stock images used?",
    ],
  },
  {
    label: "COMPETITION ANALYSIS",
    subItems: [
      "Top 3-5 competitors identified?",
      "Has the competition been benchmarked?",
      "Competitor top 10 keywords",
      "Competitor average search positions",
      "Top ranking keywords",
    ],
  },
  {
    label: "LOCAL SEO",
    subItems: [
      "Does the website need and gain traffic from local audiences?",
      "Are local title tags being used?",
      "Is local structured data being used?",
      "Set up and optimize Google My Business",
    ],
  },
];

// The main page component that puts everything together.
export default function SeoChecklistPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "A Complete SEO Checklist: 186 Tips for 2025",
        author: {
          "@type": "Organization",
          name: "Your Brand Name",
        },
        publisher: {
          "@type": "Organization",
          name: "Your Brand Name",
          logo: {
            "@type": "ImageObject",
            url: "https://www.yourwebsite.com/images/logo.png",
          },
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": "https://www.yourwebsite.com/seo-checklist",
        },
        datePublished: "2025-01-01",
        dateModified: "2025-08-18",
        description:
          "This comprehensive SEO checklist provides 186 tips to help you maximize your SEO efforts. It spans content optimization, technical aspects, and more to ensure your site is search engine friendly.",
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Can SEO keywords be phrases?",
            acceptedAnswer: {
              "@type": "Answer",
              text: 'Yes, SEO keywords can be phrases, often called "long-tail keywords," which are more specific and less competitive than single words.',
            },
          },
          {
            "@type": "Question",
            name: "How to choose SEO keywords?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Choose SEO keywords by researching your audience's search habits, analyzing competitors, and using tools like Google Keyword Planner to find relevant and high-volume keywords.",
            },
          },
          {
            "@type": "Question",
            name: "What is an SEO checklist?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "An SEO checklist is a set of tasks and considerations to optimize a website for search engines, including keyword research, on-page optimization, and link building.",
            },
          },
          {
            "@type": "Question",
            name: "How often does SEO need to be done?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "SEO should be an ongoing process, with regular updates and adjustments as search engine algorithms change and new content is added.",
            },
          },
          {
            "@type": "Question",
            name: "What are the basics of an SEO checklist?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The basics include keyword research, on-page optimization, high-quality content, mobile optimization, fast loading speed, and quality backlinks.",
            },
          },
        ],
      },
    ],
  };

  return (
    <div className="relative z-10 bg-background">
      <Script
        id="schema-seo-checklist"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <header className="sticky top-0 z-50 w-full border-b backdrop-blur-lg">
        <div className="container mx-auto flex h-14 items-center px-4 md:px-6">
          <div className="mr-4">
            <Link className="mr-6 flex items-center space-x-2" href="/">
              <span className="font-bold font-brush text-neon-yellow sm:inline-block">
                {heroData.name}
              </span>
            </Link>
          </div>
          <div className="flex items-center space-x-2 ml-auto">
            <FormModal buttonClassName="px-6 font-medium transition-transform hover:scale-105  mx-auto sm:text-sm  h-8 border bg-neon-yellow/50 text-white hover:bg-neon-yellow  border-neon-yellow hover:text-black text-xs flex justify-center items-center rounded-2xl hover:shadow-lg duration-200 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]" />
          </div>
        </div>
      </header>
      <BackgroundPattern />

      {/* 1. Hero Section - Introduction to the SEO checklist */}
      {/* <Hero /> */}

      {/* 2. Checklist Section - The core of the page with the 186 tips */}
      <Checklist data={checklistData} />

      {/* 3. FAQ Section - Answers common questions about SEO */}
      {/* <FAQAccordion /> */}

      {/* 4. Footer - The final call-to-action */}
      <Footer />
    </div>
  );
}
