---
title: Buttons
description: An intro to the OxyProps Buttons properties and classes syntax.
i18nReady: true
---

## The base button

This is the base class to use on each button. It sets all properties and their defaults.

### The Class

> Pattern: o-btn

```css
  o-btn
```
### The Component Props

The `o-btn` class is styled using the following properties. You can redefine their values to customize your buttons.

```css

  /* Define the button accent color, used when the buton includes an icon */
  --o_accent-light
  --o_accent-dark

  /* Define the button text color */
  --o_text-light
  --o_text-dark

  /* Define the button background color */
  --o_bg-light
  --o_bg-dark

  /* Define the button gradient direction */
  --o_gradient-direction-light
  --o_gradient-direction-dark

  /* Define the button well color, used as background for special styles */
  --o_input-well-light
  --o_input-well-dark

  /* Define the button inner spacing */
  --o_padding-inline
  --o_padding-block

  /* Define the button border */
  --o_border-size
  --o_border-radius

  /* Define the button border color */
  --o_border-light
  --o_border-dark

  /* Define the button highlight on hover */
  --o_highlight-size
  --o_highlight-light
  --o_highlight-dark

  /* Define the button text shadow and icon shadow */
  --o_ink-shadow-light
  --o_ink-shadow-dark

  /* Define the button text shadow and icon shadow */
  --o_icon-size
  --o_icon-color

  /* Define the button box shadow */
  --o_shadow-color-light
  --o_shadow-color-dark
  --o_shadow-strength-light
  --o_shadow-strength-dark
  --o_shadow-depth-light
  --o_shadow-depth-dark

  /* Define the button transitions */
  --o_transition-motion-reduce
  --o_transition-motion-ok
```

## Modifier Classes

These classes are modifiers to the `o-btn` class. They must be used in addition to the `o-btn` class.

### The Classes

```css
  o-btn-outline
  o-btn-disabled

  o-btn-danger
  o-btn-success
  o-btn-warning

  o-btn-brand
  o-btn-accent
  o-btn-links
  o-btn-visited

  o-btn-brand-gr
  o-btn-accent-gr
  o-btn-links-gr
  o-btn-visited-gr
```

## Adding Icons

You can add icons to your buttons using one of the following options.

### Nest an SVG in your button

Using a code block (Oxygen) or a code element (Bricks), insert SVG code in your button element. THis chikd SVG on a `o-btn` class will be styled a the button icon.

### Using custom CSS and data attributes

#### Step 1

Add a data attribute to your button with a name of `data-icon` and a value of any name for your icon. For example the value can be `cloud`.

#### Step 

Create a custom CSS rule using the following model. This way, you can take advantage of libraries like iconify.

```css
[data-icon="cloud"] {
    --o_data-icon: url("https://api.iconify.design/mdi:apple-icloud.svg") center / contain no-repeat;
}
```

