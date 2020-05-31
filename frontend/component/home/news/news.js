import React from 'react'

class News extends React.Component {


    render() {
        const {page, idx} = this.props
    
        return(

            <div className="Main-News-Single-News">
                <a href={`${page.url}`} target="_blank">
                <div className="Main-News-Single-Source">
                   {page.source.name}
                </div>
                <div className="Main-News-Content-Container">
                    <div className="Main-News-Subcontent">
                        <div className="Main-News-Title">{page.title}</div>
                        <div className="Main-News-Desc">{page.description}</div>
                    </div>
                    <div className="Main-News-Content-Image-Container">
                        <img src={`${page.urlToImage}`} alt={`${page.content}`} onError={ (e) => {
                            e.target.onerror = null
                            e.target.src = '/news-image.jpeg'
                        } } className="Main-News-Content-Image" /></div>
                </div>
                </a>
            </div>

        )
    }
}

export default News