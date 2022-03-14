import React, { useLayoutEffect } from "react";
import { connect } from "react-redux";
import PlaylistsRow from "../components/PlaylistsRow";
import {
  getFeaturedList,
  getRecentlyPlayedLists,
  getTopLikedArtists,
  getTopLikedTracks,
  getNewReleases,
} from "../redux/actions";

const mapStateToProps = (state) => state;
const mapDispatchToProps = {
  getFeaturedList,
  getRecentlyPlayedLists,
  getTopLikedArtists,
  getTopLikedTracks,
  getNewReleases,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(function Index({
  featuredPlaylists,
  recentlyPlaylists,
  getFeaturedList,
  getRecentlyPlayedLists,
  getTopLikedArtists,
  artistsPlaylists,
  token,
  getTopLikedTracks,
  albumsPlaylists,
  newReleasePlaylists,
  getNewReleases,
  countryCode,
}) {
  useLayoutEffect(() => {
    if (!recentlyPlaylists?.items?.length) getRecentlyPlayedLists(token);
    if (!featuredPlaylists?.items?.length) getFeaturedList(token, countryCode);
    if (!artistsPlaylists?.items?.length) getTopLikedArtists(token);
    if (!albumsPlaylists?.items?.length) getTopLikedTracks(token);
    if (!newReleasePlaylists?.items?.length) getNewReleases(token, countryCode);
  }, []);
  return (
    <div className="app_home_page_content_area">
      <PlaylistsRow
        link={"/genre/recently_played"}
        content={recentlyPlaylists}
        placeholder={5}
      />
      <PlaylistsRow
        link={"/genre/featured_playlists"}
        content={featuredPlaylists}
        placeholder={5}
      />
      <PlaylistsRow
        link={"/genre/top_artists"}
        content={artistsPlaylists}
        placeholder={5}
      />
      <PlaylistsRow
        link={"/genre/top_albums"}
        content={albumsPlaylists}
        placeholder={5}
      />
      <PlaylistsRow
        link={"/genre/new_releases"}
        content={newReleasePlaylists}
        placeholder={5}
      />
    </div>
  );
});
