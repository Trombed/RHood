import { RECEIVE_VALUATION } from "../actions/valuation_action"



const valuationReducer = (state = [], action) => {
  Object.freeze(state) 
  
  switch (action.type) {
    case RECEIVE_VALUATION:
   
        return action.valuation
    default:
      return state 
  }
}

export default valuationReducer