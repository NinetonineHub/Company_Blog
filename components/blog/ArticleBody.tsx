import React from "react";
import Image from "next/image";
import { BlogBlock } from "@/data/blog";
import FormattedText from "./FormattedText";
import { MessageSquare, Mail, Instagram, CheckCircle2, AlertCircle } from "lucide-react";

interface ArticleBodyProps {
  blocks: BlogBlock[];
}

export default function ArticleBody({ blocks }: ArticleBodyProps) {
  return (
    <div className="article-body font-sans text-[#24191A]/90 space-y-6">
      {blocks.map((block, index) => {
        switch (block.type) {
          case "h2":
            return (
              <div key={index} className="pt-6 first:pt-0">
                <h2
                  id={block.id}
                  className="text-2xl sm:text-3xl font-display font-bold text-[#24191A] scroll-mt-28 flex items-baseline gap-3 group"
                >
                  <span className="text-[#5B0F18] font-mono text-xl select-none opacity-60 group-hover:opacity-100 transition-opacity">
                    §
                  </span>
                  <span>
                    <FormattedText text={block.text} />
                  </span>
                </h2>
                <div className="w-12 h-0.5 bg-[#5B0F18]/25 mt-3 mb-6" />
              </div>
            );

          case "h3":
            return (
              <h3
                key={index}
                id={block.id}
                className="text-xl sm:text-2xl font-display font-bold text-[#5B0F18] pt-4 scroll-mt-28"
              >
                <FormattedText text={block.text} />
              </h3>
            );

          case "paragraph": {
            // Check if paragraph is an advisory / dates note e.g. *Dates: ...*
            const isDateNote = block.text?.startsWith("*Dates:") || block.text?.startsWith("*Note:");
            if (isDateNote) {
              return (
                <div
                  key={index}
                  className="my-5 p-4 sm:p-5 rounded-xl bg-[#F8F1E7]/70 border-l-4 border-[#5B0F18] flex items-start gap-3.5 text-sm sm:text-[15px] text-[#24191A]/85"
                >
                  <AlertCircle className="w-5 h-5 text-[#5B0F18] shrink-0 mt-0.5" />
                  <p className="leading-relaxed font-sans">
                    <FormattedText text={block.text} />
                  </p>
                </div>
              );
            }

            return (
              <p
                key={index}
                className="text-[16px] sm:text-[17px] text-[#24191A]/85 leading-relaxed font-normal"
              >
                <FormattedText text={block.text} />
              </p>
            );
          }

          case "list":
            return (
              <ul key={index} className="my-5 space-y-3 pl-1 sm:pl-3">
                {block.items?.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[15px] sm:text-[16px] leading-relaxed">
                    <span className="w-2 h-2 rounded-full bg-[#5B0F18] shrink-0 mt-2" />
                    <div>
                      <FormattedText text={item} />
                    </div>
                  </li>
                ))}
              </ul>
            );

          case "table": {
            if (!block.headers || !block.rows) return null;
            return (
              <div
                key={index}
                className="my-8 overflow-hidden rounded-2xl border border-[#5B0F18]/15 bg-white shadow-[0_4px_20px_rgba(91,15,24,0.04)]"
              >
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-sm sm:text-[15px]">
                    <thead>
                      <tr className="bg-[#5B0F18] text-[#F8F1E7]">
                        {block.headers.map((header, hIdx) => (
                          <th
                            key={hIdx}
                            className="px-5 py-3.5 font-display text-[15px] sm:text-base font-semibold tracking-wide border-b border-[#5B0F18]"
                          >
                            <FormattedText text={header} />
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#5B0F18]/10 text-[#24191A]/90">
                      {block.rows.map((row, rIdx) => (
                        <tr
                          key={rIdx}
                          className={`hover:bg-[#FAF6F0]/70 transition-colors ${
                            rIdx % 2 === 1 ? "bg-[#FCF9F5]/50" : "bg-white"
                          }`}
                        >
                          {row.map((cell, cIdx) => (
                            <td
                              key={cIdx}
                              className="px-5 py-4 leading-relaxed font-sans align-top"
                            >
                              <FormattedText text={cell} />
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            );
          }

          case "template": {
            // Determine template icon & title
            const lower = (block.text || "").toLowerCase();
            let Icon = MessageSquare;
            let badge = "MESSAGE TEMPLATE";

            if (lower.includes("email")) {
              Icon = Mail;
              badge = "EMAIL TEMPLATE";
            } else if (lower.includes("instagram")) {
              Icon = Instagram;
              badge = "INSTAGRAM CAPTION";
            } else if (lower.includes("whatsapp")) {
              Icon = MessageSquare;
              badge = "WHATSAPP TEMPLATE";
            }

            return (
              <div
                key={index}
                className="my-6 rounded-2xl bg-[#FCF9F5] border border-[#5B0F18]/15 p-5 sm:p-6 shadow-sm relative overflow-hidden"
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-7 h-7 rounded-full bg-[#5B0F18]/10 flex items-center justify-center text-[#5B0F18]">
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-[11px] font-sans font-bold tracking-wider text-[#5B0F18] uppercase">
                    // {badge}
                  </span>
                </div>
                <div className="text-[15px] sm:text-[16px] text-[#24191A] leading-relaxed whitespace-pre-line font-sans pl-1">
                  <FormattedText text={block.text} />
                </div>
              </div>
            );
          }

          case "image":
            return (
              <figure key={index} className="my-10">
                <div className="rounded-2xl overflow-hidden border border-[#5B0F18]/20 shadow-xl bg-[#430B12]">
                  <Image
                    src={block.src || ""}
                    alt={block.alt || "Article illustration"}
                    width={1200}
                    height={1450}
                    className="w-full h-auto object-contain"
                    priority
                  />
                </div>
                {block.caption && (
                  <figcaption className="text-center text-xs sm:text-sm text-[#6F6261] mt-3 italic font-sans">
                    {block.caption}
                  </figcaption>
                )}
              </figure>
            );

          default:
            return null;
        }
      })}
    </div>
  );
}

