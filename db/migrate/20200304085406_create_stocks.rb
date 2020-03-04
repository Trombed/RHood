class CreateStocks < ActiveRecord::Migration[5.2]
  def change
    create_table :stocks do |t|
      t.string :ticker_symbol, null: false
      t.string :name,  null: false
      t.timestamps
    end

    add_index :stocks, :ticker_symbol, unique: true
    add_index :stocks, :name, unique: true
  end
end
