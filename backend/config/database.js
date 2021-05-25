require('dotenv').config();

module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', process.env.DATABASE_HOST),
        port: env('DATABASE_PORT', process.env.DATABASE_PORT),
        database: env('DATABASE_NAME', process.env.DATABASE_NAME),
        username: env('DATABASE_USERNAME', process.env.DATABASE_USERNAME),
        password: env('DATABASE_PASSWORD', process.env.DATABASE_PASSWORD),
        ssl: {
          rejectUnauthorized: false,
        },
      },
      options: {},
    },
  },
});
