const logger = require('./logger');

/**
 * Handler function for sending success response in JSON
 * @param {Response} res - Express response object
 * @param {!Message} status - Returned success message
 * @param {!Object} data - Records returned
 * @returns {Object} - Response in JSON
 */
function sendSuccessResponse(
  res,
  message = 'Success',
  data = null,
) {
  return res.status(200).send({
    code: 0,
    msg: message,
    records: data,
  });
}

/**
 * Handler function for sending error response in JSON
 * @param {Response} res - Express response object
 * @param {!Number} status - HTTP status code
 * @param {!String} error - Error message
 * @returns {Object} - Response in JSON
 */
function sendErrorResponse(
  res,
  status = 400,
  error = 'Failed',
) {
  return res.status(status).send({
    code: -1,
    msg: error,
  });
}

/**
 * Handler function for sending fatal error response in JSON
 * @param {Response} res - Express response object
 * @param {!Message} status - Returned success message
 * @param {!Object} data - Records returned
 * @returns {Object} - Response in JSON
 */
function sendFatalErrorResponse(
  res,
  error,
) {
  logger.error(error);
  logger.error(error.message);
  logger.error(error.stack);

  return res.status(500).send({
    code: -1,
    msg: 'Internal server error',
  });
}

module.exports = {
  sendSuccessResponse,
  sendErrorResponse,
  sendFatalErrorResponse,
};