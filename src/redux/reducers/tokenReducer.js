const tokenReducer = (token = null, action) => {
  if (action.type === "SET_SPOTIFY_USER_TOKEN") {
    return action.payload;
  }
  return token;
};
export default tokenReducer;
