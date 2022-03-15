import api from "../../../utils/api";

const getBrowseCategories =
  (token, country, catsLimit, pLimit) => async (dispatch) => {
    try {
      const categories = await api.get("/browse/categories", {
        headers: {
          Authorization: `Bearer ${
            token || window.localStorage.getItem("token")
          }`,
        },
        params: {
          country: country || "EG",
          limit: catsLimit || 5,
        },
      });
      console.log(categories.data.categories.items[0].name);
      const ids = categories.data.categories.items.map((item) => item.id);
      ids.map(async (id, i) => {
        try {
          const res = await api.get(`/browse/categories/${id}/playlists`, {
            headers: {
              Authorization: `Bearer ${
                token || window.localStorage.getItem("token")
              }`,
            },
            params: {
              country: country || "EG",
              limit: pLimit || 5,
            },
          });
          if (res.data.playlists.items.length)
            dispatch({
              type: "GET_BROWSE_CATEGORY_PLAYLISTS",
              payload: {
                msg: categories.data.categories.items[i].name,
                items: res.data.playlists.items,
              },
            });
        } catch (error) {
          console.log(error);
          dispatch({
            type: "GET_BROWSE_CATEGORY_PLAYLISTS",
            payload: { msg: "Something wrong happened!", items: [] },
          });
        }
      });
    } catch (error) {
      console.log(error);

      dispatch({
        type: "GET_BROWSE_CATEGORY_PLAYLISTS",
        payload: { msg: "Something wrong happened!", items: [] },
      });
    }
  };

export default getBrowseCategories;
