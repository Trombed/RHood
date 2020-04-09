import { buyStock, allStock, sellStock } from "../util/transaction_util"


export const RECEIVE_BUY_TRANSACTION = 'RECEIVE_BUY_TRANSACTION'
export const RECEIVE_SELL_TRANSACTION = 'RECEIVE_SELL_TRANSACTION'
export const RECEIVE_ALL_STOCK = "RECEIVE_ALL_STOCK"


const receiveBuyTransaction = (data) => ({
    type: RECEIVE_BUY_TRANSACTION,
    data
})

const receiveSellTransaction = (data) => ({
    type: RECEIVE_SELL_TRANSACTION,
    data
})

const receiveAllStock = (data) => ({
    type: RECEIVE_ALL_STOCK,
    data
})


export const buyTransaction = (data) => (dispatch) => (
    buyStock(data)
        .then(res => dispatch(receiveBuyTransaction(res)))
)

export const sellTransaction = (data) => (dispatch) => (
    sellStock(data)
        .then(res => dispatch(receiveSellTransaction(res)))
)

export const allTransaction = (data) => (dispatch) => (
    allStock(data)
        .then(res => dispatch(receiveAllStock(res)))
)
