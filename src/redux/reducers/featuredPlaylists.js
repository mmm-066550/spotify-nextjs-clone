const featuredPlaylists = (list = [], action) => {
  if (action.type === "GET_FEATURED_PLAYLISTS") {
    return { msg: action.payload.msg, items: action.payload.items };
  }
  if (action.type === "CLEAR_FEATURED_PLAYLISTS") {
    return { msg: "", items: [] };
  }
  return list;
};
export default featuredPlaylists;
