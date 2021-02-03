export const addItem = (item) => {
    return {
        type: 'ADD_ITEM',
        item
    };
}

export const removeItem = (item) => {
    return {
        type: 'REMOVE_ITEM',
        item
    };
}

export const updateQuantity = (item, newQuantity) => {
    return {
        type: 'UPDATE_QUANTITY_BY_INPUT',
        item,
        newQuantity
    }
}
