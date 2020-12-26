import {RECEIVE_SEARCH, DELETE_SEARCH} from '../actions/stock_action';


export const searchReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SEARCH:

      return action.search;
    case DELETE_SEARCH:
      return [];
    default:
      return state;
  }
};
