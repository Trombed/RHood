import React from 'react'

class WatchListButton extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        

        return (
            <div className="Watch-List-Button-Container">
                <button className="Watch-List-Button">                    
                    Add to Watch List
                </button>

            </div>
        )
    }
    
}

export default WatchListButton