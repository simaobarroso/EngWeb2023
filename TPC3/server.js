var http = require('http');
var url = require('url'); 
var fs = require('fs'); 
var axios =require('axios')
var mypages = require('./genPages') 

// tratar de erros (codigos)


var serverS = http.createServer(function(req,res){
    var d = new Date().toISOString().substring(0,16)
    console.log(req.method + " " + req.url + " " + d)

    /*
    Como atualmente o nosso servidor apenas permite o acesso de informacao, nao precisamos de fazer
    req.method == "GET", ja que e` o unico metodo definido
    */
    if(req.url == '/'){
        res.writeHead(200,{'Content-Type':'text/html; charset=utf-8'})
        res.write(mypages.genMainPage())
        res.end()
    }

    
    if(req.url== '/w3.css'){ // para mandarmos o css necessario
        fs.readFile('w3.css', function(err,data){
            res.writeHead(200,{'Content-Type':'text/css; charset=utf-8'})
            if(err){
                res.write("Erro na leitura do ficheiro: " + err)
            }
            else{
                res.write(data)
            }
        
            res.end()
           })
    }

})

serverS.listen(5555)

console.log("Estou a escuta na porta 5555")









/*

Ver apontamentos aula e exercicios realizado na aula

Notas :
Este vai ser o servidor que vai comunicar com o json-server(rest api)

json server <----> node server.js <-----> browser

Json server vai conter a DB

Pra por a funcionar (e` preciso ter instalado o npm) :
npm init
sudo npm i axios --save
sudo npm i json-server --save -g

num terminal colocar    : json-server --watch datasetAlterado.json
noutro                  : node server.js

*/