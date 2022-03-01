const clearList = (LIST_NAME) => {
  return {
    type: `CLEAR_${LIST_NAME}`,
    payload: [],
  };
};

export default clearList;
