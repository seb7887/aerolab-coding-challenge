const endpoint = 'https://aero-micro.now.sh';
const serviceWorker = '/service-worker.js';
const port = process.env.PORT || 3000;
const perPage = 16;

module.exports = {
  endpoint,
  serviceWorker,
  port,
  perPage
};
