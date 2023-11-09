"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const promise_mysql_1 = require("promise-mysql");
const keys_1 = require("./keys");
const pool = promise_mysql_1.default.createPool(keys_1.default.database);
exports.default = pool;
// const mysql = require('promise-mysql');
//  import keys from './keys'
//  const pool= mysql.createConnection(keys.database); //nos va a traer conexion
//   pool.getConnection()
//   .then((connection:any) => {
//    pool.releaseConnection (connection);
//  console.log('DB conectada');
// });
//  export default pool;
