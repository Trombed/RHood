import React from 'react'
import News from '../news/news'
class MainContent extends React.Component {
    constructor(props) {
        super(props)
    }


    render() 
    {
        const news = this.props.news.map( (page, idx) => (
            <News page={page} idx={idx} key={`${idx}`} />
        ))

        return (
            <div className='Main-Container'>
                <div className='Main-Container-Title'>
                Welcome to RobinHood
                </div>

                <div className="Main-Container-Chart-Area"> 
                    <img src="/home-splash.svg" />
                </div>


                <div className="Main-News-Header">
                    News
                </div>
                <div className="Main-News-Container">
                    {news}
                </div>
            </div>
        
        )
    }
}

export default MainContent