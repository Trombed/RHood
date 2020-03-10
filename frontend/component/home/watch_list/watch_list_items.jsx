import React from 'react' 
import { Route,Link, Switch  } from 'react-router-dom'


class WatchListItems extends React.Component {
    constructor(props) {
        super(props)
      
    }



    render(){
        
        
        return (
            <li key={this.props.stock.id} className="Watch-List-Items-Item">
            <Link to={`/show/${this.props.stock.id}`}>{this.props.stock.name}</Link>
            </li>
        )

    }
}

export default WatchListItems