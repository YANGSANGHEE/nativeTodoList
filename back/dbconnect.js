const db = require('mysql');
//db 호출
const dotenv = require('dotenv');
//환경변수 세팅

dotenv.config();

const conn = db.createConnection({
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: process.env.password,
  database: process.env.database,
});

module.exports = conn;
