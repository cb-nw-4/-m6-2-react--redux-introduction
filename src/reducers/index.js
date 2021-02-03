import produce from 'immer';

const initialState = {};

export const calculateTotal = (updatedCart) => {
    const totalCartQuantity = Object.values(updatedCart).reduce((total, item) => Number(total + item.quantity), 0);
    const totalCartCost = Object.values(updatedCart).reduce((totalCost, item) => totalCost + (item.quantity * item.price), 0);
    return { totalCartQuantity, totalCartCost };
}

export default function cartReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_ITEM': {
            if (!state[action.item.id]) {
                return {
                    ...state,
                    [action.item.id]: {
                        ...action.item,
                        quantity: 1,
                    }
                }
            }
            else if (state[action.item.id]) {
                return {
                    ...state,
                    [action.item.id]: {
                        ...action.item,
                        quantity: Number(state[action.item.id].quantity) + 1,
                    }
                }
            }
            break;
        }
        case 'REMOVE_ITEM': {
            return produce(state, (draftState) => {
                delete draftState[action.item.id];
            })
        }
        case 'UPDATE_QUANTITY_BY_INPUT': {
                const updatedCart = {
                    ...state,
                    [action.item.id]: {
                        ...action.item,
                        quantity: action.newQuantity,
                    } 
                }
                return updatedCart;
            }
        default:
            return state;
    }
}

export const getStoreItemArr = (state) => {
    return Object.values(state);
}

