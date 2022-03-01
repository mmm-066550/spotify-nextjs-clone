const browseCategories = (list = [], action) => {
  if (action.type === "GET_BROWSE_CATEGORIES") {
    return [...action.payload];
  }
  if (action.type === "CLEAR_BROWSE_CATEGORIES") {
    return [...action.payload];
  }
  return list;
};
export default browseCategories;
