# == Schema Information
#
# Table name: portfolios
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  valuation  :float            not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Portfolio < ApplicationRecord
    validates :user_id, presence: true
    validates :valuation, presence: true 

    belongs_to :user,
    foreign_key: :user_id,
    class_name: :user
end
