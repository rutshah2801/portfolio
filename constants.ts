import { 
  EducationItem, 
  WorkExperienceItem, 
  ProjectItem, 
  SkillCategory, 
  CertificationItem,
  Milestone,
  GoalsData
} from './types';
import { 
  Database, 
  BarChart, 
  Briefcase, 
  TrendingUp,
  BookOpen,
  GraduationCap,
  Lightbulb
} from 'lucide-react';

export const PERSONAL_INFO = {
  name: "Rutvi Shah",
  title: "Project Management Professional",
  location: "Boston, MA",
  phone: "+1 (617) 505-0774",
  email: "rutshah2801@gmail.com",
  linkedin: "https://www.linkedin.com/in/rutvi-shah28/", 
  summary: "I am a Project Management Professional with a strong foundation in Finance and Business Operations. Currently pursuing my MS at Northeastern University, I specialize in bridging the gap between technical data and strategic decision-making. My professional journey—from streamlining supply chains to developing performance dashboards—is defined by a commitment to efficiency, accuracy, and data-driven results.",
  learningPhilosophy: "I believe that true learning happens at the intersection of theory and practice. My approach involves rigorous analysis of data ('what happened?'), empathetic understanding of stakeholders ('why did it happen?'), and strategic application of frameworks ('how do we improve?'). I view every project not just as a task to complete, but as an opportunity to refine this cycle of inquiry and execution."
};

export const LEARNING_JOURNEY = {
  title: "From Numbers to Strategy",
  narrative: [
    "When I completed my Bachelor of Commerce in Accounting and Finance, I saw business through the lens of numbers — balance sheets, ledgers, and financial statements. Everything was quantifiable, precise, and retrospective. But as I moved into my MBA in Finance and began working across different industries, I realized something important: numbers tell you what happened, but they rarely tell you what to do next.",
    "At Bureau Veritas, I learned that operational efficiency isn't just about cutting costs — it's about understanding workflows, anticipating bottlenecks, and building systems that prevent errors before they happen. When I reduced rework by 15% through quality control measures, I wasn't just improving a metric; I was learning how small process changes create ripple effects across entire teams.",
    "My time at Baker Tilly deepened this understanding. Working on supply chain analytics showed me how interconnected business operations truly are — a delay in one area cascades through the entire system. I began to see organizations not as collections of departments, but as living systems where data flows like blood through veins.",
    "At Baldor Technologies, I finally connected the dots. Building performance dashboards wasn't just about visualization — it was about translation. I was taking complex operational data and turning it into stories that leadership could act on. That's when I knew: I wanted to be at the intersection of data and decisions, helping organizations not just understand their past, but shape their future.",
    "This realization brought me to Northeastern's MS in Project Management program. Here, I'm learning the frameworks and methodologies to lead complex initiatives — but more importantly, I'm learning how to think systematically about change. Whether it's conducting needs assessments, running simulations, or applying design thinking, every course reinforces the same truth: good project management is about people, processes, and the wisdom to know which lever to pull when.",
    "My journey from finance to project management isn't a pivot — it's an evolution. I'm building on my analytical foundation while developing the strategic and human-centered skills needed to drive meaningful change."
  ],
  milestones: [
    {
      year: "2018-2021",
      title: "The Foundation",
      subtitle: "B.Com in Accounting & Finance",
      description: "Established a rigorous understanding of financial accuracy and quantitative analysis.",
      icon: BookOpen
    },
    {
      year: "2021-2023",
      title: "Strategic Expansion",
      subtitle: "MBA in Finance",
      description: "Broadened perspective from pure accounting to business strategy and financial management.",
      icon: GraduationCap
    },
    {
      year: "2021-2024",
      title: "Professional Application",
      subtitle: "Operations & Analytics Roles",
      description: "Applied concepts in real-world settings at Bureau Veritas, Baker Tilly, and Baldor, focusing on efficiency and data translation.",
      icon: Briefcase
    },
    {
      year: "2024-Present",
      title: "Integration & Leadership",
      subtitle: "MS in Project Management",
      description: "Synthesizing technical skills with leadership frameworks to drive organizational change.",
      icon: Lightbulb
    }
  ] as Milestone[]
};

export const EDUCATION: EducationItem[] = [
  {
    institution: "Northeastern University",
    location: "Boston, MA",
    degree: "MS in Project Management",
    date: "Sep. 2024 – Present",
    details: ["Expected Graduation: 2026"],
    gpa: "3.74/4.0"
  },
  {
    institution: "NMIMS",
    location: "Mumbai, India",
    degree: "MBA in Finance",
    date: "Dec. 2021 – Dec. 2023",
  },
  {
    institution: "Thakur Ramnarayan College of Arts and Commerce",
    location: "Mumbai, India",
    degree: "Bachelor of Commerce - Accounting and Finance",
    date: "June 2018 – June 2021",
    gpa: "8.80/10.0"
  }
];

export const EXPERIENCE: WorkExperienceItem[] = [
  {
    company: "Baldor Technologies",
    location: "Mumbai, India",
    role: "Research Executive",
    date: "Sep. 2023 – Aug. 2024",
    achievements: [
      "Developed performance dashboards tracking business KPIs and operational metrics, enabling data-driven portfolio optimization and strategic planning for leadership.",
      "Achieved 99.9% accuracy in processing client and candidate documents, ensuring data integrity and regulatory compliance.",
      "Improved response efficiency for client technical queries, reducing resolution time by 20% and enhancing customer satisfaction."
    ],
    reflection: "This role taught me the power of translation — taking raw data and transforming it into actionable insights. When I built performance dashboards, I wasn't just creating charts; I was learning to think like leadership. What questions keep them up at night? What decisions are they trying to make? How can I present information that illuminates rather than overwhelms? Achieving 99.9% accuracy also taught me that excellence is about systems, not heroics."
  },
  {
    company: "Baker Tilly India Business Advisory",
    location: "Mumbai, India",
    role: "Associate Consultant - Strategy",
    date: "Feb. 2023 – Aug. 2023",
    achievements: [
      "Conducted thorough data analysis for research projects, improving the quality and reliability of findings.",
      "Collaborated with vendors to gather operational data, facilitating supply chain analytics for process optimization."
    ],
    reflection: "At Baker Tilly, I learned that consulting is about listening more than advising. The best insights came not from our analysis, but from truly understanding how our clients' operations worked day-to-day. Collaborating with vendors to gather operational data showed me that data collection is a relationship, not a transaction. This experience confirmed my desire for a career that keeps me constantly growing through variety."
  },
  {
    company: "Bureau Veritas Group",
    location: "Mumbai, India",
    role: "Process Executive",
    date: "Aug. 2021 – Dec. 2022",
    achievements: [
      "Collaborated with vendors for operational data, enhancing supply chain analytics and decision-making.",
      "Streamlined operations through data trend analysis, improving overall efficiency.",
      "Increased reporting accuracy with quality control measures, reducing rework by 15%."
    ],
    reflection: "This was my foundation. Bureau Veritas taught me that operations are where strategy becomes reality. All the plans and projections in the world mean nothing if execution fails. Reducing rework by 15% through quality control measures showed me that small, systematic improvements compound into significant results. I also learned the importance of cross-functional collaboration — operations don't happen in silos."
  }
];

export const ACADEMIC_PROJECTS: ProjectItem[] = [
  {
    title: "Benefit-Cost Analysis with Monte Carlo Simulation",
    course: "ALY 6050",
    description: [
      "Developed a comprehensive financial model using Monte Carlo simulation to forecast project costs and returns under uncertainty.",
      "Ran thousands of iterations to generate probability distributions for key financial metrics."
    ],
    tools: ["Excel", "Monte Carlo Simulation", "Risk Analysis", "Financial Modeling"],
    category: 'academic',
    reflection: "This project fundamentally changed how I think about uncertainty in decision-making. Before this course, I approached financial projections as single-point estimates. Building the Monte Carlo simulation taught me to embrace uncertainty rather than hide from it. The most valuable insight was learning to communicate uncertainty in a way that empowers decision-makers rather than paralyzing them—a skill directly relevant to project management."
  },
  {
    title: "International Student Housing Experience Improvement",
    course: "PJM 6620",
    description: [
      "Utilized Design Thinking methodology to identify pain points for international students securing housing.",
      "Conducted empathy interviews, defined problem statements, and prototyped solutions focused on community building."
    ],
    tools: ["Design Thinking", "Empathy Mapping", "Prototyping", "Interviewing"],
    category: 'academic',
    reflection: "What struck me most was the power of the empathy phase. We discovered that the biggest challenges weren't logistical—they were emotional. This shifted our entire solution approach from 'provide better information' to 'create connection.' Working in a team taught me about the messiness of collaborative creativity; I learned to facilitate divergent thinking while keeping us focused on actionable outcomes."
  },
  {
    title: "Change Management Simulation",
    course: "Organizational Behavior",
    description: [
      "Led a simulated organizational change initiative, making strategic decisions on stakeholder engagement and timing.",
      "Analyzed resistance patterns and adapted communication strategies for different organizational levels."
    ],
    tools: ["Stakeholder Analysis", "Change Management", "Strategic Communication"],
    category: 'academic',
    reflection: "This simulation was humbling. I went in thinking change management was about clear communication, but I learned it's fundamentally about influence and timing. The simulation revealed that the same change initiative requires completely different approaches depending on your audience. The most surprising lesson was patience—sustainable change happens slower than expected, and pushing too hard creates resistance."
  }
];

export const PROFESSIONAL_PROJECTS: ProjectItem[] = [
  {
    title: "Startup Operations Improvement",
    description: [
      "Worked directly with a friend’s early-stage startup to develop and implement standard operating procedures (SOPs).",
      "Conducted market research, supported financial forecasting, and organized documentation.",
      "Collaborated closely with founders to optimize deal pipeline management and enhance cross-team communication."
    ],
    tools: ["Google Workspace", "Airtable", "Notion", "SOPs", "Financial Forecasting"],
    category: 'professional',
    reflection: "This project allowed me to apply my operational skills in a high-velocity environment. Unlike corporate roles where processes exist, here I had to build them from scratch. I learned that in a startup, 'perfect' is the enemy of 'done'—the goal is to create just enough structure to enable growth without stifling agility."
  }
];

export const GOALS: GoalsData = {
  shortTerm: "My immediate focus is securing a role where I can apply my analytical skills and project management training to drive measurable business impact. I'm targeting positions in business operations, project coordination, or analytics where I can contribute to process improvement and data-driven decision-making. I want to work in an environment that values both rigor and creativity.",
  longTerm: "I aspire to lead strategic initiatives at the intersection of operations and technology. Whether that's managing digital transformation projects, leading a PMO, or driving operational excellence programs, I want to be the person organizations turn to when they need to make complex change happen. I see myself as a bridge-builder—connecting technical teams with business stakeholders.",
  developingSkills: [
    "Advanced data visualization and storytelling (Power BI/Tableau)",
    "Agile and hybrid project management methodologies",
    "Stakeholder management and executive communication",
    "Strategic thinking and business case development"
  ]
};

export const SKILLS: SkillCategory[] = [
  {
    category: "Technical Skills",
    skills: ["SQL", "Power BI", "Tableau", "Python", "Airtable", "Notion", "Slack", "Loom", "Google Workspace"]
  },
  {
    category: "Business & Operations",
    skills: ["Startup Operations", "Business Operations", "SOPs", "Task Management", "Market Research", "Financial Modeling", "Client Communication", "Deal Pipeline Management"]
  },
  {
    category: "Business Analysis",
    skills: ["KPI Development", "Performance Metrics", "Trend Analysis", "Pricing Strategy", "Sales Reporting"]
  },
  {
    category: "Soft Skills",
    skills: ["Team Leadership", "Effective Communication", "Strategic Planning", "Data Analysis", "Problem Solving"]
  }
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    name: "Google Business Intelligence Professional Certificate",
    issuer: "Coursera",
    date: "In Progress",
    link: "https://www.coursera.org/professional-certificates/google-business-intelligence"
  },
  {
    name: "Google Project Management Professional Certificate",
    issuer: "Coursera",
    date: "Expected Nov. 2025",
    link: "https://www.coursera.org/professional-certificates/google-project-management"
  },
  {
    name: "Supply Chain Foundations: Managing the Process",
    issuer: "LinkedIn Learning",
    date: "Expected May 2025",
    link: "https://www.linkedin.com/learning/supply-chain-foundations-managing-the-process"
  }
];

export const FEATURED_STATS = [
  { label: "Accuracy Achieved", value: "99.9%", icon: Database },
  { label: "Resolution Time Reduced", value: "20%", icon: TrendingUp },
  { label: "Rework Reduced", value: "15%", icon: BarChart },
];