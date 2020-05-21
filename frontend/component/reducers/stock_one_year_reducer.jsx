import { RECEIVE_STOCK_ONE_YEAR} from '../actions/stock_action'


const stockOneYearReducer = (state = [], action) => {

    Object.freeze(state) 
 
    switch (action.type) {
    case RECEIVE_STOCK_ONE_YEAR:
        debugger
        return action.oneYearPrice
    default:
      return state 
  }
}

export default stockOneYearReducer