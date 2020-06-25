const settings = {
  name: "javierlorente",
  state: {
    frontity: {
      url: "https://www.javierlorente.es/",
      title: "Javier Lorente - SEO, inversiones y promos para viajar.",
      description: "SEO, inversiones y promos para viajar.",
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
          featured: {
            showOnList: false,
            showOnPost: false,
          },
        },
        source: {
          categoryBase: "c",
          tagBase: "tags",
        },
      },
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          api: "https://jl.gatsby-wp.com/wp-json",
          // api: "https://test.frontity.io/wp-json",
          // api: "http://javierlorrente.wst/wp-json",
          params: {
            per_page: 50,
            type: ["post", "page"],
          },
        },
      },
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
  ],
};

export default settings;
