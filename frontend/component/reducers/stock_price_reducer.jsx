import { RECEIVE_STOCK_PRICES, RECEIVE_ONE_DAY_PRICES} from '../actions/stock_action'
import moment from "moment"


const stockPriceReducer = (state = {}, action) => {

    Object.freeze(state) 
 
    switch (action.type) {
    case RECEIVE_STOCK_PRICES:
        const reverseArr = action.prices.reverse()
        return reverseArr
    case RECEIVE_ONE_DAY_PRICES:
        action.prices = action.prices.filter( el => el.open !== null)
        // action.prices.forEach( (el, idx) => {
        // if (el.open === null) {
        //     if (idx === action.prices.length-1) {
        //             action.prices[idx].open = action.prices[idx-1].open
        //             if (action.prices[idx].close === null) action.prices[idx].close = action.prices[idx].open
        //         }
        //         else {
        //             let next = idx+1
        //             while( action.prices[next].open === null || next >= action.prices.length || action.prices[next] !== undefined) {
        //                 next += 1;
        //             } 
        //             action.prices[idx].open = action.prices[next].open
        //         }
        //     }
        //     if (action.prices[idx].close === null) action.prices[idx].close = action.prices[idx].open

        // })
        // access.prices.forEach( el => console.log(el.open))

        // action.prices.forEach ( (el, idx) => {
        //     if (el['open'] === null) {
        //         action.prices[idx].open = action.prices[idx-1].open
        //     } 
        //     if (el['close'] === null) {
        //         action.prices[idx].close = action.prices[idx-1].close
        //     }
            
        // })
        debugger
        return action.prices
        // const oneDayData = action.prices.reverse()
        // let oneDayPrior = moment()
        // oneDayPrior.subtract(1,"day")
        // oneDayPrior = oneDayPrior.format("YYYY-MM-DD")
        // let result = oneDayData.filter( (dates) => dates.date >= oneDayPrior) 
        // return result
    default:
      return state 
  }
}

export default stockPriceReducer






