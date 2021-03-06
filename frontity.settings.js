const settings = {
  name: "javierlorente",
  state: {
    frontity: {
      url: "https://javierlorrente.vercel.app/",
      title: "Javier Lorente - SEO, inversiones y promos para viajar.",
      description: "SEO, inversiones y promos para viajar.",
      backend: "https://frontity.javierlorente.es/",
    },
  },
  packages: [
    "frontity-contact-form-7",
    {
      name: "frontity-starter-theme",
      // name: "@frontity/twentytwenty-theme",
      state: {
        theme: {
          menu: [
            ["Inicio", "/"],
            ["SEO", "/c/seo"],
            ["Tecnologia", "/c/tecnologia"],
            ["Economia", "/c/economia/"],
            ["Viajes", "/c/viajes/"],
            ["Movilidad", "/c/movilidad/"],
            ["Contacto", "/contacto"],
          ],
          autoPreFetch: "all",
          featured: {
            showOnList: false,
            showOnPost: false,
          },
        },
        source: {
          categoryBase: "c",
          tagBase: "tag",
        },
      },
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          prefix: "/wp-json",
          // api: ({ state }) => state.frontity.backend + state.source.prefix,
          api: "https://frontity.javierlorente.es/wp-json",
          // api: "https://test.frontity.io/wp-json",
          // api: "http://javierlorrente.wst/wp-json",
          params: {
            per_page: 50,
            // type: ["post", "page"],
          },
        },
      },
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
    "@frontity/head-tags",
    "@frontity/wp-comments",
  ],
};

export default settings;
