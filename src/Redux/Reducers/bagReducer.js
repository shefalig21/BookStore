const initialState = {
  bagItems: [],
};

const bagReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_BAG':
      const itemExists = state.bagItems.find((item) => item.id === action.payload.id);
      if (itemExists) {
        return state;
      }
      return {
        ...state,
        bagItems: [...state.bagItems, { ...action.payload, quantity: 1 }],
      };
    case 'INCREMENT_QUANTITY':
      return {
        ...state,
        bagItems: state.bagItems.map((item) =>
          item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
        ),
      };
    case 'DECREMENT_QUANTITY':
      return {
        ...state,
        bagItems: state.bagItems.map((item) =>
          item.id === action.payload && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
      };
    default:
      return state;
  }
};

export default bagReducer;