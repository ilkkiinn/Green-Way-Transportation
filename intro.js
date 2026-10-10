/* The intro covers real loading; it never starts a second set of image requests. */
(() => {
  'use strict';
  const boot = window.greenWayIntro;
  if (!boot || !document.documentElement.classList.contains('intro-pending')) return;

  const overlay = document.querySelector('.entry-intro');
  const blocks = [...document.querySelectorAll('.skip-link, .site-header, main, .site-footer')];
  const previousFocus = document.activeElement;
  const originalInert = blocks.map(block => block.inert);
  const cleanups = [];
  let finished = false;

  const dismiss = (userRequested = false) => {
    if (finished) return;
    finished = true;
    clearTimeout(boot.fallback);
    clearTimeout(deadline);
    cleanups.forEach(cleanup => cleanup());
    blocks.forEach((block, i) => { block.inert = originalInert[i]; });
    document.documentElement.classList.remove('intro-pending');
    try { sessionStorage.setItem('greenway-intro-seen-v1', '1'); } catch (_) { /* Storage is optional. */ }
    if (userRequested) {
      const main = document.querySelector('main');
      main.setAttribute('tabindex', '-1');
      main.focus({ preventScroll: true });
    } else if (document.activeElement === overlay) {
      overlay.blur();
      if (previousFocus && previousFocus !== document.body) previousFocus.focus({ preventScroll: true });
    }
  };
  boot.dismiss = dismiss;
  const deadline = setTimeout(dismiss, Math.max(0, 4000 - (performance.now() - boot.started)));
  blocks.forEach(block => { block.inert = true; });
  overlay.focus({ preventScroll: true });

  const escape = event => { if (event.key === 'Escape') dismiss(true); };
  document.addEventListener('keydown', escape);
  cleanups.push(() => document.removeEventListener('keydown', escape));
  const reduceMotion = () => { if (boot.motion.matches) dismiss(); };
  boot.motion.addEventListener('change', reduceMotion);
  cleanups.push(() => boot.motion.removeEventListener('change', reduceMotion));

  const readyImage = image => new Promise(resolve => {
    let settled = false;
    const removeListeners = () => {
      image.removeEventListener('load', loaded);
      image.removeEventListener('error', failed);
    };
    const done = () => {
      if (settled) return;
      settled = true;
      removeListeners();
      resolve();
    };
    const loaded = () => {
      if (typeof image.decode !== 'function') return done();
      image.decode().catch(() => {}).then(done);
    };
    const failed = () => done();
    cleanups.push(removeListeners);
    if (image.complete) loaded();
    else {
      image.addEventListener('load', loaded, { once: true });
      image.addEventListener('error', failed, { once: true });
    }
  });

  // Await the brand and eager images. The gallery keeps its existing lazy loading.
  const images = [...document.images].filter(image => image.loading !== 'lazy');
  const fonts = document.fonts ? document.fonts.ready.catch(() => {}) : Promise.resolve();
  Promise.all([fonts, ...images.map(readyImage)]).then(() => {
    if (finished) return;
    const remaining = Math.max(0, 2000 - (performance.now() - boot.started));
    const timer = setTimeout(dismiss, remaining);
    cleanups.push(() => clearTimeout(timer));
  });
})();
