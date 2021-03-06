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


      def stocks_to_find 
        return false if self.transactions.empty?
        stocks = []
        self.transactions.each do |transaction| 
          stocks.push(transaction.stock.ticker_symbol)
        end
        return stocks
      end

  

      def update_portfolio(security)
        return self.funds if self.transactions.empty?
        new_valuation = 0
        self.transactions.each do |transaction| 
          
            if security[transaction.stock.ticker_symbol] 
              amount = 0
                if security[transaction.stock.ticker_symbol]['quote']['close']
                  amount = security[transaction.stock.ticker_symbol]['quote']['close']
                elsif security[transaction.stock.ticker_symbol]['quote']['latestPrice']
                  amount = security[transaction.stock.ticker_symbol]['quote']['latestPrice']
                elsif security[transaction.stock.ticker_symbol]['quote']['iexRealtimePrice']
                  amount = security[transaction.stock.ticker_symbol]['quote']['iexRealtimePrice']
                else 
                  amount = 0
                  puts "NO PRICE FOUND"
                end
              new_valuation += transaction.shares * amount
            end
        
        end
        return new_valuation + self.funds
      end
 

end
