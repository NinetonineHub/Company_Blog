export interface PortfolioProject {
  id: string;
  number: string;
  title: string;
  industry: string;
  category: "CORPORATE" | "CONSTRUCTION" | "RESTAURANTS" | "FOOD & RETAIL" | "TRAVEL";
  image: string;
  workTags: string[];
  packageLabel: string;
  websiteUrl?: string;
  description: string;
  altText: string;
}

export const PORTFOLIO_CATEGORIES = [
  "ALL",
  "CORPORATE",
  "CONSTRUCTION",
  "RESTAURANTS",
  "TRAVEL",
  "FOOD & RETAIL",
] as const;

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: "beyond-numbers",
    number: "01",
    title: "Beyond Numbers",
    industry: "Corporate / Tax",
    category: "CORPORATE",
    image: "/images/portfolio/1.png",
    packageLabel: "STARTER GROWTH",
    workTags: ["Social Media Management", "Posters & Carousels"],
    description: "Corporate advisory brand positioning, posters, and dedicated account handling.",
    altText: "Beyond Numbers logo",
  },
  {
    id: "bluemoon",
    number: "02",
    title: "BlueMoon",
    industry: "Construction",
    category: "CONSTRUCTION",
    image: "/images/portfolio/2.png",
    packageLabel: "BUSINESS SCALE",
    workTags: ["Social Media Management", "Posters & Carousels", "Logo Design", "Website Design"],
    websiteUrl: "https://bluemoonsteelfab.ae",
    description: "Commercial construction social media management and content strategy.",
    altText: "BlueMoon logo",
  },
  {
    id: "curry-xpress",
    number: "03",
    title: "Curry Xpress",
    industry: "Restaurants",
    category: "RESTAURANTS",
    image: "/images/portfolio/3.png",
    packageLabel: "BUSINESS SCALE",
    workTags: ["Video Production", "Social Media Management", "Posters & Carousels"],
    description: "Restaurant social media management and short-form video promotion campaigns.",
    altText: "Curry Xpress logo",
  },
  {
    id: "kanz-al-arab",
    number: "04",
    title: "Kanz Al Arab",
    industry: "Construction",
    category: "CONSTRUCTION",
    image: "/images/portfolio/4.png",
    packageLabel: "BUSINESS SCALE",
    workTags: ["Social Media Management", "Posters & Carousels", "Logo Design", "Website Design"],
    websiteUrl: "https://kanzalarab.ae",
    description: "Building materials social media handling, logo design, and website design.",
    altText: "Kanz Al Arab logo",
  },
  {
    id: "noor-altrhal",
    number: "05",
    title: "Noor Altrhal",
    industry: "Travel",
    category: "TRAVEL",
    image: "/images/portfolio/6.png",
    packageLabel: "ULTIMATE ENTERPRISE",
    workTags: [
      "Video Production",
      "Social Media Management",
      "Posters & Carousels",
      "Logo Design",
      "Website Design",
    ],
    websiteUrl: "https://nooraltrhal.com",
    description: "Full travel agency digital ecosystem, website, logo design, and backend infrastructure.",
    altText: "Noor Altrhal logo",
  },
  {
    id: "taza-biryani",
    number: "06",
    title: "Taza Biryani",
    industry: "Restaurants",
    category: "RESTAURANTS",
    image: "/images/portfolio/5.png",
    packageLabel: "ELITE",
    workTags: ["Video Production", "Branding", "Social Media Management", "Content Strategy", "Posters & Carousels"],
    description: "High-impact dining video production, brand identity, and social media handling.",
    altText: "Taza Biryani logo",
  },
  {
    id: "taza-meat-shop",
    number: "07",
    title: "Taza Meat Shop",
    industry: "Food & Retail",
    category: "FOOD & RETAIL",
    image: "/images/portfolio/7.png",
    packageLabel: "ELITE",
    workTags: ["Video Production", "Social Media Management", "Posters & Carousels"],
    description: "Meat shop brand identity and social media account management.",
    altText: "Taza Meat Shop logo",
  },
  {
    id: "vasanta-bhavan",
    number: "08",
    title: "Vasanta Bhavan",
    industry: "Restaurants",
    category: "RESTAURANTS",
    image: "/images/portfolio/8.png",
    packageLabel: "BUSINESS SCALE",
    workTags: ["Video Production", "Posters & Carousels"],
    description: "Promotional video management and social media video campaigns.",
    altText: "Vasanta Bhavan logo",
  },
  {
    id: "go-bus-tourism",
    number: "09",
    title: "Go Bus Tourism",
    industry: "Travel & Tourism",
    category: "TRAVEL",
    image: "/images/portfolio/9.png",
    packageLabel: "STARTER GROWTH",
    workTags: ["SEO", "Search Optimization"],
    description: "Search engine optimization and digital visibility strategy for UAE tourism.",
    altText: "Go Bus Tourism logo",
  },
];
