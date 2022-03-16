import React, { useLayoutEffect } from "react";
import Head from "next/head";
import styles from "./.module.sass";
import NextImage from "../../../components/NextImage";
import { container } from "../../../components/AppMain/.module.sass";
import { connect } from "react-redux";
import { getWorkDetails, clearReducer } from "../../../redux/actions";
import { useRouter } from "next/router";
import { MdVerified } from "react-icons/md";
import Link from "next/link";
import Error from "next/error";

const mapStateToProps = (state) => state;
const mapDispatchToProps = { getWorkDetails, clearReducer };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(function WorkDetailsPage({
  token,
  countryCode,
  workView,
  getWorkDetails,
  clearReducer,
}) {
  const router = useRouter();
  const { work, id } = router.query;
  useLayoutEffect(() => {
    if (id)
      if (["playlist", "artist", "album"].includes(router.query.work))
        getWorkDetails(token, work, id, countryCode);
    return () => {
      clearReducer({});
    };
  }, [id]);

  if (!workView) return <Error statusCode={404} />;

  return (
    <>
      <Head>
        <title>Spotify App | {workView?.name || "Loading"}</title>
      </Head>
      <div
        className={`${styles.work_page_content_wrapper}`}
        style={{
          background: `linear-gradient( to bottom, ${
            workView?.bgColor || "var(--bg_color_4)"
          } 0%, var(--bg_color) 50%, transparent 100%)`,
        }}
      >
        <div className={`${container} py-5`}>
          <div className={`row ${styles.work_info_wrapper}`}>
            <div
              className={`col-12 col-md-6 col-lg-5 col-xl-4 ${styles.col_xxl_3}`}
            >
              <div
                className={`${styles.work_cover_container} ${
                  work === "artist" ? styles.circled : null
                }`}
              >
                {workView?.images?.length ? (
                  <NextImage
                    layout="responsive"
                    height={100}
                    width={100}
                    alt={workView?.name}
                    title={workView?.name}
                    path={workView?.images[0]?.url}
                  ></NextImage>
                ) : null}
              </div>
            </div>
            <div
              className={`mt-4 mt-md-0 col-12 col-md-6 col-lg-7 col-xl-8 ${styles.col_xxl_9}`}
            >
              <div className={styles.work_details_container}>
                {workView?.type ? (
                  <span className={styles.work_type}>
                    {workView?.type === "artist" ? (
                      <>
                        <MdVerified /> Verified Artist
                      </>
                    ) : (
                      workView?.type
                    )}
                  </span>
                ) : (
                  <span className={styles.type_placeholder}></span>
                )}

                {workView?.name ? (
                  <h1>{workView?.name}</h1>
                ) : (
                  <span className={styles.name_placeholder}></span>
                )}

                {workView?.album_type ||
                workView?.description ||
                workView?.genres?.length ? (
                  <>
                    <p className={styles.work_description}>
                      {workView?.description || workView?.genres?.join(", ")}
                    </p>
                    <p className={styles.work_fact}>
                      {workView?.type === "playlist" ||
                      workView?.type === "album" ? (
                        workView?.type === "album" ? (
                          <>
                            <Link href={`/artist/${workView?.artists[0]?.id}`}>
                              <a>{workView?.artists[0]?.name} </a>
                            </Link>
                            <span>{`. ${
                              workView?.release_date?.split("-")[0]
                            } . ${workView?.tracks?.items?.length} Tracks . ${
                              workView?.album_type
                            } Album`}</span>
                          </>
                        ) : (
                          <>
                            <span>{workView?.owner?.display_name}</span>
                            <span>{`. ${workView?.followers?.total} Followers . ${workView?.tracks?.items?.length} Tracks`}</span>
                          </>
                        )
                      ) : (
                        <span>{workView?.followers?.total} Followers</span>
                      )}
                    </p>
                  </>
                ) : (
                  <>
                    <span className={styles.more_placeholder}></span>
                    <span className={styles.more_placeholder}></span>
                    <span className={styles.more_placeholder}></span>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});
export async function getStaticProps(context) {
  return {
    props: {},
    notFound:
      !["playlist", "artist", "album"].includes(context.params.work) ||
      !context.params.id,
  };
}
export async function getStaticPaths(context) {
  return {
    paths: [
      { params: { work: "playlist", id: "/*" } },
      { params: { work: "artist", id: "/*" } },
      { params: { work: "album", id: "/*" } },
    ],
    fallback: true,
  };
}
