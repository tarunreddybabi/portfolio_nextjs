"use client";

import { FormEvent, useState } from "react";
import { AnimatePresence, motion, Variants } from "framer-motion";
import {
  ArrowDownRight,
  ArrowUp,
  BriefcaseBusiness,
  Check,
  ChevronRight,
  Code2,
  Database,
  Download,
  ExternalLink,
  Github,
  Globe2,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Send,
  Server,
  Sparkles,
  TerminalSquare,
  X,
  Zap,
} from "lucide-react";
import {
  education,
  experiences,
  profile,
  projects,
  skillGroups,
} from "@/lib/data";

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: "easeOut",
    },
  },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

function Reveal({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.12 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [activeRole, setActiveRole] = useState(0);
  const roles = ["Full Stack Developer", "Software Engineer", "SaaS Builder"];

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "").trim();
    const email = String(form.get("email") || "").trim();
    const message = String(form.get("message") || "").trim();
    if (!name || !email || !message) return;
    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <main className="overflow-hidden">
      <div className="fixed inset-0 -z-10 grid-bg" />
      <header className="fixed top-0 z-50 w-full border-b border-white/[.06] bg-[#07070b]/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a
            href="#top"
            className="group flex items-center gap-3"
            aria-label="Back to top"
          >
            <span className="grid size-9 place-items-center rounded-xl border border-white/10 bg-white/[.04] text-sm font-black">
              TR
            </span>
            <span className="hidden text-sm font-semibold tracking-tight sm:block">
              Tarun Reddy Babireddy
            </span>
          </a>
          <nav className="hidden items-center gap-7 text-sm text-zinc-400 md:flex">
            {[
              ["About", "about"],
              ["Experience", "experience"],
              ["Work", "work"],
              ["Skills", "skills"],
              ["Contact", "contact"],
            ].map(([label, id]) => (
              <a
                key={id}
                href={`#${id}`}
                className="transition hover:text-white"
              >
                {label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="hidden rounded-full border border-white/10 bg-white/[.06] px-4 py-2 text-sm font-medium transition hover:border-violet-400/40 hover:bg-violet-400/10 md:block"
          >
            Let&apos;s talk
          </a>
          <button
            className="rounded-lg p-2 md:hidden"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="border-t border-white/[.06] px-5 py-3 md:hidden"
            >
              {[
                ["About", "about"],
                ["Experience", "experience"],
                ["Work", "work"],
                ["Skills", "skills"],
                ["Contact", "contact"],
              ].map(([label, id]) => (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={() => setMenuOpen(false)}
                  className="block border-b border-white/[.05] py-3 text-sm text-zinc-300"
                >
                  {label}
                </a>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      <section
        id="top"
        className="relative mx-auto flex min-h-screen max-w-7xl items-center px-5 pb-20 pt-32 lg:px-8"
      >
        <div className="pointer-events-none absolute right-[-10%] top-[16%] size-[36rem] rounded-full bg-violet-500/10 blur-[110px]" />
        <div className="pointer-events-none absolute bottom-[5%] left-[-8%] size-[24rem] rounded-full bg-cyan-400/10 blur-[100px]" />
        <div className="grid w-full gap-14 lg:grid-cols-[1.25fr_.75fr] lg:items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[.04] px-3 py-1.5 text-xs font-medium text-zinc-300"
            >
              <span className="size-1.5 rounded-full bg-emerald-400 shadow-[0_0_12px_#34d399]" />{" "}
              Available for meaningful engineering opportunities
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15 }}
              className="mb-4 text-sm font-semibold uppercase tracking-[.28em] text-violet-300"
            >
              Software Engineer / Full Stack
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12, duration: 0.7 }}
              className="max-w-5xl text-5xl font-black tracking-[-.055em] text-white sm:text-6xl lg:text-8xl"
            >
              Building <span className="text-gradient">scalable products</span>{" "}
              that work hard.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="mt-7 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg"
            >
              I&apos;m {profile.name}, a full-stack engineer focused on secure
              APIs, responsive interfaces, multi-tenant SaaS, configurable
              workflows, and enterprise document automation.
            </motion.p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#work"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-black transition hover:-translate-y-0.5 hover:shadow-[0_14px_50px_rgba(255,255,255,.14)]"
              >
                View My Work{" "}
                <ArrowDownRight
                  size={17}
                  className="transition group-hover:rotate-45"
                />
              </a>
              <a
                href="/resume/Tarun-Reddy-Babireddy-Resume.pdf"
                download
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[.04] px-5 py-3 text-sm font-semibold text-white transition hover:border-white/20 hover:bg-white/[.08]"
              >
                <Download size={17} /> Download Resume
              </a>
            </div>
            <div className="mt-10 flex items-center gap-5 text-zinc-500">
              <a
                href={`mailto:${profile.email}`}
                className="transition hover:text-white"
                aria-label="Email"
              >
                <Mail size={19} />
              </a>
              <span className="h-4 w-px bg-white/10" />
              <a
                href={`tel:${profile.phone.replace(/\s/g, "")}`}
                className="transition hover:text-white"
                aria-label="Phone"
              >
                <Phone size={18} />
              </a>
              <span className="h-4 w-px bg-white/10" />
              <span className="inline-flex items-center gap-1.5 text-xs">
                <MapPin size={15} /> {profile.location}
              </span>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="relative mx-auto w-full max-w-md lg:ml-auto"
          >
            <div className="glass glow-border noise relative overflow-hidden rounded-[2rem] p-6 sm:p-8">
              <div className="mb-8 flex items-center justify-between">
                <span className="rounded-full border border-white/10 px-3 py-1 text-[10px] uppercase tracking-[.2em] text-zinc-500">
                  Engineer profile
                </span>
                <Sparkles size={17} className="text-violet-300" />
              </div>
              <div className="mb-8 grid size-28 place-items-center rounded-[1.7rem] bg-gradient-to-br from-violet-500/25 to-cyan-400/15 text-4xl font-black text-white shadow-2xl shadow-violet-950/40">
                TR
              </div>
              <h2 className="text-2xl font-bold">{profile.name}</h2>
              <div className="mt-2 h-7 overflow-hidden text-sm text-zinc-400">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={roles[activeRole]}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.35 }}
                  >
                    {roles[activeRole]}
                  </motion.div>
                </AnimatePresence>
              </div>
              <div className="mt-7 grid grid-cols-2 gap-3">
                <MiniStat
                  icon={<Server size={15} />}
                  label="Backend"
                  value="Node.js"
                />
                <MiniStat
                  icon={<Code2 size={15} />}
                  label="Frontend"
                  value="React.js"
                />
                <MiniStat
                  icon={<Database size={15} />}
                  label="Data"
                  value="PostgreSQL"
                />
                <MiniStat
                  icon={<Zap size={15} />}
                  label="Cache"
                  value="Redis"
                />
              </div>
              <div className="mt-8 flex gap-1.5">
                {roles.map((role, index) => (
                  <button
                    key={role}
                    onClick={() => setActiveRole(index)}
                    aria-label={`Show ${role}`}
                    className={`h-1 rounded-full transition-all ${
                      index === activeRole
                        ? "w-10 bg-violet-300"
                        : "w-4 bg-white/10"
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section
        id="about"
        className="border-y border-white/[.06] bg-white/[.015]"
      >
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 lg:grid-cols-[.7fr_1.3fr] lg:px-8">
          <Reveal>
            <SectionEyebrow number="01" title="About me" />
          </Reveal>
          <Reveal>
            <div className="max-w-4xl">
              <p className="text-2xl font-medium leading-relaxed tracking-tight text-zinc-200 sm:text-3xl">
                I enjoy taking complex business problems and turning them into{" "}
                <span className="text-violet-300">
                  clear, configurable software
                </span>{" "}
                — from secure APIs and data layers to polished product
                interfaces.
              </p>
              <p className="mt-7 max-w-3xl text-base leading-8 text-zinc-500">
                My recent work has centered on multi-tenant SaaS architecture,
                dynamic builders, workflow-heavy products, document automation,
                and performance optimization. I work across the stack and care
                about how the pieces fit together, not just how individual
                features look.
              </p>
              <div className="mt-9 flex flex-wrap gap-2">
                {[
                  "Scalable systems",
                  "Enterprise workflows",
                  "API design",
                  "Responsive UI",
                  "Performance",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[.03] px-3.5 py-2 text-xs text-zinc-400"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr]">
          <Reveal>
            <SectionEyebrow number="02" title="Experience" />
          </Reveal>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.08 }}
            className="space-y-5"
          >
            {experiences.map((exp, index) => (
              <motion.article
                variants={fadeUp}
                key={exp.company}
                className="glass group rounded-3xl p-6 sm:p-8"
              >
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[.18em] text-violet-300">
                      <BriefcaseBusiness size={14} /> {exp.period}
                    </div>
                    <h3 className="text-xl font-bold tracking-tight text-white">
                      {exp.role}
                    </h3>
                    <p className="mt-1 text-sm text-zinc-400">
                      {exp.company} · {exp.location}
                    </p>
                  </div>
                  <span className="rounded-full border border-white/10 px-3 py-1 text-[10px] uppercase tracking-[.16em] text-zinc-500">
                    0{index + 1}
                  </span>
                </div>
                <div className="mt-7 border-l border-violet-400/20 pl-5">
                  <p className="text-sm font-semibold text-zinc-200">
                    {exp.project}
                  </p>
                  <p className="mt-2 text-sm leading-7 text-zinc-500">
                    {exp.description}
                  </p>
                </div>
                <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                  {exp.bullets.map((item) => (
                    <li
                      key={item}
                      className="flex gap-2.5 text-sm leading-6 text-zinc-400"
                    >
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-violet-300" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-7 flex flex-wrap gap-2">
                  {exp.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-white/[.04] px-2.5 py-1.5 text-[11px] text-zinc-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {"contributions" in exp && (
                  <div className="mt-6 border-t border-white/[.06] pt-6">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[.18em] text-zinc-600">
                      Key contributions
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.contributions.map((c) => (
                        <span
                          key={c}
                          className="rounded-full border border-cyan-300/10 bg-cyan-300/[.03] px-3 py-1.5 text-xs text-cyan-100/60"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section
        id="work"
        className="border-y border-white/[.06] bg-white/[.015]"
      >
        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
          <Reveal>
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <SectionEyebrow number="03" title="Selected work" />
              <p className="max-w-md text-sm leading-6 text-zinc-500">
                Two product experiences from my professional work, presented as
                case-study style snapshots rather than generic project cards.
              </p>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {projects.map((project, i) => (
              <Reveal key={project.name}>
                <article className="group relative min-h-[390px] overflow-hidden rounded-[2rem] border border-white/10 bg-[#0d0d14] p-7 transition duration-500 hover:-translate-y-1 hover:border-white/20 sm:p-9">
                  <div
                    className={`absolute -right-24 -top-24 size-72 rounded-full blur-3xl ${
                      project.accent === "violet"
                        ? "bg-violet-500/20"
                        : "bg-cyan-400/15"
                    }`}
                  />
                  <div className="relative flex h-full flex-col">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold uppercase tracking-[.2em] text-zinc-600">
                        {project.label}
                      </span>
                      <ExternalLink
                        size={17}
                        className="text-zinc-600 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white"
                      />
                    </div>
                    <div className="mt-auto pt-20">
                      <div className="mb-4 flex size-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[.04]">
                        {i === 0 ? (
                          <Layers3 size={21} className="text-violet-300" />
                        ) : (
                          <Globe2 size={21} className="text-cyan-300" />
                        )}
                      </div>
                      <h3 className="text-4xl font-black tracking-tight">
                        {project.name}
                      </h3>
                      <p className="mt-4 max-w-lg text-sm leading-7 text-zinc-500">
                        {project.description}
                      </p>
                      <div className="mt-6 flex flex-wrap gap-2">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="rounded-full bg-white/[.05] px-3 py-1.5 text-xs text-zinc-400"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr]">
          <Reveal>
            <SectionEyebrow number="04" title="Toolkit" />
          </Reveal>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="grid gap-4 sm:grid-cols-2"
          >
            {skillGroups.map((group) => (
              <motion.div
                variants={fadeUp}
                key={group.title}
                className="glass rounded-3xl p-6"
              >
                <div className="mb-6 flex items-center gap-3">
                  <span className="grid size-9 place-items-center rounded-xl bg-white/[.05] text-violet-300">
                    <TerminalSquare size={17} />
                  </span>
                  <h3 className="font-semibold">{group.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-white/[.07] px-3 py-2 text-xs text-zinc-400"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="border-y border-white/[.06] bg-white/[.015]">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 lg:grid-cols-[.7fr_1.3fr] lg:px-8">
          <Reveal>
            <SectionEyebrow number="05" title="Education" />
          </Reveal>
          <Reveal>
            <div className="glass rounded-3xl p-7 sm:p-9">
              <div className="flex size-12 items-center justify-center rounded-2xl bg-violet-400/10 text-violet-300">
                <Code2 size={21} />
              </div>
              <p className="mt-7 text-xs font-semibold uppercase tracking-[.18em] text-zinc-600">
                {education.period}
              </p>
              <h3 className="mt-3 text-2xl font-bold">{education.degree}</h3>
              <p className="mt-2 text-zinc-400">{education.institute}</p>
              <div className="mt-6 inline-flex rounded-full border border-white/10 bg-white/[.03] px-3 py-1.5 text-xs text-zinc-400">
                {education.score}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section
        id="contact"
        className="relative mx-auto max-w-7xl px-5 py-24 lg:px-8"
      >
        <div className="pointer-events-none absolute left-1/2 top-20 -z-10 size-[34rem] -translate-x-1/2 rounded-full bg-violet-500/10 blur-[120px]" />
        <div className="grid gap-14 lg:grid-cols-[.9fr_1.1fr]">
          <Reveal>
            <SectionEyebrow number="06" title="Let's connect" />
            <div className="mt-9">
              <h2 className="text-4xl font-black tracking-[-.04em] sm:text-5xl">
                Have a product that needs{" "}
                <span className="text-gradient">strong engineering?</span>
              </h2>
              <p className="mt-6 max-w-lg text-sm leading-7 text-zinc-500">
                For hiring conversations, product work, or engineering
                opportunities, the fastest route is email.
              </p>
              <div className="mt-8 space-y-3">
                <a
                  href={`mailto:${profile.email}`}
                  className="glass flex items-center gap-4 rounded-2xl p-4 transition hover:border-violet-300/20"
                >
                  <span className="grid size-10 place-items-center rounded-xl bg-white/[.05]">
                    <Mail size={17} />
                  </span>
                  <span>
                    <span className="block text-xs text-zinc-600">Email</span>
                    <span className="text-sm text-zinc-200">
                      {profile.email}
                    </span>
                  </span>
                </a>
                <a
                  href={`tel:${profile.phone.replace(/\s/g, "")}`}
                  className="glass flex items-center gap-4 rounded-2xl p-4 transition hover:border-violet-300/20"
                >
                  <span className="grid size-10 place-items-center rounded-xl bg-white/[.05]">
                    <Phone size={17} />
                  </span>
                  <span>
                    <span className="block text-xs text-zinc-600">Phone</span>
                    <span className="text-sm text-zinc-200">
                      {profile.phone}
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </Reveal>
          <Reveal>
            <form onSubmit={submit} className="glass rounded-[2rem] p-6 sm:p-8">
              <div className="mb-8 flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[.18em] text-zinc-600">
                    Start a conversation
                  </p>
                  <h3 className="mt-2 text-2xl font-bold">Send a message</h3>
                </div>
                <MessageCircle className="text-violet-300" size={22} />
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Name" name="name" placeholder="Your name" />
                <Field
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                />
              </div>
              <div className="mt-5">
                <label className="mb-2 block text-xs font-medium text-zinc-500">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={6}
                  placeholder="Tell me a little about what you are building..."
                  className="w-full resize-none rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-700 focus:border-violet-300/40"
                />
              </div>
              <button
                type="submit"
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3.5 text-sm font-bold text-black transition hover:-translate-y-0.5"
              >
                {sent ? (
                  <>
                    <Check size={17} /> Email draft opened
                  </>
                ) : (
                  <>
                    <Send size={17} /> Send message
                  </>
                )}
              </button>
              <p className="mt-3 text-center text-[11px] text-zinc-700">
                Submitting opens your default email client with the message
                pre-filled.
              </p>
            </form>
          </Reveal>
        </div>
      </section>

      <footer className="border-t border-white/[.06]">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-8 text-xs text-zinc-600 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <div>
            <span className="font-semibold text-zinc-400">{profile.name}</span>
            <span className="mx-2">·</span>Software Engineer / Full Stack
            Developer
          </div>
          <div className="flex items-center gap-5">
            <a
              href={`mailto:${profile.email}`}
              className="transition hover:text-white"
            >
              <Mail size={15} />
            </a>
            <span>© {new Date().getFullYear()}</span>
            <a
              href="#top"
              className="rounded-full border border-white/10 p-2 transition hover:border-white/20 hover:text-white"
              aria-label="Back to top"
            >
              <ArrowUp size={14} />
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

function MiniStat({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-white/[.07] bg-white/[.025] p-3">
      <div className="flex items-center gap-2 text-zinc-600">
        {icon}
        <span className="text-[10px] uppercase tracking-[.15em]">{label}</span>
      </div>
      <p className="mt-2 text-xs font-semibold text-zinc-300">{value}</p>
    </div>
  );
}

function SectionEyebrow({ number, title }: { number: string; title: string }) {
  return (
    <div className="sticky top-28 h-fit">
      <div className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[.2em] text-violet-300">
        <span>{number}</span>
        <span className="h-px w-10 bg-violet-300/30" />
      </div>
      <h2 className="text-4xl font-black tracking-[-.04em] sm:text-5xl">
        {title}
      </h2>
    </div>
  );
}

function Field({
  label,
  name,
  placeholder,
  type = "text",
}: {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <div>
      <label className="mb-2 block text-xs font-medium text-zinc-500">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-700 focus:border-violet-300/40"
      />
    </div>
  );
}
