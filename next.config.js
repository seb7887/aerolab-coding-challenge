require('dotenv').config();

const path = require('path');
const DotEnv = require('dotenv-webpack');

module.exports = {
  webpack: config => {
    config.plugins = config.plugins || [];

    config.plugins = [
      ...config.plugins,

      // Read the .env files
      new DotEnv({
        path: path.join(__dirname, '.env'),
        systemvars: true
      })
    ];
    return config;
  }
};
