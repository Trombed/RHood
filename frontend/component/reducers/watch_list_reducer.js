import { RECEIVE_WATCH_LIST } from "../actions/stock_action";

const watchListReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
      case RECEIVE_WATCH_LIST:
  
        return action.watchList

      default:
        return state;
    }
  }

export default watchListReducer