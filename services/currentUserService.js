import fetch from 'isomorphic-unfetch';

import config from '../config';

const { token, endpoint } = config;

export const currentUserService = async () => {
  const response = await fetch(`${endpoint}/user/me`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  const json = await response.json();

  return json;
};
