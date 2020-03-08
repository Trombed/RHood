import React from 'react'
import WatchList from './watch_list/watch_list'
import MainContent from "./main_content/main_content";
import HomeNavBarContainer from "./home_nav_bar_container"
import moment from 'moment';


class Home extends React.Component {
    constructor(props) {
        super(props)
    }


    render(){
        let timeNow = moment()
        timeNow.subtract(1, 'year')

        let today = moment()
        return(
                 <div className='homepage-container-night'>
                <div className='Home-Body-Container'>
                <HomeNavBarContainer />
              {timeNow.format("YYYY-MM-DD")}
             {today.format("YYYY-MM-DD")}
            
  
                <MainContent />
                <WatchList />
                </div>  
            </div>
            
        )
    }
}

export default Home