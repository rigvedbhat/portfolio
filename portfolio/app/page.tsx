"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Bot,
  BrainCircuit,
  Briefcase,
  Clapperboard,
  ExternalLink,
  Github,
  Home,
  LineChart,
  Linkedin,
  Mail,
  PanelsTopLeft,
  Sparkles,
  User,
} from "lucide-react";

import { ContactForm } from "@/components/contact-form";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AnimatedDock } from "@/components/ui/animated-dock";
import { HeroScrollVideo } from "@/components/ui/scroll-animated-video";
import { SparklesCore } from "@/components/ui/sparkles";
import { NavBar } from "@/components/ui/tubelight-navbar";
import { ZoomParallax } from "@/components/ui/zoom-parallax";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", url: "#home", icon: Home },
  { name: "About", url: "#about", icon: User },
  { name: "Projects", url: "#projects", icon: Briefcase },
  { name: "Contact", url: "#contact", icon: Mail },
];

const dockItems = [
  {
    link: "https://github.com/rigvedbhat",
    target: "_blank",
    rel: "noopener noreferrer",
    Icon: <Github size={22} />,
  },
  {
    link: "https://www.linkedin.com/in/rigved-bhat-b4b46332a",
    target: "_blank",
    rel: "noopener noreferrer",
    Icon: <Linkedin size={22} />,
  },
  { link: "mailto:rigvedmb2@gmail.com", Icon: <Mail size={22} /> },
  {
    link: "https://github.com/rigvedbhat/Cruxy---ModVerse",
    target: "_blank",
    rel: "noopener noreferrer",
    Icon: <ExternalLink size={22} />,
  },
];

const parallaxImages = [
  {
    src: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1280&h=720&fit=crop&auto=format&q=80",
    alt: "Technology circuit board",
  },
  {
    src: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=1280&h=720&fit=crop&auto=format&q=80",
    alt: "Laptop with code",
  },
  {
    src: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=800&fit=crop&auto=format&q=80",
    alt: "Robot and AI",
  },
  {
    src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1280&h=720&fit=crop&auto=format&q=80",
    alt: "Open office coworking",
  },
  {
    src: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&h=800&fit=crop&auto=format&q=80",
    alt: "AI neural network",
  },
  {
    src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1280&h=720&fit=crop&auto=format&q=80",
    alt: "Code on monitor",
  },
  {
    src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1280&h=720&fit=crop&auto=format&q=80",
    alt: "Developer working",
  },
];

const skills = [
  "Python",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Flask",
  "Node.js",
  "discord.py",
  "Google Gemini API",
  "LightGBM",
  "Sentence Transformers",
  "DBSCAN",
  "RAG",
  "Streamlit",
  "SQLite",
  "aiosqlite",
  "Tailwind CSS",
  "Git",
  "Jupyter",
  "Data Science",
  "NLP",
  "Machine Learning",
  "Prompt Engineering",
];

const projects = [
  {
    title: "Cruxy - AI Discord Bot",
    tags: ["Python", "discord.py", "Gemini API", "React", "Flask", "SQLite"],
    problem:
      "Discord server owners spend hours on repetitive setup tasks - creating roles, channels, moderation rules - manually.",
    built:
      "Cruxy automates all of it. A single slash command like /buildserver generates a fully structured Discord server from a natural language description. Features include AI chat via @Cruxy mentions (Gemini-powered), automated moderation with escalating warnings (warn, mute, kick, ban), XP/leveling system, event scheduling, and a React-based web dashboard for real-time config management.",
    impact:
      "Founder-built from zero. Currently live and invite-able. Has modular cog architecture making it easy to add new features independently.",
    link: "https://github.com/rigvedbhat/Cruxy---ModVerse",
    highlight: true,
  },
  {
    title: "AI Resume Analyzer",
    tags: ["Python", "Streamlit", "LLaMA 3.2", "Ollama", "PyPDF2", "Tesseract OCR"],
    problem:
      "Job seekers struggle to get specific, personalized feedback on their resumes without access to a recruiter.",
    built:
      "A Streamlit app that accepts PDF or image resumes, extracts text via PyPDF2 and Tesseract OCR, then passes it to LLaMA 3.2 (running locally via Ollama) with a structured HR-style prompt. Returns structured feedback: strengths, weaknesses, clarity analysis, and role-specific suggestions.",
    impact:
      "Runs entirely locally - no data leaves the user's machine. Supports PDF and image formats.",
    link: "https://github.com/rigvedbhat/ai-resume-analyzer",
    highlight: false,
  },
  {
    title: "Tourism AI Decision Support System",
    tags: ["Python", "Jupyter", "LightGBM", "Sentence Transformers", "DBSCAN", "RL/MDP"],
    problem:
      "Over-tourism concentrates visitors in a handful of hotspots, causing congestion and degrading the experience. Simply suggesting alternative destinations doesn't change traveller behaviour.",
    built:
      "A full ML pipeline for temporal-spatial tourist flow redistribution. Uses piecewise congestion scoring, a behavioural acceptance model (logistic sigmoid + reservation utility), Shannon entropy as a redistribution metric, and bootstrap TF-IDF stability testing. DBSCAN clusters destination types; LightGBM models congestion. RL/MDP component explores sequencing-based nudges.",
    impact:
      "Research-grade system targeting sustainable tourism policy. ML stack validated against JNTO tourism data. Targeting MEXT academic supervisor Aki-Hiro Sato.",
    link: "https://github.com/rigvedbhat/tourism-ai-dss",
    highlight: false,
  },
  {
    title: "Hindu Scripture RAG Chatbot",
    tags: ["Python", "RAG", "NLP", "Vector DB", "LLM"],
    problem:
      "Hindu scriptures - Ramayana, Mahabharata, Vedas, Upanishads - are dense, translation-heavy, and inaccessible to most people, especially younger audiences.",
    built:
      "A RAG (Retrieval-Augmented Generation) chatbot that ingests verified translations and commentaries across major texts, chunks and embeds them into a vector store, and answers questions with citation transparency. Designed with bias mitigation and multiple translation sources to avoid doctrinal skew.",
    impact:
      "In active development. Designed to be interactive and educational, with cited answers linking back to source texts.",
    link: "https://github.com/rigvedbhat",
    highlight: false,
  },
  {
    title: "AI Film Direction - Fight Club Inspired Short",
    tags: ["Prompt Engineering", "Generative Video", "Creative Direction", "Google Flow"],
    problem:
      "Translating a full cinematic vision into AI-generated video requires a detailed, consistent prompt language that most tools don't guide you through.",
    built:
      "A comprehensive Google Flow Prompt Bible for a 6-scene, 16-shot AI-generated short film. Covers camera language (angles, lens, movement), lighting design (dual visual language: cold blue-grey vs warm amber), VFX/SFX cues, music direction, and character continuity for three characters. Hyper-realism was the core aesthetic priority.",
    impact:
      "Demonstrates the intersection of creative direction and AI tooling - treating prompt engineering as cinematography.",
    link: "https://github.com/rigvedbhat",
    highlight: false,
  },
  {
    title: "AI Tools Awareness Event",
    tags: ["Event Design", "Workshop Facilitation", "AI Education"],
    problem:
      "Most people in academic and professional settings are aware AI tools exist but have no structured way to learn how to actually use them effectively.",
    built:
      "Co-organizing a hands-on AI tools awareness event targeting ~80 participants. Event format includes a workshop/DIY session and a competition segment. Responsible for the event format PDF, coordinating with a core team (content, survey, and format leads).",
    impact:
      "Targeted toward practical AI literacy. 80-participant scale. Full event design and format documentation authored by Rig.",
    link: "#",
    highlight: false,
  },
];

const services = [
  {
    title: "AI Integration & Automation",
    description:
      "Build AI-powered features into your product using LLMs like Gemini or LLaMA. Chatbots, document analyzers, and natural language interfaces.",
    icon: Sparkles,
  },
  {
    title: "Discord Bot Development",
    description:
      "Full-featured, modular Discord bots with AI chat, moderation, leveling, event scheduling, slash commands, and web dashboards.",
    icon: Bot,
  },
  {
    title: "Machine Learning Systems",
    description:
      "End-to-end ML pipelines for classification, clustering, NLP, and behavioural modelling. From EDA to deployment.",
    icon: BrainCircuit,
  },
  {
    title: "Full-Stack Web Development",
    description:
      "React/Next.js frontends plus Python/Flask or Node.js backends. Clean UIs, REST APIs, and database integration.",
    icon: PanelsTopLeft,
  },
  {
    title: "Data Science & Research",
    description:
      "Hypothesis testing, statistical modelling, correlation analysis, and ML research for academic or commercial use cases.",
    icon: LineChart,
  },
  {
    title: "Prompt Engineering & AI Creative Direction",
    description:
      "Structured prompting systems for generative AI tools - video, image, and text - with consistent output and cinematic quality.",
    icon: Clapperboard,
  },
];

function ProjectCard({
  title,
  tags,
  problem,
  built,
  impact,
  link,
  highlight,
}: (typeof projects)[number]) {
  const isExternal = link.startsWith("http");

  return (
    <div>
      <Card
        className={cn(
          "group h-full overflow-hidden border-white/10 bg-zinc-950/70 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30",
          highlight && "border-primary/35 bg-gradient-to-b from-primary/10 via-zinc-950/80 to-zinc-950/90"
        )}
      >
        <CardHeader className="gap-4">
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-2">
              <CardTitle className="text-3xl tracking-[-0.04em]">{title}</CardTitle>
              <CardDescription>
                {highlight ? "Flagship product" : "Selected build"}
              </CardDescription>
            </div>
            {highlight ? <Badge variant="secondary">Featured</Badge> : null}
          </div>

          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>
        </CardHeader>

        <CardContent className="space-y-6 text-sm leading-7 text-zinc-300">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary/80">
              Problem
            </p>
            <p>{problem}</p>
          </div>
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary/80">
              What was built
            </p>
            <p>{built}</p>
          </div>
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary/80">
              Impact
            </p>
            <p>{impact}</p>
          </div>
        </CardContent>

        <CardFooter>
          {isExternal ? (
            <a
              className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-100 transition-colors hover:text-primary"
              href={link}
              target="_blank"
              rel="noopener noreferrer"
            >
              View GitHub
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          ) : (
            <span className="text-sm font-medium text-zinc-400">
              Event materials available on request
            </span>
          )}
        </CardFooter>
      </Card>
    </div>
  );
}

export default function HomePage() {
  return (
    <main className="relative overflow-x-hidden pb-24 text-foreground">
      <NavBar className="w-[calc(100%-1.5rem)] sm:w-auto" items={navItems} />

      <section id="home" className="relative isolate scroll-mt-24 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.20),transparent_34%),radial-gradient(circle_at_80%_20%,rgba(34,211,238,0.14),transparent_26%)]" />
        <div className="absolute inset-0 pointer-events-none z-0 hidden lg:block">
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={24}
            className="h-full w-full"
            particleColor="#8b5cf6"
            speed={0.45}
          />
        </div>
        <div className="relative z-10">
          <HeroScrollVideo
            className="hero-scroll-shell"
            heroVisual={
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(103,232,249,0.45),transparent_58%)] blur-2xl" />
                <div className="relative rounded-full bg-gradient-to-br from-cyan-300/70 via-violet-400/80 to-fuchsia-500/75 p-[3px] shadow-[0_20px_80px_rgba(34,211,238,0.25)]">
                  <div className="rounded-full border border-white/20 bg-[#101018]/90 p-2 backdrop-blur-xl">
                    <div className="relative h-28 w-28 overflow-hidden rounded-full sm:h-32 sm:w-32">
                      <Image
                        src="/rig-photo.jpg"
                        alt="Rigved Bhat portrait"
                        fill
                        priority
                        sizes="128px"
                        className="object-cover object-center scale-[1.04]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            }
            title="Rigved Bhat"
            subtitle="AI Developer - Startup Founder - Data Scientist"
            meta="Building Intelligent Systems"
            credits={
              <>
                <p>Founder, Crux AI</p>
                <p>rigvedmb2@gmail.com</p>
              </>
            }
            media="https://videos.pexels.com/video-files/3129671/3129671-hd_1920_1080_30fps.mp4"
            overlay={{
              caption: "PORTFOLIO - 2025",
              heading: "Turning Ideas Into Systems",
              paragraphs: [
                "I build AI-powered tools, Discord bots, and data-driven decision systems.",
                "Currently building Cruxy - an AI-powered modular Discord bot - and exploring RAG-based knowledge systems for Hindu scripture.",
              ],
              extra: (
                <a
                  href="#projects"
                  className="mt-4 inline-block rounded-full border border-white/20 bg-white/10 px-6 py-2 text-sm font-semibold text-white transition-all hover:bg-white/20"
                >
                  See My Work
                </a>
              ),
            }}
            smoothScroll={false}
            scrollHeightVh={220}
            targetSize="fullscreen"
          />
        </div>
      </section>

      <section id="about" className="scroll-mt-28 px-6 py-24 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl space-y-10">
          <div>
            <SectionHeading
              eyebrow="About"
              title="Builder-first AI systems with research discipline and product instincts."
              description="Rigved Bhat (Rig) is an AI developer and startup founder based in Maharashtra, India. He builds software that feels rigorous under the hood and useful in the hands of real people."
            />
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <Card className="section-shell section-glow border-white/10 bg-zinc-950/65">
                <CardContent className="space-y-6 p-8 text-base leading-8 text-zinc-300">
                  <p>
                    He is the creator of Crux AI and its flagship product Cruxy - a modular,
                    AI-powered Discord community management bot powered by Google Gemini. Rig
                    works at the intersection of artificial intelligence, software engineering,
                    and data science, building systems that are both technically rigorous and
                    practically useful.
                  </p>
                  <p>
                    His work spans full-stack development (Python, React, Flask, Next.js),
                    machine learning (LightGBM, sentence transformers, DBSCAN), NLP, and
                    applied AI integration. He also conducts ML research focused on sustainable
                    tourism flow redistribution, targeting temporal-spatial behavioural modelling
                    with reinforcement learning.
                  </p>
                  <p>
                    Beyond engineering, Rig has a strong interest in creative direction, film
                    aesthetics, and making complex knowledge more accessible - including a
                    RAG-based chatbot for Hindu scriptures covering texts from the Ramayana to
                    the Upanishads.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="border-primary/25 bg-gradient-to-br from-primary/12 via-zinc-950/80 to-zinc-950/95">
                <CardHeader>
                  <CardTitle className="text-xl">Current focus</CardTitle>
                  <CardDescription>What Rig is pushing forward right now.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 text-sm leading-7 text-zinc-300">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary/80">
                      Product
                    </p>
                    <p>
                      Scaling Cruxy into a polished AI-first Discord operations platform with a
                      modular cog architecture and web dashboard.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary/80">
                      Research
                    </p>
                    <p>
                      Exploring behavioural nudges, congestion modelling, and RL/MDP techniques
                      for sustainable tourism flow redistribution.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-white/10 bg-zinc-950/60">
                <CardHeader>
                  <CardTitle className="text-xl">Operating style</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm leading-7 text-zinc-300">
                  <p>Founder energy with a data scientist&apos;s habit of testing assumptions.</p>
                  <p>Comfortable moving from experimentation to production implementation.</p>
                  <p>Drawn to work that mixes AI capability, usability, and strong creative direction.</p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div>
            <Card className="border-white/10 bg-zinc-950/65">
              <CardHeader>
                <CardTitle className="text-2xl">Core stack</CardTitle>
                <CardDescription>
                  Languages, frameworks, APIs, and methods used across products and research.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill) => (
                    <Badge key={skill} className="rounded-full px-4 py-2 text-[11px] tracking-[0.16em]">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="projects" className="scroll-mt-28 px-6 py-24 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl space-y-14">
          <div>
            <SectionHeading
              eyebrow="Projects"
              title="Systems that solve operational pain, research problems, and creative challenges."
              description="The portfolio spans production tooling, applied machine learning, knowledge systems, and AI-assisted creative direction - each designed around a concrete problem statement."
            />
          </div>

          <div className="grid gap-4 md:hidden">
            {parallaxImages.slice(0, 4).map((image) => (
              <div
                key={image.src}
                className="overflow-hidden rounded-[28px] border border-white/10 bg-zinc-950/70"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-52 w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
          </div>

          <div className="hidden overflow-hidden rounded-[36px] border border-white/10 bg-black/40 md:block">
            <ZoomParallax images={parallaxImages} />
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="scroll-mt-28 px-6 py-24 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl space-y-12">
          <div>
            <SectionHeading
              eyebrow="Services"
              title="Hands-on help across AI productization, automation, ML, and full-stack delivery."
              description="Rig works best where strategy meets implementation - shipping features, prototypes, internal tools, and research-backed decision systems."
            />
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div key={service.title}>
                  <Card className="h-full border-white/10 bg-zinc-950/65 transition-transform duration-300 hover:-translate-y-1">
                    <CardHeader className="space-y-5">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
                        <Icon className="h-5 w-5" />
                      </div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm leading-7 text-zinc-300">{service.description}</p>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-28 px-6 py-24 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl space-y-12">
          <div>
            <SectionHeading
              eyebrow="Contact"
              title="If you're building something ambitious, this is a good place to start."
              description="Reach out for AI features, research collaboration, bot development, or a sharp technical partner who can move from idea to working system."
            />
          </div>

          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="space-y-5">
              <Card className="border-white/10 bg-zinc-950/65">
                <CardHeader>
                  <CardTitle className="text-2xl">Direct links</CardTitle>
                  <CardDescription>Prefer email, GitHub, or LinkedIn - all here.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 text-sm">
                  <a
                    className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 text-zinc-200 hover:border-primary/30 hover:text-white"
                    href="mailto:rigvedmb2@gmail.com"
                  >
                    <span>Email</span>
                    <span className="font-medium">rigvedmb2@gmail.com</span>
                  </a>
                  <a
                    className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 text-zinc-200 hover:border-primary/30 hover:text-white"
                    href="https://github.com/rigvedbhat"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>GitHub</span>
                    <span className="font-medium">github.com/rigvedbhat</span>
                  </a>
                  <a
                    className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 text-zinc-200 hover:border-primary/30 hover:text-white"
                    href="https://www.linkedin.com/in/rigved-bhat-b4b46332a"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>LinkedIn</span>
                    <span className="font-medium">rigved-bhat-b4b46332a</span>
                  </a>
                </CardContent>
              </Card>

              <Card className="border-primary/25 bg-gradient-to-br from-cyan-400/10 via-zinc-950/80 to-zinc-950/95">
                <CardHeader>
                  <CardTitle className="text-2xl">Best-fit collaborations</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-sm leading-7 text-zinc-300">
                  <p>AI feature design and implementation for startups or internal tools.</p>
                  <p>Discord bot products with moderation, automation, and AI support layers.</p>
                  <p>Research-led ML systems where modelling quality matters as much as shipping.</p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="secondary">
                    <Link href="#projects">Browse recent work</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>

            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <footer className="px-6 pb-14 pt-10 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl rounded-[36px] border border-white/10 bg-zinc-950/65 px-6 py-10 text-center backdrop-blur-xl">
          <div className="mb-6 flex justify-center">
            <AnimatedDock className="dock-shell" items={dockItems} />
          </div>
          <p className="text-sm text-zinc-400">Copyright 2025 Rigved Bhat - Built with Next.js</p>
        </div>
      </footer>
    </main>
  );
}
