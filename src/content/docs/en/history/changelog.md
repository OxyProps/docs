---
title: o-props Changelog
description: The history of changes to o-props (OxyProps / BricksProps).
sidebar:
  label: Changelog
head:
  - tag: meta
    attrs:
      property: og:image
      content: https://docs.structeezy.com/open-graph/history/changelog.png
  - tag: meta
    attrs:
      property: og:image:width
      content: "1200"
  - tag: meta
    attrs:
      property: og:image:height
      content: "630"
  - tag: meta
    attrs:
      property: twitter:image
      content: https://docs.structeezy.com/open-graph/history/changelog.png
---

## v1.11.2 (2023-08-01)

### Fix

- **all**: structure menu did not trigger properly
- **all**: better scripts priority
- **brx**: svg display prop in bricks panels
- **styles**: fix svg css in bricks panels

## v1.11.1 (2023-07-30)

### Fix

- compatibility with BricksForge

## v1.11.0 (2023-07-13)

### Feat

- **all**: normalize assigns the new text-wrap balance to headings and text-wrap pretty to paragraphs
- **all**: new classes for the newly supported text-wrap property
- **all**: create new container fuid font sizes and make them available in fontsize context menus
- **all**: add new props for container based fluid typography
- **all**: add new container queries classes

### Fix

- **oxy**: fixed context menus in Oxygen triggering errors
- **all**: restored submenu items in dashboard

## v1.10.1 (2023-07-09)

### Fix

- **brx**: unlimited icon element now renders properly from dynamic data

## v1.10.0 (2023-07-07)

### Feat

- **all**: add settings to give users full control over theme-color meta

### Fix

- **all**: code cleanup and minimal documentation page in plugin. Refer to doc.oxyprops.com
- **all**: add types
- **oxy**: woo global widget heading font size field now sets unit to none
- **oxy**: border radius menu triggers in woo global settings
- **oxy**: color menu now triggers in oxygen woo colorpicker fields
- **oxy**: structure context menu compatibility with Recoda Workspace
- **all**: custom element feature setting was active whatever the toggle state. This is fixed

## v1.9.0 (2023-07-04)

### Feat

- **all**: make a11y, cursors, position, scrollbars availabla as individual classes packs
- **all**: add breakpoint responsive screen reader classes

### Fix

- **brx**: class pezview on tab and hover is working again

## v1.8.0 (2023-06-26)

### Feat

- **oxy**: add emmet snippet demos
- **all**: added media queries text-align classes
- **oxy**: enhanced emmet and emmet context menu

### Fix

- **all**: switch to dynamic generated version for better cache management
- **brx**: normalize doesn't set default size anymore on Bricks native menu carets
- **all**: fix o-nopad and o-nomrg classes target property
- **all**: list classes
- **all**: typo in product base variable name

## v1.7.0 (2023-06-17)

### Feat

- bump 1.7

## v1.6.2 (2023-06-17)

### Feat

- **brx**: add dynamic ID and link sectioning elemnts to headings for proper landmarks
- **brx**: change structure menu labels

### Fix

- missed a function name in patch. ok now
- possibly undefined value now check before accessing
- **class-helpers.php**: handle deprecatePHP Deprecated: strlen(): Passing null to parameter #1
- **class-helpers.php**: moved to regex for more efficient and future proof patch

### Refactor

- **class-helpers.php**: standardize iframe fix for all brx js files

### Build

- **deps**: update colorsjs.io from 0.4.3 to 0.4.5
- **deps**: update open-props from 1.5.7 to 1.5.9
- clean configs and bumb dependencies

## v1.6.1 (2023-04-17)

### Fix

- **All:** Unlimited icon elements now include a hover state color setting.
- **All:** Added a “noopener noreferrer” combo and “me” to the links relationship menu.
- **brx:** Lorem ipsum menu was triggered in customCSS when using Firefox.
- **brx:** Lorem generator menu sometimes appearing unexpectedly on bottom left.
- **All:** Fixed broken flex-between and flex-around classes names.

## 1.6.0 (2023-04-12)

### Feat

- **All:** CSS Snippet for easy buttons customization in Custom CSS context menu.
- **All:** Unlimited Icon custom element gives you access to 150k+ open source icons.
- **All:** OxyProps now includes a dynamic Lorem Ipsum generator.
- **All:** Button components even more customizable.
- **All:** Cheat Sheet available on documentation site.
- **All:** Improved dashboard UI.
- **oxy:** Light / Dark toggle element. You can now customize icon size on standard and touch screens and colors in light / dark mode and their respective hover states.
- **brx:** Structure menu offers the choice to insert section only, container only, or container inside a section.
- **brx:** List of selectors registered now defaults to “Large”.

### Fix

- **All:** Context menus don‘t close unexpectedly on dragging.
- **brx:** Link relationship context menu triggers again.
- **All:** Residual deprecation warnings after transitioning to PHP8 and over.

## 1.5.1 (2023-03-23)

### Feat

- **oxy:** Text HTML Tags context menu.
- **oxy:** New elements added to the structure components library.
- **brx:** New components added to the structure components library.

### Fix

- **All:** Flex Cards utility classes when using custom HTML tags.
- **All:** PHP 7.4 compatibility issues.

## 1.5.0 (2023-03-21)

- **All:** Accessibily - o-sr-only and o-not-sr-only utility classes.
- **All:** Accessibily - OP now includes self hosted Atkinson Hyperlegible fonts as a fourth font stack.
- **brx:** FAQ custom Element for creating an accessible FAQ following W3C ARIA Authoring Practices Guide pattern.
- **brx:** Menu Bar custom Element for creating an accessible Menu Bar following W3C ARIA Authoring Practices Guide pattern.
- **brx:** Patterns Structure Tree context menu for injecting Patterns in the structure.
- **brx:** Components Structure Tree context menu for injecting Components in the structure.
- **brx:** HTML Elements Structure Tree context menu for injecting HTML Elements in the structure with proper tags.
- **brx:** Bricks Elements Structure Tree context menu for injecting Bricks Elements in the structure.
- **brx:** Basic Text HTML tags wrapper context menu.
- **brx:** Patch Bricks CSS hard coded default font family for blockquotes.

### Fix

- **brx:** Multiplier functions in context menu.
- **brx:** When Normalize is active, text insertion cursor color is preserved in Bricks editor. It is set to brand color on front-end only.
- **brx:** Content sizes conflicts with Bricks default CSS.
- **brx:** o-super-centered Grid display in Bricks editor.

### Refactor

- **All:** Javascript codebase converted to Typescript

## 1.4.14 (2023-02-24)

### Fix

- **brx:** Fixed adding classes with context menu that was broken with Bricks v1.7.
- **All:** Fixed navigation in plugin dashboard from WP menu.

## 1.4.13 (2023-02-20)

### Feat

- **All:** Option to choose (or not) to load OxyProps styles in Gutenberg Editor.

### Fix

- **brx:** Compatibility with Bricks v1.7beta (and hopefully the future official release)

## 1.4.12 (2023-02-19)

### Feat

- **All:** Theme color for [supported browsers](https://caniuse.com/?search=theme-color).

### Fix

- **oxy:** A CSS issue with custom toggle button border.

### Perf

- **All:** Minor performance improvements.

## 1.4.11 (2023-01-23)

### Fix

- **All:** PHP Warning in class Rest API when runing PHP 8.
- **brx:** A CSS conflict modifying UI elements (font sizes) in the Gutenberg Editor.
- **brx:** A PHP Error when trying to automatically log in from Plesk.
- **brx:** A JS conflict preventing OxyProps light/Dark toggle script to execute if a fluent form was present on the same page.
- **brx:** A CSS conflict between OxyProps rules and BricksExtras Back to Top element.
- **brx:** Lineheight specificity conflict with styles theme.

## 1.4.10 (2023-01-04)

### Feat

- **brx:** CSS Grid Props context menus.
- **All:** Opacity context menu.

### Fix

- **brx:** Following Bricks v1.6 release, fixed props context menus not appearing.

### Perf

- **All:** Console Logs clean-up.
- **All:** Several code improvements for performance.

## 1.4.9 (2022-12-07)

### Feat

- **All:** Cursors classes.
- **All:** Text clamp classes.
- **brx:** Ability to choose a pre-registered selectors set to improve performances.

### Fix

- **All:** Fixed some descriptions of classes categories in dashboard
- **brx:** On Plugin deactivation, pre-registered classes are deleted from the Bricks database.
- **brx:** Fixed Moon icon positioning in builder
- **brx:** Default links color applies to tags if normalize or theme are selected
- **oxy:** Fixed WP admin menu layout in gutenberg not full screen.
- **oxy:** Fixed theme is not defined error in console when activating custom theme stylesheet.
- **oxy:** Fixed custom stylesheet not activating properly.

## 1.4.8 (2022-11-10)

### Fix

- **brx:** Possible conflict with translatable strings could cause bricks panel content and style tabs to be blank

## 1.4.7 (2022-11-10)

### Feat

- **brx:** The schemes switcher element (already available in Oxygen) is now available for Bricks.
- **All:** Better ease classes polyvalence for animations and transitions.

### Fix

- **brx:** Bricks Normalize breaking WP admin menu layout in the widgets section.
- **brx:** I18n elements string registration.
- **brx:** Border radius context menu is now called inside Bricks form buidler.
- **brx:** Potential conflict with JetEngine when using Bricks elements API.
- **All:** Minor fixes and cleanup.

## 1.4.6 (2022-10-21)

### Feat

- **oxy:** The Picsum menu, placeholder image generator, is now available in Oxygen too for image elements.
- **brx:** Better right click triggering area for classes menu.

### Fix

- **brx:** When setting a size in ch, the unit is now populated.
- **brx:** A case where class input would be blocked after creating a custom class.
- **oxy:** Live preview working for ch / vw / vh / % units.
- **oxy:** When setting a size in ch, the unit is now populated.
- **oxy:** A situation where the primary width unit was not updated on prop click.
- **oxy:** A situation where the border width unit was not updated on prop click.

# Perf

- **All:** Performances improvement.

## 1.4.5 (2022-10-20)

### Feat

- **all:** Underline and Wavy classes
- **all:** Inset classes
- **all:** Grid Autoflow classes

### Fix

- **brx:** A case where styling a text color in Bricks was not working.
- **brx:** Color scheme responsiveness in Bricks templates editor.
- **all:** An invalid character php warning because of an unwanted space in default settings.

## 1.4.4 (2022-10-17)

### Feat

- **all:** Snap positioning classes.
- **all:** Resize classes.
- **all:** Access to flexbox and positioning classes from the classes context menu.
- **all:** Refined selection of pre-loaded classes for suggestion.

### Fix

- **all:** Various typos.
- **all:** Css rule that did make action buttons invisible in the main class input.
- **all:** A case where colors would not live update in dashboard when setting a pure grey manually from RGB input fields.
- **oxy:** A case where chaining values for Link Relation keywords or background images in Oxygen did not work.
- **oxy:** A case where the unit would not change with prop click in Oxygen primary width input field.
- **all:** A case where font size would increase after update from 1.3.7. Thanks Leandro & Alexei!
- **all:** Another case where a php warning could be displayed in debug mode. Thanks François!

## 1.4.3 (2022-10-13)

### Fix

- **brx:** A case where RAM classes would expand over the container when using Bricks. Thanks Darius!
- **brx:** A case where warnigs would appear in debug mode when using Bricks. Thanks Petra!
- **oxy:** A case where the dark/light doggle would not appear in Oxygen. Thanks Leandro!
- **all:** A case where changing a color value with the context menu would trigger an error when saving. Thanks Rika!
- **all:** Visited links color formats in normalize.

## 1.4.2 (2022-10-12)

### Fix

- **all:** A PHP warning in debug log.
- **all:** `--o-bw-hsl` and `--o-wb-hsl` inverted behavior.
- **all:** Typos on the license screen.

## 1.4.1 (2022-10-10)

### Feat

- **all:** Let user decide when clean DB from previous version settings.

### Fix

- **brx:** RAM classes dysfunction in Bricks version.

## 1.4.0 (2022-10-10)

### Feat

- **brx:** Bricks builder support!
- **all:** New plugin dashboard.
- **all:** Props preview from context menu.
- **all:** Classes context menu.
- **all:** CIELab color system.
- **all:** Color contrast accessibility checks.
- **all:** Edges and Corners masks available as props and utility classes.
- **all:** Fade-in-bloom and fade-out-bloom animations available as props and utility classes.
- **all:** Snap utility classes.
- **all:** Option to dequeue WordPress / Gutenberg inlined styles.
- **all:** Context menus can be moved around for better preview.
- **all:** 12-grid utility classes.
- **all:** Grids utility classes.
- **all:** Better database management.

## 1.3.7 (2022-08-19)

### Feat

- **oxy:** improved classes suggestions dropdown keyboard navigation.

### Fix

- **oxy:** A case where OP Context menu was triggered by error in the current class field.
- **oxy:** A case where class previews on keyboard navigation and mous hover could conflict.
- **oxy:** A case where the new class preview feature introduced in v1.3.6 was not working. Thanks Petra Jovkov.
- **oxy:** A case where OxyProps CSS was not rendered on front end if license key was acciddentally deleted. Thanks Ingo.

## 1.3.6 (2022-08-15)

### Feat

- **oxy:** Live preview of classes in autosuggested list.
- **oxy:** Added default Aria Roles to sections in the structure panel context menu.
- **oxy:** Added element to forms in the structure panel context menu.
- **oxy:** Structure panel context menu elements with preset attributes.
- **oxy:** OP Context menu was triggered by error ID and classes fields, and in code block fields.

## 1.3.5 (2022-08-01)

### Fix

- **oxy:** A case where FireFox would not load OxyProps in-buidler Javascript

## 1.3.4 (2022-07-31)

### Feat

- **oxy:** Add Elements context menu for the structure panel.
- **oxy:** Encrypted code in base file was reported as potentially malicious by some hosts.
- **oxy:** Typo for HSL version of text colors in the dark mode theme

## 1.3.3 (2022-06-30)

### Fix

- **oxy:** Number rounding in color conversion functions did cause custom colors to vary. Thanks Ingo Wo for reporting!

## 1.3.2 (2022-06-30)

### Feat

- **oxy:** "Sub" version of each fluid font for matching subheadings.
- **oxy:** Fluid fonts range align with static fonts range 00 -> 8.
- **oxy:** Full automatic and customizable fluid font system.
- **oxy:** Better tab and arrow keys keyboard navigation for suggested classes.

### Fix

- **oxy:** Tiny visual detail in the light / dark toggle sun icon.

## 1.3.1 (2022-06-23)

### Feat

- **oxy:** Removed annoying title attibute on builder light/dark toggle as tooltip is enough.
- **oxy:** Better text readability for colors context menu.
- **oxy:** Text & Surfaces usable as HSL props.

### Fix

- **oxy:** Customizable theme stylesheet now includes accent color props.

## 1.3.0 (2022-06-23)

### Feat

- **oxy:** Light / Dark toggle in Oxygen Editor for easy switch during development.
- **oxy:** Additional logical color "Accent" added to the framework.
- **oxy:** Black and White are available as props --o-black and --o-white.
- **oxy:** CSS file size improvement.

### Fix

- **oxy:** Surface-1 is set as the default background color event when normalize is deactivated.
- **oxy:** Minor fixes.

## 1.2.6 (2022-06-16)

### Fix

- **oxy:** Consistent range between props and classes for asymetrical grids.

### Perf

- **oxy:** Full bundle CSS file size reduced by 8.13% from (Gzipped) 71.69 KiB to 65.86 KiB.
- **oxy:** Updated stylesheets file sizes in dashboard tooltips.

## 1.2.5 (2022-06-10)

### Feat

- **oxy:** Position sticky added as class and custom CSS context menu

### Fix

- **oxy:** An error could occur at license activation in specific conditions.

## 1.2.4 (2022-06-08)

### Feat

- **oxy:** When created, OxyProps selector folders are disabled by default.

### Fix

- **oxy:** Mutliplier appllied to numerical value.
- **oxy:** Mutliplier for width property.
- **oxy:** Context menu CSS when normalize is disabled.

## 1.2.3 (2022-06-07)

### Feat

- **oxy:** Flex Child behavior context menus
- **oxy:** Most classes are now registered into Oxygen for reference and autosuggestion
- **oxy:** Better context menu logic for reliability and scalability.

### Fix

- **oxy:** Now handles multiple custom attributes on a single element.
- **oxy:** Compatibility with Recoda Workspace for border widths.
- **oxy:** Custom CSS context menu now works with Firefox.
- **oxy:** TextShadows turned to scientific notation for build reliability.

## 1.2.2 (2022-06-02)

### Feat

- **oxy:** Ipsum Text context menu. Placeholder text generator.
- **oxy:** Even better color schemes management.

### Fix

- **oxy:** Minor JS fixes.

## 1.2.1 (2022-05-31)

### Fix

- **oxy:** Minor CSS fixes.

## 1.2.0 (2022-05-31)

### Feat

- **oxy:** User can define custom colors.

### Fix

- **oxy:** Flex Cards CSS specificity conflict with Oxy ct_div_block.

[[↑ Back to Top]](#top)

## 1.1.2 (2022-05-28)

### Feat

- **oxy:** Custom CSS context menu.
- **oxy:** Ram is now able to adapt to parent width.

### Fix

- Fix: Context menu works in global settings panel.
- Fix: Invert mode with user system preferences.
- Fix: h1 max-inline-size specificity.

### Refactor

- **oxy:** JS code clean-up.

[[↑ Back to Top]](#top)

## 1.1.1 (2022-05-19)

### Feat

- **oxy:** OxyProps default Font Stacks are now available from Oxygen Dropdown in global settings.

### Fix

- **oxy:** Font family utility classes specificity.

[[↑ Back to Top]](#top)

## 1.1.0 (2022-05-19)

### Feat

- **oxy:** Context menu for custom CSS field
- **oxy:** `--o-shadoweight-{1-8}` props
- **oxy:** Customizable Light Dark toggle Element

### Fix

- **oxy:** Oxygen Plus menu CSS

[[↑ Back to Top]](#top)

## 1.0.0 (2022-04-28)

- First official release

[[↑ Back to Top]](#top)
