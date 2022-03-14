export default (list = null, action) => {
  if (action.type === "GET_FEATURED_PLAYLISTS") {
    return action.payload;
  }
  return list;
};
