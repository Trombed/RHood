import APISearchUtil from "../util/search_util";
import {companyInfoUtil, oneDayStockInfoUtil, fetchStockInfo, oneWeekStockInfoUtil, fiveYearStockInfoUtil, fetchPortfolioPrices, currentPriceUtil, fetchShares, oneYearStockInfoUtil} from  '../util/stock_api_util'

export const RECEIVE_STOCK_PROFILE = 'RECEIVE_STOCK_PROFILE'
export const RECEIVE_STOCK_PRICES = 'RECEIVE_STOCK_PRICES'
export const RECEIVE_STOCK_INFO = 'RECEIVE_STOCK_INFO'
export const RECEIVE_STOCK_ONE_WEEK = 'RECEIVE_STOCK_ONE_WEEK'
export const RECEIVE_STOCK_ONE_YEAR = 'RECEIVE_STOCK_ONE_YEAR'
export const RECEIVE_STOCK_FIVE_YEAR = 'RECEIVE_STOCK_FIVE_YEAR'
export const RECEIVE_CURRENT_PRICE = 'RECEIVE_CURRENT_PRICE'
export const RECEIVE_SEARCH = 'RECEIVE_SEARCH'
export const DELETE_SEARCH = "DELETE_SEARCH"
export const RECEIVE_PORTFOLIO_PRICES = 'RECEIVE_PORTFOLIO_PRICES'
export const RECEIVE_STOCK_SHARES = 'RECEIVE_STOCK_SHARES'
export const RECEIVE_ONE_DAY_PRICES = 'RECEIVE_ONE_DAY_PRICES'


const receiveStockShares = (stockId) => ({
    type: RECEIVE_STOCK_SHARES,
    stockId
})

const receivePortfolioPrice = (prices) => ({
    type: RECEIVE_PORTFOLIO_PRICES,
    prices
})

const receiveSearch = (search) => ({
    type: RECEIVE_SEARCH,
    search
})

const deleteSearch = () => ({
    type: DELETE_SEARCH
})


const receiveStockProfile = (profile) => ({
    type: RECEIVE_STOCK_PROFILE,
    profile
})

const receiveStockPrices = (prices) => ({
    // type: RECEIVE_STOCK_PRICES,
    type: RECEIVE_ONE_DAY_PRICES,
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


const receiveCurrentPrice = (currentPrice) => ({
    type: RECEIVE_CURRENT_PRICE,
    currentPrice
})

const receiveOneYearStock = (oneYearPrice) => ({
    type: RECEIVE_STOCK_ONE_YEAR,
    oneYearPrice
})

const receiveFiveYearStock = (fiveYearPrice) => ({
    type: RECEIVE_STOCK_FIVE_YEAR,
    fiveYearPrice
})


export const stock_search = (search) => (dispatch) => (
    APISearchUtil.stock_search(search)
        .then( (result) => dispatch(receiveSearch(result)))
)
 
export const delete_search = () => dispatch => (
        dispatch(deleteSearch())
)



// export const currentPriceInfo = price => dispatch => (
//     currentPriceUtil(price)
//     .then( (res) => dispatch(receiveCurrentPrice(res)))
// )

export const currentPriceInfo = price => dispatch => (
    dispatch(receiveCurrentPrice(price))
)



export const fiveYearStockInfo = prices => dispatch => (
    fiveYearStockInfoUtil(prices)
        .then( (res) => dispatch(receiveFiveYearStock(res)))
)

export const oneYearStockInfo = prices => dispatch => (
    oneYearStockInfoUtil(prices)
        .then( (res) => {
            dispatch(receiveOneYearStock(res))
        }, error => console.log(error)
        )

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


export const currentPortfolioPrices = symbols => dispatch => (
    fetchPortfolioPrices(symbols)
        .then( (res) => dispatch(receivePortfolioPrice(res)))
)

export const currentShares = stockId => dispatch => (
    fetchShares(stockId)
        .then( (res) => dispatch(receiveStockShares(res)))
)