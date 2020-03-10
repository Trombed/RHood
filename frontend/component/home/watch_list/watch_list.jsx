import React from 'react' 
import WatchListItems from './watch_list_items'

class WatchList extends React.Component {
    constructor(props) {
        super(props)

    }

    componentDidMount() {
        this.props.watchListInfo()
    }

    handleCollapse() {
        var coll = document.getElementsByClassName("collapsible");
        var i;
        
        for (i = 0; i < coll.length; i++) {
          coll[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.display === "block") {
              content.style.display = "none";
            } else {
              content.style.display = "block";
            }
          });
        }
    }
    render(){

        let stockList = this.props.watchList.map( stock => (
                <WatchListItems stock={stock} />
           
        ))

        return (
            <div onClick={this.handleCollapse} className='Watch-List-Container'>
                <button type="button" className="collapsible">Open Collapsible</button>
                <div className="content">text</div>

                <div className="content">
                <div className='Watch-List-Title'>
                    Watch list
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