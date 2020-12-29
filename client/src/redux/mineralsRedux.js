import axios from 'axios';
import { API_URL } from '../config';

/* selectors */
export const getAll = ({ minerals }) => minerals.data;

/* action name creator */
const reducerName = 'minerals';
const createActionName = (name) => `app/${reducerName}/${name}`;

/* action types */
const LOAD_MINERALS = createActionName('LOAD_MINERALS');
const LOAD_PRODUCTS = createActionName('LOAD_PRODUCTS');
const ADD_MINERAL = createActionName('ADD_MINERAL');

export const getMinerals = ({ minerals }) => {
  return minerals;
};

export const getMineral = ({ minerals }, mineralTitle) => {
  const filtered = minerals.filter((mineral) => mineral.title === mineralTitle);
  return filtered.length ? filtered[0] : { error: true };
};

export const loadMinerals = (payload) => ({ payload, type: LOAD_MINERALS });
export const loadProducts = (payload) => ({ payload, type: LOAD_PRODUCTS });
export const addMineral = (payload) => ({ payload, type: ADD_MINERAL });

/* thunk creators */

export const loadMineralsRequest = () => {
  return async (dispatch) => {
    let res = await axios.get(`${API_URL}/minerals`);
    dispatch(loadMinerals(res.data));
  };
};

/* reducer */
export const reducer = (statePart = [], action = {}) => {
  switch (action.type) {
    case LOAD_MINERALS: {
      return action.payload;
    }
    case LOAD_PRODUCTS: {
      return action.payload;
    }
    case ADD_MINERAL: {
      statePart.push(action.payload);
      return statePart;
    }
    default:
      return statePart;
  }
};
