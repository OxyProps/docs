import type { Options } from "rehype-external-links";

/**
 * Configuration for the `rehype-external-links` plugin.
 */
export const externalLinkConfig: Options = {
  target: undefined,
  rel: ["nofollow", "noopener", "noreferrer"],
  content: {
    type: "element",
    tagName: "svg",
    properties: {
      width: 16,
      height: 16,
      version: 1.1,
      viewBox: "0 0 24 24",
      xlmns: "http://www.w3.org/2000/svg",
      fill: "currentcolor",
    },
    children: [
      {
        type: "element",
        tagName: "path",
        properties: {
          d: "M19.33 10.18a1 1 0 0 1-.77 0 1 1 0 0 1-.62-.93l.01-1.83-8.2 8.2a1 1 0 0 1-1.41-1.42l8.2-8.2H14.7a1 1 0 0 1 0-2h4.25a1 1 0 0 1 1 1v4.25a1 1 0 0 1-.62.93Z",
        },
        children: [],
      },
      {
        type: "element",
        tagName: "path",
        properties: {
          d: "M11 4a1 1 0 1 1 0 2H7a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-4a1 1 0 1 1 2 0v4a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h4Z",
        },
        children: [],
      },
    ],
  },
  contentProperties: {
    "aria-hidden": "true",
    class: "external-link-icon",
  },
};
