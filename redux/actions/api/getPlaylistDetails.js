import api from "../../../utils/api";
import FastAverageColor from "fast-average-color";
const fac = new FastAverageColor();

const getPlaylistDetails = (token, id, country) => async (dispatch) => {
  try {
    const res = await api.get(`/playlists/${id}`, {
      headers: {
        Authorization: `Bearer ${
          token || window.localStorage.getItem("token")
        }`,
      },
      params: {
        market: country || "EG",
      },
    });
    const colorInfo = await fac.getColorAsync(res.data.images[0].url, {
      ignoredColor: [
        [255, 255, 255, 255],
        [0, 0, 0, 255],
      ],
    });
    dispatch({
      type: "GET_PLAYLIST|ARTIST|ALBUM__VIEW",
      payload: {
        ...res.data,
        bgColor: colorInfo.hex,
      },
    });
  } catch (error) {
    dispatch({
      type: "GET_PLAYLIST|ARTIST|ALBUM__VIEW",
      payload: null,
    });
  }
};

export default getPlaylistDetails;
