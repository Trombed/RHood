import {RECEIVE_PORTFOLIO_PRICES } from "../actions/stock_action";



const portfolioPriceReducer = (state = [], action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state)
    switch (action.type) {
      case RECEIVE_PORTFOLIO_PRICES:
        return action.prices

      default:
        return state;
    }
  }

export default portfolioPriceReducer