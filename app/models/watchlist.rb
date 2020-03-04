# == Schema Information
#
# Table name: watchlists
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  stock_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Watchlist < ApplicationRecord
    validates :stock_id, presence: true
    validates :user_id, presence: true

    belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id

    belongs_to :stock,
    primary_key: :id,
    foreign_key: :stock_id
end
