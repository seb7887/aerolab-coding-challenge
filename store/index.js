import Immutable from 'immutable';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';

import rootReducer from './reducers';

const immutableChildren = obj => {
  let state = {};
  Object.keys(obj).forEach(key => {
    state[key] = Immutable.fromJS(obj[key]);
  });
  return state;
};

const configureStore = (initialState = {}) => {
  const middlewares = [thunkMiddleware];
  const state = immutableChildren(initialState);

  // const devTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE_
  //   ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE_
  //   : f => f;

  const composables = [applyMiddleware(...middlewares)];
  const enhancer = compose(...composables);

  return createStore(rootReducer, state, enhancer);
};

export default configureStore;
