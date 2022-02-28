import api from "../../../api";

const getTopLikedArtists = (token, country, limit) => async (dispatch) => {
  try {
    const res = await api.get("/me/top/artists", {
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
      type: "GET_TOP_LIKED_ARTISTS",
      payload: res.data.items,
    });
  } catch (error) {
    dispatch({
      type: "GET_TOP_LIKED_ARTISTS",
      payload: null,
    });
  }
};

export default getTopLikedArtists;
