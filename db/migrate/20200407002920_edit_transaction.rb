class EditTransaction < ActiveRecord::Migration[5.2]
  def change
    remove_column :transactions, :shares
    add_column :transactions, :shares, :integer, :default => 0
  end
end
