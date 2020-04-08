import React from 'react'



class TransactionBox extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            boxState: "BUY",
            shareToBuy: 0,
            sharesBuyingPrice: 0,
            currentlyOwned: 0,
            funds: 0
        }
        this.changeBuyShare = this.changeBuyShare.bind(this)
     
    }

    componentDidMount() {
        this.updateStats()

    }

    updateStats() {
        this.props.currentShares(Number(this.props.stockId))    
        .then( res => this.setState({
            funds: this.props.stockShares.funds,
            currentlyOwned: this.props.stockShares.shares
        }) )
    }
  
    
    changeBuyShare(e) {
        const returnValue = Number(Number(e.target.value) * this.props.sharesPrice).toLocaleString('en', {style: 'currency', currency:"USD"})
       
       this.setState({ 
            shareToBuy: e.target.value,
            sharesBuyingPrice: returnValue
        })

    }

    changeTransaction(transactionType) {
        this.setState({ boxState: transactionType})
    }

    handleBuy() {
        const data = {
            stock_id: this.props.stockInfo.id,
            shares: this.state.shareToBuy,
            price: this.props.sharesPrice
        }
        this.props.buyTransaction(data)
        .then( res = this.updateStats())
    }

    handleSell() {
        this.props.stockId
    }


    render() {
       
        const addDecimals = this.props.currentUser.funds
        const funds = Number(addDecimals).toLocaleString('en', {style: 'currency', currency:"USD"})
        const submitTransaction = (this.state.boxState === "BUY") ?  
                (<div className='Transaction-Box-Button-Input-Buy'
                onClick={() => this.handleBuy()}>
                            SUBMIT BUY
                </div> ) :
                (<div className='Transaction-Box-Button-Input-Sell'
                onClick={() => this.handleSell()}>
                        SUBMIT SELL
                </div> 
                )
        
      

        return (
            <div className="Transaction-Box-Container">          
                   <div className='Transaction-Box-Header'> 
                       <div className='Transaction-Box-Header-Buy' onClick={ () => this.changeTransaction("BUY")}>
                           Buy {this.props.stockInfo.ticker_symbol}
                       </div>
                       <div className='Transaction-Box-Header-Sell' onClick={() => this.changeTransaction("SELL")}>
                            Sell {this.props.stockInfo.ticker_symbol}
                       </div>
                    </div>
                    <div className="Transaction-Box-Body">
                        <div className="Transaction-Box-Body-Row-1">
                        <div>Shares</div>
                        <div><input type='number' placeholder="0" onChange={ this.changeBuyShare} className="Transaction-Number-Input" min="1" /></div>
                        </div>

                        <div className="Transaction-Box-Body-Row-2">
                        <div>Market Price</div>
                        <div>{this.props.sharesPrice.toLocaleString('en', {style: 'currency', currency:"USD"})}</div>
                        </div>
                        
                        <div className="Transaction-Box-Body-Row-3">
                        <div>Estimated Cost </div>
                        <div>{this.state.sharesBuyingPrice}
                        </div>
                        </div>
                    </div>
                    <div className="Transaction-Box-Button">
                
                        {submitTransaction}
                    </div>
                    <div className='Transaction-Box-Separator'></div>
                    <div className="Transaction-Box-Buying-Power">
                        {this.state.funds.toLocaleString('en', {style: 'currency', currency:"USD"})} Buying Power
                  
                    </div>
                    <div className="Transaction-Box-Buying-Power">
                        {this.state.currentlyOwned} Shares Owned
                  
                    </div>

            </div>
        )
    }
    
}

export default TransactionBox