import Link from "next/link";
import { FiMail } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import ClickCounter from "@/app/components/clickcounters";

const columns = [
  {
    title: "Work",
    links: [
      { label: "Projects", href: "/#work" },
      { label: "About", href: "/#about" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "Contact", href: "/#contact" },
      { label: "Resume", href: "/resume.pdf" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-teal-50 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100">
      {/* soft gradient wash, replaces Realm's wave art */}
      <div className="absolute inset-0 bg-gradient-to-tr from-teal-200/40 via-transparent to-transparent dark:from-teal-900/30 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-8 pt-20 pb-10">
        {/* mini-hero */}
        <h2 className="text-4xl sm:text-5xl font-bold leading-tight max-w-lg">
          Let&apos;s build something together.
        </h2>
        
          <a href="#contact"
          className="inline-block mt-6 px-5 py-3 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-lg font-medium hover:opacity-90"
        >
          Get in touch
        </a>

        {/* link columns */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mt-16">
          {columns.map((col) => (
            <div key={col.title}>
              <p className="text-xs font-semibold tracking-wide uppercase text-neutral-500 mb-3">
                {col.title}
              </p>
              <ul className="space-y-2">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="text-sm hover:opacity-70">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* bottom bar */}
        <div className="flex items-center justify-between mt-16 pt-6 border-t border-neutral-300 dark:border-neutral-700">
          <span className="font-semibold">Yash</span>
          <div className="flex gap-4">
            <a href="mailto:you@email.com" aria-label="Email" className="hover:opacity-70"><FiMail size={18} /></a>
            <a href="https://github.com/you" target="_blank" aria-label="Github" className="hover:opacity-70"><FaGithub size={18} /></a>
            <a href="https://linkedin.com/in/you" target="_blank" aria-label="LinkedIn" className="hover:opacity-70"><FaLinkedin size={18} /></a>
            <a href="https://x.com/you" target="_blank" aria-label="Twitter" className="hover:opacity-70"><FaXTwitter size={18} /></a>
          </div>
        </div>

        <div className="flex items-center justify-between mt-4 text-xs text-neutral-500">
          <span>© {new Date().getFullYear()} Yash. All rights reserved.</span>
          <ClickCounter />
        </div>
      </div>
    </footer>
  );
}