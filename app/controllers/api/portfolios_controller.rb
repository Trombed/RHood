class Api::PortfoliosController < ApplicationController

    def index 
        if current_user.transactions.empty? 
            render :index
        else 
            @valuations = current_user.portfolio.order('created_at ASC')
            puts @valuations

            render :index
        end
    end
end
