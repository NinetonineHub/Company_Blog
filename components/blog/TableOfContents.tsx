"use client";

import React, { useState } from "react";
import { List, ChevronDown, ChevronUp } from "lucide-react";

interface TocItem {
  id: string;
  label: string;
}

interface TableOfContentsProps {
  items: TocItem[];
}

export default function TableOfContents({ items }: TableOfContentsProps) {
  const [isOpen, setIsOpen] = useState(true);

  if (!items || items.length === 0) return null;

  return (
    <nav
      aria-label="Table of Contents"
      className="my-10 rounded-2xl bg-[#FCF9F5] border border-[#5B0F18]/15 p-6 sm:p-7 shadow-[0_4px_24px_rgba(91,15,24,0.03)]"
    >
      <div className="flex items-center justify-between pb-4 border-b border-[#5B0F18]/10">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-[#5B0F18]/10 flex items-center justify-center text-[#5B0F18]">
            <List className="w-4 h-4" />
          </div>
          <div>
            <p className="text-[11px] font-sans font-bold tracking-widest text-[#5B0F18] uppercase">
              // TABLE OF CONTENTS
            </p>
            <p className="text-base sm:text-lg font-display font-bold text-[#24191A]">
              In This Campaign Guide
            </p>
          </div>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-[#5B0F18] p-2 hover:bg-[#5B0F18]/5 rounded-lg transition-colors"
          aria-label={isOpen ? "Collapse Table of Contents" : "Expand Table of Contents"}
        >
          {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </button>
      </div>

      {isOpen && (
        <ol className="mt-4 space-y-2.5 text-sm sm:text-[15px] font-sans">
          {items.map((item, idx) => (
            <li key={item.id} className="flex items-baseline gap-2.5 group">
              <span className="text-[#5B0F18]/50 text-xs font-mono font-medium shrink-0 w-5">
                {String(idx + 1).padStart(2, "0")}.
              </span>
              <a
                href={`#${item.id}`}
                className="text-[#24191A]/85 hover:text-[#5B0F18] transition-colors leading-snug group-hover:underline underline-offset-4 decoration-[#5B0F18]/30"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ol>
      )}
    </nav>
  );
}

