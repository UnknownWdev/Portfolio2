import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function Preloader({ onDone }: { onDone: () => void }) {
  const [count, setCount] = useState(0);
  const doneRef = useRef(onDone);
  doneRef.current = onDone;

  useEffect(() => {
    document.body.style.overflow = "hidden";
    let value = 0;
    const timer = setInterval(() => {
      value += Math.floor(Math.random() * 9) + 4;
      if (value >= 100) {
        value = 100;
        clearInterval(timer);
        setTimeout(() => {
          document.body.style.overflow = "";
          doneRef.current();
        }, 450);
      }
      setCount(value);
    }, 70);
    return () => {
      clearInterval(timer);
      document.body.style.overflow = "";
    };
  }, []);

  const name = "AWAL LASISI";

  return (
    <motion.div
      exit={{ y: "-100%" }}
      transition={{ duration: 0.75, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[200] flex flex-col justify-between bg-ink px-6 py-8 md:px-10"
    >
      <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.35em] text-fog">
        <span>Front-End Developer</span>
        <span className="hidden sm:block">Portfolio ©2025</span>
      </div>

      <div className="flex justify-center overflow-hidden">
        <h1 className="flex overflow-hidden font-display text-[clamp(2rem,8vw,5.5rem)] font-extrabold uppercase tracking-tight">
          {name.split("").map((char, i) => (
            <motion.span
              key={i}
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.15 + i * 0.035,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="inline-block"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-accent"
          >
            .
          </motion.span>
        </h1>
      </div>

      <div className="flex items-end justify-between">
        <span className="font-mono text-[11px] uppercase tracking-[0.35em] text-fog">
          Crafting pixels & code
        </span>
        <span className="font-display text-6xl font-bold text-accent tabular-nums md:text-8xl">
          {count}
          <span className="text-2xl md:text-4xl">%</span>
        </span>
      </div>
    </motion.div>
  );
}
