import api from "../../../api";

const getBrowseCategories = (token, country, limit) => async (dispatch) => {
  try {
    const res = await api.get("/browse/categories", {
      headers: {
        Authorization: `Bearer ${
          token || window.localStorage.getItem("token")
        }`,
      },
      params: {
        country: country || "EG",
        limit: limit || 5,
      },
    });
    dispatch({
      type: "GET_BROWSE_CATEGORIES",
      payload: res.data.categories.items,
    });
  } catch (error) {
    dispatch({
      type: "GET_BROWSE_CATEGORIES",
      payload: null,
    });
  }
};

export default getBrowseCategories;
