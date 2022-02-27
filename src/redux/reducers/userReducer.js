const userReducer = (user = null, action) => {
  if (action.type === "SET_USER") {
    return action.payload;
  }
  return user;
};
export default userReducer;
