var http = require('http');
var url = require('url');
var fs = require('fs');

var server = http.createServer(function(req,res){
    var d = new Date().toISOString().substring(0,16)
    res.writeHead(200,{'Content-Type':'text/html; charset=utf-8'});
    console.log(req.method + " " + req.url + " " + d) // para debug do servidor -> imprime os pedidos e sobre que url
    var pedido = url.parse(req.url,true).pathname

    if(pedido=='/'){
        fs.readFile('index.html', function(err,data){
            res.write(data)
            res.end()
        })
    }
    else{
    fs.readFile('./cidades' + pedido.substring(1)+'.html', function(err,data){
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

server.listen(7777) // a escolha da porta foi para nao entrar em conflito com nenhuma outra porta utilizada por outra aplicacao

console.log("Estou a escuta na porta 7777")
