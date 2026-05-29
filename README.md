# Joy! — Jump4Joy Link Hub

A dark-themed, mobile-first link-in-bio page for [@jump_4_joy](https://linktr.ee/jump_4_joy).

**Live at:** https://jump4joy.me

---

## Quick Start

1. Clone the repo:
   ```bash
   git clone https://github.com/Jump4Joy1/Joy.git
   ```

2. Open `index.html` in your browser to preview locally.

---

## Editing Links

All links, social accounts, and profile info are in **`main.js`** — look for the `CONFIG` section at the top:

```javascript
const CONFIG = {
  profile: {
    username: "@jump_4_joy",
    displayName: "jump_4_joy",
    bio: "Your favorite Milf. 💋",
    avatarUrl: "https://..."
  },
  social: [
    { name: "Instagram", url: "https://instagram.com/all_your_joy", icon: "instagram" },
    { name: "TikTok", url: "https://tiktok.com/@get_more_joy", icon: "tiktok" }
  ],
  links: [
    { label: "OnlyFans", url: "https://onlyfans.com/jump_4_joy", gated: true, icon: "lock" },
    { label: "Amazon Wishlist", url: "...", gated: false },
    { label: "$Cashapp", url: "...", gated: false },
    { label: "$Venmo", url: "...", gated: false }
  ]
};
```

**To add a link:** Add an object to `CONFIG.links` — it renders automatically.
**To remove a link:** Delete the object from `CONFIG.links`.
**To edit:** Change the `label`, `url`, or other values.

---

## Files

| File | Purpose |
|------|---------|
| `index.html` | Page structure |
| `styles.css` | Design system (colors, fonts, layout) |
| `main.js` | Gate logic + easy-edit CONFIG |

---

## Tech Stack

Pure HTML / CSS / JS — no frameworks, no build step. Fonts via Google Fonts (Space Grotesk + Inter). Host anywhere that serves static files.

---

## Deploy to GitHub Pages

1. Push to the `master` branch
2. Enable GitHub Pages in repo **Settings → Pages → Source → master**
3. Your site will be live at `https://Jump4Joy1.github.io/Joy`

Point your domain (e.g. `jump4joy.me`) via GoDaddy DNS:
- **www** → CNAME → `Jump4Joy1.github.io`
- **@ (root)** → ALIAS/ANAME → `Jump4Joy1.github.io`
