# Jump4Joy — Joy! Brand Knowledge Base

> Last Updated: 2026-06-17

## Overview

Dark-themed link-in-bio landing page for @jump_4_joy's OnlyFans brand "Joy!".

**Live Site:** https://jump4joy.me
**GitHub Repo:** https://github.com/Jump4Joy1/Joy
**GitHub Username:** Jump4Joy1
**Custom Domain:** jump4joy.me (Cloudflare DNS → GitHub Pages)
**Local Working Copy:** Desktop/Joy-repo/ (git clone of Jump4Joy1/Joy)

**Hosting Note:** Cloudflare Pages custom domain is BROKEN for this domain (CNAME Cross-User Banned error).
Site uses GitHub Pages as host. Do NOT attempt Cloudflare Pages setup — use GitHub Pages directly.

## IMPORTANT — Brand Separation

**Joy! = jump4joy.me = @jump_4_joy = jesseandjoytx@gmail.com**
**Land Kings = landkings.biz = offers@landkings.biz = completely separate**

These two businesses have ZERO connection. Files, repos, Cloudflare accounts, and emails are all separate.
When working on Joy! files: Desktop/Joy!/ or Desktop/Joy-repo/
When working on Land Kings files: Desktop/LandKings/

---

## Profile Information

| Field | Value |
|-------|-------|
| Username | @jump_4_joy |
| Display Name | jump_4_joy |
| Bio | "Your favorite Milf. 💋" |
| Instagram | @all_your_joy |
| TikTok | @get_more_joy |

---

## Links Configuration (main.js)

```javascript
const CONFIG = {
  profile: {
    username: "@jump_4_joy",
    displayName: "jump_4_joy",
    bio: "Your favorite Milf. 💋",
    avatarUrl: "https://pbs.twimg.com/profile_images/1552036985566760961/j-xt6AFV_400x400.jpg"
  },
  social: [
    { name: "Instagram", url: "https://instagram.com/all_your_joy", icon: "instagram" },
    { name: "TikTok", url: "https://tiktok.com/@get_more_joy", icon: "tiktok" }
  ],
  links: [
    { label: "OnlyFans", url: "https://onlyfans.com/jump_4_joy", gated: true, icon: "lock" },
    { label: "Amazon Wishlist", url: "https://www.amazon.com/hz/wishlist/ls/3HN4O7IR2VIBF?ref_=wl_share", gated: false },
    { label: "$Cashapp", url: "https://cash.app/$jumpforjoy69", gated: false },
    { label: "$Venmo", url: "https://venmo.com/u/Jump_4Joy1", gated: false },
    { label: "$Chime", copyValue: "$jump4joy1", gated: false },
    { label: "$Zelle", showQR: "assets/zelle-qr.jpg", gated: false }
  ]
};
```

### Link Order (as displayed on page)
1. OnlyFans — gated, requires age verification
2. Amazon Wishlist — for gift requests
3. $Cashapp — $jumpforjoy69
4. $Venmo — @Jump_4Joy1
5. $Chime — $jump4joy1 (copies to clipboard)
6. $Zelle — opens QR code modal (image: assets/zelle-qr.jpg)

**GitHub removed** (2026-05-29) — was only linking to blank github.com/placeholder. Removed per owner request.

---

## Tech Stack

| Component | Technology |
|-----------|------------|
| Frontend | Static HTML/CSS/JS |
| Fonts | Space Grotesk + Inter (Google Fonts) |
| Hosting | GitHub Pages (jump4joy1.github.io/Joy) |
| DNS | Cloudflare (jesseandjoytx@gmail.com) — CNAME points to GitHub Pages |
| Custom Domain | jump4joy.me |

---

## File Structure

```
Joy-repo/              ← Git repo (master branch = deployed)
├── index.html         — Page structure
├── styles.css         — Design system
├── main.js            — CONFIG-driven link rendering + gate logic
├── CNAME              — Custom domain config
├── assets/
│   └── avatar.jpg     — Profile photo
├── CLAUDE.md          — Developer instructions (GSD workflow)
├── KNOWLEDGE.md       — This file
└── README.md          — Basic repo info
```

---

## Design System

| Element | Value |
|---------|-------|
| Background | #050f15 |
| Accent | #bb8773 (taupe) |
| Hover Accent | #226691 |
| Avatar | 200px wide, border-radius: 40px, aspect-ratio 1/1.2 |
| Buttons | Pill-shaped (border-radius: 50px), transparent bg with accent border |

---

## Key Technical Details

### Age Gate (OnlyFans)
- OnlyFans link is `gated: true`
- Shows overlay with "I am 18+ and legal to view this content" button
- CTA clears gate state and opens the link
- Prevents accidental clicks by Instagram users

### Link Rendering
- Links are dynamically built from CONFIG in main.js
- Adding/removing/editing links = edit CONFIG.links array only
- Icons are optional via `icon: "lock"` property

### URL Update History
| Link | Old URL | New URL | Date |
|------|---------|---------|------|
| Venmo | `https://venmo.com/u/jumpforjoy69` | `https://venmo.com/u/Jump_4Joy1` | 2026-05-16 |
| Amazon | `https://www.amazon.com/hz/wishlist/profle/jumpforjoy69` | `https://www.amazon.com/hz/wishlist/ls/3HN4O7IR2VIBF?ref_=wl_share` | 2026-05-16 |
| GitHub | **removed** | — | 2026-05-29 |
| Chime | **added** | `$jump4joy1` (copies to clipboard via copyValue) | 2026-05-29 |
| Zelle | **added** | QR modal via assets/zelle-qr.jpg | 2026-05-29 |

### Voting Banner (Maxim Cover Girl Contest)
- Added 2026-05-29
- Shows at top of page on every visit until dismissed
- URL: `https://covergirl.maxim.com/p/X2CSJGYS`
- Dismissal is per-session (uses `sessionStorage`)
- Gold/black theme matching site aesthetic

---

## Deployment

### GitHub Pages
1. Push to `master` branch of `Jump4Joy1/Joy`
2. GitHub Pages auto-builds from `/` root
3. Custom domain configured via CNAME file + Cloudflare

### Cloudflare DNS
- CNAME for jump4joy.me and www.jump4joy.me
- Cloudflare handles SSL automatically

---

## Other Projects (Separate from Joy!)

### Joy! — jump4joy.me
- **This project** — link-in-bio for @jump_4_joy's OnlyFans brand
- **Email:** jesseandjoytx@gmail.com (personal, NOT business)
- **GitHub:** Jump4Joy1/Joy
- **Cloudflare:** jesseandjoytx@gmail.com account
- **Everything in this folder (Joy!/) is Joy! only**

### Land Kings — landkings.biz
- **COMPLETELY SEPARATE business** — TX/LA land investing
- **Email:** offers@landkings.biz
- **GitHub:** LandKingsSite (separate account)
- **Cloudflare:** offers@landkings.biz account
- **NEVER touch Land Kings files when working on Joy! and vice versa**

### Joy-OF — jump4joy.biz
- **Domain:** https://jump4joy.biz
- **Repo:** https://github.com/jump4Joy1/Joy-OF
- **Purpose:** Mirror of https://linktr.ee/get_more_joy for TikTok/Instagram @get_more_joy

---

## Troubleshooting

### Links Not Updating
- Cloudflare CDN may cache old content
- Manually purge Cloudflare cache or wait 24-48hrs

### Avatar Not Loading
- Check Twitter CDN URL is still valid
- Fallback: upload avatar to GitHub assets folder

### Age Gate Not Working
- Check `onlyFansGatePassed` variable is being set
- Ensure `.gate-overlay` CSS display property changes

---

## Contact Info

| Platform | Handle / URL |
|---|---|
| Instagram | @all_your_joy |
| TikTok | @get_more_joy |
| OnlyFans | @jump_4_joy (onlyfans.com/jump_4_joy) |
| Amazon Wishlist | amazon.com/hz/wishlist/ls/3HN4O7IR2VIBF |
| Cash App | $jumpforjoy69 |
| Venmo | @Jump_4Joy1 |
| Chime | $jump4joy1 (copy only) |

---

## OnlyFans Account Details (@jump_4_joy)

| Field | Value |
|---|---|
| Username | jump_4_joy |
| Display Name | Joy! |
| Bio | "Your favorite Milf. 💋" |
| Niche | MILF |
| Account Age | Active (start date unknown) |

---

## OF Growth Resources

A comprehensive **onlyfans-growth** skill has been built for growing the @jump_4_joy account.

### Skill Location
`~/.hermes/skills/social-media/onlyfans-growth/SKILL.md`

### What's Included

**SKILL.md (main guide):**
1. Content strategy — teaser types, BTS, POV, content mix by growth stage
2. Platform tactics — Reddit, TikTok, Twitter/X, Instagram, YouTube
3. Active subreddits list — with member counts & verification requirements
4. Pricing & revenue — subscription tiers ($9.99–14.99 sweet spot), PPV pricing tables
5. Internal OF SEO — keyword placement, bio optimization, profile completeness
6. Link-in-bio tools — Linktree vs Carrd vs Beacons vs Solo.to
7. Posting schedule & timing — 3–5 posts/day on social, 1–2/day on OF
8. Top agencies — named agencies with rev shares, contract terms, red flags
9. Top creator insights — niches, equipment, unconventional tactics
10. Traffic source hierarchy — by conversion quality

**references/:**
- `reddit-outreach.md` — PRAW Python scripts, karma warmup, engagement strategies
- `agency-outreach.md` — cold email/DM templates, agency comparison table, contract checklist
- `content-calendar.md` — full week-by-week planner, hashtag tables, batch prep schedule

### Quick-Reference: OF Growth Best Practices

- **Reddit first** — highest converting traffic source, start here
- **TikTok 2–4x daily** — algorithm favors consistency, teasers only
- **Twitter 3–5x daily** — Spaces generate 10x more followers
- **$9.99–14.99/month** subscription sweet spot for new creators
- **10% free-to-paid conversion** target via DMs and wall content
- **Parasocial investment** — treat subscribers like friends, not customers
- **Consistency beats volume** — same posting times daily

---

## File Structure

```
Desktop/Joy-repo/              ← Git working copy (master = deployed)
├── index.html                 — Page structure
├── styles.css                 — Design system
├── main.js                    — CONFIG-driven link rendering + gate logic
├── CNAME                      — Custom domain (jump4joy.me)
├── CLAUDE.md                  — GSD workflow notes (Jump4Joy1's conventions)
├── README.md                  — Basic repo info
├── KNOWLEDGE.md               — THIS FILE (in Desktop/Joy!/)
├── jump4joy-site/             — (orphaned?, possibly old Cloudflare Pages build)
└── assets/
    ├── avatar.jpg             — Profile photo (from Twitter CDN)
    └── zelle-qr.jpg           — Zelle QR code (uploaded 2026-05-29)

Desktop/Joy!/                  ← Primary working folder (has exclamation mark!)
├── KNOWLEDGE.md               — Brand knowledge base (this file)
└── (other planning docs)

Jump4Joy1/Joy (GitHub)         ← Remote repo, master branch = live
```

---

## Troubleshooting

### Links Not Updating on Live Site
1. Verify changes pushed to `master` branch on GitHub
2. Check GitHub Pages deployment status at: github.com/Jump4Joy1/Joy/settings/pages
3. Cloudflare DNS is correct — site loads via GitHub Pages
4. Wait 2–5 min for GitHub Pages to rebuild after push

### Avatar Not Loading
- Twitter CDN URL: `https://pbs.twimg.com/profile_images/1552036985566760961/j-xt6AFV_400x400.jpg`
- If broken: upload avatar locally to `assets/avatar.jpg` and update `CONFIG.profile.avatarUrl`

### Age Gate Not Working
- Check `onlyFansGatePassed` session variable is being set on button click
- Ensure `.gate-overlay` CSS display toggles correctly in main.js

### Zelle QR Modal Not Showing
- Verify `assets/zelle-qr.jpg` exists and was pushed to GitHub
- Check the image is a valid JPEG (not corrupted)
- Run: check `git log --oneline -5` in Joy-repo to confirm latest push

### GitHub Pages Deploy Failed
- Go to github.com/Jump4Joy1/Joy/settings/pages
- Check "Source" is set to "Deploy from a branch" → master branch
- Check for build errors in Actions tab
