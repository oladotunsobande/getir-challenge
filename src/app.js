const app = require('./server');
const { APP_PORT } = require('./config/env');

// Set app port and start server 
app.listen(APP_PORT, () => {
  console.info(`Getir Challenge service started successfully on :${APP_PORT}\n`);
});