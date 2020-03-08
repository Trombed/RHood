import { RECEIVE_STOCK_THREE_MONTH } from '../actions/stock_action'


const StockThreeMonthReducer = (state = {}, action) => {

    Object.freeze(state) 
 
    switch (action.type) {
    case RECEIVE_STOCK_THREE_MONTH:
        return action.threeMonthPrice.historical
    default:
      return state 
  }
}

export default StockThreeMonthReducer