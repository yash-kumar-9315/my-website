"use client";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};
const item = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function Hero() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const heroImage =
    resolvedTheme === "dark" ? "/dark.jpg" : "/light.jpg";

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        {mounted && (
          <img
            src={heroImage}
            alt="background"
            className="w-full h-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-2xl mx-auto text-center px-4 pt-20"
      >
        <motion.h1 variants={item} className="text-5xl font-bold text-white">
          Hi, i&apos;m building something new.
        </motion.h1>

        <motion.p variants={item} className="text-lg text-white/70 mt-4">
          Building things for the <span className="text-accent text-glow font-medium">web</span>.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-6 flex flex=col sm:flex-row items-center justify-center gap-2 max-w-md mx-auto w-full px-4"
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/50 outline-none"
          />
          <button className="px-6 py-3 rounded-full bg-accent text-white font-medium whitespace-nowrap">
            Open account
          </button>
        </motion.div>
        <div className="py-12">
          <button className="px-6 py-3 bg-accent text-white rounded-full font-medium hover:opacity-90 transition-transform hover:-translate-y-1">
            Get Started
          </button>
        </div>
      </motion.div>
    </div>
  );
}