const initialState = {};

export default function cartReducer(state = initialState, action) {
  const addedCart = {...state}
  console.log(addedCart)
  switch (action.type) {
    case "ADD_ITEM": {
      if (addedCart[action.item.id]) {
        const quantity = addedCart[action.item.id].quantity
        console.log(quantity)
        return {
          ...state,
          [action.item.id]: {
            ...action.item,
            quantity: quantity + 1
          }
        }
      }
      else {
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
    default:
      return state;
  }
}

export const getStoreItemArray = (state) => {
  return Object.values(state);
};
