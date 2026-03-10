"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Download, Mail, Sparkles } from "lucide-react";

import { profile } from "@/data/profile";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const { scrollY } = useScroll();
  const yGlow = useTransform(scrollY, [0, 600], [0, 120]);
  const scaleGlow = useTransform(scrollY, [0, 600], [1, 1.3]);
  const opacityGrid = useTransform(scrollY, [0, 300], [0.22, 0.05]);

  return (
    <section id="home" className="relative overflow-hidden pb-20 pt-28 md:pb-28 md:pt-36">
      <motion.div
        aria-hidden
        style={{ y: yGlow, scale: scaleGlow }}
        className="pointer-events-none absolute left-1/2 top-8 h-[460px] w-[460px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,_hsl(var(--primary)/0.28)_0%,_transparent_67%)] blur-3xl"
      />
      <motion.div
        aria-hidden
        style={{ opacity: opacityGrid }}
        className="pointer-events-none absolute inset-0 -z-10 bg-grid-soft bg-[size:52px_52px]"
      />

      <div className="container relative">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              <Sparkles className="h-3 w-3" />
              Available for software engineering roles
            </div>

            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.22em] text-muted-foreground">{profile.location}</p>
              <h1 className="text-balance text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
                <motion.span
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15, duration: 0.65 }}
                  className="block"
                >
                  {profile.name}
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.65 }}
                  className="mt-1 block bg-gradient-to-r from-cyan-300 via-primary to-emerald-300 bg-clip-text text-transparent"
                >
                  {profile.title}
                </motion.span>
              </h1>
              <p className="max-w-3xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
                {profile.intro}
              </p>
            </div>

            <motion.div
              className="flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.5 }}
            >
              <Button size="lg" asChild>
                <a href="#projects">View Projects</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href={profile.resumePath} download>
                  <Download className="h-4 w-4" />
                  Download Resume
                </a>
              </Button>
              <Button size="lg" variant="ghost" asChild>
                <a href="#contact">
                  <Mail className="h-4 w-4" />
                  Contact Me
                </a>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 26, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.25, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -6, scale: 1.01 }}
            className="relative mx-auto mt-2 w-full max-w-[270px] sm:max-w-[350px] lg:mt-0 lg:max-w-[430px]"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 rounded-[2.1rem] bg-[radial-gradient(circle_at_center,_hsl(var(--primary)/0.26)_0%,_transparent_70%)] blur-2xl"
            />
            <div className="relative overflow-hidden rounded-[2rem] border border-border/60 bg-card/50 shadow-[0_24px_80px_hsl(var(--primary)/0.18)]">
              <Image
                src={profile.avatarPath}
                alt={`${profile.name} portrait illustration`}
                width={560}
                height={560}
                priority
                sizes="(max-width: 640px) 270px, (max-width: 1024px) 350px, 430px"
                className="h-auto w-full object-cover"
              />
            </div>
          </motion.div>
        </div>

        <motion.a
          href="#about"
          aria-label="Scroll to about section"
          className="mt-14 inline-flex items-center gap-2 rounded-full border border-border/70 px-3 py-2 text-sm text-muted-foreground transition hover:text-foreground md:mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          whileHover={{ y: -2 }}
        >
          Scroll to explore
          <motion.span
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          >
            <ArrowDown className="h-4 w-4" />
          </motion.span>
        </motion.a>
      </div>
    </section>
  );
}
