---
title: Borders
description: An intro to the OxyProps Borders properties and classes syntax.
i18nReady: true
---

## Border Size

### The Props

> Pattern: --o-border-size-{ 1-5 }

```css
  --o-border-size-1
  --o-border-size-2
  --o-border-size-3
  --o-border-size-4
  --o-border-size-5
```

### The Classes

> Pattern: o-border-{ "" | top | bottom | left | right }-{ 1-5 }

```css
  o-border-1
  o-border-2
  o-border-3
  o-border-4
  o-border-5

  o-border-top-1
  o-border-top-2
  o-border-top-3
  o-border-top-4
  o-border-top-5

  o-border-bottom-1
  o-border-bottom-2
  o-border-bottom-3
  o-border-bottom-4
  o-border-bottom-5

  o-border-left-1
  o-border-left-2
  o-border-left-3
  o-border-left-4
  o-border-left-5

  o-border-right-1
  o-border-right-2
  o-border-right-3
  o-border-right-4
  o-border-right-5
```
### Preview

<div class="aspect-demos"> 
<div style="aspect-ratio: var(--o-ratio-square); border-width: var(--o-border-size-1)">1</div>
<div style="aspect-ratio: var(--o-ratio-square); border-width: var(--o-border-size-2)">2</div>
<div style="aspect-ratio: var(--o-ratio-square); border-width: var(--o-border-size-3)">3</div>
<div style="aspect-ratio: var(--o-ratio-square); border-width: var(--o-border-size-4)">4</div>
<div style="aspect-ratio: var(--o-ratio-square); border-width: var(--o-border-size-5)">5</div>
</div>

## Border Radius

### The Props

> Pattern: --o-radius-{1-6 | round}

```css
  --o-radius-1
  --o-radius-2
  --o-radius-3
  --o-radius-4
  --o-radius-5
  --o-radius-6
  --o-radius-round
```

### The Classes

> Pattern: o-radius-{ side | corner }-{ 1-6 | rounnd }

```css

  /* Applies to all corners */

  o-noradius

  o-radius-1
  o-radius-2
  o-radius-3
  o-radius-4
  o-radius-5
  o-radius-6
  o-radius-round

  /* Applies to the 2 corners on the given side */
  
  o-radius-top-1
  o-radius-top-2
  o-radius-top-3
  o-radius-top-4
  o-radius-top-5
  o-radius-top-6
  o-radius-top-round
  
  o-radius-bottom-1
  o-radius-bottom-2
  o-radius-bottom-3
  o-radius-bottom-4
  o-radius-bottom-5
  o-radius-bottom-6
  o-radius-bottom-round
  
  o-radius-left-1
  o-radius-left-2
  o-radius-left-3
  o-radius-left-4
  o-radius-left-5
  o-radius-left-6
  o-radius-left-round
  
  o-radius-right-1
  o-radius-right-2
  o-radius-right-3
  o-radius-right-4
  o-radius-right-5
  o-radius-right-6
  o-radius-right-round

  /* Applies to an individual corner */
  
  o-radius-top-left-1
  o-radius-top-left-2
  o-radius-top-left-3
  o-radius-top-left-4
  o-radius-top-left-5
  o-radius-top-left-6
  o-radius-top-left-round
  
  o-radius-top-right-1
  o-radius-top-right-2
  o-radius-top-right-3
  o-radius-top-right-4
  o-radius-top-right-5
  o-radius-top-right-6
  o-radius-top-right-round
  
  o-radius-bottom-left-1
  o-radius-bottom-left-2
  o-radius-bottom-left-3
  o-radius-bottom-left-4
  o-radius-bottom-left-5
  o-radius-bottom-left-6
  o-radius-bottom-left-round
  
  o-radius-bottom-right-1
  o-radius-bottom-right-2
  o-radius-bottom-right-3
  o-radius-bottom-right-4
  o-radius-bottom-right-5
  o-radius-bottom-right-6
  o-radius-bottom-right-round
```
### Preview

<div class="aspect-demos"> 
<div style="aspect-ratio: var(--o-ratio-square); border-radius: var(--o-radius-1)">1</div>
<div style="aspect-ratio: var(--o-ratio-square); border-radius: var(--o-radius-2)">2</div>
<div style="aspect-ratio: var(--o-ratio-square); border-radius: var(--o-radius-3)">3</div>
<div style="aspect-ratio: var(--o-ratio-square); border-radius: var(--o-radius-4)">4</div>
<div style="aspect-ratio: var(--o-ratio-square); border-radius: var(--o-radius-5)">5</div>
<div style="aspect-ratio: var(--o-ratio-square); border-radius: var(--o-radius-6)">6</div>
<div style="aspect-ratio: var(--o-ratio-square); border-radius: var(--o-radius-round)">round</div>
</div>

## Blobs

### The Props

> Pattern: --o-radius-blob-{ 1-5 }

```css
  --o-radius-blob-1
  --o-radius-blob-2
  --o-radius-blob-3
  --o-radius-blob-4
  --o-radius-blob-5
```

### The Classes

> Pattern: o-blob-{ 1-5 }

```css
  o-blob-1
  o-blob-2
  o-blob-3
  o-blob-4
  o-blob-5
```
### Preview

<div class="aspect-demos"> 
<div style="aspect-ratio: var(--o-ratio-square); border-radius: var(--o-radius-blob-1)">1</div>
<div style="aspect-ratio: var(--o-ratio-square); border-radius: var(--o-radius-blob-2)">2</div>
<div style="aspect-ratio: var(--o-ratio-square); border-radius: var(--o-radius-blob-3)">3</div>
<div style="aspect-ratio: var(--o-ratio-square); border-radius: var(--o-radius-blob-4)">4</div>
<div style="aspect-ratio: var(--o-ratio-square); border-radius: var(--o-radius-blob-5)">5</div>
</div>

## Conditional Radius

Conditional radius sets a radius, and when we have a component that doesn’t have margin or is taking the full viewport width, it flips the border-radius to 0.

Read the full story by <a href="https://ishadeed.com/article/conditional-border-radius/" target="_blank">Ahmad Shadeed</a>

### The Props

> Pattern: --o-radius-conditional-{ 1-6 }

```css
  --o-radius-conditional-1
  --o-radius-conditional-2
  --o-radius-conditional-3
  --o-radius-conditional-4
  --o-radius-conditional-5
  --o-radius-conditional-6
```

### The Classes

> Pattern: o-radius-{ side | corner }-conditional-{ 1-6 | rounnd }

```css

  /* Applies to all corners */

  o-radius-conditional-1
  o-radius-conditional-2
  o-radius-conditional-3
  o-radius-conditional-4
  o-radius-conditional-5
  o-radius-conditional-6

  /* Applies to the 2 corners on the given side */
  
  o-radius-top-conditional-1
  o-radius-top-conditional-2
  o-radius-top-conditional-3
  o-radius-top-conditional-4
  o-radius-top-conditional-5
  o-radius-top-conditional-6
  
  o-radius-bottom-conditional-1
  o-radius-bottom-conditional-2
  o-radius-bottom-conditional-3
  o-radius-bottom-conditional-4
  o-radius-bottom-conditional-5
  o-radius-bottom-conditional-6
  
  o-radius-left-conditional-1
  o-radius-left-conditional-2
  o-radius-left-conditional-3
  o-radius-left-conditional-4
  o-radius-left-conditional-5
  o-radius-left-conditional-6
  
  o-radius-right-conditional-1
  o-radius-right-conditional-2
  o-radius-right-conditional-3
  o-radius-right-conditional-4
  o-radius-right-conditional-5
  o-radius-right-conditional-6

  /* Applies to an individual corner */
  
  o-radius-top-left-conditional-1
  o-radius-top-left-conditional-2
  o-radius-top-left-conditional-3
  o-radius-top-left-conditional-4
  o-radius-top-left-conditional-5
  o-radius-top-left-conditional-6
  
  o-radius-top-right-conditional-1
  o-radius-top-right-conditional-2
  o-radius-top-right-conditional-3
  o-radius-top-right-conditional-4
  o-radius-top-right-conditional-5
  o-radius-top-right-conditional-6
  
  o-radius-bottom-left-conditional-1
  o-radius-bottom-left-conditional-2
  o-radius-bottom-left-conditional-3
  o-radius-bottom-left-conditional-4
  o-radius-bottom-left-conditional-5
  o-radius-bottom-left-conditional-6
  
  o-radius-bottom-right-conditional-1
  o-radius-bottom-right-conditional-2
  o-radius-bottom-right-conditional-3
  o-radius-bottom-right-conditional-4
  o-radius-bottom-right-conditional-5
  o-radius-bottom-right-conditional-6
```
### Preview

<div class="aspect-demos"> 
<div style="aspect-ratio: var(--o-ratio-square); border-radius: var(--o-radius-conditional-1)">1</div>
<div style="aspect-ratio: var(--o-ratio-square); border-radius: var(--o-radius-conditional-2)">2</div>
<div style="aspect-ratio: var(--o-ratio-square); border-radius: var(--o-radius-conditional-3)">3</div>
<div style="aspect-ratio: var(--o-ratio-square); border-radius: var(--o-radius-conditional-4)">4</div>
<div style="aspect-ratio: var(--o-ratio-square); border-radius: var(--o-radius-conditional-5)">5</div>
<div style="aspect-ratio: var(--o-ratio-square); border-radius: var(--o-radius-conditional-6)">6</div>
</div>
