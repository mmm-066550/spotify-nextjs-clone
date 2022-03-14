export default (artists = null, action) => {
  if (action.type === "GET_TOP_LIKED_ARTISTS") {
    return action.payload;
  }
  return artists;
};
