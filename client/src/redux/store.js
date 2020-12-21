import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

// import reducers
import { initialState } from '../initialState';
import {reducer as minerals} from './mineralsRedux';
import {reducer as products} from './productsRedux';
import orders from './ordersRedux';

// combine reducers
const rootReducer = combineReducers({
  minerals,
  products,
  orders,
});

// add blank reducers for initial state properties without reducers
Object.keys(initialState).forEach(item => {
  if (typeof rootReducer[item] == 'undefined') {
    rootReducer[item] = (statePart = null) => statePart;
  }
});

const store = createStore(
  rootReducer,
  initialState,
  compose(
		applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
	)
);

export default store;
