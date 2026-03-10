import type { Profile } from "@/types/portfolio";

export const profile: Profile = {
  name: "Lam Nguyen",
  title: "Software Engineer",
  intro: "I build full-stack products with real-time systems, modern web frameworks, and applied machine learning.",
  bio: "Computer Science graduate from the University of South Florida (GPA 3.99) and incoming M.S. student at the University of Dayton (GPA 4.0). I have shipped production features across Angular, ASP.NET Core, and Next.js stacks, and I enjoy turning product requirements into performant, scalable experiences.",
  location: "Dayton, Ohio / Tampa, Florida",
  email: "lamnguyendnvncn@gmail.com",
  phone: "+1 (813) 647-2741",
  resumePath: "/resume.pdf",
  socials: [
    {
      label: "Email",
      href: "mailto:lamnguyendnvncn@gmail.com",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/lamnguyen911",
    },
    {
      label: "GitHub",
      href: "https://github.com/lamnguyendnvncn",
    },
  ],
  education: [
    {
      school: "University of Dayton",
      degree: "Master of Science in Computer Science",
      location: "Dayton, OH",
      timeframe: "Current",
      details: ["GPA: 4.0/4.0"],
    },
    {
      school: "University of South Florida",
      degree: "Bachelor of Science in Computer Science",
      location: "Tampa, FL",
      timeframe: "Graduated May 2024",
      details: ["GPA: 3.99/4.0", "Dean's List: 2020-2024"],
    },
  ],
};
