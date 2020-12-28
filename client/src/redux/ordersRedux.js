import axios from "axios";
import { API_URL } from "../config";

/* SELECTORS */
export const getOrders = ({ orders }) => {
  return orders;
};

/* ACTIONS */

// action name creator
const reducerName = "orders";
const createActionName = (name) => `app/${reducerName}/${name}`;

const START_REQUEST = createActionName("START_REQUEST");
const END_REQUEST = createActionName("END_REQUEST");
const ERROR_REQUEST = createActionName("ERROR_REQUEST");
const LOAD_ORDERS = createActionName("LOAD_ORDERS");
const ADD_ORDER = createActionName("ADD_ORDER");
const INCREASE_AMOUNT = createActionName("INCREASE_AMOUNT");
const DECREASE_AMOUNT = createActionName("DECREASE_AMOUNT");

export const startRequest = (payload) => ({ payload, type: START_REQUEST });
export const endRequest = (payload) => ({ payload, type: END_REQUEST });
export const errorRequest = (payload) => ({ payload, type: ERROR_REQUEST });
export const loadOrders = (payload) => ({ payload, type: LOAD_ORDERS });
export const addOrder = (payload) => ({ payload, type: ADD_ORDER });
export const increaseAmount = (payload) => ({ payload, type: INCREASE_AMOUNT });
export const decreaseAmount = (payload) => ({ payload, type: DECREASE_AMOUNT });

export const getOrder = ({ orders }, orderId) => {
  const filtered = orders.filter((order) => order.id === orderId);
  return filtered.length ? filtered[0] : { error: true };
};

/* THUNKS */

export const loadOrdersRequest = () => {
  return async (dispatch) => {
    dispatch(startRequest({ name: "LOAD_ORDERS" }));
    try {
      let res = await axios.get(`${API_URL}/orders`);
      dispatch(loadOrders(res.data));
      dispatch(endRequest({ name: "LOAD_ORDERS" }));
    } catch (e) {
      dispatch(errorRequest({ name: "LOAD_ORDERS", error: e.message }));
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
      return {
        ...statePart,
        requests: {
          ...statePart.requests,
          [action.payload.name]: { pending: true, error: null, success: false },
        },
      };
    case END_REQUEST:
      return {
        ...statePart,
        requests: {
          ...statePart.requests,
          [action.payload.name]: { pending: false, error: null, success: true },
        },
      };
    case ERROR_REQUEST:
      return {
        ...statePart,
        requests: {
          ...statePart.requests,
          [action.payload.name]: {
            pending: false,
            error: action.payload.error,
            success: false,
          },
        },
      };
    case ADD_ORDER: {
      statePart.push(action.payload);
      return statePart;
    }
    // case INCREASE_AMOUNT: {
    //   return statePart.amountAll + 1;
    // }
    // case DECREASE_AMOUNT: {
    //   if (statePart.amountAll > 1) {
    //     return statePart.amountAll - 1;
    //   } else {
    //     return (statePart.amountAll = 1);
    //   }
    // }
    default:
      return statePart;
  }
}
