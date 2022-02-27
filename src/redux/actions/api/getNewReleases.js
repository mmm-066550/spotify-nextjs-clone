import api from "../../../api";

const getNewReleases = (country) => async (dispatch) => {
  try {
    const res = await api.get("/browse/new-releases", {
      params: {
        country: country || "EG",
      },
    });
    console.log(res);
    dispatch({
      type: "GET_NEW_RELEASES",
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: "GET_NEW_RELEASES",
      payload: null,
    });
  }
};

export default getNewReleases;
