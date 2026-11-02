import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tarun Reddy Babireddy — Full Stack Developer",
  description:
    "Portfolio of Tarun Reddy Babireddy, a Software Engineer and Full Stack Developer specializing in scalable web applications, SaaS platforms, REST APIs, and enterprise document automation.",
  keywords: ["Tarun Reddy Babireddy", "Full Stack Developer", "Software Engineer", "React", "Next.js", "Node.js"],
  icons: { icon: "/icons/favicon.svg" }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
