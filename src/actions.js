export const addItem = (item) => ({
  type: "ADD_ITEM",
  item,
});

export const removeItem = (item) => ({
  type: "REMOVE_ITEM",
  item,
});

export const updateQuantity = (item, newQuantity) => ({
  type: "UPDATE_QUANTITY",
  item,
  quantity: parseInt(newQuantity, 10),
});
