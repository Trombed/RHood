import React from 'react' 
import HomePageLogo from './home_page_logo'


class HomeNavBar extends React.Component {
    constructor(props) {
        super(props)
        this.logout = this.props.logout.bind(this)
    }



    render(){
        

        return (

        <div className="homepage-nav-bar"> 
                
            <div id="homepage-nav-logo">
                <HomePageLogo />
            </div> 

            <div className='homepage-nav-search-bar-block'>
                <div className='homepage-nav-search-icon'>
                <i class="fas fa-search"></i>

                </div>
                <div className="homepage-nav-placeholder">
                <input type="text" className='homepage-nav-search-bar' placeholder="Search" />
                </div>
            </div>
            
            <ul className="homepage-nav-list">   
                <div className="homepage-nav-item-1">
                    Portfolio
                </div>
                <div className='homepage-nav-separator'></div>
                <div className='homepage-nav-item-2' onClick={this.props.logout}>
                    Account
                </div>
            </ul>
            

        </div>
        )

    }
}

export default HomeNavBar