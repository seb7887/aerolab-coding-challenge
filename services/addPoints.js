import fetch from 'isomorphic-unfetch';

import config from '../config';

const { apiEndpoint } = config;

export const addPoints = async () => {
  const response = await fetch(`${apiEndpoint}/user/points`, {
    method: 'GET'
  });
  const json = await response.json();

  return json;
};
