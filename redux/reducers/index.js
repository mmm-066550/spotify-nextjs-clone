import { combineReducers } from "redux";
import user from "./userReducer";
import token from "./tokenReducer";
import featuredPlaylists from "./featuredReducer";
import recentlyPlaylists from "./recentlyReducer";
import artistsPlaylists from "./artistsReducer";
import albumsPlaylists from "./topTracksReducer";
import newReleasePlaylists from "./newReleaseReducer";
import genrePlaylists from "./genrePageReducer";
import countryCode from "./countryCodeReducer";
import browseCategories from "./browseReducer";
import allCategories from "./searchGenres";
import workView from "./workViewReducer";

export default combineReducers({
  user,
  token,
  featuredPlaylists,
  recentlyPlaylists,
  artistsPlaylists,
  albumsPlaylists,
  newReleasePlaylists,
  genrePlaylists,
  countryCode,
  browseCategories,
  allCategories,
  workView,
});
