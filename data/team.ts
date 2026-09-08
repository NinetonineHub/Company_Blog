export interface TeamMember {
  id: string;
  number: string;
  name: string;
  role: string;
  code?: string;
  department?: string;
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "zainab",
    number: "01",
    name: "Zainab",
    role: "Admin",
    code: "TEAM-01",
  },
  {
    id: "manosharee",
    number: "02",
    name: "Manosharee",
    role: "Digital Marketing Executive",
    code: "TEAM-02",
  },
  {
    id: "varshini",
    number: "03",
    name: "Varshini",
    role: "Webpage Designer",
    code: "TEAM-03",
  },
  {
    id: "yadhu",
    number: "04",
    name: "Yadhu",
    role: "SEO Specialist",
    code: "TEAM-04",
  },
  {
    id: "arasu",
    number: "05",
    name: "Arasu",
    role: "Sales Executive",
    code: "TEAM-05",
  },
  {
    id: "kaviyaras",
    number: "06",
    name: "Kaviyaras",
    role: "Video Editor",
    code: "TEAM-06",
  },
  {
    id: "somya",
    number: "07",
    name: "Somya",
    role: "Senior Video Editor",
    code: "TEAM-07",
  },
  {
    id: "ganesh",
    number: "08",
    name: "Ganesh",
    role: "Web Development",
    code: "TEAM-08",
  },
];
