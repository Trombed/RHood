class Edit2Transaction < ActiveRecord::Migration[5.2]
  def change
    add_column :transactions, :price, :float, :default => 0
  end
end
