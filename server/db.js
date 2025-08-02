// import
const mysql = require('mysql2');

// create pool for modern restful api
const pool = mysql.createPool ({
    // host or localhost
    host:"localhost",
    user:"root",
    password:"",

    // the name of the database we created earlier, in my case "3b_crud"
    database:"3b_crud"
})

// this is the last part of connecting the database and ur app
module.exports = pool.promise();

