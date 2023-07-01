---
title: 12 columns Grid
description: An intro to the OxyProps Grids properties and classes syntax.
i18nReady: true
---

**12-grid** is a set of specific classes for advanced grid layouts. It is intended to create a design using a 12 columns grid system.

> NB: In this documentation, when you see this notation : `--o-property-{1-5}`, this means that all values from 1 to 5 exist. So when you see `--o-property-{1-5}`, you can use :
> - `--o-property-1`
> - `--o-property-2`
> - `--o-property-3`
> - `--o-property-4`
> - `--o-property-5`

## Behaviour

The 12-grid utility classes set the following properties :

```css
{
    position: relative;
    display: grid;
    grid-template-columns: var(--o-grid-columns-12);
    grid-auto-rows: auto;
    align-items: stretch;
}
```

In Oxygen Builder, and in Bricks except for Bricks Sections and Bricks Containers, it also sets :
```css
{
    width: 100%;
}
```

Both in Oxygen and Bricks, the classes need to "fight" with the builder defaults that sets `display: flex` on sections (Oxy & Brx), containers (Brx) and div (Oxy). In these situations, the framework has higher selector specificity to achieve the expected result.

## Helper Lines

When creating a page layout, I like to have the 12 columns visible so I can easily know where my elemnts are placed on the grid.

So, I created a specific class in the OxyProps framework to help me with this. This is the class :
- `o-12-grid-helper-lines`

This class is intended to be used temporarily, when you build your page, and then removed once you design is in place.

### Usage

To display your 12 columns grid on your builder canvas, follow these steps :  

1. **Create you grid container**. This can be a Section (Oxy / Brx), a Container (Brx), a Div (Oxy, Brx).
1. **Apply class `o-12-grid` to the container**. ⚠️ Do not confuse`o-12-grid` and `o-grid-12`.
1. **Create a div in your container**. This will be a dummy element.
1. **Apply class `o-12-grid-helper-lines` to the div**. Your 12 columns are now visible.
1. Et Voilà!


![Screnshot of an example 12 columns grid layout in Bricks builder](/assets/img/bricks-12-grid.webp "The 12-grid utility classes series in action")


## Advanced Spans

Two sets of advanced columns spans and row spans will help you design on th 12 column grid.

### Column Spans

The grid-column CSS shorthand property specifies a grid item's size and location within a grid column by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-start and inline-end edge of its grid area. [Source MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column)

These classes will set the `grid-column` CSS property in the form `grid-column: X / span Y`.
- X is the start column
- Y is the number of columns the element will span.

So, for example, the class `o-span-2-7` that sets `grid-column: 2 / span 7` means : *"Starts on column 2 and spreads over 7 columns"*.

> pattern: `o-span-{1-12}-{1-12}`  
> Obviously, some combinations don't exist, like `o-span-8-10`, as you can not havve an element that starts column 8 and spreads over 10 columns on a 12 columns grid.

#### 12 columns span

Only one class in this category, the element spanning 12 columns will be full width.

```css
.o-span-1-12
```

#### 11 columns span

Starting either on column 1 or 2.

```css
.o-span-1-11
.o-span-2-11
```

#### 10 columns span

Starting either on columns 1, 2 or 3.

```css
.o-span-1-10
.o-span-2-10
.o-span-3-10
```

#### 9 columns span

Starting either on columns 1, 2, 3 or 4.

```css
.o-span-1-9
.o-span-2-9
.o-span-3-9
.o-span-4-9
```

#### 8 columns span

Starting either on columns 1, 2, 3, 4 or 5.

```css
.o-span-1-8
.o-span-2-8
.o-span-3-8
.o-span-4-8
.o-span-5-8
```

#### 7 columns span

Starting either on columns 1, 2, 3, 4, 5 or 6.

```css
.o-span-1-7
.o-span-2-7
.o-span-3-7
.o-span-4-7
.o-span-5-7
.o-span-6-7
```

#### 6 columns span

Starting either on columns 1, 2, 3, 4, 5, 6 or 7.

```css
.o-span-1-6
.o-span-2-6
.o-span-3-6
.o-span-4-6
.o-span-5-6
.o-span-6-6
.o-span-7-6
```

#### 5 columns span

Starting either on columns 1, 2, 3, 4, 5, 6, 7 or 8.

```css
.o-span-1-5
.o-span-2-5
.o-span-3-5
.o-span-4-5
.o-span-5-5
.o-span-6-5
.o-span-7-5
.o-span-8-5
```

#### 4 columns span

Starting either on columns 1, 2, 3, 4, 5, 6, 7, 8 or 9.

```css
.o-span-1-4
.o-span-2-4
.o-span-3-4
.o-span-4-4
.o-span-5-4
.o-span-6-4
.o-span-7-4
.o-span-8-4
.o-span-9-4
```

#### 3 columns span

Starting either on columns 1, 2, 3, 4, 5, 6, 7, 8, 9 or 10.

```css
.o-span-1-3
.o-span-2-3
.o-span-3-3
.o-span-4-3
.o-span-5-3
.o-span-6-3
.o-span-7-3
.o-span-8-3
.o-span-9-3
.o-span-10-3
```

#### 2 columns span

Starting either on columns 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 or 11.

```css
.o-span-1-2
.o-span-2-2
.o-span-3-2
.o-span-4-2
.o-span-5-2
.o-span-6-2
.o-span-7-2
.o-span-8-2
.o-span-9-2
.o-span-10-2
.o-span-11-2
```

#### 1 column span

Starting either on columns 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 or 12.

```css
.o-span-1-1
.o-span-2-1
.o-span-3-1
.o-span-4-1
.o-span-5-1
.o-span-6-1
.o-span-7-1
.o-span-8-1
.o-span-9-1
.o-span-10-1
.o-span-11-1
.o-span-12-1
```

### Row Spans

The grid-row CSS shorthand property specifies a grid item's size and location within the grid row by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-start and inline-end edge of its grid area. [Source MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row)

These classes will set the `grid-row` CSS property in the form `grid-row: X / span Y`.
- X is the start row
- Y is the number of rows the element will span.

So, for example, the class `o-rspan-2-7` that sets `grid-row: 2 / span 7` means : *"Starts on row 2 and spreads over 7 rows"*.

> pattern: `o-rspan-{1-12}-{1-12}`  
> Obviously, some combinations don't exist, like `o-rspan-8-10`, as you can not havve an element that starts column 8 and spreads over 10 rows on a 12 rows grid.

#### 12 rows span

Only one class in this category.

```css
.o-rspan-1-12
```

#### 11 rows spans

Starting either on column 1 or 2.

```css
.o-rspan-1-11
.o-rspan-2-11
```

#### 10 rows spans

Starting either on rows 1, 2 or 3.

```css
.o-rspan-1-10
.o-rspan-2-10
.o-rspan-3-10
```

#### 9 rows spans


Starting either on rows 1, 2, 3 or 4.

```css
.o-rspan-1-9
.o-rspan-2-9
.o-rspan-3-9
.o-rspan-4-9
```

#### 8 rows spans

Starting either on rows 1, 2, 3, 4 or 5.

```css
.o-rspan-1-8
.o-rspan-2-8
.o-rspan-3-8
.o-rspan-4-8
.o-rspan-5-8
```

#### 7 rows spans

Starting either on rows 1, 2, 3, 4, 5 or 6.

```css
.o-rspan-1-7
.o-rspan-2-7
.o-rspan-3-7
.o-rspan-4-7
.o-rspan-5-7
.o-rspan-6-7
```

#### 6 rows spans

Starting either on rows 1, 2, 3, 4, 5, 6 or 7.

```css
.o-rspan-1-6
.o-rspan-2-6
.o-rspan-3-6
.o-rspan-4-6
.o-rspan-5-6
.o-rspan-6-6
.o-rspan-7-6
```

#### 5 rows spans

Starting either on rows 1, 2, 3, 4, 5, 6, 7 or 8.

```css
.o-rspan-1-5
.o-rspan-2-5
.o-rspan-3-5
.o-rspan-4-5
.o-rspan-5-5
.o-rspan-6-5
.o-rspan-7-5
.o-rspan-8-5
```

#### 4 rows spans

Starting either on rows 1, 2, 3, 4, 5, 6, 7, 8 or 9.

```css
.o-rspan-1-4
.o-rspan-2-4
.o-rspan-3-4
.o-rspan-4-4
.o-rspan-5-4
.o-rspan-6-4
.o-rspan-7-4
.o-rspan-8-4
.o-rspan-9-4
```

#### 3 rows spans

Starting either on rows 1, 2, 3, 4, 5, 6, 7, 8, 9 or 10.

```css
.o-rspan-1-3
.o-rspan-2-3
.o-rspan-3-3
.o-rspan-4-3
.o-rspan-5-3
.o-rspan-6-3
.o-rspan-7-3
.o-rspan-8-3
.o-rspan-9-3
.o-rspan-10-3
```

#### 2 rows spans

Starting either on rows 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 or 11.

```css
.o-rspan-1-2
.o-rspan-2-2
.o-rspan-3-2
.o-rspan-4-2
.o-rspan-5-2
.o-rspan-6-2
.o-rspan-7-2
.o-rspan-8-2
.o-rspan-9-2
.o-rspan-10-2
.o-rspan-11-2
```

#### 1 row span

Starting either on rows 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 or 12.

```css
.o-rspan-1-1
.o-rspan-2-1
.o-rspan-3-1
.o-rspan-4-1
.o-rspan-5-1
.o-rspan-6-1
.o-rspan-7-1
.o-rspan-8-1
.o-rspan-9-1
.o-rspan-10-1
.o-rspan-11-1
.o-rspan-12-1
```

## Responsive design with 12-grid

Unlike the [OxyProps main grids system](/en/framework/grids/), where you can modify the number of columns of your grid system at various breakpoints, the 12-grid system is intended to keep 12 columns at all breakpoints.

Then, you achieve responsiveness by modifying the span classes at various breakpoints.

Imagine an example when, on desktop, we have a section with 2 divs of equal with. At the `lg` breakpoint, we want the two divs to stack vetically.

This would be achieved with the following classes :
- Div1 : `o-span-1-6 o-lg-span-1-12`
- Div2 : `o-span-7-6 o-lg-span-1-12`

This is an extremely basic example, and would probaably be easier to achieve by controlling the pareent containeere with classes from thee maain grid system, but you can imagine complex behaviours we can achieve with this system.

### xxl Breakpoint

```css
.o-xxl-span-1-1
.o-xxl-span-1-2
.o-xxl-span-1-3
.o-xxl-span-1-4
.o-xxl-span-1-5
.o-xxl-span-1-6
.o-xxl-span-1-7
.o-xxl-span-1-8
.o-xxl-span-1-9
.o-xxl-span-1-10
.o-xxl-span-1-11
.o-xxl-span-1-12
```

```css
.o-xxl-span-2-1
.o-xxl-span-2-2
.o-xxl-span-2-3
.o-xxl-span-2-4
.o-xxl-span-2-5
.o-xxl-span-2-6
.o-xxl-span-2-7
.o-xxl-span-2-8
.o-xxl-span-2-9
.o-xxl-span-2-10
.o-xxl-span-2-11
```

```css
.o-xxl-span-3-1
.o-xxl-span-3-2
.o-xxl-span-3-3
.o-xxl-span-3-4
.o-xxl-span-3-5
.o-xxl-span-3-6
.o-xxl-span-3-7
.o-xxl-span-3-8
.o-xxl-span-3-9
.o-xxl-span-3-10
```

```css
.o-xxl-span-4-1
.o-xxl-span-4-2
.o-xxl-span-4-3
.o-xxl-span-4-4
.o-xxl-span-4-5
.o-xxl-span-4-6
.o-xxl-span-4-7
.o-xxl-span-4-8
.o-xxl-span-4-9
```

```css
.o-xxl-span-5-1
.o-xxl-span-5-2
.o-xxl-span-5-3
.o-xxl-span-5-4
.o-xxl-span-5-5
.o-xxl-span-5-6
.o-xxl-span-5-7
.o-xxl-span-5-8
```

```css
.o-xxl-span-6-1
.o-xxl-span-6-2
.o-xxl-span-6-3
.o-xxl-span-6-4
.o-xxl-span-6-5
.o-xxl-span-6-6
.o-xxl-span-6-7
```

```css
.o-xxl-span-7-1
.o-xxl-span-7-2
.o-xxl-span-7-3
.o-xxl-span-7-4
.o-xxl-span-7-5
.o-xxl-span-7-6
```

```css
.o-xxl-span-8-1
.o-xxl-span-8-2
.o-xxl-span-8-3
.o-xxl-span-8-4
.o-xxl-span-8-5
```

```css
.o-xxl-span-9-1
.o-xxl-span-9-2
.o-xxl-span-9-3
.o-xxl-span-9-4
```

```css
.o-xxl-span-10-1
.o-xxl-span-10-2
.o-xxl-span-10-3
```

```css
.o-xxl-span-11-1
.o-xxl-span-11-2
```

```css
.o-xxl-span-12-1
```

### xl Breakpoint

```css
.o-xl-span-1-1
.o-xl-span-1-2
.o-xl-span-1-3
.o-xl-span-1-4
.o-xl-span-1-5
.o-xl-span-1-6
.o-xl-span-1-7
.o-xl-span-1-8
.o-xl-span-1-9
.o-xl-span-1-10
.o-xl-span-1-11
.o-xl-span-1-12
```

```css
.o-xl-span-2-1
.o-xl-span-2-2
.o-xl-span-2-3
.o-xl-span-2-4
.o-xl-span-2-5
.o-xl-span-2-6
.o-xl-span-2-7
.o-xl-span-2-8
.o-xl-span-2-9
.o-xl-span-2-10
.o-xl-span-2-11
```

```css
.o-xl-span-3-1
.o-xl-span-3-2
.o-xl-span-3-3
.o-xl-span-3-4
.o-xl-span-3-5
.o-xl-span-3-6
.o-xl-span-3-7
.o-xl-span-3-8
.o-xl-span-3-9
.o-xl-span-3-10
```

```css
.o-xl-span-4-1
.o-xl-span-4-2
.o-xl-span-4-3
.o-xl-span-4-4
.o-xl-span-4-5
.o-xl-span-4-6
.o-xl-span-4-7
.o-xl-span-4-8
.o-xl-span-4-9
```

```css
.o-xl-span-5-1
.o-xl-span-5-2
.o-xl-span-5-3
.o-xl-span-5-4
.o-xl-span-5-5
.o-xl-span-5-6
.o-xl-span-5-7
.o-xl-span-5-8
```

```css
.o-xl-span-6-1
.o-xl-span-6-2
.o-xl-span-6-3
.o-xl-span-6-4
.o-xl-span-6-5
.o-xl-span-6-6
.o-xl-span-6-7
```

```css
.o-xl-span-7-1
.o-xl-span-7-2
.o-xl-span-7-3
.o-xl-span-7-4
.o-xl-span-7-5
.o-xl-span-7-6
```

```css
.o-xl-span-8-1
.o-xl-span-8-2
.o-xl-span-8-3
.o-xl-span-8-4
.o-xl-span-8-5
```

```css
.o-xl-span-9-1
.o-xl-span-9-2
.o-xl-span-9-3
.o-xl-span-9-4
```

```css
.o-xl-span-10-1
.o-xl-span-10-2
.o-xl-span-10-3
```

```css
.o-xl-span-11-1
.o-xl-span-11-2
```

```css
.o-xl-span-12-1
```

### lg Breakpoint

```css
.o-lg-span-1-1
.o-lg-span-1-2
.o-lg-span-1-3
.o-lg-span-1-4
.o-lg-span-1-5
.o-lg-span-1-6
.o-lg-span-1-7
.o-lg-span-1-8
.o-lg-span-1-9
.o-lg-span-1-10
.o-lg-span-1-11
.o-lg-span-1-12
```

```css
.o-lg-span-2-1
.o-lg-span-2-2
.o-lg-span-2-3
.o-lg-span-2-4
.o-lg-span-2-5
.o-lg-span-2-6
.o-lg-span-2-7
.o-lg-span-2-8
.o-lg-span-2-9
.o-lg-span-2-10
.o-lg-span-2-11
```

```css
.o-lg-span-3-1
.o-lg-span-3-2
.o-lg-span-3-3
.o-lg-span-3-4
.o-lg-span-3-5
.o-lg-span-3-6
.o-lg-span-3-7
.o-lg-span-3-8
.o-lg-span-3-9
.o-lg-span-3-10
```

```css
.o-lg-span-4-1
.o-lg-span-4-2
.o-lg-span-4-3
.o-lg-span-4-4
.o-lg-span-4-5
.o-lg-span-4-6
.o-lg-span-4-7
.o-lg-span-4-8
.o-lg-span-4-9
```

```css
.o-lg-span-5-1
.o-lg-span-5-2
.o-lg-span-5-3
.o-lg-span-5-4
.o-lg-span-5-5
.o-lg-span-5-6
.o-lg-span-5-7
.o-lg-span-5-8
```

```css
.o-lg-span-6-1
.o-lg-span-6-2
.o-lg-span-6-3
.o-lg-span-6-4
.o-lg-span-6-5
.o-lg-span-6-6
.o-lg-span-6-7
```

```css
.o-lg-span-7-1
.o-lg-span-7-2
.o-lg-span-7-3
.o-lg-span-7-4
.o-lg-span-7-5
.o-lg-span-7-6
```

```css
.o-lg-span-8-1
.o-lg-span-8-2
.o-lg-span-8-3
.o-lg-span-8-4
.o-lg-span-8-5
```

```css
.o-lg-span-9-1
.o-lg-span-9-2
.o-lg-span-9-3
.o-lg-span-9-4
```

```css
.o-lg-span-10-1
.o-lg-span-10-2
.o-lg-span-10-3
```

```css
.o-lg-span-11-1
.o-lg-span-11-2
```

```css
.o-lg-span-12-1
```

### md Breakpoint

```css
.o-md-span-1-1
.o-md-span-1-2
.o-md-span-1-3
.o-md-span-1-4
.o-md-span-1-5
.o-md-span-1-6
.o-md-span-1-7
.o-md-span-1-8
.o-md-span-1-9
.o-md-span-1-10
.o-md-span-1-11
.o-md-span-1-12
```

```css
.o-md-span-2-1
.o-md-span-2-2
.o-md-span-2-3
.o-md-span-2-4
.o-md-span-2-5
.o-md-span-2-6
.o-md-span-2-7
.o-md-span-2-8
.o-md-span-2-9
.o-md-span-2-10
.o-md-span-2-11
```

```css
.o-md-span-3-1
.o-md-span-3-2
.o-md-span-3-3
.o-md-span-3-4
.o-md-span-3-5
.o-md-span-3-6
.o-md-span-3-7
.o-md-span-3-8
.o-md-span-3-9
.o-md-span-3-10
```

```css
.o-md-span-4-1
.o-md-span-4-2
.o-md-span-4-3
.o-md-span-4-4
.o-md-span-4-5
.o-md-span-4-6
.o-md-span-4-7
.o-md-span-4-8
.o-md-span-4-9
```

```css
.o-md-span-5-1
.o-md-span-5-2
.o-md-span-5-3
.o-md-span-5-4
.o-md-span-5-5
.o-md-span-5-6
.o-md-span-5-7
.o-md-span-5-8
```

```css
.o-md-span-6-1
.o-md-span-6-2
.o-md-span-6-3
.o-md-span-6-4
.o-md-span-6-5
.o-md-span-6-6
.o-md-span-6-7
```

```css
.o-md-span-7-1
.o-md-span-7-2
.o-md-span-7-3
.o-md-span-7-4
.o-md-span-7-5
.o-md-span-7-6
```

```css
.o-md-span-8-1
.o-md-span-8-2
.o-md-span-8-3
.o-md-span-8-4
.o-md-span-8-5
```

```css
.o-md-span-9-1
.o-md-span-9-2
.o-md-span-9-3
.o-md-span-9-4
```

```css
.o-md-span-10-1
.o-md-span-10-2
.o-md-span-10-3
```

```css
.o-md-span-11-1
.o-md-span-11-2
```

```css
.o-md-span-12-1
```

### sm Breakpoint

```css
.o-sm-span-1-1
.o-sm-span-1-2
.o-sm-span-1-3
.o-sm-span-1-4
.o-sm-span-1-5
.o-sm-span-1-6
.o-sm-span-1-7
.o-sm-span-1-8
.o-sm-span-1-9
.o-sm-span-1-10
.o-sm-span-1-11
.o-sm-span-1-12
```

```css
.o-sm-span-2-1
.o-sm-span-2-2
.o-sm-span-2-3
.o-sm-span-2-4
.o-sm-span-2-5
.o-sm-span-2-6
.o-sm-span-2-7
.o-sm-span-2-8
.o-sm-span-2-9
.o-sm-span-2-10
.o-sm-span-2-11
```

```css
.o-sm-span-3-1
.o-sm-span-3-2
.o-sm-span-3-3
.o-sm-span-3-4
.o-sm-span-3-5
.o-sm-span-3-6
.o-sm-span-3-7
.o-sm-span-3-8
.o-sm-span-3-9
.o-sm-span-3-10
```

```css
.o-sm-span-4-1
.o-sm-span-4-2
.o-sm-span-4-3
.o-sm-span-4-4
.o-sm-span-4-5
.o-sm-span-4-6
.o-sm-span-4-7
.o-sm-span-4-8
.o-sm-span-4-9
```

```css
.o-sm-span-5-1
.o-sm-span-5-2
.o-sm-span-5-3
.o-sm-span-5-4
.o-sm-span-5-5
.o-sm-span-5-6
.o-sm-span-5-7
.o-sm-span-5-8
```

```css
.o-sm-span-6-1
.o-sm-span-6-2
.o-sm-span-6-3
.o-sm-span-6-4
.o-sm-span-6-5
.o-sm-span-6-6
.o-sm-span-6-7
```

```css
.o-sm-span-7-1
.o-sm-span-7-2
.o-sm-span-7-3
.o-sm-span-7-4
.o-sm-span-7-5
.o-sm-span-7-6
```

```css
.o-sm-span-8-1
.o-sm-span-8-2
.o-sm-span-8-3
.o-sm-span-8-4
.o-sm-span-8-5
```

```css
.o-sm-span-9-1
.o-sm-span-9-2
.o-sm-span-9-3
.o-sm-span-9-4
```

```css
.o-sm-span-10-1
.o-sm-span-10-2
.o-sm-span-10-3
```

```css
.o-sm-span-11-1
.o-sm-span-11-2
```

```css
.o-sm-span-12-1
```

### xs Breakpoint

```css
.o-xs-span-1-1
.o-xs-span-1-2
.o-xs-span-1-3
.o-xs-span-1-4
.o-xs-span-1-5
.o-xs-span-1-6
.o-xs-span-1-7
.o-xs-span-1-8
.o-xs-span-1-9
.o-xs-span-1-10
.o-xs-span-1-11
.o-xs-span-1-12
```

```css
.o-xs-span-2-1
.o-xs-span-2-2
.o-xs-span-2-3
.o-xs-span-2-4
.o-xs-span-2-5
.o-xs-span-2-6
.o-xs-span-2-7
.o-xs-span-2-8
.o-xs-span-2-9
.o-xs-span-2-10
.o-xs-span-2-11
```

```css
.o-xs-span-3-1
.o-xs-span-3-2
.o-xs-span-3-3
.o-xs-span-3-4
.o-xs-span-3-5
.o-xs-span-3-6
.o-xs-span-3-7
.o-xs-span-3-8
.o-xs-span-3-9
.o-xs-span-3-10
```

```css
.o-xs-span-4-1
.o-xs-span-4-2
.o-xs-span-4-3
.o-xs-span-4-4
.o-xs-span-4-5
.o-xs-span-4-6
.o-xs-span-4-7
.o-xs-span-4-8
.o-xs-span-4-9
```

```css
.o-xs-span-5-1
.o-xs-span-5-2
.o-xs-span-5-3
.o-xs-span-5-4
.o-xs-span-5-5
.o-xs-span-5-6
.o-xs-span-5-7
.o-xs-span-5-8
```

```css
.o-xs-span-6-1
.o-xs-span-6-2
.o-xs-span-6-3
.o-xs-span-6-4
.o-xs-span-6-5
.o-xs-span-6-6
.o-xs-span-6-7
```

```css
.o-xs-span-7-1
.o-xs-span-7-2
.o-xs-span-7-3
.o-xs-span-7-4
.o-xs-span-7-5
.o-xs-span-7-6
```

```css
.o-xs-span-8-1
.o-xs-span-8-2
.o-xs-span-8-3
.o-xs-span-8-4
.o-xs-span-8-5
```

```css
.o-xs-span-9-1
.o-xs-span-9-2
.o-xs-span-9-3
.o-xs-span-9-4
```

```css
.o-xs-span-10-1
.o-xs-span-10-2
.o-xs-span-10-3
```

```css
.o-xs-span-11-1
.o-xs-span-11-2
```

```css
.o-xs-span-12-1
```

### xxs Breakpoint

```css
.o-xxs-span-1-1
.o-xxs-span-1-2
.o-xxs-span-1-3
.o-xxs-span-1-4
.o-xxs-span-1-5
.o-xxs-span-1-6
.o-xxs-span-1-7
.o-xxs-span-1-8
.o-xxs-span-1-9
.o-xxs-span-1-10
.o-xxs-span-1-11
.o-xxs-span-1-12
```

```css
.o-xxs-span-2-1
.o-xxs-span-2-2
.o-xxs-span-2-3
.o-xxs-span-2-4
.o-xxs-span-2-5
.o-xxs-span-2-6
.o-xxs-span-2-7
.o-xxs-span-2-8
.o-xxs-span-2-9
.o-xxs-span-2-10
.o-xxs-span-2-11
```

```css
.o-xxs-span-3-1
.o-xxs-span-3-2
.o-xxs-span-3-3
.o-xxs-span-3-4
.o-xxs-span-3-5
.o-xxs-span-3-6
.o-xxs-span-3-7
.o-xxs-span-3-8
.o-xxs-span-3-9
.o-xxs-span-3-10
```

```css
.o-xxs-span-4-1
.o-xxs-span-4-2
.o-xxs-span-4-3
.o-xxs-span-4-4
.o-xxs-span-4-5
.o-xxs-span-4-6
.o-xxs-span-4-7
.o-xxs-span-4-8
.o-xxs-span-4-9
```

```css
.o-xxs-span-5-1
.o-xxs-span-5-2
.o-xxs-span-5-3
.o-xxs-span-5-4
.o-xxs-span-5-5
.o-xxs-span-5-6
.o-xxs-span-5-7
.o-xxs-span-5-8
```

```css
.o-xxs-span-6-1
.o-xxs-span-6-2
.o-xxs-span-6-3
.o-xxs-span-6-4
.o-xxs-span-6-5
.o-xxs-span-6-6
.o-xxs-span-6-7
```

```css
.o-xxs-span-7-1
.o-xxs-span-7-2
.o-xxs-span-7-3
.o-xxs-span-7-4
.o-xxs-span-7-5
.o-xxs-span-7-6
```

```css
.o-xxs-span-8-1
.o-xxs-span-8-2
.o-xxs-span-8-3
.o-xxs-span-8-4
.o-xxs-span-8-5
```

```css
.o-xxs-span-9-1
.o-xxs-span-9-2
.o-xxs-span-9-3
.o-xxs-span-9-4
```

```css
.o-xxs-span-10-1
.o-xxs-span-10-2
.o-xxs-span-10-3
```

```css
.o-xxs-span-11-1
.o-xxs-span-11-2
```

```css
.o-xxs-span-12-1
```