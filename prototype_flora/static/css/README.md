# Flora Deluxe — CSS System

Design concept: **"Structural Bloom"** — плотные цветные блоки, строгие линии, никакой воздушности.

## Структура

```
css/
├── app.css              ← entry point (подключай только его)
├── base/
│   ├── variables.css    ← все CSS-переменные (цвета, шрифты, отступы, z-index)
│   ├── reset.css        ← нормализация
│   ├── layout.css       ← container, section, grid, flex-utils
│   ├── header.css       ← sticky header, burger, logo, cart
│   └── footer.css       ← колонки, соцсети, bottom bar
├── components/
│   ├── buttons.css      ← btn, btn--primary/terra/outline/ghost + sizes
│   ├── cards.css        ← .card (product), .cat-card (category)
│   ├── forms.css        ← inputs, selects, checkboxes, search-bar
│   ├── utils.css        ← cart-drawer, nav-drawer, toast, tags, benefits
│   └── wizard.css       ← multi-step form (checkout)
├── pages/
│   ├── home.css         ← hero, categories, bestsellers, benefits, insta, cta
│   ├── contacts.css     ← contacts layout, info blocks
│   └── booking.css      ← checkout layout (заготовка)
└── adaptive/
    ├── desktop-large.css  (>1400px)
    ├── laptop.css         (≤1399px)
    ├── laptop-small.css   (≤1023px)
    ├── tablet.css         (≤767px)
    └── mobile.css         (≤479px)
```

## Цвета
| Переменная | Значение | Назначение |
|---|---|---|
| `--color-bg` | `#F2F0E9` | Основной фон (Almond Milk) |
| `--color-white` | `#FFFFFF` | Карточки, инпуты |
| `--color-olive` | `#4B5320` | Хедер, футер, кнопки |
| `--color-terra` | `#C17C5F` | Акценты, badge, hover |
| `--color-heading` | `#1A1A1A` | Заголовки |
| `--color-text` | `#2C3318` | Основной текст |

## Шрифты
- **Heading:** `Cormorant Garamond` (serif, засечки)
- **Body:** `Manrope` / `Inter` (sans-serif)

## Ключевые принципы
- `border-radius: 0` — прямые углы везде
- Разделители — линии `1px solid var(--color-border)`, не отступы
- Кнопки — uppercase, letter-spacing
