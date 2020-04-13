

import React from "react"
import { Link  } from 'react-router-dom'


class Portfolio extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            updated: false
        }
        self = this;
    }

    componentDidMount() {
        this.props.allTransaction()
    }



    updatePrice() {
        if (this.prices.length > 0 && !this.state.updated )
        this.props.currentPortfolioPrices(this.prices.join(","))
        .then( res =>  this.setState({updated: true}) )
       
    }

    render() {
        self.priceList = this.props.portfolioPrices.companiesPriceList
        this.prices = [];
        const transactions = this.props.portfolio.map( (stock, idx) => {
            const total_price = stock.total_price / stock.shares;
            this.prices.push(stock.ticker)
            var currentPrice = 0
            var gains = 0
            if (self.priceList !== undefined && self.priceList.length > 0) {

                this.props.portfolioPrices.companiesPriceList.forEach( price => {
                    if (price.symbol === stock.ticker) 
                        currentPrice = price.price
                        gains = (currentPrice * stock.shares) - (stock.shares * total_price) 
                })
            }

            return (
                <tr className="Portfolio-Row" key={idx}>
                    <td className="Portfolio-Box-Link">
                    <Link to={`/show/${stock.stock_id}`}>
                        {stock.name}
                    </Link> 
                    </td>
                    
                    <td className="Portfolio-Box-Link">
                    <Link to={`/show/${stock.stock_id}`}>
                    {stock.ticker}
                    </Link>
                    </td>
 

                    <td className="Portfolio-Box">
                        
                        {stock.shares}
                    </td >

                    <td className="Portfolio-Box">
                        {total_price.toLocaleString('en', {style: 'currency', currency:"USD"})}
                    </td >

                    <td className="Portfolio-Box">
                        {currentPrice.toLocaleString('en', {style: 'currency', currency:"USD"})}
                    </td >

                    <td className="Portfolio-Box">
                       {gains.toLocaleString('en', {style: 'currency', currency:"USD"})}
                    </td >
                </tr>
            )
        })
        this.updatePrice()
  

        return (
            <div className="Portfolio-Container">
            
                <div className="Portfolio-Buying">
                    Current Buying Power: {this.props.currentUser[0].funds.toLocaleString('en', {style: 'currency', currency:"USD"}) }
                </div>
                <table className="Portfolio-Table">
                    <tbody>

                    <tr className="Portfolio-Table-Label">
                        <td className="Portfolio-Box">Name</td>
                        <td className="Portfolio-Box">Ticker</td>
                        <td className="Portfolio-Box">Shares</td>
                        <td className="Portfolio-Box">Average Cost</td>
                        <td className="Portfolio-Box">Current Price</td>
                        <td className="Portfolio-Box">Gains/Loss</td>
                    </tr>
                    {transactions}
                    </tbody>

                </table>
            </div>
        )
    }
}

export default Portfolio


