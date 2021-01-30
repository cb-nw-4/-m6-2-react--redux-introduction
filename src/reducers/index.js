
import produce from'immer';


const initialState = {};

export default function cartReducer(state = initialState, action) {

    console.log('action', action)


    switch (action.type) {

        case 'ADD_ITEM':{
            return{
                ...state,
                [action.item.id]:{
                    ...action.item,
                    quality: 1,
                }
            }
        }

        case 'REMOVE_ITEM':{
            return produce(state, (draftState) =>{

                delete draftState[action.item.id]
            })
        }

        default:
            return state;
    }
}


export const getStoreItemArray = state => Object.values(state);