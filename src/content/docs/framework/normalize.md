---
title: Normalize
description: An intro to the OxyProps Normalize spreadsheet.
i18nReady: true
---

**OxyProps Normalize** is a normalize based on Open Props normalize, using the framework [CSS custom properties](/en/core-concepts/css-custom-properties/). It applies minimal styles for all standard HTML elements to make them consistent with your theme. And it is **adaptive to light and dark**.

The OxyProps normalize uses `:where()` selectors resulting in zero specificity so you will **always** be able to override these values.

## Normalized HTML5 Elements

| Text             | Embedded content | Form elements  |
| ---------------- | ---------------- | -------------- |
| Headings         | Images           | Input fields   |
| Paragraphs       | Audio            | Select menus   |
| Blockquotes      | Video            | Checkboxes     |
| Lists            | Canvas           | Radio buttons  |
| Horizontal rules | Meter            | Textareas      |
| Tabular data     | Progress         | HTML5 inputs   |
| Code             | Inline SVG       | Action buttons |
| Inline elements  | IFrames          |                |
| HTML Comments    |                  |                |

## `<html>` element

Sets the default color scheme to `light` and the background color to `--o-surface-1`.  
This color adapts to light and dark modes.

```css
:where(html) {
  color-scheme: light;
  background-color: var(--o-surface-1);
}
```

For theme consistency, sets the default `accent-color`and `caret-color` to `brand`, your selected brand color.  
The `accent-color` CSS property defines the accent color for html elements like checkboxes or radios.
The `caret-color` CSS property defines cursor color where user can input text.

```css
:where(html) {
  accent-color: var(--o-brand);
  caret-color: var(--o-brand);
}
```

For theme consistency, sets the `scrollbar-color` to your canvas color with `--o-scrollbar-color` for the thumb, and transparent for the track.  

```css
:where(html) {
  scrollbar-color: var(--o-scrollbar-color) transparent;
}
```

Fixes a bad behavior on mobile iOS. See this article by [Kilian Valkhof](https://kilianvalkhof.com/2022/css-html/your-css-reset-needs-text-size-adjust-probably/)

```css
:where(html) {
  -webkit-text-size-adjust: none;
}
```

Sets the default font family to the `--o-font-sans` safe sans serif font stack.

```css
:where(html) {
  font-family: var(--o-font-sans);
}
```

Sets `block-size` to `100%`. `block-size` is a logical CSS property that defines the horizontal or vertical size of an element's block, depending on its writing mode.

```css
:where(html) {
  block-size: 100%;
}
```
## The `<dt>` element : Description Term

c,kzldnvz   