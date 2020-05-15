
# Erichood

EricHood is a clone of the popular online investing website Robinhood where users can trade stocks in real time.

[Live Site](https://rhood.herokuapp.com/)


![GitHub Logo](/app/assets/images/screenshot.png)

# Technologies
* Frontend
    * React
    * Redux
    * Recharts
* Backend
    * Rails
    * PostgreSQL
    * ActiveRecord
* APIs
    * NewsAPI
    * Financial Modeling Prep API


# Features
---
Over 7000 publicly traded companies from NYSE, and NASDAQ. 

Real-time, stock information with historical data dating five years previously.

![Stock Chart](/app/assets/images/stocks.gif)

Through the use of Recharts, we can render both the graph and a price at any particular point in time to the users.
Also by comparing the current price value with the chart's opening price point, the graph will render different color base on positive or negative activity.

```
  clickHandler(e) {  
      if (e.activePayload[0].value === undefined || 
        e.activePayload[0].value === undefined || e === undefined) return null;
      const curr = this.props.currentPrice;
      const close = e.activePayload[0].payload.close
      this.setState({ 
        price: e.activePayload[0].value.toLocaleString('en', {style: 'currency', currency:"USD"}),
        change: ((close - curr).toFixed(2)),
        percentageChange: Math.round((e.activePayload[0].payload.open - 
        e.activePayload[0].payload.close) * 100 ) / 100
      })
    } 
```




Users has the ability to buy and sell shares.
Before the transaction is sent to the backend, it checks from the state if the current user has enough funds on their account before creating a new transaction.
This approach will be lessen the stress from the server. Once transaction is made the user's transactions and funds are update and sent back to frontend as a new state.

![Transaction](/app/assets/images/transaction.gif)
```
    handleBuy() {
        if (this.state.shareToBuy <= 0 )  {
            return this.setState({
                error: "Minimum 1 share"
            })
        } else if ((this.state.shareToBuy * this.props.sharesPrice) > this.state.funds) {
            return this.setState({
                error: "Insufficient funds"
            })
        }
        else {
            const data = {
                stock_id: this.props.stockInfo.id,
                shares: this.state.shareToBuy,
                price: this.props.sharesPrice
            }
            this.props.buyTransaction(data)
            .then( (res) => this.updateStats())
            this.setState({ error: null})
        };
    };
```


Setting two different attributes, we can let the user change the color theme of the site. On the original Robinhood app, the theme depends if the stocket market is currently open or not. 

![Dark Mode](/app/assets/images/darkmode.gif)
```
changeTheme() {
    var ele = document.getElementsByTagName("html")[0].getAttribute("data-theme")
    if (ele === "light") {  
        document.documentElement.setAttribute("data-theme", "dark");
        this.setState({mode: "dark"});
    }
    else {
        document.documentElement.setAttribute("data-theme", "light");
        this.setState({mode: "light"});
    };  
}
```


# Installation
1. Clone repo to local directory. 
1. Run bundle exec install and npm install frontend 
1. Seed database by rails db:setup
1. Navigate to: http://localhost:3000











