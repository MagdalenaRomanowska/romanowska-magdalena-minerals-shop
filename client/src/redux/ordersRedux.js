import axios from 'axios';
import { API_URL } from '../config';

/* SELECTORS */
export const getOrders = ({ orders }) => {
    return orders.data;
};

/* ACTIONS */

// action name creator
const reducerName = 'orders';
const createActionName = name => `app/${reducerName}/${name}`;

const START_REQUEST = createActionName('START_REQUEST');
const END_REQUEST = createActionName('END_REQUEST');
const ERROR_REQUEST = createActionName('ERROR_REQUEST');
const LOAD_ORDERS = createActionName('LOAD_ORDERS');

export const startRequest = payload => ({ payload, type: START_REQUEST });
export const endRequest = payload => ({ payload, type: END_REQUEST });
export const errorRequest = payload => ({ payload, type: ERROR_REQUEST });
export const loadOrders = payload => ({ payload, type: LOAD_ORDERS });

/* THUNKS */

export const loadOrdersRequest = () => {
  return async dispatch => {
    dispatch(startRequest({ name: 'LOAD_ORDERS' }));
    try {
      let res = await axios.get(`${API_URL}/orders`);
      dispatch(loadOrders(res.data));
      dispatch(endRequest({ name: 'LOAD_ORDERS' }));
    } catch (e) {
      dispatch(errorRequest({ name: 'LOAD_ORDERS', error: e.message }));
    }
  };
};

/* INITIAL STATE */

const initialState = {
  data: [],
  requests: [],
};

/* REDUCER */

export default function reducer(statePart = initialState, action = {}) {
  switch (action.type) {
    case LOAD_ORDERS:
      return { ...statePart, data: [...action.payload] };
    case START_REQUEST:
      return { ...statePart, requests: { ...statePart.requests, [action.payload.name]: { pending: true, error: null, success: false } } };
    case END_REQUEST:
      return { ...statePart, requests: { ...statePart.requests, [action.payload.name]: { pending: false, error: null, success: true } } };
    case ERROR_REQUEST:
      return { ...statePart, requests: { ...statePart.requests, [action.payload.name]: { pending: false, error: action.payload.error, success: false } } };
    default:
      return statePart;
  }
}