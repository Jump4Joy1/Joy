// DOM references
const contentLinks = document.querySelectorAll('.content-link');
const gateOverlay = document.querySelector('.gate-overlay');
const gateCta = document.querySelector('.gate-cta');
const gateClose = document.querySelector('.gate-close');
const errorMessage = document.querySelector('.error-message');

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

// Attach click handlers to all content links
contentLinks.forEach(link => {
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

// Console log on load
console.log('Jump4Joy page loaded successfully');
