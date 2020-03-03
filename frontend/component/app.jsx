import React from 'react' 
import Splash from './splash'
import { Route,Link, Switch  } from 'react-router-dom'
import LoginUserContainer from './session/login_session_container'
import NewUserSessionContainer from './session/new_user_session_container'
import Home from './home/home'
import { AuthRoute } from "../component/util/route_util"


const App = () => (
    <div>
    <Switch>
    <AuthRoute path="/" component={Home} />
    <Route path='/' component={Splash} />
    </Switch>
    {/* <Switch>
    <Route exact path="/">
        <Splash /> 
    </Route>
    <Route exact path="/login">
        <LoginUserContainer />
    </Route>
    <Route exact path="/signup">
        <NewUserSessionContainer  />
    </Route>
    </Switch> */}
    </div>
)

export default App