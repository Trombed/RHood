namespace :scheduler do
    task :calculate_gains => :environment do 
        require 'date'
        require 'time'
        require 'us_bank_holidays'
        require 'open-uri'

        puts "Adding day's portfolio snapshots..."

        today = Date.today
        if today.weekend?
            puts "WEEKEND"
            exit
        end

        if today.bank_holiday?
            puts "BANK HOLIDAY"
            exit
        end

        ENV['TZ'] = 'America/New_York'
        now = Time.now 
        if (now.hour < 9 && now.min < 30) || (now.hour >= 16 && now.min > 30)
            puts "MARKET CLOSED"
            exit
        end
        
        puts now.hour
        stock_to_find = []
        users = User.all 
        users.each do |user|
            stock_to_find.push(user.stocks_to_find)  if (user.stocks_to_find)
        end

        
        symbols = stock_to_find.flatten.uniq.join(",")
        url = "https://financialmodelingprep.com/api/v3/stock/real-time-price/#{symbols}?apikey=#{Rails.application.credentials.finapi[:api_key]}"
        security = JSON.parse(open(url).read)
        puts security
        users.each do |user|
            new_valuation = user.update_portfolio(security)
            if user.portfolio.length > 400
                user.portfolio[0].delete
            end
            Portfolio.create({
                user_id: user.id,
                valuation: new_valuation
            })
        end

        puts 'done'

    end

    task :test => :environment do 
        require 'date'
        require 'time'
        require 'us_bank_holidays'
        ENV['TZ'] = 'America/New_York'
        now = Time.now
        today = Date.today 
        puts today.weekend?
        puts today.bank_holiday?
        puts now
        puts now.hour
    end
end 



