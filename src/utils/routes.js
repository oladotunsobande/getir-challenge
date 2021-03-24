const record = require('../routes/record');

module.exports = function(app) {
  app.use('/v1/records', record);
};