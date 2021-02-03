const initialState = {};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        [action.item.id]: {
          ...action.item,
          quantity: state[action.item.id]
            ? Number(state[action.item.id].quantity) + 1
            : 1,
        },
      };
    case "REMOVE_ITEM":
      const stateCopy = { ...state };
      delete stateCopy[action.item.id];
      return stateCopy;
    case "UPDATE_ITEM":
      return {
        ...state,
        [action.itemId]: {
          ...state[action.itemId],
          quantity: action.newQuantity,
        },
      };
    default:
      return state;
  }
};

export const getStoreItemArray = (state) => {
  return Object.values(state);
};

export default cartReducer;
