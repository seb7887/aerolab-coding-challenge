import fetch from 'isomorphic-unfetch';

import config from '../config';

const { apiEndpoint } = config;

export const getHistory = async () => {
  const response = await fetch(`${apiEndpoint}/user/history`, {
    method: 'GET'
  });
  const history = await response.json();

  return history;
};
