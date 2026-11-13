import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug, getRelatedPosts } from "@/data/blog";
import TableOfContents from "@/components/blog/TableOfContents";
import ArticleBody from "@/components/blog/ArticleBody";
import RelatedArticles from "@/components/blog/RelatedArticles";
import { ArrowUpRight } from "lucide-react";

interface ArticlePageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) {
    return {
      title: "Article Not Found | Nine to Nine Hub",
    };
  }

  const canonicalUrl = `https://ninetoninehub.com/blog/${post.slug}`;
  const imageUrl = `https://ninetoninehub.com${post.featuredImage}`;

  return {
    title: post.seoTitle,
    description: post.metaDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: post.seoTitle,
      description: post.metaDescription,
      url: canonicalUrl,
      siteName: "Nine to Nine Hub",
      type: "article",
      images: [
        {
          url: imageUrl,
          alt: post.imageAlt,
        },
      ],
    },
  };
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(post.slug);

  // Structured Data: BreadcrumbList + BlogPosting
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
          {
            "@type": "ListItem",
            "position": 3,
            "name": post.title,
            "item": `https://ninetoninehub.com/blog/${post.slug}`,
          },
        ],
      },
      {
        "@type": "BlogPosting",
        "@id": `https://ninetoninehub.com/blog/${post.slug}#article`,
        "mainEntityOfPage": `https://ninetoninehub.com/blog/${post.slug}`,
        "headline": post.title,
        "description": post.metaDescription,
        "image": [`https://ninetoninehub.com${post.featuredImage}`],
        "publisher": {
          "@type": "Organization",
          "name": "Nine to Nine Hub",
          "url": "https://ninetoninehub.com",
          "logo": {
            "@type": "ImageObject",
            "url": "https://ninetoninehub.com/images/websites/9-9logo.webp",
          },
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="min-h-screen bg-[#F8F1E7] text-[#24191A] pt-28 sm:pt-36 pb-24 selection:bg-[#5B0F18] selection:text-[#F8F1E7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-xs sm:text-sm font-sans text-[#6F6261] flex-wrap">
              <li>
                <Link href="/" className="hover:text-[#5B0F18] transition-colors">
                  Home
                </Link>
              </li>
              <li className="select-none text-[#5B0F18]/40">&gt;</li>
              <li>
                <Link href="/blog" className="hover:text-[#5B0F18] transition-colors">
                  Blog
                </Link>
              </li>
              <li className="select-none text-[#5B0F18]/40">&gt;</li>
              <li className="text-[#5B0F18] font-medium truncate max-w-[200px] sm:max-w-md" aria-current="page">
                {post.title}
              </li>
            </ol>
          </nav>

          {/* Article Header */}
          <header className="mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#5B0F18]/10 border border-[#5B0F18]/20 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#5B0F18]" />
              <span className="text-[11px] sm:text-xs font-sans font-bold tracking-widest text-[#5B0F18] uppercase">
                {post.category}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[#24191A] tracking-tight leading-[1.18]">
              {post.title}
            </h1>

            <div className="flex items-center gap-3 mt-4 text-xs sm:text-sm text-[#6F6261] font-sans font-medium flex-wrap">
              <span>{post.readTime}</span>
              <span>•</span>
              <span>Target: {post.focusKeyword}</span>
            </div>
          </header>

          {/* Featured Image */}
          <div className="relative aspect-[16/9] w-full rounded-2xl sm:rounded-3xl overflow-hidden bg-[#430B12] shadow-xl border border-[#5B0F18]/15 mb-10">
            <Image
              src={post.featuredImage}
              alt={post.imageAlt}
              fill
              sizes="(max-width: 896px) 100vw, 896px"
              priority
              className="object-cover"
            />
          </div>

          {/* Table of Contents */}
          <TableOfContents items={post.toc} />

          {/* Article Main Body */}
          <ArticleBody blocks={post.blocks} />

          {/* Related Articles Section */}
          <RelatedArticles posts={relatedPosts} />

          {/* Final CTA Section */}
          <div className="mt-20 rounded-3xl bg-[#5B0F18] text-[#F8F1E7] p-8 sm:p-12 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-xl h-48 bg-white/5 rounded-full blur-[90px] pointer-events-none" />
            
            <div className="relative z-10 max-w-xl mx-auto space-y-3.5">
              <span className="text-[11px] font-sans font-bold tracking-widest text-[#E5D3B8] uppercase">
                // PARTNER WITH NINE TO NINE HUB
              </span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-white tracking-tight">
                Ready to Grow Your Business?
              </h3>
              <p className="text-sm sm:text-base text-[#F8F1E7]/85 font-sans leading-relaxed font-normal">
                Let&apos;s build a digital marketing strategy around your business goals.
              </p>
              <div className="pt-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#F8F1E7] text-[#5B0F18] font-sans text-xs sm:text-sm font-semibold tracking-wider uppercase hover:bg-white hover:shadow-lg transition-all"
                >
                  Get a Free Proposal
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </article>
    </>
  );
}

