/**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
module.exports = {
  apps: [
    // First application
    {
      script: './build/main.js',
      exec_mode: 'cluster',
      instances: 'max',
      env: {
        PORT: 3000,
        NODE_CONFIG: 'dev',
        NODE_ENV: 'development'
      },
      env_prod: {
        PORT: 3000,
        NODE_CONFIG: 'prod',
        NODE_ENV: 'production'
      }
    }

  ]

}
