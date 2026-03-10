"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { FormEvent, useState } from "react";

import { profile } from "@/data/profile";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const iconMap = {
  Email: Mail,
  LinkedIn: Linkedin,
  GitHub: Github,
} as const;

export default function ContactSection() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "");
    const email = String(formData.get("email") ?? "");
    const message = String(formData.get("message") ?? "");

    const subject = encodeURIComponent(`Portfolio Contact from ${name || "Website Visitor"}`);
    const body = encodeURIComponent(`From: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
    event.currentTarget.reset();
  }

  return (
    <SectionWrapper
      id="contact"
      eyebrow="Contact"
      title="Let us build something meaningful."
      description="Open to software engineering opportunities, technical collaborations, and product-focused freelance work."
    >
      <div className="grid gap-6 lg:grid-cols-12">
        <Card className="lg:col-span-5">
          <CardHeader>
            <CardTitle>Reach me directly</CardTitle>
            <CardDescription>
              Fastest path is email. LinkedIn and GitHub are also available below.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {profile.socials.map((social) => {
              const Icon = iconMap[social.label as keyof typeof iconMap] ?? Mail;
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noreferrer" : undefined}
                  whileHover={{ x: 4 }}
                  className="flex items-center justify-between rounded-lg border border-border/60 bg-background/60 px-4 py-3 text-sm transition hover:border-primary/50 hover:bg-secondary/60"
                >
                  <span className="inline-flex items-center gap-2">
                    <Icon className="h-4 w-4 text-primary" />
                    {social.label}
                  </span>
                  <span className="text-muted-foreground">Open</span>
                </motion.a>
              );
            })}
          </CardContent>
        </Card>

        <Card className="lg:col-span-7">
          <CardHeader>
            <CardTitle>Send a message</CardTitle>
            <CardDescription>
              This form opens your default mail app with prefilled details.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input id="name" name="name" placeholder="Your name" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input id="email" name="email" type="email" placeholder="you@example.com" required />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea id="message" name="message" placeholder="Share a quick brief..." required />
              </div>
              <div className="flex items-center gap-3">
                <Button type="submit">
                  <Send className="h-4 w-4" />
                  Send Message
                </Button>
                {sent && (
                  <p className="text-sm text-emerald-400" role="status">
                    Mail draft opened.
                  </p>
                )}
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </SectionWrapper>
  );
}
