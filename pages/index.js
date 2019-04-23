import React from 'react';

import Banner from '../components/Banner';

class Index extends React.Component {
  render() {
    const { me } = this.props;
    return (
      <>
        <Banner />
        <>{!me ? <h1>Loading</h1> : <h1>Hello {`${me.name}`}</h1>}</>
      </>
    );
  }
}

export default Index;
