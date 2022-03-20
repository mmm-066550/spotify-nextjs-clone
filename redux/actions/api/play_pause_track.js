import api from "../../../utils/api";

const playPauseTrack = (deviceID, token, spotify_uri) => async (dispatch) => {
  await api.put(
    `/me/player`,
    { device_ids: [deviceID], play: false },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  await api.put(
    `/me/player/play?device_id=${deviceID}`,
    {
      context_uri: spotify_uri || "spotify:track:7xGfFoTpQ2E7fRF5lN10tr",
      position_ms: 0,
    },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  dispatch({ type: "", action: {} });
};

export default playPauseTrack;
