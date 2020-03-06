import React from 'react'

import WatchList from './watch_list/watch_list'
import HomeNavBar from './home_nav_bar';
import MainContent from "./main_content/main_content";
import HomeNavBarContainer from "./home_nav_bar_container"
import StockPageContainer from './stock_page/stock_page_container';

class Home extends React.Component {
    constructor(props) {
        super(props)

        this.logout = this.props.logout.bind(this)
       
    }

    

    render(){
       
        return(
            <div className='homepage-container-night'>

                {/* <HomeNavBar logout={this.logout} /> */}
                <HomeNavBarContainer />

  
                <div className='Home-Body-Container'>
                {/* <MainContent /> */}
                <StockPageContainer />
                <WatchList />
                </div>

               
            </div>
            
        )
    }
}

export default Home