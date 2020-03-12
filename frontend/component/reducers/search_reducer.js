import { RECEIVE_SEARCH } from "../actions/stock_action";



export const searchReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
      case RECEIVE_SEARCH:
  
        return action.search

      default:
        return state;
    }
  }