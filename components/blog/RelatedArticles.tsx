import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BlogPost } from "@/data/blog";
import { ArrowUpRight } from "lucide-react";

interface RelatedArticlesProps {
  posts: BlogPost[];
}

export default function RelatedArticles({ posts }: RelatedArticlesProps) {
  if (!posts || posts.length === 0) return null;

  return (
    <section className="mt-20 pt-16 border-t border-[#5B0F18]/15">
      <div className="mb-10 text-center sm:text-left">
        <p className="text-xs sm:text-[13px] font-sans font-bold tracking-widest text-[#5B0F18] uppercase">
          // SEASONAL CAMPAIGN BLUEPRINTS
        </p>
        <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#24191A] mt-2">
          Related Articles & Campaign Guides
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="group flex flex-col rounded-2xl bg-[#FCF9F5] border border-[#5B0F18]/12 overflow-hidden shadow-[0_4px_20px_rgba(91,15,24,0.03)] hover:shadow-[0_12px_32px_rgba(91,15,24,0.08)] hover:border-[#5B0F18]/30 transition-all duration-300"
          >
            <Link href={`/blog/${post.slug}`} className="relative block aspect-[16/9] overflow-hidden bg-[#430B12]">
              <Image
                src={post.featuredImage}
                alt={post.imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-3 left-3 bg-[#5B0F18]/90 text-[#F8F1E7] text-[10px] sm:text-[11px] font-sans font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full backdrop-blur-sm">
                {post.category}
              </div>
            </Link>

            <div className="p-6 flex flex-col flex-1 justify-between">
              <div>
                <p className="text-xs text-[#6F6261] font-sans mb-2 font-medium">
                  {post.readTime}
                </p>
                <h4 className="text-lg sm:text-xl font-display font-bold text-[#24191A] group-hover:text-[#5B0F18] transition-colors leading-snug">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h4>
                <p className="text-sm text-[#24191A]/75 font-sans leading-relaxed mt-3 line-clamp-3">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-5 mt-4 border-t border-[#5B0F18]/10 flex items-center justify-between">
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-xs sm:text-[13px] font-sans font-semibold text-[#5B0F18] tracking-wider uppercase inline-flex items-center gap-1 group-hover:underline underline-offset-4"
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
  );
}

