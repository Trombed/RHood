import {userValuation} from '../util/stock_api_util'

export const RECEIVE_VALUATION = "RECEIVE_VALUATION" 

const receiveValuation = (valuation) => ({
    type: RECEIVE_VALUATION,
    valuation
})

export const getValuation = () => dispatch => (
    userValuation()
        .then( (res) => dispatch(receiveValuation(res)))
)