import {RECEIVE_WATCH_PRICES} from '../actions/watch_list_actions';

const watchListPriceReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_WATCH_PRICES:
      const priceArr = [];
      for (const key in action.watchList) {
        priceArr.push(action.watchList[key].quote.latestPrice.toFixed(2));
      }
      return priceArr;
    default:
      return state;
  }
};

export default watchListPriceReducer;
