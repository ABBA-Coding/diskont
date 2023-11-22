module.exports = {
  apps: [
    {
      name: 'diskont.uz', // change this to your app name
      exec_mode: 'cluster',
      instances: 'max', // or a number of instances based on your CPU cores
      script: './node_modules/nuxt/bin/nuxt.js',
      args: 'start',
      env: {
        NODE_ENV: 'production',
        HOST: '0.0.0.0',
        PORT: 3001, // change this to your desired port
      },
    },
  ],
};
