import React from "react";
import styles from "./.module.sass";
import { BiPlay, BiPause } from "react-icons/bi";
import { playPauseTrack } from "../../redux/actions";
import { connect } from "react-redux";

const mapStateToProps = (state) => state;
const mapDispatchToProps = { playPauseTrack };

function PlayPauseBtn({
  isPlaying,
  uri,
  size,
  playPauseTrack,
  token,
  deviceID,
  spotifyPlayer,
}) {
  if (token && deviceID && uri)
    return (
      <button
        style={{ minHeight: `${size}px`, minWidth: `${size}px` }}
        onClick={() => {
          !isPlaying
            ? playPauseTrack(deviceID, token, uri)
            : spotifyPlayer?.player?.pause();
        }}
        className={`${styles.play_pause_track_btn} ${
          isPlaying ? styles.isPlaying : null
        }`}
      >
        {isPlaying ? <BiPause /> : <BiPlay />}
      </button>
    );
  return <></>;
}
export default connect(mapStateToProps, mapDispatchToProps)(PlayPauseBtn);
