import produce from "immer";
const initialState = {};

export default function cartReducer(state = initialState, action) {
  console.log();
  switch (action.type) {
    case "ADD_ITEM": {
      if (state[action.item.id]) {
        return {
          ...state,
          [action.item.id]: {
            ...action.item,
            quantity: state[action.item.id].quantity + 1,
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
      return produce(state, (draftState) => {
        delete draftState[action.item.id];
      });
    }
    case "UPDATE_QUANTITY": {
      return {
        ...state,
        [action.item.id]: {
          ...action.item,
          quantity: action.quantity || "",
        },
      };
    }
    default:
      return state;
  }
}

export const getStoreItemArray = (state) => {
  return Object.values(state);
};
