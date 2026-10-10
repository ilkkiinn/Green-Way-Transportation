# Green Way Transportation — intro preview

This is a separate preview. It has not been committed, pushed, or deployed.

Extract the ZIP and open index.html in a browser. The website files and assets are all in this folder. To replay the intro, close the tab and open a new one; browsers that restore session state may require clearing this site's session storage.

The supplied truck animation is adapted to plain CSS, with Green Way colors and transform-based movement. The logo and truck appear while the real page loads behind them. Once styles, fonts, logos, and eager images (including the homepage's responsive main photograph) are ready and about 2 seconds have elapsed, the page is revealed. Gallery images retain lazy loading and do not delay entry.

The intro runs once per browser-tab session when session storage is available. Reduced-motion visitors and visitors with JavaScript disabled see the page directly. Escape dismisses the intro. Failed image requests are tolerated, and a 4-second deadline prevents slow assets from trapping visitors. An independent 6-second fallback handles a missing intro script.

The existing pages, official logo, company photos, and email-draft forms are preserved. Forms prepare a draft in the visitor's email app; the visitor still needs to send it.

Validation: JavaScript syntax, loading-state behavior tests, and local asset references checked. Browser rendering and measured performance have not been verified in this environment.

Quote field labels and optional notes now align across paired inputs even when a title wraps. Quote and contact layouts stack at tablet widths, and paired fields stack on phones. Mobile menus can scroll on short screens, footer links have larger touch targets, and the intro fits landscape phone screens.
