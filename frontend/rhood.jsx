import React from "react";
import ReactDOM from "react-dom";
import Splash from "./component/splash";
import NewUserSession from "./component/session/new_user_session";
import LoginUser from "./component/session/login_session"
import configureStore from "./component/store/store";
import Root from "./component/root";



document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  // const store;
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
  } else {
    store = configureStore();
  } 

ReactDOM.render(<Root store={store} />, root);
console.log(store.getState())
});