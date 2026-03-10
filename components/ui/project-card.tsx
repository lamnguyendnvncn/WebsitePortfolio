"use client";

import Image from "next/image";
import { ArrowUpRight, Github } from "lucide-react";
import { motion } from "framer-motion";

import type { Project } from "@/types/portfolio";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.article
      whileHover={{ y: -8, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className="h-full"
    >
      <Card className="group relative flex h-full flex-col overflow-hidden border-border/60 bg-gradient-to-b from-card via-card to-card/70">
        <div className="relative aspect-[16/10] overflow-hidden border-b border-border/60">
          <Image
            src={project.image}
            alt={project.imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition duration-500 group-hover:scale-105"
            priority={false}
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-background/30 via-transparent to-primary/10" />
        </div>

        <CardHeader className="space-y-3">
          <div className="flex items-center justify-between gap-3">
            <CardTitle className="text-xl">{project.title}</CardTitle>
            <Badge variant="outline" className="border-border/60 bg-background/60 text-[11px]">
              {project.timeframe}
            </Badge>
          </div>
          <CardDescription className="text-sm text-primary/90">{project.role}</CardDescription>
          <CardDescription className="text-sm leading-relaxed">{project.description}</CardDescription>
        </CardHeader>

        <CardContent className="flex flex-1 flex-col gap-5">
          <ul className="space-y-2 text-sm text-muted-foreground">
            {project.highlights.map((highlight) => (
              <li key={highlight} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary/80" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <Badge key={tech} variant="secondary" className="rounded-md bg-secondary/70">
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>

        <CardFooter className="gap-2">
          {project.githubUrl ? (
            <Button variant="outline" size="sm" asChild>
              <a href={project.githubUrl} target="_blank" rel="noreferrer">
                <Github className="h-3.5 w-3.5" />
                GitHub
              </a>
            </Button>
          ) : (
            <Button variant="outline" size="sm" disabled>
              <Github className="h-3.5 w-3.5" />
              Private Repo
            </Button>
          )}

          {project.liveUrl ? (
            <Button size="sm" asChild>
              <a href={project.liveUrl} target="_blank" rel="noreferrer">
                Live Demo
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </Button>
          ) : (
            <Button size="sm" variant="secondary" disabled>
              Internal Launch
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.article>
  );
}
