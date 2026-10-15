'use strict';

(() => {
  const viewer = document.querySelector('.photo-viewer');
  if (!viewer || typeof viewer.showModal !== 'function') return;
  const image = viewer.querySelector('.photo-viewer-image');
  const closeButton = viewer.querySelector('.photo-viewer-close');
  const stage = viewer.querySelector('.photo-viewer-stage');
  const status = viewer.querySelector('.photo-viewer-status');
  let opener;
  closeButton.addEventListener('click', () => viewer.close());
  viewer.addEventListener('click', (event) => {
    if (event.target === viewer || event.target === stage) viewer.close();
  });
  viewer.addEventListener('close', () => {
    document.documentElement.classList.remove('photo-viewer-open');
    image.onload = null;
    image.onerror = null;
    image.hidden = true;
    image.removeAttribute('src');
    status.textContent = '';
    if (opener && opener.isConnected) opener.focus({ preventScroll: true });
    opener = null;
  });
  document.querySelectorAll('a[data-photo-viewer]').forEach((link) => {
    link.addEventListener('click', (event) => {
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const thumbnail = link.querySelector('img');
      if (!thumbnail) return;
      // Keep the ordinary same-tab photo link as a fallback if dialog opening fails.
      try { viewer.showModal(); } catch (_) { return; }
      event.preventDefault();
      opener = link;
      document.documentElement.classList.add('photo-viewer-open');
      image.hidden = true;
      image.alt = thumbnail.alt;
      status.textContent = 'Loading photo…';
      image.onload = () => { image.hidden = false; status.textContent = ''; };
      image.onerror = () => { image.hidden = true; status.textContent = 'This photo could not load. Close it and try again.'; };
      image.src = link.href;
      closeButton.focus();
    });
  });
  // Native dialog handles Escape, keyboard focus containment and background inertness.
})();
