import React from 'react'
import HomePageLogo from './HomePageLogo'

class Home extends React.Component {
    constructor(props) {
        super(props)
    }



    render(){

        return(
            <div className='homepage-container-night'>
                {/* start nav bar */}
                <div className="homepage-nav-bar"> 
                
                    <div id="homepage-nav-logo">
                        <HomePageLogo />
                    </div> 
                     
                   <ul className="homepage-nav-list">   
                       <div className="homepage-nav-item-1">
                            Sign In
                       </div>
                       <div>
                           <button className='homepage-nav-item-2'>
                            LogOut
                           </button>
                       </div>
                   </ul>
               </div>
               {/* end nav bar */}


                {/* start body */}
                <div>

                </div>
                {/* end body */}
            </div>
            
        )
    }
}

export default Home