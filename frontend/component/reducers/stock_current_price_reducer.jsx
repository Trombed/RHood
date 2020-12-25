import {RECEIVE_CURRENT_PRICE} from '../actions/stock_action';


const stockCurrentPriceReducer = (state = 0, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CURRENT_PRICE:

      return action.currentPrice;
    default:
      return state;
  }
};

export default stockCurrentPriceReducer;
