"use client";

import { FormEvent, useState } from "react";
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
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AnimatedDock } from "@/components/ui/animated-dock";
import { HeroScrollVideo } from "@/components/ui/scroll-animated-video";
import { SparklesCore } from "@/components/ui/sparkles";
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

type Project = {
  title: string;
  image: string;
  tags: string[];
  description: string;
  github: string;
  featured: boolean;
  badge?: string;
};

const projects: Project[] = [
  {
    title: "Cruxy - AI-Powered Discord Bot",
    image:
      "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?w=1280&h=720&fit=crop&auto=format&q=80",
    tags: ["Python", "discord.py", "Gemini API", "React", "Flask", "SQLite"],
    description:
      "I built Cruxy because managing a Discord server shouldn't require an IT team. One command - /buildserver - generates a fully structured server from a natural language description. It handles moderation, XP leveling, event scheduling, and AI chat. I also built a React dashboard for real-time config.",
    github: "https://github.com/rigvedbhat/Cruxy---ModVerse",
    badge: "FOUNDER \u00b7 ACTIVE",
    featured: true,
  },
  {
    title: "AI Resume Analyzer",
    image:
      "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&h=500&fit=crop&auto=format&q=80",
    tags: ["Python", "Streamlit", "LLaMA 3.2", "Ollama", "OCR"],
    description:
      "A local-first resume review tool. Upload a PDF or image, and LLaMA 3.2 (running via Ollama, fully offline) analyzes it with structured HR-style feedback - strengths, weaknesses, and role-specific suggestions.",
    github: "https://github.com/rigvedbhat/ai-resume-analyzer",
    featured: false,
  },
  {
    title: "Tourism Flow Redistribution System",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=500&fit=crop&auto=format&q=80",
    tags: ["LightGBM", "DBSCAN", "RL/MDP", "Python", "Jupyter"],
    description:
      "ML research into sustainable tourism. I'm building a system to model how to redirect visitor flow across destinations using congestion scoring, behavioural acceptance modelling (logistic sigmoid), and Shannon entropy as a redistribution metric.",
    github: "https://github.com/rigvedbhat/tourism-ai-dss",
    featured: false,
  },
  {
    title: "AI Tools Awareness Event",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=500&fit=crop&auto=format&q=80",
    tags: ["Event Design", "Workshop", "AI Education"],
    description:
      "Co-organizing a hands-on AI tools event for ~80 participants. I'm responsible for the full event format design - workshop structure, competition segment, and the event format PDF.",
    github: "#",
    featured: false,
  },
] as const;

const dockItems = [
  {
    link: "https://github.com/rigvedbhat",
    target: "_blank",
    rel: "noopener noreferrer",
    Icon: <Github size={20} className="text-white" />,
  },
  {
    link: "https://www.linkedin.com/in/rigved-bhat-b4b46332a",
    target: "_blank",
    rel: "noopener noreferrer",
    Icon: <Linkedin size={20} className="text-white" />,
  },
  {
    link: "mailto:rigvedmb2@gmail.com",
    Icon: <Mail size={20} className="text-white" />,
  },
  {
    link: "https://github.com/rigvedbhat/Cruxy---ModVerse",
    target: "_blank",
    rel: "noopener noreferrer",
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

const initialFormState = {
  name: "",
  email: "",
  message: "",
};

function ProjectCard({
  project,
}: {
  project: Project;
}) {
  const isExternal = project.github.startsWith("http");

  return (
    <Card
      className={cn(
        "overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:border-violet-500/50",
        project.featured && "lg:col-span-2"
      )}
    >
      <div
        className={cn(
          "space-y-4",
          project.featured &&
            "lg:grid lg:grid-cols-[1.1fr_0.9fr] lg:gap-8 lg:space-y-0"
        )}
      >
        <div className="space-y-4">
          <img
            src={project.image}
            alt={project.title}
            className={cn(
              "w-full rounded-xl object-cover",
              project.featured ? "h-64 lg:h-full" : "h-48"
            )}
            loading="lazy"
            decoding="async"
          />
        </div>

        <div className="flex flex-col justify-between gap-5">
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              {project.badge ? (
                <span className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-200">
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

            <div className="space-y-2">
              <h3 className="text-2xl font-black tracking-[-0.04em] text-white">
                {project.title}
              </h3>
              <p className="text-sm leading-7 text-gray-400">
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
      </div>
    </Card>
  );
}

export default function HomePage() {
  const [form, setForm] = useState(initialFormState);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = encodeURIComponent("Portfolio Contact");
    const body = encodeURIComponent(
      [`Name: ${form.name}`, `Email: ${form.email}`, "", form.message].join("\n")
    );

    window.location.href = `mailto:rigvedmb2@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <main className="relative overflow-x-hidden text-[#e5e7eb]">
      <NavBar className="w-[calc(100%-1.5rem)] sm:w-auto" items={navItems} />

      <section id="home" className="relative isolate overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_18%_0%,rgba(124,58,237,0.22),transparent_34%),radial-gradient(circle_at_82%_14%,rgba(34,211,238,0.14),transparent_30%)]" />
        <div className="relative">
          <div className="pointer-events-none absolute inset-0 z-0">
            <SparklesCore
              background="transparent"
              minSize={0.3}
              maxSize={1}
              particleDensity={60}
              className="h-full w-full"
              particleColor="#7c3aed"
              speed={0.8}
            />
          </div>
          <div className="relative z-10">
            <HeroScrollVideo
              className="hero-scroll-shell"
              title="Rigved Bhat"
              subtitle={"AI \u00b7 Systems \u00b7 Code"}
              meta="Open to Work"
              credits={null}
              media="https://videos.pexels.com/video-files/3129671/3129671-hd_1920_1080_30fps.mp4"
              poster="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&h=1080&fit=crop&auto=format&q=80"
              overlay={{
                caption: "PORTFOLIO \u00b7 2025",
                heading: "I build things with AI.",
                paragraphs: [
                  "From Discord bots to ML research - I work at the intersection of intelligence and craft.",
                ],
                extra: (
                  <div
                    style={{
                      display: "flex",
                      gap: "12px",
                      marginTop: "20px",
                      justifyContent: "center",
                      flexWrap: "wrap",
                    }}
                  >
                    <a
                      href="#projects"
                      style={{
                        padding: "10px 24px",
                        borderRadius: "999px",
                        background: "rgba(124,58,237,0.85)",
                        color: "#fff",
                        fontWeight: 700,
                        fontSize: "14px",
                        textDecoration: "none",
                      }}
                    >
                      See My Work
                    </a>
                    <a
                      href="#contact"
                      style={{
                        padding: "10px 24px",
                        borderRadius: "999px",
                        border: "1px solid rgba(255,255,255,0.2)",
                        color: "#fff",
                        fontWeight: 600,
                        fontSize: "14px",
                        textDecoration: "none",
                      }}
                    >
                      Get in Touch
                    </a>
                  </div>
                ),
              }}
              scrollHeightVh={260}
              targetSize="fullscreen"
              initialBoxSize={380}
            />
          </div>
        </div>
      </section>

      <section id="about" className="relative bg-[#0b0b14] px-6 py-32 sm:px-10 lg:px-16">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent" />
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-violet-300/80">
              About
            </p>
            <h2 className="max-w-3xl text-4xl font-black tracking-[-0.05em] text-white sm:text-5xl">
              I like building things that actually work, not things that only look good in a demo.
            </h2>
            <div className="space-y-5 text-lg leading-8 text-zinc-300">
              <p>
                I&apos;m Rigved - an AI developer and startup founder based in Kolhapur, Maharashtra.
              </p>
              <p>
                I founded Crux AI and built Cruxy from scratch: a modular, AI-powered Discord bot that lets server owners set up entire communities with a single command. It handles moderation, leveling, event scheduling, and AI chat - all configurable from a web dashboard I also built.
              </p>
              <p>
                Outside of Cruxy, I do ML research on sustainable tourism - building systems that model how to redistribute visitor flow across destinations using reinforcement learning and behavioural economics. I&apos;m also obsessed with making dense knowledge more accessible through AI, whether that&apos;s resume analysis tools or knowledge retrieval systems.
              </p>
              <p>
                I write Python for most of my backend work, React and Next.js for frontends, and reach for data science tools when the problem needs them. I care about building things that actually work, not just things that demo well.
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {[
              { value: "3+", label: "Open Source Projects" },
              { value: "1", label: "AI Startup Founded" },
              { value: "4+", label: "AI Domains Worked In" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
              >
                <p className="text-5xl font-black text-violet-400">{stat.value}</p>
                <p className="mt-3 text-sm uppercase tracking-[0.28em] text-zinc-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/8 bg-[#090913] py-12">
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
      </section>

      <section id="projects" className="px-6 py-28 sm:px-10 lg:px-16">
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

      <section id="contact" className="bg-[#09090f] px-6 py-28 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="space-y-6">
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-violet-300/80">
                Contact
              </p>
              <h2 className="text-4xl font-black tracking-[-0.05em] text-white sm:text-5xl">
                Let&apos;s Work Together
              </h2>
              <p className="max-w-2xl text-lg leading-8 text-zinc-300">
                I&apos;m currently open to freelance work, research collaborations, and full-time roles. If you&apos;re building something interesting, I want to hear about it.
              </p>
            </div>

            <div className="space-y-3">
              {contactLinks.map((item) => {
                const Icon = item.icon;
                const isExternal = item.href.startsWith("http");

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-zinc-200 transition hover:border-violet-500/50 hover:bg-white/[0.07]"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-violet-300">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
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

          <Card className="rounded-3xl border border-white/10 bg-white/5 p-2 backdrop-blur-xl">
            <CardHeader className="space-y-2 pb-2">
              <CardTitle className="text-2xl font-black text-white">
                Send me a message
              </CardTitle>
              <CardDescription className="text-zinc-400">
                Tell me what you&apos;re building, what you need, or where you think I can help.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    type="text"
                    placeholder="Name"
                    value={form.name}
                    onChange={(event) =>
                      setForm((current) => ({ ...current, name: event.target.value }))
                    }
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-gray-500 transition focus:border-violet-500/60 focus:outline-none"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={(event) =>
                      setForm((current) => ({ ...current, email: event.target.value }))
                    }
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-gray-500 transition focus:border-violet-500/60 focus:outline-none"
                    required
                  />
                </div>
                <textarea
                  rows={5}
                  placeholder="Message"
                  value={form.message}
                  onChange={(event) =>
                    setForm((current) => ({ ...current, message: event.target.value }))
                  }
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-gray-500 transition focus:border-violet-500/60 focus:outline-none"
                  required
                />
                <Button
                  type="submit"
                  className="rounded-full bg-violet-600 text-white hover:bg-violet-500"
                >
                  Send Message
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-[#050508] px-6 py-12 text-center sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl space-y-6">
          <div className="flex justify-center">
            <AnimatedDock className="dock-shell" items={dockItems} />
          </div>
          <p className="text-sm text-gray-600">
            &copy; 2025 Rigved Bhat {"\u00b7"} Built with Next.js
          </p>
        </div>
      </footer>
    </main>
  );
}
