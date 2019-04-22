import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getCurrentUser } from '../store/actions';
import { currentUserSelector } from '../store/selectors';

class Index extends React.Component {
  static async getInitialProps({ store }) {
    await store.dispatch(getCurrentUser());
  }

  componentDidMount() {
    const { getCurrentUser } = this.props;
    getCurrentUser();
  }

  render() {
    const { currentUser } = this.props;
    return (
      <>
        {!currentUser ? (
          <h1>Loading</h1>
        ) : (
          <h1>Hello {`${currentUser.name}`}</h1>
        )}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: currentUserSelector(state.currentUserReducer)
  };
};

Index.propTypes = {
  getCurrentUser: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  { getCurrentUser }
)(Index);
