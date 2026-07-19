"use client";

import { useEffect, useState } from "react";
import ThemeToggle from "./themetoggle"

const LINKS = [
  { href: "#home", label: "home" },
  { href: "#about", label: "about" },
  { href: "#work", label: "work" },
  { href: "#contact", label: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = LINKS.map((l) => document.querySelector(l.href)).filter(
      (el): el is Element => el !== null
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between transition-all duration-300 ${
        scrolled
          ? "py-2 px-6 bg-white/70 dark:bg-black/50 backdrop-blur-md border-b border-black/5 dark:border-white/10 shadow-sm"
          : "py-4 px-6 bg-transparent"
      }`}
    >
      <span className="text-sm font-medium">yash.dev</span>

      <div className="flex gap-6 text-sm text-neutral-600 dark:text-neutral-300">
        {LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={`relative pb-1 transition-colors ${
              active === link.href
                ? "text-black dark:text-white"
                : "hover:text-black dark:hover:text-white"
            }`}
          >
            {link.label}
            {active === link.href && (
              <span className="absolute left-0 right-0 -bottom-0.5 h-[2px] bg-black dark:bg-white rounded-full" />
            )}
          </a>
        ))}
      </div>

      <ThemeToggle />
    </nav>
  );
}
