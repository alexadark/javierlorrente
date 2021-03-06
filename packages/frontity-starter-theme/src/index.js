import Theme from "./components";
import image from "@frontity/html2react/processors/image";
import {
  // categoriesHandler,
  featuredCatHandler,
  allCategoriesHandler,
} from "./handlers";

const starterTheme = {
  name: "frontity-starter-theme",
  roots: {
    theme: Theme,
  },
  state: {
    theme: {
      menu: [],
      autoPreFetch: "hover",
      /**
       * The logo can be a text or an image url
       */
      logo: "Javier Lorente",
      // logo:
      //   "https://about.canva.com/en_in/wp-content/uploads/sites/3/2016/08/logos-1.png",
      // logo: Logo,
      showSocialLinks: {
        header: true,
        footer: true,
      },
      socialLinks: [],
      isMobileMenuOpen: false,
      isSearchModalOpen: false,
      autoPreFetch: "none",
      featured: {
        showOnArchive: true,
        showOnPost: true,
      },
      postInfo: {
        showOnArchive: false,
        showOnPost: false,
      },
      postMeta: {
        showOnArchive: false,
        showOnPost: true,
      },
    },
  },
  actions: {
    theme: {
      openMobileMenu: ({ state }) => {
        state.theme.isMobileMenuOpen = true;
      },
      closeMobileMenu: ({ state }) => {
        state.theme.isMobileMenuOpen = false;
      },
      openSearchModal: ({ state }) => {
        state.theme.isSearchModalOpen = true;
      },
      closeSearchModal: ({ state }) => {
        state.theme.isSearchModalOpen = false;
      },
      beforeSSR: ({ actions }) => async () => {
        await actions.source.fetch("all-categories");
      },
    },
  },
  libraries: {
    html2react: {
      processors: [image],
    },
    source: {
      handlers: [featuredCatHandler, allCategoriesHandler],
    },
  },
};

export default starterTheme;
