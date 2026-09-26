import { Asterisk } from "lucide-react";
import { MARQUEE_ITEMS } from "../data";

export default function Marquee() {
  const row = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  return (
    <section
      aria-hidden="true"
      className="relative overflow-hidden border-y border-ink/20 bg-accent py-4 md:py-5"
    >
      <div className="animate-marquee flex w-max items-center">
        {row.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-6 pr-6 font-display text-lg font-bold uppercase tracking-tight text-ink md:text-2xl"
          >
            <Asterisk size={22} strokeWidth={2.6} />
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
