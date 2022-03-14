export default (albums = null, action) => {
  if (action.type === "GET_TOP_LIKED_TRACKS") {
    return action.payload;
  }
  return albums;
};
