import {
  RECEIVE_STOCK_PRICES,
  RECEIVE_ONE_DAY_PRICES} from '../actions/stock_action';


const stockPriceReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_STOCK_PRICES:
      const reverseArr = action.prices.reverse();
      return reverseArr;
    case RECEIVE_ONE_DAY_PRICES:
      action.prices = action.prices.filter( (el) => el.open !== null);


      return action.prices;

    default:
      return state;
  }
};

export default stockPriceReducer;


