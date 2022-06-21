//'use strict';
const dotenv = require('dotenv');

dotenv.config();

const {
    PORT,
    // myHOST,
    // myUSER,
    // myPASSWORD,
    // myDATABASE,
    // myPORT
    pgConnection
} = process.env;

module.exports = {
    port: PORT,
    // port_mysql: myPORT,
    // host: myHOST,
    // database: myDATABASE,
    // user: myUSER,
    // password: myPASSWORD
    urlConnection: pgConnection
}