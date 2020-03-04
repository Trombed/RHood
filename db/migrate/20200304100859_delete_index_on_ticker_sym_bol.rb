class DeleteIndexOnTickerSymBol < ActiveRecord::Migration[5.2]
  def change
    remove_index :stocks, name: "index_stocks_on_ticker_symbol"
  end
end
