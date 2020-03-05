import React from 'react'

import WatchList from './watch_list/watch_list'
import HomeNavBar from './home_nav_bar';
import MainContent from "./main_content/main_content";



class Home extends React.Component {
    constructor(props) {
        super(props)

        this.logout = this.props.logout.bind(this)
       
    }

    

    render(){
       
        return(
            <div className='homepage-container-night'>

                <HomeNavBar logout={this.logout} />

  
                <div className='Home-Body-Container'>
                <MainContent />
                
                <WatchList />
                </div>

               
            </div>
            
        )
    }
}

export default Home