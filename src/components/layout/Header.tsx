"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, Globe } from "lucide-react";
import type { Dictionary, Locale } from "@/types";
import Button from "@/components/ui/Button";

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
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-black/80 border-b border-white/10 backdrop-blur-md"
        : "bg-transparent"
        }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a
          href={`/${locale}`}
          className="flex items-center gap-3"
        >
          <div className="relative h-16 w-16 flex-shrink-0">
            <Image
              src="/images/logo.png"
              alt="ARDICTECH"
              width={64}
              height={64}
              className="h-full w-full object-contain"
              priority
              unoptimized
            />
          </div>
          <div className="flex flex-col">
            <span className={`font-heading text-xl font-bold leading-tight transition-colors ${scrolled ? "text-white" : "text-white"
              }`}>
              ARDICTECH
            </span>
            <span className={`text-[11px] font-medium leading-tight transition-colors ${scrolled ? "text-neutral-400" : "text-white/90"
              }`}>
              Digital Transformation for Manufacturing
            </span>
          </div>
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-accent ${scrolled ? "text-neutral-300" : "text-white"
                }`}
            >
              {item.label}
            </a>
          ))}

          {/* Language switcher */}
          <a
            href={`/${otherLocale}`}
            className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-accent ${scrolled ? "text-neutral-300" : "text-white"
              }`}
            aria-label={`Switch to ${otherLocale === "en" ? "English" : "Turkish"}`}
          >
            <Globe className="h-4 w-4" />
            {otherLocale.toUpperCase()}
          </a>

          {/* CTA */}
          <Button
            href="#contact"
            variant="primary"
            size="md"
          >
            {dict.nav.bookDemo}
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`lg:hidden ${scrolled ? "text-white" : "text-white"}`}
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
        <div className="border-t border-white/5 bg-black/95 backdrop-blur-xl lg:hidden">
          <div className="space-y-1 px-4 py-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block rounded-lg px-4 py-3 text-base font-medium text-neutral-300 hover:bg-white/5 hover:text-accent"
              >
                {item.label}
              </a>
            ))}
            <a
              href={`/${otherLocale}`}
              className="flex items-center gap-2 rounded-lg px-4 py-3 text-base font-medium text-neutral-300 hover:bg-white/5"
            >
              <Globe className="h-4 w-4" />
              {otherLocale === "en" ? "English" : "Türkçe"}
            </a>
            <div className="px-4 py-3">
              <Button
                href="#contact"
                variant="primary"
                size="lg"
                className="w-full"
                onClick={() => setMobileOpen(false)}
              >
                {dict.nav.bookDemo}
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
