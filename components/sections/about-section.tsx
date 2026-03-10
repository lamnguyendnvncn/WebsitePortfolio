"use client";

import { motion, useInView } from "framer-motion";
import { BookOpenText, Code2, GraduationCap } from "lucide-react";
import { useRef } from "react";

import { profile } from "@/data/profile";
import { skills } from "@/data/skills";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SkillBadge } from "@/components/ui/skill-badge";

export default function AboutSection() {
  const listRef = useRef<HTMLDivElement>(null);
  const inView = useInView(listRef, { once: true, amount: 0.2 });

  return (
    <SectionWrapper
      id="about"
      eyebrow="About"
      title="Engineer focused on reliable systems and practical impact."
      description={profile.bio}
    >
      <div className="grid gap-6 lg:grid-cols-12">
        <Card className="lg:col-span-5">
          <CardHeader className="space-y-2">
            <CardDescription className="inline-flex items-center gap-2 text-primary">
              <BookOpenText className="h-4 w-4" />
              Profile
            </CardDescription>
            <CardTitle className="text-2xl">Background</CardTitle>
          </CardHeader>
          <CardContent className="space-y-5 text-sm leading-relaxed text-muted-foreground">
            <p>{profile.bio}</p>
            <div className="space-y-3">
              {profile.education.map((item) => (
                <article key={item.school} className="rounded-lg border border-border/60 bg-background/40 p-4">
                  <p className="text-xs uppercase tracking-[0.16em] text-primary/90">{item.timeframe}</p>
                  <h3 className="mt-2 text-base font-medium text-foreground">{item.school}</h3>
                  <p>{item.degree}</p>
                  <p>{item.location}</p>
                  <ul className="mt-2 space-y-1">
                    {item.details.map((detail) => (
                      <li key={detail} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary/70" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </CardContent>
        </Card>

        <div ref={listRef} className="grid gap-6 lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.45 }}
          >
            <Card>
              <CardHeader>
                <CardDescription className="inline-flex items-center gap-2 text-primary">
                  <Code2 className="h-4 w-4" />
                  Skills
                </CardDescription>
                <CardTitle className="text-2xl">Core Technologies</CardTitle>
              </CardHeader>
              <CardContent className="space-y-5">
                {skills.map((group, index) => (
                  <motion.div
                    key={group.category}
                    initial={{ opacity: 0, y: 16 }}
                    animate={inView ? { opacity: 1, y: 0 } : undefined}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    className="space-y-3"
                  >
                    <h3 className="text-sm font-medium tracking-wide text-foreground">{group.category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <SkillBadge key={item} label={item} />
                      ))}
                    </div>
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.45, delay: 0.18 }}
          >
            <Card className="relative overflow-hidden">
              <div className="pointer-events-none absolute -right-8 -top-8 h-36 w-36 rounded-full bg-primary/10 blur-2xl" />
              <CardHeader>
                <CardDescription className="inline-flex items-center gap-2 text-primary">
                  <GraduationCap className="h-4 w-4" />
                  Focus
                </CardDescription>
                <CardTitle className="text-xl">What I enjoy building</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                <p>
                  Full-stack systems where architecture decisions directly improve user speed, product quality,
                  and operational efficiency. I prefer clean APIs, measurable outcomes, and fast iteration with
                  strong engineering standards.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
