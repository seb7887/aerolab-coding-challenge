import React from 'react';
import Router from 'next/router';
import Link from 'next/link';
import NProgress from 'nprogress';

import { addPoints } from '../../services';

import Logo from './Logo';
import Points from './Points';
import HistoryIcon from './HistoryIcon';
import ToggleSwitch from './ToggleSwitch';

import { Navbar } from './style';

Router.onRouteChangeStart = () => {
  NProgress.start();
};

Router.onRouteChangeComplete = () => {
  NProgress.done();
};

Router.onRouteChangeError = () => {
  NProgress.done();
};

class Header extends React.Component {
  addPoints = async () => {
    await addPoints();
    Router.push('/');
  };

  render() {
    const { me, changeTheme, isActive } = this.props;
    return (
      <Navbar data-testid='header'>
        <div className='top-container'>
          <Link href='/'>
            <a>
              <Logo />
            </a>
          </Link>
          <Points
            name={me.name}
            points={me.points}
            addPoints={this.addPoints}
          />
        </div>
        <hr />
        <div className='bottom-container'>
          <ToggleSwitch isActive={isActive} changeTheme={changeTheme} />
          <Link href='/history'>
            <a>
              <HistoryIcon />
            </a>
          </Link>
        </div>
      </Navbar>
    );
  }
}

export default Header;
