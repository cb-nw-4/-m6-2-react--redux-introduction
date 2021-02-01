export const addItem = item => ({
    type: 'ADD_ITEM',
    item,
})


export const removeItem = item =>({
    type: 'REMOVE_ITEM',
    item,
})

export const updateQuantity = (item, key, value) =>({
    type: 'UPDATE_QUANTITY',
    item,
    key,
    value
})

export const clearCart = item => ({
    type: 'CLEAR_CART',
    item,
})