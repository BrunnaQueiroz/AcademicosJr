const mysql = require("mysql2/promise")

var db = mysql.createConnection({
    host: "bnd5dssud6aytjfy9grh-mysql.services.clever-cloud.com",
    user: "ufiwipddw1qhlebr",
<<<<<<< HEAD
    password: "BwOOoga7uXdHwt2N0GZMl",
    database: "lbnd5dssud6aytjfy9grh",
=======
    password: "wOOoga7uXdHwt2N0GZMl",
    database: "bnd5dssud6aytjfy9grh",
>>>>>>> f13ec403658c1c1fe340925d4f1549a3f0337db8
    port: 3306
})

module.export = db;