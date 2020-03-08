import React from 'react'

// import MainContent from "./main_content/main_content";
import HomeNavBarContainer from "../home_nav_bar_container"
import StockPageContainer from './stock_page_container';
import { Route } from 'react-router-dom'



class StockMain extends React.Component {
    constructor(props) {
        super(props)
        console.log(this.props)
    
    }


    render(){
        
        return(
            <div className='homepage-container-night'>

                <HomeNavBarContainer />

                <div className='Home-Body-Container'>
                <Route path='/show/:id' component={StockPageContainer}>

                </Route>
                </div>  
            </div>
            
            )
        }
    }
    
    export default StockMain
    // {/* <StockPageContainer id={this.props.match.params.id} /> */}
    