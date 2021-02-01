
import {produce} from'immer';


const initialState = {};

export default function cartReducer(state = initialState, action) {

    console.log('action', action)


    switch (action.type) {

        case 'ADD_ITEM':{

            return{
                ...state,
                [action.item.id]:{
                    ...action.item,
                    quantity: 1,
                }
            }
        }

        case 'REMOVE_ITEM':{
            return produce(state, (draftState) =>{
                delete draftState[action.item.id]
            })
        }

        case 'UPDATE_QUANTITY':{

            return produce(state, (draftState) =>{
                const {item, key, value} = action;
                draftState[item.id][key]= value;
            })

        }

        case 'CLEAR_CART':{

            
            return produce(state, (draftState) =>{

                return draftState = initialState
            })

        }

        default:
            return state;
    }
}


export const getStoreItemArray = state => Object.values(state);