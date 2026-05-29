# Joy-OF Roadmap

**Project:** Joy-OF
**Created:** 2026-04-12
**Granularity:** Standard (5 phases)

## Overview

A conversion-optimized, ultra-minimal link-in-bio page for creator monetization. Dark theme (#0a0a0f), neon pink accent (#ff2d6a), max 1 content link (Premium → OnlyFans), Instagram + TikTok social links.

## Phases

- [ ] **Phase 1: Profile Foundation** - Avatar, username, bio, dark neon-pink theme, meta tags, CONFIG object
- [ ] **Phase 2: Premium CTA + Age Gate** - "Premium" button linking to OnlyFans with lock icon, 18+ age verification
- [ ] **Phase 3: Social Links** - Instagram and TikTok icons
- [ ] **Phase 4: Polish** - Hover animations, final styling pass

## Link Set (Reference: linktr.ee/get_more_joy)

| Link | Label | URL | Treatment |
|------|-------|-----|-----------|
| Content | "Premium" | onlyfans.com/jump_4_joy/c4 | Gated (sensitive), lock icon |
| Social | Instagram | instagram.com/all_your_joy | Icon |
| Social | TikTok | tiktok.com/@get_more_joy | Icon |

## Phase Details

### Phase 1: Profile Foundation

**Goal:** Users see a compelling profile (avatar, username, bio) on a dark neon-pink themed page with proper meta tags for social sharing.

**Depends on:** None (first phase)

**Requirements:** PROF-01, PROF-02, PROF-03, VIS-01, VIS-02, VIS-04, VIS-05, VIS-06, CONF-01, CONF-02

**Success Criteria** (what must be TRUE):

1. Avatar displays as a circular image (96-120px) with neon pink border/glow
2. Username displays with @ prefix below avatar
3. Bio text displays as a conversion hook (Who + What + Why subscribe)
4. Page uses dark theme background (#0a0a0f) with neon pink accent (#ff2d6a)
5. Single-column layout with 580px max-width, mobile-first responsive
6. Open Graph and Twitter Card meta tags are present and correct
7. Page loads fast (pure HTML/CSS/JS, avatar compressed)
8. All external links have rel="noopener noreferrer" attribute
9. All content (profile, links) driven by CONFIG JavaScript object
10. Adding/removing links requires only CONFIG changes, no HTML edits

**Plans:** TBD

### Phase 2: Premium CTA + Age Gate

**Goal:** "Premium" button links to OnlyFans as the only content link, gated by 18+ age verification that only blocks that specific link.

**Depends on:** Phase 1

**Requirements:** CTA-01, CTA-02, CTA-03

**Success Criteria** (what must be TRUE):

1. "Premium" button displays as the FIRST and ONLY content link with visible lock icon overlay
2. Clicking "Premium" opens age verification overlay (does not navigate away)
3. Age gate shows "I am 18+, Enter" button that grants access to OnlyFans
4. Age gate has a visible close button; clicking it closes the overlay
5. Clicking outside the age gate overlay closes it without granting access

**Plans:** TBD

### Phase 3: Social Links

**Goal:** Instagram and TikTok social links are present and accessible.

**Depends on:** Phase 2

**Requirements:** SOCL-01, SOCL-02, SOCL-03

**Success Criteria** (what must be TRUE):

1. Instagram link displays with recognizable icon
2. TikTok link displays with recognizable icon
3. Social links open in new tab with proper security attributes

**Plans:** TBD

### Phase 4: Polish

**Goal:** Subtle hover animations complete the polished user experience.

**Depends on:** Phase 3

**Requirements:** VIS-03

**Success Criteria** (what must be TRUE):

1. Links lift up (translateY) with shadow enhancement on hover
2. Hover effect is subtle (not jarring) and consistent across all links
3. Animations perform smoothly (60fps) on mobile devices

**Plans:** TBD

**UI hint:** yes

## Progress

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Profile Foundation | 0/1 | Not started | - |
| 2. Premium CTA + Age Gate | 0/1 | Not started | - |
| 3. Social Links | 0/1 | Not started | - |
| 4. Polish | 0/1 | Not started | - |

## Coverage

**Requirements:** 17 total v1 requirements mapped to 4 phases

| Phase | Requirements |
|-------|--------------|
| 1 | PROF-01, PROF-02, PROF-03, VIS-01, VIS-02, VIS-04, VIS-05, VIS-06, CONF-01, CONF-02 |
| 2 | CTA-01, CTA-02, CTA-03 |
| 3 | SOCL-01, SOCL-02, SOCL-03 |
| 4 | VIS-03 |

---
*Roadmap updated: 2026-04-12 after scope clarification*
