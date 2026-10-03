# Designer Deliverables & Asset Specification Guide

This guide defines the exact asset specifications, dimensions, compositions, and file paths required for the website. Following these specifications ensures every graphic renders crisply across mobile and desktop devices without cropping issues, text collisions, or visual breakage.

---

## General Rules for All Assets

- **Format**: **JPG** or **WebP** for photographic banners; **PNG (transparent)** for model and jacket cutouts.
- **Color Profile**: **sRGB** (mandatory for accurate web color rendering).
- **No Baked-In Text or Logos**: Do **NOT** bake typography, buttons, watermarks, or brand logos directly into banner images. All typography, logo badges, gradients, and CTA buttons are rendered dynamically via code.
- **File Optimization**: Aim for under **400 KB** per banner without noticeable compression artifacts. Use tools like TinyJPG/TinyPNG or Squoosh.

---

## 1. Hero Banner (Home Page)

The home hero is a full-viewport cover image (`100dvh`). Two responsive versions are required: desktop and mobile.

### Specifications

| Viewport | Deliverable Size | Aspect Ratio | Destination Path |
|---|---|---|---|
| **Desktop** | **3840 × 1836 px** | ~21:10 (Widescreen) | `public/banners/home-desktop.jpg` |
| **Mobile** | **1170 × 2151 px** | ~9:16 (Tall portrait) | `public/banners/home-mobile.jpg` |

### Composition & Safe Zones
- **Desktop**:
  - The left 40% has a dark gradient overlay containing the headline, subtitle, and *"Shop jackets"* CTA button.
  - **Focal subject (model/jacket) must be placed between 45% and 85% width** (center-right) so it is not covered by copy.
  - **Headroom (Top Breathing Room)**: Maintain at least **15% to 20% vertical padding/dark background above the model's head/hair**. Avoid placing the top of the head near the top edge so varying browser viewport ratios never crop the head from above.
- **Mobile**:
  - The bottom 45% has a dark gradient overlay containing the headline and CTA.
  - **Focal subject must be placed in the upper 55% of the frame** (chest/face/jacket collar centered vertically in the top half).

---

## 2. Brand & Category Banners (Houses & Collections)

Brand and category banners are used in two high-visibility areas:
1. **Home Page (`BrandShowcase`)**: Displayed as full-width responsive rows (one dedicated row per brand/category).
2. **Brand / Category Pages (`/brands/[brand]`)**: Displayed as the top header hero banner.

All **7 houses & categories** require both a desktop and mobile banner:
- **5 Authorized Heritage Houses**: Schott NYC, Harley-Davidson, Pelle Pelle, Supreme, Avirex.
- **In-House Atelier**: Leather Haven Craft (Signature label).
- **Core Category**: Accessories (Handcrafted leather belts, bags, wallets, and heritage goods).

### Specifications

| Viewport | Deliverable Size | Aspect Ratio | Usage |
|---|---|---|---|
| **Desktop** | **3840 × 972 px** | ~4:1 (Panoramic strip) | Full-width desktop row & brand/category header |
| **Mobile** | **1170 × 1560 px** | ~3:4 (Portrait) | Full-width mobile row & brand/category header |

### Composition & Safe Zones
- **Left/Bottom Safe Zone**:
  - On desktop, the logo pill, house/category name, tagline, and shop CTA sit on the lower-left.
  - Keep key subject details (jacket details, leather textures, craft scenes, bags, belts) **centered or biased towards the right 60%** of the canvas.
- **Atmosphere**: Moody, premium lighting, rich leather grain, editorial street or studio aesthetic matching each house identity.

### File Delivery Paths (7 Total Houses & Categories)

| House / Category | Desktop Banner (`3840 × 972`) | Mobile Banner (`1170 × 1560`) |
|---|---|---|
| **Schott NYC** | `public/banners/schott-nyc-desktop.jpg` | `public/banners/schott-nyc-mobile.jpg` |
| **Harley-Davidson** | `public/banners/harley-davidson-desktop.jpg` | `public/banners/harley-davidson-mobile.jpg` |
| **Pelle Pelle** | `public/banners/pelle-pelle-desktop.jpg` | `public/banners/pelle-pelle-mobile.jpg` |
| **Supreme** | `public/banners/supreme-desktop.jpg` | `public/banners/supreme-mobile.jpg` |
| **Avirex** | `public/banners/avirex-desktop.jpg` | `public/banners/avirex-mobile.jpg` |
| **Leather Haven Craft** | `public/banners/leather-haven-craft-desktop.jpg` | `public/banners/leather-haven-craft-mobile.jpg` |
| **Accessories** | `public/banners/accessories-desktop.jpg` | `public/banners/accessories-mobile.jpg` |

*Note: The website router also maps aliases `leather-heaven-craft` → `leather-haven-craft` and `accessory` → `accessories` seamlessly.*

---

## 3. Model & Interactive Scroll Stage

The home page features an interactive scroll animation stage where jackets transition seamlessly onto a central mannequin / model as the user scrolls.

### Specifications

| Asset | Deliverable Size | Format | Background |
|---|---|---|---|
| **Base Model (Mannequin/Figure)** | **1200 × 2100 px** | PNG | **100% Transparent** |
| **Each Jacket Overlay** | **1200 × 2100 px** | PNG | **100% Transparent** |

### Alignment & Canvas Rules (Zero Shift Requirement)
- **Canvas Resolution**: **1200 × 2100 px** (maps exactly 3× to the web SVG viewBox coordinate system `400 × 700`).
- **Fixed Origin Alignment**: Every jacket cutout **must be exported on the exact same 1200 × 2100 px canvas** as the base model, pre-aligned to the model's shoulders and torso.
- **Do NOT trim or crop transparent padding**: Exporting with full canvas ensures the developer can layer `model.png` and `jacket.png` with absolute positioning (`top: 0; left: 0; width: 100%`) without manual CSS offsets.
- **Model Pose**:
  - Front-facing, upright, neutral stance.
  - Shoulders level, arms resting naturally at sides.
  - Symmetrical torso centered horizontally on `x = 600 px`.

---

## 4. Product Catalog Cards (Reference)

Used in product grids, search, and category listing pages.

| Asset | Size | Format | Description |
|---|---|---|---|
| **Primary Card** | **900 × 1200 px** (3:4) | JPG / WebP | Front view, clean studio lighting |
| **Hover / Alternate** | **900 × 1200 px** (3:4) | JPG / WebP | Back view, detail shot, or styled angle |
| **Destination** | `public/catalog/{product-slug}.jpg` | `public/catalog/{product-slug}-alt.jpg` |

---

## Pre-Handover Checklist

Before submitting files to the development team, confirm:
- [ ] All desktop and mobile banners match the exact pixel dimensions listed above.
- [ ] Banners created for all 7 houses/categories (Schott NYC, Harley-Davidson, Pelle Pelle, Supreme, Avirex, Leather Haven Craft, Accessories).
- [ ] No text, pricing, badges, or brand logos are baked into banner graphics.
- [ ] Safe zones respected: hero subjects are placed towards the right/center; left/bottom overlays will not obscure faces or focal points.
- [ ] Model and jacket PNGs have transparent backgrounds and share the exact same 1200 × 2100 px canvas.
- [ ] Files are saved with the exact file names and placed in `public/banners/`, `public/catalog/`, etc.
