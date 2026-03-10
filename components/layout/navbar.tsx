"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, useScroll, useSpring } from "framer-motion";
import { useState } from "react";

import { ThemeToggle } from "@/components/layout/theme-toggle";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 130,
    damping: 30,
    mass: 0.2,
  });

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="relative border-b border-border/40 bg-background/75 backdrop-blur-lg">
        <div className="container flex h-16 items-center justify-between">
          <Link href="#home" className="group inline-flex flex-col" aria-label="Go to hero section">
            <span className="text-base font-semibold tracking-tight">{profile.name}</span>
            <span className="text-xs text-muted-foreground transition-colors group-hover:text-primary">
              {profile.title}
            </span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex" aria-label="Primary navigation">
            {navItems.map((item) => (
              <Button key={item.href} variant="ghost" size="sm" asChild>
                <a href={item.href}>{item.label}</a>
              </Button>
            ))}
            <ThemeToggle className="ml-1" />
            <Button size="sm" asChild>
              <a href={profile.resumePath} download>
                Resume
              </a>
            </Button>
          </nav>

          <div className="flex items-center gap-1 md:hidden">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        <motion.div
          className="absolute bottom-0 left-0 h-px w-full origin-left bg-gradient-to-r from-primary via-cyan-400 to-emerald-400"
          style={{ scaleX }}
        />
      </div>

      <div
        id="mobile-nav"
        className={cn(
          "border-b border-border/50 bg-background/95 transition-[max-height,opacity] duration-300 md:hidden",
          open ? "max-h-64 opacity-100" : "max-h-0 overflow-hidden opacity-0",
        )}
      >
        <nav className="container flex flex-col py-4" aria-label="Mobile navigation">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm text-muted-foreground transition hover:bg-secondary/80 hover:text-foreground"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href={profile.resumePath}
            download
            className="mt-2 rounded-md bg-primary px-3 py-2 text-center text-sm font-medium text-primary-foreground"
            onClick={() => setOpen(false)}
          >
            Download Resume
          </a>
        </nav>
      </div>
    </header>
  );
}
