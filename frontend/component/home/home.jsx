import React from 'react'
import WatchList from './watch_list/watch_list'
import MainContent from "./main_content/main_content";
import HomeNavBarContainer from "./home_nav_bar_container"
import moment from 'moment';


class Home extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.watchListInfo()
    }
    render(){

        return(
                 <div className='homepage-container-night'>
                <HomeNavBarContainer />
                <div className='Home-Body-Container'>

                <MainContent />
                <WatchList watchList={this.props.watchList}/>
                </div>  
            </div>
            
        )
    }
}

export default Home