import axios from "axios";
import { API_URL } from "../config";

/* selectors */
export const getAll = ({ posts }) => posts.data;

/* action name creator */
const reducerName = "posts";
const createActionName = (name) => `app/${reducerName}/${name}`;

/* action types */
const FETCH_START = createActionName("FETCH_START");
const FETCH_SUCCESS = createActionName("FETCH_SUCCESS");
const FETCH_ERROR = createActionName("FETCH_ERROR");
const START_REQUEST = createActionName("START_REQUEST");
const END_REQUEST = createActionName("END_REQUEST");
const ERROR_REQUEST = createActionName("ERROR_REQUEST");
const LOAD_MINERALS = createActionName("LOAD_MINERALS");
const ADD_POST = createActionName("ADD_POST");

export const startRequest = (payload) => ({ payload, type: START_REQUEST });
export const endRequest = (payload) => ({ payload, type: END_REQUEST });
export const errorRequest = (payload) => ({ payload, type: ERROR_REQUEST });
/* action creators */
export const getPosts = ({ posts }) => {
  return posts;
};

export const getPost = ({ posts }, postTitle) => {
  const filtered = posts.filter((post) => post.title == postTitle);
  return filtered.length ? filtered[0] : { error: true };
};

export const fetchStarted = (payload) => ({ payload, type: FETCH_START });
export const fetchSuccess = (payload) => ({ payload, type: FETCH_SUCCESS });
export const fetchError = (payload) => ({ payload, type: FETCH_ERROR });
export const loadMinerals = (payload) => ({ payload, type: LOAD_MINERALS });
export const addPost = (payload) => ({ payload, type: ADD_POST });

/* thunk creators */

export const loadMineralsRequest = () => {
  return async (dispatch) => {
    dispatch(startRequest({ name: "LOAD_MINERALS" }));
    try {
      let res = await axios.get(`${API_URL}/minerals`);
      dispatch(loadMinerals(res.data));
      dispatch(endRequest({ name: "LOAD_MINERALS" }));
    } catch (e) {
      dispatch(errorRequest({ name: "LOAD_MINERALS", error: e.message }));
    }
  };
};

/* reducer */
export const reducer = (statePart = [], action = {}) => {
  switch (action.type) {
    case LOAD_MINERALS: {
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
    case ADD_POST: {
      statePart.push(action.payload);
      return statePart;
    }
    default:
      return statePart;
  }
};
