class Edit3Transaction < ActiveRecord::Migration[5.2]
  def change
    remove_column :transactions, :average_price
    add_column :transactions, :total_price, :integer, :default => 0
  end
end
