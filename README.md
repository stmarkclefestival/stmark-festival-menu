# 🌟 Egyptian Food Festival Menu — Tailwind Edition

A mobile-first React + Tailwind CSS menu app inspired by the printed Egyptian festival menu. Parchment tones, dark brown diamond-point banners, dotted price lines, and Cinzel/Lora typography — all in Tailwind utility classes.

## Quick Start

```bash
npm install
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173).

## Build for Production

```bash
npm run build
```

Output goes to `dist/` — deploy to Netlify, Vercel, or GitHub Pages.

## Customizing the Menu

All content lives in **`src/menuData.js`**. Each item supports:

```js
{
  name: "Dish Name",        // required
  suffix: "(2 pieces)",     // optional
  price: 12.00,             // required — number
  desc: "Description...",   // optional — shown on detail page
}
```

## Tailwind Custom Tokens

All custom design tokens are defined in `tailwind.config.js`:

### Colors
| Token | Value | Usage |
|---|---|---|
| `dark-brown` | `#3D2B1F` | Banners, header, footer |
| `cream` | `#F5EDD6` | Card backgrounds |
| `parchment-bg` | `#C2A060` | Page background |
| `gold` | `#B8922A` | Accents, ornaments |
| `mid-brown` | `#5C3D2A` | Muted text, dotted lines |

### Fonts
| Token | Font | Usage |
|---|---|---|
| `font-display` | Cinzel | Titles, banners, prices |
| `font-body` | Lora | Item names, descriptions |

### Custom Utilities (in `index.css`)
| Class | Effect |
|---|---|
| `clip-banner` | Diamond-pointed section banner shape |
| `dots-line` | Dotted price line between name and price |
| `stripe-top` | Gold/brown repeating stripe border |
| `hatch-pattern` | Diagonal hatch for detail hero background |

## Project Structure

```
src/
├── main.jsx          # Entry point
├── index.css         # Tailwind directives + custom @layer utilities
├── menuData.js       # ← Edit your menu here
├── App.jsx           # Root — manages menu/detail state
├── Header.jsx        # Top bar with back button
├── SectionBanner.jsx # ◆ Diamond-clipped category header
├── CategoryCard.jsx  # Card wrapping a category's items
├── MenuItem.jsx      # Single row: name ···· price
└── DetailView.jsx    # Full item detail page
```
