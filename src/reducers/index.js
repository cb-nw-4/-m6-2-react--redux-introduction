const initialState = {};

export default function cartReducer(state = initialState, action) {

  console.log(initialState);

  switch (action.type) {

    case 'ADD_ITEM': {
      return {
        ...state,
        [action.item.id]: {
          ...action.item,
          quantity: state[action.item.id] ? state[action.item.id].quantity + 1 : 1,
        }
      }
    }
    
    case 'REMOVE_ITEM': {
      const removeItemId = action.item.id;
      const stateCopy = { ...state };
      delete stateCopy[removeItemId];
      return {
        stateCopy,
      } 
    }

    case 'UPDATE_QUANTITY': {
      return {
        ...state,
        [action.itemId]: {
          ...state[action.itemId],
          quantity: action.quantity,
        }
      }
    }

    case 'CLEAR_CART': {
      return {
        ...initialState,
      }
    }

    default:
      return state;
  }
}

export const getStoreItemArray = (state) => Object.values(state);
