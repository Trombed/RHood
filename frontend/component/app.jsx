import React from 'react';
import { Route,Link, Switch  } from 'react-router-dom';
import LoginUserContainer from './session/login_session_container';
import NewUserSessionContainer from './session/new_user_session_container';
import SplashContainer from './splash/splash_container';
import { AuthRoute } from "../component/util/route_util";
import HomeContainer from './home/home_container';
import StockPageContainer from './home/stock_page/stock_page_container';
import StockMainContainer from './home/stock_page/stock_main_container';




const App = () => (
    <div>


    <Switch>
    <AuthRoute exact path='/show/:id' component={StockMainContainer} />
    <Route path='/login' component={LoginUserContainer} />
    <Route path='/signup' component={NewUserSessionContainer} /> 
    <AuthRoute path="/home" component={HomeContainer} />  
    <Route path='/' component={SplashContainer} />
    </Switch>



  
    </div>
)

export default App