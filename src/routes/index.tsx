import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Hero3D } from "@/components/Hero3D";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SHANK — Fullstack Developer Portfolio" },
      {
        name: "description",
        content:
          "Fullstack developer building typed APIs, real-time data planes and precise interfaces. Selected work, stack and contact.",
      },
      { property: "og:title", content: "Shank — Fullstack Developer" },
      {
        property: "og:description",
        content: "Fullstack engineer: typed APIs, real-time systems and precise product interfaces.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const projects = [
  {
    emoji: "🌸",
    name: "Nullgate",
    tag: "Realtime edge gateway",
    desc: "Multi-tenant API gateway with per-key rate limiting and sub-10ms edge routing.",
    stack: ["TypeScript", "Rust", "Postgres"],
  },
  {
    emoji: "🎀",
    name: "Sable UI",
    tag: "Design system",
    desc: "Headless component library and token pipeline shared across four product teams.",
    stack: ["React", "Tailwind", "Storybook"],
  },
  {
    emoji: "🧸",
    name: "Deckard",
    tag: "Event pipeline",
    desc: "Streaming ingestion handling 40M events/day with replayable, exactly-once sinks.",
    stack: ["Go", "Kafka", "ClickHouse"],
  },
  {
    emoji: "💖",
    name: "Ghostline",
    tag: "Ops console",
    desc: "Incident console with live traces, on-call routing and a keyboard-first command layer.",
    stack: ["Next.js", "tRPC", "Redis"],
  },
];

const stack = [
  { group: "Frontend", items: ["React", "TypeScript", "Tailwind", "Motion"] },
  { group: "Backend", items: ["Node", "Go", "GraphQL", "REST"] },
  { group: "Data", items: ["Postgres", "Redis", "ClickHouse", "Kafka"] },
  { group: "Platform", items: ["Docker", "Terraform", "AWS", "CI/CD"] },
];

function useParallax() {
  const [y, setY] = useState(0);
  useEffect(() => {
    const onScroll = () => setY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return y;
}

function Index() {
  const y = useParallax();

  return (
    <main className="relative">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#home" className="font-mono text-sm tracking-[0.3em] text-primary">
            S<span className="text-foreground">♡</span>DEV
          </a>
          <div className="hidden gap-8 text-sm font-medium text-muted-foreground sm:flex">
            <a href="#work" className="transition-colors hover:text-primary">Work ✿</a>
            <a href="#stack" className="transition-colors hover:text-primary">Stack ✧</a>
            <a href="#contact" className="transition-colors hover:text-primary">Contact 💌</a>
          </div>
        </nav>
      </header>

      <Hero3D />

      <section id="work" className="relative overflow-hidden border-t border-border/60 py-28">
        <div
          className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full opacity-[0.12] blur-[100px]"
          style={{ background: "var(--gradient-rose)", transform: `translateY(${y * -0.06}px)` }}
          aria-hidden
        />
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex items-end justify-between gap-6">
            <h2 className="text-3xl font-bold sm:text-4xl">Selected work 🌷</h2>
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
              2021 — 2026
            </span>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {projects.map((p, i) => (
              <article
                key={p.name}
                className="group relative overflow-hidden rounded-3xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:rotate-[-0.6deg] hover:border-primary/60"
                style={{ transform: `translateY(${Math.max(-24, (y - 700) * -0.02 * (i % 2 ? 1.6 : 0.8))}px)` }}
              >
                <div className="flex items-center justify-between">
                  <span className="bounce-soft text-2xl" role="img" aria-label={p.name}>{p.emoji}</span>
                  <span className="rounded-full bg-primary/10 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.25em] text-primary">
                    {p.tag}
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold">{p.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <li
                      key={s}
                      className="rounded-full border border-border bg-surface-raised px-3 py-1 font-mono text-[11px] text-muted-foreground"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="stack" className="relative overflow-hidden border-t border-border/60 py-28">
        <div
          className="grid-mesh pointer-events-none absolute inset-0 opacity-40"
          style={{ transform: `translateY(${y * 0.05}px)` }}
          aria-hidden
        />
        <div className="relative mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold sm:text-4xl">
            My toolbox <span role="img" aria-label="sparkling laptop">💻✨</span>
          </h2>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground">
            Twelve years shipping products end to end — from schema design and infrastructure to
            the very last, very cute pixel. 🌷
          </p>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stack.map((s) => (
              <div key={s.group} className="rounded-3xl border border-border bg-card p-7 transition-transform hover:-translate-y-1">
                <h3 className="font-mono text-[11px] uppercase tracking-[0.3em] text-primary">
                  {s.group}
                </h3>
                <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                  {s.items.map((i) => (
                    <li key={i}>♡ {i}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="relative border-t border-border/60 py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-[2.5rem] border border-primary/40 bg-card p-10 text-center sm:p-16" style={{ boxShadow: "var(--shadow-rose)" }}>
            <p className="font-mono text-xs uppercase tracking-[0.4em] text-primary">say hello 💌</p>
            <h2 className="mx-auto mt-6 max-w-xl text-3xl font-bold leading-tight sm:text-5xl">
              Got something sweet that needs building properly? ♡
            </h2>
            <a
              href="shunkcyber@gmail,com" className="mt-9 inline-block rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-1 hover:rotate-1"
            >
              kai@mercer.dev ✿
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-border/60 py-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span className="font-mono">© 2026 shank ♡</span>
          <span className="font-mono">Built with TypeScript, coffee & stuff✧</span>
        </div>
      </footer>
    </main>
  );
}
