class Api::StocksController < ApplicationController

    def show
        @show = Stock.find(params[:id])
        render json: @show
    end

    def index
        # @search = Stock.select(:id,:name,:ticker_symbol).where("name ILIKE(?)", "#{params[:stock]}%").or(Stock.select(:id,:name,:ticker_symbol).where("ticker_symbol ILIKE(?)", "#{params[:stock]}%")).limit(5).as_json
        @search = Stock.select(:id,:name,:ticker_symbol).where("name ILIKE(?)", "#{params[:stock]}").as_json
        @search += Stock.select(:id,:name,:ticker_symbol).where("ticker_symbol ILIKE(?)", "#{params[:stock]}").as_json
        @search += Stock.select(:id,:name,:ticker_symbol).where("name ILIKE(?)", "#{params[:stock]}%").limit(5).as_json
        
        @search.slice(0,4)
        render json: @search
    end

    def stock_params
        params.require(:stock).permit(:name,:ticker_symbol,:stock)
    end
end




