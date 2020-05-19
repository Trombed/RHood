import React from 'react' 
import HomePageLogo from './home_page_logo'
// import SearchResult from './home_nav_bar_search'
import { Link, Redirect } from "react-router-dom"
import PortfolioContainer from './portfolio/portfolio_container'


class HomeNavBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            mode: "light",
            cursor: 0
        }
        this.logout = this.props.logout.bind(this)
        this.stock_search = this.props.stock_search.bind(this)
        this.delete_search = this.props.delete_search.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.handleKeyDown = this.handleKeyDown.bind(this)
    }

    autoSearch(field) {

            return (e) => {
             
                if (e.currentTarget.value === "") {
                    this.setState({name: ""}, () => { 
                    this.delete_search()
                    })
                } else  {
                    this.setState(
                        { [field]: e.currentTarget.value }, 
                        () => this.stock_search(this.state.name.toUpperCase())   
                    )
                   
         
                } 
            }
        
    }

    handleClick(e) {
        this.setState({ name: ''})
        
    }

    changeTheme() {
        var ele = document.getElementsByTagName("html")[0].getAttribute("data-theme")
        if (ele === "light") {                      document.documentElement.setAttribute("data-theme", "dark");
        this.setState({mode: "dark"});
        }
        else {
            document.documentElement.setAttribute("data-theme", "light");
            this.setState({mode: "light"});
        };  
    }



    handleKeyDown(e) {
        const { cursor } = this.state
        if (this.props.search.length > 0) {
            if (e.keyCode === 38 && cursor > 0) {
                this.setState( prevState => ({
                  cursor: prevState.cursor - 1
                }))
              } else if (e.keyCode === 40 && cursor < this.props.search.length - 1) {
                this.setState( prevState => ({
                  cursor: prevState.cursor + 1
                }))
              } else if (e.keyCode === 13) {
                let targetURL = document.getElementsByClassName("Search-Bar-Result-List-Items-Active")[0].id
                 window.location.replace(`#/show/${targetURL}`)
                 this.handleClick
              }
        }
    }

 
    handleMouseEnter(idx) {
        this.setState({cursor: idx}
        )
    }
    
    render() {
        let results;
        if ((this.props.search.length > 0 ) 
            || (this.state.name !== "")) {
                console.log(this.props.search)
                results = this.props.search.map( (result, idx) => {

            return (
                <li key={result.id} 
                className={this.state.cursor === idx ? 'Search-Bar-Result-List-Items-Active' : 'Search-Bar-Result-List-Items'}
                id={result.id}
                onMouseEnter={(e) => this.handleMouseEnter(idx)}
                onClick={this.handleClick} 
              
                >
                    <Link to={`/show/${result.id}`}>   
                        <div className='Search-Bar-Result-List-Items-Symnbol'>{result.ticker_symbol}</div>
                        <div className='Search-Bar-Result-List-Items-Name'>{result.name}</div>
                    </Link>         
                </li>
            )
        })} else {
            null;
        }

        const themeMode = (this.state.mode === "dark") ? 
        (<i className="fas fa-moon" id="fa-moon"></i> ):
        (<i className="fas fa-sun" id="fa-sun"></i>);

        
            
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
                    <input type="text" 
                        onChange={ this.autoSearch("name")} 
                        className='homepage-nav-search-bar' placeholder="Search" 
                        value={this.state.name} 
                       
                        onKeyDown={this.handleKeyDown}
                    />
                        <div className="Search-Bar-Result-List">
                        {results}
                        </div>
                    </div>
                </div>
            
            </div>
            <div className="Nav-Bar-Filler"></div>
            <div>
            <ul className="homepage-nav-list"> 

                <div className='homepage-nav-mode' onClick={() => this.changeTheme()}>
                    {themeMode}
                </div> 

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