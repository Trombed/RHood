import React from 'react' 
import LoginUser from './session/login_session'
import NewUserSession from './session/new_user_session'
import { Route,Link, Switch  } from 'react-router-dom'


class Splash extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {

        return(
        
            <div className="splashContainer">
                {/* START NAV BAR SECTIOn */}
                <div className="splashNavBar"> 
                
                 <div id="splashNavLogo">
                     <img src="/assets/robinHoodLogo.svg" />
                </div> 
                      
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
                </div>
                
                {/* END NAV BAR SECTIOn */}


                {/* SECTION 1 START */}
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

                        <video autoPlay loop  muted preload="auto" className='splashPhonemp4'>
                        <source src="assets/splashPhone.mp4"/>
                        </video>
                        <img src="/assets/splashcontent-1.png" className="splashPhone" />
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

                <div className="splashContent-3-black">
                    black
                </div>
                <div className="splashContent-4-white">
                    Our Products
                </div>
                <div className="splashContent-5-black">
                    Footer
                </div>

                </div>
            </div> 

            
            
            

        )
    }

}

export default Splash