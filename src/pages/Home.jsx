import React, { useEffect, useLayoutEffect } from "react";
import { connect } from "react-redux";
import "../assets/styles/tracks_row.sass";
import WorksRow from "../components/WorksRow";
import {
  getNewReleases,
  getFeaturedList,
  getTopLikedArtists,
  getBrowseCategories,
  getRecentlyPlayedLists,
  clearList,
} from "../redux/actions";

export default connect((state) => state, {
  getNewReleases,
  getFeaturedList,
  getTopLikedArtists,
  getBrowseCategories,
  getRecentlyPlayedLists,
  clearList,
})(function Home({
  getNewReleases,
  newReleases,
  featuredPlaylists,
  getFeaturedList,
  getTopLikedArtists,
  yourTopArtists,
  getBrowseCategories,
  browseCategories,
  recentlyPlayedPlaylists,
  getRecentlyPlayedLists,
  token,
  clearList,
}) {
  useLayoutEffect(() => {
    document.title = "Spotify | Web Player";
    getRecentlyPlayedLists(token, 5);
    getNewReleases(token, "EG", 5);
    getFeaturedList(token, "EG", 5);
    getTopLikedArtists(token, 5);
    getBrowseCategories(token, "EG", 5);
    return () => {
      clearList("NEW_RELEASES");
      clearList("RECENTLY_PLAYED_PLAYLISTS");
      clearList("FEATURED_PLAYLISTS");
      clearList("TOP_LIKED_ARTISTS");
      clearList("BROWSE_CATEGORIES");
    };
  }, []);

  return (
    <div id="app-main-home-area" className="px-md-3">
      <div className="container py-3">
        <WorksRow
          title="New releases"
          works={newReleases}
          link={"/genre/new_releases"}
        />
        <WorksRow
          title="Recently played"
          works={recentlyPlayedPlaylists}
          link={"/genre/recently_played"}
        />
        <WorksRow
          title={featuredPlaylists.msg}
          works={featuredPlaylists.items}
          link={"/genre/featured_lists"}
        />
        <WorksRow
          title="artists you like"
          works={yourTopArtists}
          link={"/genre/top_artists"}
        />
        <WorksRow
          title="browse Categories"
          works={browseCategories}
          link={"/genre/categories"}
        />
      </div>
    </div>
  );
});
