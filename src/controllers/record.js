const RecordRepository = require('../repositories/RecordRepository');
const { sendSuccessResponse } = require('../utils/response-handler');

/**
 * Controller function that etrieves the list of records based on date and count
 * @param {Request} req - Express request object
 * @param {Response} res - Express response object
 * @param {Next} next - Callback function
 * @returns {Object} - Success response in JSON
 */
exports.getRecords = async function(req, res, next) {
  const {
    startDate,
    endDate,
    minCount,
    maxCount,
  } = req.body;

  try {
    const result = await RecordRepository.getRecords(
      startDate,
      endDate,
      minCount,
      maxCount,
    );

    return sendSuccessResponse(
      res,
      result
    );
  } catch(error) {
    return next(error);
  }
};
