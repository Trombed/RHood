class Edit4Transaction < ActiveRecord::Migration[5.2]
  def change
    remove_column :transactions, :total_price
    add_column :transactions, :total_price, :float, :default => 0
  end
end
