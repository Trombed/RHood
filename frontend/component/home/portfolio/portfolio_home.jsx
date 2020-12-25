import React from 'react';
import HomeNavBarContainer from '../home_nav_bar_container';
import PortfolioContainer from './portfolio_container';
import SplashFooter from '../../splash/splash_footer';


class PortfolioHome extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className='homepage-container-night'>
        <HomeNavBarContainer />
        <div className='Home-Body-Container'>
          <PortfolioContainer />
        </div>
        <SplashFooter />
      </div>

    );
  }
}

export default PortfolioHome;
