import React from 'react'


class WatchListButton extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        console.log(this.props.watchList)
   
        let watchButton = (this.props.watchList[Number(this.props.stockId)] !== undefined) ?        
                            ( 
                            <div className="Watch-List-Delete-Button"
                            onClick={ () => this.props.removeStockfromWatchList(this.props.stockId)}>
                            Delete from Watch List
                            </div>)
                            :(
                            <div className="Watch-List-Add-Button"
                            onClick={ () => this.props.addStockToWatchList(Number(this.props.stockId))}
                            >
                            Add to Watch List
                            </div>) 
                            
   
        return (
            <div className="Watch-List-Button-Container">          
                  {watchButton}  
            </div>
        )
    }
    
}

export default WatchListButton