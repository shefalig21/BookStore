const initialState = {
  wishlistItems: [],
};

const wishlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_WISHLIST':
      const itemExists = state.wishlistItems.find((item) => item.id === action.payload.id);
      if (itemExists) {
        return state;
      }
      return {
        ...state,
        wishlistItems: [...state.wishlistItems, action.payload],
      };
    default:
      return state;
  }
};

export default wishlistReducer;