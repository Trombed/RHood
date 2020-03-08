import { RECEIVE_STOCK_ONE_WEEK} from '../actions/stock_action'


const StockOneWeekPriceReducer = (state = {}, action) => {

    Object.freeze(state) 
 
    switch (action.type) {
    case RECEIVE_STOCK_ONE_WEEK:
        return action.oneWeekPrice
    default:
      return state 
  }
}

export default StockOneWeekPriceReducer