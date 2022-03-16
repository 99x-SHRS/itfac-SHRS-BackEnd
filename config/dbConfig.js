module.exports = {
  HOST: 'us-cdbr-east-05.cleardb.net',
  USER: 'be8aa5ee0660e5',
  PASSWORD: 'be8aa5ee0660e5',
  DB: 'heroku_fe85ed5d5c20e44',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
}
