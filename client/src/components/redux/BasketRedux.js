// basketRedux.js

// Types of actions
const ADD_TO_BASKET = 'ADD_TO_BASKET';
const REMOVE_FROM_BASKET = 'REMOVE_FROM_BASKET';

// Initial state for basket
const initialState = {
  basketItems: [],
};

// Reducer for basket
const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_BASKET:
      return {
        ...state,
        basketItems: [...state.basketItems, action.payload],
      };
    case REMOVE_FROM_BASKET:
      return {
        ...state,
        basketItems: state.basketItems.filter(item => item.id !== action.payload),
      };
    default:
      return state;
  }
};

// Action creators
export const addToBasket = (product) => ({
  type: ADD_TO_BASKET,
  payload: product,
});

export const removeFromBasket = (productId) => ({
  type: REMOVE_FROM_BASKET,
  payload: productId,
});

export default basketReducer;
