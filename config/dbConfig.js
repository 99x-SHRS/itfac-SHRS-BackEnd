module.exports = {
  HOST: '127.0.0.1',
  USER: 'root', //
  PASSWORD: '',
  DB: 'hotel_managemant',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
}

// mysql://jccpct9xj735wcku:x9yt42zi1gxae4j3@m7az7525jg6ygibs.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/t2dz3zbs430rj97s
