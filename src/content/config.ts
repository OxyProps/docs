import { type CollectionEntry, defineCollection, z } from "astro:content";
import { docsSchema, i18nSchema } from "@astrojs/starlight/schema";

export const baseSchema = z.object({
  type: z.literal("base").optional().default("base"),
});

export const tutorialSchema = baseSchema.extend({
  type: z.literal("tutorial"),
  unitTitle: z.string().optional(),
});

export const docsCollectionSchema = z.union([baseSchema, tutorialSchema]);

export type DocsEntryData = z.infer<typeof docsCollectionSchema>;

export type DocsEntryType = DocsEntryData["type"];

export type DocsEntry<T extends DocsEntryType> = CollectionEntry<"docs"> & {
  data: Extract<DocsEntryData, { type: T }>;
};

export function createIsDocsEntry<T extends DocsEntryType>(type: T) {
	return (entry: CollectionEntry<'docs'>): entry is DocsEntry<T> => entry.data.type === type;
}

export type TutorialEntry = DocsEntry<'tutorial'>;

export const isTutorialEntry = createIsDocsEntry('tutorial');

const customTranslationsSchema = z.object({
  // Checklist component
  "checklist.or": z.string().optional(),
  // Multiple Choice component
  "multipleChoice.defaultCorrect": z.string().optional(),
  "multipleChoice.defaultIncorrect": z.string().optional(),
  "multipleChoice.submitLabel": z.string().optional(),
  // Tutorial Progress
  "progress.todo": z.string().optional(),
  "progress.done": z.string().optional(),
  // SidebarBanner
  "sidebarBanner.title": z.string().optional(),
  "sidebarBanner.description": z.string().optional(),
  // Tutorial Navigation
  "tutorial.trackerLabel": z.string().optional(),
  "tutorial.unit": z.string().optional(),
  // Tutorial
  "tutorial.getReady": z.string().optional(),
});
const allTranslationsSchema = i18nSchema().merge(customTranslationsSchema);

export type Dictionary = z.infer<typeof allTranslationsSchema>;

export const collections = {
  docs: defineCollection({ schema: docsSchema({ extend: docsCollectionSchema }) }),
  i18n: defineCollection({
    type: "data",
    schema: allTranslationsSchema,
  }),
};
