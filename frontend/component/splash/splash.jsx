import React from 'react' 
import LoginUser from '../session/login_session'
import NewUserSession from '../session/new_user_session'
import { Route,Link, Switch  } from 'react-router-dom'
import SplashCarousel from './carousel.jsx/carousel'
import FictionalShares from './fictional_shares'
import SplashFooter from './splash_footer'



class Splash extends React.Component {
    constructor(props) {
        super(props)
      
    }



    
    render() {
        // code to check if user is sign in and to display log in or logout
        let content = (this.props.sessionId === null ) ? (
            <ul className="splashNavEnd"> 
            <div className="splashNavSignIn">
        
            <Link to="/login">Sign In</Link>
            </div>
            <div>
                <button className='splashNavSignUp'>
            <Link to='/signup'>Sign Up</Link> 
                </button>
            </div>
            </ul>
         
         ) : (
            <ul className="splashNavEnd">
            <div className="splashNavSignIn">
                <button className='splashNavSignUp'>
            <Link to='/home'>My Account</Link> 
                </button>
            </div>
            </ul>
         );

         //end login/logout check 
        

         
    
        
        return(
        
            <div className="splashContainer">
        
                <div className="splashNavBar"> 
                
                 <div id="splashNavLogo">
                     <img src="/robinHoodLogo.svg" />
                     
                </div> 
                      
         
                        {content}


                
                </div>
                
               
                <div className="splashContent-Container">

                <div className="splashContent-1-green">
                    <div className="splashContent-1-green-left-container">
                    <div className="splashContent-2-left-row-2">It's Time to Do Money </div> 

                    <div className="splashContent-2-left-row-3">Robinhood, a pioneer of commission-free investing, gives you more ways to make your money work harder.</div>
                    

                    <div className='splashContent-2-left-row-4'>
                        <Link to="/signup" ><button className='splash-left-button'>Sign Up</button></Link>
                    </div>

                    </div>

                    <div className="splashContent-1-green-right-container">

                        <video autoPlay loop  muted preload="auto" id=
                        'splashPhonemp4'>
                        <source src="/splashPhone.mp4"/>
                        </video>
                        <img src="/splashcontent-1.png" id="splashPhone" />
                    </div>
                    
                </div>

                <div className="splashContent-2-white">
                        <div className="splashContent-2-white-1">
                        Break Free from Commission Fees
                        </div>

                        <div className='splashContent-2-white-2'>
                        Make unlimited commission-free trades in stocks, funds, and options with Robinhood Financial. The same goes for buying and selling cryptocurrencies with Robinhood Crypto. Zero commission fees.
                        </div>
                </div>

                    <SplashCarousel />
                    <FictionalShares />
                    <SplashFooter />

               

                </div>
            </div> 

            
            
            

        )
    }

}

export default Splash