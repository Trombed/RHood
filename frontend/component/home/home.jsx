import React from 'react'
import MainContent from "./main_content/main_content";
import HomeNavBarContainer from "./home_nav_bar_container"
import WatchListContainer from './watch_list/watch_list_container';



class Home extends React.Component {
    constructor(props) {
        super(props)    
    }

    componentDidMount() {
        // this.props.getAllNews()
    }


    render() {

        return(
                 <div className='homepage-container-night'>
                <HomeNavBarContainer />
                <div className='Home-Body-Container'>
                
                <MainContent  news={this.props.news} />
                
                {/* <WatchListContainer /> */}
                </div>  
            </div>
            
        )
    }
}

export default Home