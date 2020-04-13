class Edit3Transaction < ActiveRecord::Migration[5.2]
  def change
 
    add_column :transactions, :total_price, :integer, :default => 0
  end
end
