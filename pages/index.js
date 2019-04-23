import React from 'react';

class Index extends React.Component {
  render() {
    const { me } = this.props;
    return <>{!me ? <h1>Loading</h1> : <h1>Hello {`${me.name}`}</h1>}</>;
  }
}

export default Index;
