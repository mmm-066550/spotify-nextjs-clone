const featuredPlaylists = (list = [], action) => {
  if (action.type === "GET_FEATURED_PLAYLISTS") {
    return [...action.payload];
  }
  return list;
};
export default featuredPlaylists;
