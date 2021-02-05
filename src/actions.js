export const AddItem = (item) => ({
    type: "ADD_ITEM",
    item
});

export const ChangeQuantity = (quantity, item) => ({
    type: "CHANGE_QUANTITY",
    quantity, item
})

export const RemoveItem = (item) => ({
    type: "REMOVE_ITEM",
    item
})