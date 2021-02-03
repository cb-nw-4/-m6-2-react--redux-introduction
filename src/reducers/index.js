import React from "react";
import { STORE_ITEMS } from '../data';
const initialState = { };

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      return {
        ...state,
        [action.item.id]: {
          ...action.item,
          quantity: state[action.item.id] ? state[action.item.id].quantity + 1 : 1
        },
      };
    }
    case "REMOVE_ITEM": {
      const stateCopy = { ...state };
      delete stateCopy[action.item.id];
      return {
        ...stateCopy,
      };
    }
    
    case "UPDATE_QUANTITY": {
      return {
        ...state,
        [action.itemId]: {
          ...state[action.itemId],
          quantity: action.quantity,
        },
      };
    }

    case "CLEAR_QUANTITY" :{ 


    }

    default:
      return state;
  }
}

export const getStoreItemArray = (state) => Object.values(state);
