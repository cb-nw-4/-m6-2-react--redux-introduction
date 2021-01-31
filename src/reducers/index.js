const initialState = {};

export default function cartReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_ITEM': {
            // console.log(state, action);
            // let blahblah= Object.values(state).map(el=>{
            //         if(el.id===action.item.id){
            //             return{
            //                 ...state,
            //                 [action.item.id]: {
            //                     ...action.item,
            //                     quantity: state[action.item].quantity+1,
            //                 }
            //             }
            //         }
            //         else{
            //             return {
            //                 ...state,
            //                 [action.item.id]: {
            //                     ...action.item,
            //                     quantity: 1,
            //                 }
            //             }
            //         }
            //     });
            //     console.log(blahblah)
                return {
                    ...state,
                    [action.item.id]: {
                        ...action.item,
                        quantity: 1,
                    }
                }
        }
        case 'REMOVE_ITEM': {
            console.log(state, action);
            const newState={...state};
            delete newState[action.item];
            return newState;
        }
        default:
            return state;
    }
}

export const getStoreItemArray = (state) => Object.values(state);