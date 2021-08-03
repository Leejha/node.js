const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        "/api",
        createProxyMiddleware({
            // target : 'https://5000-teal-fox-mayilo51.ws-us11.gitpod.io',
            target : 'https://5000-teal-fox-mayilo51.ws-us13.gitpod.io',
            changeOrigin : true, 
        })
    );
};

