import { RECEIVE_SEARCH } from "../actions/stock_action";

const _nullResult = {
    search: null,
}

export const searchReducer = (state = _nullResult, action) => {
    Object.freeze(state);
    switch (action.type) {
      case RECEIVE_SEARCH:
  
        return action.search

      default:
        return state;
    }
  }