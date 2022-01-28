export default function appReducer(state = [], action) {
  if (action.type === "ADD_ENTRY") {
    console.log(action.payload.id);
    var tempArray = state;
    var getIndex = tempArray.findIndex((x) => x.id === action.payload.id);
    if (getIndex >= 0) {
      tempArray[getIndex] = action.payload;
      return tempArray;
    }
    return [...state, action.payload];
  } else if (action.type === "DELETE_ENTRY") {
    const newArray = state.filter(
      (allEnttry) => allEnttry.id !== action.payload
    );
    return newArray;
  } else if (action.type === "DELETE_ALL") {
    return [];
  }
  return state;
}
