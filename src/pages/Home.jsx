import React, { useEffect } from "react";
import { connect } from "react-redux";
import "../assets/styles/tracks_row.sass";
import WorksRow from "../components/WorksRow";
import {
  getNewReleases,
  getFeaturedList,
  getTopLikedArtists,
  getBrowseCategories,
} from "../redux/actions";

export default connect((state) => state, {
  getNewReleases,
  getFeaturedList,
  getTopLikedArtists,
  getBrowseCategories,
})(function Home({
  getNewReleases,
  newReleases,
  featuredPlaylists,
  getFeaturedList,
  getTopLikedArtists,
  yourTopArtists,
  getBrowseCategories,
  browseCategories,
  token,
  user,
}) {
  useEffect(() => {
    document.title = "Spotify | Web Player";
    getNewReleases(token);
    getFeaturedList(token);
    getBrowseCategories(token);
    getTopLikedArtists(token);
  }, [
    getNewReleases,
    getFeaturedList,
    getBrowseCategories,
    getTopLikedArtists,
  ]);

  return (
    <div id="app-main-home-area" className="px-md-3">
      <div className="container py-3">
        <WorksRow title="New releases" works={newReleases} />
        <WorksRow title="Featurd playlists" works={featuredPlaylists} />
        <WorksRow title="artist you like" works={yourTopArtists} />
        <WorksRow title="browse Categories" works={browseCategories} />
      </div>
    </div>
  );
});
