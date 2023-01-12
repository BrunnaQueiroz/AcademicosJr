const mysql = require('mysql2/promise');

var pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Brunn4qu31r0z',
    database: 'lista_tarefas'
});

module.exports = pool;