import {RECEIVE_STOCK_ONE_WEEK} from '../actions/stock_action';
import moment from 'moment';


const StockOneWeekPriceReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_STOCK_ONE_WEEK:
      const fiveDayData = action.oneWeekPrice.reverse();
      let fiveDayPrior = moment();
      fiveDayPrior.subtract(5, 'day');
      fiveDayPrior = fiveDayPrior.format('YYYY-MM-DD');
      const result = fiveDayData.filter( (dates) => dates.date >= fiveDayPrior);
      return result;


    default:
      return state;
  }
};

export default StockOneWeekPriceReducer;
