import moment from "moment"

export const userValuation = () => (
    $.ajax({
        method: 'GET',
        url: "/api/portfolios",
    })
)


export const  companyInfoUtil = (stockSymbol) => (
        $.ajax({
            method: "GET",
            url: `https://financialmodelingprep.com/api/v3/company/profile/${stockSymbol}`
        })
)


export const oneDayStockInfoUtil =  (prices) => (

        $.ajax({
            method: "GET",
            url: `https://financialmodelingprep.com/api/v3/historical-chart/1min/${prices}`
        })
    )

export const fetchStockInfo = (id) => (
    $.ajax({
        method: 'GET',
        url: `/api/stocks/${id}`
    })
)

export const oneWeekStockInfoUtil = (prices) => (
    $.ajax({
        method: "GET",
        url: `https://financialmodelingprep.com/api/v3/historical-chart/1hour/${prices}`
    })
)

export const fetchPortfolioPrices = (symbol) => {
 
    return (
    $.ajax({
        method: "GET",
        url: `https://financialmodelingprep.com/api/v3/stock/real-time-price/${symbol}`
    })
    )
}


 export const fiveYearStockInfoUtil = (symbol) => {
    let fiveYearPrior = moment();
    let dateNow = moment();
    fiveYearPrior.subtract(5, 'year');
    return (
     $.ajax({
         method: 'GET',
         url: `https://financialmodelingprep.com/api/v3/historical-price-full/${symbol}?from=${fiveYearPrior.format("YYYY-MM-DD")}&to=${dateNow.format("YYYY-MM-DD")}`
     })
    )
 }


 export const currentPriceUtil = (symbol) =>  (
     $.ajax({
         method: 'GET',
         url: `https://financialmodelingprep.com/api/v3/stock/real-time-price/${symbol}`
     })
 )


 export const fetchWatchList = () => (
     $.ajax({
         method: "GET",
         url: `/api/watch_lists`
     })
 )

 export const addToWatchList = (stock) => (
     $.ajax({
        method: "POST",
        url: `/api/watch_lists`,
        data: { stock }
     })
 )

 export const deleteFromWatchList = (watchListId) => (
    $.ajax({
       method: "DELETE",
       url: `api/watch_lists/${watchListId}`,
    })
)

export const watchListCurPrice = (watchListStr) => {
    if (watchListStr.length === 0) return null;
    return (
        $.ajax({
            method: "GET",
            url: `https://financialmodelingprep.com/api/v3/stock/real-time-price/${watchListStr}`
        })
    )
}

export const fetchShares = (stockId) => (
    $.ajax({
        method: "GET",
        url: `api/transactions/${stockId}`
    })
)

