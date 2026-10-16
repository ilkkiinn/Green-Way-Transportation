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
    const recipient = 'greenwaycarrier@gmail.com';
    const mailto = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    const gmail = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(recipient)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    const result = form.querySelector('.form-result');
    result.replaceChildren();
    const heading = document.createElement('h3');
    heading.textContent = 'Your request is ready to send';
    const note = document.createElement('p');
    note.textContent = 'Nothing has been sent yet. Choose Gmail or your email app below, then press Send there. You can also copy the request and email it yourself.';
    const address = document.createElement('p');
    address.textContent = `To: ${recipient} | Subject: ${subject}`;
    const draft = document.createElement('textarea');
    draft.readOnly = true;
    draft.rows = 10;
    draft.value = body;
    draft.setAttribute('aria-label', 'Your complete email request');
    const actions = document.createElement('div');
    actions.className = 'draft-actions';
    const gmailLink = document.createElement('a');
    gmailLink.href = gmail;
    gmailLink.target = '_blank';
    gmailLink.rel = 'noopener noreferrer';
    gmailLink.className = 'btn btn-primary';
    gmailLink.textContent = 'Open in Gmail';
    const appLink = document.createElement('a');
    appLink.href = mailto;
    appLink.className = 'btn btn-secondary';
    appLink.textContent = 'Open email app';
    const copy = document.createElement('button');
    copy.type = 'button';
    copy.className = 'btn btn-secondary';
    copy.textContent = 'Copy request';
    const feedback = document.createElement('p');
    feedback.setAttribute('role', 'status');
    feedback.setAttribute('aria-live', 'polite');
    copy.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(`To: ${recipient}\nSubject: ${subject}\n\n${body}`);
        feedback.textContent = 'Request copied. Paste it into your email and send it to greenwaycarrier@gmail.com.';
      } catch (_) {
        draft.focus();
        draft.select();
        feedback.textContent = 'Select and copy the request above, then email it to greenwaycarrier@gmail.com.';
      }
    });
    actions.append(gmailLink, appLink, copy);
    result.append(heading, note, address, draft, actions, feedback);
    result.hidden = false;
    result.focus({ preventScroll: true });
    result.scrollIntoView({ block: 'nearest', behavior: 'auto' });
  });
});
