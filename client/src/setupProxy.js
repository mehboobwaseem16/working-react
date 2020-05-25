const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'https://5000-da0ed52e-2525-4905-b79e-9aed4da137ed.ws-eu01.gitpod.io',
            changeOrigin: true,
        })
    );
};