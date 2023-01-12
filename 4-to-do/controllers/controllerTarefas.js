const db = require('../config/db');
module.exports = {
    async insert(req, res){
        let datas = {
            "titulo": req.body.titulo,
            "descricao": req.body.descricao,
            "prazo": req.body.prazo,
        }

        try {
           let response = await db.query('INSERT INTO infos SET ?', [datas]);
           res.json(response);
        } catch (error) {
            console.log(error);
        }
    },
    async update(req, res){
        let id = req.params.id;
        
        let datas = {
            "titulo": req.body.titulo,
            "descricao": req.body.descricao,
            "prazo": req.body.prazo,
        }

        try {
            let response = await db.query('UPDATE infos SET ? WHERE id = ?', [datas, id]);
            res.json(response);
         } catch (error) {
             console.log(error);
         }
    },

    async find(req, res){        
        try {
            let response = await db.query('SELECT * FROM infos');            
            res.json(response[0]);              
        } catch (error) {
            console.log(error);
        }

        
    },
   
    async findById(req, res){
        let id = req.params.id;

        try {
            let response = await db.query(`SELECT * FROM infos WHERE id = ${id}`);
            res.json(response[0]);
        } catch (error) {
            console.log(error);
        }
        
    },

    async delete(req, res){
        let id = req.params.id;

        try {
            let response = await db.query(`DELETE FROM infos WHERE id = ${id}`);
            res.json(response)            
        } catch (error) {            
            console.log(error);
        }
    },

   

}