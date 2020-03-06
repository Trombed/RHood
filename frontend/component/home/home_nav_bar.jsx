import React from 'react' 
import HomePageLogo from './home_page_logo'
import SearchResult from './home_nav_bar_search'


class HomeNavBar extends React.Component {
    constructor(props) {
        
        super(props)
        this.state = {name: ""}
        
        this.logout = this.props.logout.bind(this)
        this.stock_search = this.props.stock_search.bind(this)
        console.log(this.props.search)
    }

    autoSearch(field) {
        return (e) => (
            this.setState({ [field]: e.currentTarget.value })
          , this.stock_search(this.state.name)  )
      
    }

    
    render() {
        let results;
        if (this.props.search.length > 1) {
        results = this.props.search.map( (result) => {
            return (
            <li key={result.id} className='Search-Bar-Result-List-Items'>
                <div className='Search-Bar-Result-List-Items-Symnbol'>{result.ticker_symbol}</div>
                <div className='Search-Bar-Result-List-Items-Name'>{result.name}</div>
                  
                
            </li>
            )
        })}
            
        return (

        <div className="homepage-nav-bar"> 
                
            <div id="homepage-nav-logo">
                <HomePageLogo />
            </div> 

            <div className='homepage-nav-search-bar-block'>
                <div className='homepage-nav-search-icon'>
                <i className="fas fa-search"></i>

                </div>
                <div className="homepage-nav-placeholder">
                <input type="text" onChange={this.autoSearch("name")} className='homepage-nav-search-bar' placeholder="Search" 
                value={this.state.name} />
                <div className="Search-Bar-Result-List">
                  {results}
            </div>
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