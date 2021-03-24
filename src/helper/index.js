const moment = require('moment');

const formatDate = function(value) {
  const result = moment(value).format('YYYY-MM-DD');
  if(result == 'Invalid date'){
    throw new Error('Date must be of format, YYYY-MM-DD')
  }

  return result;
};

module.exports = {
  formatDate,
};