import shortid from "shortid";
import { API_URL } from "../../config";
//selectors
export const getAllProducts = ({ product }) => {
  return product;
};
export const getProductById = ({ product }, id) => product.find(pro => pro.id === id);

// actions
const createActionName = actionName => `app/products/${actionName}`;
const REMOVE_PRODUCT = createActionName('REMOVE_PRODUCT');
const ADD_PRODUCT = createActionName('ADD_PRODUCT');
const EDIT_PRODUCT = createActionName('EDIT_PRODUCT');
const SEARCH_PRODUCTS = createActionName('SEARCH_PRODUCTS');
const UPDATE_PRODUCTS = createActionName('UPDATE_PRODUCTS');
const UPDATE_SINGLE_PRODUCT = createActionName('UPDATE_SINGLE_PRODUCT');

// action creators
export const removeProduct = payload => ({ type: REMOVE_PRODUCT, payload });
export const addProduct = payload => ({ type: ADD_PRODUCT, payload });
export const editProduct = payload => ({ type: EDIT_PRODUCT, payload });
export const searchProducts = (payload) => ({ type: SEARCH_PRODUCTS, payload: { payload } });
export const updateProducts = (updatedProData) => ({
  type: UPDATE_PRODUCTS,
  payload: { products: updatedProData }
});


export const fetchProduct = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${API_URL}/api/products`);
      const data = await response.json();
      dispatch(updateProducts(data));
    } catch (error) {
      console.log(error);
    }
  };
};

const productReducer = (statePart = [], action) => {
  switch (action.type) {
    case REMOVE_PRODUCT:
      return [...statePart.filter(pro => pro._id !== action.payload)];
    case ADD_PRODUCT:
      return [...statePart, { ...action.payload, _id: shortid() }];
    case EDIT_PRODUCT:
      return statePart.map(pro => (pro._id === action.payload._id ? { ...pro, ...action.payload } : pro));
    case SEARCH_PRODUCTS:
      return statePart.filter((pro) => pro.name.toLowerCase().includes(action.payload.toLowerCase()));
    case UPDATE_SINGLE_PRODUCT:
      return action.payload;
      case UPDATE_PRODUCTS:
        return [...action.payload.products];
    default:
      return statePart;
  };
};

export default productReducer;