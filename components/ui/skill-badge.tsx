"use client";

import { motion } from "framer-motion";

import { Badge } from "@/components/ui/badge";

type SkillBadgeProps = {
  label: string;
};

export function SkillBadge({ label }: SkillBadgeProps) {
  return (
    <motion.div whileHover={{ y: -3, scale: 1.02 }} transition={{ duration: 0.22 }}>
      <Badge variant="outline" className="border-primary/20 bg-background/70 px-3 py-1.5 text-xs">
        {label}
      </Badge>
    </motion.div>
  );
}
