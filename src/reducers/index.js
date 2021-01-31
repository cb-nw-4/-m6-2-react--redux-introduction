import { STORE_ITEMS } from '../data';

const initialState = {STORE_ITEMS};
// const initialState = {};

console.log(initialState)

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      return {
        ...state,
        [action.item.id]: {
          ...action.item,
          quantity: 1,
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
    default:
      return state;
  }
}

export const getStoreItemArray = (state) => Object.values(state);
