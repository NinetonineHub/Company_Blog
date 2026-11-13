import React from "react";
import Link from "next/link";

interface FormattedTextProps {
  text?: string;
  className?: string;
}

export default function FormattedText({ text, className }: FormattedTextProps) {
  if (!text) return null;

  // Process markdown-like inline tokens: [link](url), **bold**, *italic*
  // Regex to match markdown links: \[([^\]]+)\]\(([^)]+)\)
  // Bold: \*\*([^*]+)\*\*
  // Italic: \*([^*]+)\*
  const tokenRegex = /(\[[^\]]+\]\([^)]+\)|\*\*[^*]+\*\*|\*[^*]+\*)/g;
  const parts = text.split(tokenRegex);

  return (
    <span className={className}>
      {parts.map((part, index) => {
        if (!part) return null;

        // Check link [text](url)
        const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (linkMatch) {
          const linkText = linkMatch[1];
          let href = linkMatch[2];

          // Normalize internal vs external
          const isInternal =
            href.startsWith("/") ||
            href.includes("ninetoninehub.com");

          let internalHref = href.replace(/^https?:\/\/ninetoninehub\.com/, "");
          if (internalHref === "") internalHref = "/";

          if (isInternal) {
            return (
              <Link
                key={index}
                href={internalHref}
                className="text-[#5B0F18] font-medium underline underline-offset-4 decoration-[#5B0F18]/40 hover:decoration-[#5B0F18] hover:text-[#430B12] transition-colors"
              >
                {linkText}
              </Link>
            );
          }

          return (
            <a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#5B0F18] font-medium underline underline-offset-4 decoration-[#5B0F18]/40 hover:decoration-[#5B0F18] hover:text-[#430B12] transition-colors inline-flex items-center gap-0.5"
            >
              <span>{linkText}</span>
              <span className="text-[10px] select-none text-[#5B0F18]/60">↗</span>
            </a>
          );
        }

        // Check bold **bold**
        const boldMatch = part.match(/^\*\*([^*]+)\*\*$/);
        if (boldMatch) {
          return (
            <strong key={index} className="font-semibold text-[#24191A]">
              {boldMatch[1]}
            </strong>
          );
        }

        // Check italic *italic*
        const italicMatch = part.match(/^\*([^*]+)\*$/);
        if (italicMatch) {
          return (
            <em key={index} className="italic text-[#5B0F18]/90">
              {italicMatch[1]}
            </em>
          );
        }

        // Plain text
        return <React.Fragment key={index}>{part}</React.Fragment>;
      })}
    </span>
  );
}

