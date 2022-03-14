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
    (async () => {
      if (!recentlyPlaylists?.items?.length)
        await getRecentlyPlayedLists(token);
      if (!featuredPlaylists?.items?.length)
        await getFeaturedList(token, countryCode);
      if (!artistsPlaylists?.items?.length) await getTopLikedArtists(token);
      if (!albumsPlaylists?.items?.length) await getTopLikedTracks(token);
      if (!newReleasePlaylists?.items?.length)
        await getNewReleases(token, countryCode);
    })();
  }, [
    token,
    countryCode,
    newReleasePlaylists?.items?.length,
    albumsPlaylists?.items?.length,
    recentlyPlaylists?.items?.length,
    featuredPlaylists?.items?.length,
    artistsPlaylists?.items?.length,
  ]);
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
