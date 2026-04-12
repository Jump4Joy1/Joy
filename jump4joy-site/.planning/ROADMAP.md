# Joy-OF Roadmap

**Project:** Joy-OF
**Created:** 2026-04-12
**Granularity:** Standard (5 phases)

## Overview

A conversion-optimized link-in-bio page for creator monetization. Dark theme, mobile-first, max 4 links with OnlyFans as primary gated CTA.

## Phases

- [ ] **Phase 1: Profile Foundation** - Avatar, username, bio, dark theme, meta tags, CONFIG object
- [ ] **Phase 2: Primary CTA + Age Gate** - OnlyFans link with lock icon, 18+ age verification overlay
- [ ] **Phase 3: Social Links** - Instagram and TikTok icons, subordinate positioning
- [ ] **Phase 4: Supporting Monetization** - CashApp and Amazon Wishlist links
- [ ] **Phase 5: Polish** - Hover animations, final styling pass

## Phase Details

### Phase 1: Profile Foundation

**Goal:** Users see a compelling profile (avatar, username, bio) on a dark, mobile-first page with proper meta tags for social sharing.

**Depends on:** None (first phase)

**Requirements:** PROF-01, PROF-02, PROF-03, VIS-01, VIS-02, VIS-04, VIS-05, VIS-06, CONF-01, CONF-02

**Success Criteria** (what must be TRUE):

1. Avatar displays as a circular image (96-120px) with accent color border
2. Username displays with @ prefix below avatar
3. Bio text displays as a conversion hook (Who + What + Why subscribe)
4. Page uses dark theme background with accent color different from jump4joy-site (#bb8773)
5. Single-column layout with 580px max-width, mobile-first responsive
6. Open Graph and Twitter Card meta tags are present and correct
7. Page loads fast (pure HTML/CSS/JS, avatar compressed)
8. All external links have rel="noopener noreferrer" attribute
9. All content (profile, links) driven by CONFIG JavaScript object
10. Adding/removing links requires only CONFIG changes, no HTML edits

**Plans:** TBD

### Phase 2: Primary CTA + Age Gate

**Goal:** OnlyFans link appears first with lock icon, gated by 18+ age verification that only blocks that specific link.

**Depends on:** Phase 1

**Requirements:** CTA-01, CTA-02, CTA-03

**Success Criteria** (what must be TRUE):

1. OnlyFans link displays as the FIRST content link with visible lock icon overlay
2. Clicking OnlyFans link opens age verification overlay (does not navigate away)
3. Age gate shows "I am 18+, Enter" button that grants access to OnlyFans
4. Age gate has a visible close button; clicking it closes the overlay
5. Clicking outside the age gate overlay closes it without granting access

**Plans:** TBD

### Phase 3: Social Links

**Goal:** Social links (Instagram, TikTok) are present but visually subordinate to content links.

**Depends on:** Phase 2

**Requirements:** SOCL-01, SOCL-02, SOCL-03

**Success Criteria** (what must be TRUE):

1. Instagram link displays with recognizable icon
2. TikTok link displays with recognizable icon
3. Social links appear below content links in visual hierarchy
4. Social links open in new tab with proper security attributes

**Plans:** TBD

### Phase 4: Supporting Monetization

**Goal:** CashApp and Amazon Wishlist links are visible and open immediately without age gate.

**Depends on:** Phase 3

**Requirements:** MON-01, MON-02

**Success Criteria** (what must be TRUE):

1. CashApp link displays and opens in new tab immediately (no age gate)
2. Amazon Wishlist link displays and opens in new tab immediately (no age gate)
3. Supporting links appear in natural position after primary CTA

**Plans:** TBD

### Phase 5: Polish

**Goal:** Subtle hover animations complete the polished user experience.

**Depends on:** Phase 4

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
| 2. Primary CTA + Age Gate | 0/1 | Not started | - |
| 3. Social Links | 0/1 | Not started | - |
| 4. Supporting Monetization | 0/1 | Not started | - |
| 5. Polish | 0/1 | Not started | - |

## Coverage

**Requirements:** 17 total v1 requirements mapped to 5 phases

| Phase | Requirements |
|-------|--------------|
| 1 | PROF-01, PROF-02, PROF-03, VIS-01, VIS-02, VIS-04, VIS-05, VIS-06, CONF-01, CONF-02 |
| 2 | CTA-01, CTA-02, CTA-03 |
| 3 | SOCL-01, SOCL-02, SOCL-03 |
| 4 | MON-01, MON-02 |
| 5 | VIS-03 |

---
*Roadmap created: 2026-04-12*
