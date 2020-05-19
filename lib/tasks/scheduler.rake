namespace :scheduler do 

    task :caculate_gains => :environment do 
        require 'date'
        require 'us_bank_holidays'
    
        puts "Adding day's portfolio snapshots..."

        today = Date.today
        next if today.weekend?
        next if today.bank_holiday?

        users = Users.all 
        users.each do |user| 
            new_valuation = user.update_portfolio
            Portfolio.create({
                user_id: user.id,
                valuation: new_valuation
            })
        end 
        puts "done."

    end






end