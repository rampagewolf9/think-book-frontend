# Style Keywords & Tailwind CSS Cheat Sheet 🎨

This document contains a complete list of **custom style keywords**, **CSS variables**, and **Tailwind CSS utilities** configured in `index.css`.

---

## 📌 1. Background Keywords (`bg-*`)

These keywords control the background colors and backdrops across light and dark modes.

| Keyword Class | CSS Property / Variable | Usage Description |
| :--- | :--- | :--- |
| `.bg-app` | `var(--bg)` | Main application background (Light: `#fff` / Dark: `#16171d`) |
| `.bg-card` | `var(--code-bg)` | Secondary / card container background |
| `.bg-accent-soft` | `var(--accent-bg)` | Soft semi-transparent accent background |
| `.bg-social` | `var(--social-bg)` | Subtle container background for social links / tags |
| `.bg-glass` | `rgba(255, 255, 255, 0.05)` + `blur` | Frosted glassmorphism background effect |

### 🛠️ Common Tailwind Background Utilities
- `bg-white` / `bg-slate-900` – Solid theme colors
- `bg-opacity-50` / `bg-opacity-90` – Background transparency
- `bg-gradient-to-r from-purple-500 to-indigo-600` – Gradient backgrounds

---

## 🃏 2. Card Keywords (`card-*`)

Pre-designed component keywords for creating clean, interactive cards.

| Keyword Class | Features | Usage Example |
| :--- | :--- | :--- |
| `.card` | Rounded corners, standard padding (`1.25rem`), theme border, soft shadow. | `<div className="card">...</div>` |
| `.card-hover` | Includes `.card` styles + hover lift effect (`translateY(-2px)`) & accent highlight. | `<div className="card-hover">...</div>` |
| `.card-accent` | Soft accent background (`--accent-bg`) & accent border (`--accent-border`). | `<div className="card-accent">...</div>` |
| `.card-glass` | Glassmorphism blur backdrop with semi-transparent border and shadow. | `<div className="card-glass">...</div>` |

### 🛠️ Custom Tailwind Card Composition
```jsx
// Creating custom cards using Tailwind classes:
<div className="bg-card border border-app-border rounded-xl p-5 shadow-md hover:border-accent-custom transition-all duration-200">
  <h3 className="text-heading text-lg font-medium">Note Title</h3>
  <p className="text-main text-sm mt-2">Card body text goes here...</p>
</div>
```

---

## 🔤 3. Text & Typography Keywords (`text-*`, `font-*`)

Keywords for typography, colors, and line formatting.

| Keyword Class | CSS Property | Description |
| :--- | :--- | :--- |
| `.text-main` | `var(--text)` | Default body text color |
| `.text-heading` | `var(--text-h)` | High-contrast title and heading color |
| `.text-accent-custom` | `var(--accent)` | Accent color for highlight text / links |
| `font-sans` | `var(--sans)` | Main body font family |
| `font-heading` | `var(--heading)` | Heading font family |
| `font-mono` | `var(--mono)` | Monospace font family for code / counters |

### 🛠️ Common Tailwind Text Utilities
- `text-xs`, `text-sm`, `text-base`, `text-lg`, `text-xl`, `text-2xl`, `text-3xl` – Font sizes
- `font-normal`, `font-medium`, `font-semibold`, `font-bold` – Font weights
- `tracking-tight`, `tracking-wide` – Letter spacing
- `leading-normal`, `leading-relaxed`, `leading-tight` – Line height

---

## 🖼️ 4. Border & Shadow Keywords (`border-*`, `shadow-*`)

| Keyword Class | Description |
| :--- | :--- |
| `.border-custom` | Standard theme border color (`var(--border)`) |
| `.border-accent-custom` | Accent border color (`var(--accent-border)`) |

### 🛠️ Common Tailwind Border & Shadow Utilities
- `border`, `border-2`, `border-t`, `border-b` – Border width
- `rounded-sm`, `rounded-md`, `rounded-lg`, `rounded-xl`, `rounded-2xl`, `rounded-full` – Border radius
- `shadow-sm`, `shadow-md`, `shadow-xl` – Elevation shadows

---

## ⚡ 5. CSS Theme Variables Reference

These variables are defined in `index.css` and respond automatically to system dark mode preferences (`prefers-color-scheme: dark`):

```css
:root {
  --text: #6b6375;
  --text-h: #08060d;
  --bg: #fff;
  --border: #e5e4e7;
  --code-bg: #f4f3ec;
  --accent: #aa3bff;
  --accent-bg: rgba(170, 59, 255, 0.1);
  --accent-border: rgba(170, 59, 255, 0.5);
  --social-bg: rgba(244, 243, 236, 0.5);
  --shadow: rgba(0, 0, 0, 0.1) 0 10px 15px -3px, rgba(0, 0, 0, 0.05) 0 4px 6px -2px;
}
```

---

## 💡 Quick Examples & Usage Snippets

### Note Card Component Example
```jsx
export default function NoteCard({ title, content, date }) {
  return (
    <div className="card-hover text-left flex flex-col justify-between">
      <div>
        <h2 className="text-heading font-medium text-xl mb-2">{title}</h2>
        <p className="text-main text-sm line-clamp-3">{content}</p>
      </div>
      <div className="mt-4 flex items-center justify-between text-xs text-main">
        <span>{date}</span>
        <button className="bg-accent-soft text-accent-custom px-3 py-1 rounded-md hover:bg-accent-custom hover:text-white transition-colors">
          View Note
        </button>
      </div>
    </div>
  )
}
```

### Action Bar / Header Example
```jsx
<div className="flex items-center justify-between p-4 bg-app border-b border-custom">
  <h1 className="text-2xl font-bold text-heading">ThinkBook</h1>
  <button className="bg-accent-custom text-white px-4 py-2 rounded-lg font-medium shadow-md hover:opacity-90 transition-opacity">
    + New Note
  </button>
</div>
```
