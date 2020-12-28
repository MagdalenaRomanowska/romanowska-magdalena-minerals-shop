import axios from 'axios';
import { API_URL } from '../config';

/* selectors */
export const getAll = ({ minerals }) => minerals.data;

/* action name creator */
const reducerName = 'minerals';
const createActionName = (name) => `app/${reducerName}/${name}`;

/* action types */
const FETCH_START = createActionName('FETCH_START');
const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
const FETCH_ERROR = createActionName('FETCH_ERROR');
const START_REQUEST = createActionName('START_REQUEST');
const END_REQUEST = createActionName('END_REQUEST');
const ERROR_REQUEST = createActionName('ERROR_REQUEST');
const LOAD_MINERALS = createActionName('LOAD_MINERALS');
const LOAD_PRODUCTS = createActionName('LOAD_PRODUCTS');
const ADD_MINERAL = createActionName('ADD_MINERAL');

export const startRequest = (payload) => ({ payload, type: START_REQUEST });
export const endRequest = (payload) => ({ payload, type: END_REQUEST });
export const errorRequest = (payload) => ({ payload, type: ERROR_REQUEST });
/* action creators */
export const getMinerals = ({ minerals }) => {
  return minerals;
};

export const getMineral = ({ minerals }, mineralTitle) => {
  const filtered = minerals.filter((mineral) => mineral.title === mineralTitle);
  return filtered.length ? filtered[0] : { error: true };
};

export const fetchStarted = (payload) => ({ payload, type: FETCH_START });
export const fetchSuccess = (payload) => ({ payload, type: FETCH_SUCCESS });
export const fetchError = (payload) => ({ payload, type: FETCH_ERROR });
export const loadMinerals = (payload) => ({ payload, type: LOAD_MINERALS });
export const loadProducts = (payload) => ({ payload, type: LOAD_PRODUCTS });
export const addMineral = (payload) => ({ payload, type: ADD_MINERAL });

/* thunk creators */

export const loadMineralsRequest = () => {
  return async (dispatch) => {
    dispatch(startRequest({ name: 'LOAD_MINERALS' }));
    try {
      let res = await axios.get(`${API_URL}/minerals`);
      dispatch(loadMinerals(res.data));
      dispatch(endRequest({ name: 'LOAD_MINERALS' }));
    } catch (e) {
      dispatch(errorRequest({ name: 'LOAD_MINERALS', error: e.message }));
    }
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
    case FETCH_START: {
      return {
        ...statePart,
        loading: {
          active: true,
          error: false,
        },
      };
    }
    case FETCH_SUCCESS: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
        data: action.payload,
      };
    }
    case FETCH_ERROR: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: action.payload,
        },
      };
    }
    case ADD_MINERAL: {
      statePart.push(action.payload);
      return statePart;
    }
    default:
      return statePart;
  }
};
