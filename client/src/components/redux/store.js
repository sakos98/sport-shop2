import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import productReducer from './productsRedux';
import usersReducer from './userRedux';
import orderReducer from './orderRedux';
import initialState from './initailStare';
import thunk from 'redux-thunk';
import basketReducer from './BasketRedux';


const subreducers = {
  product: productReducer,
  user: usersReducer,
  order: orderReducer,
  basket: basketReducer,
}

const reducer = combineReducers(subreducers);
const store = createStore(
  reducer,
  initialState,
  compose(
		applyMiddleware(thunk),
		window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
	)
);

export default store;