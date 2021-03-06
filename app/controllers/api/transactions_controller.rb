class Api::TransactionsController < ApplicationController
    def index 
        @transactions = Transaction.where(user_id: current_user.id)     
        render :index
      end
    

      def show 
        @transaction = Transaction.find_by(stock_id: params[:id])
        if @transaction.nil?
          @transaction = {
            "shares": 0,
            "funds": current_user.funds
          }
          render json: @transaction
        else  
          render :show
        end
      end

      
    
      def create
        user = User.find(current_user.id)
        transaction = Transaction.new(transaction_params)
        cost = transaction.price * transaction.shares
        return "FAIL NOT ENOUGH FUNDS" if user.funds < cost
  
        @update = user.transactions.find_by(stock_id: params['transaction']['stock_id'].to_i)

        if @update
            @transaction = @update
            @transaction.shares += params['transaction']['shares'].to_i
            user.funds -= cost 
            @transaction.total_price += cost
            user.save!
            @transaction.save!
            render :show
        elsif @update.nil?
            @transaction = Transaction.new(transaction_params)
            @transaction.user_id = user.id
            @transaction.total_price += cost 
            user.funds -= cost 
            user.save!
            @transaction.save!
            render :show
        else  
            render json: ["Purchase Failed"], status: 422
        end

      end


      def destroy
        user = User.find(current_user.id)
        @transaction = user.transactions.find_by(stock_id: params[:id])
        
        if @transaction.nil? || params['transaction']['shares'].to_i <= 0
            render json: ["No Previous Transactions"], status: 422
        elsif @transaction.shares < params['transaction']['shares'].to_i
        
            render json: ["Not enough shares bought previously"], status: 422
        else 
            cost = params["transaction"]["shares"].to_f * params["transaction"]["price"].to_f
            @transaction.shares -= params["transaction"]['shares'].to_i
            @transaction.total_price -= cost 
            user.funds += cost
            user.save!
            @transaction.save!
            @transaction.destroy if @transaction.shares == 0
            render :show
        end
      end
    
      private 
      def transaction_params 
        params.require(:transaction).permit(:stock_id, :shares, :price)
    
      end
end
