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
        puts now
        puts (now.hour < 9 && now.min < 30) 
        puts (now.hour >= 16 && now.min > 30)
        if (now.hour < 9 && now.min < 30) || (now.hour >= 16 && now.min > 30)
        
            puts "MARKET CLOSED"
            exit
    
        end
        
     
 
        stock_to_find = []
        users = User.all 
        users.each do |user|
      
             if (user.stocks_to_find)
                puts user.stocks_to_find

                stock_to_find.push(user.stocks_to_find) 
             end
        end

        
        symbols = stock_to_find.flatten.uniq.join(",")

        puts symbols

        
        url = "https://cloud.iexapis.com/stable/stock/market/batch?symbols=#{symbols}&types=quote&token=#{Rails.application.credentials.iexapi[:api_key]}"

        security = JSON.parse(open(url).read)
        

        
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


end