import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Reveal, { Eyebrow } from "./Reveal";
import { PROJECTS, type Project } from "../data";

function Shot({ project }: { project: Project }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-7%", "7%"]);

  return (
    <div
      ref={ref}
      className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-line bg-coal"
    >
      {/* gradient fallback behind screenshot */}
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{
          background: `radial-gradient(circle at 30% 30%, ${project.tint}cc, #0c0c0a 78%)`,
        }}
      >
        <span className="text-outline-faint font-display text-[18vw] font-extrabold uppercase md:text-[9vw]">
          {project.index}
        </span>
      </div>

      <motion.div style={{ y }} className="absolute inset-0">
        <img
          src={project.screenshot}
          alt={`${project.title} — live site preview`}
          loading="lazy"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
          className="h-full w-full scale-[1.16] object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.22]"
        />
      </motion.div>

      {/* overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-transparent opacity-60" />

      <span className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-paper/15 bg-ink/60 px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.25em] text-paper backdrop-blur-md">
        <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
        Live site
      </span>

      <span className="absolute right-4 top-4 flex h-12 w-12 translate-y-2 items-center justify-center rounded-full bg-accent text-ink opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100">
        <ArrowUpRight size={20} />
      </span>
    </div>
  );
}

function ProjectCard({
  project,
  flip,
}: {
  project: Project;
  flip: boolean;
}) {
  return (
    <article className="grid items-center gap-8 md:grid-cols-12 md:gap-12">
      <Reveal
        className={`md:col-span-7 ${flip ? "md:order-2" : ""}`}
        y={60}
      >
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          data-hover
          className="group block"
        >
          <Shot project={project} />
        </a>
      </Reveal>

      <div className={`md:col-span-5 ${flip ? "md:order-1" : ""}`}>
        <Reveal delay={0.08}>
          <div className="flex items-baseline gap-4">
            <span className="font-display text-5xl font-extrabold text-outline-faint md:text-6xl">
              {project.index}
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent">
              {project.category}
            </span>
          </div>

          <h3 className="mt-5 font-display text-3xl font-bold leading-tight tracking-tight md:text-4xl">
            {project.title}
          </h3>

          <p className="mt-4 max-w-md leading-relaxed text-fog">
            {project.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-line px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-fog transition-colors hover:border-accent/60 hover:text-paper"
              >
                {tag}
              </span>
            ))}
          </div>

          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            data-hover
            className="group/link mt-8 inline-flex items-center gap-3 font-display text-sm font-bold uppercase tracking-wide text-paper"
          >
            <span className="link-underline">Visit live site</span>
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-line transition-all duration-300 group-hover/link:rotate-45 group-hover/link:border-accent group-hover/link:bg-accent group-hover/link:text-ink">
              <ArrowUpRight size={16} />
            </span>
          </a>
        </Reveal>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="work" className="scroll-mt-24 px-6 py-28 md:px-10 md:py-40">
      <div className="mb-16 md:mb-24">
        <Eyebrow index="01" label="Selected Work" />
        <Reveal delay={0.05}>
          <h2 className="mt-6 font-display text-[clamp(2.6rem,7.5vw,6.5rem)] font-extrabold uppercase leading-[0.9] tracking-tight">
            Things I've
            <span className="text-outline"> Built</span>
            <sup className="ml-3 align-super font-mono text-sm font-normal tracking-[0.2em] text-accent md:text-base">
              (04)
            </sup>
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mt-6 max-w-xl text-fog">
            A curated selection of live projects — each one designed, built and
            deployed end to end. Click any card to explore the real thing.
          </p>
        </Reveal>
      </div>

      <div className="space-y-24 md:space-y-36">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.url} project={project} flip={i % 2 === 1} />
        ))}
      </div>
    </section>
  );
}
