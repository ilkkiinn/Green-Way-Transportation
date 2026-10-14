'use strict';

// Keep desktop and mobile navigation in sync with the page or section URL.
(() => {
  const links = Array.from(document.querySelectorAll('.site-header .nav-links a, .site-header .mobile-menu li a'));
  const categories = new Set(['machinery.html', 'military-equipment.html', 'generators-transformers-batteries.html']);
  const updateNavigation = () => {
    const page = window.location.pathname.split('/').pop() || 'index.html';
    const equipment = categories.has(page) || (page === 'index.html' && window.location.hash === '#equipment');
    links.forEach((link) => {
      const href = link.getAttribute('href');
      const active = equipment ? href === 'index.html#equipment' : href === page;
      if (active) link.setAttribute('aria-current', equipment ? 'location' : 'page');
      else link.removeAttribute('aria-current');
    });
  };
  updateNavigation();
  window.addEventListener('hashchange', updateNavigation);
  window.addEventListener('pageshow', updateNavigation);
})();
