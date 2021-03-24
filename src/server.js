const express = require('express');
const morgan = require('morgan');
const { json, urlencoded } = require('body-parser');

const routes = require('./utils/routes');
const { 
  sendSuccessResponse,
  sendErrorResponse, 
  sendFatalErrorResponse, 
} = require('./utils/response-handler');

const app = express();

app.use(morgan('combined'));
app.use(json());
app.use(urlencoded({ extended: true }));

// Routes
routes(app);

app.get('/v1', (req, res) => {
  return sendSuccessResponse(res, 'Welcome to the Getir Challenge API (V1)');
});

app.get('*', function(req, res) {
  return sendErrorResponse(
    res,
    404,
    'Path not found',
  );
});

// Handle Errors
app.use((err, req, res, next) => {
  return sendFatalErrorResponse(res, err);
});

module.exports = app;
