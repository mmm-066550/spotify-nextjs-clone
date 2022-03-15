import React, { useState } from "react";
import styles from "./.module.sass";
import { BiPlay, BiPause } from "react-icons/bi";
import Link from "next/link";
import Image from "next/image";

export default function PlayListComponent({ playlist }) {
  const [isPlaying, setIsPlaying] = useState(false);
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
                  alt={`${playlist.name}_cover`}
                  width={100}
                  height={100}
                  priority
                />
              ) : null}
            </a>
          </Link>
          {playlist ? (
            <button
              onClick={() => {
                setIsPlaying(!isPlaying);
              }}
              className={`${styles.play_pause_track_btn} ${
                isPlaying ? styles.isPlaying : null
              }`}
            >
              {isPlaying ? <BiPause /> : <BiPlay />}
            </button>
          ) : null}
        </div>
        {playlist ? (
          <Link href={`/${playlist?.type}/${playlist?.id}`}>
            <a>
              <h6 className={styles.playlist_title}>{playlist.name}</h6>
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
            </a>
          </Link>
        ) : (
          <>
            <span className={`mb-3 ${styles.skelton_placeholder}`}></span>
            <span className={`w-100 my-2 ${styles.skelton_placeholder}`}></span>
            <span className={`w-100 my-1 ${styles.skelton_placeholder}`}></span>
          </>
        )}
      </div>
    </div>
  );
}
