const setSpotifyToken = (token) => {
  return {
    type: "SET_SPOTIFY_USER_TOKEN",
    payload: token,
  };
};
export default setSpotifyToken;
