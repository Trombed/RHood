import { RECEIVE_WATCH_PRICES } from "../actions/watch_list_actions";



const watchListPriceReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state)
    switch (action.type) {
      case RECEIVE_WATCH_PRICES:
          let priceArr = action.watchList.companiesPriceList.map(el => el.price.toFixed(2))
        return priceArr
      default:
        return state;
    }
  }

export default watchListPriceReducer