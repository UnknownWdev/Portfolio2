import { ArrowUpRight } from "lucide-react";
import Reveal, { Eyebrow } from "./Reveal";
import Magnetic from "./Magnetic";
import { GithubIcon, LinkedinIcon } from "./icons";
import { GITHUB_URL, LINKEDIN_URL } from "../data";

const SOCIALS = [
  {
    name: "GitHub",
    handle: "@UnknownWdev",
    description:
      "Browse my repositories — the code behind every project on this page lives here.",
    cta: "Explore repos",
    url: GITHUB_URL,
    icon: GithubIcon,
  },
  {
    name: "LinkedIn",
    handle: "Awal Lasisi",
    description:
      "Let's connect professionally — open to junior front-end roles, internships and collaborations.",
    cta: "Connect with me",
    url: LINKEDIN_URL,
    icon: LinkedinIcon,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative scroll-mt-24 overflow-hidden border-t border-line px-6 py-28 md:px-10 md:py-40"
    >
      <div className="pointer-events-none absolute left-1/2 top-0 h-[50vh] w-[70vw] -translate-x-1/2 rounded-full bg-accent/10 blur-[140px]" />

      <div className="relative">
        <Eyebrow index="03" label="Contact" />

        <Reveal delay={0.05}>
          <h2 className="mt-8 max-w-5xl font-display text-[clamp(2.8rem,8.5vw,7.5rem)] font-extrabold uppercase leading-[0.9] tracking-tight">
            Let's build
            <br />
            <span className="text-outline">something</span>{" "}
            <span className="text-accent">great</span>
          </h2>
        </Reveal>

        <Reveal delay={0.12}>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-fog">
            Have a project in mind, a role to fill, or just want to talk
            front-end? My inbox and DMs are always open — the fastest way to
            reach me is through one of these.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {SOCIALS.map((social, i) => (
            <Reveal key={social.name} delay={0.1 + i * 0.08}>
              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                data-hover
                className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-line bg-coal p-8 transition-all duration-500 hover:-translate-y-1.5 hover:border-accent/60 md:p-10"
              >
                <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-accent/0 blur-3xl transition-all duration-700 group-hover:bg-accent/20" />

                <div className="flex items-start justify-between">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full border border-line text-paper transition-colors duration-500 group-hover:border-accent group-hover:bg-accent group-hover:text-ink">
                    <social.icon size={22} />
                  </span>
                  <ArrowUpRight
                    size={26}
                    className="text-fog transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent"
                  />
                </div>

                <div className="mt-12">
                  <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
                    {social.name}
                  </span>
                  <h3 className="mt-2 font-display text-2xl font-bold tracking-tight md:text-3xl">
                    {social.handle}
                  </h3>
                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-fog">
                    {social.description}
                  </p>
                  <span className="link-underline mt-6 inline-block font-display text-sm font-bold uppercase tracking-wide text-paper">
                    {social.cta}
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <div className="mt-14 flex justify-center">
            <Magnetic strength={0.5}>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-hover
                className="group flex h-36 w-36 flex-col items-center justify-center gap-2 rounded-full border border-accent/70 bg-accent/5 text-center transition-colors duration-500 hover:bg-accent hover:text-ink md:h-44 md:w-44"
              >
                <ArrowUpRight
                  size={22}
                  className="transition-transform duration-500 group-hover:rotate-45"
                />
                <span className="font-display text-xs font-bold uppercase tracking-[0.15em]">
                  Say hello
                </span>
              </a>
            </Magnetic>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
