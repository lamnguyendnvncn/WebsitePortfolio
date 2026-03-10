import type { Experience } from "@/types/portfolio";

export const experience: Experience[] = [
  {
    id: "datalink",
    role: "Software Engineer Intern",
    company: "DataLink Software, LLC",
    location: "Tampa, FL",
    timeframe: "May 2023 - May 2024",
    summary:
      "Delivered full-stack platform modernization across frontend, backend, and real-time communication layers.",
    achievements: [
      "Implemented SignalR messaging and inbox features, decreasing response time by 40%.",
      "Led migration from AngularJS to Angular 12 with RxJS, Ngx-Bootstrap, and Angular Material.",
      "Migrated APIs to ASP.NET Core Web API and EF Core for a 15% scalability and performance uplift.",
    ],
    stack: [
      "Angular",
      "SignalR",
      "ASP.NET Core",
      "Entity Framework Core",
      "MSSQL Server",
    ],
  },
  {
    id: "tenex",
    role: "Software Engineer Intern",
    company: "Tenex Software Solutions",
    location: "Tampa, FL",
    timeframe: "September 2022 - February 2023",
    summary:
      "Built internal web tools and automation workflows to improve voting operations and developer efficiency.",
    achievements: [
      "Designed and implemented a web app with ASP.NET, VB.NET, DevExpress, and HeidiSQL.",
      "Improved product UX responsiveness using Bootstrap, HTML/CSS, and JavaScript.",
      "Automated systems management with PowerShell and Azure DevOps to reduce manual labor by 50%.",
    ],
    stack: [
      "ASP.NET",
      "VB.NET",
      "DevExpress",
      "PowerShell",
      "Azure DevOps",
      "MySQL",
      "MariaDB",
    ],
  },
  {
    id: "paradox",
    role: "Machine Learning Intern (NLP)",
    company: "Paradox",
    location: "Da Nang, Vietnam",
    timeframe: "May 2022 - July 2022",
    summary:
      "Improved and deployed conversational AI capabilities for recruiting and internal productivity.",
    achievements: [
      "Optimized entity extraction and data quality, raising model quality from 40-50% to 70-90%.",
      "Deployed Rasa-based models with Minikube, Helm, and Docker on Rasa X.",
      "Integrated Olivia Bot with Slack workflows and improved context-aware response accuracy by 20%.",
    ],
    stack: ["Python", "Rasa", "Docker", "Kubernetes", "Helm", "Slack"],
  },
];
