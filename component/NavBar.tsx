"use client";
import Link from "next/link";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { useEffect, useRef, useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/website-project" },
  { label: "Services", href: "/services" },
];

export function NavbarDemo() {
  const { scrollY } = useScroll();
  const [compact, setCompact] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const next = latest > 60;
    setCompact((prev) => (prev === next ? prev : next));
  });

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <motion.nav
        initial={{ opacity: 0, y: -10, scale: 0.98 }}
        animate={{
          opacity: 1,
          y: 0,
          scale: compact ? 0.985 : 1,
          width: compact ? "72%" : "100%",
          maxWidth: compact ? "64rem" : "80rem",
          paddingTop: compact ? 8 : 9,
          paddingBottom: compact ? 8 : 9,
          borderRadius: compact ? "9999px" : "1.5rem",
          background: compact
            ? "rgba(15, 23, 42, 0.72)"
            : "rgba(15, 23, 42, 0.28)",
          boxShadow: compact
            ? "0 0 0 1px rgba(255,255,255,0.08), 0 18px 38px rgba(2, 6, 23, 0.35)"
            : "0 0 0 1px rgba(255,255,255,0.06), 0 18px 34px rgba(2, 6, 23, 0.18)",
        }}
        transition={{
          duration: 0.8,
          ease: [0.16, 1, 0.3, 1],
          delay: 0.08,
        }}
        className="hidden items-center justify-between border border-white/10 bg-white/5 px-5 backdrop-blur-xl md:flex"
      >
        <Link href="/" className="flex items-center gap-3 text-white">
          <img src="/logo.png" alt="" className="h-12" />
        </Link>

        <div className="flex items-center gap-2 text-sm text-slate-200">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="cursor-pointer rounded-full px-3 py-2 transition hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link href="/about">
            <button className="cursor-pointer rounded-full border border-white/10 px-4 py-2 text-sm text-slate-200 transition hover:border-white/20 hover:bg-white/5 hover:text-white">
              About Me
            </button>
          </Link>
          <Link href="/contact">
            <button className="cursor-pointer rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-950 transition hover:bg-slate-200">
              Contact
            </button>
          </Link>
        </div>
      </motion.nav>

      <div ref={menuRef} className="relative w-full md:hidden">
        <nav className="flex w-full items-center justify-between rounded-full border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-xl">
          <Link href="/" className="flex items-center gap-2 text-white">
            <img src="/logo.png" alt="" className="h-12" />
          </Link>

          <button
            type="button"
            aria-expanded={menuOpen}
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="cursor-pointer rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-200 transition hover:bg-white/10 hover:text-white"
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
        </nav>

        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mt-2 rounded-2xl border border-white/10 bg-slate-950/95 p-3 shadow-2xl backdrop-blur-xl"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="cursor-pointer rounded-xl px-3 py-2 text-sm text-slate-200 transition hover:bg-white/10 hover:text-white"
                >
                  {item.label}
                </Link>
              ))}

              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="mt-1 cursor-pointer rounded-xl bg-white px-3 py-2 text-center text-sm font-medium text-slate-950 transition hover:bg-slate-200"
              >
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
}
