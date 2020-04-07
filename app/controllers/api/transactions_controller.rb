class Api::TransactionsController < ApplicationController
    def index 
        # @stocks = current_user.transactions.where(stock_id: id).includes(:stock_transactions)

        @transactions = Transaction.where(user_id: current_user.id)
        
        render :index
      end
    
      def show 
        @stock = Transaction.find_by(params)
        render json: @stock
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
            puts "SUCCESSFULLY CREATED"
        elsif @update.nil?
            @transaction = Transaction.new(transaction_params)
            @transaction.user_id = user.id
            @transaction.total_price += cost 
            user.funds -= cost 
            user.save!
            @transaction.save!
            puts "SUCCESS CREATED"
        else  
            puts "FAILED"
        end

      end


      def destroy
        user = User.find(current_user.id)
        @transaction = user.transactions.find_by(stock_id: params[:id])
        
        debugger
        puts "NO PREVIOUS TRANSACTION FOUND" if @transaction.nil? 
      end
    
      def transaction_params 
        params.require(:transaction).permit(:stock_id, :shares, :price)
    
      end
end
