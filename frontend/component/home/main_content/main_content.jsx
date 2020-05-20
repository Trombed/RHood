import React from 'react'
import News from '../news/news'
import PortfolioChart from './portfolio_chart'

class MainContent extends React.Component {
    constructor(props) {
        super(props)
    
    }

    componentDidMount() {
        this.props.getAllNews();
        this.props.getValuation();
    }

    render() 
    {
        const chart = (this.props.valuation.length <= 0) ? 
        <img src="/home-splash.svg" /> :  <PortfolioChart data={this.props.valuation} />
 

        const news = (this.props.news.length <= 0 ) ? null : 
        this.props.news.map( (page, idx) => (
            <News page={page} idx={idx} key={`${idx}`} />
        ));

        return (
            <div className='Main-Container'>
                <div className='Main-Container-Title'>
                Welcome to RobinHood
                </div>

                <div className="Main-Container-Chart-Area"> 
                    {chart}
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