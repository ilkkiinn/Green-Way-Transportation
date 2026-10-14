'use strict';

// Progressive enhancement: only this script can hide a reveal target.
(() => {
  let observer;
  let targets = [];
  const show = (element) => element.classList.remove('motion-pending');
  const showAll = () => {
    if (observer) observer.disconnect();
    targets.forEach(show);
  };
  try {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (preference.matches || !('IntersectionObserver' in window)) return;

    const selector = [
      '.section-head', '.work-heading', '.service-row', '.category-card',
      '.process-line > div', '.process-list > li', '.image-split > *',
      '.about-details > div', '.about-photo-pair > figure', '.detailed-service > *',
      '.service-banner', '.contact-block', '.info-card', '.split > *',
      '.cta-inner > *', '.category-next > *', '.gallery-empty', '.work-photo'
    ].join(',');
    const candidates = Array.from(document.querySelectorAll(selector));
    // Animate a block or its children, never both.
    const selected = new Set(candidates);
    targets = candidates.filter((element) => {
      for (let parent = element.parentElement; parent; parent = parent.parentElement) {
        if (selected.has(parent)) return false;
      }
      return true;
    });
    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        show(entry.target);
        observer.unobserve(entry.target);
      });
    }, { threshold: 0, rootMargin: '0px 0px -32px 0px' });

    targets.forEach((element) => {
      element.classList.add('motion-item');
      // Leave initial viewport content alone, including direct anchor destinations.
      if (element.getBoundingClientRect().top < window.innerHeight) return;
      element.classList.add('motion-pending');
      observer.observe(element);
    });
    // Keyboard navigation and anchor jumps must never land on invisible content.
    document.addEventListener('focusin', (event) => {
      const target = event.target.closest('.motion-pending');
      if (target) { show(target); observer.unobserve(target); }
    });
    window.addEventListener('hashchange', showAll);
    window.addEventListener('pageshow', (event) => { if (event.persisted) showAll(); });
    preference.addEventListener('change', (event) => { if (event.matches) showAll(); });
  } catch (_) {
    showAll();
  }
})();
