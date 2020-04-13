class EditTransaction < ActiveRecord::Migration[5.2]
  def change
    remove_column :transactions, :shares
    remove_column :transactions, :shares_bought
    remove_column :transactions, :shares_buy_price
    remove_column :transactions, :shares_sell_price
    remove_column :transactions, :is_complete
    add_column :transactions, :shares, :integer, :default => 0
  end
end
