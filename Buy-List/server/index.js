
const express = require("express");
const app = express();
const cors = require("cors");


app.use(cors({credentials: true, origin: 'http://localhost:5173'}));
app.use(express.json());

const ControllerUsers = require("./controller/ControllerProduto");

app.post('/produto/insert',      ControllerUsers.insert);
/*app.delete('/produto/delete',    ControllerUsers.delete);*/
app.get('/produto/find',         ControllerUsers.find)



app.post('/produto', (req, res) => {
    let item = req.body.produto;
    res.json(item);
});

app.post("/produto", (req, res) => {
    const {produto} = req.body;
    console.log(produto)

    const response = "INSERT INTO compras (produto) VALUES ?";

    db.query(response, [produto], (err, result) => {
        console.log("err");
    })
})





app.listen(3001, () =>{
    console.log("Rodando!!");
});