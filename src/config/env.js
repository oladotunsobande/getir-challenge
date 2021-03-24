const appRootPath = require('app-root-path');

require('dotenv').config({ path: `${appRootPath.path}/.env` });

const { throwIfUndefined } = require('../utils');

exports.MONGO_URL = throwIfUndefined(process.env.MONGO_URL, 'MONGO_URL');

exports.APP_PORT = throwIfUndefined(process.env.APP_PORT, 'APP_PORT');