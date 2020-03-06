import APISearchUtil from "../util/search_util";
import {companyInfoUtil, oneDayStockInfoUtil} from  '../util/stock_api_util'

export const RECEIVE_SEARCH = 'RECEIVE_SEARCH'

const receiveSearch = (search) => ({
    type: RECEIVE_SEARCH,
    search
})


export const stock_search = (search) => (dispatch) => (
    APISearchUtil.stock_search(search)
        .then( (result) => dispatch(receiveSearch(result)))
)


// Above code request ajax call backend server for nav bar search


export const RECEIVE_STOCK_PROFILE = 'RECEIVE_STOCK_PROFILE'
export const RECEIVE_STOCK_PRICES = 'RECEIVE_STOCK_PRICES'

const receiveStockProfile = (profile) => ({
    type: RECEIVE_STOCK_PROFILE,
    profile
})

const receiveStockPrices = (prices) => ({
    type: RECEIVE_STOCK_PRICES,
    prices
})

export const companyInfo = profile => dispatch => (
    
    companyInfoUtil(profile)
        .then( (res) => dispatch(receiveStockProfile(res)))
)

export const oneDayStockInfo = prices => dispatch => (
    oneDayStockInfoUtil(prices)
        .then( (res) => dispatch(receiveStockPrices(res)))
)