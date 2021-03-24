const RecordRepository = require('../repositories/RecordRepository');
const { formatDate } = require('../helper');
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
    const formattedStartDate = formatDate(startDate);
    const formattedEndDate = formatDate(endDate);

    const result = await RecordRepository.getRecords(
      formattedStartDate,
      formattedEndDate,
      minCount,
      maxCount,
    );

    return sendSuccessResponse(
      res,
      'Success',
      result,
    );
  } catch(error) {
    return next(error);
  }
};
