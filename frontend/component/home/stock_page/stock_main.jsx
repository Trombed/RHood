import React from 'react'

// import MainContent from "./main_content/main_content";
import HomeNavBarContainer from "../home_nav_bar_container"
import StockPageContainer from './stock_page_container';
import { Route } from 'react-router-dom'
import StockInfoBox from './stock_info_box/stock_info_box';
import WatchListButton from '../watch_list_button/watch_list_button';



class StockMain extends React.Component {
    constructor(props) {
        super(props)
    
    }


    render(){
        
        return(
            <div className='homepage-container-night'>

                <HomeNavBarContainer />

                <div className='Home-Body-Container'>
                <Route path='/show/:id' component={StockPageContainer}>
                </Route>
                
                <WatchListButton/>
                </div>  
            </div>
            
            )
        }
    }
    
    export default StockMain
   
    