import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

// import reducers
import {reducer as minerals} from './mineralsRedux';
import {reducer as products} from './productsRedux';

// combine reducers
const rootReducer = combineReducers({
  minerals,
  products,
});

const store = createStore(
  rootReducer,
  compose(
		applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
	)
);

export default store;

// import {combineReducers, createStore, applyMiddleware} from 'redux';
// import thunk from 'redux-thunk';
// import { composeWithDevTools } from 'redux-devtools-extension';

// import { initialState } from './initialState';
// import { reducer as postsReducer } from './postsRedux';
// import { reducer as productsReducer } from './productsRedux';

// // define reducers
// const reducers = {
//   posts: postsReducer,
//   products: productsReducer,
// };

// // add blank reducers for initial state properties without reducers
// Object.keys(initialState).forEach(item => {
//   if (typeof reducers[item] == 'undefined') {
//     reducers[item] = (statePart = null) => statePart;
//   }
// });

// const combinedReducers = combineReducers(reducers);

// // create store
// export const store = createStore(
//   combinedReducers,
//   initialState,
//   composeWithDevTools(
//     applyMiddleware(thunk)
//   )
// );
