const { RecordSchema } = require('./record');

const connection = require('../config/db');

export const Record = connection.model('Record', RecordSchema);