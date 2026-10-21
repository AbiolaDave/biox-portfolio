"use client";

import { useState, useEffect } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      // Highlight active section
      const sections = links.map((l) => l.href.slice(1));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#040C18]/95 backdrop-blur-md border-b border-[#122845]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="font-mono text-gold-500 font-semibold text-lg tracking-tight hover:text-gold-400 transition-colors"
        >
          AO<span className="text-slate-500">.</span>dev
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`nav-link text-sm font-medium animated-underline ${
                active === link.href.slice(1) ? "active" : ""
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/Abiola_Odesomi_CV_2025.pdf"
            download
            className="ml-2 px-4 py-1.5 text-sm font-medium border border-gold-500 text-gold-500 rounded hover:bg-gold-500 hover:text-navy-900 transition-all duration-200"
          >
            Download CV
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-slate-400 hover:text-slate-100 transition-colors p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div
            className={`w-5 h-0.5 bg-current mb-1 transition-all ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`}
          />
          <div
            className={`w-5 h-0.5 bg-current mb-1 transition-all ${menuOpen ? "opacity-0" : ""}`}
          />
          <div
            className={`w-5 h-0.5 bg-current transition-all ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#081525] border-b border-[#122845] px-6 pb-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block py-3 text-sm text-slate-300 hover:text-gold-400 border-b border-[#122845] last:border-0 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/Abiola_Odesomi_CV_2025.pdf"
            download
            className="mt-3 block text-center py-2 border border-gold-500 text-gold-500 rounded text-sm"
          >
            Download CV
          </a>
        </div>
      )}
    </header>
  );
}
