---
name: Aura & Bloom
colors:
  surface: '#fcf9f8'
  surface-dim: '#dcd9d9'
  surface-bright: '#fcf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f2'
  surface-container: '#f0eded'
  surface-container-high: '#eae7e7'
  surface-container-highest: '#e4e2e1'
  on-surface: '#1b1c1c'
  on-surface-variant: '#3f4946'
  inverse-surface: '#303030'
  inverse-on-surface: '#f3f0f0'
  outline: '#707976'
  outline-variant: '#bfc9c5'
  surface-tint: '#2b685c'
  primary: '#00322a'
  on-primary: '#ffffff'
  primary-container: '#004b40'
  on-primary-container: '#7dbaab'
  inverse-primary: '#95d3c4'
  secondary: '#6a5c4e'
  on-secondary: '#ffffff'
  secondary-container: '#f3dfce'
  on-secondary-container: '#706254'
  tertiary: '#2c2c29'
  on-tertiary: '#ffffff'
  tertiary-container: '#42423f'
  on-tertiary-container: '#afaeaa'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#b0efdf'
  primary-fixed-dim: '#95d3c4'
  on-primary-fixed: '#00201b'
  on-primary-fixed-variant: '#095045'
  secondary-fixed: '#f3dfce'
  secondary-fixed-dim: '#d6c3b3'
  on-secondary-fixed: '#231a0f'
  on-secondary-fixed-variant: '#514538'
  tertiary-fixed: '#e4e2dd'
  tertiary-fixed-dim: '#c8c6c2'
  on-tertiary-fixed: '#1b1c19'
  on-tertiary-fixed-variant: '#474744'
  background: '#fcf9f8'
  on-background: '#1b1c1c'
  surface-variant: '#e4e2e1'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 36px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '500'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.05em
  caption:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: '400'
    lineHeight: '1.4'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1200px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 64px
  section-gap: 120px
---

## Brand & Style

The design system is anchored in an "Elevated Sanctuary" aesthetic, specifically tailored for a high-end hair and beauty salon. The brand personality is sophisticated yet approachable, aiming to evoke a sense of calm, renewal, and premium care. 

The visual style blends **Minimalism** with **Modern Editorial** influences. It prioritizes generous whitespace to create an "airy" feel, ensuring that the interface never feels cluttered or hurried. High-quality imagery of textures (silks, botanical elements, hair movement) should be used as secondary background elements to reinforce the tactile nature of beauty services. The emotional response should be one of immediate relaxation—as if the user has just stepped into a quiet, luxury lounge.

## Colors

The palette is a curated selection of natural, luxury-associated tones:

- **Primary (Deep Emerald):** Used for key actions, brand highlights, and deep backgrounds. It provides a grounding, high-contrast anchor to the softer tones.
- **Secondary (Champagne):** A warm, metallic-influenced neutral used for subtle buttons, borders, and decorative accents. It adds the "rose gold" warmth without being overly saturated.
- **Tertiary (Ivory):** The primary background color. It is softer than pure white (#FFFFFF), reducing eye strain and feeling more organic.
- **Neutral (Charcoal):** Used exclusively for typography and iconography to ensure high legibility while remaining softer than pure black.

**Functional Colors:**
- Success: A muted sage green.
- Error: A soft terracotta.
- Surface: Cream/Ivory variants for card backgrounds and sectioning.

## Typography

This design system utilizes a classic pairing of a high-contrast transitional serif and a contemporary sans-serif.

- **Headlines (Playfair Display):** These should be treated as editorial elements. Use `display-lg` for hero sections and key service titles. The generous line height and slight negative letter spacing on larger sizes emphasize the "high-end" feel.
- **Body (Hanken Grotesk):** Selected for its exceptional clarity and modern proportions. The increased line height (1.6) is essential for maintaining the airy, open feel of the brand.
- **Labels:** Use uppercase styling with slight letter spacing for navigation, button text, and small category headers to create a distinct visual hierarchy.

## Layout & Spacing

The layout philosophy follows a **Fixed Grid** on desktop (12 columns) and a **Fluid Grid** on mobile. 

- **Generous Whitespace:** The `section-gap` is intentionally large (120px) to allow the "Ivory" background to breathe and separate different service categories or gallery sections.
- **Alignment:** Content should predominantly be center-aligned for marketing sections to feel more "boutique," while functional booking flows should use a standard left-aligned grid for efficiency.
- **Padding:** Internal card padding should never drop below 24px (3 units) to maintain the feeling of luxury and space.

## Elevation & Depth

To maintain an "airy" and "modern" feel, this design system avoids heavy shadows and instead uses **Ambient Shadows** and **Tonal Layers**.

- **Shadows:** Use extremely diffused, low-opacity shadows (e.g., `box-shadow: 0 10px 40px rgba(0, 0, 0, 0.04)`). These should feel like a soft glow rather than a hard drop shadow, lifting cards gently off the Ivory surface.
- **Z-Index Strategy:** 
    - *Level 0:* Ivory background.
    - *Level 1:* Cards and containers with soft ambient shadows.
    - *Level 2:* Floating action buttons or navigation bars with a slight backdrop blur (Glassmorphism) to keep the background visible as the user scrolls.
- **Overlays:** Use semi-transparent Deep Emerald (80% opacity) for modal backdrops to maintain brand presence even when focusing the user on a specific task.

## Shapes

The shape language is **Soft (1)**. We avoid aggressive curves (pill-shaped) to keep the look sophisticated and architectural, but we avoid sharp 90-degree corners to ensure the UI feels welcoming and "human."

- **Primary Buttons:** 0.25rem (4px) corner radius. This provides a subtle "softening" of the edge while maintaining a professional, structured look.
- **Cards & Modals:** 0.5rem (8px) corner radius. The larger radius on containers helps them feel more like physical objects in a safe environment.
- **Input Fields:** 0.25rem (4px) corner radius to match buttons.

## Components

- **Buttons:** 
    - *Primary:* Deep Emerald background, Ivory text, 4px radius. 
    - *Secondary:* Transparent background with a thin Champagne border and Charcoal text. 
    - *Ghost:* Charcoal text with an underline that appears on hover.
- **Cards:** Ivory background with a 1px Champagne border and a soft ambient shadow. Used for service listings and staff profiles.
- **Input Fields:** Use a floating label style. The border should be a subtle Champagne color, turning Deep Emerald on focus. Background should be white for a crisp look against the Ivory page.
- **Chips:** Used for beauty tags (e.g., #Organic, #Vegan, #Styling). Soft Champagne background with Charcoal text, 100px radius (pill) for these specific decorative elements only.
- **Lists:** Service menus should use the "Playfair Display" for service names and "Hanken Grotesk" for descriptions, separated by a thin, low-opacity Champagne line.
- **Date/Time Picker:** For bookings, use a high-contrast layout with Deep Emerald indicating the selected date. The interface should feel like a high-end physical planner.