# Style Guide

This project uses a design system based on Tailwind CSS. The rules below ensure visual consistency across all pages.

## Color Palette
| Token | HSL | Hex |
|-------|-----|-----|
| `--medical-blue` | `210 80% 55%` | `#308CE8` |
| `--medical-green` | `150 50% 65%` | `#79D2A5` |
| `--medical-light` | `210 20% 98%` | `#F8F9FA` |
| `--background` | `0 0% 99%` | `#FCFCFC` |
| `--foreground` | `210 15% 15%` | `#20262B` |
| `--accent` | `150 50% 65%` | `#79D2A5` |
| `--muted` | `210 20% 95%` | `#EFF2F4` |
| `--border` | `210 20% 90%` | `#E0E5EA` |

All colors are defined in `src/index.css` and referenced via Tailwind utility classes (e.g. `bg-medical-blue`). Colors must be defined using HSL notation.

## Typography
- **Font family:** Tailwind `font-sans` stack (`system-ui`, `sans-serif`).
- **Headings:** Use `font-bold` with `text-medical-blue`.
- **Body text:** Use `text-foreground` for primary text and `text-muted-foreground` for secondary text.
- **Scale:** `text-xs` up to `text-5xl` following Tailwind's scale.

## Spacing
- Spacing values follow Tailwind's spacing scale and are based on a **4px** unit (`0.25rem`).
- Use `space-y-*` and `space-x-*` for vertical and horizontal rhythm.
- The container uses `padding: 2rem` and a maximum width of `1400px` at the `2xl` breakpoint.
- Border radius is controlled via the `--radius` variable (`0.75rem`); use `rounded` utilities based on this token.

Adhere to these rules when creating or updating UI components.
