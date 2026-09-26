import { motion } from "framer-motion";
import {
  Atom,
  Braces,
  FileCode2,
  FileType,
  PenTool,
  GitBranch,
  Hexagon,
  Palette,
  Server,
  Triangle,
  Wind,
  Zap,
  type LucideIcon,
} from "lucide-react";
import Reveal, { Eyebrow } from "./Reveal";
import { SKILLS } from "../data";

interface Tool {
  name: string;
  icon: LucideIcon;
}

const TOOLS: Tool[] = [
  { name: "HTML5", icon: FileCode2 },
  { name: "CSS3", icon: Palette },
  { name: "JavaScript", icon: Braces },
  { name: "TypeScript", icon: FileType },
  { name: "React", icon: Atom },
  { name: "Node.js", icon: Hexagon },
  { name: "Express", icon: Server },
  { name: "Tailwind CSS", icon: Wind },
  { name: "Vite", icon: Zap },
  { name: "Git", icon: GitBranch },
  { name: "Vercel", icon: Triangle },
  { name: "Figma", icon: PenTool },
];

function CodeCard() {
  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-coal shadow-2xl shadow-black/50">
      <div className="flex items-center gap-2 border-b border-line px-5 py-3.5">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        <span className="ml-3 font-mono text-[11px] tracking-widest text-fog">
          about.ts
        </span>
      </div>
      <pre className="overflow-x-auto p-6 font-mono text-[12.5px] leading-7 md:text-[13px]">
        <code>
          <span className="text-accent">const</span>{" "}
          <span className="text-paper">developer</span>{" "}
          <span className="text-fog">=</span>{" "}
          <span className="text-paper">{"{"}</span>
          {"\n"}  <span className="text-accent-soft">name</span>
          <span className="text-fog">:</span>{" "}
          <span className="text-paper">'Awal Lasisi'</span>
          <span className="text-fog">,</span>
          {"\n"}  <span className="text-accent-soft">role</span>
          <span className="text-fog">:</span>{" "}
          <span className="text-paper">'Junior Front-End Developer'</span>
          <span className="text-fog">,</span>
          {"\n"}  <span className="text-accent-soft">stack</span>
          <span className="text-fog">:</span>{" "}
          <span className="text-paper">[</span>
          <span className="text-paper">'React'</span>
          <span className="text-fog">,</span>{" "}
          <span className="text-paper">'TypeScript'</span>
          <span className="text-fog">,</span>{" "}
          <span className="text-paper">'Node.js'</span>
          <span className="text-paper">]</span>
          <span className="text-fog">,</span>
          {"\n"}  <span className="text-accent-soft">focus</span>
          <span className="text-fog">:</span>{" "}
          <span className="text-paper">'pixel-perfect, interactive UI'</span>
          <span className="text-fog">,</span>
          {"\n"}  <span className="text-accent-soft">location</span>
          <span className="text-fog">:</span>{" "}
          <span className="text-paper">'Remote-ready'</span>
          <span className="text-fog">,</span>
          {"\n"}  <span className="text-accent-soft">openToWork</span>
          <span className="text-fog">:</span>{" "}
          <span className="text-accent">true</span>
          <span className="text-fog">,</span>
          {"\n"}
          <span className="text-paper">{"}"}</span>
          <span className="text-fog">;</span>
          {"\n"}
          {"\n"}
          <span className="text-fog">
            {"// currently shipping ideas to Vercel ..."}
          </span>
        </code>
      </pre>
    </div>
  );
}

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 border-t border-line px-6 py-28 md:px-10 md:py-40"
    >
      <Eyebrow index="02" label="About & Skills" />

      <div className="mt-14 grid gap-16 lg:grid-cols-12 lg:gap-12">
        {/* left column */}
        <div className="space-y-10 lg:col-span-5">
          <Reveal>
            <CodeCard />
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-line bg-coal p-6">
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
                Currently
              </span>
              <p className="mt-3 text-sm leading-relaxed text-fog">
                Open to{" "}
                <span className="text-paper">junior front-end roles</span>,
                internships and freelance projects — anywhere a curious
                developer can grow and ship great work.
              </p>
            </div>
          </Reveal>
        </div>

        {/* right column */}
        <div className="lg:col-span-7">
          <Reveal>
            <h2 className="font-display text-[clamp(1.9rem,4.2vw,3.4rem)] font-bold leading-[1.08] tracking-tight">
              A design-minded developer who{" "}
              <span className="text-accent">ships</span>.
            </h2>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="mt-6 max-w-2xl leading-relaxed text-fog">
              I'm Awal — a junior front-end developer who loves the space
              where design meets engineering. I build interfaces that don't
              just work, but <span className="text-paper">feel</span> right:
              responsive layouts, smooth motion, and details that reward a
              second look.
            </p>
            <p className="mt-4 max-w-2xl leading-relaxed text-fog">
              My day-to-day toolkit is{" "}
              <span className="text-paper">HTML/CSS and JavaScript</span>,
              with <span className="text-paper">React</span> and{" "}
              <span className="text-paper">TypeScript</span> for building
              robust component-driven UIs, and{" "}
              <span className="text-paper">Node.js</span> when a project
              needs a back end. Every project below is designed, coded and
              deployed by me — from concept to a live Vercel URL.
            </p>
          </Reveal>

          {/* skill bars */}
          <div className="mt-12 grid gap-x-12 gap-y-7 sm:grid-cols-2">
            {SKILLS.map((skill, i) => (
              <div key={skill.name}>
                <div className="mb-2.5 flex items-center justify-between">
                  <span className="font-mono text-xs uppercase tracking-[0.25em] text-paper">
                    {skill.name}
                  </span>
                  <span className="font-mono text-xs text-accent">
                    {skill.level}%
                  </span>
                </div>
                <div className="h-[3px] w-full overflow-hidden rounded-full bg-paper/10">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{
                      duration: 1.2,
                      delay: 0.1 + i * 0.07,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="h-full rounded-full bg-gradient-to-r from-accent to-accent-soft"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* toolbox */}
          <Reveal delay={0.1}>
            <h3 className="mt-14 font-mono text-[10px] uppercase tracking-[0.35em] text-fog">
              My toolbox
            </h3>
            <div className="mt-5 flex flex-wrap gap-2.5">
              {TOOLS.map((tool) => (
                <span
                  key={tool.name}
                  data-hover
                  className="group flex items-center gap-2 rounded-full border border-line bg-coal px-4 py-2.5 text-sm text-fog transition-all duration-300 hover:-translate-y-1 hover:border-accent/60 hover:text-paper"
                >
                  <tool.icon
                    size={15}
                    className="text-accent transition-transform duration-300 group-hover:scale-110"
                  />
                  {tool.name}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
