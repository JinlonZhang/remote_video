import mysql from 'mysql';
import user from './user';
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  port     : '3306',
  password : 'zjl606',
  database : 'hospital'
});
connection.connect();
module.exports = {
  user: user,
};
