import APISearchUtil from "../util/search_util";
import {companyInfoUtil, oneDayStockInfoUtil, fetchStockInfo, oneWeekStockInfoUtil, oneMonthStockInfoUtil, threeMonthStockInfoUtil, receiveStockOneYear, fiveYearStockInfoUtil, oneYearStockInfoUtil, currentPriceUtil} from  '../util/stock_api_util'

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
export const RECEIVE_STOCK_INFO = 'RECEIVE_STOCK_INFO'
export const RECEIVE_STOCK_ONE_WEEK = 'RECEIVE_STOCK_ONE_WEEK'
export const RECEIVE_STOCK_ONE_MONTH = 'RECEIVE_STOCK_ONE_MONTH'
export const RECEIVE_STOCK_THREE_MONTH = 'RECEIVE_STOCK_THREE_MONTH'
export const RECEIVE_STOCK_ONE_YEAR = 'RECEIVE_STOCK_ONE_YEAR'
export const RECEIVE_STOCK_FIVE_YEAR = 'RECEIVE_STOCK_FIVE_YEAR'
export const RECEIVE_CURRENT_PRICE = 'RECEIVE_CURRENT_PRICE'


const receiveStockProfile = (profile) => ({
    type: RECEIVE_STOCK_PROFILE,
    profile
})

const receiveStockPrices = (prices) => ({
    type: RECEIVE_STOCK_PRICES,
    prices
})

const receiveStockInfo = (info) => ({
    type: RECEIVE_STOCK_INFO,
    info
})

const receiveStockOneWeek = (oneWeekPrice) => ({
    type: RECEIVE_STOCK_ONE_WEEK,
    oneWeekPrice
})

const receiveStockOneMonth = (oneMonthPrice) => ({
    type: RECEIVE_STOCK_ONE_MONTH,
    oneMonthPrice
})

const receiveCurrentPrice = (currentPrice) => ({
    type: RECEIVE_CURRENT_PRICE,
    currentPrice
})



export const receiveThreeMonthStock = (threeMonthPrice) => ({
    type: RECEIVE_STOCK_THREE_MONTH,
    threeMonthPrice 
})

export const receiveOneYearStock = (oneYearPrice) => ({
    type: RECEIVE_STOCK_ONE_YEAR,
    oneYearPrice
})

export const receiveFiveYearStock = (fiveYearPrice) => ({
    type: RECEIVE_STOCK_FIVE_YEAR,
    fiveYearPrice
})

export const currentPriceInfo = price => dispatch => (
    currentPriceUtil(price)
    .then( (res) => dispatch(receiveCurrentPrice(res)))
)

export const threeMonthStockInfo = prices => dispatch => (
    threeMonthStockInfoUtil(prices)
        .then( (res) => dispatch(receiveThreeMonthStock(res)))
)

export const oneYearStockInfo = prices => dispatch => ( 
    oneYearStockInfoUtil(prices) 
        .then( (res) => dispatch(receiveOneYearStock(res)))    
)

export const fiveYearStockInfo = prices => dispatch => (
    fiveYearStockInfoUtil(prices)
        .then( (res) => dispatch(receiveFiveYearStock(res)))
)

export const oneMonthStockInfo = prices => dispatch => (
    oneMonthStockInfoUtil(prices)
        .then((res) => dispatch(receiveStockOneMonth(res)))
)

export const companyInfo = profile => dispatch => (
    companyInfoUtil(profile)
        .then( (res) => dispatch(receiveStockProfile(res)))
)

export const oneDayStockInfo = prices => dispatch => (
    oneDayStockInfoUtil(prices)
        .then( (res) => dispatch(receiveStockPrices(res)))
)
export const fetchStockFromDB = id => dispatch => (
    fetchStockInfo(id)
        .then( (res) => dispatch(receiveStockInfo(res)))
)

export const oneWeekStockInfo = prices => dispatch => (
    oneWeekStockInfoUtil(prices)
        .then( (res) => dispatch(receiveStockOneWeek(res)))
)



