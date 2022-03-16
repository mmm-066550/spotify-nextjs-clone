import React, { useLayoutEffect } from "react";
import Head from "next/head";
import styles from "./.module.sass";
import NextImage from "../../../components/NextImage";
import { container } from "../../../components/AppMain/.module.sass";
import { connect } from "react-redux";
import { getPlaylistDetails, clearReducer } from "../../../redux/actions";
import { useRouter } from "next/router";

const mapStateToProps = (state) => state;
const mapDispatchToProps = { getPlaylistDetails, clearReducer };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(function WorkDetailsPage({
  token,
  countryCode,
  workView,
  getPlaylistDetails,
  clearReducer,
}) {
  const router = useRouter();
  const id = router.query.id;
  useLayoutEffect(() => {
    if (id) getPlaylistDetails(token, id, countryCode);
    return () => {
      clearReducer();
    };
  }, [id]);

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
                  workView?.type === "artist" ? styles.circled : null
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
                  <span>{workView?.type}</span>
                ) : (
                  <span className={styles.type_placeholder}></span>
                )}

                {workView?.name ? (
                  <h1>{workView?.name}</h1>
                ) : (
                  <span className={styles.name_placeholder}></span>
                )}

                {workView?.description ? (
                  <>
                    <p className={styles.work_description}>
                      {workView?.description}
                    </p>
                    <p className={styles.work_fact}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
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
      !context.params.id &&
      !["playlist", "artist", "album"].includes(context.params.work),
  };
}
export async function getStaticPaths() {
  return {
    paths: [
      { params: { work: "playlist", id: "" } },
      { params: { work: "artist", id: "" } },
      { params: { work: "album", id: "" } },
    ],
    fallback: true,
  };
}
