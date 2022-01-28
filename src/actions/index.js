export const addEntry = (entry) => {
  return {
    type: "ADD_ENTRY",
    payload: entry,
  };
};

export const deleteEntry = (id) => {
  return {
    type: "DELETE_ENTRY",
    payload: id,
  };
};

export const deleteAll = () => {
  return {
    type: "DELETE_ALL",
  };
};
export const editEntry = (id) => {
  return {
    type: "EDIT_ENTRY",
    payload: id,
  };
};
