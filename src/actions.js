export const addItem = (item) => ({
  type: "ADD_ITEM",
  item,
});

export const removeItem = (item) => ({
  type: "REMOVE_ITEM",
  item,
});

export const updateQuantity = (item, quantity) => ({
  type: "UPDATE_QUANTITY",
  item,
  quantity,
});

export const calculateTotal = (item) => ({
  type: "CALCULATE_TOTAL",
  item,
});
