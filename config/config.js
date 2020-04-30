module.exports = {
    development: {
     
          db: {
            host: 'localhost',
            port: 27017,
            database: 'famposo'
          }
    },
    test: {
    
          db: {
            host: process.env.MONGODB_HOST,
            port: process.env.MONGODB_PORT,
            database: process.env.MONGODB_DATABASE
          }
    },
    production: {
       
          db: {
            host: process.env.MONGODB_HOST,
            port: process.env.MONGODB_PORT,
            database: process.env.MONGODB_DATABASE
          }
    },
  };
  