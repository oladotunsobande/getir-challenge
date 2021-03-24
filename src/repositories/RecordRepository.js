const { Record } = require('../models');

/**
 * Repository class for querying the record collection
 * @type {RecordRepository}
 */
class RecordRepository {

  /**
   * Queries the database to retrieve the list of records 
   * based on arguments provided
   * @param {Date} startDate - Lower bound value of createdAt field
   * @param {Date} endDate - Upper bound value of createdAt field
   * @param {Number} minCount - Lower bound of the sum of the items in the counts array fields
   * @param {Number} maxCount - Upper bound of the sum of the items in the counts array fields
   * @param {Number} skip - Query skip parameter
   * @param {Number} limit - Maximum documents returned
   * @returns {Object[]} - Array of documents in JSON
   */
  async getRecords(
    startDate,
    endDate,
    minCount,
    maxCount,
  ) {
    return Record.aggregate([
      {
        $match: {
          $expr: {
            $and: [
              { $gte: [ '$createdAt', new Date(startDate) ] },
              { $lte: [ '$createdAt', new Date(endDate) ] },
            ],
          },
        },
      },
      {
        $project: {
          _id: 1,
          key: 1,
          createdAt: 1,
          counts: 1,
          value: 1,
          totalCount: { $sum: '$counts' },
        },
      },
      {
        $match: {
          $expr: {
            $and: [
              { $gte: [ '$totalCount', minCount ] },
              { $lte: [ '$totalCount', maxCount ] },
            ],
          },
        },
      },
      {
        $project: {
          _id: 0,
          key: 1,
          createdAt: 1,
          totalCount: 1,
        },
      },
    ]);
  }
}

module.exports = new RecordRepository();