const newReleasesReducer = (list = [], action) => {
  if (action.type === "GET_NEW_RELEASES") {
    return [...list, action.payload];
  }
  if (action.type === "CLEAR_NEW_RELEASES") {
    return action.payload;
  }
  return list;
};
export default newReleasesReducer;
