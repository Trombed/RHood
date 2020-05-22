import React from 'react' 
import WatchListItems from './watch_list_items'
import WatchListItemsContainer from './watch_list_items_container'

class WatchList extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            loaded: false
        }

    }

    componentDidMount() {
        this.props.watchListInfo()
        .then( res => this.props.watchListCurPrices(this.props.stockSymGetter(this.props.watchList)))
    }



 
    render(){
        let stockList;

        stockList = this.props.watchList.map( (stock, idx) => (
            
            <WatchListItemsContainer stock={stock}  idx={idx} otherProps={this.props} key={idx} />
            
           )   )

        return (
            <div onClick={this.handleCollapse} className='Watch-List-Container' >

                <div className="Watch-List-Content">
                <div className='Watch-List-Title'>
                    Followed Stocks: 
                </div>
                <div className="Watch-List-Separator">
                </div>
                    <div className='Watch-List-Items-Container'>
                    {stockList}
                    </div>
                
                </div>
            </div>
        )

    }
}

export default WatchList