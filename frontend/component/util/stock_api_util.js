import moment from 'moment';

export const userValuation = () => (
  $.ajax({
    method: 'GET',
    url: '/api/portfolios',
  })
);


export const companyInfoUtil = (stockSymbol) => {
  return (
    $.ajax({
      method: 'GET',
      url: `https://cloud.iexapis.com/stable/stock/${stockSymbol}/company?token=${window.iexAPIKey}`,
    })
  );
};


export const oneDayStockInfoUtil = (symbol) => (

  $.ajax({
    method: 'GET',
    url: `https://cloud.iexapis.com/stable/stock/${symbol}/intraday-prices/?token=${window.iexAPIKey}`,

  })
);

export const fetchStockInfo = (id) => (
  $.ajax({
    method: 'GET',
    url: `/api/stocks/${id}`,
  })
);

export const oneWeekStockInfoUtil = (prices) => (
  $.ajax({
    method: 'GET',
    url: `https://financialmodelingprep.com/api/v3/historical-chart/1hour/${prices}`,
  })
);

export const fetchPortfolioPrices = (symbol) => {
  return (
    $.ajax({
      method: 'GET',
      url: `https://cloud.iexapis.com/stable/stock/market/batch?symbols=${symbol}&types=quote&token=${window.iexAPIKey}`,
    })
  );
};

export const oneYearStockInfoUtil = (symbol) => {
  return (

    $.ajax({
      method: 'GET',
      url: `https://cloud.iexapis.com/stable/stock/${symbol}/chart/1y?token=${window.iexAPIKey}`,
    })
  );
};
export const fiveYearStockInfoUtil = (symbol) => {
  const fiveYearPrior = moment();
  const dateNow = moment();
  fiveYearPrior.subtract(5, 'year');
  return (
    $.ajax({
      method: 'GET',
      url: `https://financialmodelingprep.com/api/v3/historical-price-full/${symbol}?from=${fiveYearPrior.format('YYYY-MM-DD')}&to=${dateNow.format('YYYY-MM-DD')}&apikey=${window.finAPIKey}`,
    })
  );
};


export const currentPriceUtil = (symbol) => (
  $.ajax({
    method: 'GET',
    url: `https://cloud.iexapis.com/stable/stock/${symbol}/price?token=${window.iexAPIKey}`,
  })
);


export const fetchWatchList = () => (
  $.ajax({
    method: 'GET',
    url: `/api/watch_lists`,
  })
);

export const addToWatchList = (stock) => (
  $.ajax({
    method: 'POST',
    url: `/api/watch_lists`,
    data: {stock},
  })
);

export const deleteFromWatchList = (watchListId) => (
  $.ajax({
    method: 'DELETE',
    url: `api/watch_lists/${watchListId}`,
  })
);

export const watchListCurPrice = (watchListStr) => {
  // if (watchListStr.length === 0) return;
  return (
    $.ajax({
      method: 'GET',
      url: `https://cloud.iexapis.com/stable/stock/market/batch?symbols=${watchListStr}&types=quote&token=${window.iexAPIKey}`,
    })
  );
};

export const fetchShares = (stockId) => (
  $.ajax({
    method: 'GET',
    url: `api/transactions/${stockId}`,
  })
);

