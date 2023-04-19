declare module 'astro:content' {
	interface Render {
		'.mdx': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	interface Render {
		'.md': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	export { z } from 'astro/zod';
	export type CollectionEntry<C extends keyof typeof entryMap> =
		(typeof entryMap)[C][keyof (typeof entryMap)[C]];

	// TODO: Remove this when having this fallback is no longer relevant. 2.3? 3.0? - erika, 2023-04-04
	/**
	 * @deprecated
	 * `astro:content` no longer provide `image()`.
	 *
	 * Please use it through `schema`, like such:
	 * ```ts
	 * import { defineCollection, z } from "astro:content";
	 *
	 * defineCollection({
	 *   schema: ({ image }) =>
	 *     z.object({
	 *       image: image(),
	 *     }),
	 * });
	 * ```
	 */
	export const image: never;

	// This needs to be in sync with ImageMetadata
	export type ImageFunction = () => import('astro/zod').ZodObject<{
		src: import('astro/zod').ZodString;
		width: import('astro/zod').ZodNumber;
		height: import('astro/zod').ZodNumber;
		format: import('astro/zod').ZodUnion<
			[
				import('astro/zod').ZodLiteral<'png'>,
				import('astro/zod').ZodLiteral<'jpg'>,
				import('astro/zod').ZodLiteral<'jpeg'>,
				import('astro/zod').ZodLiteral<'tiff'>,
				import('astro/zod').ZodLiteral<'webp'>,
				import('astro/zod').ZodLiteral<'gif'>,
				import('astro/zod').ZodLiteral<'svg'>
			]
		>;
	}>;

	type BaseSchemaWithoutEffects =
		| import('astro/zod').AnyZodObject
		| import('astro/zod').ZodUnion<import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodDiscriminatedUnion<string, import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodIntersection<
				import('astro/zod').AnyZodObject,
				import('astro/zod').AnyZodObject
		  >;

	type BaseSchema =
		| BaseSchemaWithoutEffects
		| import('astro/zod').ZodEffects<BaseSchemaWithoutEffects>;

	export type SchemaContext = { image: ImageFunction };

	type BaseCollectionConfig<S extends BaseSchema> = {
		schema?: S | ((context: SchemaContext) => S);
	};
	export function defineCollection<S extends BaseSchema>(
		input: BaseCollectionConfig<S>
	): BaseCollectionConfig<S>;

	type EntryMapKeys = keyof typeof entryMap;
	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidEntrySlug<C extends EntryMapKeys> = AllValuesOf<(typeof entryMap)[C]>['slug'];

	export function getEntryBySlug<
		C extends keyof typeof entryMap,
		E extends ValidEntrySlug<C> | (string & {})
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getCollection<C extends keyof typeof entryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E
	): Promise<E[]>;
	export function getCollection<C extends keyof typeof entryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown
	): Promise<CollectionEntry<C>[]>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof typeof entryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	const entryMap: {
		"docs": {
"en/basic-setup.mdx": {
  id: "en/basic-setup.mdx",
  slug: "en/basic-setup",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] },
"en/cheatsheet/a11y.mdx": {
  id: "en/cheatsheet/a11y.mdx",
  slug: "en/cheatsheet/a11y",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] },
"en/cheatsheet/animations.mdx": {
  id: "en/cheatsheet/animations.mdx",
  slug: "en/cheatsheet/animations",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] },
"en/cheatsheet/aspect-ratios.mdx": {
  id: "en/cheatsheet/aspect-ratios.mdx",
  slug: "en/cheatsheet/aspect-ratios",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] },
"en/cheatsheet/backdrop-colors.mdx": {
  id: "en/cheatsheet/backdrop-colors.mdx",
  slug: "en/cheatsheet/backdrop-colors",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] },
"en/cheatsheet/background-colors.mdx": {
  id: "en/cheatsheet/background-colors.mdx",
  slug: "en/cheatsheet/background-colors",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] },
"en/cheatsheet/background-gradients.mdx": {
  id: "en/cheatsheet/background-gradients.mdx",
  slug: "en/cheatsheet/background-gradients",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] },
"en/cheatsheet/blobs.mdx": {
  id: "en/cheatsheet/blobs.mdx",
  slug: "en/cheatsheet/blobs",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] },
"en/cheatsheet/borders-radius.mdx": {
  id: "en/cheatsheet/borders-radius.mdx",
  slug: "en/cheatsheet/borders-radius",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] },
"en/cheatsheet/borders-sizes.mdx": {
  id: "en/cheatsheet/borders-sizes.mdx",
  slug: "en/cheatsheet/borders-sizes",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] },
"en/cheatsheet/box-shadows.mdx": {
  id: "en/cheatsheet/box-shadows.mdx",
  slug: "en/cheatsheet/box-shadows",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] },
"en/cheatsheet/buttons.mdx": {
  id: "en/cheatsheet/buttons.mdx",
  slug: "en/cheatsheet/buttons",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] },
"en/cheatsheet/conditional-radius.mdx": {
  id: "en/cheatsheet/conditional-radius.mdx",
  slug: "en/cheatsheet/conditional-radius",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] },
"en/cheatsheet/corner-cuts.mdx": {
  id: "en/cheatsheet/corner-cuts.mdx",
  slug: "en/cheatsheet/corner-cuts",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] },
"en/cheatsheet/cursor-shapes.mdx": {
  id: "en/cheatsheet/cursor-shapes.mdx",
  slug: "en/cheatsheet/cursor-shapes",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] },
"en/cheatsheet/easings.mdx": {
  id: "en/cheatsheet/easings.mdx",
  slug: "en/cheatsheet/easings",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] },
"en/cheatsheet/families-and-weights.mdx": {
  id: "en/cheatsheet/families-and-weights.mdx",
  slug: "en/cheatsheet/families-and-weights",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] },
"en/cheatsheet/flex-cards.mdx": {
  id: "en/cheatsheet/flex-cards.mdx",
  slug: "en/cheatsheet/flex-cards",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] },
"en/cheatsheet/flexbox.mdx": {
  id: "en/cheatsheet/flexbox.mdx",
  slug: "en/cheatsheet/flexbox",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] },
"en/cheatsheet/font-size.mdx": {
  id: "en/cheatsheet/font-size.mdx",
  slug: "en/cheatsheet/font-size",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] },
"en/cheatsheet/font-spacing.mdx": {
  id: "en/cheatsheet/font-spacing.mdx",
  slug: "en/cheatsheet/font-spacing",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] },
"en/cheatsheet/gaps.mdx": {
  id: "en/cheatsheet/gaps.mdx",
  slug: "en/cheatsheet/gaps",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] },
"en/cheatsheet/grid-presets.mdx": {
  id: "en/cheatsheet/grid-presets.mdx",
  slug: "en/cheatsheet/grid-presets",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] },
"en/cheatsheet/grids.mdx": {
  id: "en/cheatsheet/grids.mdx",
  slug: "en/cheatsheet/grids",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] },
"en/cheatsheet/heights.mdx": {
  id: "en/cheatsheet/heights.mdx",
  slug: "en/cheatsheet/heights",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] },
"en/cheatsheet/layers.mdx": {
  id: "en/cheatsheet/layers.mdx",
  slug: "en/cheatsheet/layers",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] },
"en/cheatsheet/layouts.mdx": {
  id: "en/cheatsheet/layouts.mdx",
  slug: "en/cheatsheet/layouts",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] },
"en/cheatsheet/logical-colors.mdx": {
  id: "en/cheatsheet/logical-colors.mdx",
  slug: "en/cheatsheet/logical-colors",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] },
"en/cheatsheet/margins.mdx": {
  id: "en/cheatsheet/margins.mdx",
  slug: "en/cheatsheet/margins",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] },
"en/cheatsheet/mask-edge.mdx": {
  id: "en/cheatsheet/mask-edge.mdx",
  slug: "en/cheatsheet/mask-edge",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] },
"en/cheatsheet/noises-and-filters.mdx": {
  id: "en/cheatsheet/noises-and-filters.mdx",
  slug: "en/cheatsheet/noises-and-filters",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] },
"en/cheatsheet/overflow.mdx": {
  id: "en/cheatsheet/overflow.mdx",
  slug: "en/cheatsheet/overflow",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] },
"en/cheatsheet/paddings.mdx": {
  id: "en/cheatsheet/paddings.mdx",
  slug: "en/cheatsheet/paddings",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] },
"en/cheatsheet/pointer-events.mdx": {
  id: "en/cheatsheet/pointer-events.mdx",
  slug: "en/cheatsheet/pointer-events",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] },
"en/cheatsheet/positioning.mdx": {
  id: "en/cheatsheet/positioning.mdx",
  slug: "en/cheatsheet/positioning",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] },
"en/cheatsheet/rams.mdx": {
  id: "en/cheatsheet/rams.mdx",
  slug: "en/cheatsheet/rams",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] },
"en/cheatsheet/resize.mdx": {
  id: "en/cheatsheet/resize.mdx",
  slug: "en/cheatsheet/resize",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] },
"en/cheatsheet/scrollbars.mdx": {
  id: "en/cheatsheet/scrollbars.mdx",
  slug: "en/cheatsheet/scrollbars",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] },
"en/cheatsheet/sizes.mdx": {
  id: "en/cheatsheet/sizes.mdx",
  slug: "en/cheatsheet/sizes",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] },
"en/cheatsheet/snapping.mdx": {
  id: "en/cheatsheet/snapping.mdx",
  slug: "en/cheatsheet/snapping",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] },
"en/cheatsheet/spacing.mdx": {
  id: "en/cheatsheet/spacing.mdx",
  slug: "en/cheatsheet/spacing",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] },
"en/cheatsheet/svg-fill.mdx": {
  id: "en/cheatsheet/svg-fill.mdx",
  slug: "en/cheatsheet/svg-fill",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] },
"en/cheatsheet/svg-stroke.mdx": {
  id: "en/cheatsheet/svg-stroke.mdx",
  slug: "en/cheatsheet/svg-stroke",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] },
"en/cheatsheet/text-colors.mdx": {
  id: "en/cheatsheet/text-colors.mdx",
  slug: "en/cheatsheet/text-colors",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] },
"en/cheatsheet/text-decoration.mdx": {
  id: "en/cheatsheet/text-decoration.mdx",
  slug: "en/cheatsheet/text-decoration",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] },
"en/cheatsheet/text-gradients.mdx": {
  id: "en/cheatsheet/text-gradients.mdx",
  slug: "en/cheatsheet/text-gradients",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] },
"en/cheatsheet/text-layout.mdx": {
  id: "en/cheatsheet/text-layout.mdx",
  slug: "en/cheatsheet/text-layout",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] },
"en/cheatsheet/text-overflow.mdx": {
  id: "en/cheatsheet/text-overflow.mdx",
  slug: "en/cheatsheet/text-overflow",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] },
"en/cheatsheet/text-shadows.mdx": {
  id: "en/cheatsheet/text-shadows.mdx",
  slug: "en/cheatsheet/text-shadows",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] },
"en/components/buttons.mdx": {
  id: "en/components/buttons.mdx",
  slug: "en/components/buttons",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] },
"en/components/cards.md": {
  id: "en/components/cards.md",
  slug: "en/components/cards",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/core-concepts/atomic-design-system.mdx": {
  id: "en/core-concepts/atomic-design-system.mdx",
  slug: "en/core-concepts/atomic-design-system",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] },
"en/core-concepts/css-custom-properties.mdx": {
  id: "en/core-concepts/css-custom-properties.mdx",
  slug: "en/core-concepts/css-custom-properties",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] },
"en/core-concepts/design-tokens.mdx": {
  id: "en/core-concepts/design-tokens.mdx",
  slug: "en/core-concepts/design-tokens",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] },
"en/elements/faq-element.mdx": {
  id: "en/elements/faq-element.mdx",
  slug: "en/elements/faq-element",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] },
"en/elements/icon-element.mdx": {
  id: "en/elements/icon-element.mdx",
  slug: "en/elements/icon-element",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] },
"en/elements/light-dark-toggle.mdx": {
  id: "en/elements/light-dark-toggle.mdx",
  slug: "en/elements/light-dark-toggle",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] },
"en/elements/menubar-element.mdx": {
  id: "en/elements/menubar-element.mdx",
  slug: "en/elements/menubar-element",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] },
"en/elements/menuburger-element.md": {
  id: "en/elements/menuburger-element.md",
  slug: "en/elements/menuburger-element",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/elements/menubutton-element.md": {
  id: "en/elements/menubutton-element.md",
  slug: "en/elements/menubutton-element",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/features/builder-light-dark-toggle.md": {
  id: "en/features/builder-light-dark-toggle.md",
  slug: "en/features/builder-light-dark-toggle",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/features/context-menu.md": {
  id: "en/features/context-menu.md",
  slug: "en/features/context-menu",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/features/custom-elements.md": {
  id: "en/features/custom-elements.md",
  slug: "en/features/custom-elements",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/features/global-colors.md": {
  id: "en/features/global-colors.md",
  slug: "en/features/global-colors",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/features/global-settings.md": {
  id: "en/features/global-settings.md",
  slug: "en/features/global-settings",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/features/selectors.md": {
  id: "en/features/selectors.md",
  slug: "en/features/selectors",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/features/structure-menu.md": {
  id: "en/features/structure-menu.md",
  slug: "en/features/structure-menu",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/features/stylesheets.md": {
  id: "en/features/stylesheets.md",
  slug: "en/features/stylesheets",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/framework/animations.mdx": {
  id: "en/framework/animations.mdx",
  slug: "en/framework/animations",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] },
"en/framework/aspect-ratios.mdx": {
  id: "en/framework/aspect-ratios.mdx",
  slug: "en/framework/aspect-ratios",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] },
"en/framework/borders.md": {
  id: "en/framework/borders.md",
  slug: "en/framework/borders",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/framework/color-schemes.md": {
  id: "en/framework/color-schemes.md",
  slug: "en/framework/color-schemes",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/framework/colors.md": {
  id: "en/framework/colors.md",
  slug: "en/framework/colors",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/framework/cursors.md": {
  id: "en/framework/cursors.md",
  slug: "en/framework/cursors",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/framework/easing.md": {
  id: "en/framework/easing.md",
  slug: "en/framework/easing",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/framework/gradients.md": {
  id: "en/framework/gradients.md",
  slug: "en/framework/gradients",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/framework/grids.md": {
  id: "en/framework/grids.md",
  slug: "en/framework/grids",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/framework/grids12.md": {
  id: "en/framework/grids12.md",
  slug: "en/framework/grids12",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/framework/layers.md": {
  id: "en/framework/layers.md",
  slug: "en/framework/layers",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/framework/layouts.md": {
  id: "en/framework/layouts.md",
  slug: "en/framework/layouts",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/framework/masks.md": {
  id: "en/framework/masks.md",
  slug: "en/framework/masks",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/framework/media-queries.md": {
  id: "en/framework/media-queries.md",
  slug: "en/framework/media-queries",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/framework/normalize.md": {
  id: "en/framework/normalize.md",
  slug: "en/framework/normalize",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/framework/ram.md": {
  id: "en/framework/ram.md",
  slug: "en/framework/ram",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/framework/shadows.mdx": {
  id: "en/framework/shadows.mdx",
  slug: "en/framework/shadows",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] },
"en/framework/sizes.md": {
  id: "en/framework/sizes.md",
  slug: "en/framework/sizes",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/framework/typography.mdx": {
  id: "en/framework/typography.mdx",
  slug: "en/framework/typography",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] },
"en/getting-started.mdx": {
  id: "en/getting-started.mdx",
  slug: "en/getting-started",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] },
"en/installation.mdx": {
  id: "en/installation.mdx",
  slug: "en/installation",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] },
},

	};

	type ContentConfig = typeof import("../src/content/config");
}
