# Jason Blackert's Portfolio

Static personal portfolio site. Single-page HTML styled with Tailwind CSS, deployed to GitHub Pages from the `main` branch.

## Stack

- **HTML** — `index.html` contains the entire site (Biography, Projects, Certificates, Testimonials)
- **Tailwind CSS v3** — utility-first styling with two custom `boxShadow` utilities: `shadow-neon` and `shadow-low`
- **Flowbite** — carousel component for the Testimonials section (loaded via CDN)
- **Prettier** — HTML formatting via `prettier-plugin-tailwindcss`

## Features

- **Dark mode** — toggle button in the nav (desktop and mobile). Initializes from `prefers-color-scheme`; user preference persists via `localStorage`.
- **Testimonials carousel** — Flowbite slide carousel with prev/next controls.

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
index.html          # Entire site — all sections in one file
src/input.css       # Tailwind entry point
build/css/style.css # Compiled CSS (committed — required for GitHub Pages)
build/assets/       # Images, icons, resume PDF
tailwind.config.js  # Tailwind config with custom shadow utilities
```

## Deployment

The `build/css/style.css` file is committed to the repo so GitHub Pages can serve the site without a CI build step. Always rebuild CSS before merging to `main`.

Active development happens on the `development` branch.
