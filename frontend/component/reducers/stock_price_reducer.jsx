import { RECEIVE_STOCK_PRICES} from '../actions/stock_action'


const stockPriceReducer = (state = {}, action) => {

    Object.freeze(state) 
 
    switch (action.type) {
    case RECEIVE_STOCK_PRICES:
        const reverseArr = action.prices.reverse()
        return reverseArr
    default:
      return state 
  }
}

export default stockPriceReducer