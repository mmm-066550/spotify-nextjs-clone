import React from "react";
import styles from "./.module.sass";
import { BiPlay } from "react-icons/bi";
// import { AiOutlinePause } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";

export default function PlayListComponent({ playlist }) {
  return (
    <div className={`col-12 col-sm-6 col-md-4 col-xl-3  ${styles.col_xxl_2_5}`}>
      <div className={styles.playlist_component_styled}>
        <div
          className={`${styles.playlist_cover_wrapper} ${
            playlist?.type === "artist" ? styles.circled : null
          }`}
        >
          <Link href={`/${playlist?.type}/${playlist?.id}`}>
            <a className={styles.playlist_cover_link}>
              {playlist ? (
                <Image
                  quality={100}
                  src={playlist?.images[0]?.url}
                  layout="responsive"
                  alt="none"
                  width={100}
                  height={100}
                />
              ) : null}
            </a>
          </Link>
          <button className={styles.play_pause_track_btn}>
            <BiPlay />
          </button>
        </div>
        <Link href={`/${playlist?.type}/${playlist?.id}`}>
          <a>
            {playlist ? (
              <h6 className={styles.playlist_title}>{playlist.name}</h6>
            ) : (
              <span className={`mb-3 ${styles.skelton_placeholder}`}></span>
            )}
            {playlist ? (
              <p
                className={styles.playlist_overview}
                dangerouslySetInnerHTML={{
                  __html:
                    playlist?.type === "artist"
                      ? "Artist"
                      : playlist.description ||
                        new Date(playlist.release_date).toLocaleDateString(
                          "en-US",
                          {
                            day: "numeric",
                            year: "numeric",
                            month: "long",
                          }
                        ),
                }}
              />
            ) : (
              <>
                <span
                  className={`w-100 my-2 ${styles.skelton_placeholder}`}
                ></span>
                <span
                  className={`w-100 my-2 ${styles.skelton_placeholder}`}
                ></span>
              </>
            )}
          </a>
        </Link>
      </div>
    </div>
  );
}
