import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}

export default function Reveal({
  children,
  delay = 0,
  y = 44,
  className,
}: RevealProps) {
  return (
    <motion.div
      initial={{ y, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Eyebrow({
  index,
  label,
}: {
  index: string;
  label: string;
}) {
  return (
    <Reveal y={20}>
      <div className="flex items-center gap-4">
        <span className="font-mono text-[11px] uppercase tracking-[0.35em] text-accent">
          {index}
        </span>
        <span className="h-px w-12 bg-accent/60" />
        <span className="font-mono text-[11px] uppercase tracking-[0.35em] text-fog">
          {label}
        </span>
      </div>
    </Reveal>
  );
}
