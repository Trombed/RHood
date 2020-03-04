# == Schema Information
#
# Table name: stocks
#
#  id            :bigint           not null, primary key
#  ticker_symbol :string           not null
#  name          :string           not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Stock < ApplicationRecord
    validates :ticker_symbol, presence: true
    validates :name, presence: true 
    
    has_many :watch_lists,
    primary_key: :id,
    foreign_key: :stock_id

    has_many :users,
    through: :watch_lists,
    source: :user
end
