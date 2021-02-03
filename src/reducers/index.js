const initialState = {};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      let newQty = 1;
      if (state[action.item.id]) {
        console.log(state[action.item.id].quantity);
        newQty = state[action.item.id].quantity + 1;
      }
      return {
        ...state,
        [action.item.id]: {
          ...action.item,
          quantity: newQty,
        },
      };
    }
    case "REMOVE_ITEM": {
      const stateCopy = { ...state };
      delete stateCopy[action.item];

      return {
        ...stateCopy,
      };
    }
    case "UPDATE_QUANTITY": {
      console.log(`updating quantity`, action);
      console.log(state);

      return {
        ...state,
        [action.item.id]: { ...action.item, quantity: action.quantity },
      };
    }
    case "CALCULATE_TOTAL": {
      console.log(state);
      
      return {
        ...state,
      };
    }

    default:
      return state;
  }
}

export const getStoreItemArray = (state) => Object.values(state);
