import React from 'react'
import MainContent from "./main_content/main_content";
import HomeNavBarContainer from "./home_nav_bar_container"
import WatchListContainer from './watch_list/watch_list_container';
import { Route } from 'react-router-dom'
import PortfolioContainer from './portfolio/portfolio_container';
import Portfolio from './portfolio/portfolio';


class Home extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
   
    }

    render() {
        return(
                 <div className='homepage-container-night'>
                <HomeNavBarContainer />
                <div className='Home-Body-Container'>
                
                <MainContent />
                
                <WatchListContainer />
                </div>  
            </div>
            
        )
    }
}

export default Home