export const addToBag = (book) => ({
  type: 'ADD_TO_BAG',
  payload: book,
});

export const incrementQuantity = (id) => ({
  type: 'INCREMENT_QUANTITY',
  payload: id,
});

export const decrementQuantity = (id) => ({
  type: 'DECREMENT_QUANTITY',
  payload: id,
});