"use client";

import { useState } from "react";

interface FooterNewsletterProps {
  title: string;
  placeholder: string;
  subscribe: string;
  gdpr: string;
}

export default function FooterNewsletter({
  title,
  placeholder,
  subscribe,
  gdpr,
}: FooterNewsletterProps) {
  const [email, setEmail] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && agreed) {
      setSubmitted(true);
      setEmail("");
      setAgreed(false);
    }
  };

  if (submitted) {
    return (
      <div className="rounded-lg bg-accent/10 p-4 text-sm text-accent-dark">
        Thank you for subscribing!
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3 className="mb-3 text-sm font-semibold text-white">{title}</h3>
      <div className="flex gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={placeholder}
          required
          className="flex-1 rounded-lg border border-neutral-700 bg-neutral-800 px-3 py-2 text-sm text-white placeholder:text-neutral-500 focus:border-secondary focus:ring-1 focus:ring-secondary"
        />
        <button
          type="submit"
          disabled={!agreed}
          className="rounded-lg bg-secondary px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-secondary-dark disabled:opacity-50"
        >
          {subscribe}
        </button>
      </div>
      <label className="mt-2 flex items-start gap-2 text-xs text-neutral-400">
        <input
          type="checkbox"
          checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
          className="mt-0.5 accent-secondary"
        />
        {gdpr}
      </label>
    </form>
  );
}
