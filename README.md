# 🪵 Carpenter Portfolio — Hugo Site

A bilingual (Arabic / English) carpenter portfolio website built with Hugo.

---

## 📁 Project Structure

```
carpenter-portfolio/
├── hugo.toml                    ← Main config (edit phone, WhatsApp, titles here)
├── content/
│   ├── ar/_index.md             ← Arabic homepage content
│   └── en/_index.md             ← English homepage content
├── layouts/
│   ├── index.html               ← Homepage template (all 4 sections)
│   ├── partials/
│   │   ├── head.html            ← <head> tag (SEO, CSS, fonts)
│   │   ├── nav.html             ← Navigation bar
│   │   ├── section.html         ← Reusable gallery section
│   │   └── footer.html          ← Footer + floating buttons + lightbox
│   └── _default/
│       ├── baseof.html          ← Base layout
│       └── single.html          ← Single page layout
└── static/
    ├── css/main.css             ← ALL styles (edit :root variables for colors)
    ├── js/main.js               ← Navigation, lightbox, AOS init
    └── images/                  ← Replace placeholder images with your photos
        ├── hero-bg.jpg
        ├── s1-1.jpg … s1-5.jpg  (Section 1: Kitchens)
        ├── s2-1.jpg … s2-5.jpg  (Section 2: Partitions)
        ├── s3-1.jpg … s3-5.jpg  (Section 3: Doors)
        └── s4-1.jpg … s4-5.jpg  (Section 4: Carvings)
```

---

## 🚀 Getting Started

### 1. Install Hugo
```bash
# macOS
brew install hugo

# Windows (via Chocolatey)
choco install hugo-extended

# Linux
snap install hugo --channel=extended
```

### 2. Run development server
```bash
cd carpenter-portfolio
hugo server -D
```
Then open http://localhost:1313 in your browser.

### 3. Build for production
```bash
hugo --minify
```
Output goes to the `public/` folder — upload it to any static host.

---

## ✏️ How to Edit

### Change phone / WhatsApp number
Open `hugo.toml` and find:
```toml
phone = "+96170000000"
whatsapp = "+96170000000"
```
Replace with your actual number (include country code, e.g. `+9613XXXXXXX`).

### Change section titles / subtitles
In `hugo.toml`, under `[languages.ar.params]`:
```toml
section1_title    = "مطابخ و دواليب خزين"
section1_subtitle = "تصاميم عصرية وكلاسيكية بأفضل أنواع الخشب"
```

### Add / replace images
Drop your `.jpg` or `.webp` images into `static/images/`:
- `s1-1.jpg`, `s1-2.jpg`, … `s1-5.jpg` → Section 1 gallery
- `s2-1.jpg` … etc. for sections 2–4
- `hero-bg.jpg` → Hero background

To add more than 5 images per section, open `layouts/index.html` and add more paths to the `"images"` slice:
```
"images"   (slice
  "images/s1-1.jpg"
  "images/s1-2.jpg"
  "images/s1-3.jpg"
  "images/s1-4.jpg"
  "images/s1-5.jpg"
  "images/s1-6.jpg"   ← add more here
)
```

### Change colors (design tokens)
Open `static/css/main.css` and edit the `:root` block at the top:
```css
:root {
  --clr-brown:  #7a4f2d;  /* Main brown accent */
  --clr-gold:   #c49a4a;  /* Gold highlight */
  --clr-bg:     #faf7f2;  /* Page background */
  ...
}
```

---

## 🌐 Languages

The site has two versions:
- **Arabic** (`/`) — RTL, Tajawal font
- **English** (`/en/`) — LTR

A language toggle button appears in the top navigation.

To update English section titles, edit `[languages.en.params]` in `hugo.toml`.

---

## 📦 Dependencies (loaded via CDN — no npm needed)
- [AOS](https://michalsnik.github.io/aos/) — scroll animations
- [Google Fonts](https://fonts.google.com/) — Playfair Display + Tajawal

---

## 🏗️ Deployment Options
| Platform | Command |
|---|---|
| Netlify | Connect repo, build command: `hugo --minify` |
| GitHub Pages | Use `peaceiris/actions-hugo` action |
| Vercel | Framework: Hugo, output dir: `public` |
| cPanel / FTP | Upload contents of `public/` folder |
