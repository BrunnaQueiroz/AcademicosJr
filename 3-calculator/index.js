var express = require("./node_modules/express")
const app = express()



app.get("/adicionar/:num1?/:num2?", function(req, res){       
    v = req.params.num1
    if (v == undefined){
        res.sendFile(__dirname+"/operacoes/soma/index.html")        
    }
    else{
        res.send(`
    <!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<style>
    body {
        background-color: #FEE7AA;
    }
</style>
<body>    
    <script>
        var a = ${req.params.num1};
        var b = ${req.params.num1};
        alert(${req.params.num1}+${req.params.num2});
    </script>
</body>
</html>`)
    }                       
})

app.get("/subtrair/:num1?/:num2?", function(req, res){    
    v = req.params.num1
    if (v == undefined) {
        res.sendFile(__dirname+"/operacoes/subtracao/index.html")
    }
    else{
        res.send(`
    <!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<style>
    body {
        background-color: #FEE7AA;
    }
</style>
<body>    
    <script>
        var a = ${req.params.num1};
        var b = ${req.params.num1};
        alert(${req.params.num1}-${req.params.num2});
    </script>
</body>
</html>`)
    }        
           
})

app.get("/multiplicar/:num1?/:num2?", function(req, res){   
    v = req.params.num1
    if (v == undefined){
        res.sendFile(__dirname+"/operacoes/multiplicacao/index.html") 
    }
    else{
        res.send(`
    <!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<style>
    body {
        background-color: #FEE7AA;
    }
</style>
<body>    
    <script>
        var a = ${req.params.num1};
        var b = ${req.params.num1};
        alert(${req.params.num1}*${req.params.num2});
    </script>
</body>
</html>`)
    }           
        
})

app.get("/dividir/:num1?/:num2?", function(req, res){ 
    v = req.params.num1
    if (v == null){
        res.sendFile(__dirname+"/operacoes/divisao/index.html")          
    }
    else{
        res.send(`
    <!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<style>
    body {
        background-color: #FEE7AA;
    }
</style>
<body>    
    <script>
        var a = ${req.params.num1};
        var b = ${req.params.num1};        
        alert(${req.params.num1}/${req.params.num2});
    </script>
    <div id='res'></div>
</body>
</html>`)
    }                 
})

app.listen(3000, function(){
    console.log("Servidor rodando.")
})

