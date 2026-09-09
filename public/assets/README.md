# Scribblit Website Asset Kit

High-resolution implementation assets reconstructed from the visual direction in the conversation.

## Recommended usage
- Use `.webp` photo backgrounds in production; keep `.jpg` as fallback.
- Use `.svg` for illustrations, logos, icons, badges, buttons, and decorative shapes. SVG files are resolution-independent.
- Build text, pricing cards, navbar, footer links, and buttons as HTML/CSS in the final site. The included SVG previews are visual references/assets, not a requirement to rasterize UI.

## Core assets
- `backgrounds/01_hero_background_3840x2160.*` — hero
- `backgrounds/02_cta_mountain_banner_3840x1200.*` — CTA banner
- `backgrounds/03_section_background_3840x1200.*` — soft blue section
- `backgrounds/04_footer_background_3840x1200.*` — dark footer
- `backgrounds/05_pattern_background.svg` — abstract corner pattern
- `features/04_feature_android.svg`
- `features/05_feature_ios.svg`
- `features/06_feature_windows.svg`
- `features/07_feature_web.svg`
- `backgrounds/08_section_divider_3840x420.png`
- `ui/10_app_preview.svg`
- `ui/11_pricing_cards.svg`
- `ui/12_cta_buttons.svg`
- `branding/*` — logos and store badges
- `icons/social/*` — social icons
- `icons/trust/*` — trust/security icons
- `ui/17_footer_links_preview.svg`
- `ui/18_trust_badges.svg`

## CSS example
```css
.hero {
  background: url('./backgrounds/01_hero_background_3840x2160.webp') center bottom / cover no-repeat;
}
.cta {
  background: url('./backgrounds/02_cta_mountain_banner_3840x1200.webp') center bottom / cover no-repeat;
}
.footer {
  background: url('./backgrounds/04_footer_background_3840x1200.webp') center center / cover no-repeat;
}
```
