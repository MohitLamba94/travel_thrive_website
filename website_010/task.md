# Travel Thrive — Website Build Brief

I want to build a small static website for my travel business, **Travel Thrive**. I'm giving you the full content and page structure below (the "floor plan"). Please build the site from this brief. Instructions for how I'd like it built are at the bottom.

---

## About the business (facts you'll reference throughout)

- **Name:** Travel Thrive
- **Tagline:** "Plan to travel, travel to thrive."
- **What we are:** A New Delhi–based travel agency, tour operator and tours & travel company, operating since 2000 (25 years).
- **What we do:** Inbound, domestic and outbound travel; air ticketing (no bus or train ticketing); hotel booking; visa assistance; travel insurance; money exchange; car rentals; cruise holidays.
- **Who we serve:** Individuals and groups, with customised solutions.
- **Booking style:** Everything is handled personally by our team over phone, email or WhatsApp — no online forms or payment gateways on the site.
- **Address:** Shop No. 2, Old Market, Tilak Nagar, New Delhi – 110018
- **Phones:** +91 99996 87120 · +91 95825 28718 · +91 11 4564 2929
- **Email:** contact@travelthrive.com
- **Website:** www.travelthrive.com
- **WhatsApp:** +91 99996 87120
- **Office hours:** Mon–Sat, 10:00 am – 7:00 pm; Sunday by appointment.
- **"Plan My Trip" enquiry form (external link):** https://forms.gle/wTLGdkfSHzj35NgC6
- **Associated partners:** Western Union, MoneyGram, IRCTC, Amadeus, MSC Cruises, Star Cruises, ETAA
- **Key stats:** 25+ years of service · 10+ core services · 7 global partners

---

## Site-wide elements (appear on every page)

**Header / navigation**
- Brand wordmark: "Travel Thrive"
- Nav links: Home · About Us · Services (with a dropdown to: Inbound Travel Services, Domestic Travel Services, Outbound Travel Services, and a "View All Services" link) · Contact Us
- A "Plan My Trip" button (links to the enquiry form)
- On mobile, the nav collapses into a menu drawer with the same links plus quick "Call" and "Chat on WhatsApp" buttons.

**Footer**
- Brand wordmark and the tagline line: "Plan to travel, travel to thrive. A travel agency and tour operator serving travellers since 2000."
- An "Explore" column: Home, About Us, Services, Contact Us
- A "Services" column: Inbound Travel, Domestic Travel, Outbound Travel, Hotels & Visas, Insurance & Forex
- A "Contact" column: the address, three phone numbers, and email
- A bottom bar: copyright with the current year, and links to Terms & Conditions, Privacy Policy, Payment Security, Cancellation Policy, and India Domestic Quarantine Rules; plus WhatsApp and Email social icons

**Persistent contact shortcuts**
- A floating WhatsApp button (bottom corner).

---

## Page 1 — Home (`index.html`)

1. **Hero**
   - Eyebrow: "Since 2000 · Trusted Travel Partner"
   - Headline: "Plan to Travel, Travel to Thrive"
   - Sub-text: "Travel Thrive is a New Delhi-based travel agency and tour operator offering inbound, domestic and outbound travel services, complete ticketing, hotel booking, visa assistance, travel insurance and money exchange — with customised solutions for individuals and groups."
   - Two buttons: "Start Planning" (enquiry form) and "Explore Packages" (services page)
   - Suggested image: `assets/hero-coastline.jpg`

2. **Who We Are**
   - Eyebrow: "Who We Are"
   - Heading: "A travel agency built on 25 years of trust."
   - Paragraph: "Travel Thrive is a New Delhi-based, full-service travel agency and tour operator, crafting inbound, domestic and outbound journeys for travellers who want every detail handled with care — from tickets to itineraries."
   - Three stats: 25+ Years of Service · 10+ Core Services · 7 Global Partners
   - A badge/label: "Est. 2000 — Travel Agency & Tour Operator"
   - Suggested image: `assets/pool-relax.jpg`

3. **Trust / Credibility row** — four points:
   - Established Since 2000 — "Two and a half decades of planning journeys across India and abroad."
   - End-to-End Service — "Tickets, hotels, visas, insurance and currency — all under one roof."
   - Personal Attention — "Direct phone and WhatsApp access to your travel planner, always."
   - Global Partnerships — "Working with IRCTC, Amadeus, MSC Cruises, Western Union and more."

4. **Travel Categories** (heading: "Wherever you're headed, we've mapped it.") — three alternating image/text blocks:
   - **Outbound** — "International holidays, planned locally." / "From visa paperwork to on-ground itineraries, our outbound desk manages every layer of your international trip." → link to outbound services. Suggested image: `assets/european-old-town.jpg`
   - **Domestic** — "India, seen the way it should be." / "Hills, coasts, heritage cities and hidden corners — our domestic packages are built around how you like to travel." → link to domestic services. Suggested image: `assets/mountain-lake.jpg`
   - **Inbound** — "A warm welcome to India." / "For travellers visiting India, we design comfortable, well-paced journeys backed by local, on-ground support." → link to inbound services. Suggested image: `assets/jodhpur-fort.jpg`

5. **What We Offer** (heading: "Every service your journey needs." / "From your first booking to your return ticket, Travel Thrive covers travel, transit and paperwork in full.") — a grid of service cards, each with a tag, title and image:
   - Ticketing — Air Ticket Booking (`assets/aircraft-wing.jpg`)
   - Cruises — Cruise Holidays (`assets/cruise-ship.jpg`)
   - Stay — Hotel Booking (`assets/luxury-hotel-room.jpg`)
   - Documentation — Visa Assistance (`assets/travel-documents.jpg`)
   - Protection — Travel Insurance (`assets/travel-suitcase.jpg`)
   - Currency — Money Exchange (`assets/amsterdam-canal.jpg`)

6. **Why Choose Us** (heading: "The details, handled.") — a numbered list of four:
   - 01 · 25 Years of Experience — "A travel agency, tour operator and tours & travel company trusted since 2000."
   - 02 · One Team, Every Service — "Ticketing, hotels, visas, insurance and currency exchange — no need to juggle vendors."
   - 03 · Direct, Personal Access — "Speak to us by phone, email or WhatsApp — no call centres, no automated queues."
   - 04 · Trusted Global Network — "Associated with IRCTC, Amadeus, MSC Cruises, Star Cruises, Western Union, MoneyGram and ETAA."
   - Suggested image: `assets/why-choose.jpg`

7. **Associated With** (heading: "Backed by trusted global networks.") — a row of partner names: Western Union, MoneyGram, IRCTC, Amadeus, MSC Cruises, Star Cruises, ETAA.

8. **Contact** (heading: "Let's plan your next journey.") — the full contact list (address, three phones, email, website), WhatsApp and Email buttons, and an embedded Google Map of the "Shop No. 2, Old Market, Tilak Nagar, New Delhi – 110018" office.

---

## Page 2 — About Us (`about.html`)

1. **Page hero** — breadcrumb (Home / About Us), heading "About Travel Thrive.", sub-text: "A New Delhi-based travel agency and tour operator planning holidays travellers actually enjoy — since 2000." Suggested image: `assets/european-old-town.jpg`

2. **Our Story**
   - Heading: "Two and a half decades of planning holidays people actually enjoy."
   - Paragraph: "Travel Thrive is a New-Delhi based travel agency, tour operator and tours & travel company that has operated since 2000 — built around one idea: travel should feel effortless for the traveller. From inbound and domestic journeys to outbound holidays, complete ticketing, hotels, visas, insurance and money exchange, we handle the details so you can focus on the experience."
   - Pull-quote: "Plan to travel, travel to thrive."
   - Same three stats: 25+ Years · 10+ Core Services · 7 Global Partners
   - Suggested image: `assets/venice-canal.jpg`

3. **What kind of business we are** — four points:
   - Travel Agency — "Personal, end-to-end planning for individuals and groups."
   - Tour Operator — "Curated inbound, domestic and outbound tours."
   - Tours & Travel Company — "One team for tickets, stays, visas, insurance and forex."
   - Based in New Delhi — "Serving travellers from New Delhi since 2000."

4. **What We Do** (heading: "Everything your journey needs, under one roof." / "From the first booking to the return ticket, we cover travel, transit and paperwork in full — so there's no need to juggle multiple vendors.") — four cards:
   - Travel Services — "Inbound, domestic and outbound travel, planned around how you like to travel."
   - Ticketing — "Air ticket booking through trusted partners such as Amadeus."
   - Hotels & Visas — "Hotel booking and visa assistance to keep your stays and paperwork sorted."
   - Insurance & Forex — "Travel insurance and money exchange, backed by Western Union and MoneyGram."

5. **Why Choose Us** — same numbered list of four as on the Home page. Suggested image: `assets/hotel-concierge.jpg`

6. **Associated With** — same partner row as the Home page.

7. **Call-to-action band** — "Ready to plan your next journey?" / "Tell us where you'd like to go and we'll take care of the rest." with "Contact Us" and "WhatsApp Us" buttons.

---

## Page 3 — Services (`packages.html`)

1. **Page hero** — breadcrumb (Home / Services), heading "Every service your journey needs.", sub-text: "From inbound, domestic and outbound travel to ticketing, hotels, visas, insurance and money exchange — Travel Thrive handles it all under one roof, the way we have since 2000." Suggested image: `assets/coastal-cliff.jpg`

2. **Intro** — heading "One team for the whole trip." / "Rather than piecing your journey together across vendors, let a single team plan the travel, book the tickets, sort the stays and handle the paperwork — start to finish."

3. **Travel Services** (heading: "Wherever you're headed, we've mapped it.") — three alternating image/text blocks, each with an "Enquire" button (WhatsApp). Use anchor ids `outbound`, `domestic`, `inbound` so the nav dropdown can jump to them.
   - **Outbound** — "International holidays, planned locally." / "From visa paperwork to on-ground itineraries, our outbound desk manages every layer of your international trip — flights, stays, transfers and sightseeing, all coordinated by one team." (`assets/european-old-town.jpg`)
   - **Domestic** — "India, seen the way it should be." / "Hills, coasts, heritage cities and hidden corners — our domestic packages are built around how you like to travel, at a pace that suits you." (`assets/mountain-lake.jpg`)
   - **Inbound** — "A warm welcome to India." / "For travellers visiting India, we design comfortable, well-paced journeys backed by local, on-ground support from arrival to departure." (`assets/jodhpur-fort.jpg`)

4. **Everything Else** (heading: "The rest of your trip, handled." / "Tickets, stays, paperwork and currency — the pieces that turn a plan into a journey.") — a grid of service cards, each with a tag, title, one-line description and image:
   - Ticketing — Air Ticket Booking — "Domestic and international flights booked through Amadeus and trusted partners." (`assets/aircraft-wing.jpg`)
   - On the Road — Car Rentals — "Self-drive and chauffeur-driven cars for airport transfers and road trips." (`assets/car-rental.jpg`)
   - Stay — Hotel Booking — "Handpicked stays for every budget, at destinations across India and abroad." (`assets/luxury-hotel-room.jpg`)
   - Documentation — Visa Assistance — "Guidance and paperwork support to keep your visa applications on track." (`assets/travel-documents.jpg`)
   - Protection — Travel Insurance — "Cover for the unexpected, so you travel with genuine peace of mind." (`assets/travel-suitcase.jpg`)
   - Currency — Money Exchange — "Foreign currency and transfers backed by Western Union and MoneyGram." (`assets/amsterdam-canal.jpg`)
   - Cruises — Cruise Holidays — "Ocean and river cruises arranged with MSC Cruises and Star Cruises." (`assets/cruise-ship.jpg`)

5. **Why Book With Us** — same numbered list of four as on the Home page. Suggested image: `assets/hotel-concierge.jpg`

6. **Associated With** — same partner row.

7. **Call-to-action band** — "Ready to plan your next journey?" / "Tell us where you'd like to go and we'll take care of the rest." with "Contact Us" and "WhatsApp Us" buttons.

---

## Page 4 — Ticketing (`ticketing.html`)

1. **Page hero** — breadcrumb (Home / Ticketing), heading "Every ticket, one call away.", sub-text: "Air, bus and train tickets booked and managed by our team — so your journey starts without the hassle." Suggested image: `assets/aircraft-wing.jpg`

2. **Intro** — heading "Booking made simple, for every mode of travel." / "Whether you're flying, taking the bus, or travelling by train, Travel Thrive handles the booking, schedules and confirmations — so you can focus on the trip itself."

3. **Three ticket types** — alternating image/text blocks, each with "Call to Book" and "WhatsApp Us" buttons. Use anchor ids `air`, `bus`, `train`.
   - **Air Ticket Booking** — "Domestic and international flights, booked right." / "We book domestic and international air tickets through trusted global distribution partners, including Amadeus, managing fares, schedules and confirmations on your behalf." (`assets/aircraft-wing.jpg`)
   - **Bus Ticket Booking** — "Comfortable bus journeys across India." / "From overnight sleeper coaches to short intercity hops, we arrange bus tickets across major routes in India, handling seat selection and scheduling for a smooth trip." (`assets/highway-road.jpg`)
   - **Train Ticket Booking** — "Rail travel, booked through our IRCTC partnership." / "As an IRCTC-associated agency, we book train tickets and manage berth preferences and schedules, taking the effort out of planning your rail journey." (`assets/train-platform.jpg`)

4. **A note** — "All ticketing is handled directly by our team over phone, email or WhatsApp — no online forms, no payment gateways."

5. **Why Book With Us** — four points:
   - Real-Time Coordination — "We track schedules and confirmations closely, so you're always informed."
   - Trusted Booking Partners — "Working with IRCTC and Amadeus for reliable, verified ticketing."
   - One Point of Contact — "A single team manages your air, bus and train bookings together."
   - 25 Years of Experience — "A travel agency and tour operator trusted with tickets since 2000."

6. **Call-to-action band** — "Tell us your route. We'll handle the ticket." / "Call, email or WhatsApp us with your travel dates and we'll take it from there." with "Call +91 99996 87120" and "WhatsApp Us" buttons.

---

## Page 5 — Contact Us (`contact.html`)

1. **Page hero** — breadcrumb (Home / Contact Us), heading "Let's plan your journey.", sub-text: "Call, email or WhatsApp our New Delhi team — a real person, ready to help you plan travel, tickets, stays and everything in between." Suggested image: `assets/amsterdam-canal.jpg`

2. **Ways to reach us** — four points:
   - Call Us — the two mobile numbers (+91 99996 87120, +91 95825 28718)
   - WhatsApp — "Chat with us instantly — the quickest way to reach our team."
   - Email Us — contact@travelthrive.com
   - Office Hours — "Mon–Sat, 10:00 am – 7:00 pm; Sunday by appointment."

3. **Contact details + map** — heading "Visit us at", the full contact list (address, three phones, email, website), WhatsApp and Email buttons, and an embedded Google Map of the "Shop No. 2, Old Market, Tilak Nagar, New Delhi – 110018" office.

4. **Call-to-action band** — "Share your trip, we'll take it from there." / "Fill in a few quick details and our team will get back to you with a plan." with a "Plan My Trip" button (enquiry form) and a "Call +91 99996 87120" button.

---

# How I'd like it built

With the content above, please build a **static, mobile-first** website that looks genuinely good — clean, modern and polished, the kind of site a real, established travel agency would be proud of. A few pointers:

- **Mobile first.** Design for phones first, then scale up gracefully to tablet and desktop. It should feel great on a small screen.
- **Theme** The theme should be modern rich vibrant. Do not explore the previous websites built in this repo, as i do not want thier color, theme and style to influence you.
- **You own the design.** Pick the theme, colour palette, typography, layout and any motion/animation yourself. I'm only giving you content — the whole visual direction is yours to decide. Make deliberate, distinctive choices rather than a generic template look.
- **Make it image-rich.** I like photo-led, visual layouts. Lean into imagery rather than plain rows of text.
- **Images:** an `assets/` folder is already included with photos you can use — I've listed suggested images next to each section as a starting point, but treat them only as suggestions. Feel free to reuse them differently, or to source better, freely-usable images from the internet if you think they'd suit the design more. Whatever looks best. So read all the images in the assets folder and if download a image from internet first read it yourself, do not just go by metadata, metadata is mislading soemtimes.
- **Structure:** five pages — `index.html`, `about.html`, `packages.html` (Services), `ticketing.html`, `contact.html` — all cross-linked through the nav and footer as described. The footer also references a few policy pages (Terms, Privacy, etc.); you can leave those as placeholder links for now.
- **No back-end.** It's a static site. All enquiries go through phone, WhatsApp, email, or the external Google Form link — there are no forms to process or payments to handle on the site itself.
- Keep it fast, accessible and clean under the hood.

Take your time and make it something special.
