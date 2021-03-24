const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const { json } = require('body-parser');

const routes = require('./utils/routes');
const { 
  sendSuccessResponse,
  sendErrorResponse, 
  sendFatalErrorResponse, 
} = require('./utils/response-handler');

const app = express();

// Enable HTTP request logging
app.use(morgan('combined'));

// Enable CORS
app.use(cors());

// CORS pre-flight
app.options('*', cors());

app.use(morgan('combined'));
app.use(json({ limit: '5MB' })); // Set limit to 5MB

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
