export const featuredCatHandler = {
  name: "featuredCatHandler",
  priority: 10,
  pattern: "/",
  func: async ({ link, params, state, libraries, force }) => {
    //1.get all posts fron the fetaured cat
    const response = await libraries.source.api.get({
      endpoint: "posts",
      params: { categories: 1780, per_page: 50 },
    });

    //2. add items to the state
    const items = await libraries.source.populate({ response, state, force });

    const { type, id } = state.source.get("/");

    //3. add link to data
    const currentPageData = state.source.data[link];
    const newPageData = {
      type,
      id,
      items,
      link,
      isArchive: true,
      isPostTypeArchive: true,
      isFetching: currentPageData.isFetching,
      isReady: currentPageData.isReady,
    };
    Object.assign(currentPageData, newPageData);
  },
};
