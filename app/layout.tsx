import type { Metadata } from "next";
import { Space_Grotesk, Sora } from "next/font/google";

import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { PageTransition } from "@/components/layout/page-transition";
import { ThemeProvider } from "@/components/providers/theme-provider";

import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
});

const siteDescription =
  "Portfolio of Lam Nguyen, a software engineer building full-stack web products with modern frameworks, real-time systems, and applied AI.";

export const metadata: Metadata = {
  title: "Lam Nguyen | Software Engineer",
  description: siteDescription,
  icons: {
    icon: [
      { url: "/site-icon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/site-icon-64.png", sizes: "64x64", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/site-icon-32.png",
  },
  openGraph: {
    title: "Lam Nguyen | Software Engineer",
    description: siteDescription,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lam Nguyen | Software Engineer",
    description: siteDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${spaceGrotesk.variable} ${sora.variable} bg-background text-foreground antialiased`}>
        <ThemeProvider>
          <div className="relative min-h-screen overflow-x-clip">
            <Navbar />
            <PageTransition>
              <main>{children}</main>
            </PageTransition>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
