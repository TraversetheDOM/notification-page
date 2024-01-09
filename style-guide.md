# Notifications Page style-guide

This project will be built to be responsive across two devices:

- Mobile Device - 375px
- Desktop Device - 1440px

## Colors

```css
--red: hsl(1, 90%, 64%); 
--blue: hsl(219, 85%, 26%); 
--white: hsl(0, 0%, 100%)
--very-light-grayish-blue: hsl(210, 60%, 98%)
--light-grayish-blue-one: hsl(211, 68%, 94%)
--light-grayish-blue-two: hsl(205, 33%, 90%)
--grayish-blue: hsl(219, 14%, 63%)
--dark-grayish-blue: hsl(219, 12%, 42%)
--very-dark-blue: hsl(224, 21%, 14%)
```

## Gap

```css
--gap-0: 0px;
--gap-1: 1px;
--gap-1_25: 0.125rem;
--gap-2_5: 0.25rem;
--gap-3_75: 0.375rem;
--gap-5: 0.5rem;
--gap-6_25: 0.625rem;
--gap-7_5: 0.75rem;
--gap-8_75: 0.875rem;
--gap-10: 1rem;
--gap-12_5: 1.25rem;
--gap-15: 1.5rem;
--gap-17_5: 1.75rem;
--gap-20: 2rem;
--gap-22_5: 2.25rem;
--gap-27_5: 2.75rem;
--gap-30: 3rem;
--gap-35: 3.5rem;
--gap-40: 4rem;
--gap-50: 5rem;
--gap-60: 6rem;
--gap-70: 7rem;
--gap-80: 8rem;
--gap-90: 9rem;
--gap-100: 10rem;
--gap-110: 11rem;
--gap-120: 12rem;
--gap-130: 13rem;
--gap-140: 14rem;
--gap-150: 15rem;
--gap-160: 16rem;
--gap-180: 18rem;
--gap-200: 20rem;
--gap-240: 24rem;
```

## Display

```css
--hidden: none;
--block: block;
--inline: inline;
--inline-block: inline-block;
--flex: flex;
--inline-flex: inline-flex;
--grid: grid;
--inline-grid: inline-grid;
```

## Radius

```css
--radius-1: 2px;
--radius-2: 4px;
--radius-3: 6px;
--radius-4: 8px;
--radius-5: 12px;
--radius-6: 16px;
--radius-7: 20px;
--radius-8: 24px;
--radius-9: 26px;
--radius-10: 28px;
--radius-11: 30px;
--radius-12: 32px;
--radius-13: 34px;
--radius-14: 36px;
--radius-15: 38px;
--radius-16: 40px;
```

## Typography

```css
--ff-plus-jakarta-sans-serif: var(--ff-plus-jakarta-sans), sans-serif;
--ff-plus-jakarta-sans: 'Plus Jakarta Sans';
--fw-100: 100;
--fw-200: 200;
--fw-300: 300;
--fw-400: 400;
--fw-500: 500;
--fw-600: 600;
--fw-700: 700;
--fw-800: 800;
--line-height-none: 1;
--line-height-tight: 1.25;
--line-height-snug: 1.375;
--line-height-normal: 1.5;
--line-height-relaxed: 1.625;
--line-height-loose: 2;
--letter-spacing-tighter: -0.05em;
--letter-spacing-tight: -0.025em;
--letter-spacing-normal: 0em;
--letter-spacing-wide: 0.025em;
--letter-spacing-wider: 0.05em;
--letter-spacing-widest: 0.1em;
--font-feature-settings: 'clig' off, 'liga' off;

/* Font Sizes */
--fs-1: clamp(0.875rem, 0.831rem + 0.1878vw, 1rem);
--fs-2: clamp(1.3125rem, 1.2465rem + 0.2817vw, 1.5rem);
```

## Spacing

```css
--space-1: clamp(0.25rem, 0.25rem + 0vw, 0.25rem);
--space-2: clamp(0.4375rem, 0.4155rem + 0.0939vw, 0.5rem);
--space-3: clamp(0.6875rem, 0.6655rem + 0.0939vw, 0.75rem);
--space-4: clamp(0.875rem, 0.831rem + 0.1878vw, 1rem);
--space-5: clamp(1.3125rem, 1.2465rem + 0.2817vw, 1.5rem);
--space-6: clamp(1.75rem, 1.662rem + 0.3756vw, 2rem);
--space-7: clamp(2.625rem, 2.493rem + 0.5634vw, 3rem);
--space-8: clamp(3.5rem, 3.3239rem + 0.7512vw, 4rem);
--space-9: clamp(5.25rem, 4.9859rem + 1.1268vw, 6rem);
--space-10: clamp(0.25rem, 0.162rem + 0.3756vw, 0.5rem);
--space-11: clamp(0.4375rem, 0.3275rem + 0.4695vw, 0.75rem);
--space-12: clamp(0.6875rem, 0.5775rem + 0.4695vw, 1rem);
--space-13: clamp(0.875rem, 0.6549rem + 0.939vw, 1.5rem);
--space-14: clamp(1.3125rem, 1.0704rem + 1.0329vw, 2rem);
--space-15: clamp(1.75rem, 1.3099rem + 1.8779vw, 3rem);
--space-16: clamp(2.625rem, 2.1408rem + 2.0657vw, 4rem);
--space-17: clamp(3.5rem, 2.6197rem + 3.7559vw, 6rem);
--space-18: clamp(0.875rem, 0.4789rem + 1.6901vw, 2rem);
```

## Font Face

```css
@font-face {
  font-display: swap
  font-family: 'Plus Jakarta Sans';
  font-style: normal;
  font-weight: 400;
  src: url('/assets/fonts/plus-jakarta-sans-v8-latin-regular.woff2') format('woff2'), 
       url('/assets/fonts/plus-jakarta-sans-v8-latin-regular.woff') format('woff'), 
       url('/assets/fonts/plus-jakarta-sans-v8-latin-regular.ttf') format('truetype'); 
}

@font-face {
  font-display: swap;
  font-family: 'Plus Jakarta Sans';
  font-style: normal;
  font-weight: 500;
  src:url('/assets/fonts/plus-jakarta-sans-v8-latin-500.woff2') format('woff2'),
      url('/assets/fonts/plus-jakarta-sans-v8-latin-500.woff') format('woff'), 
      url('/assets/fonts/plus-jakarta-sans-v8-latin-500.ttf') format('truetype');  
}

@font-face {
  font-display: swap; 
  font-family: 'Plus Jakarta Sans';
  font-style: normal;
  font-weight: 800;
  src: url('/assets/fonts/plus-jakarta-sans-v8-latin-800.woff2') format('woff2'),
       url('/assets/fonts/plus-jakarta-sans-v8-latin-800.woff') format('woff'), 
       url('/assets/fonts/plus-jakarta-sans-v8-latin-800.ttf') format('truetype');
    
}

/* Variable Fonts */
@font-face {
	font-display: swap;
	font-family: 'Plus Jakarta Sans'; 
	font-style: normal; 
	font-weight: 100 800; 
	src:url("/assets/fonts/plusjakartasans-variablefont_wght-webfont.woff2")
      format("woff2-variations"),
	    url("/assets/fonts/plusjakartasans-variablefont_wght-webfont.woff2")
      format("woff2") tech("variations"),
	    url("/assets/fonts/plusjakartasans-variablefont_wght-webfont.woff")
      format("woff-variations"),
	    url("/assets/fonts/plusjakartasans-variablefont_wght-webfont.woff") format("woff") tech("variations"),
	    url("/assets/fonts/PlusJakartasans-VariableFont_wght.ttf") format("ttf")
      tech("variations"), 
      url(/assets/fonts/PlusJakartasans-VariableFont_wght.ttf) format("ttf-variations"); 
}
```