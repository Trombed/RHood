import { RECEIVE_STOCK_ONE_YEAR } from '../actions/stock_action'


const StockThreeMonthReducer = (state = {}, action) => {

    Object.freeze(state) 
 
    switch (action.type) {
    case RECEIVE_STOCK_ONE_YEAR:
        return action.oneYearPrice.historical
    default:
      return state 
  }
}

export default StockThreeMonthReducer