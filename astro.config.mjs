import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { autolinkConfig } from "./plugins/rehype-autolink-config";
import rehypeExternalLinks from "rehype-external-links";
import { externalLinkConfig } from "./plugins/rehype-external-link-config";
import react from "@astrojs/react";

// Config partials
import { siteNav } from "./src/config/nav";
import { head } from "./src/config/head";
import { locales } from "./src/config/locales";

const site = "https://docs.oxyprops.com/";

// https://astro.build/config
export default defineConfig({
  site,
  integrations: [
    starlight({
      title: "o-props docs",
      logo: {
        light: "~/assets/logos/o-props-light.svg",
        dark: "~/assets/logos/o-props-dark.svg",
        replacesTitle: true,
      },
      editLink: {
        baseUrl: "https://github.com/OxyProps/docs/edit/main/",
      },
      social: {
        youtube: "https://youtube.com/@oxyprops",
        github: "https://github.com/OxyProps/docs",
        discord: "https://docs.oxyprops.com/discord",
      },
      head: head,
      customCss: process.env.NO_GRADIENTS
        ? []
        : [
            "/src/styles/o-props.css",
            "@fontsource/atkinson-hyperlegible/400.css",
            "@fontsource/atkinson-hyperlegible/700.css",
            "@fontsource/atkinson-hyperlegible/400-italic.css",
            "@fontsource/atkinson-hyperlegible/700-italic.css",
          ],
      sidebar: siteNav,
      defaultLocale: "root",
      locales: locales,
      lastUpdated: true,
    }),
    react(),
  ],
  markdown: {
    rehypePlugins: [
      rehypeSlug,
      // This adds links to headings
      [rehypeAutolinkHeadings, autolinkConfig],
      // This adds rel and icon to external links
      [rehypeExternalLinks, externalLinkConfig],
    ],
  },
});
