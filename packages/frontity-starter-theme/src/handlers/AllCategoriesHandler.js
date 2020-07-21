export const allCategoriesHandler = {
  name: "allCategories",
  priority: 10,
  pattern: "all-categories",
  func: async ({ link, params, state, libraries }) => {
    const { api } = libraries.source;

    //1.fetch data from the endpoint page
    const response = await api.get({
      endpoint: "categories",
      params: {
        per_page: 100,
      },
    });
    //2.get array with each item in json format
    const items = await response.json();

    //3. add data to source
    const currentPageData = state.source.data[link];

    Object.assign(currentPageData, {
      items,
    });
  },
};
