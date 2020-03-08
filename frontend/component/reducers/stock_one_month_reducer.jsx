import { RECEIVE_STOCK_ONE_MONTH, } from '../actions/stock_action'


const StockOneMonthPriceReducer = (state = {}, action) => {

    Object.freeze(state) 
 
    switch (action.type) {
    case RECEIVE_STOCK_ONE_MONTH:
        return action.oneMonthPrice.historical
    default:
      return state 
  }
}

export default StockOneMonthPriceReducer