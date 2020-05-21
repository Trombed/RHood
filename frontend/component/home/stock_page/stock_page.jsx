import React from 'react'
import { LineChart, Line, Tooltip, YAxis, XAxis } from 'recharts';
import { oneYearStats, threeMonthStats, oneMonthStats, oneWeekStats, oneDayData } from '../../util/stock_util';
import News from '../news/news';


class StockPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            price: 0,
            change: 0,
            percentageChange: 0,
            chartData: this.props.oneDayPrice
        }
        this.clickHandler = this.clickHandler.bind(this);
        this.handleChartOneDayData = this.handleChartOneDayData.bind(this)
        this.handleChartOneWeekData = this.handleChartOneWeekData.bind(this)
        this.handleChartOneMonthData = this.handleChartOneMonthData.bind(this)
        this.handleChartThreeMonthData = this.handleChartThreeMonthData.bind(this)
        this.handleChartOneYearData = this.handleChartOneYearData.bind(this)
        this.handleChartFiveYearData = this.handleChartFiveYearData.bind(this)
        this.handleResetPrice = this.handleResetPrice.bind(this)
        this.customToolTip = this.customToolTip.bind(this)
        this.removeHighlight = this.removeHighlight.bind(this)
        this.dataColor = this.dataColor.bind(this)
        this.setColor = this.setColor.bind(this)
        
       
    }

    

    componentDidMount() {
     
        this.props.fetchStockFromDB(this.id)
          .then(res => this.props.companyInfo(this.props.info.ticker_symbol))
          .then (res => this.props.getNews(this.props.info.name))
          .then( res => this.props.watchListInfo())
          // .then( res => this.props.currentPriceInfo(this.props.info.ticker_symbol))
          .then(res => this.setState({ price: this.props.currentPrice}))
          .then(res => this.props.oneDayStockInfo(this.props.info.ticker_symbol))
          .then(res => this.setState({ chartData: this.props.oneDayPrice}))
          .then(res => this.setState({ price: this.props.oneDayPrice[this.props.oneDayPrice.length-1].close}))
          .then(res => this.props.oneYearStockInfo(this.props.info.ticker_symbol))
          // .then(res => this.props.oneWeekStockInfo(this.props.info.ticker_symbol))
          // .then(res => this.props.fiveYearStockInfo(this.props.info.ticker_symbol))
          // .then(res => this.oneYearData = oneYearStats(this.props.fiveYearPrice))
          .then(res => this.threeMonthData = threeMonthStats(this.props.oneYearPrice))
          .then( res => this.oneMonthData = oneMonthStats(this.threeMonthData))
          .then( res => this.oneWeekData = oneWeekStats(this.oneMonthData))
          .then( res => this.oneDayColor = this.setColor(this.props.oneDayPrice) )
          .then( res => this.oneWeekColor = this.setColor(this.props.oneWeekData) )
          .then( res => this.oneMonthColor = this.setColor(this.oneMonthData) )
          .then( res => this.threeMonthColor = this.setColor(this.threeMonthData) )
          .then( res => this.oneYearColor = this.setColor(this.oneYearData) )
          .then( res => this.fiveYearColor = this.setColor(this.props.fiveYearPrice) )   
          .then( res => this.handleChartOneDayData)
          .then( res => this.activeColor())
    }


   


    componentDidUpdate(prevProp, prevState) {
      if(this.props.match.params.id !== prevProp.match.params.id) {
        this.props.fetchStockFromDB(this.id)
        .then(res => this.props.companyInfo(this.props.info.ticker_symbol))
        .then (res => this.props.getNews(this.props.info.name))
        .then( res => this.props.watchListInfo())
        // .then( res => this.props.currentPriceInfo(this.props.info.ticker_symbol))
        .then(res => this.props.oneDayStockInfo(this.props.info.ticker_symbol))
        .then(res => this.setState({ chartData: this.props.oneDayPrice}))
        .then(res => this.setState({ price: this.props.oneDayPrice[this.props.oneDayPrice.length-1].close}))
        .then(res => this.props.oneYearStockInfo(this.props.info.ticker_symbol))
        // .then(res => this.props.oneWeekStockInfo(this.props.info.ticker_symbol))
        // .then(res => this.props.fiveYearStockInfo(this.props.info.ticker_symbol))
        // .then(res => this.oneYearData = oneYearStats(this.props.fiveYearPrice))
        // .then(res => this.threeMonthData = threeMonthStats(this.oneYearData))
        // .then( res => this.oneMonthData = oneMonthStats(this.threeMonthData))
        .then( res => this.oneDayColor = this.setColor(this.props.oneDayPrice) )
        .then( res => this.oneWeekColor = this.setColor(this.oneWeekData) )
        .then( res => this.oneMonthColor = this.setColor(this.oneMonthData) )
        .then( res => this.threeMonthColor = this.setColor(this.threeMonthData) )
        .then( res => this.oneYearColor = this.setColor(this.props.oneYearPrice) )
        .then( res => this.fiveYearColor = this.setColor(this.props.fiveYearPrice) )   
        .then( res => this.handleChartOneDayData)
        .then ( res => this.activeColor())

      }
    }

    clickHandler(e) {  
      if (e === undefined || e.activePayload === undefined  || e.activePayload === null || e.activePayload[0].value === undefined )  return;
      const curr = this.props.currentPrice;
      if (e.activePayload === undefined) return;
      const close = e.activePayload[0].payload.close
      this.setState({ 
        price: e.activePayload[0].value.toLocaleString('en', {style: 'currency', currency:"USD"}),
        change: ((close - curr).toFixed(2)),
        percentageChange: Math.round((e.activePayload[0].payload.open - e.activePayload[0].payload.close) * 100 ) / 100
      })
    } 

    setColor(chart) {
      if (chart === undefined) return;
      let colorValue = ( (Object.values(chart).length === 0 ) || (chart.length === 0) || (chart[0].close === undefined )) ? "yellow" :
      (chart[chart.length-1].close >= chart[0].close ) ? "#21ce99" : "#f45531"
      debugger
      return colorValue
    }

    activeColor() {
  
      $(".Stock-Chart-Active").css(
        {
          "color": `${this.oneDayColor}`,
          "border-color": `${this.oneDayColor}`
        })
    }


    dataColor() {
      let colorValue = ( (Object.values(this.state.chartData).length === 0 ) || (this.state.chartData.length === 0) || (this.state.chartData[0].close === undefined )) ? "yellow" :
      (this.state.chartData[this.state.chartData.length-1].close >= this.state.chartData[0].close ) ? "#21ce99" : "#f45531";
      return colorValue;
    }


    removeHighlight() {
      $(".Stock-Chart-Active").css(
        {
          "color": "var(--color)",
          "border-color": "black"
        })
        $(".Stock-Chart-Active").addClass("Stock-Label")
      $(".Stock-Chart-Active").removeClass("Stock-Chart-Active")
    }

    handleChartOneDayData() {
      this.setState({ 
        chartData: this.props.oneDayPrice
      }, () => {
        this.removeHighlight()
        $(".Stock-Button-oneDay").addClass(`Stock-Chart-Active`);

        $(".Stock-Chart-Active").css(
          {
            "color": `${this.oneDayColor}`,
            "border-color": `${this.oneDayColor}`
          })
      })
      
    }
   
    handleChartOneWeekData() {
      this.setState({ 
        chartData: this.oneWeekData
      }, () => {
        this.removeHighlight();
        
        $(".Stock-Button-oneWeek ").addClass(`Stock-Chart-Active`);
        $(".Stock-Chart-Active").css(
          {
            "color": `${this.oneWeekColor}`,
            "border-color": `${this.oneWeekColor}`
          })
      })

    }

  
    handleChartOneMonthData() {
      this.setState({ 
        chartData: this.oneMonthData
      },  () => {
          this.removeHighlight();
          $(".Stock-Button-oneMonth ").addClass(`Stock-Chart-Active`);
          $(".Stock-Chart-Active").addClass("Stock-Label")
          $(".Stock-Chart-Active").css(
            {
              "color": `${this.oneMonthColor}`,
              "border-color": `${this.oneMonthColor}`
            })
        })
    }

    handleChartThreeMonthData() {
      this.setState({ 
        chartData: this.threeMonthData
      }, () => {
        this.removeHighlight();
        $(".Stock-Button-threeMonth ").addClass(`Stock-Chart-Active`);
        $(".Stock-Chart-Active").css(
          {
            "color": `${this.threeMonthColor}`,
            "border-color": `${this.threeMonthColor}`
          })
      })
    }

    handleChartOneYearData() {
      this.setState({ 
        chartData: this.props.oneYearPrice
      },  () => {
        this.removeHighlight();
        $(".Stock-Button-oneYear ").addClass(`Stock-Chart-Active`);
        $(".Stock-Chart-Active").css(
          {
            "color": `${this.oneYearColor}`,
            "border-color": `${this.oneYearColor}`
          })
      })
    }

    handleChartFiveYearData() {
      this.setState({ 
        chartData: this.props.fiveYearPrice
      },  () => {
        this.removeHighlight();
        $(".Stock-Button-fiveYear ").addClass(`Stock-Chart-Active`);
        $(".Stock-Chart-Active").css(
          {
            "color": `${this.fiveYearColor}`,
            "border-color": `${this.fiveYearColor}`
          })
      })


    }

   
    handleResetPrice() {
      this.setState({
        price: this.props.currentPrice,
        change: 0,
        percentageChange: 0
      })
    }


    customToolTip(e) {
      return (
        <div className="Stock-Tool-Tip" >{e.label}</div>
      )
    }

    
  

    render() {

          this.id = Number(this.props.match.params.id)
          const news = (this.props.news.length <= 0) ? null : this.props.news.map( (page, idx) => (
            <News page={page} idx={idx} key={`${idx}`} />
          ))
         
          const renderLineChart = ( 
            <LineChart width={600} height={250} data={this.state.chartData}  onMouseLeave={this.handleResetPrice}

             onMouseMove={this.clickHandler}>
               
              <Line type="monotone" dataKey="close" stroke={
                 ( (Object.values(this.state.chartData).length === 0 ) || (this.state.chartData.length === 0) || (this.state.chartData[0].close === undefined )) ? "yellow" :
                   (this.state.chartData[this.state.chartData.length-1].close >= this.state.chartData[0].close ) ? "#21ce99" : "#f45531"
              } strokeWidth={1.5} dot={false} />
              <YAxis type="number" domain={['dataMin'-5, 'dataMax'+5]} axisLine={false} hide={true} /> 
              <Tooltip  
              position={{ y: 0 }} 
              offset={-50}
              isAnimationActive={false}
              content={this.customToolTip}
              wrapperStyle={{ top: -10 }}
              />
              <XAxis dataKey='date' hide={true} />

            </LineChart>
            
          );
        
            


        return(
            <div className='Stock-Container'>
                <div className='Stock-Container-Title'>
                    <div className='Stock-Container-Header'>
                        <div className="Stock-Container-Company-Name">
                        {this.props.company.companyName}
                      
                        </div>
                        <div className="Stock-Container-Company-Price">
                          <br/>
                          {this.state.price.toLocaleString('en', {style: 'currency', currency:"USD"})}
                        
                        </div>
                        <div className='Stock-Container-Company-Changes'>
                        {this.state.change} ({this.state.percentageChange}%)
                        
                        </div>
                    </div>
                    <div className="Stock-Label-Date">
                    
                    </div>
                </div>

                <div className="Stock-Container-Chart-Area"> 
                  <div className="Chart-Container">
                    {renderLineChart}
                
                  </div>
                </div>

                <div className="Stock-Container-Chart-Navigation">
                    <div className="Stock-Container-Chart-Time">
                        <button className="Stock-Button-oneDay Stock-Chart-Active Stock-Label" onClick={this.handleChartOneDayData} >1D</button>
                        <button className="Stock-Button-oneWeek Stock-Label" onClick={this.handleChartOneWeekData} >1W</button>
                        <button className="Stock-Button-oneMonth" onClick={this.handleChartOneMonthData} >1M</button>
                        <button className="Stock-Button-threeMonth" onClick={this.handleChartThreeMonthData} >3M</button>
                        <button className="Stock-Button-oneYear" onClick={this.handleChartOneYearData} >1Y</button>
                        <button className="Stock-Button-fiveYear" onClick={this.handleChartFiveYearData} >5Y</button>
                    </div>
                    <div className="Stock-Container-Chart-Expand">
                       
                    </div>
                </div>
                    <div className="Stock-Container-About">
                        About
                    </div>
                    <div className="Stock-Container-Description">
                      {this.props.company.description}
                    </div>
                    <div className="Stock-Container-Company-Info">
                        <div>
                            CEO
                            <br/>
                            {this.props.company.CEO}
                        </div>

                        <div>
                            Symbol
                            <br/>
                            {this.props.info.ticker_symbol}
                        </div>

                        <div>
                            Sector
                            <br/>
                            {this.props.company.sector}
                        </div>

                        <div>
                            Industry
                            <br/>
                            {this.props.company.industry}
                        </div>
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

export default StockPage