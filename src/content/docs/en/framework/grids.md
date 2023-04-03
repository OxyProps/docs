---
title: CSS Grids
description: An intro to the OxyProps Grids properties and classes syntax.
i18nReady: true
---

**OxyProps** offers a wide range of grids utility classes to fit all your needs.

> NB: In this documentation, when you see this notation : `--o-property-{1-5}`, this means that all values from 1 to 5 exist. So when you see `--o-property-{1-5}`, you can use :
> - `--o-property-1`
> - `--o-property-2`
> - `--o-property-3`
> - `--o-property-4`
> - `--o-property-5`

## Behaviour

OxyProps grid utility classes set the following properties :

```css
{
    display: grid
    grid-template-columns: var(--o-grid-columns-{1-12})
}
```

In Oxygen Builder, and in Bricks except for Bricks Sections and Bricks Containers, it also sets :

```css
{
    width: 100%;
}
```

Both in Oxygen and Bricks, the classes need to "fight" with the builder defaults that sets `display: flex` on sections (Oxy & Brx), containers (Brx) and div (Oxy). In these situations, the framework has higher selector specificity to achieve the expected result.

## Simple Grids

Simple grids define a specific number of columns having the same width.

### The CSS variables

The `grid-template-columns` CSS property defines the line names and track sizing functions of the grid columns. [Source MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns)

> pattern: `--o-grid-columns-{1-12}`

```css
    --o-grid-columns-1
    --o-grid-columns-2
    --o-grid-columns-3
    --o-grid-columns-4
    --o-grid-columns-5
    --o-grid-columns-6
    --o-grid-columns-7
    --o-grid-columns-8
    --o-grid-columns-9
    --o-grid-columns-10
    --o-grid-columns-11
    --o-grid-columns-12
```

These properties are set to : `repeat(X, minmax(0, 1fr))` where X is the number of columns.

#### Usage

Use these CSS Variables with the `grid-template-columns` property:

```css
{
    grid-template-columns: var(--o-grid-columns-3);`
}
```

Will define a 3 columns grid.

### The Utility Classes

> pattern: `o-grid-{1-12}`

```css
    .o-grid-1
    .o-grid-2
    .o-grid-3
    .o-grid-4
    .o-grid-5
    .o-grid-6
    .o-grid-7
    .o-grid-8
    .o-grid-9
    .o-grid-10
    .o-grid-11
    .o-grid-12
```

These classes are automatically registered in Oxygen and Bricks to be available in autosuggestion.

## Asymetrical Grids

Asymetrical grids define a 2 comumns grid with uneven widths.

The width ratio is defined by the 2 values. For example, in a `o-grid-2-3` grid, the first column will use 2 fractions of the available space, and the second column will use 3 fractions of the available space.

### The CSS variables

> pattern: `--o-grid-columns-{1-5}-{1-5}`

```css
    --o-grid-columns-1-2
    --o-grid-columns-1-3
    --o-grid-columns-1-4
    --o-grid-columns-1-5
    --o-grid-columns-2-1
    --o-grid-columns-2-3
    --o-grid-columns-2-4
    --o-grid-columns-2-5
    --o-grid-columns-3-1
    --o-grid-columns-3-2
    --o-grid-columns-3-4
    --o-grid-columns-3-5
    --o-grid-columns-4-1
    --o-grid-columns-4-2
    --o-grid-columns-4-3
    --o-grid-columns-4-5
    --o-grid-columns-5-1
    --o-grid-columns-5-2
    --o-grid-columns-5-3
    --o-grid-columns-5-4
```

These properties are set to : `xfr yfr` where x and y are the 2 fractional values.

> NB: properties will equal fractional values, like `--o-grid-columns-3-3` don't exist in the OxyProps framework.

#### Usage

Use these CSS Variables with the `grid-template-columns` property:

```css
{
    grid-template-columns: var(--o-grid-columns-1-2);
}
```

Will define a 2 columns grid, the second column being twice as wide as the first column.

### The Utility Classes

> pattern: `o-grid-{1-5}-{1-5}`
```css
    .o-grid-1-2
    .o-grid-1-3
    .o-grid-1-4
    .o-grid-1-5
    .o-grid-2-1
    .o-grid-2-3
    .o-grid-2-4
    .o-grid-2-5
    .o-grid-3-1
    .o-grid-3-2
    .o-grid-3-4
    .o-grid-3-5
    .o-grid-4-1
    .o-grid-4-2
    .o-grid-4-3
    .o-grid-4-5
    .o-grid-5-1
    .o-grid-5-2
    .o-grid-5-3
    .o-grid-5-4
```

> NB: utility classes will equal fractional values, like `--o-grid-2-2` don't exist in the OxyProps framework.

## Spans & Starts

Spans allow grid cells to span over multiple columns or rows.

Starts allow grid cells to start at a specific columns or rows.

### Columns

#### Columns Spans

The `grid-column-end` CSS property specifies a grid item's end position within the grid column by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the block-end edge of its grid area. [Source MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-end)

> Pattern: `o-span-{1-12}`

```css
    .o-span-1
    .o-span-2
    .o-span-3
    .o-span-4
    .o-span-5
    .o-span-6
    .o-span-7
    .o-span-8
    .o-span-9
    .o-span-10
    .o-span-11
    .o-span-12
```

These classes set the `grid-column-end`property.

Example:

```css
{
    grid-column-end: span 3;
}
```
This cell will span over 3 columns.

#### Columns Starts

The `grid-column-start` CSS property specifies a grid item's start position within the grid column by contributing a line, a span, or nothing (automatic) to its grid placement. This start position defines the block-start edge of the grid area. [Source MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-start)

> Pattern: `o-cstart-{1-12}`

```css
    .o-cstart-1     
    .o-cstart-2     
    .o-cstart-3     
    .o-cstart-4     
    .o-cstart-5     
    .o-cstart-6     
    .o-cstart-7     
    .o-cstart-8     
    .o-cstart-9     
    .o-cstart-10        
    .o-cstart-11        
    .o-cstart-12
```

These classes set the `grid-column-start`property.

Example:

```css
{
    grid-column-start: 5;
}
```

This cell will start at column 5.

### Rows

#### Rows Spans

> Pattern: `o-rspan-{1-12}`

```css
    .o-rspan-1
    .o-rspan-2
    .o-rspan-3
    .o-rspan-4
    .o-rspan-5
    .o-rspan-6
    .o-rspan-7
    .o-rspan-8
    .o-rspan-9
    .o-rspan-10
    .o-rspan-11
    .o-rspan-12
```

These classes set the `grid-row-end`property.

Example:

```css
{
    grid-row-end: span 2;
}
```

This cell will span over 2 rows.

#### Rows Starts

The `grid-column-start` CSS property specifies a grid item's start position within the grid column by contributing a line, a span, or nothing (automatic) to its grid placement. This start position defines the block-start edge of the grid area. [Source MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-start)

> Pattern: `o-rstart-{1-12}`

```css
    .o-rstart-1
    .o-rstart-2
    .o-rstart-3
    .o-rstart-4
    .o-rstart-5
    .o-rstart-6
    .o-rstart-7
    .o-rstart-8
    .o-rstart-9
    .o-rstart-10
    .o-rstart-11
    .o-rstart-12
```

These classes set the `grid-row-start` property.

Example:

```css
{
    grid-row-start: 3;
}
```

This cell will start at row 3.

## Order

The `order` CSS property sets the order to lay out an item in a flex or grid container. Items in a container are sorted by ascending order value and then by their source code order.

> Note: **Accessibility concerns** - Using the order property will create a disconnect between the visual presentation of content and DOM order. This will adversely affect users experiencing low vision navigating with the aid of assistive technology such as a screen reader. If the visual (css) order is important, then screen reader users will not have access to the correct reading order. [Source MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/order#accessibility_concerns)

```css
    .o-first
    .o-last
```

These classes set the `order` property.

## Responsive Grids

Simple and Asymetrical grids can be combined with breakpoints to achieve a responsive layout.

Use the pattern `o-{breakpoint}-grid-{type of grid}` for this.

> NB: You can chain multiple classes (1 per breakpoint) to achieve you responsive layout.

### Breakpoints

Available breakpoints are :

```css
{
    xxl: 1920px;
    xl: 1440px;
    lg: 1024px;
    md: 768px;
    sm: 480px;
    xs: 360px;
    xxs: 240px;
}
```

### Grids at Breakpoints

> Pattern: `o-{breakpoint}-grid{1-12}`

```css
    .o-xxs-grid-1
    .o-xs-grid-1
    .o-sm-grid-1
    .o-md-grid-1
    .o-lg-grid-1
    .o-xl-grid-1
    .o-xxl-grid-1
```

```css
    .o-xxs-grid-2
    .o-xs-grid-2
    .o-sm-grid-2
    .o-md-grid-2
    .o-lg-grid-2
    .o-xl-grid-2
    .o-xxl-grid-2
```

```css
    .o-xxs-grid-3
    .o-xs-grid-3
    .o-sm-grid-3
    .o-md-grid-3
    .o-lg-grid-3
    .o-xl-grid-3
    .o-xxl-grid-3
```

```css
    .o-xxs-grid-4
    .o-xs-grid-4
    .o-sm-grid-4
    .o-md-grid-4
    .o-lg-grid-4
    .o-xl-grid-4
    .o-xxl-grid-4
```
```css
    .o-xxs-grid-5
    .o-xs-grid-5
    .o-sm-grid-5
    .o-md-grid-5
    .o-lg-grid-5
    .o-xl-grid-5
    .o-xxl-grid-5
```
```css
    .o-xxs-grid-6
    .o-xs-grid-6
    .o-sm-grid-6
    .o-md-grid-6
    .o-lg-grid-6
    .o-xl-grid-6
    .o-xxl-grid-6
```
```css
    .o-xxs-grid-7
    .o-xs-grid-7
    .o-sm-grid-7
    .o-md-grid-7
    .o-lg-grid-7
    .o-xl-grid-7
    .o-xxl-grid-7
```
```css
    .o-xxs-grid-8
    .o-xs-grid-8
    .o-sm-grid-8
    .o-md-grid-8
    .o-lg-grid-8
    .o-xl-grid-8
    .o-xxl-grid-8
```
```css
    .o-xxs-grid-9
    .o-xs-grid-9
    .o-sm-grid-9
    .o-md-grid-9
    .o-lg-grid-9
    .o-xl-grid-9
    .o-xxl-grid-9
```
```css
    .o-xxs-grid-10
    .o-xs-grid-10
    .o-sm-grid-10
    .o-md-grid-10
    .o-lg-grid-10
    .o-xl-grid-10
    .o-xxl-grid-10
```
```css
    .o-xxs-grid-11
    .o-xs-grid-11
    .o-sm-grid-11
    .o-md-grid-11
    .o-lg-grid-11
    .o-xl-grid-11
    .o-xxl-grid-11
```
```css
    .o-xxs-grid-12
    .o-xs-grid-12
    .o-sm-grid-12
    .o-md-grid-12
    .o-lg-grid-12
    .o-xl-grid-12
    .o-xxl-grid-12
```
Example:
```html
<section class="o-grid-6 o-xl-grid-4 o-lg-grid-3 o-md-grid-2 o-sm-grid-1"></section>
```
This section will contain a grid with:
- 6 columns over XL breakpoint,
- 4 columns from LG to XL breakpoint,
- 3 columns from MD to LG breakpoint,
- 2 columns from SM to MD breakpoint,
- 1 columns below SM breakpoint,

### Spans at Breakpoints

> Pattern: o-{breakpoint}-span-{1-12}

```css
    .o-xxs-span-1
    .o-xs-span-1
    .o-sm-span-1
    .o-md-span-1
    .o-lg-span-1
    .o-xl-span-1
    .o-xxl-span-1
```

```css
    .o-xxs-span-2
    .o-xs-span-2
    .o-sm-span-2
    .o-md-span-2
    .o-lg-span-2
    .o-xl-span-2
    .o-xxl-span-2
```

```css
    .o-xxs-span-3
    .o-xs-span-3
    .o-sm-span-3
    .o-md-span-3
    .o-lg-span-3
    .o-xl-span-3
    .o-xxl-span-3
```

```css
    .o-xxs-span-4
    .o-xs-span-4
    .o-sm-span-4
    .o-md-span-4
    .o-lg-span-4
    .o-xl-span-4
    .o-xxl-span-4
```

```css
    .o-xxs-span-5
    .o-xs-span-5
    .o-sm-span-5
    .o-md-span-5
    .o-lg-span-5
    .o-xl-span-5
    .o-xxl-span-5
```

```css
    .o-xxs-span-6
    .o-xs-span-6
    .o-sm-span-6
    .o-md-span-6
    .o-lg-span-6
    .o-xl-span-6
    .o-xxl-span-6
```

```css
    .o-xxs-span-7
    .o-xs-span-7
    .o-sm-span-7
    .o-md-span-7
    .o-lg-span-7
    .o-xl-span-7
    .o-xxl-span-7
```

```css
    .o-xxs-span-8
    .o-xs-span-8
    .o-sm-span-8
    .o-md-span-8
    .o-lg-span-8
    .o-xl-span-8
    .o-xxl-span-8
```

```css
    .o-xxs-span-9
    .o-xs-span-9
    .o-sm-span-9
    .o-md-span-9
    .o-lg-span-9
    .o-xl-span-9
    .o-xxl-span-9
```

```css
    .o-xxs-span-10
    .o-xs-span-10
    .o-sm-span-10
    .o-md-span-10
    .o-lg-span-10
    .o-xl-span-10
    .o-xxl-span-10
```

```css
    .o-xxs-span-11
    .o-xs-span-11
    .o-sm-span-11
    .o-md-span-11
    .o-lg-span-11
    .o-xl-span-11
    .o-xxl-span-11
```

```css
    .o-xxs-span-12
    .o-xs-span-12
    .o-sm-span-12
    .o-md-span-12
    .o-lg-span-12
    .o-xl-span-12
    .o-xxl-span-12
```

### Starts at Breakpoints

> Pattern: o-{breakpoint}-cstart-{1-12}

```css
    .o-xxs-cstart-1
    .o-xs-cstart-1
    .o-sm-cstart-1
    .o-md-cstart-1
    .o-lg-cstart-1
    .o-xl-cstart-1
    .o-xxl-cstart-1
```

```css
    .o-xxs-cstart-2
    .o-xs-cstart-2
    .o-sm-cstart-2
    .o-md-cstart-2
    .o-lg-cstart-2
    .o-xl-cstart-2
    .o-xxl-cstart-2
```

```css
    .o-xxs-cstart-3
    .o-xs-cstart-3
    .o-sm-cstart-3
    .o-md-cstart-3
    .o-lg-cstart-3
    .o-xl-cstart-3
    .o-xxl-cstart-3
```

```css
    .o-xxs-cstart-4
    .o-xs-cstart-4
    .o-sm-cstart-4
    .o-md-cstart-4
    .o-lg-cstart-4
    .o-xl-cstart-4
    .o-xxl-cstart-4
```

```css
    .o-xxs-cstart-5
    .o-xs-cstart-5
    .o-sm-cstart-5
    .o-md-cstart-5
    .o-lg-cstart-5
    .o-xl-cstart-5
    .o-xxl-cstart-5
```

```css
    .o-xxs-cstart-6
    .o-xs-cstart-6
    .o-sm-cstart-6
    .o-md-cstart-6
    .o-lg-cstart-6
    .o-xl-cstart-6
    .o-xxl-cstart-6
```

```css
    .o-xxs-cstart-7
    .o-xs-cstart-7
    .o-sm-cstart-7
    .o-md-cstart-7
    .o-lg-cstart-7
    .o-xl-cstart-7
    .o-xxl-cstart-7
```

```css
    .o-xxs-cstart-8
    .o-xs-cstart-8
    .o-sm-cstart-8
    .o-md-cstart-8
    .o-lg-cstart-8
    .o-xl-cstart-8
    .o-xxl-cstart-8
```

```css
    .o-xxs-cstart-9
    .o-xs-cstart-9
    .o-sm-cstart-9
    .o-md-cstart-9
    .o-lg-cstart-9
    .o-xl-cstart-9
    .o-xxl-cstart-9
```

```css
    .o-xxs-cstart-10
    .o-xs-cstart-10
    .o-sm-cstart-10
    .o-md-cstart-10
    .o-lg-cstart-10
    .o-xl-cstart-10
    .o-xxl-cstart-10
```

```css
    .o-xxs-cstart-11
    .o-xs-cstart-11
    .o-sm-cstart-11
    .o-md-cstart-11
    .o-lg-cstart-11
    .o-xl-cstart-11
    .o-xxl-cstart-11
```

```css
    .o-xxs-cstart-12
    .o-xs-cstart-12
    .o-sm-cstart-12
    .o-md-cstart-12
    .o-lg-cstart-12
    .o-xl-cstart-12
    .o-xxl-cstart-12
```

### RSpans at Breakpoints

> Pattern: o-{breakpoint}-rspan-{1-12}

```css
    .o-xxs-rspan-1
    .o-xs-rspan-1
    .o-sm-rspan-1
    .o-md-rspan-1
    .o-lg-rspan-1
    .o-xl-rspan-1
    .o-xxl-rspan-1
```

```css
    .o-xxs-rspan-2
    .o-xs-rspan-2
    .o-sm-rspan-2
    .o-md-rspan-2
    .o-lg-rspan-2
    .o-xl-rspan-2
    .o-xxl-rspan-2
```

```css
    .o-xxs-rspan-3
    .o-xs-rspan-3
    .o-sm-rspan-3
    .o-md-rspan-3
    .o-lg-rspan-3
    .o-xl-rspan-3
    .o-xxl-rspan-3
```

```css
    .o-xxs-rspan-4
    .o-xs-rspan-4
    .o-sm-rspan-4
    .o-md-rspan-4
    .o-lg-rspan-4
    .o-xl-rspan-4
    .o-xxl-rspan-4
```

```css
    .o-xxs-rspan-5
    .o-xs-rspan-5
    .o-sm-rspan-5
    .o-md-rspan-5
    .o-lg-rspan-5
    .o-xl-rspan-5
    .o-xxl-rspan-5
```

```css
    .o-xxs-rspan-6
    .o-xs-rspan-6
    .o-sm-rspan-6
    .o-md-rspan-6
    .o-lg-rspan-6
    .o-xl-rspan-6
    .o-xxl-rspan-6
```

```css
    .o-xxs-rspan-7
    .o-xs-rspan-7
    .o-sm-rspan-7
    .o-md-rspan-7
    .o-lg-rspan-7
    .o-xl-rspan-7
    .o-xxl-rspan-7
```

```css
    .o-xxs-rspan-8
    .o-xs-rspan-8
    .o-sm-rspan-8
    .o-md-rspan-8
    .o-lg-rspan-8
    .o-xl-rspan-8
    .o-xxl-rspan-8
```

```css
    .o-xxs-rspan-9
    .o-xs-rspan-9
    .o-sm-rspan-9
    .o-md-rspan-9
    .o-lg-rspan-9
    .o-xl-rspan-9
    .o-xxl-rspan-9
```

```css
    .o-xxs-rspan-10
    .o-xs-rspan-10
    .o-sm-rspan-10
    .o-md-rspan-10
    .o-lg-rspan-10
    .o-xl-rspan-10
    .o-xxl-rspan-10
```

```css
    .o-xxs-rspan-11
    .o-xs-rspan-11
    .o-sm-rspan-11
    .o-md-rspan-11
    .o-lg-rspan-11
    .o-xl-rspan-11
    .o-xxl-rspan-11
```

```css
    .o-xxs-rspan-12
    .o-xs-rspan-12
    .o-sm-rspan-12
    .o-md-rspan-12
    .o-lg-rspan-12
    .o-xl-rspan-12
    .o-xxl-rspan-12
```

### RStarts at Breakpoints

> Pattern: o-{breakpoint}-rstart-{1-12}

```css
    .o-xxs-rstart-1
    .o-xs-rstart-1
    .o-sm-rstart-1
    .o-md-rstart-1
    .o-lg-rstart-1
    .o-xl-rstart-1
    .o-xxl-rstart-1
```

```css
    .o-xxs-rstart-2
    .o-xs-rstart-2
    .o-sm-rstart-2
    .o-md-rstart-2
    .o-lg-rstart-2
    .o-xl-rstart-2
    .o-xxl-rstart-2
```

```css
    .o-xxs-rstart-3
    .o-xs-rstart-3
    .o-sm-rstart-3
    .o-md-rstart-3
    .o-lg-rstart-3
    .o-xl-rstart-3
    .o-xxl-rstart-3
```

```css
    .o-xxs-rstart-4
    .o-xs-rstart-4
    .o-sm-rstart-4
    .o-md-rstart-4
    .o-lg-rstart-4
    .o-xl-rstart-4
    .o-xxl-rstart-4
```

```css
    .o-xxs-rstart-5
    .o-xs-rstart-5
    .o-sm-rstart-5
    .o-md-rstart-5
    .o-lg-rstart-5
    .o-xl-rstart-5
    .o-xxl-rstart-5
```

```css
    .o-xxs-rstart-6
    .o-xs-rstart-6
    .o-sm-rstart-6
    .o-md-rstart-6
    .o-lg-rstart-6
    .o-xl-rstart-6
    .o-xxl-rstart-6
```

```css
    .o-xxs-rstart-7
    .o-xs-rstart-7
    .o-sm-rstart-7
    .o-md-rstart-7
    .o-lg-rstart-7
    .o-xl-rstart-7
    .o-xxl-rstart-7
```

```css
    .o-xxs-rstart-8
    .o-xs-rstart-8
    .o-sm-rstart-8
    .o-md-rstart-8
    .o-lg-rstart-8
    .o-xl-rstart-8
    .o-xxl-rstart-8
```

```css
    .o-xxs-rstart-9
    .o-xs-rstart-9
    .o-sm-rstart-9
    .o-md-rstart-9
    .o-lg-rstart-9
    .o-xl-rstart-9
    .o-xxl-rstart-9
```

```css
    .o-xxs-rstart-10
    .o-xs-rstart-10
    .o-sm-rstart-10
    .o-md-rstart-10
    .o-lg-rstart-10
    .o-xl-rstart-10
    .o-xxl-rstart-10
```

```css
    .o-xxs-rstart-11
    .o-xs-rstart-11
    .o-sm-rstart-11
    .o-md-rstart-11
    .o-lg-rstart-11
    .o-xl-rstart-11
    .o-xxl-rstart-11
```

```css
    .o-xxs-rstart-12
    .o-xs-rstart-12
    .o-sm-rstart-12
    .o-md-rstart-12
    .o-lg-rstart-12
    .o-xl-rstart-12
    .o-xxl-rstart-12
```

### Order at Breakpoints

> Pattern: o-{breakpoint}-{first-last}

```css
    .o-xxs-first
    .o-xs-first
    .o-sm-first
    .o-md-first
    .o-lg-first
    .o-xl-first
    .o-xxl-first
    .o-xxs-last
    .o-xs-last
    .o-sm-last
    .o-md-last
    .o-lg-last
    .o-xl-last
    .o-xxl-last
```