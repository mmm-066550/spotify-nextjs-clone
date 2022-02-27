export const CLIENT_ID = "8f64788e26c9441487c4934944f713d2";
export const REDIRECT_URI = "http://localhost:3000";
export const AUTH_SIGNUP_ENDPOINT = "https://www.spotify.com/signup";
export const AUTH_LOGIN_ENDPOINT = "https://accounts.spotify.com/authorize";
export const RESPONSE_TYPE = "token";
export const SPOTIFY_LOGIN = `${AUTH_LOGIN_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`;
// export const SPOTIFY_SIGNUP = `${AUTH_SIGNUP_ENDPOINT}?client_id=${CLIENT_ID}&forward_url=${REDIRECT_URI}&continue=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`;
