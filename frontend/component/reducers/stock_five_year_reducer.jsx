import {RECEIVE_STOCK_FIVE_YEAR} from '../actions/stock_action';


const stockFiveYearReducer = (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_STOCK_FIVE_YEAR:

      return action.fiveYearPrice.historical;
    default:
      return state;
  }
};

export default stockFiveYearReducer;
