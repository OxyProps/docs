export const siteNav = [
  { label: "Introduction", link: "/introduction" },
  {
    label: "Start Here",
    translations: {
      fr: "Commencer ici",
    },
    collapsed: false,
    autogenerate: {
      directory: "start-here",
    },
  },
  // {
  //   label: "Settings",
  //   badge: "soon in v2.0",
  //   translations: {
  //     fr: "Réglages",
  //   },
  //   collapsed: false,
  //   autogenerate: {
  //     directory: "settings",
  //   },
  // },
  // {
  //   label: "Tokens Customizer",
  //   badge: "soon in v2.0",
  //   translations: {
  //     fr: "Personnalisateur",
  //   },
  //   collapsed: false,
  //   autogenerate: {
  //     directory: "customizer",
  //   },
  // },
  {
    label: "Core Concepts",
    translations: {
      fr: "Concepts fondamentaux",
    },
    collapsed: false,
    autogenerate: {
      directory: "core-concepts",
    },
  },
  {
    label: 'Guides',
    collapsed: false,
    autogenerate: { directory: 'guides' }
  },
  {
    label: "Tutorials",
    translations: {
      fr: "Tutoriels",
    },
    collapsed: false,
    autogenerate: {
      directory: "tutorials",
    },
  },
  {
    label: "Features",
    translations: {
      fr: "Fonctionnalités",
    },
    collapsed: false,
    autogenerate: {
      directory: "features",
    },
  },
  {
    label: "CSS Framework",
    translations: {
      fr: "Framework CSS",
    },
    collapsed: true,
    autogenerate: {
      directory: "framework",
    },
  },
  {
    label: "Reference (Cheatsheet)",
    translations: {
      fr: "Référence (Cheatsheet)",
    },
    collapsed: true,
    autogenerate: {
      directory: "cheatsheet",
    },
  },{
    label: 'Release Notes',
    collapsed: false,
    translations: {
      fr: "Notes de version",
    },
    autogenerate: { directory: 'release-notes' },
  },
  {
    label: "History",
    translations: {
      fr: "Historique",
    },
    collapsed: false,
    autogenerate: {
      directory: "history",
    },
  },
];
