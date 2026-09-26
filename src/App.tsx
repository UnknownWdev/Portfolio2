import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Preloader from "./components/Preloader";
import Cursor from "./components/Cursor";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="min-h-screen bg-ink font-body text-paper">
      <AnimatePresence mode="wait">
        {loading && (
          <Preloader key="preloader" onDone={() => setLoading(false)} />
        )}
      </AnimatePresence>

      <Cursor />

      {!loading && (
        <>
          <Navbar />
          <main>
            <Hero />
            <Marquee />
            <Projects />
            <About />
            <Contact />
          </main>
          <Footer />
        </>
      )}

      {/* film grain overlay */}
      <div className="grain pointer-events-none fixed inset-0 z-[100] opacity-[0.06]" />
    </div>
  );
}
