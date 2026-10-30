const mysql = require('mysql2');

// Setup connessione
const connection = mysql.createConnection({
    host:process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
})

//Avvio connessione
connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySql')
})

module.exports = connection;