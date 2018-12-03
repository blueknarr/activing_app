const proxy = require('http-proxy-middleware');

module.exports = (app) => {
  app.use(proxy('/auth/google', { target: 'http://localhost:5000' }));
  app.use(proxy('/reg/content', { target: 'http://localhost:5000' }));
  app.use(proxy('/reg/user', {target: 'http://localhost:5000'}));
  app.use(proxy('/api', { target: 'http://localhost:5000' }));
  app.use(proxy('/club',{ target: 'http://localhost:5000' }))
  app.use(proxy('/update/user',{ target: 'http://localhost:5000' }))
};