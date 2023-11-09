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

	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;
	export type CollectionEntry<C extends keyof AnyEntryMap> = Flatten<AnyEntryMap[C]>;

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
				import('astro/zod').ZodLiteral<'svg'>,
			]
		>;
	}>;

	type BaseSchemaWithoutEffects =
		| import('astro/zod').AnyZodObject
		| import('astro/zod').ZodUnion<[BaseSchemaWithoutEffects, ...BaseSchemaWithoutEffects[]]>
		| import('astro/zod').ZodDiscriminatedUnion<string, import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodIntersection<BaseSchemaWithoutEffects, BaseSchemaWithoutEffects>;

	type BaseSchema =
		| BaseSchemaWithoutEffects
		| import('astro/zod').ZodEffects<BaseSchemaWithoutEffects>;

	export type SchemaContext = { image: ImageFunction };

	type DataCollectionConfig<S extends BaseSchema> = {
		type: 'data';
		schema?: S | ((context: SchemaContext) => S);
	};

	type ContentCollectionConfig<S extends BaseSchema> = {
		type?: 'content';
		schema?: S | ((context: SchemaContext) => S);
	};

	type CollectionConfig<S> = ContentCollectionConfig<S> | DataCollectionConfig<S>;

	export function defineCollection<S extends BaseSchema>(
		input: CollectionConfig<S>
	): CollectionConfig<S>;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[]
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[]
	): Promise<CollectionEntry<C>[]>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
			  }
			: {
					collection: C;
					id: keyof DataEntryMap[C];
			  }
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"docs": {
"cheatsheet/a11y.mdx": {
	id: "cheatsheet/a11y.mdx";
  slug: "cheatsheet/a11y";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"cheatsheet/animations.mdx": {
	id: "cheatsheet/animations.mdx";
  slug: "cheatsheet/animations";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"cheatsheet/aspect-ratios.mdx": {
	id: "cheatsheet/aspect-ratios.mdx";
  slug: "cheatsheet/aspect-ratios";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"cheatsheet/backdrop-colors.mdx": {
	id: "cheatsheet/backdrop-colors.mdx";
  slug: "cheatsheet/backdrop-colors";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"cheatsheet/background-colors.mdx": {
	id: "cheatsheet/background-colors.mdx";
  slug: "cheatsheet/background-colors";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"cheatsheet/background-gradients.mdx": {
	id: "cheatsheet/background-gradients.mdx";
  slug: "cheatsheet/background-gradients";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"cheatsheet/blobs.mdx": {
	id: "cheatsheet/blobs.mdx";
  slug: "cheatsheet/blobs";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"cheatsheet/borders-radius.mdx": {
	id: "cheatsheet/borders-radius.mdx";
  slug: "cheatsheet/borders-radius";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"cheatsheet/borders-sizes.mdx": {
	id: "cheatsheet/borders-sizes.mdx";
  slug: "cheatsheet/borders-sizes";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"cheatsheet/box-shadows.mdx": {
	id: "cheatsheet/box-shadows.mdx";
  slug: "cheatsheet/box-shadows";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"cheatsheet/buttons.mdx": {
	id: "cheatsheet/buttons.mdx";
  slug: "cheatsheet/buttons";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"cheatsheet/conditional-radius.mdx": {
	id: "cheatsheet/conditional-radius.mdx";
  slug: "cheatsheet/conditional-radius";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"cheatsheet/corner-cuts.mdx": {
	id: "cheatsheet/corner-cuts.mdx";
  slug: "cheatsheet/corner-cuts";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"cheatsheet/cursor-shapes.mdx": {
	id: "cheatsheet/cursor-shapes.mdx";
  slug: "cheatsheet/cursor-shapes";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"cheatsheet/easings.mdx": {
	id: "cheatsheet/easings.mdx";
  slug: "cheatsheet/easings";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"cheatsheet/families-and-weights.mdx": {
	id: "cheatsheet/families-and-weights.mdx";
  slug: "cheatsheet/families-and-weights";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"cheatsheet/flex-cards.mdx": {
	id: "cheatsheet/flex-cards.mdx";
  slug: "cheatsheet/flex-cards";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"cheatsheet/flexbox.mdx": {
	id: "cheatsheet/flexbox.mdx";
  slug: "cheatsheet/flexbox";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"cheatsheet/font-size.mdx": {
	id: "cheatsheet/font-size.mdx";
  slug: "cheatsheet/font-size";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"cheatsheet/font-spacing.mdx": {
	id: "cheatsheet/font-spacing.mdx";
  slug: "cheatsheet/font-spacing";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"cheatsheet/gaps.mdx": {
	id: "cheatsheet/gaps.mdx";
  slug: "cheatsheet/gaps";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"cheatsheet/grid-presets.mdx": {
	id: "cheatsheet/grid-presets.mdx";
  slug: "cheatsheet/grid-presets";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"cheatsheet/grids.mdx": {
	id: "cheatsheet/grids.mdx";
  slug: "cheatsheet/grids";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"cheatsheet/heights.mdx": {
	id: "cheatsheet/heights.mdx";
  slug: "cheatsheet/heights";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"cheatsheet/layers.mdx": {
	id: "cheatsheet/layers.mdx";
  slug: "cheatsheet/layers";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"cheatsheet/layouts.mdx": {
	id: "cheatsheet/layouts.mdx";
  slug: "cheatsheet/layouts";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"cheatsheet/logical-colors.mdx": {
	id: "cheatsheet/logical-colors.mdx";
  slug: "cheatsheet/logical-colors";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"cheatsheet/margins.mdx": {
	id: "cheatsheet/margins.mdx";
  slug: "cheatsheet/margins";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"cheatsheet/mask-edge.mdx": {
	id: "cheatsheet/mask-edge.mdx";
  slug: "cheatsheet/mask-edge";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"cheatsheet/noises-and-filters.mdx": {
	id: "cheatsheet/noises-and-filters.mdx";
  slug: "cheatsheet/noises-and-filters";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"cheatsheet/overflow.mdx": {
	id: "cheatsheet/overflow.mdx";
  slug: "cheatsheet/overflow";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"cheatsheet/paddings.mdx": {
	id: "cheatsheet/paddings.mdx";
  slug: "cheatsheet/paddings";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"cheatsheet/pointer-events.mdx": {
	id: "cheatsheet/pointer-events.mdx";
  slug: "cheatsheet/pointer-events";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"cheatsheet/positioning.mdx": {
	id: "cheatsheet/positioning.mdx";
  slug: "cheatsheet/positioning";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"cheatsheet/rams.mdx": {
	id: "cheatsheet/rams.mdx";
  slug: "cheatsheet/rams";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"cheatsheet/resize.mdx": {
	id: "cheatsheet/resize.mdx";
  slug: "cheatsheet/resize";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"cheatsheet/scrollbars.mdx": {
	id: "cheatsheet/scrollbars.mdx";
  slug: "cheatsheet/scrollbars";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"cheatsheet/sizes.mdx": {
	id: "cheatsheet/sizes.mdx";
  slug: "cheatsheet/sizes";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"cheatsheet/snapping.mdx": {
	id: "cheatsheet/snapping.mdx";
  slug: "cheatsheet/snapping";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"cheatsheet/spacing.mdx": {
	id: "cheatsheet/spacing.mdx";
  slug: "cheatsheet/spacing";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"cheatsheet/svg-fill.mdx": {
	id: "cheatsheet/svg-fill.mdx";
  slug: "cheatsheet/svg-fill";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"cheatsheet/svg-stroke.mdx": {
	id: "cheatsheet/svg-stroke.mdx";
  slug: "cheatsheet/svg-stroke";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"cheatsheet/text-colors.mdx": {
	id: "cheatsheet/text-colors.mdx";
  slug: "cheatsheet/text-colors";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"cheatsheet/text-decoration.mdx": {
	id: "cheatsheet/text-decoration.mdx";
  slug: "cheatsheet/text-decoration";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"cheatsheet/text-gradients.mdx": {
	id: "cheatsheet/text-gradients.mdx";
  slug: "cheatsheet/text-gradients";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"cheatsheet/text-layout.mdx": {
	id: "cheatsheet/text-layout.mdx";
  slug: "cheatsheet/text-layout";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"cheatsheet/text-overflow.mdx": {
	id: "cheatsheet/text-overflow.mdx";
  slug: "cheatsheet/text-overflow";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"cheatsheet/text-shadows.mdx": {
	id: "cheatsheet/text-shadows.mdx";
  slug: "cheatsheet/text-shadows";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"core-concepts/atomic-design-system.mdx": {
	id: "core-concepts/atomic-design-system.mdx";
  slug: "core-concepts/atomic-design-system";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"core-concepts/css-custom-properties.mdx": {
	id: "core-concepts/css-custom-properties.mdx";
  slug: "core-concepts/css-custom-properties";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"core-concepts/design-tokens.mdx": {
	id: "core-concepts/design-tokens.mdx";
  slug: "core-concepts/design-tokens";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"core-concepts/why-oxyprops.mdx": {
	id: "core-concepts/why-oxyprops.mdx";
  slug: "core-concepts/why-oxyprops";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"features/better-oxygen-emmet.mdx": {
	id: "features/better-oxygen-emmet.mdx";
  slug: "features/better-oxygen-emmet";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"features/builder-light-dark-toggle.md": {
	id: "features/builder-light-dark-toggle.md";
  slug: "features/builder-light-dark-toggle";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"features/context-menu.md": {
	id: "features/context-menu.md";
  slug: "features/context-menu";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"features/custom-elements.md": {
	id: "features/custom-elements.md";
  slug: "features/custom-elements";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"features/global-colors.md": {
	id: "features/global-colors.md";
  slug: "features/global-colors";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"features/global-settings.md": {
	id: "features/global-settings.md";
  slug: "features/global-settings";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"features/selectors.md": {
	id: "features/selectors.md";
  slug: "features/selectors";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"features/structure-menu.md": {
	id: "features/structure-menu.md";
  slug: "features/structure-menu";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"features/stylesheets.md": {
	id: "features/stylesheets.md";
  slug: "features/stylesheets";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"fr/introduction.mdx": {
	id: "fr/introduction.mdx";
  slug: "fr/introduction";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"fr/start-here/known-issues.mdx": {
	id: "fr/start-here/known-issues.mdx";
  slug: "fr/start-here/known-issues";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"fr/start-here/quick-start-guide.mdx": {
	id: "fr/start-here/quick-start-guide.mdx";
  slug: "fr/start-here/quick-start-guide";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"framework/Borders/blobs.mdx": {
	id: "framework/Borders/blobs.mdx";
  slug: "framework/borders/blobs";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"framework/Borders/conditional.mdx": {
	id: "framework/Borders/conditional.mdx";
  slug: "framework/borders/conditional";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"framework/Borders/radius.mdx": {
	id: "framework/Borders/radius.mdx";
  slug: "framework/borders/radius";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"framework/Borders/sizes.mdx": {
	id: "framework/Borders/sizes.mdx";
  slug: "framework/borders/sizes";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"framework/Buttons/buttons.mdx": {
	id: "framework/Buttons/buttons.mdx";
  slug: "framework/buttons/buttons";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"framework/Typography/font-families.mdx": {
	id: "framework/Typography/font-families.mdx";
  slug: "framework/typography/font-families";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"framework/Typography/font-weights.mdx": {
	id: "framework/Typography/font-weights.mdx";
  slug: "framework/typography/font-weights";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"framework/Typography/letterspacing.mdx": {
	id: "framework/Typography/letterspacing.mdx";
  slug: "framework/typography/letterspacing";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"framework/a11y.mdx": {
	id: "framework/a11y.mdx";
  slug: "framework/a11y";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"framework/animations.mdx": {
	id: "framework/animations.mdx";
  slug: "framework/animations";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"framework/aspect-ratios.mdx": {
	id: "framework/aspect-ratios.mdx";
  slug: "framework/aspect-ratios";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"framework/color-schemes.md": {
	id: "framework/color-schemes.md";
  slug: "framework/color-schemes";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"framework/colors.md": {
	id: "framework/colors.md";
  slug: "framework/colors";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"framework/cursors.md": {
	id: "framework/cursors.md";
  slug: "framework/cursors";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"framework/easing.md": {
	id: "framework/easing.md";
  slug: "framework/easing";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"framework/gradients.md": {
	id: "framework/gradients.md";
  slug: "framework/gradients";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"framework/grids.md": {
	id: "framework/grids.md";
  slug: "framework/grids";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"framework/grids12.md": {
	id: "framework/grids12.md";
  slug: "framework/grids12";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"framework/layers.md": {
	id: "framework/layers.md";
  slug: "framework/layers";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"framework/layouts.md": {
	id: "framework/layouts.md";
  slug: "framework/layouts";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"framework/masks.md": {
	id: "framework/masks.md";
  slug: "framework/masks";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"framework/media-queries.md": {
	id: "framework/media-queries.md";
  slug: "framework/media-queries";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"framework/normalize.md": {
	id: "framework/normalize.md";
  slug: "framework/normalize";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"framework/ram.md": {
	id: "framework/ram.md";
  slug: "framework/ram";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"framework/shadows.mdx": {
	id: "framework/shadows.mdx";
  slug: "framework/shadows";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"framework/sizes.md": {
	id: "framework/sizes.md";
  slug: "framework/sizes";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"index.mdx": {
	id: "index.mdx";
  slug: "index";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"introduction.mdx": {
	id: "introduction.mdx";
  slug: "introduction";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"start-here/known-issues.mdx": {
	id: "start-here/known-issues.mdx";
  slug: "start-here/known-issues";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"start-here/quick-start-guide.mdx": {
	id: "start-here/quick-start-guide.mdx";
  slug: "start-here/quick-start-guide";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
};

	};

	type DataEntryMap = {
		"i18n": {
"fr": {
	id: "fr";
  collection: "i18n";
  data: InferEntrySchema<"i18n">
};
};

	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	type ContentConfig = typeof import("../src/content/config");
}
