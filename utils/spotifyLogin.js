const CLIENT_ID = "8f64788e26c9441487c4934944f713d2";
const REDIRECT_URI = "http://localhost:3000";

const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
const RESPONSE_TYPE = "token";
const SCOPES =
  "user-read-recently-played,user-top-read,user-read-currently-playing";
export const SPOTIFY_LOGIN = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&scope=${SCOPES}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`;
