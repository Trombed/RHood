import React from 'react';
import {LineChart, Line, Tooltip, YAxis, XAxis} from 'recharts';
import {
  threeMonthStats,
  oneMonthStats,
  oneWeekStats} from '../../util/stock_util';
import News from '../news/news';


class StockPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      price: 0,
      change: '',
      percentageChange: '',
      chartData: this.props.oneDayPrice,
      fiveYearLoaded: false,
      loaded: false,
    };
    this.clickHandler = this.clickHandler.bind(this);
    this.handleChartOneDayData = this.handleChartOneDayData.bind(this);
    this.handleChartOneWeekData = this.handleChartOneWeekData.bind(this);
    this.handleChartOneMonthData = this.handleChartOneMonthData.bind(this);
    this.handleChartThreeMonthData = this.handleChartThreeMonthData.bind(this);
    this.handleChartOneYearData = this.handleChartOneYearData.bind(this);
    this.handleChartFiveYearData = this.handleChartFiveYearData.bind(this);
    this.handleResetPrice = this.handleResetPrice.bind(this);
    this.customToolTip = this.customToolTip.bind(this);
    this.removeHighlight = this.removeHighlight.bind(this);
    this.dataColor = this.dataColor.bind(this);
    this.setColor = this.setColor.bind(this);
  }


  componentDidMount() {
    this.props.fetchStockFromDB(this.id)
        .then((res) => this.props.companyInfo(this.props.info.ticker_symbol))
        .then((res) => this.props.getNews(this.props.info.name))
        .then( (res) => this.props.watchListInfo())
        .then((res) => this.setState({price: this.props.currentPrice}))
        .then((res) =>
          this.props.oneDayStockInfo(this.props.info.ticker_symbol))
        .then((res) => this.setState({chartData: this.props.oneDayPrice}))
        .then((res) =>
          this.setState({
            price: this.props.oneDayPrice[this.props.oneDayPrice.length-1]
                .close,
          }))
        .then( (res) =>
          this.currentPrice =
          this.props.oneDayPrice[this.props.oneDayPrice.length-1].close)
        .then( (res) => this.props.currentPriceInfo(this.currentPrice))
        .then((res) =>
          this.props.oneYearStockInfo(this.props.info.ticker_symbol))
        .then((res) =>
          this.threeMonthData = threeMonthStats(this.props.oneYearPrice))
        .then( (res) => this.oneMonthData = oneMonthStats(this.threeMonthData))
        .then( (res) => this.oneWeekData = oneWeekStats(this.oneMonthData))
        .then( (res) => this.oneWeekColor = this.setColor(this.oneWeekData) )
        .then( (res) =>
          this.threeMonthColor = this.setColor(this.threeMonthData) )
        .then( (res) =>
          this.oneMonthColor = this.setColor(this.oneMonthData) )
        .then( (res) =>
          this.oneYearColor = this.setColor(this.props.oneYearPrice) )
        .then( (res) =>
          this.oneDayColor = this.setColor(this.props.oneDayPrice) )
        .then( (res) => this.handleChartOneDayData)
        .then( (res) => this.activeColor())
        .then( this.setState({loaded: true}));
  }


  componentDidUpdate(prevProp, prevState) {
    if (this.props.match.params.id !== prevProp.match.params.id) {
      this.setState({loaded: false});
      this.props.fetchStockFromDB(this.id)
          .then((res) => this.props.companyInfo(this.props.info.ticker_symbol))
          .then((res) => this.props.getNews(this.props.info.name))
          .then( (res) => this.props.watchListInfo())
          .then((res) => this.setState({price: this.props.currentPrice}))
          .then((res) =>
            this.props.oneDayStockInfo(this.props.info.ticker_symbol))
          .then((res) => this.setState({chartData: this.props.oneDayPrice}))
          .then((res) =>
            this.setState({
              price: this.props.oneDayPrice[this.props.oneDayPrice.length-1]
                  .close}))
          .then( (res) =>
            this.currentPrice =
            this.props.oneDayPrice[this.props.oneDayPrice.length-1]
                .close)
          .then( (res) => this.props.currentPriceInfo(this.currentPrice))
          .then((res) =>
            this.props.oneYearStockInfo(this.props.info.ticker_symbol))
          .then((res) =>
            this.threeMonthData = threeMonthStats(this.props.oneYearPrice))
          .then( (res) =>
            this.oneMonthData = oneMonthStats(this.threeMonthData))
          .then( (res) => this.oneWeekData = oneWeekStats(this.oneMonthData))
          .then( (res) =>
            this.oneDayColor = this.setColor(this.props.oneDayPrice) )
          .then( (res) => this.oneWeekColor = this.setColor(this.oneWeekData))
          .then( (res) => this.oneMonthColor = this.setColor(this.oneMonthData))
          .then( (res) =>
            this.threeMonthColor = this.setColor(this.threeMonthData))
          .then( (res) =>
            this.oneYearColor = this.setColor(this.props.oneYearPrice))
          .then( (res) => {
            this.removeOneDay();
            this.handleChartOneDayData();
          })
          .then( this.setState({loaded: true}));
    }
  }

  clickHandler(e) {
    if (e === undefined || e.activePayload === undefined ||
       e.activePayload === null || e.activePayload[0].value === undefined ) {
      return;
    }
    const curr = this.props.currentPrice;
    if (e.activePayload === undefined) return;
    const close = e.activePayload[0].payload.close;
    let sign = '';
    let cur = close - curr;
    if (close - curr > 0) sign = '+';
    if (close - curr < 0) sign = '-';
    cur = Math.abs(cur).toFixed(2);
    const answer = sign + '$' + cur;
    const change = sign + ((cur / curr) * 100).toFixed(2);
    this.setState({
      price: e.activePayload[0]
          .value.toLocaleString('en', {style: 'currency', currency: 'USD'}),
      change: answer,
      percentageChange: change,
    });
  }

  setColor(chart) {
    if (chart === undefined) return;
    const colorValue = ( (Object.values(chart).length === 0 ) ||
    (chart.length === 0) || (chart[0].close === undefined )) ? 'yellow' :
      (chart[chart.length-1].close >= chart[0].close ) ? '#21ce99' : '#f45531';

    return colorValue;
  }

  activeColor() {
    $('.Stock-Chart-Active').css(
        {
          'color': `${this.oneDayColor}`,
          'border-color': `${this.oneDayColor}`,
        });
  }


  dataColor() {
    const colorValue = ( (Object.values(this.state.chartData).length === 0 ) ||
     (this.state.chartData.length === 0) ||
     (this.state.chartData[0].close === undefined )) ? 'yellow' :
      (this.state.chartData[this.state.chartData.length-1].close >=
        this.state.chartData[0].close ) ? '#21ce99' : '#f45531';
    return colorValue;
  }


  removeHighlight() {
    $('.Stock-Chart-Active').css(
        {
          'color': 'var(--color)',
          'border-color': 'black',
        });
    $('.Stock-Chart-Active').addClass('Stock-Label');
    $('.Stock-Chart-Active').removeClass('Stock-Chart-Active');
  }

  handleChartOneDayData() {
    this.isLoaded();
    this.hideGraphError();
    this.setState({
      chartData: this.props.oneDayPrice,
    }, () => {
      this.removeOneDay();
    });
  }

  removeOneDay() {
    this.removeHighlight();
    $('.Stock-Button-oneDay').addClass(`Stock-Chart-Active`);

    $('.Stock-Chart-Active').css(
        {
          'color': `${this.oneDayColor}`,
          'border-color': `${this.oneDayColor}`,
        });
  }

  handleChartOneWeekData() {
    this.isLoaded();

    if (this.oneWeekData === undefined) {
      this.removeOneWeek();
      return this.showGraphError();
    }
    this.hideGraphError();

    this.setState({
      chartData: this.oneWeekData,
    }, () => {
      this.removeOneWeek();
    });
  }

  removeOneWeek() {
    this.removeHighlight();

    $('.Stock-Button-oneWeek ').addClass(`Stock-Chart-Active`);
    $('.Stock-Chart-Active').css(
        {
          'color': `${this.oneWeekColor}`,
          'border-color': `${this.oneWeekColor}`,
        });
  }


  handleChartOneMonthData() {
    this.isLoaded();

    if (this.oneWeekData === undefined) {
      this.removeOneMonth();
      return this.showGraphError();
    }
    this.hideGraphError();

    this.setState({
      chartData: this.oneMonthData,
    }, () => {
      this.removeOneMonth();
    });
  }

  removeOneMonth() {
    this.removeHighlight();
    $('.Stock-Button-oneMonth ').addClass(`Stock-Chart-Active`);
    $('.Stock-Chart-Active').addClass('Stock-Label');
    $('.Stock-Chart-Active').css(
        {
          'color': `${this.oneMonthColor}`,
          'border-color': `${this.oneMonthColor}`,
        });
  }

  isLoaded() {
    if (!this.state.loaded) return;
  }

  handleChartThreeMonthData() {
    this.isLoaded();

    if (this.oneWeekData === undefined) {
      this.removeThreeMonth();
      return this.showGraphError();
    }
    this.hideGraphError();

    this.setState({
      chartData: this.threeMonthData,
    }, () => {
      this.removeThreeMonth();
    });
  }

  removeThreeMonth() {
    this.removeHighlight();
    $('.Stock-Button-threeMonth ').addClass(`Stock-Chart-Active`);
    $('.Stock-Chart-Active').css(
        {
          'color': `${this.threeMonthColor}`,
          'border-color': `${this.threeMonthColor}`,
        });
  }

  handleChartOneYearData() {
    this.isLoaded();

    if (this.oneWeekData === undefined) {
      this.removeOneYear();

      return this.showGraphError();
    }
    this.hideGraphError();

    this.setState({
      chartData: this.props.oneYearPrice,
    }, () => {
      this.removeOneYear();
    });
  }

  removeOneYear() {
    this.removeHighlight();
    $('.Stock-Button-oneYear ').addClass(`Stock-Chart-Active`);
    $('.Stock-Chart-Active').css(
        {
          'color': `${this.oneYearColor}`,
          'border-color': `${this.oneYearColor}`,
        });
  }

  handleChartFiveYearData() {
    if (!this.state.fiveYearLoaded) {
      this.setState({fiveYearLoaded: true});

      this.props.fiveYearStockInfo(this.props.info.ticker_symbol)
          .then( (res) => this.renderFiveYear() )
          .then( (res) => this.fiveYearColor = this.setColor(
              this.props.fiveYearPrice));
    } else {
      this.renderFiveYear();
    }
  }

  renderFiveYear() {
    this.setState({
      chartData: this.props.fiveYearPrice,
    }, () => {
      this.removeHighlight();
      $('.Stock-Button-fiveYear ').addClass(`Stock-Chart-Active`);
      $('.Stock-Chart-Active').css(
          {
            'color': `${this.fiveYearColor}`,
            'border-color': `${this.fiveYearColor}`,
          });
    });
  }


  handleResetPrice() {
    this.setState({
      price: this.currentPrice,
      change: '',
      percentageChange: '',
    });
  }

  percentage() {
    if (this.state.percentageChange === '') {
      return;
    } else {
      return '(' + this.state.percentageChange + '%' + ')';
    }
  }

  activePrice() {
    if (this.state.change === '') {
      return `$0.00`;
    } else {
      return this.state.change;
    }
  }


  customToolTip(e) {
    if (e.label === undefined) return;
    let time;
    if (e.payload.length === 0) {
      time = '';
    } else if (e.payload[0].payload.label.includes(',')) {
      time = e.payload[0].payload.label.split(',')[0];
    } else {
      time = e.payload[0].payload.label;
    }


    return (
      <div className="Stock-Tool-Tip" >
        {e.label} {time}
      </div>
    );
  }

  text() {
    if (this.state.price === undefined) {
      return '$0.00';
    } else {
      return this.state.price.toLocaleString('en', {
        style: 'currency', currency: 'USD'});
    }
  }

  showGraphError() {
    const errorDiv = document.getElementsByClassName(
        'Stock-Container-Chart-Error')[0];
    errorDiv.style.display = 'block';
    this.setState({
      chartData: 0,
    });
  }

  hideGraphError() {
    const errorDiv = document.getElementsByClassName(
        'Stock-Container-Chart-Error')[0];
    errorDiv.style.display = 'none';
  }


  render() {
    this.id = Number(this.props.match.params.id);
    const news = (this.props.news.length <= 0) ?
    null :
    this.props.news.map( (page, idx) => (
      <News page={page} idx={idx} key={`${idx}`} />
    ));

    const renderLineChart = (
      <LineChart width={600} height={250} data={
        this.state.chartData
      } onMouseLeave={this.handleResetPrice}

      onMouseMove={this.clickHandler}>

        <Line
          type="monotone"
          dataKey="close"
          stroke={
            ((Object.values(this.state.chartData).length === 0 ) ||
            (this.state.chartData.length === 0) ||
            (this.state.chartData[0].close === undefined )) ? 'yellow' :
                   (this.state.chartData[this.state.chartData.length-1].close >=
                     this.state.chartData[0].close ) ?
                     '#21ce99' : '#f45531'
          }
          strokeWidth={1.5}
          dot={false}
        />
        <YAxis
          type="number"
          domain={['dataMin'-5, 'dataMax'+5]}
          axisLine={false}
          hide={true}
        />
        <Tooltip
          position={{y: 0}}
          offset={-50}
          isAnimationActive={false}
          content={this.customToolTip}
          wrapperStyle={{top: -20}}
        />
        <XAxis
          dataKey='date'
          hide={true}
        />

      </LineChart>

    );


    return (
      <div className='Stock-Container'>
        <div className='Stock-Container-Title'>
          <div className='Stock-Container-Header'>
            <div className="Stock-Container-Company-Name">
              {this.props.company.companyName}

            </div>
            <div className="Stock-Container-Company-Price">
              <br/>
              {this.text()}
            </div>
            <div className='Stock-Container-Company-Changes'>
              {this.activePrice()}
              {this.percentage()}
            </div>
          </div>
          <div className="Stock-Label-Date">

          </div>
        </div>

        <div className="Stock-Container-Chart-Area">
          <div className="Chart-Container">
            <div className="Stock-Container-Chart-Error">
                        Graph Not Avaiable
            </div>
            {renderLineChart}

          </div>
        </div>

        <div className="Stock-Container-Chart-Navigation">
          <div className="Stock-Container-Chart-Time">
            <button
              className="Stock-Button-oneDay Stock-Chart-Active Stock-Label"
              onClick={this.handleChartOneDayData}
            >
              1D
            </button>
            <button
              className="Stock-Button-oneWeek Stock-Label"
              onClick={this.handleChartOneWeekData} >
              1W
            </button>
            <button
              className="Stock-Button-oneMonth"
              onClick={this.handleChartOneMonthData} >
              1M
            </button>
            <button
              className="Stock-Button-threeMonth"
              onClick={this.handleChartThreeMonthData} >
              3M
            </button>
            <button
              className="Stock-Button-oneYear"
              onClick={this.handleChartOneYearData} >
              1Y
            </button>
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

    );
  }
}

export default StockPage;
