import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { GITHUB_URL, LINKEDIN_URL } from "../data";

export default function Footer() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const tick = () => {
      setTime(
        new Date().toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        })
      );
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <footer className="border-t border-line">
      {/* giant ghost wordmark */}
      <div className="overflow-hidden border-b border-line py-6">
        <div className="animate-marquee-slow flex w-max items-center gap-10">
          {Array.from({ length: 6 }).map((_, i) => (
            <span
              key={i}
              className="text-outline-faint whitespace-nowrap font-display text-[13vw] font-extrabold uppercase leading-none tracking-tight md:text-[7vw]"
            >
              Awal Lasisi <span className="text-accent [-webkit-text-stroke:0]">®</span>
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center justify-between gap-5 px-6 py-8 font-mono text-[10px] uppercase tracking-[0.28em] text-fog md:flex-row md:px-10">
        <span>© 2025 Awal Lasisi — All rights reserved</span>

        <span className="tabular-nums">
          Local time — <span className="text-accent">{time}</span>
        </span>

        <div className="flex items-center gap-6">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-hover
            className="link-underline transition-colors hover:text-paper"
          >
            GitHub
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-hover
            className="link-underline transition-colors hover:text-paper"
          >
            LinkedIn
          </a>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            data-hover
            aria-label="Back to top"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-paper transition-colors hover:border-accent hover:bg-accent hover:text-ink"
          >
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
