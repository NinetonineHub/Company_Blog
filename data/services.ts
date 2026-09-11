export interface ClientWork {
  name: string;
  scope: string[];
  websiteUrl?: string;
  logoUrl?: string;
  driveUrl?: string;
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
    shortDescription: "End-to-end content creation, strategic scheduling, community engagement, content strategy, posters and carousels across GCC social platforms.",
    detailedDescription: "End-to-end content creation, strategic post scheduling, community engagement, content strategy, custom posters, carousels, and brand management tailored for UAE and GCC audiences. We curate visual brand feeds, maintain daily community engagement, and optimize brand authority.",
    tag: "SOCIAL & BRAND",
    accentColor: "#5B0F18",
    deliverables: [
      "End-to-end Content Creation & Feed Curation",
      "Strategic Content & Post Scheduling",
      "Custom Posters & High-Converting Carousels",
      "Content Strategy & Monthly Editorial Analytics"
    ],
    clients: [
      { name: "Taza Biryani", scope: ["Social Media Management", "Content Strategy", "Posters & Carousels"] },
      { name: "Taza Meat Shop", scope: ["Social Media Management", "Posters & Carousels"] },
      { name: "Curry Xpress", scope: ["Social Media Management", "Posters & Carousels"] },
      { name: "Kanz Al Arab", scope: ["Social Media Management", "Posters & Carousels"] },
      { name: "Noor Altrhal", scope: ["Social Media Management", "Posters & Carousels"] },
      { name: "Beyond Numbers", scope: ["Social Media Management", "Posters & Carousels"] },
      { name: "BlueMoon", scope: ["Social Media Management", "Posters & Carousels"] },
      { name: "Vasanta Bhavan", scope: ["Posters & Carousels"] }
    ]
  },
  {
    id: "seo-search-engine-optimization",
    number: "02",
    title: "SEO (Search Engine Optimization)",
    shortDescription: "Comprehensive website optimization strategies to rank higher on Google search results and drive consistent organic traffic.",
    detailedDescription: "Comprehensive website optimization strategies to rank higher on Google search results and drive consistent organic traffic. We analyze search intent, resolve technical crawling blockers, optimize on-page structure, and improve overall search engine visibility.",
    tag: "ORGANIC SEARCH",
    accentColor: "#5B0F18",
    deliverables: [
      "Comprehensive SEO Strategy",
      "Technical Website Optimization",
      "Organic Search Visibility Improvement",
      "Keyword Mapping & On-Page Enhancement"
    ],
    clients: [
      { name: "Go Bus Tourism", scope: ["Search Engine Optimization"] }
    ]
  },
  {
    id: "google-my-business",
    number: "03",
    title: "Google My Business",
    shortDescription: "Complete profile setup, local SEO optimization, review management and map positioning to improve local search visibility.",
    detailedDescription: "Complete profile setup, local SEO optimization, review management and map positioning to improve local search visibility across UAE and local GCC search areas.",
    tag: "LOCAL SEARCH",
    accentColor: "#5B0F18",
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
    title: "Video Production",
    shortDescription: "High-quality video production, creative scripting, professional editing and targeted promotion tailored for Reels, YouTube and brand campaigns.",
    detailedDescription: "High-quality video production, creative scripting, professional editing and targeted promotion tailored for Reels, YouTube and brand campaigns across multi-platform video channels.",
    tag: "VIDEO & REELS",
    accentColor: "#5B0F18",
    deliverables: [
      "High-Quality Video Production",
      "Creative Scripting & Visual Direction",
      "Professional Video Editing & Motion Graphics",
      "Targeted Video Promotion & Reel Distribution"
    ],
    clients: [
      {
        name: "Taza Biryani",
        scope: ["Video Production"],
        driveUrl: "https://drive.google.com/drive/folders/10zOTK-5LAoXQAaJsQn_2cus7NIM8Z2Oy?usp=drive_link"
      },
      {
        name: "Taza Meat Shop",
        scope: ["Video Production"],
        driveUrl: "https://drive.google.com/drive/folders/1Uz8G2m7cIAa7vXIEzpEWj3UK3dSUxO7t?usp=drive_link"
      },
      {
        name: "Curry Xpress",
        scope: ["Video Production"],
        driveUrl: "https://drive.google.com/drive/folders/168S8_ZVf7VbReVCWfb-rANMUCGACJFYv?usp=drive_link"
      },
      {
        name: "Vasanta Bhavan",
        scope: ["Video Production"],
        driveUrl: "https://drive.google.com/drive/folders/1EM13L49ObyuIk8cBHlwwAtTHufQnn2kB?usp=drive_link"
      },
      {
        name: "Noor Altrhal",
        scope: ["Video Production"],
        driveUrl: "https://drive.google.com/drive/folders/10C_KX7A2_i71Ab3vuXIOInb3Ji6f1Iu-?usp=drive_link"
      }
    ]
  },
  {
    id: "website-creation",
    number: "05",
    title: "Website Creation",
    shortDescription: "Custom, responsive, mobile-friendly and high-converting website design and development built specifically for business goals.",
    detailedDescription: "Custom, responsive, mobile-friendly and high-converting website design and development built specifically for business goals. We engineer modern, fast web platforms tailored for seamless user navigation and business conversion.",
    tag: "WEB CREATION",
    accentColor: "#5B0F18",
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
    accentColor: "#5B0F18",
    deliverables: [
      "Unique Logo Suite Design",
      "Brand Visual Identity Systems",
      "Typography & Color Palettes",
      "Marketing Collateral & Graphic Assets"
    ],
    logoShowcase: [
      {
        name: "Noor Altrhal",
        logoUrl: "/images/websites/noorlogo.jpeg",
        scope: ["Logo Design"]
      },
      {
        name: "Kanz Al Arab",
        logoUrl: "/images/websites/kanzalarablogo.png",
        scope: ["Logo Design"]
      },
      {
        name: "BlueMoon",
        logoUrl: "/images/websites/bluemoon logo.jpeg",
        scope: ["Logo Design"]
      }
    ],
    clients: [
      { name: "Taza Biryani", scope: ["Branding"] }
    ]
  },
  {
    id: "ads-management",
    number: "07",
    title: "Ads Management",
    shortDescription: "Paid campaign setup and optimization across Google, Meta (Instagram/Facebook) and TikTok.",
    detailedDescription: "Paid campaign setup and optimization across Google, Meta (Instagram/Facebook) and TikTok to drive targeted user acquisition and ROI growth.",
    tag: "PAID ADS",
    accentColor: "#5B0F18",
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
    accentColor: "#5B0F18",
    deliverables: [
      "High-Converting Sales Funnel Design",
      "Lead Capture Mechanics & Landing Pages",
      "Conversion Rate Optimization (CRO)",
      "Qualified Business Lead Intake Systems"
    ]
  }
];
