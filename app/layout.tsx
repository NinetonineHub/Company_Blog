import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Background3D from "@/components/Background3D";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";

export const metadata: Metadata = {
  title: "Nine to Nine Hub | The Hub of Digital Growth",
  description:
    "Nine to Nine Hub is a UAE-based digital agency delivering data-driven marketing, creative content, branding, SEO and high-performance web development solutions.",
  keywords: [
    "UAE Digital Agency",
    "Digital Marketing UAE",
    "Performance Marketing UAE",
    "Videography Reels UAE",
    "SEO Google Maps UAE",
    "Next.js Web Development UAE",
    "Luxury Branding Agency UAE",
  ],
  authors: [{ name: "Nine to Nine Hub" }],
  openGraph: {
    title: "Nine to Nine Hub | The Hub of Digital Growth",
    description:
      "A visionary UAE digital agency crafting high-performance marketing, creative experiences and technology solutions that help brands grow, connect and convert.",
    url: "https://ninetoninehub.com",
    siteName: "Nine to Nine Hub",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nine to Nine Hub | The Hub of Digital Growth",
    description:
      "UAE-based digital agency delivering data-driven marketing, creative content, branding, SEO and high-performance web development solutions.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="font-sans">
      <body className="bg-[#F8F1E7] text-[#24191A] selection:bg-[#5B0F18] selection:text-[#F8F1E7] relative min-h-screen flex flex-col font-sans">
        <ScrollProgress />
        <CustomCursor />
        <Background3D />
        
        <Navbar />
        <main className="flex-grow relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
