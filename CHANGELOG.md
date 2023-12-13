## v0.3.2 (2023-12-13)

### Fix

- **index**: fix import path casing

## v0.3.1 (2023-12-13)

### Fix

- **PreCheck**: fix filename case

## v0.3.0 (2023-12-13)

### Feat

- **all**: big refactor - tutorials support
- **deps**: bump deps mainly Astro to v4
- **buttons**: more readable docs
- **buttons**: upgrade buttons page to latest components

### Fix

- **buttons**: add og image to frontmatter

## v0.2.0 (2023-09-11)

## v0.1.0 (2023-08-02)

### Feat

- **brx**: add know issue with heading font size in bricks 1.8.4

### Fix

- add additional cta to enter the docs
- properly define the fb:app_id head object

## v0.0.10 (2023-07-02)

### Fix

- add fb:appid for FB debugger + improve docs

## v0.0.9 (2023-07-02)

### Fix

- fix table width in content and improve docs

## v0.0.8 (2023-07-01)

### Fix

- remote base url for edit link

## v0.0.7 (2023-07-01)

### Feat

- moved to starlight
- add click to copy to code blocks
- **i18n**: pages/markdown-content to pt-br (#551)
- Allow skipping issue search by configuring issue number (#515)
- Add links to translated pages in status table (#506)
- add discord notification on push (#435)
- clarify plan moving forward (#327)
- tweak CSS property values to match VS Code
- extract shared vars to tokens
- use custom shiki theme with JS and HTML highlighting
- Use background gradient for mobile menu background
- Improve contrast in dark theme DocSearch modal & match new styles
- Use glow colours for inline code snippets
- Add purple glow to code blocks
- Tweak dark-theme shades
- Use subtly purple shades throughout light theme
- Use brighter orange for hovered next/previous page arrows
- Make selected sidebar section bold to match selected menu item
- Use vertical gradient for page background
- update environment variables guide

### Fix

- change class to className in Search component (#558)
- Make translation status work again in forks (#520)
- **a11y**: Purple links in light mode for accessible contrast (#406)
- **api-reference.md**: fix typo (#383)
- escape `sr-only` labels (#319)
- added missing adapters (#313)
- broken examples links (#264)
- minor highlighting inconsistencies
- Use smaller glow blur size
- **a11y**: Don’t special case background of inline code snippets inside links
- **a11y**: Darken text slightly to keep contrast on gradient in light theme
- update README to recommend pnpm
- **a11y**: Fix code block contrast in light-mode
- **a11y**: Use darker text accent to provide good contrast
- update examples
- update githubEditUrl
- Gatsby typo error

### Refactor

- Use relative imports instead of aliases
- simplify code block style resets
- import type for config
- remove unused [language*= selectors
- change astro config to TS
- update CSS and HTML styling
- Rename custom property to reflect usage

### Perf

- **a11y**: Fix searchbox shortcut ARIA labeling (#539)
