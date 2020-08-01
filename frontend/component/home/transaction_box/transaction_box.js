import React from 'react'
import { $CombinedState } from 'redux'



class TransactionBox extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            boxState: "BUY",
            shareToBuy: 0,
            sharesBuyingPrice: 0,
            currentlyOwned: 0,
            funds: this.props.currentUser.funds,
            error: null,
            sharesCurrentPrice: 0,
            symbol: null
        }
        this.changeBuyShare = this.changeBuyShare.bind(this)
     
    }

    componentDidMount() {
        this.updateStats()
        this.setState({
            sharesCurrentPrice: this.props.sharesPrice
        })
     
    }

    componentDidUpdate(prevProp, prevState) {
        if (prevProp.stockId !== this.props.stockId) {
            this.updateStats();
            this.setState({
                shareToBuy: 0,
                sharesBuyingPrice: 0
            })

        }
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
        this.setState({ boxState: transactionType}, () => {
            this.changeBorder()
        })
        this.setState({ error: null})
    }

    handleBuy() {
        if (this.state.shareToBuy <= 0 )  {
            return this.setState({
                error: "Minimum 1 share"
            })
        } else if ((this.state.shareToBuy * this.props.sharesPrice) > this.state.funds) {
            return this.setState({
                error: "Insufficient funds"
            })
        }
        else {
            const data = {
                stock_id: this.props.stockInfo.id,
                shares: this.state.shareToBuy,
                price: this.props.sharesPrice
            }
            this.props.buyTransaction(data)
            .then( (res) => {
                this.updateStats()
                this.setState({ symbol: this.props.stockInfo.ticker_symbol})
                this.props.openModal(this.state)
            })  
            this.setState({ error: null})
        };
    };

    handleSell() {
        if  (this.state.currentlyOwned < this.state.shareToBuy || this.state.shareToBuy === 0) {
            return this.setState({
                error: "Insufficient shares"
            })
        }
        else {
            const data = {
                stock_id: this.props.stockInfo.id,
                shares: this.state.shareToBuy,
                price: this.props.sharesPrice
            }
            this.props.sellTransaction(data)
            .then( (res) => {
                this.updateStats()
                this.setState({ symbol: this.props.stockInfo.ticker_symbol})
                this.props.openModal(this.state)
            })
            this.setState({ error: null})
        }
    }

    changeBorder() {
        switch (this.state.boxState) {
            case "BUY":
                    $(".Transaction-Box-Header").removeClass('transaction-sell')
                    $(".Transaction-Box-Header").addClass('transaction-buy')
                break;
            case "SELL":
                    $(".Transaction-Box-Header").removeClass("transaction-buy")
                    $(".Transaction-Box-Header").addClass("transaction-sell")            
                break;
        }
    }

    updateSharePrice() {
        if (this.props.sharesPrice === undefined) {
            return "ERROR"
        } else {
            return this.props.sharesPrice.toLocaleString('en', {style: 'currency', currency:"USD"})
        }
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
                   <div className='Transaction-Box-Header transaction-buy'> 
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
                        <div><input type='number' placeholder="0" onChange={ this.changeBuyShare} className="Transaction-Number-Input" min="0" 
                        value={this.state.shareToBuy}
                        /></div>
                        </div>

                        <div className="Transaction-Box-Body-Row-2">
                        <div>Market Price</div>
                        <div>${this.props.currentPrice.toFixed(2)}</div>
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
                    <div className="Transaction-Box-Errors">
                        {this.state.error}
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