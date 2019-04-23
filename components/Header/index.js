import React from 'react';
import Link from 'next/link';

import Logo from './Logo';
import Points from './Points';
import HistoryIcon from './HistoryIcon';

import { Navbar } from './style';

/**
 * @name Header-Component
 */
class Header extends React.PureComponent {
  render() {
    const { me } = this.props;
    return (
      <Navbar>
        <div className='top-container'>
          <Link href='/'>
            <a>
              <Logo />
            </a>
          </Link>
          <Points name={me.name} points={me.points} />
        </div>
        <hr />
        <div className='bottom-container'>
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
