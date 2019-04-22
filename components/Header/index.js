import React from 'react';
import Link from 'next/link';

import Logo from './Logo';
import Points from './Points';

/**
 * @name Styles
 */
import { HeaderContainer } from './style';

/**
 * @name Header-Component
 */
class Header extends React.PureComponent {
  render() {
    const { me } = this.props;
    return (
      <HeaderContainer>
        <Link href='/'>
          <a>
            <Logo />
          </a>
        </Link>
        <Points name={me.name} points={me.points} />
      </HeaderContainer>
    );
  }
}

export default Header;
