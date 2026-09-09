export interface ClientWork {
  name: string;
  scope: string[];
  websiteUrl?: string;
  logoUrl?: string;
}

export interface Service {
  id: string;
  number: string;
  title: string;
  shortDescription: string;
  detailedDescription: string;
  deliverables: string[];
  tag: string;
  accentColor: string;
  clients?: ClientWork[];
  websitesCompleted?: ClientWork[];
  logoShowcase?: ClientWork[];
}

export const SERVICES_DATA: Service[] = [
  {
    id: "social-media-management",
    number: "01",
    title: "Social Media Management",
    shortDescription: "End-to-end content creation, strategic post scheduling, community engagement and brand management across social media platforms.",
    detailedDescription: "End-to-end content creation, strategic post scheduling, community engagement and brand management across social media platforms tailored for UAE and GCC audiences. We curate visual brand feeds, maintain daily community engagement, and optimize brand authority.",
    tag: "SOCIAL & BRAND",
    accentColor: "#e6193c",
    deliverables: [
      "End-to-end Content Creation & Feed Curation",
      "Strategic Post Scheduling & Publishing",
      "Community Engagement & Brand Management",
      "Monthly Editorial Calendars & Analytics"
    ],
    clients: [
      { name: "Noor Altrhal", scope: ["Social Media Handling"] },
      { name: "Taza", scope: ["Social Media Handling"] },
      { name: "BlueMoon", scope: ["Social Media Management"] },
      { name: "Curry Xpress", scope: ["Social Media Management"] },
      { name: "Vasanta Bhavan", scope: ["Social Media Handling"] },
      { name: "Beyond Numbers", scope: ["Account Handling"] },
      { name: "Kanz Al Arab", scope: ["Social Media Handling"] }
    ]
  },
  {
    id: "seo-search-engine-optimization",
    number: "02",
    title: "SEO (Search Engine Optimization)",
    shortDescription: "Comprehensive website optimization strategies to rank higher on Google search results and drive consistent organic traffic.",
    detailedDescription: "Comprehensive website optimization strategies to rank higher on Google search results and drive consistent organic traffic. We analyze search intent, resolve technical crawling blockers, optimize on-page structure, and improve overall search engine visibility.",
    tag: "ORGANIC SEARCH",
    accentColor: "#ff1a40",
    deliverables: [
      "Comprehensive SEO Strategy",
      "Technical Website Optimization",
      "Organic Search Visibility Improvement",
      "Keyword Mapping & On-Page Enhancement"
    ],
    clients: [
      { name: "Go Bus Tourism", scope: ["SEO", "Search Optimization"] }
    ]
  },
  {
    id: "google-my-business",
    number: "03",
    title: "Google My Business",
    shortDescription: "Complete profile setup, local SEO optimization, review management and map positioning to improve local search visibility.",
    detailedDescription: "Complete profile setup, local SEO optimization, review management and map positioning to improve local search visibility across UAE and local GCC search areas.",
    tag: "LOCAL SEARCH",
    accentColor: "#00f0ff",
    deliverables: [
      "Complete Profile Setup & Verification",
      "Local Map Pack Optimization",
      "Review Management Strategy",
      "Geotagged Content & NAP Synchronization"
    ]
  },
  {
    id: "video-promotion",
    number: "04",
    title: "Video Promotion",
    shortDescription: "High-quality video production, creative scripting, professional editing and targeted promotion tailored for Reels, YouTube and brand campaigns.",
    detailedDescription: "High-quality video production, creative scripting, professional editing and targeted promotion tailored for Reels, YouTube and brand campaigns across multi-platform video channels.",
    tag: "VIDEO & REELS",
    accentColor: "#e6193c",
    deliverables: [
      "High-Quality Video Production",
      "Creative Scripting & Visual Direction",
      "Professional Video Editing & Motion Graphics",
      "Targeted Video Promotion & Reel Distribution"
    ],
    clients: [
      { name: "Taza", scope: ["Video Production"] },
      { name: "Curry Xpress", scope: ["Video Management"] },
      { name: "Vasanta Bhavan", scope: ["Video Management"] },
      { name: "Noor Altrhal", scope: ["Video Promotion"] }
    ]
  },
  {
    id: "website-creation",
    number: "05",
    title: "Website Creation",
    shortDescription: "Custom, responsive, mobile-friendly and high-converting website design and development built specifically for business goals.",
    detailedDescription: "Custom, responsive, mobile-friendly and high-converting website design and development built specifically for business goals. We engineer modern, fast web platforms tailored for seamless user navigation and business conversion.",
    tag: "WEB CREATION",
    accentColor: "#38bdf8",
    deliverables: [
      "Custom Web Design & UX Architecture",
      "Responsive & Mobile-Friendly Development",
      "High-Converting Page Layouts",
      "Backend & Infrastructure Integration"
    ],
    websitesCompleted: [
      {
        name: "Noor Altrhal",
        websiteUrl: "https://nooraltrhal.com",
        scope: [
          "Website Design",
          "Brand Logo Design",
          "Infrastructure Setup",
          "Social Media Handling",
          "Itinerary",
          "Backend Operation",
          "Admin Support"
        ]
      },
      {
        name: "Kanz Al Arab",
        websiteUrl: "https://kanzalarab.ae",
        scope: [
          "Website Design",
          "Logo Design",
          "Social Media Handling"
        ]
      },
      {
        name: "BlueMoon",
        websiteUrl: "https://bluemoonsteelfab.ae",
        scope: [
          "Website Design",
          "Social Media Management",
          "Content Strategy"
        ]
      }
    ]
  },
  {
    id: "logo-visual-design",
    number: "06",
    title: "Logo & Visual Design",
    shortDescription: "Crafting unique, memorable and professional visual identities, logos and branding collateral for modern businesses.",
    detailedDescription: "Crafting unique, memorable and professional visual identities, logos and branding collateral for modern businesses. We design brand guidelines, typography palettes, and visual design assets.",
    tag: "BRANDING",
    accentColor: "#ff1a40",
    deliverables: [
      "Unique Logo Suite Design",
      "Brand Visual Identity Systems",
      "Typography & Color Palettes",
      "Marketing Collateral & Graphic Assets"
    ],
    logoShowcase: [
      {
        name: "NOOR ALTRHAL",
        logoUrl: "/images/websites/noorlogo.jpeg",
        scope: ["Brand Logo Design"]
      },
      {
        name: "KANZ AL ARAB",
        logoUrl: "/images/websites/kanzalarablogo.png",
        scope: ["Logo Design"]
      },
      {
        name: "BLUEMOON",
        logoUrl: "/images/websites/bluemoon logo.jpeg",
        scope: ["Brand Identity Support"]
      }
    ]
  },
  {
    id: "ads-management",
    number: "07",
    title: "Ads Management",
    shortDescription: "Paid campaign setup and optimization across Google, Meta (Instagram/Facebook) and TikTok.",
    detailedDescription: "Paid campaign setup and optimization across Google, Meta (Instagram/Facebook) and TikTok to drive targeted user acquisition and ROI growth.",
    tag: "PAID ADS",
    accentColor: "#e6193c",
    deliverables: [
      "Multi-Platform Paid Campaign Setup",
      "Audience Segmentation & Targeting",
      "Ad Creative A/B Testing",
      "Continuous Campaign ROAS Optimization"
    ]
  },
  {
    id: "lead-generation",
    number: "08",
    title: "Lead Generation",
    shortDescription: "Targeted strategies and high-converting sales funnels designed to capture qualified business leads.",
    detailedDescription: "Targeted strategies and high-converting sales funnels designed to capture qualified business leads for commercial growth.",
    tag: "LEAD FUNNELS",
    accentColor: "#00f0ff",
    deliverables: [
      "High-Converting Sales Funnel Design",
      "Lead Capture Mechanics & Landing Pages",
      "Conversion Rate Optimization (CRO)",
      "Qualified Business Lead Intake Systems"
    ]
  }
];
