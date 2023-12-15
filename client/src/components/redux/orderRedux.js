import shortid from "shortid";
import { API_URL } from "../../config";

//selectors
export const getAllOrders = ({ orders }) => orders;
export const getOrderById = ({ orders }, id) => orders.find(order => order._id === id);

// actions
const createActionName = actionName => `app/orders/${actionName}`;
const REMOVE_ORDER = createActionName('REMOVE_ORDER');
const ADD_ORDER = createActionName('ADD_ORDER');
const EDIT_ORDER = createActionName('EDIT_ORDER');
const SEARCH_ORDERS = createActionName('SEARCH_ORDERS');
const UPDATE_ORDERS = createActionName('UPDATE_ORDERS');

// action creators
export const removeOrder = payload => ({ type: REMOVE_ORDER, payload });
export const addOrder = payload => ({ type: ADD_ORDER, payload });
export const editOrder = payload => ({ type: EDIT_ORDER, payload });
export const searchOrders = (payload) => ({ type: SEARCH_ORDERS, payload: { payload } });
export const updateOrders = (updatedORDERData) => ({
  type: UPDATE_ORDERS,
  payload: { ORDER: updatedORDERData }
  });

  export const fetchOrder = () => {
    return async (dispatch) => {
      try {
        const response = await fetch(`${API_URL}/api/order`);
        const data = await response.json();
        dispatch(updateOrders(data));
      } catch (error) { 
        console.log(error); 
      }
    };
  };


  const orderReducer = (statePart = [], action) => {
    switch (action.type) {
      case REMOVE_ORDER:
        return [...statePart.filter(order => order._id !== action.payload)];
      case ADD_ORDER:
        return [...statePart, { ...action.payload, _id: shortid() }];
      case EDIT_ORDER:
        return statePart.map(order => (order.id === action.payload.id ? { ...order, ...action.payload } : order));
      case SEARCH_ORDERS:
        return statePart.filter((order) => order.name.includes(action.payload));
      case UPDATE_ORDERS:
        return [...action.payload.orders];
      default:
        return statePart;
    };
  };

  export default orderReducer;