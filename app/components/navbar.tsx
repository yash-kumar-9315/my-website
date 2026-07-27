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
  let ticking = false;
  const onScroll = () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 20);
        ticking = false;
      });
      ticking = true;
    }
  };
  window.addEventListener("scroll", onScroll, { passive: true });
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
          ? "py-2 px-6 bg-surface-alt/70 backdrop-blur-md border-b border-border shadow-sm"
          : "py-4 px-6 bg-transparent"
      }`}
    >
      <span className="text-sm font-bold">MySite.dev</span>

      <div className="flex flex-wrap justify-center gap-3 sm:gap-6 text-sm text-foreground/60">
        {LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={`relative pb-1 transition-colors ${
              active === link.href
                ? "text-accent"
                : "hover:text-accent"
            }`}
          >
            {link.label}
            {active === link.href && (
              <span className="absolute left-0 right-0 -bottom-0.5 h-[2px] bg-accent rounded-full" />
            )}
          </a>
        ))}
      </div>      
      <ThemeToggle />
    </nav>
  );
}
