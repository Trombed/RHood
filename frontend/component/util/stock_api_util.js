import moment from "moment"


export const  companyInfoUtil = (stockSymbol) => (
        $.ajax({
            method: "GET",
            // url: `https://sandbox.iexapis.com/stable/stock/${stockSymbol}/company?token=Tpk_32c4503949d84fb08474ad85f5ac3329`

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
    console.log(symbol)
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

export const watchListCurPrice = (watchListStr) => (
    $.ajax({
        method: "GET",
        url: `https://financialmodelingprep.com/api/v3/stock/real-time-price/${watchListStr}`
    })
    
)