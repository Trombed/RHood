@transactions.each do |transaction|
    json.set! transaction.id do
   
      json.extract! transaction, :stock_id, :total_price, :shares
      json.name transaction.stock.name
      json.ticker transaction.stock.ticker_symbol
    end
end
