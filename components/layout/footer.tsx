import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-border/50 py-10">
      <div className="container flex flex-col gap-4 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
        <p>
          {new Date().getFullYear()} {profile.name}. Built with Next.js, TailwindCSS, shadcn/ui, and
          Framer Motion.
        </p>
        <div className="flex items-center gap-4">
          {profile.socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target={social.href.startsWith("http") ? "_blank" : undefined}
              rel={social.href.startsWith("http") ? "noreferrer" : undefined}
              className="transition-colors hover:text-foreground"
              aria-label={social.label}
            >
              {social.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
