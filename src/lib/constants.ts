export const FORMSPREE_ENDPOINT = 
  process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || 
  "https://formspree.io/f/YOUR_FORM_ID"; // Fallback for development

export const SOCIAL_LINKS = {
  linkedin: "https://linkedin.com/company/ardictech",
  twitter: "https://twitter.com/ardictech",
  youtube: "https://youtube.com/@ardictech",
} as const;

export const NAV_SECTIONS = [
  "platform",
  "case-study",
  "features",
  "technology",
  "roi",
  "contact",
] as const;
