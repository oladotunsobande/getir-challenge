const { RecordSchema } = require('./record');

const connection = require('../config/db');

const Record = connection.model('Record', RecordSchema);

module.exports = {
  Record,
};