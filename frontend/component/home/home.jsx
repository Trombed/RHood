import React from 'react';
import HomeNavBarContainer from './home_nav_bar_container';
import WatchListContainer from './watch_list/watch_list_container';
import SplashFooter from '../splash/splash_footer';
import MainContentContainer from './main_content/main_container';


class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='homepage-container-night'>
        <HomeNavBarContainer />
        <div className='Home-Body-Container'>

          <MainContentContainer />

          <WatchListContainer />
        </div>
        <SplashFooter />
      </div>

    );
  }
}

export default Home;
