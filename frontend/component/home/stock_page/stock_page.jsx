import React from 'react';
import StockInfoBox from './stock_info_box/stock_info_box';
import ChartNavigation from './chart_navigation/chart_navigation';
import Chart from './chart/chart';
import StockNews from './stock_news/stock_news';
import StockHeader from './stock_header/stock_header';
import {
  threeMonthStats,
  oneMonthStats,
  oneWeekStats} from '../../util/stock_util';

class StockPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      price: 0,
      change: '',
      percentageChange: '',
      chartData: this.props.oneDayPrice,
      loaded: false,
      activeColor: 'black',
      activeTab: 1,
    };
    this.clickHandler = this.clickHandler.bind(this);
    this.handleResetPrice = this.handleResetPrice.bind(this);
    this.confirmData = this.confirmData.bind(this);
    this.setColor = this.setColor.bind(this);
  }

  componentDidMount() {
    this.props.fetchStockFromDB(this.id)
        .then((res) => {
          this.props.companyInfo(this.props.info.ticker_symbol);
          this.props.getNews(this.props.info.name);
          this.props.oneDayStockInfo(this.props.info.ticker_symbol);
          return this.props.oneYearStockInfo(this.props.info.ticker_symbol);
        })
        .then( (res) =>
          this.threeMonthData = threeMonthStats(this.props.oneYearPrice))
        .then( (res) => this.oneMonthData = oneMonthStats(this.threeMonthData))
        .then( (res) => this.oneWeekData = oneWeekStats(this.oneMonthData))
        .then( (res) => this.setState({
          loaded: true,
          price: this.props.oneDayPrice[this.props.oneDayPrice.length-1]
              .close,
          chartData: this.props.oneDayPrice,
          color1: this.setColor(this.props.oneDayPrice),
          color2: this.setColor(this.oneWeekData),
          color3: this.setColor(this.oneMonthData),
          color4: this.setColor(this.threeMonthData),
          color5: this.setColor(this.props.oneYearPrice),
        }, () => {
          this.currentPrice = this.state.price;
          debugger;
          this.props.currentPriceInfo(this.state.price);
          this.props.watchListInfo();
          this.handleChart(1);
        },
        ));
  }

  componentDidUpdate(prevProp, prevState) {
    if (this.props.match.params.id !== prevProp.match.params.id) {
      this.setState({loaded: false});
      this.props.fetchStockFromDB(this.id)
          .then((res) => {
            this.props.companyInfo(this.props.info.ticker_symbol);
            this.props.getNews(this.props.info.name);
            this.props.oneDayStockInfo(this.props.info.ticker_symbol);
            return this.props.oneYearStockInfo(this.props.info.ticker_symbol);
          })
          .then( (res) =>
            this.threeMonthData = threeMonthStats(this.props.oneYearPrice))
          .then( (res) => this.oneMonthData =
              oneMonthStats(this.threeMonthData))
          .then( (res) => this.oneWeekData = oneWeekStats(this.oneMonthData))
          .then( (res) => this.setState({
            loaded: true,
            price: this.props.oneDayPrice[this.props.oneDayPrice.length-1]
                .close,
            chartData: this.props.oneDayPrice,
            color1: this.setColor(this.props.oneDayPrice),
            color2: this.setColor(this.oneWeekData),
            color3: this.setColor(this.oneMonthData),
            color4: this.setColor(this.threeMonthData),
            color5: this.setColor(this.props.oneYearPrice),
          }, () => {
            this.currentPrice = this.state.price;
            debugger;
            this.props.currentPriceInfo(this.state.price);
            this.props.watchListInfo();
            this.handleChart(1);
          },
          ));
    }
  }

  clickHandler(e) {
    if (e === undefined ||
        e.activePayload === undefined ||
        e.activePayload === null ||
        e.activePayload[0].value === undefined ) {
      return;
    }
    const curr = this.props.currentPrice;
    const close = e.activePayload[0].payload.close;
    let sign = '';
    let cur = close - curr;
    if (close - curr > 0) sign = '+';
    else if (close - curr < 0) sign = '-';
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
    const buttonClass = 'Stock-Button-Error';
    if (chart === undefined || Object.keys(chart).length === 0 ) {
      return buttonClass;
    }
    if (chart[chart.length-1].close >= chart[0].close) {
      return 'Stock-Button-Positive';
    } else if ((chart[chart.length-1].close < chart[0].close) ) {
      return 'Stock-Button-Negative';
    }
    return buttonClass;
  }


  handleChart(num) {
    this.isLoaded();
    if (!this.confirmData(num)) return;
    switch (num) {
      case 1:
        // one day
        this.setState({
          chartData: this.props.oneDayPrice,
        }, ()=> this.addActive(num));
        break;
      case 2:
        // one week
        this.setState({
          chartData: this.oneWeekData,
        }, ()=> this.addActive(num));
        break;
      case 3:
        // one month
        this.setState({
          chartData: this.oneMonthData,
        }, ()=> this.addActive(num));
        break;
      case 4:
        // three month
        this.setState({chartData: this.threeMonthData},
            ()=> this.addActive(num));
        break;
      case 5:
        // one year
        this.setState({
          chartData: this.props.oneYearPrice,
        }, ()=> this.addActive(num));
        break;
      default:
        break;
    }
  }

  confirmData(num) {
    this.hideGraphError();
    switch (num) {
      case 1:
        if (this.props.oneDayPrice === undefined) this.renderGraphError();
        break;
      case 2:
        if (this.oneWeekData === undefined) this.renderGraphError();
        break;
      case 3:
        if (this.oneMonthData === undefined) this.renderGraphError();
        break;
      case 4:
        if (this.threeMonthData === undefined) this.renderGraphError();
        break;
      case 5:
        if (this.props.oneYearPrice === undefined) this.renderGraphError();
        break;
      default:
        break;
    }
    return true;
  }

  renderGraphError() {
    this.showGraphError();
    return false;
  }

  addActive(num) {
    this.setState({
      activeTab: num,
    });
  }

  handleResetPrice() {
    this.setState({
      price: this.currentPrice,
      change: '',
      percentageChange: '',
    });
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

  isLoaded() {
    if (!this.state.loaded) return;
  }

  render() {
    this.id = Number(this.props.match.params.id);
    return (
      <div className='Stock-Container'>
        <StockHeader
          companyName={this.props.company.companyName}
          price={this.state.price}
          change={this.state.change}
          percentageChange={this.state.percentageChange}
        />
        <div className="Stock-Container-Chart-Area">
          <div className="Chart-Container">
            <div className="Stock-Container-Chart-Error">
              Graph Not Avaiable
            </div>
            <Chart
              chartData={this.state.chartData}
              handleResetPrice={this.handleResetPrice}
              clickHandler={this.clickHandler}
            />
          </div>
        </div>
        <ChartNavigation
          handleChart={this.handleChart.bind(this)}
          color1={this.state.color1}
          color2={this.state.color2}
          color3={this.state.color3}
          color4={this.state.color4}
          color5={this.state.color5}
          activeTab={this.state.activeTab}
        />
        <StockInfoBox
          description={this.props.company.description}
          ceo={this.props.company.CEO}
          ticker_symbol={this.props.info.ticker_symbol}
          sector={this.props.company.sector}
          industry={this.props.company.industry}
        />
        <div className="Main-News-Header">
          News
        </div>
        <StockNews
          data={this.props.news}
        />
      </div>
    );
  }
}

export default StockPage;
