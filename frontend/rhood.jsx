import React from "react";
import ReactDOM from "react-dom";
import Splash from "./component/splash/splash";
import NewUserSession from "./component/session/new_user_session";
import LoginUser from "./component/session/login_session"
import configureStore from "./component/store/store";
import Root from "./component/root";
import APIUtil from "./component/util/session_api_util"


document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  // const store;
  window.logout = APIUtil.logout;
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
    console.log(store.getState())
  } else {
    store = configureStore();
    console.log(store.getState())
  } 

ReactDOM.render(<Root store={store} />, root);
window.getState = store.getState
console.log(store.getState())
});