import {RECEIVE_STOCK_SHARES} from '../actions/stock_action';


const sharesReducer = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_STOCK_SHARES:
      return action.stockId;

    default:
      return state;
  }
};

export default sharesReducer;
