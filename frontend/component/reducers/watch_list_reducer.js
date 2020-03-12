import { RECEIVE_WATCH_LIST, RECEIVE_WATCH_ITEM, REMOVE_WATCH_ITEM } from "../actions/watch_list_actions";



const watchListReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state)
    switch (action.type) {
      case RECEIVE_WATCH_LIST:
        return action.watchList
      case RECEIVE_WATCH_ITEM:
        nextState[action.stock.id] = action.stock
        return nextState
      case REMOVE_WATCH_ITEM:
        delete nextState[action.stockId]
        return nextState
      default:
        return state;
    }
  }

export default watchListReducer