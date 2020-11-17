import logger from '../logger';

// eslint-disable-next-line no-unused-vars
export default (error, req, res, next) => {
  logger.error(
    `${error.status || 500} - ${error.message} - ${req.originalUrl} - ${
      req.method
    } - ${req.ip}`
  );
  res.status(error.status || 500);
  res.json({
    message:
      req.app.get('env') === 'development'
        ? error.message
        : 'Unknown error happened',
  });
};