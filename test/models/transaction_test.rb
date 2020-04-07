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

require 'test_helper'

class TransactionTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
