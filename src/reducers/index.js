const initialState = {};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ITEM': {
      let newQuantity = 0;
      if (!state.hasOwnProperty(action.item.id)) {
        newQuantity = 1;
      } else {
        newQuantity = state[action.item.id].quantity + 1;
      }

      return {
        ...state,
        [action.item.id]: {
          ...action.item,
          quantity: newQuantity
        }
      }
    }
    case 'REMOVE_ITEM': {
      const stateCopy = { ...state };
      delete stateCopy[action.item.id];
      return {
        ...stateCopy
      }
    }
    case 'UPDATE_QUANTITY': {
      return {
        ...state,
        [action.item.id]: {
          ...state[action.item.id],
          quantity: action.item.newQuantity
        }
      }
    }
    default:
      return state;
  }
};

export const getStoreItemArray = (state) => Object.values(state);
