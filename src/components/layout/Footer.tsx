import { Linkedin, Twitter, Youtube, MapPin } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/constants";
import type { Dictionary, Locale } from "@/types";
import FooterNewsletter from "./FooterNewsletter";

interface FooterProps {
  dict: Dictionary;
  locale: Locale;
}

export default function Footer({ dict, locale }: FooterProps) {
  const { footer } = dict;

  return (
    <footer className="bg-neutral-900 text-neutral-300">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Company info */}
          <div>
            <a
              href={`/${locale}`}
              className="font-heading text-xl font-bold text-white"
            >
              ARDICTECH
            </a>
            <p className="mt-3 text-sm leading-relaxed">{footer.tagline}</p>
            <div className="mt-4 flex items-center gap-2 text-sm">
              <MapPin className="h-4 w-4 text-secondary" />
              {footer.location}
            </div>
            <div className="mt-4 flex gap-3">
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-neutral-800 text-neutral-400 transition-colors hover:bg-primary hover:text-white"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href={SOCIAL_LINKS.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-neutral-800 text-neutral-400 transition-colors hover:bg-primary hover:text-white"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href={SOCIAL_LINKS.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-neutral-800 text-neutral-400 transition-colors hover:bg-primary hover:text-white"
              >
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-white">
              {footer.quickLinks}
            </h3>
            <ul className="space-y-3 text-sm">
              {Object.entries(footer.links).map(([key, label]) => (
                <li key={key}>
                  <a
                    href={`#${key}`}
                    className="transition-colors hover:text-white"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-white">
              {footer.legal}
            </h3>
            <ul className="space-y-3 text-sm">
              {Object.entries(footer.legalLinks).map(([key, label]) => (
                <li key={key}>
                  <a
                    href={`/${locale}/${key}`}
                    className="transition-colors hover:text-white"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <FooterNewsletter
              title={footer.newsletter.title}
              placeholder={footer.newsletter.placeholder}
              subscribe={footer.newsletter.subscribe}
              gdpr={footer.newsletter.gdpr}
            />
          </div>
        </div>

        <div className="mt-12 border-t border-neutral-800 pt-8 text-center text-sm text-neutral-500">
          {footer.copyright}
        </div>
      </div>
    </footer>
  );
}
