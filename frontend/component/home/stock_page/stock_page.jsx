import React from 'react'
import { LineChart, Line, Tooltip, Legend, YAxis, XAxis } from 'recharts';



class StockPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            price: 0,
            change: 0,
            percentageChange: 0,
            chartData: this.props.price,
            labelDate: ''
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
       
    }

    componentDidMount() {
     
        this.props.fetchStockFromDB(this.id)
          .then(res => this.props.companyInfo(this.props.info.ticker_symbol))
          // .then( res => this.props.watchListInfo())
          // .then( res => this.props.currentPriceInfo(this.props.info.ticker_symbol))
          // .then(res => this.setState({ price: this.props.currentPrice}))
          // .then(res => this.props.oneDayStockInfo(this.props.info.ticker_symbol))
          // .then(res => this.setState({ chartData: this.props.price}))
          // .then(res => this.props.oneWeekStockInfo
          // (this.props.info.ticker_symbol))
          // .then(res => this.props.oneMonthStockInfo
          // (this.props.info.ticker_symbol))
          // .then(res => this.props.threeMonthStockInfo
          // (this.props.info.ticker_symbol))
          // .then(res => this.props.oneYearStockInfo
          // (this.props.info.ticker_symbol))
          // .then(res => this.props.fiveYearStockInfo
          // (this.props.info.ticker_symbol))      
    }


    componentDidUpdate(prevProp, prevState) {
     
      if (this.props.match.params.id !== prevProp.match.params.id) {
        this.props.fetchStockFromDB(this.id)
        .then(res => this.props.companyInfo
          (this.props.info.ticker_symbol))
          // .then( res => this.props.currentPriceInfo(this.props.info.ticker_symbol))

      }
    }




    clickHandler(e) {
     
      this.setState({ 
        price: e.activePayload[0].value.toFixed(2),
        change: (e.activePayload[0].payload.open - e.activePayload[0].payload.close).toFixed(2),
        percentageChange: ((e.activePayload[0].payload.open - e.activePayload[0].payload.close) / 100).toFixed(2),
        labelDate: e.activeLabel
      })

    }


    handleChartOneDayData() {
      this.setState({ 
        chartData: this.props.price
      })
     
    }
   
    handleChartOneWeekData() {
      this.setState({ 
        chartData: this.props.oneWeekPrice
      })
    }

    handleChartOneMonthData() {
      this.setState({ 
        chartData: this.props.oneMonthPrice
      })
    }

    handleChartThreeMonthData() {
      this.setState({ 
        chartData: this.props.threeMonthPrice
      })
    }

    handleChartOneYearData() {
      this.setState({ 
        chartData: this.props.oneYearPrice
      })
    }

    handleChartFiveYearData() {
      this.setState({ 
        chartData: this.props.fiveYearPrice
      })
    
    }

   
    handleResetPrice() {
      this.setState({
        price: this.props.currentPrice
      })
    }
    customToolTip(e) {
    
      return (
        <div>{e.label}</div>
      )
    }



    render(){

    let  data = [ {
        "date" : "2020-03-10 16:00:00",
        "open" : 283.290000000000,
        "low" : 282.870000000000,
        "high" : 285.000000000000,
        "close" : 284.930000000000,
        "volume" : 65650132
      }, {
        "date" : "2020-03-10 15:00:00",
        "open" : 274.110000000000,
        "low" : 272.420000000000,
        "high" : 279.100000000000,
        "close" : 278.350000000000,
        "volume" : 53142253
      }]

          this.id = Number(this.props.match.params.id)
          
          // const dataColor = ((data[data.length-1].close - data[0].close) >= 0) ? "#21ce99" : "#f45531"
      
          const renderLineChart = ( 
            <LineChart width={600} height={250} data={data}  onMouseLeave={this.handleResetPrice}
            //this.state.chartData
             onMouseMove={this.clickHandler}>
              <Line type="monotone" dataKey="open" stroke={'red'} strokeWidth={2} dot={false} />
              <YAxis type="number" domain={['dataMin', 'dataMax']} axisLine={false} hide={true} />
              <Tooltip  
              position={{ y: 0 }} 
              offset={-50}
              isAnimationActive={false}
              content={this.customToolTip}
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
                        ${this.state.price}
                        
                        </div>
                        <div className='Stock-Container-Company-Changes'>
                        {this.state.change} ({this.state.percentageChange}%)
                        Today
                        </div>
                    </div>
                    <div className="Stock-Label-Date">
                      {this.state.labelDate}
                    </div>
                </div>

                <div className="Stock-Container-Chart-Area"> 
                  <div className="Chart-Container chart-content">
                    {renderLineChart}
                
                  </div>
                </div>

                <div className="Stock-Container-Chart-Navigation">
                    <div className="Stock-Container-Chart-Time">
                        <button className="Stock-Button-1D" onClick={this.handleChartOneDayData} >1D</button>
                        <button className="Stock-Button-1W" onClick={this.handleChartOneWeekData} >1W</button>
                        <button className="Stock-Button-1M" onClick={this.handleChartOneMonthData} >1M</button>
                        <button className="Stock-Button-1M" onClick={this.handleChartThreeMonthData} >3M</button>
                        <button className="Stock-Button-1M" onClick={this.handleChartOneYearData} >1Y</button>
                        <button className="Stock-Button-1M" onClick={this.handleChartFiveYearData} >5Y</button>
                    </div>
                    <div className="Stock-Container-Chart-Expand">
                        Expand []
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
                            {this.props.company.ceo}
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
                                

            </div>
            
        )
        }    
        
}

export default StockPage