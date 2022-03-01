import React, { useEffect, useLayoutEffect, useState } from "react";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";
import WorksRow from "../components/WorksRow";
import {
  getRecentlyPlayedLists,
  getNewReleases,
  clearList,
  getFeaturedList,
  getTopLikedArtists,
  getBrowseCategories,
} from "../redux/actions";

export default connect((state) => state, {
  getRecentlyPlayedLists,
  clearList,
  getNewReleases,
  getFeaturedList,
  getTopLikedArtists,
  getBrowseCategories,
})(function Genre({
  recentlyPlayedPlaylists,
  getRecentlyPlayedLists,
  getNewReleases,
  token,
  clearList,
  newReleases,
  featuredPlaylists,
  getFeaturedList,
  getTopLikedArtists,
  yourTopArtists,
  getBrowseCategories,
  browseCategories,
}) {
  const { pathname } = useLocation();
  const [genre, setGenre] = useState(null);

  useLayoutEffect(() => {
    return () => {
      clearList("NEW_RELEASES");
      clearList("RECENTLY_PLAYED_PLAYLISTS");
      clearList("FEATURED_PLAYLISTS");
      clearList("TOP_LIKED_ARTISTS");
      clearList("BROWSE_CATEGORIES");
    };
  }, []);

  useLayoutEffect(() => {
    setGenre(pathname.split("/")[2]);
  }, [pathname]);

  useEffect(() => {
    if (!recentlyPlayedPlaylists.length) {
      if (genre === "recently_played") {
        getRecentlyPlayedLists(token, 50);
      }
      if (genre === "new_releases") {
        getNewReleases(token, "EG", 30);
      }
      if (genre === "featured_lists") {
        getFeaturedList(token, "EG", 30);
      }
      if (genre === "top_artists") {
        getTopLikedArtists(token, 30);
      }
      if (genre === "categories") {
        getBrowseCategories(token, "EG", 30);
      }
    }
  }, [genre]);
  return (
    <div id="app-main-search-area" className="px-3 py-3">
      <div className="container">
        <WorksRow
          works={(() => {
            switch (genre) {
              case "recently_played":
                return recentlyPlayedPlaylists;
              case "new_releases":
                return newReleases;
              case "featured_lists":
                return featuredPlaylists.items;
              case "top_artists":
                return yourTopArtists;
              case "categories":
                return browseCategories;
              default:
                return [];
            }
          })()}
          title={(() => {
            switch (genre) {
              case "recently_played":
                return "Recently played";
              case "new_releases":
                return "New releases";
              case "featured_lists":
                return featuredPlaylists.msg;
              case "top_artists":
                return "Artists You Like";
              case "categories":
                return "browse categories";
              default:
                return "";
            }
          })()}
        />
      </div>
    </div>
  );
});
