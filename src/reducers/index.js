const initialState = {};

export default function cartReducer(state = initialState, action) {
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
            const newState={...state};
            delete newState[action.item];
            return newState;
        }
        case 'UPDATE_ITEM': {
            return{
                ...state,
                [action.id]: {
                    ...state[action.id],
                    quantity:action.quantity==="" ? 0 : parseInt(action.quantity),
                }
            }
        }
        default:
            return state;
    }
}

export const getStoreItemArray = (state) => Object.values(state);