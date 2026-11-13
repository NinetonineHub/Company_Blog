import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getAllPosts } from "@/data/blog";
import { ArrowUpRight, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Digital Marketing Blog & UAE Campaign Guides | Nine to Nine Hub",
  description:
    "Digital marketing insights, UAE seasonal campaign guides and actionable business growth strategies from Nine to Nine Hub in Dubai.",
  alternates: {
    canonical: "https://ninetoninehub.com/blog",
  },
  openGraph: {
    title: "Digital Marketing Blog & UAE Campaign Guides | Nine to Nine Hub",
    description:
      "Digital marketing insights, UAE seasonal campaign guides and actionable business growth strategies from Nine to Nine Hub in Dubai.",
    url: "https://ninetoninehub.com/blog",
    siteName: "Nine to Nine Hub",
    type: "website",
  },
};

export default function BlogListingPage() {
  const posts = getAllPosts();
  const featuredPost = posts[0]; // White Friday UAE 2026
  const latestPosts = posts; // All 5 posts

  // Structured Data: Blog + BreadcrumbList
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://ninetoninehub.com",
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Blog",
            "item": "https://ninetoninehub.com/blog",
          },
        ],
      },
      {
        "@type": "Blog",
        "@id": "https://ninetoninehub.com/blog#blog",
        "url": "https://ninetoninehub.com/blog",
        "name": "Nine to Nine Hub Digital Marketing Blog",
        "description":
          "Digital marketing insights, UAE seasonal campaign guides and actionable business growth strategies from Nine to Nine Hub in Dubai.",
        "publisher": {
          "@type": "Organization",
          "name": "Nine to Nine Hub",
          "url": "https://ninetoninehub.com",
          "logo": {
            "@type": "ImageObject",
            "url": "https://ninetoninehub.com/images/websites/9-9logo.webp",
          },
        },
        "blogPost": posts.map((post) => ({
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.metaDescription,
          "url": `https://ninetoninehub.com/blog/${post.slug}`,
          "image": `https://ninetoninehub.com${post.featuredImage}`,
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-[#F8F1E7] text-[#24191A] pt-28 sm:pt-36 pb-24 selection:bg-[#5B0F18] selection:text-[#F8F1E7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-xs sm:text-sm font-sans text-[#6F6261]">
              <li>
                <Link href="/" className="hover:text-[#5B0F18] transition-colors">
                  Home
                </Link>
              </li>
              <li className="select-none text-[#5B0F18]/40">&gt;</li>
              <li className="text-[#5B0F18] font-medium" aria-current="page">
                Blog
              </li>
            </ol>
          </nav>

          {/* Blog Hero */}
          <section className="mb-16 sm:mb-20 text-center sm:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#5B0F18]/10 border border-[#5B0F18]/20 mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#5B0F18]" />
              <span className="text-[11px] sm:text-xs font-sans font-bold tracking-widest text-[#5B0F18] uppercase">
                // INSIGHTS &amp; IDEAS
              </span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-bold text-[#24191A] tracking-tight leading-[1.15] max-w-4xl">
              Insights That Help Your Business Grow
            </h1>
            <p className="mt-5 text-base sm:text-lg lg:text-xl font-sans text-[#24191A]/80 max-w-2xl leading-relaxed font-normal">
              Strategic campaign blueprints, margin-safe frameworks, and real-world marketing playbooks designed to grow UAE retail, e-commerce, and service businesses.
            </p>
          </section>

          {/* Featured Article */}
          {featuredPost && (
            <section className="mb-20">
              <div className="flex items-center gap-2 mb-6">
                <span className="w-2 h-2 rounded-full bg-[#5B0F18]" />
                <h2 className="text-xs sm:text-[13px] font-sans font-bold tracking-widest text-[#5B0F18] uppercase">
                  Featured Campaign Guide
                </h2>
              </div>

              <div className="group rounded-3xl bg-[#FCF9F5] border border-[#5B0F18]/15 overflow-hidden shadow-[0_10px_40px_rgba(91,15,24,0.06)] hover:border-[#5B0F18]/40 transition-all duration-300 grid grid-cols-1 lg:grid-cols-12">
                <div className="lg:col-span-7 relative aspect-[16/10] lg:aspect-auto min-h-[320px] bg-[#430B12] overflow-hidden">
                  <Image
                    src={featuredPost.featuredImage}
                    alt={featuredPost.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    priority
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-[#5B0F18]/95 text-[#F8F1E7] text-xs font-sans font-semibold tracking-wider uppercase px-3 py-1.5 rounded-full backdrop-blur-md shadow-md">
                    {featuredPost.category}
                  </div>
                </div>

                <div className="lg:col-span-5 p-8 sm:p-10 lg:p-12 flex flex-col justify-between">
                  <div>
                    <p className="text-xs sm:text-sm text-[#6F6261] font-sans font-medium mb-3">
                      {featuredPost.readTime} • Focus: {featuredPost.focusKeyword}
                    </p>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-[#24191A] group-hover:text-[#5B0F18] transition-colors leading-tight">
                      <Link href={`/blog/${featuredPost.slug}`}>
                        {featuredPost.title}
                      </Link>
                    </h3>
                    <p className="mt-4 text-sm sm:text-base font-sans text-[#24191A]/80 leading-relaxed font-normal">
                      {featuredPost.excerpt}
                    </p>
                  </div>

                  <div className="pt-8 mt-8 border-t border-[#5B0F18]/10 flex items-center justify-between">
                    <Link
                      href={`/blog/${featuredPost.slug}`}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#5B0F18] text-[#F8F1E7] font-sans text-xs sm:text-sm font-semibold tracking-wide uppercase hover:bg-[#430B12] transition-colors shadow-sm"
                    >
                      Read Article
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Latest Articles Grid */}
          <section className="mb-24">
            <div className="flex items-center justify-between mb-10 pb-4 border-b border-[#5B0F18]/15">
              <div>
                <p className="text-xs sm:text-[13px] font-sans font-bold tracking-widest text-[#5B0F18] uppercase">
                  // COMPLETE COLLECTION
                </p>
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#24191A] mt-1">
                  All Campaign Guides &amp; Insights
                </h2>
              </div>
              <span className="text-xs sm:text-sm font-sans font-medium text-[#6F6261]">
                {latestPosts.length} Articles
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {latestPosts.map((post) => (
                <article
                  key={post.slug}
                  className="group flex flex-col rounded-2xl bg-[#FCF9F5] border border-[#5B0F18]/12 overflow-hidden shadow-[0_4px_24px_rgba(91,15,24,0.03)] hover:shadow-[0_12px_36px_rgba(91,15,24,0.08)] hover:border-[#5B0F18]/30 transition-all duration-300"
                >
                  <Link
                    href={`/blog/${post.slug}`}
                    className="relative block aspect-[16/9] overflow-hidden bg-[#430B12]"
                  >
                    <Image
                      src={post.featuredImage}
                      alt={post.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 bg-[#5B0F18]/90 text-[#F8F1E7] text-[10px] sm:text-[11px] font-sans font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full backdrop-blur-sm">
                      {post.category}
                    </div>
                  </Link>

                  <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between">
                    <div>
                      <p className="text-xs text-[#6F6261] font-sans mb-2.5 font-medium">
                        {post.readTime}
                      </p>
                      <h3 className="text-xl font-display font-bold text-[#24191A] group-hover:text-[#5B0F18] transition-colors leading-snug">
                        <Link href={`/blog/${post.slug}`}>
                          {post.title}
                        </Link>
                      </h3>
                      <p className="text-sm text-[#24191A]/75 font-sans leading-relaxed mt-3 line-clamp-3 font-normal">
                        {post.excerpt}
                      </p>
                    </div>

                    <div className="pt-6 mt-6 border-t border-[#5B0F18]/10 flex items-center justify-between">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="text-xs sm:text-[13px] font-sans font-semibold text-[#5B0F18] tracking-wider uppercase inline-flex items-center gap-1.5 group-hover:underline underline-offset-4"
                      >
                        Read Article
                        <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Final CTA Section */}
          <section className="rounded-3xl bg-[#5B0F18] text-[#F8F1E7] p-8 sm:p-12 lg:p-16 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-64 bg-white/5 rounded-full blur-[100px] pointer-events-none" />
            
            <div className="relative z-10 max-w-2xl mx-auto space-y-4">
              <span className="text-[11px] sm:text-xs font-sans font-bold tracking-widest text-[#E5D3B8] uppercase">
                // START GROWING TODAY
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight">
                Ready to Grow Your Business?
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-[#F8F1E7]/85 font-sans leading-relaxed font-normal pt-1">
                Let&apos;s build a digital marketing strategy around your business goals.
              </p>
              <div className="pt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#F8F1E7] text-[#5B0F18] font-sans text-xs sm:text-sm font-semibold tracking-wider uppercase hover:bg-white hover:shadow-lg transition-all"
                >
                  Get a Free Proposal
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </section>

        </div>
      </main>
    </>
  );
}

