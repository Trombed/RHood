class Api::WatchListsController < ApplicationController
    # before_action :require_login
    def index 
        @watch_lists = current_user.stocks
        render :index

    end


    def create 

        watch_list = current_user.watch_lists.new(stock_id: params[:stock])

        if watch_list.save
            @watch_list = watch_list.stock
            render :show
        end
    end


    def destroy 
        watch_list = current_user.watch_lists.find_by(stock_id: params[:id])
 
        if watch_list.delete
            @watch_list = watch_list.stock
         
            render :show 
        end

    end



    def watchlist_params
        params.require(:watchlist).permit(:id, :stock)
    end

   
end
