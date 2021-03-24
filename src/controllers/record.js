const { sendSuccessResponse } = require('../utils/response-handler');
const RecordRepository = require('../repositories/RecordRepository');

export async function getRecords(req, res, next) {
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
      result,
    );
  } catch(error) {
    return next(error);
  }
}
