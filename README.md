# Green Way Transportation

Five-page static website: Home, Services, About, Contact, and Request a Quote. The `dist` directory contains the complete deployable site.

## Current design

A photo-led trucking company brochure with straightforward copy, a wide load photo on the homepage, plain service rows, and a gallery with captions below the photographs. The official SVG logo appears directly on the light header and footer backgrounds.

All ten supplied company photographs are used across Home, Services, and About. No stock photographs or internet assets remain. `photo-sources.json` maps optimized assets to the supplied filenames. Images are converted to responsive WebP sizes, with lazy loading below the fold and high priority for the homepage photo. Selecting a gallery photo opens its largest optimized version.

## Forms

Forms validate the entered details and prepare an email to Operations.greenwaycarrier@gmail.com. The visitor must send the draft in their email app. The static website does not automatically send, store, or claim receipt of a request.

## Verification

All five pages pass local file-reference, navigation anchor, unique-ID, landmark, form-label, SVG, image-dimension, and source-set checks. JavaScript syntax checks pass. Green section heading contrast is 12.38:1, body text is 11.07:1, primary quote button text is 8.96:1, and footer text is 7.90:1. No external image/font requests, scroll reveals, or header blur effects remain. Browser rendering and field performance were not measured in this environment.

Open `index.html` locally or serve the files with a static host. Connect the forms to an email service or backend if submission within the website is required. Confirm existing contact details, service coverage, and hours with the business before public use.
