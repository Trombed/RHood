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


export const oneMonthStockInfoUtil = (symbol) => {
   let oneMonthPrior = moment();
   let dateNow = moment();
   oneMonthPrior.subtract(1, 'month');
   return (
    $.ajax({
        method: 'GET',
        url: `https://financialmodelingprep.com/api/v3/historical-price-full/${symbol}?from=${oneMonthPrior.format("YYYY-MM-DD")}&to=${dateNow.format("YYYY-MM-DD")}`
    })
   )
}


export const threeMonthStockInfoUtil = (symbol) => {
    let threeMonthPrior = moment();
    let dateNow = moment();
    threeMonthPrior.subtract(3, 'month');
    return (
     $.ajax({
         method: 'GET',
         url: `https://financialmodelingprep.com/api/v3/historical-price-full/${symbol}?from=${threeMonthPrior.format("YYYY-MM-DD")}&to=${dateNow.format("YYYY-MM-DD")}`
     })
    )
 }

 export const oneYearStockInfoUtil = (symbol) => {
    let oneYearPrior = moment();
    let dateNow = moment();
    oneYearPrior.subtract(1, 'year');
    return (
     $.ajax({
         method: 'GET',
         url: `https://financialmodelingprep.com/api/v3/historical-price-full/${symbol}?from=${oneYearPrior.format("YYYY-MM-DD")}&to=${dateNow.format("YYYY-MM-DD")}`
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