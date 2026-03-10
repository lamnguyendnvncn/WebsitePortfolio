import type { Project } from "@/types/portfolio";

export const projects: Project[] = [
  {
    id: "itineready",
    title: "Itineready",
    timeframe: "May 2024 - Present",
    role: "Tech Lead Developer",
    description:
      "Personalized travel recommendation platform for first-time travelers, combining AI ranking with a modern web experience.",
    highlights: [
      "Designed and developed backend APIs in FastAPI to orchestrate recommendation workflows.",
      "Fine-tuned Llama3-8B with UnSloth to tailor recommendations to user intent.",
      "Converted Figma design specs into production Next.js interfaces.",
    ],
    stack: [
      "Next.js",
      "React",
      "FastAPI",
      "Prisma",
      "PostgreSQL",
      "Groq API",
      "OAuth2",
    ],
    githubUrl: "",
    liveUrl: "",
    image: "/projects/itineready.svg",
    imageAlt: "Itineready travel recommendation product preview",
  },
  {
    id: "evokeehr-modernization",
    title: "EvokeEHR Modernization",
    timeframe: "May 2023 - May 2024",
    role: "Software Engineer Intern",
    description:
      "Migration and real-time platform uplift for a healthcare product used by enterprise customers.",
    highlights: [
      "Led migration from AngularJS to Angular 12 using RxJS and component libraries.",
      "Implemented SignalR real-time inbox and messaging, reducing user response latency by 40%.",
      "Modernized APIs with ASP.NET Core and Entity Framework Core, improving scalability by 15%.",
    ],
    stack: [
      "Angular",
      "SignalR",
      "ASP.NET Core",
      "Entity Framework Core",
      "MSSQL",
    ],
    githubUrl: "",
    liveUrl: "",
    image: "/projects/evokeehr.svg",
    imageAlt: "EvokeEHR modernization project concept",
  },
  {
    id: "olivia-bot",
    title: "Olivia Bot NLP Platform",
    timeframe: "May 2022 - July 2022",
    role: "Machine Learning Intern",
    description:
      "NLP assistant for HR and job-search workflows with improved intent and entity accuracy.",
    highlights: [
      "Prepared and balanced a 200k+ dialogue dataset and improved key quality metrics from 40-50% to 70-90%.",
      "Deployed Rasa services with Docker, Minikube, and Helm on Rasa X infrastructure.",
      "Integrated bot with Slack to improve operational coordination and daily team updates.",
    ],
    stack: [
      "Python",
      "Rasa",
      "Pandas",
      "NumPy",
      "Docker",
      "Kubernetes",
      "Helm",
      "Slack API",
    ],
    githubUrl: "",
    liveUrl: "",
    image: "/projects/olivia.svg",
    imageAlt: "Olivia Bot NLP project concept",
  },
];
