const { Record } = require('../models');

class RecordRepository {
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