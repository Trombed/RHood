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

    handleCollapse() {

        var collapse = document.getElementsByClassName("collapse");

        for (let i = 0; i < collapse.length; i++) {
          collapse[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var content = this.children;
            if (content.style.display === "block") {
              content.style.display = "none";
            } else {
              content.style.display = "block";
            }
          });
        }
    }

 
    render(){
        let stockList;

        stockList = this.props.watchList.map( (stock, idx) => (
            
            <WatchListItemsContainer stock={stock}  idx={idx} otherProps={this.props} />
            
           )   )

        return (
            <div onClick={this.handleCollapse} className='Watch-List-Container collapse' onClick={this.handleCollapse}>

                <div className="Watch-List-Content">
                <div className='Watch-List-Title'>
                    Stocks
                </div>
                <div className="Watch-List-Separator">
                </div>
                    <div className='Watch-List-Items-Container'>
                    {stockList}
                    </div>
                
                <div className='Watch-List-End'>
                </div>
                </div>
            </div>
        )

    }
}

export default WatchList