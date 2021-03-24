const express = require('express');
const router = express.Router();

const RecordController = require('../controllers/record');
const RecordValidation = require('../validations/record');

// Get records
router.post(
  '/list',
  RecordValidation.validateGetRecords,
  RecordController.getRecords,
);

module.exports = router;