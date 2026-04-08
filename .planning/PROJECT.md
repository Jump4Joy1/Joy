# Jump4Joy Linktree Clone

## What This Is

A dark-themed link-in-bio landing page that mirrors the functionality and visual style of Linktree. Serves as a single-page hub containing the user's social links and featured content links, styled for mobile-first viewing.

## Core Value

A visually striking, fast-loading link hub that drives traffic to the user's content platforms with zero friction.

## Requirements

### Active

- [ ] Profile section with avatar, username (@jump_4_joy), and bio ("Your favorite Milf. 💋")
- [ ] Social links bar with Instagram (@all_your_joy) and TikTok (@get_more_joy)
- [ ] Four link buttons: OnlyFans, Amazon Wishlist, Cashapp ($jumpforjoy69), Venmo
- [ ] Dark theme matching reference: background #050f15, accent #bb8773, shadow #226691
- [ ] Space Grotesk (primary) + Inter (secondary) typography
- [ ] Mobile-first responsive layout
- [ ] Sensitive content gate on OnlyFans link

### Out of Scope

- Backend/database — purely static HTML/CSS/JS
- Analytics — can be added later via third-party embed
- Custom link editing — single-person site, hardcoded links
- Link click tracking — not requested

## Context

- Reference site: https://linktr.ee/jump_4_joy
- Target audience: followers wanting easy access to all content platforms
- No auth needed — static single-page site
- Hosted static files can be deployed to any CDN (Netlify, Vercel, GitHub Pages)

## Constraints

- **Stack**: Static HTML/CSS/JS only — no framework needed for a single page
- **Fonts**: Space Grotesk + Inter via Google Fonts
- **Images**: External avatar URL (from reference), no local assets
- **No server**: Purely client-side, no backend

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Static HTML over framework | Single page, no dynamic data, fastest load | — Pending |
| Google Fonts CDN | Reliable, no self-hosted font assets needed | — Pending |
| CSS custom properties | Easy theming, matches reference colors exactly | — Pending |

---
*Last updated: 2026-04-08 after initialization*
