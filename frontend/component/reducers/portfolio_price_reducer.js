import {RECEIVE_PORTFOLIO_PRICES } from "../actions/stock_action";



const portfolioPriceReducer = (state = [], action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state)
    switch (action.type) {
      case RECEIVE_PORTFOLIO_PRICES:
          let priceHash = {'companiesPriceList': []}
        
          for (let key in action.prices) {
    
            priceHash['companiesPriceList'].push(
              {"symbol": key,
            "price": action.prices[key].quote.latestPrice}

            )
          }

   
          return priceHash
        // return action.prices

      default:
        return state;
    }
  }

export default portfolioPriceReducer