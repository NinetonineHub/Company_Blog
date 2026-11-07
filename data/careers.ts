export interface JobPosition {
  id: string;
  slug: string;
  title: string;
  location: "India" | "UAE";
  city: string;
  country: string;
  countryCode: "IN" | "AE";
  department: string;
  employmentType: string;
  datePosted: string;
  status: "HIRING";
  description: string;
  responsibilities: string[];
  skills: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
}

export const INDIA_ROLES: JobPosition[] = [
  {
    id: "ind-sales-exec",
    slug: "sales-executive-india",
    title: "Sales Executive",
    location: "India",
    city: "India",
    country: "India",
    countryCode: "IN",
    department: "Business Development",
    employmentType: "FULL_TIME",
    datePosted: "2026-09-09",
    status: "HIRING",
    description:
      "Drive client acquisition and agency growth by identifying prospective accounts, presenting our digital marketing services, and building lasting client relationships.",
    responsibilities: [
      "Identify and qualify business prospects interested in SEO, social media, and web solutions.",
      "Conduct introductory discovery calls to understand client growth objectives.",
      "Prepare and deliver tailored service presentations and commercial proposals.",
      "Collaborate with marketing and technical teams to ensure seamless client onboarding.",
    ],
    skills: [
      "Proven B2B sales or business development experience in digital agency services.",
      "Strong verbal and written communication and presentation abilities.",
      "Ability to understand client growth needs and articulate measurable marketing value.",
      "Self-motivated with structured pipeline management skills.",
    ],
  },
  {
    id: "ind-dig-mktg",
    slug: "digital-marketing-executive-india",
    title: "Digital Marketing Executive",
    location: "India",
    city: "India",
    country: "India",
    countryCode: "IN",
    department: "Digital Marketing",
    employmentType: "FULL_TIME",
    datePosted: "2026-09-09",
    status: "HIRING",
    description:
      "Execute and coordinate integrated digital marketing campaigns across multi-channel funnels to maximize client visibility and lead generation.",
    responsibilities: [
      "Plan, execute, and monitor digital campaigns across search, social, and web channels.",
      "Collaborate with content, design, and SEO specialists to align campaign assets.",
      "Track campaign performance metrics, conversions, and user engagement.",
      "Prepare progress reports and optimize campaign tactics based on data.",
    ],
    skills: [
      "Hands-on experience managing digital marketing initiatives across channels.",
      "Working knowledge of Google Analytics, meta ads manager, and campaign tools.",
      "Analytical mindset with clear communication skills.",
      "Understanding of audience segmentation and funnel optimization.",
    ],
  },
  {
    id: "ind-seo-spec",
    slug: "seo-specialist-india",
    title: "SEO Specialist",
    location: "India",
    city: "India",
    country: "India",
    countryCode: "IN",
    department: "Search Engine Optimization",
    employmentType: "FULL_TIME",
    datePosted: "2026-09-09",
    status: "HIRING",
    description:
      "Lead technical, on-page, and off-page search engine optimization strategies to enhance organic rankings and search visibility for client websites.",
    responsibilities: [
      "Conduct comprehensive keyword research, search intent mapping, and competitor audits.",
      "Perform technical SEO audits including crawlability, schema, site speed, and indexing.",
      "Implement on-page optimizations for headings, meta data, internal linking, and content structure.",
      "Monitor Google Search Console and analytics data to track ranking and traffic growth.",
    ],
    skills: [
      "Demonstrated track record ranking websites in competitive regional niches.",
      "Proficiency with Google Search Console, Google Analytics, and Screaming Frog.",
      "Strong understanding of technical SEO, structured data, and Core Web Vitals.",
      "Familiarity with modern Next.js and React web rendering architectures.",
    ],
  },
  {
    id: "ind-smm-mgr",
    slug: "social-media-manager-india",
    title: "Social Media Manager",
    location: "India",
    city: "India",
    country: "India",
    countryCode: "IN",
    department: "Social Media",
    employmentType: "FULL_TIME",
    datePosted: "2026-09-09",
    status: "HIRING",
    description:
      "Develop and manage impactful organic and paid social media strategies across Instagram, LinkedIn, Facebook, and YouTube to elevate brand presence.",
    responsibilities: [
      "Develop social media content calendars aligned with client brand positioning.",
      "Coordinate with graphic designers and video editors to create engaging visual media.",
      "Manage community interactions, comment responses, and brand messaging.",
      "Analyze post reach, engagement metrics, and audience demographics to guide strategy.",
    ],
    skills: [
      "Experience managing social media accounts for commercial and lifestyle brands.",
      "Creative storytelling capability with an eye for design and current trends.",
      "Strong copywriting and social community engagement skills.",
      "Data literacy to evaluate post analytics and refine editorial plans.",
    ],
  },
  {
    id: "ind-content-writer",
    slug: "content-writer-india",
    title: "Content Writer",
    location: "India",
    city: "India",
    country: "India",
    countryCode: "IN",
    department: "Content & Editorial",
    employmentType: "FULL_TIME",
    datePosted: "2026-09-09",
    status: "HIRING",
    description:
      "Produce engaging, SEO-optimized copy for websites, blogs, case studies, and digital campaigns that captivates target audiences.",
    responsibilities: [
      "Write compelling website copy, articles, and marketing collaterals.",
      "Integrate target search keywords naturally to maintain readability and search rank.",
      "Research diverse industry topics to produce accurate, authoritative content.",
      "Proofread and edit copy to uphold the highest editorial standards.",
    ],
    skills: [
      "Exceptional English writing, editing, and storytelling skills.",
      "Understanding of SEO content writing, keyword density, and search intent.",
      "Ability to adapt tone and voice for various industry verticals.",
      "Strong research skills and attention to factual precision.",
    ],
  },
  {
    id: "ind-graphic-des",
    slug: "graphic-designer-india",
    title: "Graphic Designer",
    location: "India",
    city: "India",
    country: "India",
    countryCode: "IN",
    department: "Creative & Visual Design",
    employmentType: "FULL_TIME",
    datePosted: "2026-09-09",
    status: "HIRING",
    description:
      "Craft high-quality visual identity assets, social media graphics, brand collaterals, and digital designs that embody modern aesthetics.",
    responsibilities: [
      "Design eye-catching social media posts, banners, and digital marketing graphics.",
      "Develop brand style guides, logo assets, typography palettes, and iconography.",
      "Collaborate with web developers to produce cohesive UI elements.",
      "Maintain brand consistency across all visual customer touchpoints.",
    ],
    skills: [
      "Proficiency in Adobe Photoshop, Illustrator, Figma, and modern design software.",
      "Strong portfolio demonstrating typography, layout balance, and colour theory.",
      "Ability to deliver high-quality creative work within established timelines.",
      "Collaborative mindset receptive to creative feedback.",
    ],
  },
  {
    id: "ind-video-editor",
    slug: "video-editor-india",
    title: "Video Editor",
    location: "India",
    city: "India",
    country: "India",
    countryCode: "IN",
    department: "Video & Motion Media",
    employmentType: "FULL_TIME",
    datePosted: "2026-09-09",
    status: "HIRING",
    description:
      "Transform raw video footage into dynamic short-form reels, commercial advertisements, and corporate brand videos.",
    responsibilities: [
      "Edit short-form video content for Instagram Reels, YouTube Shorts, and social platforms.",
      "Assemble corporate showreels, promotional videos, and case study footage.",
      "Integrate sound effects, background audio, motion graphics, and captions.",
      "Color grade and optimize video export settings for diverse digital platforms.",
    ],
    skills: [
      "Expertise in Adobe Premiere Pro, After Effects, or DaVinci Resolve.",
      "Strong sense of pacing, rhythm, visual transitions, and narrative flow.",
      "Experience creating high-converting short-form social video content.",
      "Knowledge of audio mixing, color correction, and video formats.",
    ],
  },
  {
    id: "ind-telecalling",
    slug: "telecalling-executive-india",
    title: "Telecalling Executive",
    location: "India",
    city: "India",
    country: "India",
    countryCode: "IN",
    department: "Client Communications",
    employmentType: "FULL_TIME",
    datePosted: "2026-09-09",
    status: "HIRING",
    description:
      "Conduct professional outbound communications to connect with prospective business clients and qualify interest in agency services.",
    responsibilities: [
      "Initiate professional calls to target business prospects across regional databases.",
      "Explain agency capabilities and schedule introductory discovery sessions.",
      "Accurately record client interactions and notes in the agency CRM.",
      "Follow up with prospective clients to provide requested information.",
    ],
    skills: [
      "Pleasant, professional telephone demeanor and active listening skills.",
      "Clear communication in English and relevant regional languages.",
      "Resilience and consistent enthusiasm when conducting outbound calls.",
      "Basic computer and CRM record-keeping competency.",
    ],
  },
  {
    id: "ind-admin",
    slug: "admin-executive-india",
    title: "Admin Executive",
    location: "India",
    city: "India",
    country: "India",
    countryCode: "IN",
    department: "Administration & Operations",
    employmentType: "FULL_TIME",
    datePosted: "2026-09-09",
    status: "HIRING",
    description:
      "Maintain smooth daily office operations, handle administrative documentation, and assist executive teams with organizational tasks.",
    responsibilities: [
      "Manage daily administrative tasks, correspondence, and office filing systems.",
      "Coordinate internal scheduling, meetings, and team resource allocation.",
      "Assist with documentation, record management, and basic expense tracking.",
      "Support HR operations with candidate communication and onboarding paperwork.",
    ],
    skills: [
      "Demonstrated administrative or operational support experience.",
      "Proficiency with office productivity tools, spreadsheets, and document suites.",
      "Strong organizational, multitasking, and time-management capabilities.",
      "Detail-oriented with strong interpersonal communication.",
    ],
  },
];

export const UAE_ROLES: JobPosition[] = [
  {
    id: "uae-admin",
    slug: "admin-dubai",
    title: "Admin Executive",
    location: "UAE",
    city: "Dubai",
    country: "United Arab Emirates",
    countryCode: "AE",
    department: "Administration & Operations",
    employmentType: "FULL_TIME",
    datePosted: "2026-09-09",
    status: "HIRING",
    description:
      "Provide operational, administrative, and organizational support at our Dubai headquarters to ensure streamlined client workflows.",
    responsibilities: [
      "Oversee daily office administration at the Dubai headquarters.",
      "Manage executive communications, client scheduling, and visitor hospitality.",
      "Coordinate company documentation, trade license paperwork, and administrative records.",
      "Facilitate seamless operational communication between Dubai leadership and global teams.",
    ],
    skills: [
      "Prior administrative experience in the UAE corporate or agency sector.",
      "Excellent professional verbal and written English communication skills.",
      "Familiarity with UAE business procedures and office administration.",
      "High level of discretion, professionalism, and organizational ability.",
    ],
  },
  {
    id: "uae-sales-exec",
    slug: "sales-executive-dubai",
    title: "Sales Executive",
    location: "UAE",
    city: "Dubai",
    country: "United Arab Emirates",
    countryCode: "AE",
    department: "Business Development",
    employmentType: "FULL_TIME",
    datePosted: "2026-09-09",
    status: "HIRING",
    description:
      "Lead B2B client acquisition across Dubai and the UAE, pitching digital marketing, SEO, and web development services to regional brands.",
    responsibilities: [
      "Identify and engage decision-makers across UAE retail, hospitality, travel, and corporate sectors.",
      "Conduct discovery meetings to evaluate client growth goals.",
      "Present tailored digital marketing and technology proposals that address client challenges.",
      "Negotiate contracts and achieve quarterly revenue targets.",
    ],
    skills: [
      "Proven track record of B2B digital sales or agency business development in the UAE.",
      "Strong understanding of the Dubai commercial landscape and client expectations.",
      "Outstanding interpersonal, negotiation, and presentation skills.",
      "Valid UAE driver's license preferred.",
    ],
  },
  {
    id: "uae-videography",
    slug: "videographer-dubai",
    title: "Videographer",
    location: "UAE",
    city: "Dubai",
    country: "United Arab Emirates",
    countryCode: "AE",
    department: "Video & Media Production",
    employmentType: "FULL_TIME",
    datePosted: "2026-09-09",
    status: "HIRING",
    description:
      "Capture cinematic on-location video footage, client interviews, commercial reels, and brand assets across Dubai and the UAE.",
    responsibilities: [
      "Execute on-location video shoots for restaurants, corporate offices, and events across Dubai.",
      "Manage camera equipment, lighting setups, and multi-channel audio recording.",
      "Collaborate with the creative director to plan shot lists, angles, and visual storyboards.",
      "Organize and transfer footage to the editing team for seamless post-production.",
    ],
    skills: [
      "Hands-on experience with modern cinema cameras and gimbal stabilizers.",
      "Strong portfolio of commercial, hospitality, or lifestyle videography in the UAE.",
      "Proficiency in three-point lighting, ambient audio capture, and visual framing.",
      "Ability to manage fast-paced on-location shoots independently.",
    ],
  },
];

export const DUBAI_ROLES = UAE_ROLES;

export const ALL_ROLES: JobPosition[] = [...INDIA_ROLES, ...UAE_ROLES];

export function getAllJobs(): JobPosition[] {
  return ALL_ROLES;
}

export function getJobBySlug(slug: string): JobPosition | undefined {
  return ALL_ROLES.find((j) => j.slug === slug);
}

export const TEAM_MEMBERS: TeamMember[] = [
  { id: "ganesh", name: "Ganesh", role: "Web Development" },
  { id: "kaviyaras", name: "Kaviyaras", role: "Video Editor" },
  { id: "savad", name: "Savad", role: "Videographer" },
  { id: "yadhu", name: "Yadhu", role: "SEO Specialist" },
  { id: "varshni", name: "Varshni", role: "Webpage Designer" },
  { id: "mano-sree", name: "Mano Sree", role: "Digital Marketing Executive" },
  { id: "arasu", name: "Arasu", role: "Sales Executive" },
  { id: "zainab", name: "Zainab", role: "Admin" },
];

export const COMPANY_VALUES = [
  {
    title: "CREATIVITY",
    description:
      "Engineering bold visual storytelling and modern brand identity systems.",
  },
  {
    title: "PERFORMANCE",
    description:
      "Focusing on data-driven growth strategies, search dominance, and tangible ROI.",
  },
  {
    title: "COLLABORATION",
    description:
      "Working seamlessly across strategy, design, video, SEO, and engineering divisions.",
  },
  {
    title: "GROWTH",
    description:
      "Fostering continuous learning and expanding client impact across regional markets.",
  },
];
