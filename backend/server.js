// imports modules & dependencies
const app = require('./src/app');
const logger = require('./src/middleware/winston.logger');

// Use PORT environment variable (required for Render)
const PORT = process.env.PORT || process.env.APP_PORT || 5010;

app.listen(PORT, '0.0.0.0', () => {
    logger.info(`App server running on port: ${PORT}`);
    logger.info(`Environment: ${process.env.NODE_ENV || 'development'}`);
    
    // Only log URL if it exists
    if (process.env.APP_BASE_URL) {
        logger.info(`Access URL: ${process.env.APP_BASE_URL}`);
    } else {
        logger.info(`Local access: http://localhost:${PORT}`);
    }
});