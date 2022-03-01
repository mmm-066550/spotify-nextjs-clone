const recentlyPlayedPlaylists = (list = [], action) => {
  if (action.type === "GET_RECENTLY_PLAYED_PLAYLISTS") {
    return [...list, action.payload];
  }
  if (action.type === "CLEAR_RECENTLY_PLAYED_PLAYLISTS") {
    return action.payload;
  }
  return list;
};
export default recentlyPlayedPlaylists;
