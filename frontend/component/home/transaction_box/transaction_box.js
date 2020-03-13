import React from 'react'



class TransactionBox extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

            shareToBuy: 0,
            sharesBuyingPrice: 0,
        }
        this.changeBuyShare = this.changeBuyShare.bind(this)
     
    }
  
    
    changeBuyShare(e) {
        const returnValue = Number(Number(e.target.value) * this.props.sharesPrice).toLocaleString('en', {style: 'currency', currency:"USD"})
       
       this.setState({ 
            shareToBuy: e.target.value,
            sharesBuyingPrice: returnValue
        })
  
    }

    render() {
       
        const addDecimals = this.props.currentUser.funds
        const funds = Number(addDecimals).toLocaleString('en', {style: 'currency', currency:"USD"})
        
        return (
            <div className="Transaction-Box-Container">          
                   <div className='Transaction-Box-Header'> 
                       <div className='Transaction-Box-Header-Buy'>
                           Buy {this.props.stockInfo.ticker_symbol}
                       </div>
                       <div className='Transaction-Box-Header-Sell'>
                            Sell {this.props.stockInfo.ticker_symbol}
                       </div>
                    </div>
                    <div className="Transaction-Box-Body">
                        <div className="Transaction-Box-Body-Row-1">
                        <div>Shares</div>
                        <div><input type='number' placeholder="0" onChange={ this.changeBuyShare} className="Transaction-Number-Input" /></div>
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
                        <div className='Transaction-Box-Button-Input' onClick={this.handleSubmit}>
                            SUBMIT BUY
                        </div>
                    </div>
                    <div className='Transaction-Box-Separator'></div>
                    <div className="Transaction-Box-Buying-Power">
                        {funds} Buying Power
                  
                    </div>

            </div>
        )
    }
    
}

export default TransactionBox