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
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

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
"en/cheatsheet/a11y.mdx": {
	id: "en/cheatsheet/a11y.mdx";
  slug: "en/cheatsheet/a11y";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"en/cheatsheet/animations.mdx": {
	id: "en/cheatsheet/animations.mdx";
  slug: "en/cheatsheet/animations";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"en/cheatsheet/aspect-ratios.mdx": {
	id: "en/cheatsheet/aspect-ratios.mdx";
  slug: "en/cheatsheet/aspect-ratios";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"en/cheatsheet/backdrop-colors.mdx": {
	id: "en/cheatsheet/backdrop-colors.mdx";
  slug: "en/cheatsheet/backdrop-colors";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"en/cheatsheet/background-colors.mdx": {
	id: "en/cheatsheet/background-colors.mdx";
  slug: "en/cheatsheet/background-colors";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"en/cheatsheet/background-gradients.mdx": {
	id: "en/cheatsheet/background-gradients.mdx";
  slug: "en/cheatsheet/background-gradients";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"en/cheatsheet/blobs.mdx": {
	id: "en/cheatsheet/blobs.mdx";
  slug: "en/cheatsheet/blobs";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"en/cheatsheet/borders-radius.mdx": {
	id: "en/cheatsheet/borders-radius.mdx";
  slug: "en/cheatsheet/borders-radius";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"en/cheatsheet/borders-sizes.mdx": {
	id: "en/cheatsheet/borders-sizes.mdx";
  slug: "en/cheatsheet/borders-sizes";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"en/cheatsheet/box-shadows.mdx": {
	id: "en/cheatsheet/box-shadows.mdx";
  slug: "en/cheatsheet/box-shadows";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"en/cheatsheet/buttons.mdx": {
	id: "en/cheatsheet/buttons.mdx";
  slug: "en/cheatsheet/buttons";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"en/cheatsheet/conditional-radius.mdx": {
	id: "en/cheatsheet/conditional-radius.mdx";
  slug: "en/cheatsheet/conditional-radius";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"en/cheatsheet/corner-cuts.mdx": {
	id: "en/cheatsheet/corner-cuts.mdx";
  slug: "en/cheatsheet/corner-cuts";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"en/cheatsheet/cursor-shapes.mdx": {
	id: "en/cheatsheet/cursor-shapes.mdx";
  slug: "en/cheatsheet/cursor-shapes";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"en/cheatsheet/easings.mdx": {
	id: "en/cheatsheet/easings.mdx";
  slug: "en/cheatsheet/easings";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"en/cheatsheet/families-and-weights.mdx": {
	id: "en/cheatsheet/families-and-weights.mdx";
  slug: "en/cheatsheet/families-and-weights";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"en/cheatsheet/flex-cards.mdx": {
	id: "en/cheatsheet/flex-cards.mdx";
  slug: "en/cheatsheet/flex-cards";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"en/cheatsheet/flexbox.mdx": {
	id: "en/cheatsheet/flexbox.mdx";
  slug: "en/cheatsheet/flexbox";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"en/cheatsheet/font-size.mdx": {
	id: "en/cheatsheet/font-size.mdx";
  slug: "en/cheatsheet/font-size";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"en/cheatsheet/font-spacing.mdx": {
	id: "en/cheatsheet/font-spacing.mdx";
  slug: "en/cheatsheet/font-spacing";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"en/cheatsheet/gaps.mdx": {
	id: "en/cheatsheet/gaps.mdx";
  slug: "en/cheatsheet/gaps";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"en/cheatsheet/grid-presets.mdx": {
	id: "en/cheatsheet/grid-presets.mdx";
  slug: "en/cheatsheet/grid-presets";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"en/cheatsheet/grids.mdx": {
	id: "en/cheatsheet/grids.mdx";
  slug: "en/cheatsheet/grids";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"en/cheatsheet/heights.mdx": {
	id: "en/cheatsheet/heights.mdx";
  slug: "en/cheatsheet/heights";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"en/cheatsheet/layers.mdx": {
	id: "en/cheatsheet/layers.mdx";
  slug: "en/cheatsheet/layers";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"en/cheatsheet/layouts.mdx": {
	id: "en/cheatsheet/layouts.mdx";
  slug: "en/cheatsheet/layouts";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"en/cheatsheet/logical-colors.mdx": {
	id: "en/cheatsheet/logical-colors.mdx";
  slug: "en/cheatsheet/logical-colors";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"en/cheatsheet/margins.mdx": {
	id: "en/cheatsheet/margins.mdx";
  slug: "en/cheatsheet/margins";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"en/cheatsheet/mask-edge.mdx": {
	id: "en/cheatsheet/mask-edge.mdx";
  slug: "en/cheatsheet/mask-edge";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"en/cheatsheet/noises-and-filters.mdx": {
	id: "en/cheatsheet/noises-and-filters.mdx";
  slug: "en/cheatsheet/noises-and-filters";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"en/cheatsheet/overflow.mdx": {
	id: "en/cheatsheet/overflow.mdx";
  slug: "en/cheatsheet/overflow";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"en/cheatsheet/paddings.mdx": {
	id: "en/cheatsheet/paddings.mdx";
  slug: "en/cheatsheet/paddings";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"en/cheatsheet/pointer-events.mdx": {
	id: "en/cheatsheet/pointer-events.mdx";
  slug: "en/cheatsheet/pointer-events";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"en/cheatsheet/positioning.mdx": {
	id: "en/cheatsheet/positioning.mdx";
  slug: "en/cheatsheet/positioning";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"en/cheatsheet/rams.mdx": {
	id: "en/cheatsheet/rams.mdx";
  slug: "en/cheatsheet/rams";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"en/cheatsheet/resize.mdx": {
	id: "en/cheatsheet/resize.mdx";
  slug: "en/cheatsheet/resize";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"en/cheatsheet/scrollbars.mdx": {
	id: "en/cheatsheet/scrollbars.mdx";
  slug: "en/cheatsheet/scrollbars";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"en/cheatsheet/sizes.mdx": {
	id: "en/cheatsheet/sizes.mdx";
  slug: "en/cheatsheet/sizes";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"en/cheatsheet/snapping.mdx": {
	id: "en/cheatsheet/snapping.mdx";
  slug: "en/cheatsheet/snapping";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"en/cheatsheet/spacing.mdx": {
	id: "en/cheatsheet/spacing.mdx";
  slug: "en/cheatsheet/spacing";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"en/cheatsheet/svg-fill.mdx": {
	id: "en/cheatsheet/svg-fill.mdx";
  slug: "en/cheatsheet/svg-fill";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"en/cheatsheet/svg-stroke.mdx": {
	id: "en/cheatsheet/svg-stroke.mdx";
  slug: "en/cheatsheet/svg-stroke";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"en/cheatsheet/text-colors.mdx": {
	id: "en/cheatsheet/text-colors.mdx";
  slug: "en/cheatsheet/text-colors";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"en/cheatsheet/text-decoration.mdx": {
	id: "en/cheatsheet/text-decoration.mdx";
  slug: "en/cheatsheet/text-decoration";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"en/cheatsheet/text-gradients.mdx": {
	id: "en/cheatsheet/text-gradients.mdx";
  slug: "en/cheatsheet/text-gradients";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"en/cheatsheet/text-layout.mdx": {
	id: "en/cheatsheet/text-layout.mdx";
  slug: "en/cheatsheet/text-layout";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"en/cheatsheet/text-overflow.mdx": {
	id: "en/cheatsheet/text-overflow.mdx";
  slug: "en/cheatsheet/text-overflow";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"en/cheatsheet/text-shadows.mdx": {
	id: "en/cheatsheet/text-shadows.mdx";
  slug: "en/cheatsheet/text-shadows";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"en/core-concepts/atomic-design-system.mdx": {
	id: "en/core-concepts/atomic-design-system.mdx";
  slug: "en/core-concepts/atomic-design-system";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"en/core-concepts/css-custom-properties.mdx": {
	id: "en/core-concepts/css-custom-properties.mdx";
  slug: "en/core-concepts/css-custom-properties";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"en/core-concepts/design-tokens.mdx": {
	id: "en/core-concepts/design-tokens.mdx";
  slug: "en/core-concepts/design-tokens";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"en/core-concepts/why-o-props.mdx": {
	id: "en/core-concepts/why-o-props.mdx";
  slug: "en/core-concepts/why-o-props";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"en/customizer/framework.mdx": {
	id: "en/customizer/framework.mdx";
  slug: "en/customizer/framework";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"en/features/better-oxygen-emmet.mdx": {
	id: "en/features/better-oxygen-emmet.mdx";
  slug: "en/features/better-oxygen-emmet";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"en/features/builder-light-dark-toggle.md": {
	id: "en/features/builder-light-dark-toggle.md";
  slug: "en/features/builder-light-dark-toggle";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"en/features/context-menu.md": {
	id: "en/features/context-menu.md";
  slug: "en/features/context-menu";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"en/features/custom-elements.md": {
	id: "en/features/custom-elements.md";
  slug: "en/features/custom-elements";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"en/features/global-colors.md": {
	id: "en/features/global-colors.md";
  slug: "en/features/global-colors";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"en/features/global-settings.md": {
	id: "en/features/global-settings.md";
  slug: "en/features/global-settings";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"en/features/selectors.md": {
	id: "en/features/selectors.md";
  slug: "en/features/selectors";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"en/features/structure-menu.md": {
	id: "en/features/structure-menu.md";
  slug: "en/features/structure-menu";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"en/features/stylesheets.md": {
	id: "en/features/stylesheets.md";
  slug: "en/features/stylesheets";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"en/framework/Accessibility/base-classes.mdx": {
	id: "en/framework/Accessibility/base-classes.mdx";
  slug: "en/framework/accessibility/base-classes";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"en/framework/Accessibility/breakpoints-modifiers.mdx": {
	id: "en/framework/Accessibility/breakpoints-modifiers.mdx";
  slug: "en/framework/accessibility/breakpoints-modifiers";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"en/framework/Borders/blobs.mdx": {
	id: "en/framework/Borders/blobs.mdx";
  slug: "en/framework/borders/blobs";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"en/framework/Borders/conditional.mdx": {
	id: "en/framework/Borders/conditional.mdx";
  slug: "en/framework/borders/conditional";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"en/framework/Borders/radius.mdx": {
	id: "en/framework/Borders/radius.mdx";
  slug: "en/framework/borders/radius";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"en/framework/Borders/sizes.mdx": {
	id: "en/framework/Borders/sizes.mdx";
  slug: "en/framework/borders/sizes";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"en/framework/Buttons/custom-background.mdx": {
	id: "en/framework/Buttons/custom-background.mdx";
  slug: "en/framework/buttons/custom-background";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"en/framework/Buttons/custom-border-color.mdx": {
	id: "en/framework/Buttons/custom-border-color.mdx";
  slug: "en/framework/buttons/custom-border-color";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"en/framework/Buttons/custom-border-radius.mdx": {
	id: "en/framework/Buttons/custom-border-radius.mdx";
  slug: "en/framework/buttons/custom-border-radius";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"en/framework/Buttons/custom-border-thickness.mdx": {
	id: "en/framework/Buttons/custom-border-thickness.mdx";
  slug: "en/framework/buttons/custom-border-thickness";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"en/framework/Buttons/custom-depth-shadow.mdx": {
	id: "en/framework/Buttons/custom-depth-shadow.mdx";
  slug: "en/framework/buttons/custom-depth-shadow";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"en/framework/Buttons/custom-font-weight.mdx": {
	id: "en/framework/Buttons/custom-font-weight.mdx";
  slug: "en/framework/buttons/custom-font-weight";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"en/framework/Buttons/custom-gradient-direction.mdx": {
	id: "en/framework/Buttons/custom-gradient-direction.mdx";
  slug: "en/framework/buttons/custom-gradient-direction";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"en/framework/Buttons/custom-highlight-color.mdx": {
	id: "en/framework/Buttons/custom-highlight-color.mdx";
  slug: "en/framework/buttons/custom-highlight-color";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"en/framework/Buttons/custom-highlight-size.mdx": {
	id: "en/framework/Buttons/custom-highlight-size.mdx";
  slug: "en/framework/buttons/custom-highlight-size";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"en/framework/Buttons/custom-icon-color.mdx": {
	id: "en/framework/Buttons/custom-icon-color.mdx";
  slug: "en/framework/buttons/custom-icon-color";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"en/framework/Buttons/custom-icon-size.mdx": {
	id: "en/framework/Buttons/custom-icon-size.mdx";
  slug: "en/framework/buttons/custom-icon-size";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"en/framework/Buttons/custom-ink-shadow.mdx": {
	id: "en/framework/Buttons/custom-ink-shadow.mdx";
  slug: "en/framework/buttons/custom-ink-shadow";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"en/framework/Buttons/custom-padding.mdx": {
	id: "en/framework/Buttons/custom-padding.mdx";
  slug: "en/framework/buttons/custom-padding";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"en/framework/Buttons/custom-shadow-color.mdx": {
	id: "en/framework/Buttons/custom-shadow-color.mdx";
  slug: "en/framework/buttons/custom-shadow-color";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"en/framework/Buttons/custom-shadow-strength.mdx": {
	id: "en/framework/Buttons/custom-shadow-strength.mdx";
  slug: "en/framework/buttons/custom-shadow-strength";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"en/framework/Buttons/custom-text-color.mdx": {
	id: "en/framework/Buttons/custom-text-color.mdx";
  slug: "en/framework/buttons/custom-text-color";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"en/framework/Buttons/custom-transition.mdx": {
	id: "en/framework/Buttons/custom-transition.mdx";
  slug: "en/framework/buttons/custom-transition";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"en/framework/Buttons/icon-buttons.mdx": {
	id: "en/framework/Buttons/icon-buttons.mdx";
  slug: "en/framework/buttons/icon-buttons";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"en/framework/Buttons/introduction.mdx": {
	id: "en/framework/Buttons/introduction.mdx";
  slug: "en/framework/buttons/introduction";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"en/framework/Buttons/modifiers.mdx": {
	id: "en/framework/Buttons/modifiers.mdx";
  slug: "en/framework/buttons/modifiers";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"en/framework/Buttons/size.mdx": {
	id: "en/framework/Buttons/size.mdx";
  slug: "en/framework/buttons/size";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"en/framework/Buttons/tldr.mdx": {
	id: "en/framework/Buttons/tldr.mdx";
  slug: "en/framework/buttons/tldr";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"en/framework/Typography/font-families.mdx": {
	id: "en/framework/Typography/font-families.mdx";
  slug: "en/framework/typography/font-families";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"en/framework/Typography/font-weights.mdx": {
	id: "en/framework/Typography/font-weights.mdx";
  slug: "en/framework/typography/font-weights";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"en/framework/Typography/letterspacing.mdx": {
	id: "en/framework/Typography/letterspacing.mdx";
  slug: "en/framework/typography/letterspacing";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"en/framework/animations.mdx": {
	id: "en/framework/animations.mdx";
  slug: "en/framework/animations";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"en/framework/aspect-ratios.mdx": {
	id: "en/framework/aspect-ratios.mdx";
  slug: "en/framework/aspect-ratios";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"en/framework/color-schemes.md": {
	id: "en/framework/color-schemes.md";
  slug: "en/framework/color-schemes";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"en/framework/colors.md": {
	id: "en/framework/colors.md";
  slug: "en/framework/colors";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"en/framework/cursors.md": {
	id: "en/framework/cursors.md";
  slug: "en/framework/cursors";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"en/framework/easing.md": {
	id: "en/framework/easing.md";
  slug: "en/framework/easing";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"en/framework/gradients.md": {
	id: "en/framework/gradients.md";
  slug: "en/framework/gradients";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"en/framework/grids.md": {
	id: "en/framework/grids.md";
  slug: "en/framework/grids";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"en/framework/grids12.md": {
	id: "en/framework/grids12.md";
  slug: "en/framework/grids12";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"en/framework/layers.md": {
	id: "en/framework/layers.md";
  slug: "en/framework/layers";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"en/framework/layouts.md": {
	id: "en/framework/layouts.md";
  slug: "en/framework/layouts";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"en/framework/masks.md": {
	id: "en/framework/masks.md";
  slug: "en/framework/masks";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"en/framework/media-queries.md": {
	id: "en/framework/media-queries.md";
  slug: "en/framework/media-queries";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"en/framework/normalize.md": {
	id: "en/framework/normalize.md";
  slug: "en/framework/normalize";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"en/framework/ram.md": {
	id: "en/framework/ram.md";
  slug: "en/framework/ram";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"en/framework/shadows.mdx": {
	id: "en/framework/shadows.mdx";
  slug: "en/framework/shadows";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"en/framework/sizes.md": {
	id: "en/framework/sizes.md";
  slug: "en/framework/sizes";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"en/guides/wp-cli.mdx": {
	id: "en/guides/wp-cli.mdx";
  slug: "en/guides/wp-cli";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"en/history/changelog.md": {
	id: "en/history/changelog.md";
  slug: "en/history/changelog";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"en/index.mdx": {
	id: "en/index.mdx";
  slug: "en";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"en/introduction.mdx": {
	id: "en/introduction.mdx";
  slug: "en/introduction";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"en/release-notes/v-1-12.mdx": {
	id: "en/release-notes/v-1-12.mdx";
  slug: "en/release-notes/v-1-12";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"en/settings/css-processor.mdx": {
	id: "en/settings/css-processor.mdx";
  slug: "en/settings/css-processor";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"en/settings/current-Install.mdx": {
	id: "en/settings/current-Install.mdx";
  slug: "en/settings/current-install";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"en/settings/download-tokens.mdx": {
	id: "en/settings/download-tokens.mdx";
  slug: "en/settings/download-tokens";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"en/settings/features.mdx": {
	id: "en/settings/features.mdx";
  slug: "en/settings/features";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"en/settings/import-export.mdx": {
	id: "en/settings/import-export.mdx";
  slug: "en/settings/import-export";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"en/settings/restore-defaults.mdx": {
	id: "en/settings/restore-defaults.mdx";
  slug: "en/settings/restore-defaults";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"en/start-here/known-issues.mdx": {
	id: "en/start-here/known-issues.mdx";
  slug: "en/start-here/known-issues";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"en/start-here/quick-start-guide.mdx": {
	id: "en/start-here/quick-start-guide.mdx";
  slug: "en/start-here/quick-start-guide";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"en/tutorial/0-introduction/1.mdx": {
	id: "en/tutorial/0-introduction/1.mdx";
  slug: "en/tutorial/0-introduction/1";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"en/tutorial/0-introduction/index.mdx": {
	id: "en/tutorial/0-introduction/index.mdx";
  slug: "en/tutorial/0-introduction";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"en/tutorial/1-setup/1.mdx": {
	id: "en/tutorial/1-setup/1.mdx";
  slug: "en/tutorial/1-setup/1";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"en/tutorial/1-setup/2.mdx": {
	id: "en/tutorial/1-setup/2.mdx";
  slug: "en/tutorial/1-setup/2";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"en/tutorial/1-setup/3.mdx": {
	id: "en/tutorial/1-setup/3.mdx";
  slug: "en/tutorial/1-setup/3";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"en/tutorial/1-setup/4.mdx": {
	id: "en/tutorial/1-setup/4.mdx";
  slug: "en/tutorial/1-setup/4";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"en/tutorial/1-setup/5.mdx": {
	id: "en/tutorial/1-setup/5.mdx";
  slug: "en/tutorial/1-setup/5";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"en/tutorial/1-setup/index.mdx": {
	id: "en/tutorial/1-setup/index.mdx";
  slug: "en/tutorial/1-setup";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"en/tutorial/2-pages/1.mdx": {
	id: "en/tutorial/2-pages/1.mdx";
  slug: "en/tutorial/2-pages/1";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"en/tutorial/2-pages/2.mdx": {
	id: "en/tutorial/2-pages/2.mdx";
  slug: "en/tutorial/2-pages/2";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"en/tutorial/2-pages/3.mdx": {
	id: "en/tutorial/2-pages/3.mdx";
  slug: "en/tutorial/2-pages/3";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"en/tutorial/2-pages/4.mdx": {
	id: "en/tutorial/2-pages/4.mdx";
  slug: "en/tutorial/2-pages/4";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"en/tutorial/2-pages/5.mdx": {
	id: "en/tutorial/2-pages/5.mdx";
  slug: "en/tutorial/2-pages/5";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"en/tutorial/2-pages/index.mdx": {
	id: "en/tutorial/2-pages/index.mdx";
  slug: "en/tutorial/2-pages";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"en/tutorial/3-components/1.mdx": {
	id: "en/tutorial/3-components/1.mdx";
  slug: "en/tutorial/3-components/1";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"en/tutorial/3-components/2.mdx": {
	id: "en/tutorial/3-components/2.mdx";
  slug: "en/tutorial/3-components/2";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"en/tutorial/3-components/3.mdx": {
	id: "en/tutorial/3-components/3.mdx";
  slug: "en/tutorial/3-components/3";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"en/tutorial/3-components/4.mdx": {
	id: "en/tutorial/3-components/4.mdx";
  slug: "en/tutorial/3-components/4";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"en/tutorial/3-components/index.mdx": {
	id: "en/tutorial/3-components/index.mdx";
  slug: "en/tutorial/3-components";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"en/tutorial/4-layouts/1.mdx": {
	id: "en/tutorial/4-layouts/1.mdx";
  slug: "en/tutorial/4-layouts/1";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"en/tutorial/4-layouts/2.mdx": {
	id: "en/tutorial/4-layouts/2.mdx";
  slug: "en/tutorial/4-layouts/2";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"en/tutorial/4-layouts/3.mdx": {
	id: "en/tutorial/4-layouts/3.mdx";
  slug: "en/tutorial/4-layouts/3";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"en/tutorial/4-layouts/index.mdx": {
	id: "en/tutorial/4-layouts/index.mdx";
  slug: "en/tutorial/4-layouts";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"en/tutorial/5-astro-api/1.mdx": {
	id: "en/tutorial/5-astro-api/1.mdx";
  slug: "en/tutorial/5-astro-api/1";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"en/tutorial/5-astro-api/2.mdx": {
	id: "en/tutorial/5-astro-api/2.mdx";
  slug: "en/tutorial/5-astro-api/2";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"en/tutorial/5-astro-api/3.mdx": {
	id: "en/tutorial/5-astro-api/3.mdx";
  slug: "en/tutorial/5-astro-api/3";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"en/tutorial/5-astro-api/4.mdx": {
	id: "en/tutorial/5-astro-api/4.mdx";
  slug: "en/tutorial/5-astro-api/4";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"en/tutorial/5-astro-api/index.mdx": {
	id: "en/tutorial/5-astro-api/index.mdx";
  slug: "en/tutorial/5-astro-api";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"en/tutorial/6-islands/1.mdx": {
	id: "en/tutorial/6-islands/1.mdx";
  slug: "en/tutorial/6-islands/1";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"en/tutorial/6-islands/2.mdx": {
	id: "en/tutorial/6-islands/2.mdx";
  slug: "en/tutorial/6-islands/2";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"en/tutorial/6-islands/3.mdx": {
	id: "en/tutorial/6-islands/3.mdx";
  slug: "en/tutorial/6-islands/3";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"en/tutorial/6-islands/index.mdx": {
	id: "en/tutorial/6-islands/index.mdx";
  slug: "en/tutorial/6-islands";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"en/tutorials/tutorial-test.mdx": {
	id: "en/tutorials/tutorial-test.mdx";
  slug: "en/tutorials/tutorial-test";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"fr/index.mdx": {
	id: "fr/index.mdx";
  slug: "fr";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
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
};

	};

	type DataEntryMap = {
		"i18n": {
"en": {
	id: "en";
  collection: "i18n";
  data: InferEntrySchema<"i18n">
};
"fr": {
	id: "fr";
  collection: "i18n";
  data: InferEntrySchema<"i18n">
};
};

	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("../src/content/config.js");
}
