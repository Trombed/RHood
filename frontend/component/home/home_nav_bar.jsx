import React from 'react' 
import HomePageLogo from './home_page_logo'
// import SearchResult from './home_nav_bar_search'
import { Link } from "react-router-dom"
import PortfolioContainer from './portfolio/portfolio_container'


class HomeNavBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            mode: "light"
        }
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

    changeTheme() {
        var ele = document.getElementsByTagName("html")[0].getAttribute("data-theme")
        console.log(ele)
        if (ele === "light") {                      document.documentElement.setAttribute("data-theme", "dark");
        this.setState({mode: "dark"});

        }
        else {
            document.documentElement.setAttribute("data-theme", "light");
            this.setState({mode: "light"});
        }
        
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

        const themeMode = (this.state.mode === "dark") ? 
        (<i class="fas fa-moon"></i> ):
        (<i class="fas fa-sun"></i>);

        
            
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
                    <input type="text" onChange={ this.autoSearch("name")} className='homepage-nav-search-bar' placeholder="Search" 
                    value={this.state.name} />
                        <div className="Search-Bar-Result-List">
                        {results}
                        </div>
                    </div>
                </div>
            
            </div>
            <div className="Nav-Bar-Filler"></div>
            <div>
            <ul className="homepage-nav-list"> 
        {/*  */}
 <div onClick={() => this.changeTheme()}>
     {themeMode}
</div> 
{/*  */}
                <div className="homepage-nav-item-1">
                    <Link to='/portfolio'>
                    Portfolio
                    </Link>
                </div>
                
                <div className='homepage-nav-item-2' onClick={this.props.logout}>
                    Logout
                </div>
            </ul>
            </div>
            
            
        </div>
        )

    }
}

export default HomeNavBar