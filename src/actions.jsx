export const addItem = (item) => ({
  type: "ADD_ITEM",
  item,
});

export const removeItem = (item) => ({
  type: "REMOVE_ITEM",
  item,
});

export const UpdateItem = (item) => ({
  type: "UPDATE_ITEM",
  item,
});
