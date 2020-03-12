import { fetchWatchList, addToWatchList, deleteFromWatchList, watchListCurPrice } from "../util/stock_api_util";


export const RECEIVE_WATCH_LIST = 'RECEIVE_WATCH_LIST'
export const RECEIVE_WATCH_ITEM = 'RECEIVE_WATCH_ITEM'
export const REMOVE_WATCH_ITEM = 'REMOVE_WATCH_ITEM'
export const RECEIVE_WATCH_PRICES = 'RECEIVE_WATCH_PRICES'

const receiveWatchPrices = (watchList) => ({
    type: RECEIVE_WATCH_PRICES,
    watchList
})

const receiveWatchList = (watchList) => ({
    type: RECEIVE_WATCH_LIST,
    watchList
})

const receiveWatchItem = (stock ) => ({
    type: RECEIVE_WATCH_ITEM,
    stock
})

const removeWatchItem = (stockId) => ({
    type: REMOVE_WATCH_ITEM,
    stockId
})

export const watchListCurPrices = watchList => dispatch => {
    watchListCurPrice(watchList)
        .then( (res) => dispatch(receiveWatchPrices(res)))
    
}

export const watchListInfo = watchList => dispatch => (
    fetchWatchList(watchList)
        .then( (res) => dispatch(receiveWatchList(res)))
)

export const addStockToWatchList = stock => dispatch => (
    addToWatchList(stock)
        .then( (res) => dispatch(receiveWatchItem(res)))
)

export const removeStockfromWatchList = stock => dispatch => (
    deleteFromWatchList(stock)
        .then( () => dispatch(removeWatchItem(stock)))
)

