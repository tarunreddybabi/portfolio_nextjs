export const profile = {
  name: "Tarun Reddy Babireddy",
  title: "Software Engineer | Full Stack Developer",
  email: "tarunreddybabireddy@gmail.com",
  phone: "+91 7386378990",
  location: "Hyderabad, India",
  summary:
    "Full-Stack Developer with 2+ years of experience designing and developing scalable web applications, REST APIs, multi-tenant SaaS platforms, configurable workflow systems, and enterprise document automation solutions. Proficient in Node.js, Express.js, React.js, PostgreSQL, Redis, JWT, and OAuth 2.0, with hands-on experience building secure, high-performance backend services and responsive frontend applications.",
  social: {
    linkedin: "",
    github: ""
  }
} as const;

export const experiences = [
  {
    company: "Enterpi Software Solutions Pvt. Ltd.",
    role: "Software Engineer – Full stack",
    period: "Nov 2024 – Present",
    location: "Hyderabad",
    project: "Expodite – Multi-Tenant Export Management Platform",
    description:
      "Cloud-based SaaS platform that streamlines export operations through shipment management, document automation, configurable workflows, and dashboards, using a multi-tenant architecture with isolated databases for different organizations.",
    bullets: [
      "Developed end-to-end full-stack features using React.js, Node.js, Express.js, and PostgreSQL.",
      "Designed and developed scalable REST APIs for shipment management, workflows, dashboards, and document automation.",
      "Built reusable React.js components, forms, dashboards, and API integrations for dynamic business workflows.",
      "Developed Dynamic Document Builder and Dynamic Form Builder, allowing users to configure documents and forms without code changes.",
      "Implemented JWT and OAuth 2.0 authentication and authorization for secure access control.",
      "Worked on multi-tenant architecture with isolated databases and a shared application codebase.",
      "Developed shipment tracking, dashboard, and business workflow features across frontend and backend.",
      "Integrated frontend and backend services to deliver end-to-end business workflows and seamless data flow.",
      "Implemented Excel export, email template generation, and document download functionality.",
      "Improved application performance using Redis caching and PostgreSQL query optimization.",
      "Used ChatGPT and Claude for debugging, code refactoring, test generation, and performance optimization.",
      "Collaborated with team members to analyze requirements, troubleshoot issues, and deliver production-ready features."
    ],
    stack: ["React.js", "JavaScript", "Node.js", "Express.js", "PostgreSQL", "Redis", "REST APIs", "JWT", "OAuth 2.0", "Git"]
  },
  {
    company: "SmartGig Technologies Pvt. Ltd.",
    role: "Software Engineer – Frontend",
    period: "Mar 2024 – Sep 2024",
    location: "Hyderabad",
    project: "Tellida – Project Management & Estimation Platform",
    description:
      "Web-based project management and estimation platform for project planning, RFP management, resource allocation, proposal generation, and subscription management.",
    bullets: [
      "Developed reusable UI components using Next.js, React.js, and Redux.",
      "Built GraphQL-based modules for project planning and estimation workflows.",
      "Implemented authentication, role-based access control, and user onboarding.",
      "Integrated Razorpay payment gateway for subscription management.",
      "Developed AI-powered proposal generation using ChatGPT-4.",
      "Collaborated with backend developers to integrate GraphQL APIs and deliver responsive user experiences."
    ],
    contributions: [
      "Dynamic Project Dashboards",
      "Project Estimation Workflows",
      "User & Client Onboarding",
      "Role-Based Access Control",
      "Razorpay Payment Integration",
      "AI-Powered Proposal Generation"
    ],
    stack: ["Next.js", "React.js", "Redux", "Tailwind CSS", "Shadcn UI"]
  }
] as const;

export const skillGroups = [
  { title: "Languages", items: ["JavaScript (ES6+)", "HTML5", "CSS3"] },
  { title: "Backend", items: ["Node.js", "Express.js", "REST APIs", "JWT", "OAuth 2.0"] },
  { title: "Database & Caching", items: ["PostgreSQL", "Redis"] },
  { title: "Frontend", items: ["React.js", "Next.js", "Redux", "Tailwind CSS", "Shadcn UI"] },
  { title: "Tools", items: ["Git", "Postman"] }
] as const;

export const projects = [
  {
    name: "Expodite",
    label: "Multi-Tenant Export Management Platform",
    accent: "violet",

    description:
      "A cloud-based SaaS platform for managing export operations, shipments, and business workflows. Built with a multi-tenant architecture, REST APIs, dashboards, and secure authentication.",

    overview:
      "Expodite is a multi-tenant enterprise SaaS platform built to manage export operations. The platform provides shipment management, configurable business workflows, document automation, dashboards, and organization-specific data isolation.",

    responsibilities: [
      "Developed end-to-end full-stack features using React.js, Node.js, Express.js, and PostgreSQL.",
      "Designed and developed scalable REST APIs for shipment management, workflows, dashboards, and document automation.",
      "Built reusable React.js components, forms, dashboards, and API integrations.",
      "Developed Dynamic Document Builder and Dynamic Form Builder for configurable business workflows.",
      "Implemented JWT and OAuth 2.0 authentication and authorization.",
      "Worked on multi-tenant architecture with isolated databases and a shared application codebase.",
      "Developed shipment tracking, dashboard, and business workflow features.",
      "Implemented Excel export, email template generation, and document download functionality.",
      "Improved performance using Redis caching and PostgreSQL query optimization.",
    ],

    features: [
      "Multi-tenant architecture",
      "Shipment management",
      "Dynamic Document Builder",
      "Dynamic Form Builder",
      "Business workflow automation",
      "Document automation",
      "Dashboard & shipment tracking",
      "Excel export",
      "Email template generation",
      "Document downloads",
      "JWT authentication",
      "OAuth 2.0 authorization",
    ],

    tech: [
      "React.js",
      "JavaScript",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Redis",
      "REST APIs",
      "JWT",
      "OAuth 2.0",
    ],
  },

  {
    name: "Tellida",
    label: "Project Management & Estimation Platform",
    accent: "cyan",

    description:
      "A web-based project management and estimation platform designed to streamline project planning, RFP management, resource allocation, proposal generation, and subscription management.",

    overview:
      "Tellida is a project management and estimation platform focused on simplifying project planning, estimation workflows, RFP management, resource allocation, proposal generation, and subscription management through a scalable and intuitive interface.",

    responsibilities: [
      "Developed reusable UI components using Next.js, React.js, and Redux.",
      "Built GraphQL-based modules for project planning and estimation workflows.",
      "Implemented authentication, role-based access control, and user onboarding.",
      "Integrated Razorpay payment gateway for subscription management.",
      "Developed AI-powered proposal generation using ChatGPT-4.",
      "Collaborated with backend developers to integrate GraphQL APIs.",
      "Delivered responsive user experiences across project management workflows.",
    ],

    features: [
      "Dynamic project dashboards",
      "Project estimation workflows",
      "RFP management",
      "Resource allocation",
      "User & client onboarding",
      "Role-based access control",
      "Razorpay subscription payments",
      "AI-powered proposal generation",
    ],

    tech: [
      "Next.js",
      "React.js",
      "Redux",
      "Tailwind CSS",
      "Shadcn UI",
      "GraphQL",
      "Razorpay",
      "ChatGPT-4",
    ],
  },
] as const;

export const education = {
  degree: "Bachelor of Technology in Electronics and Communication",
  institute: "Swami Vivekananda Institute of Technology, Secunderabad",
  period: "2019 – 2023",
  score: "CGPA: 6.67/10"
} as const;
