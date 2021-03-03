export const addItem = item => ({
    type: 'ADD_ITEM',
    item,
});

export const removeItem = item => ({
    type: 'REMOVE_ITEM',
    item,
});

export const updateQuantity = (id, quantity) => ({
    type: 'UPDATE_QUANTITY',
    id,
    quantity,
}) 