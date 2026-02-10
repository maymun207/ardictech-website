# ARDICTECH Enterprise Website

AI-Powered Digital Transformation for Manufacturing Excellence

[![Next.js](https://img.shields.io/badge/Next.js-16-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1-38bdf8)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/license-Proprietary-red)]()

---

## 📖 Overview

Professional B2B enterprise website for ARDICTECH's manufacturing intelligence platform. Built to convert Manufacturing CXOs and IT Directors into qualified demo leads.

**Live Site:** [ardictech.com.tr](https://ardictech.com.tr) (when deployed)

**Key Features:**
- 🌍 **Bilingual:** English & Turkish with automatic detection
- 🚀 **Performance:** LCP <2.5s, FCP <1.5s (Lighthouse >90)
- ♿ **Accessible:** WCAG 2.1 AA compliant
- 📱 **Responsive:** Mobile-first design, works on all devices
- 🔍 **SEO Optimized:** Structured data, dynamic sitemap, Open Graph tags
- 🧮 **Interactive ROI Calculator:** Real-time savings estimates
- 📝 **Contact Form:** Formspree integration with spam prevention

---

## 🚀 Quick Start

### Prerequisites

- **Node.js:** 18.x or later
- **npm:** 9.x or later
- **Git:** For version control

### Installation

```bash
# Clone the repository
git clone https://github.com/ardictech/website.git
cd website

# Install dependencies
npm install

# Create environment file
cp .env.example .env.local

# Edit .env.local and add your Formspree endpoint
# NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
```

### Development

```bash
# Start development server (with Turbopack)
npm run dev

# Open browser to http://localhost:3000/en or /tr
```

### Build & Deploy

```bash
# Create production build
npm run build

# Test production build locally
npm run start

# Lint code
npm run lint
```

---

## 🛠️ Development Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with Turbopack (hot reload) |
| `npm run build` | Create optimized production build |
| `npm run start` | Serve production build locally (test before deploy) |
| `npm run lint` | Run ESLint to check code quality |

---

## 📁 Project Structure

```
src/
├── app/
│   ├── [locale]/           # Localized routes (/en, /tr)
│   │   ├── layout.tsx     # Locale-specific layout (Header, Footer)
│   │   ├── page.tsx       # Homepage (all sections)
│   │   └── not-found.tsx  # 404 page
│   ├── layout.tsx          # Root layout (fonts, global styles)
│   ├── globals.css         # Tailwind + custom design tokens
│   ├── robots.ts           # Dynamic robots.txt
│   └── sitemap.ts          # Dynamic sitemap.xml
│
├── components/
│   ├── sections/           # Page sections (Hero, Platform, etc.)
│   ├── layout/             # Header, Footer, Navigation
│   └── ui/                 # Reusable components (Button, FormField, etc.)
│
├── lib/
│   ├── dictionaries/       # i18n content (en.json, tr.json)
│   ├── i18n/               # Locale configuration
│   ├── constants.ts        # Global constants
│   ├── roi-calculator.ts   # ROI calculation logic
│   └── structured-data.ts  # SEO schemas
│
└── types/
    └── index.ts            # TypeScript interfaces
```

**Key Conventions:**
- **Server Components:** Default (no `"use client"`)
- **Client Components:** Only for interactivity (forms, sliders)
- **Naming:** PascalCase for components, kebab-case for files
- **Path Alias:** `@/*` maps to `./src/*`

---

## 🌍 Internationalization (i18n)

### Supported Languages

- **English (en):** Default, `/en` route
- **Turkish (tr):** `/tr` route

### How It Works

1. **URL-based routing:** `/en/` and `/tr/` routes
2. **Dictionary files:** `src/lib/dictionaries/en.json` and `tr.json`
3. **Server-side:** Content loaded on server (no hydration delay)
4. **Language switcher:** Header component provides toggle

### Adding Content

Edit dictionary files in `src/lib/dictionaries/`:

```json
// en.json
{
  "hero": {
    "headline": "AI-Powered Digital Transformation",
    "ctaPrimary": "Book a Demo"
  }
}
```

### Adding a New Language

1. Add locale to `src/lib/i18n/config.ts`:
   ```typescript
   export const locales = ['en', 'tr', 'de'] as const; // Add 'de'
   ```

2. Create dictionary file: `src/lib/dictionaries/de.json`

3. Update language switcher in `src/components/layout/Header.tsx`

---

## 🎨 Styling & Design System

### Tailwind CSS 4.x

Custom design tokens in `src/app/globals.css`:

```css
--color-primary: #1E3A8A;        /* Industrial Blue */
--color-secondary: #F97316;       /* Tech Orange */
--color-accent: #10B981;          /* Data Green */
--font-heading: var(--font-inter);
--font-body: var(--font-source-sans);
```

### Typography

- **Headings:** Inter (700 weight)
- **Body:** Source Sans 3 (400, 600 weights)
- **Code:** System monospace

### Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Primary (Blue) | `#1E3A8A` | Headers, CTAs, links |
| Secondary (Orange) | `#F97316` | Accents, highlights |
| Accent (Green) | `#10B981` | Success states, metrics |
| Neutral Gray | `#F9FAFB` - `#111827` | Backgrounds, text |

---

## 📝 Environment Variables

Create `.env.local` in the root directory:

```env
# Form Submission (Required)
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID

# Analytics (Optional - add when ready)
# NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

**Important:**
- Never commit `.env.local` to git (already in `.gitignore`)
- Use `.env.example` as a template
- All public env vars must start with `NEXT_PUBLIC_`

### Getting a Formspree ID

1. Go to [formspre.io](https://formspree.io)
2. Create free account
3. Create new form
4. Copy form ID from URL: `https://formspree.io/f/YOUR_FORM_ID`
5. Add to `.env.local`

---

## 🚢 Deployment

### Vercel (Recommended)

1. **Push to GitHub:**
   ```bash
   git push origin main
   ```

2. **Import to Vercel:**
   - Visit [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your repository
   - Framework: Next.js (auto-detected)

3. **Add Environment Variables:**
   - Go to Project Settings → Environment Variables
   - Add `NEXT_PUBLIC_FORMSPREE_ENDPOINT`
   - Value: Your Formspree form URL

4. **Deploy:**
   - Automatic on every push to `main`
   - Preview deployments for PRs

5. **Custom Domain:**
   - Add `ardictech.com.tr` in Vercel settings
   - Update DNS records (provided by Vercel)
   - SSL certificate auto-generated

### Alternative Platforms

- **Netlify:** Supports Next.js with build plugin
- **AWS Amplify:** Requires additional configuration
- **Self-hosted:** Use `npm run build` + `npm run start`

---

## 🧪 Testing

### Manual Testing Checklist

- [ ] Homepage loads in both `/en` and `/tr`
- [ ] Root `/` redirects to browser language
- [ ] All navigation links work
- [ ] Language switcher toggles correctly
- [ ] Contact form validation works
- [ ] Contact form submits successfully
- [ ] ROI calculator updates in real-time
- [ ] Mobile responsive (test on phone)
- [ ] No console errors in browser

### Lighthouse Audit

```bash
# Build production version
npm run build

# Run production server
npm run start

# Open Chrome DevTools → Lighthouse
# Run audit for Performance, Accessibility, SEO
# Target: >90 in all categories
```

---

## 🤝 Contributing

### Branch Strategy

- `main` — Production-ready code
- `develop` — Integration branch
- `feature/*` — New features
- `fix/*` — Bug fixes
- `docs/*` — Documentation updates

### Workflow

1. **Create branch:**
   ```bash
   git checkout -b feature/new-section
   ```

2. **Make changes:**
   - Follow existing code style
   - Use TypeScript types
   - Test in both EN and TR

3. **Commit:**
   ```bash
   git add .
   git commit -m "feat: add new case study section"
   ```

4. **Push:**
   ```bash
   git push origin feature/new-section
   ```

5. **Create Pull Request:**
   - Description of changes
   - Screenshots if UI changes
   - Link to related issues

### Code Style

- **TypeScript:** Strict mode enabled
- **ESLint:** Run `npm run lint` before committing
- **Prettier:** (Optional) Use `.prettierrc` if added
- **Components:** PascalCase, one component per file
- **Hooks:** Use `"use client"` only when necessary

### Commit Messages

Follow [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: add ROI calculator disclaimer
fix: correct Turkish translation in footer
docs: update README with deployment steps
style: format code with Prettier
refactor: extract form validation to utility
test: add unit tests for ROI calculation
```

---

## 📚 Documentation

- **[PRD](docs/prd.md)** — Product requirements document
- **[Implementation Plan](docs/IMPLEMENTATION_PLAN.md)** — Technical architecture & phases
- **[CLAUDE.md](CLAUDE.md)** — AI assistant guidelines for this project

---

## 🔧 Troubleshooting

### Common Issues

**Issue:** `npm run dev` fails with module not found

**Solution:**
```bash
rm -rf node_modules package-lock.json
npm install
```

---

**Issue:** Form submission doesn't work

**Solution:**
- Check `.env.local` exists and has correct Formspree URL
- Verify URL format: `https://formspree.io/f/YOUR_FORM_ID`
- Restart dev server after changing `.env.local`

---

**Issue:** Root URL `/` shows 404

**Solution:**
- Add `src/middleware.ts` (see Implementation Plan)
- Middleware redirects root to `/en` or `/tr`

---

**Issue:** Fonts not loading

**Solution:**
- Fonts are loaded via `next/font/google` (automatic)
- Check `src/app/layout.tsx` has font imports
- Build production version (`npm run build`) to test

---

**Issue:** Build fails with TypeScript errors

**Solution:**
```bash
# Check for type errors
npx tsc --noEmit

# Fix errors in reported files
# Re-run build
npm run build
```

---

## 📊 Performance Optimization

### Current Metrics (Target)

- **Lighthouse Performance:** >90
- **First Contentful Paint:** <1.5s
- **Largest Contentful Paint:** <2.5s
- **Cumulative Layout Shift:** <0.1
- **Time to Interactive:** <3s

### Optimization Techniques Used

- ✅ Next.js automatic code splitting
- ✅ Server Components (reduced JS bundle)
- ✅ Font optimization (`next/font/google`)
- ✅ Image optimization (Next.js `<Image>` component - when images added)
- ✅ Static generation for all pages
- ✅ Tailwind CSS purging (production build)

### Future Optimizations

- [ ] Add WebP images with fallbacks
- [ ] Implement lazy loading for below-fold content
- [ ] Add CDN for static assets (Vercel Edge handles this)
- [ ] Optimize third-party scripts (GA4 when added)

---

## 📄 License

Proprietary - ARDICTECH © 2026. All rights reserved.

This is proprietary software. Unauthorized copying, modification, distribution, or use of this software, via any medium, is strictly prohibited.

---

## 👥 Team

- **Product Owner:** [Name]
- **Tech Lead:** [Name]
- **Frontend Developer:** Claude Code (assisted)
- **Content Writer:** [Name]
- **Designer:** [Name]

---

## 📞 Support

- **Email:** support@ardictech.com.tr
- **Website:** [ardictech.com.tr](https://ardictech.com.tr)
- **Documentation:** See `docs/` folder
- **Issues:** [GitHub Issues](https://github.com/ardictech/website/issues)

---

**Built with ❤️ using Next.js 16, TypeScript, and Tailwind CSS**
