module.exports = {
  apps: [
    {
      name: 'GETIR-API',
      script: './src/app.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
    },
  ],
};
