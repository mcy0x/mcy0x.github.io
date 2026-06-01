# Moshe Cohen (mcy0x) — Security Research Portfolio

Personal portfolio of **Moshe Cohen (`@mcy0x`)** — offensive security research, HTB lab
reports, CVE research, and custom tooling. Static site, no build tooling, hosted on GitHub Pages.

🔗 HackerOne: https://hackerone.com/mcy0x · Live: https://mcy0x.github.io

---

## 📁 Structure

```
.
├── index.html              # the whole site (profile, skills, projects, reports, CVE, contact)
├── assets/
│   ├── style.css           # theme (dark glass + red accent)
│   ├── app.js              # report tabs + open-on-click
│   ├── favicon.ico / .png  # browser-tab logo (0x mark)
│   └── og-image.png        # 1200x630 link-preview image (WhatsApp/LinkedIn/Telegram)
├── reports/
│   ├── linux/              # 🐧 drop Linux machine reports here  (.html)
│   └── windows/            # 🪟 drop Windows / AD machine reports here  (.html)
├── cve.json                # CVE research entries (edit by hand)
└── generate.py             # rebuilds the report list + injects preview tags
```

---

## ➕ How to add a new lab report (every time)

1. **Export** your report as a single `.html` file.
2. **Drop it in the right folder by OS:** `reports/linux/` or `reports/windows/`.
   Name it clearly, e.g. `interpreter-htb-writeup.html`. The card title comes from the
   report's `<title>` tag automatically.
3. **Run the generator:**
   ```bash
   python generate.py
   ```
   This rebuilds the Linux/Windows tabs in `index.html`, updates the counters, **and injects
   Open Graph preview tags into every report** so a direct link shows the share image.
4. **Publish:**
   ```bash
   git add .
   git commit -m "Add report: <machine name>"
   git push
   ```

> ⚠️ Reports are **English only** (recruiter-facing) — translate before adding.

---

## 🖼️ Link previews (the share image)

`index.html` and every report carry Open Graph tags pointing at `assets/og-image.png`.
After you push, social platforms cache previews hard. To force a refresh:

- **LinkedIn:** https://www.linkedin.com/post-inspector/ → paste the URL → it re-scrapes.
- **WhatsApp/Facebook:** https://developers.facebook.com/tools/debug/ → paste → "Scrape Again".
- Quick trick: share the URL with `?v=2` appended to bypass the cache.

To regenerate the favicon / og-image, re-run the asset script (Pillow required).

---

## 🧬 How to add a CVE

Edit `cve.json` (a list of objects), then run `python generate.py`:

```json
[
  {
    "id": "CVE-2023-43208",
    "title": "Mirth Connect — Unauthenticated Java Deserialization RCE",
    "description": "One or two sentences: what it is and the impact.",
    "severity": "Critical",
    "link": "https://nvd.nist.gov/vuln/detail/CVE-2023-43208"
  }
]
```

`severity` and `link` are optional.

---

## 🚀 First-time setup — publish to GitHub Pages

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/mcy0x/mcy0x.github.io.git
git push -u origin main
```

Repo named exactly **`mcy0x.github.io`** → site lives at `https://mcy0x.github.io`.
In **Settings → Pages**, set Source = Deploy from branch → `main` / root.

## 👀 Preview locally

```bash
python -m http.server 8080   # then open http://localhost:8080
```
