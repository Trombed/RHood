import React from 'react'

// import MainContent from "./main_content/main_content";
import HomeNavBarContainer from "../home_nav_bar_container"
import StockPageContainer from './stock_page_container';
import { Route } from 'react-router-dom'
import StockInfoBox from './stock_info_box/stock_info_box';
import WatchListButtonContainer from '../watch_list_button/watch_list_button_container';
import WatchListContainer from '../watch_list/watch_list_container';




class StockMain extends React.Component {
    constructor(props) {
        super(props)
     
    }


    render(){
        console.log(this.props)
        this.stockId = this.props.match.params.id
        return(
            <div className='homepage-container-night'>

                <HomeNavBarContainer />

                <div className='Home-Body-Container'>
                <Route path='/show/:id' component={StockPageContainer}>
                </Route>
                
                <WatchListButtonContainer stockId={this.stockId} />
                <WatchListContainer />
                </div>  
            </div>
            
            )
        }
    }
    
    export default StockMain
   
    