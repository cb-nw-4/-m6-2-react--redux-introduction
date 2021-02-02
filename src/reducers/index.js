const initialState = {};

export default function cartReducer(state = initialState, action) {
  const addedCart = { ...state };

  switch (action.type) {
    case "ADD_ITEM": {
      if (addedCart[action.item.id]) {
        const quantity = addedCart[action.item.id].quantity;

        return {
          ...state,
          [action.item.id]: {
            ...action.item,
            quantity: quantity + 1,
          },
        };
      } else {
        return {
          ...state,
          [action.item.id]: {
            ...action.item,
            quantity: 1,
          },
        };
      }
    }
    case "REMOVE_ITEM": {
      const newCart = { ...state };
      delete newCart[action.item.id];
      return newCart;
    }
    case "UPDATE_QUANTITY": {
      return {
        ...state,
        [action.item.id] : {
          ...action.item,
          quantity: action.quantity || ""
        }
      }
      
    }
    default:
      return state;
  }
}

export const getStoreItemArray = (state) => {
  return Object.values(state);
};
