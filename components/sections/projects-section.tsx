"use client";

import { motion } from "framer-motion";

import { projects } from "@/data/projects";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { ProjectCard } from "@/components/ui/project-card";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export default function ProjectsSection() {
  return (
    <SectionWrapper
      id="projects"
      eyebrow="Projects"
      title="Selected work across product engineering and AI systems."
      description="A portfolio of shipped features and technical initiatives extracted from my resume and internship work."
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <motion.div key={project.id} variants={itemVariants}>
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
