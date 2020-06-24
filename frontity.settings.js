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
    {
      name: "frontity-starter-theme",
      // name: "@frontity/twentytwenty-theme",
      state: {
        theme: {
          menu: [
            ["Inicio", "/"],
            ["SEO", "/categorias/seo"],
            ["Tecnologia", "/categorias/tecnologia"],
            ["Economia", "/categorias/economia/"],
            ["Viajes", "/categorias/viajes/"],
            ["Movilidad", "/categorias/movilidad/"],
            ["Contacto", "/contacto"],
          ],
          featured: {
            showOnList: false,
            showOnPost: false,
          },
        },
        source: {
          categoryBase: "categorias",
          tagBase: "etiquetas",
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
        },
      },
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
  ],
};

export default settings;
