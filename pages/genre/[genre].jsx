import React, { useLayoutEffect } from "react";
import { connect } from "react-redux";
import { useRouter } from "next/router";
import PlaylistsRow from "../../components/PlaylistsRow";
import Head from "next/head";
import capitalize from "../../utils/capitalize";
import {
  getRecentlyPlayedLists,
  getFeaturedList,
  getTopLikedArtists,
  getTopLikedTracks,
  getNewReleases,
  clearReducer,
} from "../../redux/actions";

const mapStateToProps = (state) => state;
const mapDispatchToProps = {
  getRecentlyPlayedLists,
  clearReducer,
  getFeaturedList,
  getNewReleases,

  getTopLikedArtists,
  getTopLikedTracks,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(function ({
  genrePlaylists,
  getNewReleases,
  countryCode,
  getRecentlyPlayedLists,
  getFeaturedList,
  token,
  clearReducer,
  getTopLikedArtists,
  getTopLikedTracks,
}) {
  const router = useRouter();

  useLayoutEffect(() => {
    if (!genrePlaylists.items.length)
      switch (router.query.genre) {
        case "recently_played":
          getRecentlyPlayedLists(token, 30);
          break;
        case "featured_playlists":
          getFeaturedList(token, countryCode, 30);
          break;
        case "top_artists":
          getTopLikedArtists(token, 30);
          break;
        case "top_albums":
          getTopLikedTracks(token, 30);
        case "new_releases":
          getNewReleases(token, countryCode, 30);
          break;
        default:
          break;
      }
    return () => {
      clearReducer();
    };
  }, []);

  return (
    <>
      <Head>
        <title>{`Spotify App | ${
          genrePlaylists?.msg ? capitalize(genrePlaylists?.msg) : "Loading"
        }`}</title>
      </Head>
      <div className="genre_page_content_area">
        <PlaylistsRow content={genrePlaylists} placeholder={20} />
      </div>
    </>
  );
});

export async function getStaticProps() {
  return {
    props: {},
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { genre: "recently_played" } },
      { params: { genre: "featured_playlists" } },
      { params: { genre: "top_albums" } },
      { params: { genre: "top_artists" } },
      { params: { genre: "new_releases" } },
    ],
    fallback: false,
  };
}
