'use strict';

const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.mobile-menu');

if (toggle && menu) {
  const setMenu = (open) => {
    menu.hidden = !open;
    menu.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  };
  setMenu(false);
  toggle.hidden = false;
  toggle.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
  menu.addEventListener('click', (event) => {
    if (event.target.closest('a')) setMenu(false);
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      setMenu(false);
      toggle.focus();
    }
  });
  document.addEventListener('click', (event) => {
    if (!event.target.closest('.site-header')) setMenu(false);
  });
  const desktop = window.matchMedia('(min-width: 1060px)');
  desktop.addEventListener('change', () => setMenu(false));
}

const labels = {
  name: 'Name', company: 'Company', phone: 'Phone', email: 'Email',
  pickup: 'Pickup location', delivery: 'Delivery location', loadtype: 'Load type',
  weight: 'Weight / dimensions', timing: 'Timing', message: 'Message'
};

document.querySelectorAll('form[data-form]').forEach((form) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const isQuote = form.dataset.form === 'quote';
    const subject = isQuote ? 'Transportation quote request' : 'Green Way website inquiry';
    const body = Array.from(new FormData(form), ([key, value]) => {
      return value.toString().trim() ? `${labels[key] || key}: ${value.toString().trim()}` : '';
    }).filter(Boolean).join('\n\n');
    const mailto = `mailto:greenwaycarrier@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    const result = form.querySelector('.form-result');
    result.replaceChildren();
    const note = document.createElement('span');
    note.textContent = 'Your email draft is ready. Send it in your email app to complete your request. Your details will stay here until you leave this page. ';
    const link = document.createElement('a');
    link.href = mailto;
    link.textContent = 'Open email draft again';
    result.append(note, link);
    result.hidden = false;
    window.location.href = mailto;
  });
});
