
    task :calculate_gains => :environment do 
        require 'date'
        require 'us_bank_holidays'
    
        puts "Adding day's portfolio snapshots..."

        today = Date.today
        next if today.weekend?
        next if today.bank_holiday?

        users = User.all 
        users.each do |user| 
            new_valuation = user.update_portfolio
            if user.portfolio.length > 10 
                user.portfolio[0].delete
            end
            Portfolio.create({
                user_id: user.id,
                valuation: new_valuation
            })
        end 
        puts "done."

    end
