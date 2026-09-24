import { existsSync } from "node:fs";
import Image from "next/image";
import path from "node:path";
import Nav from "./components/Nav";
import Terminal from "./components/Terminal";
import Reveal from "./components/Reveal";
import Icon from "./components/Icon";
import Spotlight from "./components/Spotlight";
import CopyEmail from "./components/CopyEmail";
import LabGallery from "./components/LabGallery";
import BackToTop from "./components/BackToTop";
import photo from "../public/bishes.jpg";
import {
  profile,
  stats,
  skills,
  marquee,
  experience,
  featuredLab,
  projects,
  tickets,
  ticketSteps,
  education,
  certifications,
  extras,
} from "./data";

const hasResume = existsSync(path.join(process.cwd(), "public", profile.resume));

function SectionHeading({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <Reveal className="mb-12 max-w-2xl">
      <p className="mb-3 font-mono text-sm text-sky-400">
        <span className="text-slate-500">{"// "}</span>
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>
      {text && <p className="mt-4 text-lg text-slate-400">{text}</p>}
    </Reveal>
  );
}

export default function Home() {
  return (
    <>
      <Nav />
      <Spotlight />
      <BackToTop />

      {/* Animated background */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden>
        <div className="grid-bg absolute inset-0" />
        <div className="blob left-[-10%] top-[-10%] h-[520px] w-[520px] bg-sky-500/25" />
        <div className="blob blob-2 right-[-10%] top-[20%] h-[460px] w-[460px] bg-violet-500/20" />
        <div className="blob blob-3 bottom-[-15%] left-[30%] h-[500px] w-[500px] bg-emerald-500/10" />
      </div>

      <main id="top" className="relative">
        {/* ───────── Hero ───────── */}
        <section className="mx-auto grid min-h-[min(100svh,960px)] max-w-6xl grid-cols-[minmax(0,1fr)] items-center gap-12 px-5 pb-20 pt-32 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <div className="hero-in mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-1.5 text-sm text-emerald-300">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </span>
              Available now · Full work rights
            </div>

            <h1 className="hero-in text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-6xl" style={{ animationDelay: "100ms" }}>
              Hi, I&apos;m {profile.firstName}.
              <br />
              <span className="gradient-text">I keep people and their tech working.</span>
            </h1>

            <p className="hero-in mt-6 max-w-xl text-lg text-slate-400" style={{ animationDelay: "200ms" }}>
              IT Support professional in <span className="text-slate-200">{profile.location}</span> — Microsoft 365,
              Active Directory, Azure and Windows troubleshooting, with the patience and clear communication
              that makes a service desk great.
            </p>

            <div className="hero-in mt-8 flex flex-wrap gap-3" style={{ animationDelay: "300ms" }}>
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-400 to-violet-500 px-6 py-3 font-medium text-white shadow-lg shadow-sky-500/25 transition hover:shadow-sky-500/40"
              >
                Get in touch
                <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              {hasResume ? (
                <a
                  href={profile.resume}
                  download
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 font-medium text-white transition hover:border-white/40 hover:bg-white/5"
                >
                  <Icon name="download" className="h-4 w-4" />
                  Download resume
                </a>
              ) : (
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 font-medium text-white transition hover:border-white/40 hover:bg-white/5"
                >
                  <Icon name="linkedin" className="h-4 w-4" />
                  LinkedIn
                </a>
              )}
            </div>

            <div className="hero-in mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-500" style={{ animationDelay: "400ms" }}>
              <span className="inline-flex items-center gap-1.5"><Icon name="pin" className="h-4 w-4" />{profile.location}</span>
              <a href={profile.phoneHref} className="inline-flex items-center gap-1.5 transition-colors hover:text-white"><Icon name="phone" className="h-4 w-4" />{profile.phone}</a>
              <a href={profile.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 transition-colors hover:text-white"><Icon name="github" className="h-4 w-4" />GitHub</a>
              <span className="inline-flex items-center gap-1.5"><Icon name="check" className="h-4 w-4 text-emerald-400" />AZ-900 · MS-900</span>
              <span className="inline-flex items-center gap-1.5"><Icon name="check" className="h-4 w-4 text-emerald-400" />Driver&apos;s licence</span>
            </div>
          </div>

          <div className="hero-in relative pt-14 lg:pt-0" style={{ animationDelay: "250ms" }}>
            <div className="absolute right-4 top-0 z-10 lg:-top-14">
              <div className="avatar-ring relative h-28 w-28 rounded-full p-[3px] sm:h-32 sm:w-32">
                <Image
                  src={photo}
                  alt="Photo of Bishes Adhikari"
                  className="h-full w-full rounded-full border-4 border-[#070b14] object-cover"
                  sizes="128px"
                  preload
                  placeholder="blur"
                />
                <span className="absolute bottom-2 right-2 h-5 w-5 rounded-full border-4 border-[#070b14] bg-emerald-400" title="Available now" />
              </div>
            </div>
            <div className="float">
              <Terminal />
            </div>
          </div>
        </section>

        {/* ───────── Marquee ───────── */}
        <div className="marquee relative border-y border-white/5 bg-white/[0.02] py-5" aria-label="Technologies">
          <div className="marquee-track flex w-max gap-10">
            {[...marquee, ...marquee].map((item, i) => (
              <span key={i} className="flex items-center gap-10 whitespace-nowrap font-mono text-sm text-slate-400">
                {item}
                <span className="text-sky-500/60">◆</span>
              </span>
            ))}
          </div>
        </div>

        {/* ───────── About ───────── */}
        <section id="about" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-28">
          <div className="grid grid-cols-[minmax(0,1fr)] items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <SectionHeading eyebrow="about me" title="Friendly, methodical, and ready to help from day one." />
              <Reveal delay={100}>
                <p className="text-lg leading-relaxed text-slate-300">{profile.summary}</p>
                <p className="mt-4 text-lg leading-relaxed text-slate-400">
                  I hold AZ-900 and MS-900, am working towards AZ-104, and keep sharpening my skills in
                  hands-on Azure, Microsoft 365 and Linux labs. I&apos;m based in Launceston with full work
                  rights and can start immediately.
                </p>
              </Reveal>
            </div>
            <Reveal delay={150} className="mx-auto w-full max-w-sm">
              <div className="portrait relative">
                <div className="overflow-hidden rounded-3xl border border-white/10">
                  <Image
                    src={photo}
                    alt="Bishes Adhikari, IT Support professional"
                    className="h-auto w-full"
                    sizes="(min-width: 1024px) 384px, 90vw"
                    placeholder="blur"
                  />
                </div>
                <span className="chip absolute -left-4 top-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#0b1120]/90 px-4 py-2 text-sm text-slate-200 shadow-xl backdrop-blur">
                  <Icon name="pin" className="h-4 w-4 text-sky-400" /> {profile.location}
                </span>
                <span className="chip chip-2 absolute -right-4 bottom-10 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-[#0b1120]/90 px-4 py-2 text-sm text-emerald-300 shadow-xl backdrop-blur">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" /> Ready to start
                </span>
              </div>
            </Reveal>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 100}>
                <div className="card h-full p-6">
                  <p className="gradient-text text-4xl font-semibold">{s.value}</p>
                  <p className="mt-2 text-sm text-slate-400">{s.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ───────── Skills ───────── */}
        <section id="skills" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-28">
          <SectionHeading
            eyebrow="technical skills"
            title="The toolkit behind every closed ticket."
            text="From identity and access to hardware on the desk — the everyday skills a service desk runs on."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((group, i) => (
              <Reveal key={group.title} delay={(i % 3) * 100}>
                <div className="card group h-full p-6">
                  <div className="mb-5 grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-sky-400/20 to-violet-500/20 text-sky-300 ring-1 ring-white/10 transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110">
                    <Icon name={group.icon} />
                  </div>
                  <h3 className="mb-4 text-lg font-semibold text-white">{group.title}</h3>
                  <ul className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ───────── How I work ───────── */}
        <section className="mx-auto max-w-6xl px-5 py-28">
          <SectionHeading
            eyebrow="how I handle a ticket"
            title="Calm, clear and user-first."
            text="Good support isn't just fixing things — it's making people feel looked after while you do it."
          />
          <div className="relative grid gap-5 md:grid-cols-4">
            <div className="absolute left-0 right-0 top-[38px] hidden h-px bg-gradient-to-r from-sky-400/0 via-sky-400/40 to-violet-400/0 md:block" aria-hidden />
            {ticketSteps.map((p, i) => (
              <Reveal key={p.step} delay={i * 150}>
                <div className="relative">
                  <div className="relative z-10 mb-5 grid h-[76px] w-[76px] place-items-center rounded-2xl border border-white/10 bg-[#0b1120] font-mono text-xl text-sky-300 shadow-[0_0_40px_-10px] shadow-sky-500/40">
                    {p.step}
                  </div>
                  <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                  <p className="mt-2 text-slate-400">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ───────── Experience ───────── */}
        <section id="experience" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-28">
          <SectionHeading eyebrow="experience" title="Real users. Real tickets." />
          <div className="relative border-l border-white/10 pl-8 sm:pl-12">
            {experience.map((job) => (
              <Reveal key={job.role}>
                <div className="relative">
                  <span className="absolute -left-[41px] top-1.5 grid h-5 w-5 place-items-center rounded-full bg-sky-400/20 ring-4 ring-[#070b14] sm:-left-[57px]">
                    <span className="h-2 w-2 rounded-full bg-sky-400" />
                  </span>
                  <div className="card p-6 sm:p-8">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <h3 className="text-xl font-semibold text-white">{job.role}</h3>
                        <p className="text-sky-300">{job.org}</p>
                      </div>
                      <span className="rounded-full border border-white/10 px-3 py-1 font-mono text-xs text-slate-400">
                        {job.period}
                      </span>
                    </div>
                    <ul className="mt-6 space-y-3">
                      {job.points.map((pt) => (
                        <li key={pt} className="flex gap-3 text-slate-300">
                          <Icon name="check" className="mt-1 h-4 w-4 shrink-0 text-emerald-400" />
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
            {education.map((ed, i) => (
              <Reveal key={ed.title} delay={i * 100} className="mt-8">
                <div className="relative">
                  <span className="absolute -left-[41px] top-1.5 grid h-5 w-5 place-items-center rounded-full bg-violet-400/20 ring-4 ring-[#070b14] sm:-left-[57px]">
                    <span className="h-2 w-2 rounded-full bg-violet-400" />
                  </span>
                  <div className="card flex flex-wrap items-center justify-between gap-3 p-6">
                    <div className="flex items-center gap-4">
                      <Icon name="cap" className="h-6 w-6 text-violet-300" />
                      <div>
                        <h3 className="font-semibold text-white">{ed.title}</h3>
                        <p className="text-sm text-slate-400">{ed.org}</p>
                      </div>
                    </div>
                    <span className="rounded-full border border-white/10 px-3 py-1 font-mono text-xs text-slate-400">
                      {ed.period}
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ───────── Solved tickets ───────── */}
        <section id="tickets" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-28">
          <SectionHeading
            eyebrow="solved tickets"
            title="Problems I've actually fixed."
            text="Real support scenarios from my internship and homelab: what went wrong, what I did, and how it ended."
          />
          <div className="grid gap-5 md:grid-cols-2">
            {tickets.map((t, i) => (
              <Reveal key={t.id} delay={(i % 2) * 120}>
                <article className="card ticket group relative h-full p-7">
                  <div className="flex flex-wrap items-center gap-2 pr-24 font-mono text-xs">
                    <span className="text-slate-500">#{t.id}</span>
                    <span
                      className={`rounded-full px-2.5 py-0.5 ${
                        t.priority === "High"
                          ? "bg-rose-400/10 text-rose-300"
                          : t.priority === "Medium"
                            ? "bg-amber-400/10 text-amber-300"
                            : "bg-sky-400/10 text-sky-300"
                      }`}
                    >
                      {t.priority}
                    </span>
                    <span className="rounded-full bg-white/5 px-2.5 py-0.5 text-slate-400">{t.category}</span>
                    <span className="rounded-full bg-white/5 px-2.5 py-0.5 text-slate-400">{t.source}</span>
                  </div>
                  <span className="stamp absolute right-5 top-5 rotate-[-12deg] rounded-md border-2 border-emerald-400/70 px-2.5 py-1 font-mono text-xs font-bold tracking-widest text-emerald-400/90">
                    RESOLVED
                  </span>
                  <h3 className="mt-5 text-lg font-semibold leading-snug text-white">{t.title}</h3>
                  <dl className="mt-5 space-y-4 text-sm leading-relaxed">
                    <div>
                      <dt className="mb-1 font-mono text-xs uppercase tracking-wider text-rose-300/80">Problem</dt>
                      <dd className="text-slate-400">{t.problem}</dd>
                    </div>
                    <div>
                      <dt className="mb-1 font-mono text-xs uppercase tracking-wider text-sky-300/80">What I did</dt>
                      <dd className="text-slate-300">{t.action}</dd>
                    </div>
                    <div>
                      <dt className="mb-1 font-mono text-xs uppercase tracking-wider text-emerald-300/80">Result</dt>
                      <dd className="text-slate-200">{t.result}</dd>
                    </div>
                  </dl>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ───────── Projects ───────── */}
        <section id="projects" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-28">
          <SectionHeading
            eyebrow="hands-on labs · 2025–2026"
            title="Always building, always breaking (safely)."
            text="Ongoing lab environments where I practise the exact tasks a service desk handles every day."
          />
          <Reveal className="mb-5">
            <article className="card grid gap-8 p-7 sm:p-9 lg:grid-cols-[1fr_1.15fr]">
              <div className="flex flex-col">
                <span className="w-fit rounded-full bg-emerald-400/10 px-3 py-1 font-mono text-xs text-emerald-300">{featuredLab.tag}</span>
                <h3 className="mt-5 text-2xl font-semibold text-white">{featuredLab.title}</h3>
                <p className="mt-3 text-slate-400">{featuredLab.description}</p>
                <ul className="mt-6 space-y-3">
                  {featuredLab.points.map((pt) => (
                    <li key={pt} className="flex gap-3 text-sm text-slate-300">
                      <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                      {pt}
                    </li>
                  ))}
                </ul>
                <ul className="mt-auto flex flex-wrap gap-2 pt-6">
                  {featuredLab.tech.map((t) => (
                    <li key={t} className="font-mono text-xs text-slate-500">#{t.replace(/\s+/g, "")}</li>
                  ))}
                </ul>
              </div>
              <LabGallery images={featuredLab.images} />
            </article>
          </Reveal>
          <div className="grid gap-5 lg:grid-cols-3">
            {projects.map((p, i) => (
              <Reveal key={p.title} delay={i * 120}>
                <article className="card group flex h-full flex-col p-7 transition-transform duration-300 hover:-translate-y-1.5">
                  <div className="mb-6 flex items-center justify-between">
                    <span className="rounded-full bg-sky-400/10 px-3 py-1 font-mono text-xs text-sky-300">{p.tag}</span>
                    <span className="font-mono text-xs text-slate-600">0{i + 2}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white">{p.title}</h3>
                  <p className="mt-3 flex-1 text-slate-400">{p.description}</p>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <li key={t} className="font-mono text-xs text-slate-500">#{t.replace(/\s+/g, "")}</li>
                    ))}
                  </ul>
                  {p.href && (
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-5 inline-flex items-center gap-2 text-sm text-sky-300 hover:text-sky-200"
                    >
                      <Icon name="github" className="h-4 w-4" /> View my GitHub
                      <Icon name="arrow" className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </a>
                  )}
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ───────── Certifications ───────── */}
        <section id="certifications" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-28">
          <SectionHeading eyebrow="certifications" title="Microsoft-certified, and levelling up." />
          <div className="grid gap-5 md:grid-cols-3">
            {certifications.map((c, i) => (
              <Reveal key={c.code} delay={i * 120}>
                <div className={`card h-full p-7 ${c.done ? "" : "cert-pending"}`}>
                  <div className="flex items-center justify-between">
                    <span className="badge-hex grid h-16 w-16 place-items-center bg-gradient-to-br from-sky-400 to-violet-500 font-mono text-sm font-semibold text-white">
                      {c.code}
                    </span>
                    {c.done ? (
                      <span className="inline-flex items-center gap-1 rounded-full bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">
                        <Icon name="check" className="h-3.5 w-3.5" /> Certified
                      </span>
                    ) : (
                      <span className="rounded-full bg-amber-400/10 px-3 py-1 text-xs text-amber-300">In progress</span>
                    )}
                  </div>
                  <h3 className="mt-6 text-lg font-semibold text-white">{c.name}</h3>
                  <p className="mt-1 text-sm text-slate-400">{c.status}</p>
                  <div className="mt-6 h-1.5 overflow-hidden rounded-full bg-white/5">
                    <div className={c.done ? "h-full w-full bg-gradient-to-r from-emerald-400 to-sky-400" : "progress-indeterminate h-full"} />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10">
            <ul className="flex flex-wrap gap-3">
              {extras.map((e) => (
                <li key={e} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
                  <Icon name="check" className="h-4 w-4 text-emerald-400" /> {e}
                </li>
              ))}
            </ul>
          </Reveal>
        </section>

        {/* ───────── Contact ───────── */}
        <section id="contact" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-28">
          <Reveal>
            <div className="contact-card relative overflow-hidden rounded-3xl border border-white/10 p-10 text-center sm:p-16">
              <p className="font-mono text-sm text-sky-400">
                <span className="text-slate-500">$ </span>new-ticket --priority high
              </p>
              <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                Need someone reliable on your service desk?
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-lg text-slate-400">
                I&apos;m looking for IT Support, Service Desk and Desktop Support roles in Tasmania. Let&apos;s talk —
                I usually reply within a day.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-3">
                <a
                  href={`mailto:${profile.email}?subject=IT%20Support%20opportunity`}
                  className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-medium text-slate-900 transition hover:bg-sky-100"
                >
                  <Icon name="mail" className="h-4 w-4" />
                  {profile.email}
                </a>
                <a
                  href={profile.phoneHref}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 font-medium text-white transition hover:border-white/40 hover:bg-white/5"
                >
                  <Icon name="phone" className="h-4 w-4" />
                  {profile.phone}
                </a>
                <CopyEmail email={profile.email} />
                {hasResume && (
                  <a
                    href={profile.resume}
                    download
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 font-medium text-white transition hover:border-white/40 hover:bg-white/5"
                  >
                    <Icon name="download" className="h-4 w-4" />
                    Resume
                  </a>
                )}
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 font-medium text-white transition hover:border-white/40 hover:bg-white/5"
                >
                  <Icon name="linkedin" className="h-4 w-4" />
                  LinkedIn
                </a>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 font-medium text-white transition hover:border-white/40 hover:bg-white/5"
                >
                  <Icon name="github" className="h-4 w-4" />
                  GitHub
                </a>
              </div>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="border-t border-white/5 px-5 py-8 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} {profile.name} · {profile.location} · Built with Next.js
      </footer>
    </>
  );
}
