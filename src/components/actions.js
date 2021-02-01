export const addItem = item => {
    // console.log(item);
    return ({
        type: 'ADD_ITEM',
        item,
    })
};

export const removeItem = item =>{
    return ({
        type:'REMOVE_ITEM',
        item,
    })
}

export const updateItem = ({id, quantity}) =>{
    // console.log(id, quantity);
    return({
        type:'UPDATE_ITEM',
        id,
        quantity,
    })
}