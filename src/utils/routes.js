const record = require('../routes/record');

// Configure endpoint paths for server
module.exports = function(app) {
  app.use('/v1/records', record);
};