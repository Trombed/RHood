import React from 'react' 
import Splash from './splash'
import { Route,Link, Switch  } from 'react-router-dom'
import LoginUserContainer from './session/login_session_container'
import NewUserSessionContainer from './session/new_user_session_container'




const App = () => (
    <div>
    <Switch>
    <Route exact path="/">
        <Splash /> 
    </Route>
    <Route exact path="/login">
        <LoginUserContainer />
    </Route>
    <Route exact path="/signup">
        <NewUserSessionContainer  />
    </Route>
    </Switch>
    </div>
)

export default App