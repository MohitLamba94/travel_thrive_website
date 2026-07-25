# Building your website with the Claude Desktop app

A guide for iterating on this site (`website_007/`) using the Claude Desktop
app's **built-in Browser pane** — written for someone coming from the Claude
Code CLI.

Best way is to go to google chrome, and press

Command Shift C

That's Chrome's element picker mode — it's a specific button you have to activate; just opening DevTools doesn't turn it on. Here's how:

The quick way (one shortcut)
On the webpage, press Cmd + Shift + C (Mac).
Now move your mouse over the page — each element highlights and a little tooltip shows its tag, class, and size as you hover.
Click the element to lock it in the Elements panel, where you see its full class="...".
That's the whole thing. Cmd + Shift + C = "select an element to inspect."

---

## 1. Why the desktop app is better for a website build

On the CLI you had to *describe everything in words*. A website is visual, so
that was slow. In the desktop app the loop tightens to:

> **See it** (Browser pane) → **Say it** ("make this button bigger") → **I fix
> it** (edit the code) → refresh → repeat.

The code editing, git, and file handling are identical to the CLI — same
quality. What's new is the **Browser pane** sitting next to the chat.

### What the built-in browser lets us do

| Capability | What it means for you |
|---|---|
| Live preview beside chat | You see the real page while we talk — no window switching. |
| Point & describe | Screenshot a section, paste it, say what's wrong. Far faster than typing out descriptions. |
| I can drive it | I can click around, fill forms, and check things render. |
| I can inspect real styles | I read the *actual* computed color, font, size, spacing of any element — more precise than eyeballing. |
| Responsive testing | I can resize the pane to mobile / tablet / desktop to check layouts. |

> **Important — why we use a server, not the file directly**
> Opening `index.html` as a `file://` path breaks relative links
> (`css/styles.css`, `assets/hero.jpg` show up unstyled / missing). Serving over
> `http://localhost` fixes this. Always view the site through the server URL
> below.

---

## 2. Starting the server

### Option A — ask me (easiest)
Just say **"start the server"** and I'll launch it in the Browser pane.

### Option B — do it yourself in a terminal
```bash
cd /Users/mohitl/Documents/travel_thrive_website && python3 -m http.server 8007 --directory website_007
```
Then open **http://localhost:8007/index.html** in the Browser pane (or any
browser).

### How it's configured
The app remembers the server via `.claude/launch.json`:
```json
{
  "version": "0.0.1",
  "configurations": [
    {
      "name": "website_007",
      "runtimeExecutable": "python3",
      "runtimeArgs": ["-m", "http.server", "8007", "--directory", "website_007"],
      "port": 8007
    }
  ]
}
```
Because of this file, I can start it just by name and it always serves
`website_007/` on port **8007**.

---

## 3. Viewing the site

Once the server is running, open these in the Browser pane:

- Home: **http://localhost:8007/index.html**
- About: **http://localhost:8007/about.html**
- Ticketing: **http://localhost:8007/ticketing.html**

After I change code, **refresh the pane** (or ask me to) to see the update.

---

## 4. Killing / restarting the server

### Ask me
Say **"stop the server"** and I'll shut it down.

### Do it yourself
- If you started it in a terminal: press **Ctrl + C** in that terminal.
- To kill whatever is holding the port:
```bash
lsof -ti:8007 | xargs kill -9
```
- To restart cleanly: kill it (above), then start again (section 2).

You can leave the server running the whole session — no need to restart it
after each edit. Just refresh the pane.

---

## 5. How to give me feedback (the fast way)

1. Look at the section in the Browser pane.
2. Screenshot it (Cmd+Shift+4 on Mac) and paste it into chat, **or** just name
   the section ("the hero", "the packages grid").
3. Tell me the change in plain words: *"too much space here", "swap this image",
   "this heading should be bolder", "align these three cards".*
4. I edit the code; you refresh and confirm.

You don't need to know CSS terms — describe it like you'd describe it to a
person. I'll translate it into code.

---

## 6. Project layout (quick reference)

```
travel_thrive_website/
├── CLAUDE.md                  ← project rules (no EXTERNAL browsers for verifying)
├── CLAUDE_DESKTOP_GUIDE.md    ← this file
├── .claude/launch.json        ← server config for the Browser pane
└── website_007/
    ├── index.html
    ├── about.html
    ├── ticketing.html
    ├── css/styles.css
    ├── js/
    └── assets/                ← all images (.jpg)
```

> **Note on CLAUDE.md:** the rule "don't use Chrome or Safari to verify" is about
> *external* browsers, which got stuck in the old setup. The desktop app's
> built-in Browser pane is fine and is what we now use.

---

## 7. Typical session flow

1. You: "start the server"
2. Me: launches it, site loads in the pane.
3. You: browse, spot something, describe/screenshot it.
4. Me: edit the code.
5. You: refresh, confirm or refine.
6. Repeat. When done, "stop the server" (or just close the app).
