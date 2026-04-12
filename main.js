// DOM references
const contentLinks = document.querySelectorAll('.content-link');
const gateOverlay = document.querySelector('.gate-overlay');
const gateCta = document.querySelector('.gate-cta');
const gateClose = document.querySelector('.gate-close');
const errorMessage = document.querySelector('.error-message');

// ═══════════════════════════════════════════════════════
// EASY-EDIT CONFIG — Change links, text, and content here
// ═══════════════════════════════════════════════════════
const CONFIG = {
  profile: {
    username: "@jump_4_joy",
    displayName: "jump_4_joy",
    bio: "Your favorite Milf. 💋",
    avatarUrl: "https://jump4joy.me/assets/avatar.jpg"
  },
  social: [
    { name: "Instagram", url: "https://instagram.com/all_your_joy" },
    { name: "TikTok", url: "https://tiktok.com/@get_more_joy" }
  ],
  links: [
    { label: "OnlyFans", url: "https://onlyfans.com/jump_4_joy", gated: true },
    { label: "Amazon Wishlist", url: "https://www.amazon.com/hz/wishlist/profle/jumpforjoy69", gated: false },
    { label: "$Cashapp", url: "https://cash.app/$jumpforjoy69", gated: false },
    { label: "$Venmo", url: "https://venmo.com/u/jumpforjoy69", gated: false },
    { label: "Gifts to Impress Me", url: "https://giftful.com/wishlists/pe9VtuTXEZL9ojY8QCFh", gated: false }
  ]
};
// ═══════════════════════════════════════════════════════

// Set background image from avatar URL
document.body.style.backgroundImage = `url('${CONFIG.profile.avatarUrl}')`;

// Helper function to open links in new tab
function openInNewTab(url) {
  const newTab = window.open(url, '_blank', 'noopener,noreferrer');
  if (newTab) {
    newTab.focus();
  } else {
    window.location.href = url;
  }
}

// OnlyFans gate state
let onlyFansGatePassed = false;

// Build content links from CONFIG
function buildContentLinks() {
  const container = document.querySelector('.content-links');
  if (!container) return;

  container.innerHTML = '';

  CONFIG.links.forEach(link => {
    const btn = document.createElement('a');
    btn.className = 'content-link' + (link.gated ? ' content-link--gated' : '');
    btn.href = link.url;
    btn.target = '_blank';
    btn.rel = 'noopener noreferrer';
    btn.dataset.gated = link.gated ? 'true' : 'false';

    let content = `<span>${link.label}</span>`;
    if (link.gated) {
      content = `<span class="lock-icon">🔒</span><span>${link.label}</span>`;
    }
    btn.innerHTML = content;

    container.appendChild(btn);
  });
}

// Build social links from CONFIG
function buildSocialLinks() {
  const container = document.querySelector('.social-links');
  if (!container) return;

  container.innerHTML = '';

  const icons = {
    Instagram: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>`,
    TikTok: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 3.36V9.22a8.18 8.18 0 005.58 2.29v-3.58a4.85 4.85 0 01-5.58-4.84v-.1z"/></svg>`
  };

  CONFIG.social.forEach(s => {
    const a = document.createElement('a');
    a.className = 'social-link';
    a.href = s.url;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.setAttribute('aria-label', s.name);
    a.innerHTML = icons[s.name] || '';
    container.appendChild(a);
  });
}

// Attach click handlers to content links
function attachLinkHandlers() {
  const links = document.querySelectorAll('.content-link');

  links.forEach(link => {
    if (link.dataset.gated === 'true') {
      link.addEventListener('click', (e) => {
        if (!onlyFansGatePassed) {
          e.preventDefault();
          gateOverlay.style.display = 'flex';
        }
      });
    } else {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        openInNewTab(link.href);
      });
    }
  });
}

// Gate CTA: dismiss gate and open OnlyFans link
gateCta.addEventListener('click', () => {
  onlyFansGatePassed = true;
  gateOverlay.style.display = 'none';
  const onlyFansLink = document.querySelector('.content-link[data-gated="true"]');
  if (onlyFansLink) {
    openInNewTab(onlyFansLink.href);
  }
});

// Gate close button
gateClose.addEventListener('click', () => {
  gateOverlay.style.display = 'none';
});

// Click outside gate card to close
gateOverlay.addEventListener('click', (e) => {
  if (e.target === gateOverlay) {
    gateOverlay.style.display = 'none';
  }
});

// Global error handler
window.onerror = function(message, source, lineno, colno, error) {
  console.error('Page error:', message, 'at', source, ':', lineno);
  if (errorMessage) {
    errorMessage.style.display = 'block';
  }
  return false;
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  buildContentLinks();
  buildSocialLinks();
  attachLinkHandlers();
});

console.log('Jump4Joy page loaded');
