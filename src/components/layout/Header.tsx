"use client";

import { useState, useEffect } from "react";
import { Menu, X, Globe } from "lucide-react";
import type { Dictionary, Locale } from "@/types";

interface HeaderProps {
  dict: Dictionary;
  locale: Locale;
}

export default function Header({ dict, locale }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { label: dict.nav.platform, href: "#platform" },
    { label: dict.nav.caseStudy, href: "#case-study" },
    { label: dict.nav.features, href: "#features" },
    { label: dict.nav.technology, href: "#technology" },
    { label: dict.nav.roi, href: "#roi" },
    { label: dict.nav.contact, href: "#contact" },
  ];

  const otherLocale: Locale = locale === "en" ? "tr" : "en";

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 shadow-md backdrop-blur-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a
          href={`/${locale}`}
          className="font-heading text-xl font-bold text-primary"
        >
          ARDICTECH
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-secondary ${
                scrolled ? "text-neutral-700" : "text-white"
              }`}
            >
              {item.label}
            </a>
          ))}

          {/* Language switcher */}
          <a
            href={`/${otherLocale}`}
            className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-secondary ${
              scrolled ? "text-neutral-700" : "text-white"
            }`}
            aria-label={`Switch to ${otherLocale === "en" ? "English" : "Turkish"}`}
          >
            <Globe className="h-4 w-4" />
            {otherLocale.toUpperCase()}
          </a>

          {/* CTA */}
          <a
            href="#contact"
            className="rounded-lg bg-secondary px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-secondary-dark"
          >
            {dict.nav.bookDemo}
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`lg:hidden ${scrolled ? "text-neutral-900" : "text-white"}`}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-neutral-100 bg-white lg:hidden">
          <div className="space-y-1 px-4 py-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block rounded-lg px-4 py-3 text-base font-medium text-neutral-700 hover:bg-neutral-50"
              >
                {item.label}
              </a>
            ))}
            <a
              href={`/${otherLocale}`}
              className="flex items-center gap-2 rounded-lg px-4 py-3 text-base font-medium text-neutral-700 hover:bg-neutral-50"
            >
              <Globe className="h-4 w-4" />
              {otherLocale === "en" ? "English" : "Türkçe"}
            </a>
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="mt-2 block rounded-lg bg-secondary px-4 py-3 text-center font-semibold text-white hover:bg-secondary-dark"
            >
              {dict.nav.bookDemo}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
