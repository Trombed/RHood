
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

Real-time, stock information with historical data from 5 years back.

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




Ability to buy and sell shares.
![Transaction](/app/assets/images/transaction.gif)



Using SCSS and attribute, we can let the user change the color theme of the site. On the original Robinhood app, the theme depends if the stocket market is currently open or not. 

![Dark Mode](/app/assets/images/darkmode.gif)
```
changeTheme() {
    var ele = document.getElementsByTagName("html")[0].getAttribute("data-theme")
    if (ele === "light") {  
        document.documentElement.setAttribute("data-theme", "dark");
        this.setState({mode: "dark"});
    };
    else {
        document.documentElement.setAttribute("data-theme", "light");
        this.setState({mode: "light"});
    };  
}
```


# Installation
---
1 Clone repo to local directory. 
1 Run bundle exec install and npm install frontend 
1 Seed database by rails db:setup
1 Navigate to: http://localhost:3000











