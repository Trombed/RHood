import React from 'react' 
import { Link  } from 'react-router-dom'


class WatchListItems extends React.Component {
    constructor(props) {
        super(props)
    
    }

    render(){
     
      
        let content = (this.props.price === undefined) ? (
            "0"
        ) :
        (
            this.props.price[this.props.idx]
        )


      
        return (
            <Link to={`/show/${this.props.stock.id}`}>
            <li key={this.props.stock.id} className="Watch-List-Items-Item">
                <div>

                {this.props.stock.ticker_symbol} 
                </div>
                <div>
                ${content}
                </div>
            </li>
             </Link>
        )

    }
}

export default WatchListItems