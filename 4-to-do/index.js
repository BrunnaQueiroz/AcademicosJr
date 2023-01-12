const express = require('express');
const controllerTitulo = require('./controllers/controllerTarefas');
const app = express();

app.use(express.json());

const controllerTarefas = require('./controllers/controllerTarefas');

//TAREFA
app.post('/infos/insert',        controllerTarefas.insert);
app.put('/infos/update/:id',     controllerTarefas.update);
app.get('/infos',                controllerTarefas.find)
app.get('/infos/:id?',           controllerTarefas.findById)    
app.delete('/infos/:id',         controllerTarefas.delete)

//Olhar como adicionar um patch






app.listen(8089, function(){
    console.log("Servidor rodando.")
})
