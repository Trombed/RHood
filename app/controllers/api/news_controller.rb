class Api::NewsController < ApplicationController
    require 'open-uri'

    def index 
        url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=#{Rails.application.credentials.newapi[:api_key]}"
      

        @news = JSON.parse(open(url).read)
   
        render json: @news, status: 200
        
    end


    def show 
        url = "https://newsapi.org/v2/everything?q=#{params[:id]}&apiKey=#{Rails.application.credentials.newapi[:api_key]}"

        @news = JSON.parse(open(url).read)
  
        render json: @news, status: 200
    end 
end
