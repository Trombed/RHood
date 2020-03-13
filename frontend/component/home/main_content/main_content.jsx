import React from 'react'


class MainContent extends React.Component {
    constructor(props) {
        super(props)

    }


    render(){
       
        return(
            <div className='Main-Container'>
                <div className='Main-Container-Title'>
                Welcome to RobinHood
                </div>

                <div className="Main-Container-Chart-Area"> 
                    <img src="/home-splash.svg" />
                    
                </div>
                
            </div>
        
        )
    }
}

export default MainContent