const initialState = {};

export default function cartReducer(state = initialState, action) {
    switch(action.type) {
        case "ADD_ITEM": {
           return {
                ...state,
                [action.item.id]: {
                    ...action.item,
                    quantity: state[action.item.id] ? state[action.item.id].quantity += 1 : 1,    
                }, total : state.total ? state.total + parseInt(action.item.price): parseInt(action.item.price),
            } 
            }           
        case "CHANGE_QUANTITY"  : {
            return {
                ...state, 
                [action.item.id]:{
                    ...state[action.item.id], quantity: action.quantity
                },
                total: state.total + (action.quantity * action.item.price) - (state[action.item.id].quantity * action.item.price)       
            }
        }
        case "REMOVE_ITEM" : {
            const stateCopy = {...state}
            delete stateCopy[action.item.id];
            stateCopy.total = stateCopy.total - (action.item.price * action.item.quantity);

            return stateCopy;
        }
        default: return state;
    }
};

export const getStoreItemArray = state => Object.values(state);