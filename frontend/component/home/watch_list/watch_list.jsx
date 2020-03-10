import React from 'react' 
import WatchListItems from './watch_list_items'

class WatchList extends React.Component {
    constructor(props) {
        super(props)
        this.watchList = this.props.watchList
    }



    render(){
        debugger
        let stockList = this.watchList.map( stock => (
            <li>
             
                <WatchListItems stock={stock} key={stock.id} />
            </li>
        ))

        return (
            <div className='Watch-List-Container'>
                <div className='Watch-List-Title'>
                    Watch list
                </div>
                <div className="Watch-List-Separator">
                </div>
                {stockList}
                {/* <WatchListItems /> */}
                
                <div className='Watch-List-End'>
                </div>
            </div>
        )

    }
}

export default WatchList