import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { autolinkConfig } from "./plugins/rehype-autolink-config";
import rehypeExternalLinks from "rehype-external-links";
import { externalLinkConfig } from "./plugins/rehype-external-link-config";
import { rehypeTasklistEnhancer } from './plugins/rehype-tasklist-enhancer';
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
        src: "~/assets/logos/o-props-logotype.svg",
        replacesTitle: true,
      },
      editLink: {
        baseUrl: "https://github.com/thewebforge/o-props-docs/edit/main/",
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
      defaultLocale: "en",
      locales: locales,
      lastUpdated: true,
      components: {
				// EditLink: './src/components/starlight/EditLink.astro',
				// Head: './src/components/starlight/Head.astro',
				// Hero: './src/components/starlight/Hero.astro',
				// MarkdownContent: './src/components/starlight/MarkdownContent.astro',
				MobileTableOfContents: './src/components/starlight/MobileTableOfContents.astro',
				TableOfContents: './src/components/starlight/TableOfContents.astro',
				PageSidebar: './src/components/starlight/PageSidebar.astro',
				Pagination: './src/components/starlight/Pagination.astro',
				SiteTitle: './src/components/starlight/SiteTitle.astro',
				// Search: './src/components/starlight/Search.astro',
				// Sidebar: './src/components/starlight/Sidebar.astro',
				// PageTitle: './src/components/starlight/PageTitle.astro',
			},
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
      rehypeTasklistEnhancer(),
    ],
  },
});
