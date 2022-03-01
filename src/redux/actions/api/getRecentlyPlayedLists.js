import api from "../../../api";

const getRecentlyPlayedLists = (token, limit) => async (dispatch) => {
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
    const ids = [
      ...new Set(res.data.items.map((item) => item.context.uri.split(":")[2])),
    ];

    ids.map(async (id) => {
      const res = await api.get(`/playlists/${id}`, {
        headers: {
          Authorization: `Bearer ${
            token || window.localStorage.getItem("token")
          }`,
        },
      });
      dispatch({
        type: "GET_RECENTLY_PLAYED_PLAYLISTS",
        payload: res.data,
      });
    });
  } catch (error) {
    dispatch({
      type: "GET_RECENTLY_PLAYED_PLAYLISTS",
      payload: [],
    });
  }
};

export default getRecentlyPlayedLists;
