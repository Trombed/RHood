export const buyStock = (transaction) => {
  return (
    $.ajax({
      method: 'POST',
      url: 'api/transactions',
      data: {transaction},
      error: (err) => console.log(err),
    })
  );
};

export const sellStock = (transaction) => {
  return (
    $.ajax({
      method: 'DELETE',
      url: `api/transactions/${transaction.stock_id}`,
      data: {transaction},
      error: (err) => console.log(err),

    })
  );
};

export const allStock = (data) => {
  return (
    $.ajax({
      method: 'GET',
      url: 'api/transactions',
      error: (err) => console.log(err),
    })
  );
};

export const singleStock = (data) => {
  return (
    $.ajax({
      method: 'SHOW',
      url: `api/transactions/${data.stock_id}`,
      error: (err) => console.log(err),
    })
  );
};
