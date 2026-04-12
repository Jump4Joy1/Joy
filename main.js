// DOM references
const contentLinks = document.querySelectorAll('.content-link');
const gateOverlay = document.querySelector('.gate-overlay');
const gateCta = document.querySelector('.gate-cta');
const gateClose = document.querySelector('.gate-close');
const errorMessage = document.querySelector('.error-message');

// ═══════════════════════════════════════════════════════
// EASY-EDIT CONFIG — Change links, text, and content here
// Just add/remove/edit items in the arrays below!
// ═══════════════════════════════════════════════════════
const CONFIG = {
  profile: {
    username: "@jump_4_joy",
    displayName: "jump_4_joy",
    bio: "Your favorite Milf. 💋",
    avatarUrl: "https://i.postimg.cc/9FHpbTMp/IMG_5333.jpg"
  },
  social: [
    { name: "Instagram", url: "https://instagram.com/all_your_joy", icon: "instagram" },
    { name: "TikTok", url: "https://tiktok.com/@get_more_joy", icon: "tiktok" }
  ],
  links: [
    { label: "OnlyFans", url: "https://onlyfans.com/jump_4_joy", gated: true, icon: "lock" },
    { label: "Amazon Wishlist", url: "https://www.amazon.com/hz/wishlist/profle/jumpforjoy69", gated: false },
    { label: "$Cashapp", url: "https://cash.app/$jumpforjoy69", gated: false },
    { label: "$Venmo", url: "https://venmo.com/u/jumpforjoy69", gated: false },
    { label: "Gifts to Impress Me", url: "https://giftful.com/wishlists/pe9VtuTXEZL9ojY8QCFh", gated: false }
  ]
};
// ═══════════════════════════════════════════════════════
// HOW TO ADD A NEW LINK:
// Just add a new object to CONFIG.links:
// { label: "My New Link", url: "https://example.com", gated: false }
// It will appear automatically!
//
// HOW TO REMOVE A LINK:
// Delete the object from CONFIG.links
//
// HOW TO EDIT A LINK:
// Change the label, url, gated, or icon values
// ═══════════════════════════════════════════════════════

// Helper function to open links in new tab
function openInNewTab(url) {
  const newTab = window.open(url, '_blank', 'noopener,noreferrer');
  if (newTab) {
    newTab.focus();
  } else {
    // Fallback if popup blocked
    window.location.href = url;
  }
}

// OnlyFans gate state
let onlyFansGatePassed = false;

// Build content links from CONFIG
function buildContentLinks() {
  const container = document.querySelector('.content-links');
  if (!container) return;

  container.innerHTML = ''; // Clear existing

  CONFIG.links.forEach(link => {
    const btn = document.createElement('a');
    btn.className = 'content-link' + (link.gated ? ' content-link--gated' : '');
    btn.href = link.url;
    btn.target = '_blank';
    btn.rel = 'noopener noreferrer';
    btn.dataset.gated = link.gated ? 'true' : 'false';

    // Create inner content with optional icon
    if (link.icon === 'lock') {
      btn.innerHTML = `
        <span class="content-link__text">${link.label}</span>
        <span class="content-link__icon" aria-hidden="true">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
            <path d="M12 1a5 5 0 00-5 5v4H6a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V12a2 2 0 00-2-2h-1V6a5 5 0 00-5-5zm3 9H9V6a3 3 0 116 0v4z"/>
          </svg>
        </span>
      `;
    } else {
      btn.textContent = link.label;
    }

    container.appendChild(btn);
  });
}

// Build social links from CONFIG
function buildSocialLinks() {
  const container = document.querySelector('.social-links');
  if (!container) return;

  container.innerHTML = '';

  CONFIG.social.forEach(s => {
    const a = document.createElement('a');
    a.className = 'social-link';
    a.href = s.url;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.setAttribute('aria-label', `View on ${s.name}`);

    // Use existing SVG icons based on icon type
    if (s.icon === 'instagram') {
      a.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.087 2.82.07 4.85 0 3.204-.012 3.584-.07 4.85-.148 3.225-1.664 4.771-4.919 4.919-1.266.058-2.79.086-4.85.07-3.204.013-3.583.012-4.85-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-2.82-.07-4.85 0-3.204.013-3.583.07-4.85.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 2.82-.086 4.85-.07zm-5.95 11.1c-.1-2.04-.1-4.31 0-6.35 0-2.04.1-4.31 0-6.35.1-2.04.5-3.72 2.19-5.09 1.7-1.37 3.7-1.37 5.4 0 1.69 1.37 2.09 3.05 2.19 5.09.1 2.04.1 4.31 0 6.35 0 2.04-.1 4.31 0 6.35-.1 2.04-.5 3.72-2.19 5.09-1.7 1.37-3.7 1.37-5.4 0-1.69-1.37-2.09-3.05-2.19-5.09zm6.35-9.48c-3.47 0-6.28 2.81-6.28 6.28 0 3.47 2.81 6.28 6.28 6.28 3.47 0 6.28-2.81 6.28-6.28 0-3.47-2.81-6.28-6.28-6.28zm0 10.4c-2.26 0-4.1-1.84-4.1-4.1 0-2.26 1.84-4.1 4.1-4.1 2.26 0 4.1 1.84 4.1 4.1 0 2.26-1.84 4.1-4.1 4.1zm8.77-11.4c-1.14 0-2.07.93-2.07 2.07 0 1.14.93 2.07 2.07 2.07 1.14 0 2.07-.93 2.07-2.07 0-1.14-.93-2.07-2.07-2.07z"/>
      </svg>`;
    } else if (s.icon === 'tiktok') {
      a.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 3.36V9.22a8.18 8.18 0 005.58 2.29v-3.58a4.85 4.85 0 01-5.58-4.84v-.1z"/>
      </svg>`;
    }

    container.appendChild(a);
  });
}

// Attach click handlers to content links
function attachLinkHandlers() {
  const links = document.querySelectorAll('.content-link');

  links.forEach(link => {
    if (link.dataset.gated === 'true') {
      // Gated link (OnlyFans) - show gate overlay instead of opening
      link.addEventListener('click', (e) => {
        if (!onlyFansGatePassed) {
          e.preventDefault();
          gateOverlay.style.display = 'flex';
        }
      });
    } else {
      // Non-gated links - open immediately in new tab
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
  // Find OnlyFans link and open it
  const onlyFansLink = document.querySelector('.content-link[data-gated="true"]');
  if (onlyFansLink) {
    openInNewTab(onlyFansLink.href);
  }
});

// Gate close button: dismiss gate without opening
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
  console.error('Page error:', message, 'at', source, ':', lineno, ':', colno);
  if (errorMessage) {
    errorMessage.style.display = 'block';
  }
  return false;
};

// Initialize page: build links from CONFIG, set background, and attach handlers
document.addEventListener('DOMContentLoaded', () => {
  buildContentLinks();
  buildSocialLinks();
  attachLinkHandlers();
  // Set faded background image from CONFIG
  document.body.style.setProperty('--bg-image', `url('${CONFIG.profile.avatarUrl}')`);
});

console.log('Jump4Joy page loaded successfully');