import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import Magnetic from "./Magnetic";
import { GITHUB_URL } from "../data";
import { GithubIcon } from "./icons";

const EASE = [0.22, 1, 0.36, 1] as const;

function LineReveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <span className="block overflow-hidden">
      <motion.span
        initial={{ y: "112%" }}
        animate={{ y: 0 }}
        transition={{ duration: 1.1, delay, ease: EASE }}
        className={`block ${className ?? ""}`}
      >
        {children}
      </motion.span>
    </span>
  );
}

function OrbitBadge() {
  return (
    <div className="relative hidden h-36 w-36 items-center justify-center lg:flex">
      <svg viewBox="0 0 100 100" className="animate-spin-slow absolute inset-0">
        <defs>
          <path
            id="circlePath"
            d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
          />
        </defs>
        <text className="fill-fog font-mono text-[8px] uppercase tracking-[0.32em]">
          <textPath href="#circlePath">
            Available for work • Open to opportunities •
          </textPath>
        </text>
      </svg>
      <a
        href="#work"
        data-hover
        aria-label="Scroll to work"
        className="flex h-12 w-12 items-center justify-center rounded-full border border-line text-paper transition-colors hover:border-accent hover:bg-accent hover:text-ink"
      >
        <ArrowDown size={18} />
      </a>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col justify-end overflow-hidden"
    >
      {/* backdrop */}
      <div className="hero-grid pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute -top-48 right-[-15%] h-[62vh] w-[62vw] rounded-full bg-accent/15 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-[-30%] left-[-10%] h-[50vh] w-[45vw] rounded-full bg-accent/8 blur-[120px]" />

      <div className="relative px-6 pb-10 pt-36 md:px-10 md:pt-44">
        {/* top mono row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.95, ease: EASE }}
          className="mb-8 flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.35em] text-fog md:mb-12"
        >
          <span className="flex items-center gap-3">
            <span className="h-px w-10 bg-accent" />
            Front-End Developer
          </span>
          <span className="hidden md:block">Folio — Vol. 01</span>
        </motion.div>

        {/* headline */}
        <h1 className="font-display text-[clamp(3.9rem,14.5vw,13rem)] font-extrabold uppercase leading-[0.85] tracking-[-0.02em]">
          <LineReveal delay={0.45}>Awal</LineReveal>
          <LineReveal delay={0.58} className="text-outline">
            Lasisi<span className="text-accent [-webkit-text-stroke:0]">.</span>
          </LineReveal>
        </h1>

        {/* sub row */}
        <div className="mt-10 flex flex-wrap items-end justify-between gap-10 md:mt-14">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.05, ease: EASE }}
            className="max-w-xl"
          >
            <p className="text-base leading-relaxed text-fog md:text-lg">
              Junior front-end developer turning ideas into{" "}
              <span className="text-paper">
                fast, responsive, interactive web experiences
              </span>{" "}
              — from storytelling landing pages to full-stack apps — with{" "}
              <span className="text-paper">
                HTML/CSS, JavaScript, React, TypeScript
              </span>{" "}
              and <span className="text-paper">Node.js</span>.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Magnetic>
                <a
                  href="#work"
                  data-hover
                  className="group flex items-center gap-3 rounded-full bg-accent px-7 py-4 font-display text-sm font-bold uppercase tracking-wide text-ink transition-colors hover:bg-paper"
                >
                  View selected work
                  <ArrowDown
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-y-1"
                  />
                </a>
              </Magnetic>
              <Magnetic>
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-hover
                  className="group flex items-center gap-3 rounded-full border border-line px-7 py-4 font-display text-sm font-bold uppercase tracking-wide text-paper transition-colors hover:border-accent hover:text-accent"
                >
                  <GithubIcon size={16} />
                  GitHub
                  <ArrowUpRight
                    size={15}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
              </Magnetic>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 1.2, ease: EASE }}
          >
            <OrbitBadge />
          </motion.div>
        </div>

        {/* stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.35 }}
          className="mt-14 grid grid-cols-2 gap-6 border-t border-line pt-7 md:grid-cols-3 md:gap-10"
        >
          {[
            { value: "04", label: "Shipped projects" },
            { value: "09+", label: "Tools & technologies" },
            { value: "100%", label: "Passion for the craft" },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className={`flex items-baseline gap-3 ${i === 2 ? "max-md:col-span-2" : ""}`}
            >
              <span className="font-display text-2xl font-bold text-paper md:text-3xl">
                {stat.value}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-fog">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
