class CreatePortfolios < ActiveRecord::Migration[5.2]
  def change
    create_table :portfolios do |t|
      t.integer :user_id, :null => false
      t.float :valuation, :null => false
      t.timestamps
    end
  end
end
