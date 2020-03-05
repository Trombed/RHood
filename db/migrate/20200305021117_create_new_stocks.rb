class CreateNewStocks < ActiveRecord::Migration[5.2]
  def change
    create_table :stocks do |t|
      t.string :ticker_symbol, null: false
      t.string :name,  null: false
      t.timestamps
    end
  end
end
