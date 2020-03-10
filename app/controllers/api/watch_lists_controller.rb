class Api::WatchListsController < ApplicationController
    # before_action :require_login
    def index 
        @watch_lists = current_user.stocks
        render :show

    end


   
end
