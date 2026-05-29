# Joy-OF Requirements

**Defined:** 2026-04-12
**Core Value:** A visually striking, conversion-optimized link hub that drives traffic to a creator's OnlyFans with zero friction and maximum subscriber conversion.

## v1 Requirements

### Profile

- [ ] **PROF-01**: Avatar displayed prominently (circular, 96-120px, neon pink border/glow)
- [ ] **PROF-02**: Username displayed with @ prefix
- [ ] **PROF-03**: Bio text that serves as a conversion hook (Who + What + Why subscribe)

### Primary CTA

- [ ] **CTA-01**: "Premium" button as the FIRST content link, linking to OnlyFans, with lock icon overlay
- [ ] **CTA-02**: Age verification gate (18+ button) blocks Premium link only
- [ ] **CTA-03**: Gate overlay with "I am 18+, Enter" button, close button, click-outside-to-close

### Social Links

- [ ] **SOCL-01**: Instagram link with icon
- [ ] **SOCL-02**: TikTok link with icon
- [ ] **SOCL-03**: Social links visible and accessible

### Visual & Technical

- [ ] **VIS-01**: Dark theme (#0a0a0f) with neon pink accent (#ff2d6a) — different from jump4joy-site to grab attention
- [ ] **VIS-02**: Single-column mobile-first layout, 580px max-width
- [ ] **VIS-03**: Subtle hover animations (translateY lift + shadow)
- [ ] **VIS-04**: Open Graph + Twitter Card meta tags for platform previews
- [ ] **VIS-05**: Fast loading (pure HTML/CSS/JS, avatar compressed)
- [ ] **VIS-06**: All external links use rel="noopener noreferrer"

### Configuration

- [ ] **CONF-01**: CONFIG object drives all content (profile, social, links)
- [ ] **CONF-02**: Easy to add/remove links without HTML changes

## v2 Requirements

Deferred to future release. Tracked but not in current roadmap.

### Analytics & Testing

- **ANALYT-01**: Page view tracking
- **ANALYT-02**: OnlyFans click rate tracking
- **ANALYT-03**: A/B testing methodology for color/link label variations

### Differentiators

- **DIFF-01**: Link label A/B test ("Premium" vs "Get more joy here ;)" vs "Exclusive Content")
- **DIFF-02**: Announcement banner for promotions

## Out of Scope

| Feature | Reason |
|---------|--------|
| Backend/server | Purely static page |
| User accounts/login | No backend to authenticate against |
| Analytics in v1 | Adding tracking slows page; defer to v2 |
| Multiple pages | Single-purpose link hub |
| Date picker age gate | Allows false entries; button confirmation is sufficient |
| Checkbox age gate | Legal risk if unchecked by default |
| Confetti/celebratory effects | Juvenile feel for adult content brand |
| Autoplay video/media | Distracts from conversion goal |
| Navigation menu | Link-in-bio is one-scroll destination |
| Payment processing on page | Security complexity; point to CashApp/Venmo directly |
| Email signup form | Adds friction, no backend to handle |
| More than 1 content link | Minimal links = focused conversion funnel |
| CashApp/Venmo/Wishlist | Not on reference Linktree; keeping minimal |

## Traceability

| Requirement | Phase | Status |
|-------------|-------|--------|
| PROF-01 | Phase 1 | Pending |
| PROF-02 | Phase 1 | Pending |
| PROF-03 | Phase 1 | Pending |
| CTA-01 | Phase 2 | Pending |
| CTA-02 | Phase 2 | Pending |
| CTA-03 | Phase 2 | Pending |
| SOCL-01 | Phase 3 | Pending |
| SOCL-02 | Phase 3 | Pending |
| SOCL-03 | Phase 3 | Pending |
| VIS-01 | Phase 1 | Pending |
| VIS-02 | Phase 1 | Pending |
| VIS-03 | Phase 5 | Pending |
| VIS-04 | Phase 1 | Pending |
| VIS-05 | Phase 1 | Pending |
| VIS-06 | Phase 1 | Pending |
| CONF-01 | Phase 1 | Pending |
| CONF-02 | Phase 1 | Pending |

**Coverage:**
- v1 requirements: 17 total
- Mapped to phases: 17
- Unmapped: 0 ✓

---
*Requirements defined: 2026-04-12*
*Last updated: 2026-04-12 after scope clarification*
