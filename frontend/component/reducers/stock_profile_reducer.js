import { RECEIVE_STOCK_PROFILE } from '../actions/stock_action'


const stockProfileReducer = (state = {}, action) => {
    Object.freeze(state) 
 
    switch (action.type) {
    case RECEIVE_STOCK_PROFILE:
 
        return action.profile
    default:
      return state 
  }
}

export default stockProfileReducer