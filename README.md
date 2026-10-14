# Green Way Transportation — complete website

Extract the entire ZIP into a new folder, then open index.html. Keep assets, styles.css, intro.css, main.js, and intro.js alongside the five HTML pages. No installation or build step is required. Open the extracted file, rather than opening it from inside the ZIP.

This complete package includes the dark homepage hero with the new supplied photograph fading into black, left-aligned text on desktop, responsive phone layout, all company photographs, the official logo, all five pages, and the two-second truck intro showing “The right way is the green way.”

Main phone: 602-919-0893. Alternate: (602) 451-3911. Coverage: United States.

For GitHub Pages, upload the contents of this folder to the repository root, including the complete assets folder.

The forms prepare an email draft. The visitor must send it from their email app; this static website does not send or store form submissions automatically.

Package checks cover markup, local file and anchor references, archive integrity, and JavaScript syntax. Browser rendering has not been verified in this environment.


## October 14: categories and motion

The homepage now links to three separate category pages: Machinery; Military Equipment; Generators, Transformers and Batteries. The Machinery gallery contains six supplied company photos, and Military Equipment contains seven. Generators, Transformers and Batteries contains five supplied company photos. `categories.json` records the exact category names and assigned photo assets; it is a planning manifest, not a runtime gallery loader. Add approved company photos to the corresponding static page’s `.category-gallery` when provided. Do not source photos from the internet.

`motion.js` adds one-time scroll reveals with IntersectionObserver. Content remains visible without JavaScript or with reduced motion enabled. Existing content photos gently zoom on fine-pointer hover, with no zoom on touch devices. The main hero and logos do not zoom. No animation libraries or scroll event listeners are used.

For a complete local test, extract the entire ZIP and open index.html. Keep all HTML, CSS, JavaScript, and assets together. Replace all site files together when uploading to GitHub Pages.

Military photos use responsive WebP files, lazy loading, full-photo links, and descriptive alt text. All seven uploaded photos are included; no category photo has been sourced elsewhere.

Machinery now includes all six additional supplied photos. Full images remain uncropped in the responsive gallery, with hover zoom and full-photo links.

All three categories are populated: 6 Machinery, 7 Military Equipment, and 5 Generators, Transformers and Batteries photos. Gallery images are supplied by the client; none were sourced online.

Typography update: Arial / Helvetica system fonts, with no font downloads required. Repeated phone numbers remain reduced. The desktop hero uses a full background with a black fade and a small rightward image offset. Mobile retains the full-width photo below the slogan.

Navigation highlights What We Move on category pages and on index.html#equipment. Home is highlighted on the homepage when no equipment anchor is active. Both desktop and mobile navigation update on hash changes and history restoration.
