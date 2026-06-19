# World Cup Bracket Predictor - Portfolio Addition

## Project Overview
This document shows how the World Cup Bracket Predictor project will be added to your personal projects section.

---

## Project Data Structure

### Basic Information
- **ID**: 10
- **Title**: "World Cup 2026 Bracket Predictor"
- **Image**: `assets/img/Worldcup-Predictor/photo_2026-06-19_15-13-42.jpg` (main thumbnail)
- **Tags**: ["Telegram Mini App", "Next.js", "React Flow", "Supabase", "TypeScript"]

### Short Description
A Telegram Mini App for predicting the 2026 FIFA World Cup bracket with an interactive canvas interface. Features real-time bracket generation, immutable locking, viral share cards, and comprehensive scoring system for the new 48-team format.

### Features Array
- Interactive Bracket Canvas (React Flow)
- 12 Group Rankings & Third-Place Selection
- Dynamic Round of 32 Generation
- Winner Propagation System
- Progressive Locking & Timestamps
- PNG Share Cards for Telegram
- Live Countdown to Deadlines
- Leaderboard with Tie-breakers
- Admin Broadcast Panel
- PWA with Offline Support
- RTL Support (Amharic)
- Accessibility & Keyboard Navigation

### Detailed Description
Bracketology is a comprehensive Telegram Mini App that lets users predict the 2026 FIFA World Cup bracket through an interactive canvas interface built with React Flow. Built for the new 48-team format, users rank teams in 12 groups (A–L), select the 8 best third-place teams, and the app auto-generates Round of 32 matchups based on the official FIFA inter-group pairing matrix.

The app features immutable prediction locking with SHA-256 hashing to prevent tampering, progressive locking that allows late joiners to predict future rounds, and styled PNG share cards that can be sent directly to Telegram. A sophisticated scoring engine with tie-breakers ranks all participants on a live leaderboard.

Built with Next.js 16, React 19, Supabase for backend, and integrated with Telegram Bot API for seamless Mini App experience. The application is a PWA with offline support, full RTL layout support for Amharic, and complete keyboard navigation for accessibility.

### Technical Stack
- Next.js 16 (App Router)
- TypeScript 5
- React 19
- React Flow (Interactive Bracket Canvas)
- Supabase (PostgreSQL + Auth + Real-time)
- Telegram Mini App SDK (@twa-dev/sdk)
- Node Telegram Bot API
- Tailwind CSS 4 + shadcn/ui
- Framer Motion 12
- Zustand 5 (State Management)
- Zod 4 (Validation)
- next-intl (i18n)
- Vitest (32 unit tests)
- Vercel (Hosting)

### Project Goals
To create an engaging, tamper-proof prediction platform for the 2026 World Cup that makes complex bracket predictions simple through intuitive drag-and-drop interactions, while ensuring fairness through immutable locking and progressive deadlines that allow anyone to join at any stage of the tournament.

### Links
- **GitHub**: https://github.com/yonasKu/World-cup-bracket-predict
- **Live App**: https://world-cup-bracket-predicter.vercel.app
- **Telegram Bot**: https://t.me/wc2026_ethiopia_bot

### Screenshots
1. `assets/img/Worldcup-Predictor/photo_2026-06-19_15-13-42.jpg` - Main bracket interface
2. `assets/img/Worldcup-Predictor/photo_2026-06-19_15-13-47.jpg` - Group rankings
3. `assets/img/Worldcup-Predictor/photo_2026-06-19_15-13-51.jpg` - Round of 32 view
4. `assets/img/Worldcup-Predictor/photo_2026-06-19_15-13-54.jpg` - Leaderboard
5. `assets/img/Worldcup-Predictor/photo_2026-06-19_15-13-57.jpg` - Share card generation
6. `assets/img/Worldcup-Predictor/photo_2026-06-19_15-14-01.jpg` - Admin panel

### Key Achievements
- Built complete Telegram Mini App from scratch with React Flow for interactive bracket canvas
- Implemented complex tournament logic for new 48-team World Cup format
- Created immutable prediction system with SHA-256 hashing and progressive locking
- Integrated client-side PNG generation for viral sharing on Telegram
- Developed comprehensive scoring engine with 32 unit tests (Vitest)
- Achieved full accessibility with keyboard navigation and RTL support
- Built admin broadcast system with rate limiting and audit trails
- Implemented PWA with offline service worker and installable web app manifest
- Solved Supabase free tier inactivity pause with GitHub Actions keep-awake cron
- Deployed production app serving real users via Telegram Bot

---

## Image Assets Locations

All images are already in place at:
```
/Users/eaglelion/Desktop/Projects/portfolio/src/assets/img/Worldcup-Predictor/
├── photo_2026-06-19_15-13-42.jpg  (Main thumbnail - Bracket interface)
├── photo_2026-06-19_15-13-47.jpg  (Group rankings screen)
├── photo_2026-06-19_15-13-51.jpg  (Round of 32 bracket)
├── photo_2026-06-19_15-13-54.jpg  (Leaderboard view)
├── photo_2026-06-19_15-13-57.jpg  (Share card feature)
└── photo_2026-06-19_15-14-01.jpg  (Admin broadcast panel)
```

---

## How It Will Look in Portfolio

### Card View (Grid Display)
```
┌─────────────────────────────────────┐
│  [Bracket Interface Screenshot]     │
│                                     │
│  World Cup 2026 Bracket Predictor  │
│                                     │
│  [Telegram Mini App] [Next.js]     │
│  [React Flow] [Supabase]           │
│                                     │
│  A Telegram Mini App for predicting│
│  the 2026 FIFA World Cup bracket...│
│                                     │
│  [GitHub] [Live Demo] [Telegram]   │
└─────────────────────────────────────┘
```

### Modal View (When Clicked)
Will show:
- Full project title and description
- Complete list of features (12 bullet points)
- Technical stack (20+ technologies)
- All 6 screenshots in a carousel/grid
- Links to GitHub, live app, and Telegram bot
- Project goals and achievements
- Status: "Production - Live"

---

## TypeScript Object to Add

```typescript
{
  id: 10,
  title: "World Cup 2026 Bracket Predictor",
  imageSrc: "assets/img/Worldcup-Predictor/photo_2026-06-19_15-13-42.jpg",
  tags: ["Telegram Mini App", "Next.js", "React Flow", "Supabase", "TypeScript"],
  description: "A Telegram Mini App for predicting the 2026 FIFA World Cup bracket with an interactive canvas interface. Features real-time bracket generation, immutable locking, viral share cards, and comprehensive scoring system for the new 48-team format.",
  features: [
    "Interactive Bracket Canvas (React Flow)",
    "12 Group Rankings & Third-Place Selection",
    "Dynamic Round of 32 Generation",
    "Winner Propagation System",
    "Progressive Locking & Timestamps",
    "PNG Share Cards for Telegram",
    "Live Countdown to Deadlines",
    "Leaderboard with Tie-breakers",
    "Admin Broadcast Panel",
    "PWA with Offline Support",
    "RTL Support (Amharic)",
    "Accessibility & Keyboard Navigation"
  ],
  githubLink: "https://github.com/yonasKu/World-cup-bracket-predict",
  liveLink: "https://world-cup-bracket-predicter.vercel.app",
  status: "Production - Live",
  detailedDescription: "Bracketology is a comprehensive Telegram Mini App that lets users predict the 2026 FIFA World Cup bracket through an interactive canvas interface built with React Flow. Built for the new 48-team format, users rank teams in 12 groups (A–L), select the 8 best third-place teams, and the app auto-generates Round of 32 matchups based on the official FIFA inter-group pairing matrix.\n\nThe app features immutable prediction locking with SHA-256 hashing to prevent tampering, progressive locking that allows late joiners to predict future rounds, and styled PNG share cards that can be sent directly to Telegram. A sophisticated scoring engine with tie-breakers ranks all participants on a live leaderboard.\n\nBuilt with Next.js 16, React 19, Supabase for backend, and integrated with Telegram Bot API for seamless Mini App experience. The application is a PWA with offline support, full RTL layout support for Amharic, and complete keyboard navigation for accessibility.",
  technicalStack: [
    'Next.js 16 (App Router)',
    'TypeScript 5',
    'React 19',
    'React Flow',
    'Supabase (PostgreSQL)',
    'Telegram Mini App SDK',
    'Node Telegram Bot API',
    'Tailwind CSS 4',
    'shadcn/ui',
    'Framer Motion 12',
    'Zustand 5',
    'Zod 4',
    'next-intl (i18n)',
    'Vitest',
    '@dnd-kit',
    '@use-gesture/react',
    'html-to-image',
    'canvas-confetti',
    'Vercel'
  ],
  projectGoals: 'To create an engaging, tamper-proof prediction platform for the 2026 World Cup that makes complex bracket predictions simple through intuitive drag-and-drop interactions, while ensuring fairness through immutable locking and progressive deadlines that allow anyone to join at any stage of the tournament.',
  screenshots: [
    'assets/img/Worldcup-Predictor/photo_2026-06-19_15-13-42.jpg',
    'assets/img/Worldcup-Predictor/photo_2026-06-19_15-13-47.jpg',
    'assets/img/Worldcup-Predictor/photo_2026-06-19_15-13-51.jpg',
    'assets/img/Worldcup-Predictor/photo_2026-06-19_15-13-54.jpg',
    'assets/img/Worldcup-Predictor/photo_2026-06-19_15-13-57.jpg',
    'assets/img/Worldcup-Predictor/photo_2026-06-19_15-14-01.jpg'
  ]
}
```

---

## Additional Features to Highlight

### Architecture Highlights
- **48-Team Format**: Custom bracket layout for the new 2026 World Cup format (12 groups → R32)
- **Progressive Locking**: Complex state logic allowing late joiners to predict future rounds
- **Third-Place Qualification**: Dynamic logic for selecting 8 best third-place teams from 12 groups
- **Keep-Awake Mechanism**: GitHub Actions cron job preventing Supabase free tier pause
- **Client-Side Share Cards**: PNG generation using html-to-image without headless browser

### Challenges Solved
1. New 48-team bracket format not available in existing libraries
2. Progressive locking for late joiners with complex state management
3. Third-place qualification with dynamic rules
4. Supabase free tier auto-pause prevention
5. Telegram Mini App WebView constraints and UX
6. Client-side accurate bracket image generation

### Testing Coverage
- 32 unit tests across 3 test suites
- Lock validation (14 tests)
- Scoring engine (12 tests)
- Late-joiner progressive locking (6 tests)
- Framework: Vitest + jsdom + Testing Library

---

## Ready for Implementation?

Once you approve this structure, I will:
1. Add this project object to `work.component.ts` in the `projects` array
2. Verify all image paths are correct
3. Ensure the modal displays all information properly
4. Test that all links work correctly

**Please review and let me know if you'd like any changes to:**
- Description text
- Features list
- Technical stack
- Project goals
- Screenshot order
- Tags/categories
