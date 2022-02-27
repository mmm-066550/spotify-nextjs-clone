import api from "../../../api";

const getMe = (token) => async (dispatch) => {
  try {
    const res = await api.get("/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch({
      type: "SET_USER",
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: "SET_USER",
      payload: false,
    });
  }
};

export default getMe;
