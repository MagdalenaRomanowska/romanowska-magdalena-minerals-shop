import axios from 'axios';
import { API_URL } from '../config';

/* selectors */
export const getAll = ({ products }) => products.data;

/* action name creator */
const reducerName = 'products';
const createActionName = (name) => `app/${reducerName}/${name}`;

/* action types */
const LOAD_PRODUCTS = createActionName('LOAD_PRODUCTS');

/* action creators */
export const getProducts = ({ products }) => {
  return products;
};

export const getProduct = ({ products }, productAddressProduct) => {
  const filtered = products.filter((product) => product.addressProduct === productAddressProduct);
  return filtered.length ? filtered[0] : { error: true };
};

export const loadProducts = (payload) => ({ payload, type: LOAD_PRODUCTS });

/* thunk creators */

export const loadProductsRequest = () => {
  return async (dispatch) => {    
    let res = await axios.get(`${API_URL}/products`);
    dispatch(loadProducts(res.data));    
  };
};

/* reducer */
export const reducer = (statePart = [], action = {}) => {
  switch (action.type) {    
    case LOAD_PRODUCTS: {
      return action.payload;
    }    
    default:
      return statePart;
  }
};
