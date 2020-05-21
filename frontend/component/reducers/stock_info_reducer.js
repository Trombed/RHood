import {RECEIVE_STOCK_INFO } from '../actions/stock_action'


export const stockInfoReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
      case RECEIVE_STOCK_INFO:
       
        return action.info

      default:
        return state;
    }
  }

  export default stockInfoReducer