import React from 'react';
import {Route, Switch} from 'react-router-dom';
import LoginUserContainer from './session/login_session_container';
import NewUserSessionContainer from './session/new_user_session_container';
import SplashContainer from './splash/splash_container';
import {AuthRoute} from '../component/util/route_util';
import HomeContainer from './home/home_container';
import StockMainContainer from './home/stock_page/stock_main_container';
import PortfolioHome from '../component/home/portfolio/portfolio_home';
import ConfirmationModal from './home/modal/confirmation';

const App = () => (
  <div className="App">
    <ConfirmationModal/>
    <Switch>
      <AuthRoute exact path="/home" component={HomeContainer} />
      <AuthRoute exact path='/show/:id' component={StockMainContainer} />
      <AuthRoute exact path='/portfolio' component={PortfolioHome} />
      <Route exact path='/' component={SplashContainer} />
      <Route path='/login' component={LoginUserContainer} />
      <Route path='/signup' component={NewUserSessionContainer} />
    </Switch>
  </div>
);

export default App;
