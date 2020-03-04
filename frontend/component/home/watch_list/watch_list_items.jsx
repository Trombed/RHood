import React from 'react' 


class WatchListItems extends React.Component {
    constructor(props) {
        super(props)
      
    }



    render(){
        

        return (
        <div className='Watch-List-Items-Container'>
            <ul className='Watch-List-Items-Item'>
            Apple 
            </ul>

            <ul className='Watch-List-Items-Item'>
                Amazon
            </ul>

            <ul className='Watch-List-Items-Item'>
            Google
            </ul>
        </div>    
        )

    }
}

export default WatchListItems