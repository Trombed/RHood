import React from "react"


class Portfolio extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.allTransaction()
    }

    render() {
       
        const transactions = this.props.portfolio.map( (stock, idx) => {
            const total_price = stock.total_price / stock.shares;
            return (
                <tr className="Portfolio-Row" key={idx}>
                    <td className="Portfolio-Box">
                        {stock.name}
                    </td>
                    
                    <td className="Portfolio-Box">
                    {stock.ticker}
                    </td>

                    

                    <td className="Portfolio-Box">
                        {stock.shares}
                    </td >

                    <td className="Portfolio-Box">
                        {total_price}
                    </td >

                    <td className="Portfolio-Box">
                        
                    </td >

                    <td className="Portfolio-Box">
                       
                    </td >
                </tr>
            )
        })

        return (
            <div>
                <table>
                    <tbody>

                    <tr className="Portfolio-Row">
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


