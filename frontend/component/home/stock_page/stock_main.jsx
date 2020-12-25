import React from 'react';
import HomeNavBarContainer from '../home_nav_bar_container';
import StockPageContainer from './stock_page_container';
import {Route} from 'react-router-dom';
import WatchListButtonContainer from
  '../watch_list_button/watch_list_button_container';
import TransactionBoxContainer from
  '../transaction_box/transaction_box_container';
import SplashFooter from '../../splash/splash_footer';


class StockMain extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    const stockId = this.props.match.params.id;

    return (
      <div className='homepage-container-night'>
        <HomeNavBarContainer />
        <div className='Home-Body-Container'>
          <Route exact path='/show/:id' component={StockPageContainer} />
          <div className='Stock-Main-Util'>
            <TransactionBoxContainer
              stockId={stockId}
              curPrice={this.props.stockCurPrice}
            />
            <WatchListButtonContainer stockId={stockId} />
          </div>

        </div>
        <SplashFooter />
      </div>

    );
  }
}

export default StockMain;

