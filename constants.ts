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
    title: "Benefit-Cost Modeling Under Uncertainty",
    course: "ALY 6050 - Analytics Methods",
    description: [
      "Built a Monte Carlo-based financial model to evaluate project feasibility under uncertainty rather than relying on single-point estimates.",
      "Simulated thousands of scenarios to estimate ranges for cost, return, and risk, then translated the outputs into decision-ready insights."
    ],
    tools: ["Excel", "Monte Carlo Simulation", "Risk Analysis", "Financial Modeling"],
    category: 'academic',
    reflection: "This project changed how I frame business decisions. Instead of presenting one forecast, I learned to show a range of outcomes and the probability of each. That shift made my analysis more honest and more useful. It also strengthened my ability to communicate risk in a way that supports action, which is a core skill for project and operations leadership."
  },
  {
    title: "International Student Housing Experience Redesign",
    course: "PJM 6620 - Design Thinking for Projects",
    description: [
      "Applied a full design-thinking process to improve the housing journey for international students, from problem discovery to prototype design.",
      "Conducted empathy interviews, synthesized user pain points, and developed solution concepts focused on trust, clarity, and community connection."
    ],
    tools: ["Design Thinking", "Empathy Mapping", "Prototyping", "Interviewing"],
    category: 'academic',
    reflection: "The most important lesson was that user problems were as emotional as they were operational. Our strongest ideas came after we stopped assuming and started listening deeply. This project improved my ability to facilitate collaborative ideation, balance divergent thinking with practical constraints, and design solutions people can actually adopt."
  },
  {
    title: "Organizational Change Leadership Simulation",
    course: "Organizational Behavior - Change Management",
    description: [
      "Led a simulated enterprise change initiative, making phased decisions on stakeholder alignment, sequencing, and communication strategy.",
      "Diagnosed resistance patterns across organizational levels and adjusted influence tactics to improve adoption and implementation outcomes."
    ],
    tools: ["Stakeholder Analysis", "Change Management", "Strategic Communication"],
    category: 'academic',
    reflection: "This simulation taught me that change succeeds through timing and trust, not just communication volume. Different stakeholders required different messages, pacing, and engagement styles. I learned to manage resistance as a signal, not a barrier, and to lead change with patience, sequencing, and credibility."
  },
  {
    title: "HuskyConnect: Innovation Prototype for International Student Success",
    course: "PJM 6185 - Managing Innovation Projects",
    description: [
      "Designed a multi-functional student management prototype called HuskyConnect to support international graduate students through career development, budget planning, and event-based cultural integration.",
      "Validated and refined the solution through iterative testing, translating user-profile and value-proposition insights into concrete UI/UX decisions such as streamlined navigation, a centralized hub, and improved accessibility."
    ],
    tools: ["Innovation Strategy", "Value Proposition Design", "Business Model Design", "Prototyping"],
    category: 'academic',
    reflection: "This project taught me how to turn research into product decisions with discipline. We started with broad assumptions, but user feedback and data helped us prioritize what actually mattered: one place for jobs, events, and budgeting with intuitive navigation. I learned that innovation is less about adding features and more about resolving real pain points through iteration. Working on HuskyConnect strengthened my confidence in combining empathy, analytics, and design thinking to build solutions that are practical, inclusive, and user-centered.",
    pdfAssets: [
      { label: "Value Proposition and User", path: "/Value Proposition and the User (1).pdf" },
      { label: "Business Model", path: "/Business Model (1).pdf" },
      { label: "Innovation Prototype", path: "/Innovation Prototype.pdf" }
    ]
  },
  {
    title: "Behavior Change Strategy with BPM Implementation Framework",
    course: "PJM 6620 - Needs Assessments and Strategy Analysis",
    description: [
      "Developed a 3-action behavior-change package for international student housing: a plain-language lease review tool, a financial readiness assessment, and a neighborhood safety and amenities report.",
      "Paired the package with a Business Process Management implementation view using an Identify-Design-Execute-Monitor lifecycle, including process mapping, root-cause analysis, stakeholder alignment, and continuous KPI-based monitoring."
    ],
    tools: ["Journey Mapping", "Behavioral Design (CREATE)", "Business Process Management", "Process Mapping", "Root Cause Analysis", "Lean Six Sigma"],
    category: 'academic',
    reflection: "This project helped me connect strategy with execution. I learned to move from behavioral diagnosis to process-level implementation by defining interventions and then structuring how they would be designed, deployed, and monitored. The BPM lens made my recommendations more actionable and scalable, and it strengthened my ability to communicate process improvements clearly to both technical and non-technical stakeholders.",
    pdfAssets: [
      { label: "Behavior Change Package", path: "/Design for Behavior Change Package.pdf" },
      { label: "Business Process Management Deck", path: "/Business-Process-Management.pptx" }
    ]
  },
  {
    title: "TravelNow Prototype and Strategic Recommendation",
    course: "Group Signature Assignment",
    description: [
      "Developed and presented a working prototype for TravelNow covering core user flows: search, booking, payment processing, confirmations, and booking modifications.",
      "Documented functional and non-functional requirements, stakeholder alignment, and next-step recommendations including usability testing, multilingual support, and AI-enabled personalization."
    ],
    tools: ["Power Apps", "Requirements Analysis", "Stakeholder Mapping", "Process Design", "Prototype Testing"],
    category: 'academic',
    reflection: "This assignment helped me connect business analysis artifacts to a tangible product experience. I learned how to move from scope and requirements to a practical prototype while keeping stakeholder priorities visible at every stage. Presenting recommendations for scalability and user adoption strengthened my confidence in structuring consulting-style narratives that are both strategic and implementation-ready.",
    pdfAssets: [
      { label: "Signature Assignment Deck", path: "/Group2_Signature Assignment.pptx" }
    ]
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
    name: "Microsoft Power BI Data Analyst Associate (PL-300) Cert Prep",
    issuer: "Microsoft Press / LinkedIn Learning",
    completedAt: "November 6, 2025",
    link: "https://www.linkedin.com/learning/certificates/522a8ebfa63fdcc0beba25527a8d968a78ddbcc109e6616b7c14cd9277c5d70d?trk=share_certificate&accountId=0&u=0&success=true&authUUID=oMHLKXjUSFSI3chM4rYfrQ%3D%3D",
  },
  {
    name: "Google Business Intelligence Professional Certificate",
    issuer: "Coursera (In Progress)",
    completedAt: "2025-12-01",
    link: "https://www.coursera.org/professional-certificates/google-business-intelligence",
    status: "in-progress",
  },
  {
    name: "Google Project Management Professional Certificate",
    issuer: "Coursera",
    completedAt: "2025-11-01",
    link: "https://www.coursera.org/professional-certificates/google-project-management",
  }
];

export const FEATURED_STATS = [
  { label: "Accuracy Achieved", value: "99.9%", icon: Database },
  { label: "Resolution Time Reduced", value: "20%", icon: TrendingUp },
  { label: "Rework Reduced", value: "15%", icon: BarChart },
];