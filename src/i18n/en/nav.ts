/**
 * This configures the navigation sidebar.
 * All other languages follow this ordering/structure and will fall back to
 * English for any entries they haven’t translated.
 *
 * - All entries MUST include `text` and `key`
 * - Heading entries MUST include `header: true` and `type`
 * - Link entries MUST include `slug` (which excludes the language code)
 */
export default [
	{ text: 'Start Here', header: true, type: 'learn', key: 'startHere' },
	{ text: 'Getting Started', slug: 'getting-started', key: 'getting-started' },
	{ text: 'Installation', slug: 'installation', key: 'installation' },
	{ text: 'OxyProps Setup', slug: 'plugin-settings', key: 'plugin-settings' },

	{ text: 'Core Concepts', header: true, type: 'learn', key: 'coreConcepts' },
	{ text: 'Design Tokens', slug: 'core-concepts/design-tokens', key: 'core-concepts/design-tokens' },
	{ text: 'CSS Custom Properties', slug: 'core-concepts/css-custom-properties', key: 'core-concepts/css-custom-properties' },
	{ text: 'CSS Components', header: true, type: 'learn', key: 'components' },
	{ text: 'Buttons', slug: 'framework/buttons', key: 'components/buttons' },
	{ text: 'Cards', slug: 'framework/cards', key: 'components/cards' },

	{ text: 'CSS Framework', header: true, type: 'learn', key: 'framework' },
	{ text: 'Animations', slug: 'framework/animations', key: 'framework/animations' },
	{ text: 'Aspect Ratios', slug: 'framework/aspect-ratios', key: 'framework/aspect-ratios' },
	{ text: 'Borders', slug: 'framework/borders', key: 'framework/borders' },
	{ text: 'Colors', slug: 'framework/colors', key: 'framework/colors' },
	{ text: 'Color Schemes', slug: 'framework/color-schemes', key: 'framework/color-schemes' },
	{ text: 'Cursors', slug: 'framework/cursors', key: 'framework/cursors' },
	{ text: 'Easing', slug: 'framework/easing', key: 'framework/easing' },
	{ text: 'Gradients', slug: 'framework/gradients', key: 'framework/gradients' },
	{ text: 'Grids - Basic', slug: 'framework/grids', key: 'framework/grids' },
	{ text: 'Grids - 12 Cols', slug: 'framework/grids12', key: 'framework/grids12' },
	{ text: 'Grids - RAM', slug: 'framework/ram', key: 'framework/ram' },
	{ text: 'Layers', slug: 'framework/layers', key: 'framework/layers' },
	{ text: 'Layouts', slug: 'framework/layouts', key: 'framework/layouts' },
	{ text: 'Masks', slug: 'framework/masks', key: 'framework/masks' },
	{ text: 'Media Queries', slug: 'framework/media-queries', key: 'framework/media-queries' },
	{ text: 'Normalize', slug: 'framework/normalize', key: 'framework/normalize' },
	{ text: 'Shadows', slug: 'framework/shadows', key: 'framework/shadows' },
	{ text: 'Sizes', slug: 'framework/sizes', key: 'framework/sizes' },
	{ text: 'Typography', slug: 'framework/typography', key: 'framework/typography' },

	{ text: 'Builder Enhancements', header: true, type: 'learn', key: 'features' },
	{ text: 'Context Menu', slug: 'features/context-menu', key: 'features/context-menu' },
	{ text: 'Global Colors', slug: 'features/global-colors', key: 'features/global-colors' },
	{ text: 'Global Settings', slug: 'features/global-settings', key: 'features/global-settings' },
	{ text: 'Selectors', slug: 'features/selectors', key: 'features/selectors' },
	{ text: 'Stylesheets', slug: 'features/stylesheets', key: 'features/stylesheets' },

	{ text: 'Custom Elements', header: true, type: 'learn', key: 'elements' },
	{ text: 'Light/Dark Toggle', slug: 'elements/light-dark-toggle', key: 'elements/light-dark-toggle' },
	{ text: 'A11y', header: true, type: 'cheat', key: 'animations' },
	{
		text: 'Accessibility',
		slug: 'cheatsheet/a11y',
		key: 'cheatsheet/a11y',
	},
	{ text: 'Animations', header: true, type: 'cheat', key: 'animations' },
	{
		text: 'Animations',
		slug: 'cheatsheet/animations',
		key: 'cheatsheet/animations',
	},
	{
		text: 'Easing',
		slug: 'cheatsheet/easings',
		key: 'cheatsheet/easings',
	},
	{ text: 'Aspect Ratios', header: true, type: 'cheat', key: 'aspect-ratios' },
	{
		text: 'Aspect Ratios',
		slug: 'cheatsheet/aspect-ratios',
		key: 'cheatsheet/aspect-ratios',
	},
	{ text: 'Borders', header: true, type: 'cheat', key: 'borders' },
	{
		text: 'Borders Sizes',
		slug: 'cheatsheet/borders-sizes',
		key: 'cheatsheet/borders-sizes',
	},
	{
		text: 'Borders Radius',
		slug: 'cheatsheet/borders-radius',
		key: 'cheatsheet/borders-radius',
	},
	{
		text: 'Blobs',
		slug: 'cheatsheet/blobs',
		key: 'cheatsheet/blobs',
	},
	{
		text: 'Conditional Radius',
		slug: 'cheatsheet/conditional-radius',
		key: 'cheatsheet/conditional-radius',
	},
	{ text: 'Colors', header: true, type: 'cheat', key: 'colors' },
	{
		text: 'Logical Colors',
		slug: 'cheatsheet/logical-colors',
		key: 'cheatsheet/logical-colors',
	},
	{
		text: 'Background Colors',
		slug: 'cheatsheet/background-colors',
		key: 'cheatsheet/background-colors',
	},
	{
		text: 'Backdrop Colors',
		slug: 'cheatsheet/backdrop-colors',
		key: 'cheatsheet/backdrop-colors',
	},
	{
		text: 'Text Colors',
		slug: 'cheatsheet/text-colors',
		key: 'cheatsheet/text-colors',
	},
	{
		text: 'SVG Fill Colors',
		slug: 'cheatsheet/svg-fill',
		key: 'cheatsheet/svg-fill',
	},
	{
		text: 'SVG Stroke Colors',
		slug: 'cheatsheet/svg-stroke',
		key: 'cheatsheet/svg-stroke',
	},
	{ text: 'Cursors', header: true, type: 'cheat', key: 'gradients' },
	{
		text: 'Shapes',
		slug: 'cheatsheet/cursor-shapes',
		key: 'cheatsheet/cursor-shapes',
	},
	{
		text: 'Events',
		slug: 'cheatsheet/pointer-events',
		key: 'cheatsheet/pointer-events',
	},
	{ text: 'Gradients', header: true, type: 'cheat', key: 'gradients' },
	{
		text: 'Background gradients',
		slug: 'cheatsheet/background-gradients',
		key: 'cheatsheet/background-gradients',
	},
	{
		text: 'Text gradients',
		slug: 'cheatsheet/text-gradients',
		key: 'cheatsheet/text-gradients',
	},
	{
		text: 'Noises and Filters',
		slug: 'cheatsheet/noises-and-filters',
		key: 'cheatsheet/noises-and-filters',
	},
	{ text: 'Layers', header: true, type: 'cheat', key: 'layers' },
	{
		text: 'Layers cheatsheet',
		slug: 'cheatsheet/layers',
		key: 'cheatsheet/layers',
	},
	{ text: 'Layouts', header: true, type: 'cheat', key: 'layouts' },
	{
		text: 'Layouts cheatsheet',
		slug: 'cheatsheet/layouts',
		key: 'cheatsheet/layouts',
	},
	{
		text: 'Flexbox',
		slug: 'cheatsheet/flexbox',
		key: 'cheatsheet/flexbox',
	},
	{
		text: 'Flex cards',
		slug: 'cheatsheet/flex-cards',
		key: 'cheatsheet/flex-cards',
	},
	{
		text: 'Grid',
		slug: 'cheatsheet/grids',
		key: 'cheatsheet/grids',
	},
	{
		text: 'RAM (Auto responsive grids)',
		slug: 'cheatsheet/rams',
		key: 'cheatsheet/rams',
	},
	{
		text: 'Grid preset layouts',
		slug: 'cheatsheet/grid-presets',
		key: 'cheatsheet/grid-presets',
	},
	{ text: 'Masks', header: true, type: 'cheat', key: 'masks' },
	{
		text: 'Edge Masks',
		slug: 'cheatsheet/mask-edge',
		key: 'cheatsheet/mask-edge',
	},
	{
		text: 'Corner Cut',
		slug: 'cheatsheet/corner-cuts',
		key: 'cheatsheet/corner-cuts',
	},
	{ text: 'Position', header: true, type: 'cheat', key: 'position' },
	{
		text: 'Snapping',
		slug: 'cheatsheet/snapping',
		key: 'cheatsheet/snapping',
	},
	{
		text: 'Overflow',
		slug: 'cheatsheet/overflow',
		key: 'cheatsheet/overflow',
	},
	{
		text: 'Positioning',
		slug: 'cheatsheet/positioning',
		key: 'cheatsheet/positioning',
	},
	{
		text: 'Resize',
		slug: 'cheatsheet/resize',
		key: 'cheatsheet/resize',
	},
	{ text: 'Scrollbars', header: true, type: 'cheat', key: 'scrollbars' },
	{
		text: 'Scrollbars',
		slug: 'cheatsheet/scrollbars',
		key: 'cheatsheet/scrollbars',
	},
	{ text: 'Shadows', header: true, type: 'cheat', key: 'shadows' },
	{
		text: 'Box Shadows',
		slug: 'cheatsheet/box-shadows',
		key: 'cheatsheet/box-shadows',
	},
	{
		text: 'Text Shadows',
		slug: 'cheatsheet/text-shadows',
		key: 'cheatsheet/text-shadows',
	},
	{ text: 'Sizes', header: true, type: 'cheat', key: 'sizes' },
	{
		text: 'Generic Sizes',
		slug: 'cheatsheet/sizes',
		key: 'cheatsheet/sizes',
	},
	{
		text: 'Gaps',
		slug: 'cheatsheet/gaps',
		key: 'cheatsheet/gaps',
	},
	{
		text: 'Heights',
		slug: 'cheatsheet/heights',
		key: 'cheatsheet/heights',
	},
	{
		text: 'Margins',
		slug: 'cheatsheet/margins',
		key: 'cheatsheet/margins',
	},
	{
		text: 'Spacing',
		slug: 'cheatsheet/spacing',
		key: 'cheatsheet/spacing',
	},
	{
		text: 'Paddings',
		slug: 'cheatsheet/paddings',
		key: 'cheatsheet/paddings',
	},
	{ text: 'Typography', header: true, type: 'cheat', key: 'typography' },
	{
		text: 'Families and Weights',
		slug: 'cheatsheet/families-and-weights',
		key: 'cheatsheet/families-and-weights',
	},
	{
		text: 'Font Spacing',
		slug: 'cheatsheet/font-spacing',
		key: 'cheatsheet/font-spacing',
	},
	{
		text: 'Font Size',
		slug: 'cheatsheet/font-size',
		key: 'cheatsheet/font-size',
	},
	{
		text: 'Text Layout',
		slug: 'cheatsheet/text-layout',
		key: 'cheatsheet/text-layout',
	},
	{
		text: 'Text Decoration',
		slug: 'cheatsheet/text-decoration',
		key: 'cheatsheet/text-decoration',
	},
	{
		text: 'Text Overflow',
		slug: 'cheatsheet/text-overflow',
		key: 'cheatsheet/text-overflow',
	},
] as const;
