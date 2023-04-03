---
title: RAM CSS Grids
description: An intro to the OxyProps RAM Grids properties and classes syntax.
i18nReady: true
---

**RAM** stands for **R**epeat, **A**uto-fit, **M**inmax, the powerful specific pattern used fo templating these classes.

**RAM** classes are the way to go when you want to achieve **simple**, **easy** and **auto-responsive** grid designs.

> NB: In this documentation, when you see this notation : `--o-property-{1-5}`, this means that all values from 1 to 5 exist. So when you see `--o-property-{1-5}`, you can use :
> - `--o-property-1`
> - `--o-property-2`
> - `--o-property-3`
> - `--o-property-4`
> - `--o-property-5`

## RAM Grids

RAM grids are the most easy to use grids in the series, but also the most complex under the hood.

When you assign a RAM class to a container, for example the class `o-ram-5`, oxyprops will automatically:
- Grab your site page width from the builder settings.
- Grap your gap value from the o-gap-{x} class if you did set one.
- Calculate the grid column width based on these values and the number of columns you chose. This will set the minimum width for you elements.

You then get a grid where each element in the grid has a width of *page-width minus gaps* divided by *number of columns*.

When the screen size reduces, the grid elements will automatically wrap on multiple lines to keep this minimum width.

### Behaviour

OxyProps RAM grid utility classes set the following properties :

```css
{
    display: grid;
    align-items: stretch;
    grid-template-columns: var(--o-ram-{2-12});
    width: 100%;
}
```

Both in Oxygen and Bricks, the classes need to "fight" with the builder defaults that sets `display: flex` on sections (Oxy & Brx), containers (Brx) and div (Oxy). In these situations, the framework has higher selector specificity to achieve the expected result.

### The CSS variables

The `grid-template-columns` CSS property defines the line names and track sizing functions of the grid columns. [Source MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns)

> pattern: `--o-ram-{1-12}`

```css
    --o-ram-2
    --o-ram-3
    --o-ram-4
    --o-ram-5
    --o-ram-6
    --o-ram-7
    --o-ram-8
    --o-ram-9
    --o-ram-10
    --o-ram-11
    --o-ram-12
```
