"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionWrapperProps = {
  id: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  className?: string;
  children: ReactNode;
};

export function SectionWrapper({
  id,
  eyebrow,
  title,
  description,
  className,
  children,
}: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      className={cn("relative scroll-mt-24 py-16 md:py-24", className)}
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      aria-labelledby={title ? `${id}-title` : undefined}
    >
      {(eyebrow || title || description) && (
        <div className="mb-10 max-w-3xl space-y-4">
          {eyebrow && (
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary/90">
              {eyebrow}
            </p>
          )}
          {title && (
            <h2
              id={`${id}-title`}
              className="text-balance text-3xl font-semibold tracking-tight md:text-4xl"
            >
              {title}
            </h2>
          )}
          {description && (
            <p className="text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
              {description}
            </p>
          )}
        </div>
      )}
      {children}
    </motion.section>
  );
}
