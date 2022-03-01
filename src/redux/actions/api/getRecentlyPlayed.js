import api from "../../../api";

const getRecentlyPlayed = (token, limit) => async (dispatch) => {
  try {
    const res = await api.get("/me/player/recently-played", {
      headers: {
        Authorization: `Bearer ${
          token || window.localStorage.getItem("token")
        }`,
      },
      params: {
        limit: limit || 5,
      },
    });
    dispatch({
      type: "GET_RECENTLY_PLAYED",
      payload: res.data.items,
    });
  } catch (error) {
    dispatch({
      type: "GET_RECENTLY_PLAYED",
      payload: null,
    });
  }
};

export default getRecentlyPlayed;
