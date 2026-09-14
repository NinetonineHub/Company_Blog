"use client";

import React, { useState, useEffect } from "react";

interface ObfuscatedEmailProps {
  className?: string;
  ariaLabel?: string;
}

// Base64 encoded email parts to avoid plain-text in source HTML:
// "aW5mbw==" -> "info"
// "bmluZXRvbmluZWh1Yi5jb20=" -> "ninetoninehub.com"
const USER_B64 = "aW5mbw==";
const DOMAIN_B64 = "bmluZXRvbmluZWh1Yi5jb20=";

export default function ObfuscatedEmail({
  className = "",
  ariaLabel = "Send email to Nine to Nine Hub",
}: ObfuscatedEmailProps) {
  const [emailAddress, setEmailAddress] = useState<string | null>(null);

  useEffect(() => {
    try {
      const user = atob(USER_B64);
      const domain = atob(DOMAIN_B64);
      setEmailAddress(`${user}@${domain}`);
    } catch {
      setEmailAddress(null);
    }
  }, []);

  if (!emailAddress) {
    return (
      <span suppressHydrationWarning className={className}>
        info&#91;at&#93;ninetoninehub.com
      </span>
    );
  }

  return (
    <a
      href={`mailto:${emailAddress}`}
      className={className}
      aria-label={ariaLabel}
    >
      {emailAddress}
    </a>
  );
}
