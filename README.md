# Abiola Odesomi — Portfolio

A modern, professional developer portfolio built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**.

## Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + custom CSS
- **Fonts:** Inter + JetBrains Mono (Google Fonts)
- **Deployment:** Vercel (recommended)

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Run dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

## Deployment to Vercel

1. Push this folder to a new GitHub repository
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import the repository
4. Click Deploy — no config needed, Vercel auto-detects Next.js

Your portfolio will be live at `https://your-repo-name.vercel.app`

## Customisation

| File | What to change |
|------|---------------|
| `components/Hero.tsx` | Name, title, bio, social links |
| `components/About.tsx` | Stats, bio paragraphs, tags |
| `components/Skills.tsx` | Skill groups and pills |
| `components/Experience.tsx` | Job history and education |
| `components/Projects.tsx` | Project cards, links, stack |
| `components/Contact.tsx` | Email, phone, social links |
| `app/globals.css` | Colors, fonts, animations |
| `tailwind.config.ts` | Color tokens |

## Adding Your CV PDF

Place your CV PDF at `public/Abiola_Odesomi_CV_2025.pdf` to enable the "Download CV" button in the navbar.

## Color Reference

| Token | Hex | Use |
|-------|-----|-----|
| Navy 900 | `#040C18` | Page background |
| Navy 800 | `#081525` | Card background |
| Gold 500 | `#F59E0B` | Primary accent |
| Slate 100 | `#E2EBF6` | Primary text |
| Slate 400 | `#8BA7C7` | Secondary text |
