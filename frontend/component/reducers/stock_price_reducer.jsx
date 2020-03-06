import { RECEIVE_STOCK_PRICES} from '../actions/stock_action'


const stockPriceReducer = (state = {}, action) => {

    Object.freeze(state) 
 
    switch (action.type) {
    case RECEIVE_STOCK_PRICES:

        return action.prices
    default:
      return state 
  }
}

export default stockPriceReducer