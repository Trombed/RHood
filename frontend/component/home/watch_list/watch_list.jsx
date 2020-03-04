import React from 'react' 
import WatchListItems from './watch_list_items'

class WatchList extends React.Component {
    constructor(props) {
        super(props)
    }



    render(){
        

        return (
            <div className='Watch-List-Container'>
                <div className='Watch-List-Title'>
                    Watch list
                </div>
                <div className="Watch-List-Separator">
                </div>
              
                <WatchListItems />
                
                <div className='Watch-List-End'>
                </div>
            </div>
        )

    }
}

export default WatchList