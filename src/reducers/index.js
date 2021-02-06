import { STORE_ITEMS } from "../data";

//Create itinial state
const tempObject= {};
STORE_ITEMS.map(
    (item)=> tempObject[item.id]={...item, quantity:0});

const initialState = {};

export default function cartReducer(state = initialState, action) {
    switch(action.type){
        case 'ADD_ITEM':
            return {
                ...state,
                [action.item.id]:{
                    ...action.item,
                    quantity: state[action.item.id]? state[action.item.id].quantity + 1: 1,
                }
            }
        case 'REMOVE_ITEM':
            {
                const stateCopy = { ...state };
                delete stateCopy[action.item.id];
                return stateCopy;
            }
        case 'UPDATE_QUANTITY':
            return {
                ...state,
                [action.id]:{
                    ...state[action.id],
                    quantity: action.quantity,
                }
            }
            
        default:
            return state;
    }
}

export const getStoreItemArray  = state=>Object.values(state);
