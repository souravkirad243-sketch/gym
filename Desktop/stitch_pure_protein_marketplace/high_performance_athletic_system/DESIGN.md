---
name: High-Performance Athletic System
colors:
  surface: '#111508'
  surface-dim: '#111508'
  surface-bright: '#373b2c'
  surface-container-lowest: '#0c0f04'
  surface-container-low: '#1a1d10'
  surface-container: '#1e2113'
  surface-container-high: '#282b1d'
  surface-container-highest: '#333627'
  on-surface: '#e2e4cf'
  on-surface-variant: '#c4c9ac'
  inverse-surface: '#e2e4cf'
  inverse-on-surface: '#2f3223'
  outline: '#8e9379'
  outline-variant: '#444933'
  surface-tint: '#abd600'
  primary: '#ffffff'
  on-primary: '#283500'
  primary-container: '#c3f400'
  on-primary-container: '#556d00'
  inverse-primary: '#506600'
  secondary: '#ffb5a0'
  on-secondary: '#5f1500'
  secondary-container: '#d73b00'
  on-secondary-container: '#fffbff'
  tertiary: '#ffffff'
  on-tertiary: '#21323e'
  tertiary-container: '#d2e5f5'
  on-tertiary-container: '#556774'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#c3f400'
  primary-fixed-dim: '#abd600'
  on-primary-fixed: '#161e00'
  on-primary-fixed-variant: '#3c4d00'
  secondary-fixed: '#ffdbd1'
  secondary-fixed-dim: '#ffb5a0'
  on-secondary-fixed: '#3b0900'
  on-secondary-fixed-variant: '#862200'
  tertiary-fixed: '#d2e5f5'
  tertiary-fixed-dim: '#b6c9d8'
  on-tertiary-fixed: '#0b1d29'
  on-tertiary-fixed-variant: '#374956'
  background: '#111508'
  on-background: '#e2e4cf'
  surface-variant: '#333627'
typography:
  headline-xl:
    fontFamily: Anton
    fontSize: 80px
    fontWeight: '400'
    lineHeight: 80px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Anton
    fontSize: 48px
    fontWeight: '400'
    lineHeight: 48px
  headline-md:
    fontFamily: Anton
    fontSize: 32px
    fontWeight: '400'
    lineHeight: 36px
  headline-sm:
    fontFamily: Anton
    fontSize: 24px
    fontWeight: '400'
    lineHeight: 28px
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-bold:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: '700'
    lineHeight: 20px
    letterSpacing: 0.05em
  headline-xl-mobile:
    fontFamily: Anton
    fontSize: 48px
    fontWeight: '400'
    lineHeight: 48px
spacing:
  unit: 4px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
  container-max: 1280px
---

## Brand & Style
This design system is engineered for a premium protein supplement shop, targeting serious athletes and fitness enthusiasts. The brand personality is aggressive, high-energy, and performance-oriented, evoking the intense atmosphere of a high-end training facility. 

The aesthetic leans into **High-Contrast / Bold** modernism with a touch of **Brutalism**. It prioritizes strength and urgency through massive, condensed typography and a strict color hierarchy. Visuals should feel "heavy" and "engineered," using sharp edges and high-quality sports photography with high contrast and crushed blacks to emphasize muscle texture and grit.

## Colors
The palette is built on a foundation of "Deep Charcoal" to create a premium, dark-mode environment that allows accent colors to pop with maximum luminosity.

- **Primary (Electric Lime):** Used for primary calls to action, price points, and critical "Performance" indicators.
- **Secondary (Vibrant Orange):** Reserved for "Energy" or "Pre-Workout" categories, sale tags, and secondary motivational triggers.
- **Neutral/Background:** The background is a true Deep Charcoal (#121212). UI surfaces (cards, inputs) use a slightly lighter Charcoal (#1E1E1E) to create subtle separation.
- **Typography:** Pure White for headlines to ensure maximum readability; muted grey for secondary metadata to maintain visual hierarchy.

## Typography
Typography is the voice of this design system. We use **Anton** for headlines—a bold, condensed sans-serif that demands attention and communicates strength. All headlines must be set in **Uppercase** to maintain a consistent "Performance" look.

For body copy and functional UI elements, **Hanken Grotesk** provides a sharp, contemporary contrast. Its high legibility ensures that complex nutrition data and product descriptions are easy to digest. Use wide letter-spacing on small labels to add an engineered, technical feel.

## Layout & Spacing
The layout follows a **Fixed Grid** model on desktop (12 columns) and a fluid model on mobile (4 columns). 

- **Rhythm:** A 4px baseline grid ensures tight, intentional alignment. Spacing between sections should be generous (80px+) to allow the bold typography room to breathe.
- **Grid:** Use a 24px gutter to maintain a clean separation between high-density product cards.
- **Alignment:** Elements should generally be left-aligned to mirror the structured nature of athletic training logs and technical data sheets.

## Elevation & Depth
In line with the performance-oriented style, depth is achieved through **Tonal Layers** and **Subtle Gradients** rather than traditional shadows. 

- **Surfaces:** Use a 1px solid border (#333333) for cards to define edges against the charcoal background.
- **Gradients:** Apply subtle "Speed" gradients—diagonally flowing from a darker shade of the accent color to the primary accent color—to create a sense of forward motion on primary buttons and banners.
- **Interactions:** Hover states should involve a "lift" effect where the accent color glows via a concentrated backdrop blur or an outer neon-style glow (15px blur, 0.3 opacity of the accent color).

## Shapes
The shape language is strictly **Sharp (0px)**. Rounded corners convey softness and approachability, which contradicts the "No Pain, No Gain" performance narrative. 

All buttons, input fields, product cards, and image containers must have 90-degree angles. This creates a rigorous, architectural feel that aligns with the "Strength" core value.

## Components
- **Buttons:** Large, blocky, and rectangular. Primary buttons use the Electric Lime background with black text. Hover states should invert the colors or trigger a high-contrast flash.
- **Product Cards:** Dark charcoal backgrounds (#1E1E1E) with no rounded corners. Product imagery should "break" the container or sit on top with high-key lighting. 
- **Nutrition Tables:** Mimic a technical data sheet. Use thin 1px borders, monospaced-style numeric alignments, and bold labels.
- **Chips/Badges:** Small, rectangular tags for "High Protein" or "Keto." Use secondary orange to denote specific dietary benefits.
- **Input Fields:** Bottom-border only or a very subtle 1px frame. Active states must use the Electric Lime border to signal focus.
- **Progress Bars:** For macro-nutrient breakdowns, use thick, flat bars with the accent colors to show ratios of Protein, Carbs, and Fats.