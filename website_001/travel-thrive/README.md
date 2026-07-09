# Travel Thrive Website

A complete, static website for Travel Thrive, a travel agency and tour operator based in New Delhi, India. It is ready to host as-is — no build step, no server, no backend, and no database required.

## Hosting

Because this is a plain static site (HTML, CSS, and vanilla JS only), you can deploy it to any static file host, for example:

- **Netlify / Vercel** — drag and drop the `travel-thrive` folder onto the dashboard, or connect it as a Git repo.
- **GitHub Pages** — push the folder to a repo and enable Pages for the branch.
- **Any web server** — upload the folder via FTP/SFTP to a shared host; `index.html` is the entry point.

No `npm install`, bundler, or server process is needed.

## File Structure

```
travel-thrive/
├── index.html              Home page
├── about.html               About Us
├── packages.html             Inbound / Domestic / Outbound travel packages
├── ticketing.html            Air / Bus / Train ticketing + hotel, visa, insurance, forex
├── contact.html              Contact details
├── terms.html                 Terms and Conditions
├── payment-security.html      Payment Security policy
├── cancellations.html         Cancellations policy
├── privacy.html                Privacy Policy
├── quarantine.html             India Domestic Quarantine Rules (general guidance)
├── css/
│   └── styles.css             All site styling (colors, layout, components)
├── js/
│   └── main.js                 Nav toggles, mega-menu, mobile accordion, back-to-top
└── README.md
```

Every page shares the same `<header>` (with mega-menus), mobile nav panel, and `<footer>`, copied verbatim across pages for consistency.

## Editing Common Things

### Adding or editing services / packages

- **Home page teaser grid**: edit the `services-grid` section in `index.html`.
- **Packages detail**: edit the relevant `#inbound`, `#domestic`, `#outbound` sections in `packages.html`.
- **Ticketing detail**: edit the relevant `#air`, `#bus`, `#train` (and other) detail blocks in `ticketing.html`.

When adding a brand-new service category, remember to also add a matching entry to the "Packages" or "Ticketing" mega-menu in the `<header>` of **every** HTML page (and the mobile nav accordion), since these are duplicated per page rather than shared via includes.

### Updating contact information

Contact details (phone numbers, email, office address) appear in multiple places on **every page**:

- Header: phone number link (`header-phone`) and "Contact Us" button
- Mobile nav panel footer: call button
- Footer: address, phone numbers, email
- `contact.html`: main contact details section

Because there is no shared template/include system, updating contact info means finding and replacing it consistently across **all** HTML files (search for the phone numbers `+91 99996 87120` / `+91 11 4564 2929` and `contact@travelthrive.com`).

### Replacing images

All images are currently hotlinked from Unsplash via URLs like:

```
https://images.unsplash.com/photo-XXXXXXXXXXXXX-XXXXXXXXXXXX?auto=format&fit=crop&w=1920&q=80
```

To use local images instead:

1. Create an `images/` folder in the project root.
2. Add your image files there.
3. Update each `src="..."` (for `<img>` tags) or `background-image:url('...')` (for hero sections) reference to point at `images/your-file.jpg` instead of the Unsplash URL.

### Changing colors and fonts

Site-wide design tokens are defined as CSS custom properties at the top of `css/styles.css`, under the `:root` selector. Edit values there (e.g. brand colors, spacing, font stacks) to restyle the whole site consistently, rather than editing individual selectors throughout the file.

## Notes

- This site has no forms, cookies, analytics, or backend — all pages are purely informational.
- `js/main.js` only handles UI interactions (menu toggles, accordions, back-to-top button) — no data collection or external calls.
