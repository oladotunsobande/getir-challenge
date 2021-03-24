const Joi = require('joi');
const { sendErrorResponse } = require('../utils/response-handler');

/**
 * Validates the request payload sent for retrieving records from the records collection
 * @param {Request} req - Express request object
 * @param {Response} res - Express response object
 * @param {Next} next - Callback function
 * @returns {Object} - Response in JSON
 */
exports.validateGetRecords = function(req, res, next) {
  const schema = Joi.object().keys({
    startDate: Joi.date()
      .format('YYYY-MM-DD')
      .required(),
    endDate: Joi.date()
      .format('YYYY-MM-DD')
      .greater(Joi.ref('startDate'))
      .required(),
    minCount: Joi.number()
      .min(0)
      .required(),
    maxCount: Joi.number()
      .min(0)
      .greater(Joi.ref('minCount'))
      .required(),
  }).unknown(true);

  const validation = schema.validate(req.body);
  if (validation.error) {
    const message = validation.error.message
      ? validation.error.message
      : validation.error.details[0].message;

    return sendErrorResponse(res, message);
  }

  return next();
};