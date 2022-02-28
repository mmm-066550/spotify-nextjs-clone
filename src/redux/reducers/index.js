import { combineReducers } from "redux";
import userReducer from "./userReducer";
import tokenReducer from "./tokenReducer";
import newReleasesReducer from "./newReleasesReducer";
import featuredPlaylists from "./featuredPlaylists";
import topArtistsReducer from "./topArtistsReducer";
import browseCategories from "./browseCategories";

export default combineReducers({
  user: userReducer,
  token: tokenReducer,
  newReleases: newReleasesReducer,
  featuredPlaylists,
  browseCategories,
  yourTopArtists: topArtistsReducer,
});
