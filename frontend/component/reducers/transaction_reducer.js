import { RECEIVE_ALL_STOCK, RECEIVE_BUY_TRANSACTION, RECEIVE_SINGLE_STOCK, RECEIVE_SELL_TRANSACTION} from '../actions/transactions_action'


const transactionsReducer = (state = {}, action) => {
  Object.freeze(state) 
  let nextState = Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_ALL_STOCK:
    
        return action.data
    case RECEIVE_BUY_TRANSACTION:
        return action.data
    case RECEIVE_SINGLE_STOCK:
        return action.data
    case RECEIVE_SELL_TRANSACTION:
        return action.data
    default:
         return state 
  }
}

export default transactionsReducer