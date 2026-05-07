# Jason Blackert's Portfolio

Static personal portfolio site styled with Tailwind CSS, deployed to GitHub Pages from the `main` branch.

## Stack

- **HTML** — multi-page site (`index.html`, `about.html`, `contact.html`)
- **Tailwind CSS v3** — utility-first styling with custom `shadow-neon` and `shadow-low` box-shadow utilities
- **Vanilla JS** — terminal page loader, testimonials switcher, dark mode toggle
- **Prettier** — HTML formatting via `prettier-plugin-tailwindcss`

## Features

- **Terminal aesthetic** — macOS-style traffic-light dots, monospace font, card title bars, animated boot sequence page loader
- **Multi-page** — Home, About, Contact; active nav link highlighted per page
- **Responsive nav** — desktop shows full nav; mobile collapses to hamburger (☰/✕ toggle) with about, contact, and theme toggle inside
- **Dark / light mode** — toggle in header (desktop) or hamburger menu (mobile); initializes from `prefers-color-scheme`, persists via `localStorage`
- **Testimonials** — custom vanilla JS fade switcher (prev/next + dot indicators, auto-advances every 8s)
- **Animated footer icon** — static Google Noto alien emoji, switches to animated GIF on hover
- **Responsive GitHub activity graph** — cell size computed from container width, re-renders on resize, centered when below max cell size

## Pages

| Page | Description |
|---|---|
| `index.html` | Home — bio terminal, GitHub activity, projects, certificates, testimonials |
| `about.html` | About — animated terminal walkthrough of background, education, skills, interests |
| `contact.html` | Contact — clickable links for email, LinkedIn, GitHub, Instagram |

## Development

Install dependencies:
```
npm install
```

Watch and rebuild CSS while editing:
```
npm run tailwind
```

Rebuild CSS once:
```
npx tailwindcss -i ./src/input.css -o ./build/css/style.css
```

Format HTML:
```
npm run prettier
```

## Project Structure

```
index.html              # Home page
about.html              # About page
contact.html            # Contact page
src/input.css           # Tailwind entry point
build/css/style.css     # Compiled CSS (committed — required for GitHub Pages)
build/assets/           # Images, icons, resume PDF, emoji assets
tailwind.config.js      # Tailwind config with custom shadow utilities
```

## Deployment

`build/css/style.css` is committed to the repo so GitHub Pages can serve the site without a CI build step. Always rebuild CSS before merging to `main`.

Active development happens on the `development` branch.
