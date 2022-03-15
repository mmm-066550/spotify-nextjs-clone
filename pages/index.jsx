import React, { useLayoutEffect, useState } from "react";
import { connect } from "react-redux";
import PlaylistsRow from "../components/PlaylistsRow";
import {
  getFeaturedList,
  getRecentlyPlayedLists,
  getTopLikedArtists,
  getTopLikedTracks,
  getNewReleases,
  getBrowseCategories,
} from "../redux/actions";

const mapStateToProps = (state) => state;
const mapDispatchToProps = {
  getFeaturedList,
  getRecentlyPlayedLists,
  getTopLikedArtists,
  getTopLikedTracks,
  getNewReleases,
  getBrowseCategories,
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
  getBrowseCategories,
  browseCategories,
}) {
  const [categoriesPerRender, _] = useState(1);
  const [offset, setOffset] = useState(0);
  useLayoutEffect(() => {
    if (!recentlyPlaylists?.items?.length) getRecentlyPlayedLists(token);
    if (!featuredPlaylists?.items?.length) getFeaturedList(token, countryCode);
    if (!artistsPlaylists?.items?.length) getTopLikedArtists(token);
    if (!albumsPlaylists?.items?.length) getTopLikedTracks(token);
    if (!newReleasePlaylists?.items?.length) getNewReleases(token, countryCode);
    if (!browseCategories.length)
      getBrowseCategories(token, countryCode, categoriesPerRender, offset);
    // (token, country, catsLimit, offset)
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
      {browseCategories.map((category, i) => {
        return <PlaylistsRow key={i} content={category} placeholder={5} />;
      })}
      <div className="d-flex text-center">
        {/* {categoriesPerRender * (offset + 1) <= 40 ? (
          <button
            onClick={() => {
              setOffset(offset + 1);
              getBrowseCategories(
                token,
                countryCode,
                categoriesPerRender,
                categoriesPerRender * (offset + 1)
              );
            }}
          >
            load more
          </button>
        ) : null} */}
      </div>
    </div>
  );
});
