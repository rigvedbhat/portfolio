"use client";

import { FormEvent, useEffect, useState } from "react";
import {
  Briefcase,
  ExternalLink,
  Github,
  Home,
  Linkedin,
  Mail,
  Send,
  User,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AnimatedDock } from "@/components/ui/animated-dock";
import { SparklesCore } from "@/components/ui/sparkles";
import { GlowCard } from "@/components/ui/spotlight-card";
import { TextRevealByWord } from "@/components/ui/text-reveal";
import { NavBar } from "@/components/ui/tubelight-navbar";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", url: "#home", icon: Home },
  { name: "About", url: "#about", icon: User },
  { name: "Projects", url: "#projects", icon: Briefcase },
  { name: "Contact", url: "#contact", icon: Mail },
];

const skillsRowOne = [
  "Python",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Flask",
  "discord.py",
  "Tailwind CSS",
  "Google Gemini API",
  "SQLite",
  "aiosqlite",
  "Git",
];

const skillsRowTwo = [
  "LightGBM",
  "Sentence Transformers",
  "DBSCAN",
  "RAG",
  "NLP",
  "Machine Learning",
  "Streamlit",
  "Jupyter",
  "Prompt Engineering",
  "Data Science",
  "Reinforcement Learning",
  "REST APIs",
];

type GlowColor = "blue" | "purple" | "green" | "red" | "orange";

type Project = {
  title: string;
  image: string;
  tags: string[];
  description: string;
  github: string;
  featured: boolean;
  badge?: string;
  glowColor: GlowColor;
};

const projects: Project[] = [
  {
    title: "Crux AI - AI-Powered Discord Bot",
    image: "/Crux AI logo.png",
    tags: ["Python", "discord.py", "Gemini API", "React", "Flask", "SQLite"],
    description:
      "I built Crux AI because managing a Discord server shouldn't require an IT team. One command - /buildserver - generates a fully structured server from a natural language description. It handles moderation, XP leveling, event scheduling, and AI chat. I also built a React dashboard for real-time config.",
    github: "https://github.com/rigvedbhat/Cruxy---ModVerse",
    badge: "FOUNDER \u00b7 ACTIVE",
    featured: true,
    glowColor: "purple",
  },
  {
    title: "AI Resume Analyzer",
    image:
      "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&h=500&fit=crop&auto=format&q=80",
    tags: ["Python", "Streamlit", "LLaMA 3.2", "Ollama", "OCR"],
    description:
      "A local-first resume review tool. Upload a PDF or image, and LLaMA 3.2 running through Ollama analyzes it with structured HR-style feedback - strengths, weaknesses, and role-specific suggestions.",
    github: "https://github.com/rigvedbhat/ai-resume-analyzer",
    featured: false,
    glowColor: "blue",
  },
  {
    title: "sakAIme - Tourism Flow Redistribution",
    image: "/sakaime-logo.png",
    tags: ["LightGBM", "DBSCAN", "RL/MDP", "Python", "Jupyter"],
    description:
      "I am building this ML research system to model how visitor flow can be redistributed across destinations using congestion scoring, behavioural acceptance modelling, and Shannon entropy as a redistribution metric.",
    github: "https://github.com/rigvedbhat/tourism-ai-dss",
    featured: false,
    glowColor: "green",
  },

];

const stats = [
  { value: "3+", label: "Open Source Projects", glowColor: "purple" as GlowColor },
  { value: "1", label: "AI Startup Founded", glowColor: "blue" as GlowColor },
  { value: "4+", label: "AI Domains Worked In", glowColor: "green" as GlowColor },
];

const dockItems = [
  {
    link: "https://github.com/rigvedbhat",
    target: "_blank",
    Icon: <Github size={20} className="text-white" />,
  },
  {
    link: "https://www.linkedin.com/in/rigved-bhat-b4b46332a",
    target: "_blank",
    Icon: <Linkedin size={20} className="text-white" />,
  },
  {
    link: "mailto:rigvedmb2@gmail.com",
    Icon: <Mail size={20} className="text-white" />,
  },
  {
    link: "https://github.com/rigvedbhat/Cruxy---ModVerse",
    target: "_blank",
    Icon: <ExternalLink size={20} className="text-white" />,
  },
];

const contactLinks = [
  {
    label: "Email",
    value: "rigvedmb2@gmail.com",
    href: "mailto:rigvedmb2@gmail.com",
    icon: Mail,
  },
  {
    label: "GitHub",
    value: "github.com/rigvedbhat",
    href: "https://github.com/rigvedbhat",
    icon: Github,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/rigved-bhat-b4b46332a",
    href: "https://www.linkedin.com/in/rigved-bhat-b4b46332a",
    icon: Linkedin,
  },
] as const;

function ProjectCard({ project }: { project: Project }) {
  const isExternal = project.github.startsWith("http");

  return (
    <div className={cn(project.featured && "lg:col-span-2")}>
      <GlowCard
        customSize
        glowColor={project.glowColor}
        className={cn(
          "h-full w-full rounded-[30px] border-white/0 bg-white/[0.02] p-0",
          project.featured ? "min-h-[420px]" : "min-h-[520px]"
        )}
      >
        <article
          className={cn(
            "flex h-full flex-col gap-6 rounded-[26px] bg-black/20 p-4 sm:p-5",
            project.featured && "lg:flex-row lg:items-stretch"
          )}
        >
          <div
            className={cn(
              "overflow-hidden rounded-[22px] border border-white/10 bg-black/40",
              project.featured ? "lg:w-[56%]" : ""
            )}
          >
            {(() => {
              const isLogo = project.image.startsWith("/");
              return (
                <img
                  src={project.image}
                  alt={project.title}
                  className={cn(
                    "w-full",
                    isLogo
                      ? "object-contain p-10 sm:p-14"
                      : "object-cover",
                    project.featured ? "h-72 lg:h-full" : "h-56"
                  )}
                  loading="lazy"
                  decoding="async"
                />
              );
            })()}
          </div>

          <div className={cn("flex flex-1 flex-col justify-between gap-6", project.featured && "lg:w-[44%]") }>
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                {project.badge ? (
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-200">
                    {project.badge}
                  </span>
                ) : null}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      className="border-violet-500/25 bg-violet-950/40 text-violet-200"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-2xl font-black tracking-[-0.04em] text-white sm:text-[2rem]">
                  {project.title}
                </h3>
                <p className="text-sm leading-7 text-zinc-300/88">
                  {project.description}
                </p>
              </div>
            </div>

            <div>
              <Button
                asChild
                className="rounded-full bg-violet-600 text-white hover:bg-violet-500"
              >
                <a
                  href={project.github}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                >
                  View on GitHub
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </article>
      </GlowCard>
    </div>
  );
}


export default function HomePage() {
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    window.scrollTo(0, 0);

    return () => {
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "auto";
      }
    };
  }, []);

  return (
    <main className="site-shell relative isolate pb-24 text-[#e5e7eb] sm:pb-0">
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(124,58,237,0.16),transparent_28%),radial-gradient(circle_at_70%_18%,rgba(34,211,238,0.1),transparent_18%)]" />
        <SparklesCore
          id="portfolio-page-sparkles"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={90}
          className="h-full w-full opacity-55"
          particleColor="#FFFFFF"
          speed={0.75}
        />

        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,8,16,0.12)_0%,rgba(8,8,16,0.24)_30%,rgba(8,8,16,0.52)_65%,rgba(8,8,16,0.88)_100%)]" />
      </div>

      <div className="relative z-10">
        <NavBar className="w-[calc(100%-1.5rem)] sm:w-auto" items={navItems} />

        <section id="home" className="relative overflow-hidden px-6 pb-20 pt-28 sm:px-10 sm:pb-24 sm:pt-32 lg:px-16 lg:pb-28 lg:pt-36">
          <div className="mx-auto max-w-6xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-violet-300/80">
              PORTFOLIO {"\u00b7"} 2025
            </p>
            <h1 className="mt-6 text-5xl font-black tracking-[-0.06em] text-white sm:text-7xl lg:text-[6.5rem]">
              Rigved Bhat
            </h1>
            <p className="mt-4 text-sm font-semibold uppercase tracking-[0.45em] text-zinc-300 sm:text-base">
              AI {"\u00b7"} Systems {"\u00b7"} Code
            </p>
            <div className="mt-6 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/90 backdrop-blur-md">
              <span className="mr-2 h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_16px_rgba(34,211,238,0.8)]" />
              Open to Work
            </div>
            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-zinc-200/88 sm:text-xl">
              I build things with AI. From Discord bots to ML research, I work
              at the intersection of intelligence and craft.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <a
                href="#projects"
                className="rounded-full bg-violet-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-violet-500"
              >
                See My Work
              </a>
              <a
                href="#contact"
                className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/40 hover:bg-white/10"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </section>

        <section id="about" className="relative px-6 py-28 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl rounded-[40px] border border-white/10 bg-white/[0.02] p-8 backdrop-blur-md sm:p-10 lg:p-12">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div className="space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-violet-300/80">
                About
              </p>
              <h2 className="max-w-3xl text-4xl font-black tracking-[-0.05em] text-white sm:text-5xl">
                I care about building things that people can actually use when the demo ends.
              </h2>
              <div className="space-y-5 text-lg leading-8 text-zinc-200/86">
                <p>
                  I&apos;m Rigved - an AI developer and startup founder based in Kolhapur, Maharashtra.
                </p>
                <p>
                  I founded Crux AI and built it from scratch: a modular, AI-powered Discord bot that lets server owners set up entire communities with a single command. It handles moderation, leveling, event scheduling, and AI chat, all configurable from a web dashboard I also built.
                </p>
                <p>
                  Outside of Crux AI, I do ML research on sustainable tourism - building systems that model how to redistribute visitor flow across destinations using reinforcement learning and behavioural economics. I&apos;m also obsessed with making dense knowledge easier to reach through AI, whether that means resume analysis tools or retrieval systems that surface the right context fast.
                </p>
                <p>
                  I write Python for most of my backend work, React and Next.js for frontends, and I reach for data science tools when the problem actually needs them. I care much more about systems that hold up in real use than projects that only look clever for five minutes.
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {stats.map((stat) => (
                <GlowCard
                  key={stat.label}
                  customSize
                  glowColor={stat.glowColor}
                  className="w-full rounded-[28px] border-white/0 bg-white/[0.03] p-0"
                >
                  <div className="flex h-full min-h-[180px] flex-col justify-between rounded-[24px] bg-black/20 p-6">
                    <p className="text-5xl font-black text-violet-400">{stat.value}</p>
                    <p className="text-sm uppercase tracking-[0.28em] text-zinc-400">
                      {stat.label}
                    </p>
                  </div>
                </GlowCard>
              ))}
            </div>
          </div>
        </div>
        </section>

        <div id="about">
          <TextRevealByWord
            text={`"Ultimately, it comes down to taste. It comes down to trying to expose yourself to the best things that humans have done and then trying to bring those things into what you're doing. Picasso had a saying: good artists copy, great artists steal." - Steve Jobs`}
            className="bg-transparent"
          />
        </div>

        <section className="relative -mt-8 px-6 pb-8 pt-0 sm:-mt-10 sm:px-10 sm:pb-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 sm:mb-8">
            <h2 className="text-3xl font-black tracking-[-0.05em] text-white sm:text-4xl">
              Skills Implemented
            </h2>
          </div>
        <div
          className="space-y-5 overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          }}
        >
          <div className="animate-scroll-left flex gap-4 whitespace-nowrap">
            {[...skillsRowOne, ...skillsRowOne].map((skill, index) => (
              <span
                key={`row-one-${index}`}
                className="inline-block shrink-0 rounded-full border border-violet-500/30 bg-violet-950/40 px-4 py-2 text-sm text-violet-200"
              >
                {skill}
              </span>
            ))}
          </div>
          <div className="animate-scroll-right flex gap-4 whitespace-nowrap">
            {[...skillsRowTwo, ...skillsRowTwo].map((skill, index) => (
              <span
                key={`row-two-${index}`}
                className="inline-block shrink-0 rounded-full border border-violet-500/30 bg-violet-950/40 px-4 py-2 text-sm text-violet-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        </div>
        </section>

        <section id="projects" className="relative px-6 py-28 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl space-y-10">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300/80">
              Projects
            </p>
            <h2 className="text-4xl font-black tracking-[-0.05em] text-white sm:text-5xl">
              What I&apos;ve Built
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
        </section>

        <section id="contact" className="relative z-20 px-6 py-28 sm:px-10 lg:px-16">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <div className="mb-10 space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-violet-300/80">
              Contact
            </p>
            <h2 className="text-4xl font-black tracking-[-0.05em] text-white sm:text-5xl">
              Let&apos;s Work Together
            </h2>
            <p className="text-lg leading-8 text-zinc-300">
              I&apos;m currently open to freelance work, research collaborations, and full-time roles. If you&apos;re building something interesting, I want to hear about it.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap sm:gap-6">
            {contactLinks.map((item) => {
              const Icon = item.icon;
              const isExternal = item.href.startsWith("http");

              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  className="relative z-50 flex cursor-pointer pointer-events-auto items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-zinc-200 backdrop-blur-sm transition hover:border-violet-500/50 hover:bg-white/[0.07] sm:justify-start"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-violet-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500">
                      {item.label}
                    </p>
                    <p className="text-sm text-zinc-200">{item.value}</p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
        </section>

        <footer className="relative px-6 py-12 text-center sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl space-y-6 rounded-[34px] border border-white/10 bg-black/30 px-6 py-10 backdrop-blur-xl">
          <div className="flex justify-center">
            <AnimatedDock className="dock-shell" items={dockItems} />
          </div>
          <p className="text-sm text-gray-500">
            &copy; 2025 Rigved Bhat {"\u00b7"} Built with Next.js
          </p>
        </div>
        </footer>
      </div>
    </main>
  );
}
