export interface JobPosition {
  id: string;
  title: string;
  location: "India" | "UAE";
  status: "HIRING";
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
}

export const INDIA_ROLES: JobPosition[] = [
  { id: "ind-sales-exec", title: "Sales Executive", location: "India", status: "HIRING" },
  { id: "ind-dig-mktg", title: "Digital Marketing Executive", location: "India", status: "HIRING" },
  { id: "ind-seo-spec", title: "SEO Specialist", location: "India", status: "HIRING" },
  { id: "ind-smm-mgr", title: "Social Media Manager", location: "India", status: "HIRING" },
  { id: "ind-content-writer", title: "Content Writer", location: "India", status: "HIRING" },
  { id: "ind-graphic-des", title: "Graphic Designer", location: "India", status: "HIRING" },
  { id: "ind-video-editor", title: "Video Editor", location: "India", status: "HIRING" },
  { id: "ind-telecalling", title: "Telecalling", location: "India", status: "HIRING" },
  { id: "ind-admin", title: "Admin", location: "India", status: "HIRING" },
];

export const UAE_ROLES: JobPosition[] = [
  { id: "uae-admin", title: "Admin", location: "UAE", status: "HIRING" },
  { id: "uae-sales-exec", title: "Sales Executive", location: "UAE", status: "HIRING" },
  { id: "uae-videography", title: "Videography", location: "UAE", status: "HIRING" },
];

export const DUBAI_ROLES = UAE_ROLES;


export const TEAM_MEMBERS: TeamMember[] = [
  { id: "ganesh", name: "Ganesh", role: "Web Development" },
  { id: "kaviyaras", name: "Kaviyaras", role: "Video Editor" },
  { id: "somya", name: "Somya", role: "Senior Video Editor" },
  { id: "yadhu", name: "Yadhu", role: "SEO Specialist" },
  { id: "varshni", name: "Varshni", role: "Webpage Designer" },
  { id: "mano-sree", name: "Mano Sree", role: "Digital Marketing Executive" },
  { id: "arasu", name: "Arasu", role: "Sales Executive" },
  { id: "zainab", name: "Zainab", role: "Admin" },
];

export const COMPANY_VALUES = [
  {
    title: "CREATIVITY",
    description: "Engineering bold visual storytelling and modern brand identity systems."
  },
  {
    title: "PERFORMANCE",
    description: "Focusing on data-driven growth strategies, search dominance, and tangible ROI."
  },
  {
    title: "COLLABORATION",
    description: "Working seamlessly across strategy, design, video, SEO, and engineering divisions."
  },
  {
    title: "GROWTH",
    description: "Fostering continuous learning and expanding client impact across regional markets."
  }
];
