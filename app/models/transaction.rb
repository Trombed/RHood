# == Schema Information
#
# Table name: transactions
#
#  id          :bigint           not null, primary key
#  user_id     :integer          not null
#  stock_id    :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  shares      :integer          default(0)
#  price       :float            default(0.0)
#  total_price :float            default(0.0)
#

class Transaction < ApplicationRecord
    validates :user_id, :stock_id, :shares, presence: true

    belongs_to :user,
    foreign_key: :user_id,
    class_name: :User 

    belongs_to :stock,
    foreign_key: :stock_id,
    class_name: :Stock


    def change 
        
    end
end
