import React from 'react' 
import { Route,Link, Switch  } from 'react-router-dom'


class WatchListItems extends React.Component {
    constructor(props) {
        super(props)
      
    }



    render(){
        

        return (
        <div className='Watch-List-Items-Container'>
            {this.props.stock.name}
            {/* <ul className='Watch-List-Items-Item'>
            <Link to='/show/12' >Apple</Link> 
            </ul>

            <ul className='Watch-List-Items-Item'>
            <Link to='/show/365' >Amazon</Link> 
            </ul>

            <ul className='Watch-List-Items-Item'>
            <Link to='/show/2828' >Google</Link> 
            </ul> */}
        </div>    
        )

    }
}

export default WatchListItems