const mysql = require("mysql2/promise")
const cors = require("cors")


var db = mysql.createPool({
    host: "bnd5dssud6aytjfy9grh-mysql.services.clever-cloud.com",
    user: "ufiwipddw1qhlebr",
    password: "wOOoga7uXdHwt2N0GZMl",
    database: "bnd5dssud6aytjfy9grh",
    port: 3306
})
module.exports = {
    async insert(req, res){
        let datas = req.body

        try {
            const response = await db.query('INSERT INTO compras SET ?', [datas]);
            res.json(response)
        } catch (error) {
            console.log(error)
        }
    },

    /*async delete(req, res){
        let datas = req.body.produto;
        
        console.log(datas)
        try {
            const response =  await db.query(`DELETE FROM mercado WHERE produto = '${datas}'`);           
            res.json(response)            
        } catch (error) {            
            console.log(error);
        }
    },*/

    async find(req, res){        
        try {
            const response = await db.query('SELECT * FROM compras');
            res.json(response[0]);
        } catch(error) {
            console.log(error);
        }
    }
        
}

