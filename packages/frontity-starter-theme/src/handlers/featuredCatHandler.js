export const featuredCatHandler = {
  name: "featuredCatHandler",
  priority: 10,
  pattern: "/",
  func: async ({ link, params, state, libraries, force }) => {
    //1.get all posts fron the fetaured cat
    const { query } = parse(link);
    const response = await libraries.source.api.get({
      endpoint: endpoint === "posts" ? state.source.postEndpoint : endpoint,
      params: { categories: 1780, per_page: 50, search: query.s },
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
      isHome: true,
      // isPostTypeArchive: true,
      isFetching: currentPageData.isFetching,
      isReady: currentPageData.isReady,
      ...(query.s && { isSearch: true, searchQuery: query.s }),
    };
    Object.assign(currentPageData, newPageData);
  },
};
