import React from "react";
import styles from "./.module.sass";
import { BiPlay, BiPause } from "react-icons/bi";

export default function PlayPauseBtn({ isPlaying, setisPlaying, size }) {
  return (
    <button
      style={{ minHeight: `${size}px`, minWidth: `${size}px` }}
      onClick={() => {
        setisPlaying(!isPlaying);
      }}
      className={`${styles.play_pause_track_btn} ${
        isPlaying ? styles.isPlaying : null
      }`}
    >
      {isPlaying ? <BiPause /> : <BiPlay />}
    </button>
  );
}
