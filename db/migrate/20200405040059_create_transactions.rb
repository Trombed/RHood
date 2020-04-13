class CreateTransactions < ActiveRecord::Migration[5.2]
  def change
    create_table :transactions do |t|
      t.integer :user_id, null: false
      t.integer :stock_id, null: false 
      t.integer :shares_bought, null: false
      t.float :shares_buy_price, null: false 
      t.float :shares_sell_price
      t.boolean :is_complete, :default => false
      t.integer :shares
      t.timestamps
    end

    
  end
end
