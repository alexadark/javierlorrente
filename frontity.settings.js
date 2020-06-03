const settings = {
  name: "javierlorrente",
  state: {
    frontity: {
      url: "https://www.javierlorente.es/",
      title: "Test Frontity Blog",
      description: "WordPress installation for Frontity development",
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
            ["SEO", "./seo"],
            ["Tecnologia", "tecnologia"],
            ["Economia", "/economia/"],
            ["Viajes", "/viajes/"],
            ["Movilidad", "/movilidad/"],
            ["Contacto", "/contacto"],
          ],
          featured: {
            showOnList: false,
            showOnPost: false,
          },
        },
        source: {
          categoryBase: "/",
          tagBase: "etiquetas",
        },
      },
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          api: "http://jl2.wst/wp-json",
        },
      },
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
  ],
};

export default settings;
