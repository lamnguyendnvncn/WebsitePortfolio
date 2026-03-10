"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";

import { experience } from "@/data/experience";
import { profile } from "@/data/profile";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function ResumeSection() {
  return (
    <SectionWrapper
      id="resume"
      eyebrow="Resume"
      title="Experience timeline"
      description="Roles focused on full-stack development, real-time systems, and machine learning deployment."
    >
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <p className="max-w-2xl text-sm text-muted-foreground">
          I focus on measurable outcomes: faster systems, better user experience, and maintainable engineering
          foundations.
        </p>
        <Button asChild>
          <a href={profile.resumePath} download>
            <Download className="h-4 w-4" />
            Download Resume
          </a>
        </Button>
      </div>

      <div className="relative ml-2 space-y-6 border-l border-border/60 pl-6">
        {experience.map((item, index) => (
          <motion.article
            key={item.id}
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            className="relative"
          >
            <span className="absolute -left-[31px] top-7 h-3 w-3 rounded-full border border-background bg-primary shadow-glow" />
            <Card>
              <CardHeader className="gap-3">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <CardTitle>{item.role}</CardTitle>
                    <CardDescription className="mt-1">
                      {item.company} - {item.location}
                    </CardDescription>
                  </div>
                  <Badge variant="outline">{item.timeframe}</Badge>
                </div>
                <CardDescription>{item.summary}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {item.achievements.map((achievement) => (
                    <li key={achievement} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary/80" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {item.stack.map((tech) => (
                    <Badge key={tech} variant="secondary" className="rounded-md bg-secondary/80">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.article>
        ))}
      </div>
    </SectionWrapper>
  );
}
