import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

// import reducers
import {reducer as minerals} from './mineralsRedux';
import {reducer as products} from './productsRedux';
import orders from './ordersRedux';

// combine reducers
const rootReducer = combineReducers({
  minerals,
  products,
  orders,
});

const store = createStore(
  rootReducer,
  compose(
		applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
	)
);

export default store;
