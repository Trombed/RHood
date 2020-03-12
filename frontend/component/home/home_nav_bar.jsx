import React from 'react' 
import HomePageLogo from './home_page_logo'
// import SearchResult from './home_nav_bar_search'
import { Link } from "react-router-dom"


class HomeNavBar extends React.Component {
    constructor(props) {
        
        super(props)
        this.state = {name: ""}
        
        this.logout = this.props.logout.bind(this)
        this.stock_search = this.props.stock_search.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    autoSearch(field) {
        return (e) => (
            this.setState({ [field]: e.currentTarget.value })
          , this.stock_search(this.state.name)  )
      
    }

    handleClick(e) {
        this.setState({ name: ''})
        
    }

    
    render() {
        let results;
        if ((this.props.search.length > 0 ) 
            && (this.state.name != "")) {
        results = this.props.search.map( (result) => {
            return (
            <li key={result.id} className='Search-Bar-Result-List-Items' onClick={this.handleClick} >

             <Link to={`/show/${result.id}`}>   
                <div className='Search-Bar-Result-List-Items-Symnbol'>{result.ticker_symbol}</div>
                <div className='Search-Bar-Result-List-Items-Name'>{result.name}</div>
             </Link>      
                
            </li>
            )
        })}

        
            
        return (

        <div className="homepage-nav-bar"> 
                
            <div id="homepage-nav-logo">
              <Link to="/home"> 
                    <HomePageLogo />
              </Link>
            </div> 
        
            <div className='homepage-nav-search-bar-block'>
                <div className='homepage-nav-search-icon'>
                <i className="fas fa-search"></i>

                </div>

                <div className="Search-Bar-Container ">
                    <div className="homepage-nav-placeholder">
                    <input type="text" onChange={this.autoSearch("name")} className='homepage-nav-search-bar' placeholder="Search" 
                    value={this.state.name} />
                        <div className="Search-Bar-Result-List">
                        {results}
                        </div>
                    </div>
                </div>
            
            </div>
            <div className="Nav-Bar-Filler"></div>
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