# Migration: Google Forms → Self-Hosted Enquiry Form (Namecheap / cPanel)

## Goal
Move away from Google Forms. Replace every "Enquire Now" / "Plan My Trip" Google Form link
with an **on-site enquiry form** hosted on our own Namecheap cPanel account, so all enquiries
arrive directly in our Private Email inbox. Nothing leaves our domain; no third-party service.

## Decisions locked in
- **Mail method:** PHP form → **PHPMailer over SMTP** authenticated to our **Private Email** mailbox
  (reliable inbox delivery via SPF/DKIM; not the unreliable raw `mail()`).
- **Form UX:** a **dedicated enquiry page** (`enquiry.html`) styled like the rest of the site.
  "Enquire Now" buttons link to it, passing the package/destination name in the URL.

---

## What the hosting gives us (from cPanel screenshots)
- Namecheap **shared hosting + cPanel**, primary domain **travelthrive.com**, **SSL active**.
- **PHP available** (cPanel → "Select PHP Version") — required to run the form handler.
- **Private Email** provisioned — a real mailbox with proper SPF/DKIM.
- **MySQL** available (optional — only if we later want to store enquiries, not just email them).
- Live site lives in **`public_html/`** and currently contains:
  `about.html, contact.html, index.html, packages.html, ticketing.html, assets/, css/, js/`
  (i.e. our `website_009`). **Note:** `hot_destinations/amritsar.html` is NOT uploaded there yet.
- Shell/Terminal + File Manager both available for deployment.

---

## Architecture / how it works
1. Visitor clicks **Enquire Now** on the Amritsar page (or any package/CTA).
2. Button opens **`enquiry.html?pkg=Amritsar%20Heritage%20%26%20Wagah`** — the package name
   auto-fills into the form.
3. Visitor fills: name, email, phone, travel dates, no. of travellers, package/destination, message.
4. Form POSTs to **`enquiry.php`**, which:
   - validates the input (and a simple honeypot anti-spam field),
   - sends the enquiry to our inbox via **PHPMailer + SMTP** (authenticated to our mailbox),
   - optionally sends the visitor an auto-reply confirmation,
   - shows a "Thank you — we'll be in touch" confirmation.
5. We reply from our normal inbox. (Optional: also log each enquiry to MySQL.)

---

## Files to be created (all under `public_html/` on the Namecheap host)
| File | Purpose |
|------|---------|
| `enquiry.html` | Dedicated, on-theme enquiry page (matches site header/footer/CSS). |
| `enquiry.php` | Server-side handler: validate → send email via SMTP → thank-you. |
| `vendor/PHPMailer/…` | PHPMailer library (≈3 files). Not installed by default on cPanel; uploaded once. |
| `config.secret.php` | Holds the SMTP mailbox login. **Kept out of git**, permissions `600`. |

### Files to be edited (later, separate step)
- `hot_destinations/amritsar.html` — swap the `forms.gle` "Enquire Now" buttons (3 package buttons
  + CTA) to point at `enquiry.html?pkg=…`.
- Optionally sweep the rest of the site's "Plan My Trip" / Google Form CTAs to the same page.

---

## INPUTS I NEED FROM YOU (to build it)

> You're new to Namecheap/cPanel and have no PHP background — that's fine. Below is exactly where to
> find or create each item. **How to open cPanel:** log in at <https://www.namecheap.com> → *Account* →
> *Dashboard* → find your hosting → **Manage** → **Go to cPanel** (this is the same "Tools" page you
> screenshotted, with the `cPanel` logo top-left). Every step below starts from that cPanel Tools page.
> Tip: cPanel has a **search box at the very top** — typing the tool name is the fastest way to find it.

---

### 1. The "from" mailbox (email address + password)
This is a real email account on our server that the form logs into to send mail. Easiest option is a
**cPanel email account** (self-contained, SMTP host is just `mail.travelthrive.com`).

**Create it (cPanel, click-by-click):**
1. In the cPanel top **search box**, type **`Email Accounts`** → click **Email Accounts**
   (it's under the *Email* section).
2. Click the blue **+ Create** button (top-right).
3. **Domain:** leave as `travelthrive.com`.
4. **Username:** type `no-reply` → this makes the address **`no-reply@travelthrive.com`**.
5. **Password:** click *Set password now* and type a strong one (or *Generate*). **Write it down** —
   we need it for the form. (Don't use your Namecheap login password; make a fresh one.)
6. Leave storage/other settings default → click **+ Create**.

**Find the exact SMTP host/port to confirm (cPanel):**
- Back on the **Email Accounts** list, click **Connect Devices** next to `no-reply@travelthrive.com`.
- Under **Mail Client Manual Settings → Secure SSL/TLS Settings** you'll see:
  - **Outgoing Server (SMTP):** `mail.travelthrive.com`
  - **SMTP Port:** `465`
- Copy those two down (they're usually exactly this).

**What to give me:** the full address (`no-reply@travelthrive.com`), the SMTP host, and the port.
**The password:** you do **not** have to send it to me — see the note at the bottom of this section.

> *(Alternative — Namecheap Private Email:* on the cPanel Tools page click the **Private Email** icon,
> which opens the Private Email portal to create a mailbox there. Its SMTP host is
> `mail.privateemail.com`, port `465`. This is a separate product with more steps — the cPanel email
> account above is simpler, so prefer that unless you specifically want Private Email.)*

---

### 2. The receiving address (where enquiries land)
Where you'll actually read incoming enquiries. Two easy choices:
- **Simplest:** use the **same mailbox** (`no-reply@travelthrive.com`) — it's a real inbox. Read it at
  **<https://webmail.travelthrive.com>**, or in cPanel → **Email Accounts** → **Check Email** next to
  the account.
- **Forward to your personal inbox (e.g. Gmail):** cPanel search box → **`Forwarders`** →
  **Add Forwarder** → forward `no-reply@travelthrive.com` to your Gmail. Then enquiries also drop into
  Gmail.

**What to give me:** which address should receive enquiries (same mailbox, or another one).

---

### 3. PHP version
The form needs PHP 8.0+ ideally. Two ways to check:
- **Terminal (fastest for you):** cPanel search box → **`Terminal`** → open it → run:
  ```bash
  php -v
  ```
  The first line shows the version (e.g. `PHP 8.1.2`).
- **Or GUI:** cPanel search box → **`Select PHP Version`** → the current version is shown at the top;
  you can change it from the dropdown if needed.

**What to give me:** the version string from `php -v` (or a screenshot of Select PHP Version).

---

### 4. Deployment method (how the new files reach the server)
The live site lives in **`~/public_html`** on the server (home dir `/home/ttnamecheap`). Since you're
comfortable in the terminal, you have a few options — just tell me which you prefer and I'll tailor the
final upload steps:
- **cPanel Terminal + git** — clone/pull the repo on the server and copy files into `public_html`.
- **rsync/scp from your Mac** — push the files up over SSH (if SSH access is enabled).
- **cPanel File Manager** — pure point-and-click upload (search box → **`File Manager`** → open
  `public_html` → *Upload*). Good fallback, no terminal needed.

You can sanity-check the target folder now in the **cPanel Terminal**:
```bash
cd ~/public_html && ls
```
You should see `index.html, about.html, packages.html, …` — that confirms it's the live site folder.

**What to give me:** your preferred method (terminal/git, rsync, or File Manager).

---

### About the mailbox password (security)
You have **two safe options** so you never have to hand me the password if you'd rather not:
- **Option A:** share the password with me and I'll place it into `config.secret.php` for you.
- **Option B (more private):** I build `config.secret.php` with a `PASTE_PASSWORD_HERE` placeholder,
  and **you** paste the real password into that one line yourself via the cPanel Terminal (I'll give
  you the exact `nano`/edit command). The password then never leaves your server.

> **Summary of what to send me:** (1) from-address + SMTP host + port, (2) receiving address,
> (3) `php -v` output, (4) preferred deployment method — and whether you want password Option A or B.
> With those, I'll build `enquiry.html`, `enquiry.php`, add PHPMailer, and wire up the buttons.

---

## Security notes (important)
- **Credentials never go into git.** The mailbox password lives only in `config.secret.php`,
  which is added to `.gitignore`, set to permissions `600`, and placed so it is never served over
  the web (ideally `require`d from a path outside `public_html`, or protected via the web server).
- This repo also pushes to **GitHub Pages** (`git subtree push --prefix website_009 origin gh-pages-009`).
  We must **not** leak secrets there. GitHub Pages is **static-only and cannot run PHP** anyway —
  so the enquiry form only functions on the **Namecheap** host. Our live site is the Namecheap one.
- Before go-live, confirm cPanel → **Email Deliverability** shows **SPF and DKIM valid** for
  `travelthrive.com` (usually auto-set with Private Email). This is what keeps enquiry mail out of spam.

---

## HOW TO TEST (once it's built)

### A. Quick SMTP sanity check (optional, before wiring the form)
In cPanel → **Terminal**, confirm PHP can reach the mailserver and send. (I'll give you an exact
one-off test script, but the idea is: run a small PHP file that sends one test email via PHPMailer
and prints success/failure.) If the test email lands in your inbox, SMTP creds are good.

### B. End-to-end form test
1. **Upload** `enquiry.html`, `enquiry.php`, `vendor/PHPMailer/…`, `config.secret.php` into
   `public_html/` (and the updated `hot_destinations/amritsar.html`).
2. Visit **https://www.travelthrive.com/enquiry.html** directly — confirm the page renders on-theme.
3. Fill the form with your own email as the visitor and **submit**.
   - Expect the **thank-you** confirmation to appear.
   - Expect the enquiry email to arrive at your **receiving address** within a minute.
   - If auto-reply is enabled, expect a confirmation at the visitor email too.
4. From the **Amritsar page** (`/hot_destinations/amritsar.html`), click each package's
   **Enquire Now** — confirm it lands on `enquiry.html` with the **package name pre-filled**.
5. **Spam check:** verify the email arrives in **Inbox**, not Spam/Junk. If it hits spam, re-check
   SPF/DKIM under Email Deliverability.
6. **Failure test:** submit with a blank required field — confirm it's rejected with a clear message
   (not a broken page).

### C. What to check if something fails
- Nothing arrives → check the mailbox/password in `config.secret.php`, SMTP host/port, and
  cPanel → **Errors** log or the PHP error log.
- 500 error on submit → PHP version mismatch or PHPMailer path wrong.
- Lands in spam → SPF/DKIM not aligned for the sending domain.

---

## Open question for you
Do you want to do the **quick SMTP test (step A)** from the cPanel Terminal first to confirm the
mailbox works, **before** I wire up the full form? Or should I build everything in one go and we
test end-to-end?
