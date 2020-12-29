import axios from 'axios';
import { API_URL } from '../config';

/* SELECTORS */
export const getOrders = ({ orders }) => {
  return orders;
};

/* ACTIONS */

// action name creator
const reducerName = 'orders';
const createActionName = (name) => `app/${reducerName}/${name}`;

const LOAD_ORDERS = createActionName('LOAD_ORDERS');
const ADD_ORDER = createActionName('ADD_ORDER');
const INCREASE_AMOUNT = createActionName('INCREASE_AMOUNT');
const DECREASE_AMOUNT = createActionName('DECREASE_AMOUNT');
const REMOVE_ORDER = createActionName('REMOVE_ORDER');
const UPDATE_COMMENT = createActionName('UPDATE_COMMENT');
const SEND_ORDER = createActionName('SEND_ORDER');

export const loadOrders = (payload) => ({ payload, type: LOAD_ORDERS });
export const addOrder = (payload) => ({ payload, type: ADD_ORDER });
export const increaseAmount = (payload) => ({ payload, type: INCREASE_AMOUNT });
export const decreaseAmount = (payload) => ({ payload, type: DECREASE_AMOUNT });
export const removeOrder = (payload) => ({ payload, type: REMOVE_ORDER });
export const updateComment = (productId, comment) => ({
  productId,
  comment,
  type: UPDATE_COMMENT,
});
export const sendOrder = (payload) => ({ payload, type: SEND_ORDER });

export const getOrder = ({ orders }, orderId) => {
  const filtered = orders.filter((order) => order.productId === orderId);
  return filtered.length ? filtered[0] : { error: true };
};

/* THUNKS */

export const loadOrdersRequest = () => {
  return async (dispatch) => {
    let res = await axios.get(`${API_URL}/orders`);
    dispatch(loadOrders(res.data));
  };
};

export const sendOrderRequest = (orderSummary) => {
  return async (dispatch) => {
    let res = await axios.post(`${API_URL}/orders`, orderSummary);
    dispatch(sendOrder());
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
    case ADD_ORDER: {
      let newArray = statePart.slice();
      newArray.push(action.payload);
      return newArray;
    }
    case INCREASE_AMOUNT: {
      return statePart.map((item) => {
        if (item.productId !== action.payload) {
          return item;
        }
        return {
          ...item,
          amountAll: item.amountAll + 1,
        };
      });
    }
    case DECREASE_AMOUNT: {
      return statePart.map((item) => {
        if (item.productId !== action.payload) {
          return item;
        }
        const decreaseItem =
          item.amountAll > 1 ? item.amountAll - 1 : item.amountAll;
        return {
          ...item,
          amountAll: decreaseItem,
        };
      });
    }
    case REMOVE_ORDER: {
      return statePart.filter((item) => item.productId !== action.payload);
    }
    case UPDATE_COMMENT: {
      return statePart.map((item) => {
        if (item.productId !== action.productId) {
          return item;
        }
        return {
          ...item,
          comment: action.comment,
        };
      });
    }
    case SEND_ORDER: {
      return statePart;
    }
    default:
      return statePart;
  }
}
