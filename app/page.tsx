import dynamic from "next/dynamic";

import AboutSection from "@/components/sections/about-section";
import HeroSection from "@/components/sections/hero-section";

const ProjectsSection = dynamic(() => import("@/components/sections/projects-section"));
const ResumeSection = dynamic(() => import("@/components/sections/resume-section"));
const ContactSection = dynamic(() => import("@/components/sections/contact-section"));

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <div className="container">
        <AboutSection />
        <ProjectsSection />
        <ResumeSection />
        <ContactSection />
      </div>
    </>
  );
}
