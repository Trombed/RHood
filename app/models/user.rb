# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  email           :string           not null
#  funds           :float            default(1000000.0)
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
require 'open-uri'
require 'byebug'
require 'pry'

class User < ApplicationRecord

    validates :username, :password_digest, :session_token, :email, presence: true
    # validates :username, :email, uniqueness: true 
    validates :password, length: { minimum: 6 }, allow_nil: true 
    validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
    after_initialize :ensure_session_token
    
    attr_reader :password 

    has_many :watch_lists,
    foreign_key: :user_id,
    class_name: :Watchlist

    has_many :stocks,
    through: :watch_lists,
    source: :stock

    has_many :transactions,
    foreign_key: :user_id,
    class_name: :Transaction

    has_many :stock_transactions,
    through: :transactions,
    source: :stock

    has_many :portfolio,
    foreign_key: :user_id,
    class_name: :Portfolio


    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)
        user && user.is_password?(password) ? user : nil
      end
    
      def password=(password) 
        @password = password
        self.password_digest = BCrypt::Password.create(password)
      end
    
      def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
      end
    
      def reset_session_token!
        self.session_token = SecureRandom.urlsafe_base64(16)
        self.save!
        self.session_token
      end
    
      def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64(16)
      end


      def update_portfolio 
        return self.funds if self.transactions.empty?
        new_valuation = 0
        stock_to_find = []
        shares = {}
        shares.default = 0
        self.transactions.each do |transaction|
          shares[transaction.stock.ticker_symbol] += transaction.shares
          stock_to_find.push(transaction.stock.ticker_symbol)
        end 

        if stock_to_find.length < 2
          url = "https://financialmodelingprep.com/api/v3/stock/real-time-price/#{stock_to_find[0]}"

          security = JSON.parse(open(url).read)
          new_valuation = security['price'] * shares[stock_to_find[0]] 
        else 
          list = stock_to_find.uniq.join(",")
          url = "https://financialmodelingprep.com/api/v3/stock/real-time-price/#{list}"
 
          security = JSON.parse(open(url).read)
          security["companiesPriceList"].each do |company|
          
            new_valuation += shares[company['symbol']] *  company['price']
          end

        end

        return new_valuation + self.funds
      end
    

end
