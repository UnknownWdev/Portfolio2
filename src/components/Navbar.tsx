import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { GITHUB_URL, LINKEDIN_URL } from "../data";
import { GithubIcon, LinkedinIcon } from "./icons";

const LINKS = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-[80] transition-all duration-500 ${
          scrolled
            ? "border-b border-line bg-ink/75 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-4 md:px-10 md:py-5">
          <a
            href="#top"
            data-hover
            className="group flex items-center gap-2.5 font-display text-lg font-bold tracking-tight"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-accent font-display text-sm font-extrabold text-ink transition-transform duration-500 group-hover:rotate-[360deg]">
              A
            </span>
            <span>
              awal<span className="text-accent">.</span>lasisi
            </span>
          </a>

          <nav className="hidden items-center gap-9 md:flex">
            {LINKS.map((link, i) => (
              <a
                key={link.label}
                href={link.href}
                data-hover
                className="link-underline font-mono text-[11px] uppercase tracking-[0.3em] text-fog transition-colors hover:text-paper"
              >
                <span className="mr-1.5 text-accent">0{i + 1}</span>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden items-center gap-2.5 rounded-full border border-line px-4 py-2 sm:flex">
              <span className="animate-pulse-dot h-1.5 w-1.5 rounded-full bg-green-400" />
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-fog">
                Open to work
              </span>
            </div>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              data-hover
              className="hidden h-9 w-9 items-center justify-center rounded-full border border-line text-fog transition-colors hover:border-accent hover:text-accent sm:flex"
            >
              <GithubIcon size={15} />
            </a>
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              data-hover
              className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-paper transition-colors hover:border-accent hover:text-accent md:hidden"
            >
              <Menu size={16} />
            </button>
          </div>
        </div>
      </motion.header>

      {/* mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[110] flex flex-col bg-coal px-8 pb-10 pt-5 md:hidden"
          >
            <div className="flex items-center justify-between">
              <span className="font-display text-lg font-bold">
                awal<span className="text-accent">.</span>lasisi
              </span>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-line hover:border-accent hover:text-accent"
              >
                <X size={18} />
              </button>
            </div>

            <nav className="mt-16 flex flex-col gap-2">
              {LINKS.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.25 + i * 0.08, duration: 0.5 }}
                  className="group flex items-baseline gap-4 border-b border-line py-5"
                >
                  <span className="font-mono text-xs text-accent">
                    0{i + 1}
                  </span>
                  <span className="font-display text-4xl font-extrabold uppercase tracking-tight transition-colors group-hover:text-accent">
                    {link.label}
                  </span>
                  <ArrowUpRight
                    size={22}
                    className="ml-auto text-fog transition-colors group-hover:text-accent"
                  />
                </motion.a>
              ))}
            </nav>

            <div className="mt-auto flex gap-3">
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-1 items-center justify-center gap-2 rounded-full border border-line py-3.5 font-mono text-[11px] uppercase tracking-[0.25em]"
              >
                <GithubIcon size={14} /> GitHub
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-1 items-center justify-center gap-2 rounded-full bg-accent py-3.5 font-mono text-[11px] uppercase tracking-[0.25em] text-ink"
              >
                <LinkedinIcon size={14} /> LinkedIn
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
