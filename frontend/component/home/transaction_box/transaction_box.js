import React from 'react'


class TransactionBox extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

            shareToBuy: 0,
            sharesBuyingPrice: 0,
        }
     
    }
  
    
    changeBuyShare(e) {
        this.setState({
            sharesToBuy: e.currentTarget.value
        })
        let estimatedBuy = (this.states.sharesPrice !== undefined) ? 
        (
            this.states.sharesPrice * this.states.sharesToBuy
            ) : (
                0
        )
    }
    render() {

        return (
            <div className="Transaction-Box-Container">          
                   <div className='Transaction-Box-Header'> 
                       <div className='Transaction-Box-Header-Buy'>
                           Buy
                       </div>
                       <div className='Transaction-Box-Header-Sell'>
                            Sell
                       </div>
                    </div>
                    <div className="Transaction-Box-Body">
                        <div className="Transaction-Box-Body-Row-1">
                        <div>Shares</div>
                        <div><input type='number' placeholder="0" min="0" onChange={this.changeBuyShare} className="Transaction-Number-Input" /></div>
                        </div>

                        <div className="Transaction-Box-Body-Row-2">
                        <div>Market Price</div>
                        <div>{this.props.sharesPrice}</div>
                        </div>
                        
                        <div className="Transaction-Box-Body-Row-3">
                        <div>Estimated Cost </div>
                        <div>{this.state.sharesBuyingPrice}</div>
                        </div>
                    </div>
                    <div className="Transaction-Box-Button">
                        <div className='Transaction-Box-Button-Input' onClick={this.handleSubmit}>
                            SUBMIT BUY
                        </div>
                    </div>
                    <div className='Transaction-Box-Separator'></div>
                    <div className="Transaction-Box-Buying-Power">
                        ${this.props.currentUser.funds.toFixed(2)} Buying Power
                    </div>

            </div>
        )
    }
    
}

export default TransactionBox