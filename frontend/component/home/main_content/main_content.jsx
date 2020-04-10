import React from 'react'
import {Link} from 'react-router-dom'

class MainContent extends React.Component {
    constructor(props) {
        super(props)
    }


    render(){
        const news = this.props.news.map( (page, idx) => {


            return (
        
      
            <div className="Main-News-Single-News" key={idx}>
                <a href={`${page.url}`}>
                <div className="Main-News-Single-Source">
                   {page.source.name}
                </div>
                <div className="Main-News-Content-Container">
                    <div className="Main-News-Subcontent">
                        <div>{page.title}</div>
                        <div>{page.description}</div>
                    </div>
                    <div className="Main-News-Content-Image-Container">
                        <img src={`${page.urlToImage}`} alt={`${page.content}`} className="Main-News-Content-Image" /></div>
                </div>
                </a>
            </div>
            )
        })

        console.log(this.props)
        return (
            <div className='Main-Container'>
                <div className='Main-Container-Title'>
                Welcome to RobinHood
                </div>

                <div className="Main-Container-Chart-Area"> 
                    <img src="/home-splash.svg" />
                    
                </div>



                <div className="Main-News-Header">
                    News: 
                </div>
                <div className="Main-News-Container">
                    {news}
                </div>
            </div>
        
        )
    }
}

export default MainContent