
task :calculate_gains => :environment do 
    require 'date'
    require 'time'
    require 'us_bank_holidays'

    puts "Adding day's portfolio snapshots..."

    today = Date.today
    next if today.weekend?
    next if today.bank_holiday?

    ENV['TZ'] = 'America/New_York'
    now = Time.now 
    next if (now.hour < 9 && now.min < 30) || (now.hour >= 16 && now.min > 30)

    users = User.all 
    users.each do |user| 
        new_valuation = user.update_portfolio
        if user.portfolio.length > 400
            user.portfolio[0].delete
        end
        Portfolio.create({
            user_id: user.id,
            valuation: new_valuation
        })
    end 
    puts "done."
end 


