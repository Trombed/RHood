
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

