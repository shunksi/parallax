import { useEffect, useRef, useState } from "react";
import character from "@/assets/cyber-character.png";

const faces = [
  { transform: "translateZ(110px)", label: "</>" },
  { transform: "rotateY(90deg) translateZ(110px)", label: "♡" },
  { transform: "rotateY(180deg) translateZ(110px)", label: "✿" },
  { transform: "rotateY(-90deg) translateZ(110px)", label: "{ }" },
  { transform: "rotateX(90deg) translateZ(110px)", label: "✧" },
  { transform: "rotateX(-90deg) translateZ(110px)", label: "☁" },
];

export function Hero3D() {
  const [pointer, setPointer] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      setPointer({
        x: e.clientX / window.innerWidth - 0.5,
        y: e.clientY / window.innerHeight - 0.5,
      });
    };
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <section
      ref={ref}
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* parallax layers */}
      <div
        className="grid-mesh pointer-events-none absolute inset-[-10%] opacity-60"
        style={{ transform: `translate3d(${pointer.x * -20}px, ${scrollY * 0.15}px, 0)` }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-1/2 top-1/3 h-[38rem] w-[38rem] -translate-x-1/2 rounded-full opacity-25 blur-[120px]"
        style={{
          background: "var(--gradient-rose)",
          transform: `translate3d(calc(-50% + ${pointer.x * 40}px), ${scrollY * 0.3}px, 0)`,
        }}
        aria-hidden
      />


      <div
        className="relative z-10 mx-auto w-full max-w-6xl px-6"
        style={{ transform: `translateY(${scrollY * -0.12}px)`, opacity: Math.max(0, 1 - scrollY / 700) }}
      >
        <div className="grid items-center gap-14 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.3em] text-primary">
              <span className="sparkle">✧</span> available for contracts
            </p>
            <h1 className="mt-6 text-5xl font-bold leading-[1] sm:text-7xl">
              Shank
              <span className="block text-rose-gradient">Fullstack Developer ♡</span>
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
              I build reliable, end-to-end web applications with a focus on performance, scalability, and thoughtful user experience. ✿
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#work"
                className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-1 hover:rotate-1"
              >
                View my work ✨
              </a>
              <a
                href="#contact"
                className="rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
              >
                Say hi 💌
              </a>
            </div>
          </div>

          {/* CSS 3D rotating code cube */}
          <div
            className="flex justify-center md:justify-start"
            style={{ perspective: "900px" }}
          >
            <div
              className="relative h-[220px] w-[220px] scale-[0.6] sm:scale-75 md:scale-100 origin-center"
              style={{
                transformStyle: "preserve-3d",
                animation: "spin-y 22s linear infinite",
                rotate: `${pointer.y * 12}deg`,
              }}
            >
              {faces.map((f) => (
                <div
                  key={f.label}
                  className="absolute inset-0 flex items-center justify-center rounded-3xl border border-primary/40 bg-card/50 font-mono text-xl sm:text-2xl md:text-3xl text-primary backdrop-blur-sm"
                  style={{
                    transform: f.transform,
                    boxShadow: "var(--shadow-rose)",
                  }}
                >
                  {f.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40" style={{ background: "var(--gradient-veil)" }} aria-hidden />
    </section>
  );
}
