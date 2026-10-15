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

Approved mobile hero: uses the supplied Machinery photo (WhatsApp Image 2026-10-12 at 21.36.34.jpeg) through a picture source at 760px and below, with text over a bottom black fade. Desktop retains its approved panoramic photo. All decorative arrows are inline SVG paths, not Unicode emoji. Static framing mockups were reviewed; live browser rendering remains unverified.

Client copy update (October 15): family-owned company based in Phoenix, Arizona with nationwide service; new Services capability and coordination lists; main phone 602-451-3911, alternate 602-919-0893; main inbox greenwaycarrier@gmail.com and alternate operations.greenwaycarrier@gmail.com. All call actions and form email drafts use the primary contact. Hero shows domain, MC 046854, USDOT 3045309 and Phoenix. Footer includes company name and MC # 046854. No ZIP or publication requested for this revision.

Homepage category cards now include responsive covers selected from each assigned gallery. The full card links to its category, with gentle hover zoom and reduced-motion support. Cover IDs are recorded in categories.json.

Gallery frame update: all 18 category photos have a white padded frame, thin border, and subtle shadow. Images retain their natural proportions at rest, including portrait and panoramic photos. Fine-pointer hover zoom remains clipped inside the frame, with keyboard focus and reduced-motion support.

Latest gallery revision: frames and corner decorations removed. Photos now have 12px rounded edges with hover zoom. Full-photo links open a native dialog overlay with a visible page backdrop, SVG close button, Escape dismissal, outside-image dismissal, focus restoration, and scroll locking. The domain label was removed from the homepage hero; MC, USDOT and Phoenix remain. Viewer behavior checked with a JavaScript harness; live browser rendering remains unverified.

Services revision: restored all five original service descriptions and photos. The new Equipment & Capabilities and Planning & Coordination lists remain beneath them. Services headings and discussion actions use capital initials. Current phone/email priorities and the photo overlay remain intact.
