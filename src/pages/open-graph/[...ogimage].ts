import type { CollectionEntry } from "astro:content";
import { getCollection } from "astro:content";
import ogApi from "@thewebforge/astro-og-images";

const entries = await getCollection("docs");

export const { getStaticPaths, GET } = ogApi({
  entries: entries,
  param: "ogimage",
  template: "branded",

  getImageOptions: async ({ id, data }: CollectionEntry<"docs">) => {
    return {
      path: id,
      title: {
        text: data.title,
      },
      description: {
        text: data.description
        },
      author: {
        text: "Cédric Bontems"
        },
      site: {
        text: "www.oxyprops.com"
        },
      logo: {
        path: "./src/assets/logos/docs-logo.png",
        width: 350,
      }
    };
  },
});