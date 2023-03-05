var http = require('http');
var url = require('url'); 
var fs = require('fs'); 
var axios =require('axios')
var mypages = require('./genPages') 

// tratar de erros (codigos) !!!
// OTIMIZAR E MELHORAR ISTO

/*
NOTA:

    // FALTA CLICAR NA PESSOA E REDICIONAR (O QUE FICOU A FALTAR DA AULA PRATICA)
    // BASICAMENTE CLICAR NO NOME DE UMA PESSOA DA LISTA E APARECER AS INFORMCOES DELA
    // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!11!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

    ORGANIZAR LISTA DAS PESSOAS PELO A ORDEM DO NOME

    LER ANOTACOES AO LONGO DO SERVIDOR

    OTIMIZAR E MINIMIRZAR LINHAS DE CODIGO

    UTF8!!

*/


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
    // FALTA CLICAR NA PESSOA E REDICIONAR (O QUE FICOU A FALTAR DA AULA PRATICA)
    // BASICAMENTE CLICAR NO NOME DE UMA PESSOA DA LISTA E APARECER AS INFORMCOES DELA
    // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!11!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    else if (req.url == '/lista'){
        axios.get('http://localhost:3000/pessoas')
            .then(function(resp){ 
                var pessoas = resp.data 
                if(pessoas.length != 2000) {console.log("Dataset com o tamanho errado.")} // console.log("Recuperei " + pessoas.length + " registos")
                res.writeHead(200,{'Content-Type':'text/html; charset=utf-8'});
                res.end(mypages.genListaPage(pessoas))
            })
            .catch(erro => { 
                console.log("Erro "+ erro)
                res.writeHead(200,{'Content-Type':'text/html; charset=utf-8'});
                res.end("<p>Erro  :" + erro + " </p>")
            }) 
    }
    
    else if (req.url == '/listaordenadas'){
        axios.get('http://localhost:3000/pessoas')
            .then(function(resp){ 
                var pessoas = resp.data 
                let pessoasOrdenadas = pessoas.sort(
                    (p1,p2) => (p1.nome < p2.nome) ? -1 : 1 // nao usa o utf 8 dai os acentuados serem ultimos , assume sempre o ascii
                )
                if(pessoas.length != 2000) {console.log("Dataset com o tamanho errado.")} // console.log("Recuperei " + pessoas.length + " registos")
                res.writeHead(200,{'Content-Type':'text/html; charset=utf-8'});
                res.end(mypages.genListaPage(pessoasOrdenadas))
            })
            .catch(erro => { 
                console.log("Erro "+ erro)
                res.writeHead(200,{'Content-Type':'text/html; charset=utf-8'});
                res.end("<p>Erro  :" + erro + " </p>")
            }) 
    }

    else if (req.url == '/sexo'){
        // https://www.semrush.com/blog/url-parameters/
        axios.get('http://localhost:3000/pessoas')
            .then(function(resp){ 
                var pessoas = resp.data 
                if(pessoas.length != 2000) {console.log("Dataset com o tamanho errado.")} // console.log("Recuperei " + pessoas.length + " registos")
                res.writeHead(200,{'Content-Type':'text/html; charset=utf-8'});
                res.end(mypages.genSexoPage(pessoas)) // ainda nao esta definida
            })
            .catch(erro => { 
                console.log("Erro "+ erro)
                res.writeHead(200,{'Content-Type':'text/html; charset=utf-8'});
                res.end("<p>Erro  :" + erro + " </p>")
            }) 
    }
    // DEPOIS USAR URL PARA LISTAR PESSOAS DE UM SEXO (?sexo=masculino) OU USAR UM DROPDOWN (DEPOIS DECIDIR) (LISTA DE LISTAS) - Ver anotacoes
    // depois podemos clicar nas pessoas e redireciona para a pagina de uma pessoa !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1


   //utilizar REGEX PARA DIMINUIR ISTO ???????//
   // VER MANEIRAS DE OTIMIZAR 
   else if(req.url.match(/sexo\/\w+/)){ // nao pode ser assim porque nao temos a certeza que o dataset tem sexos definidoss, pensar noutra maneira !!!!!
    //pessoas?sexo=feminino
    let aux = req.url.match(/sexo\/\w+/)[0].slice(5)
    axios.get('http://localhost:3000/pessoas?sexo=' +  aux)
            .then(function(resp){ 
                var pessoas = resp.data 
                let pessoasOrdenadas = pessoas.sort(
                    (p1,p2) => (p1.nome < p2.nome) ? -1 : 1 // nao usa o utf 8 dai os acentuados serem ultimos , assume sempre o ascii
                )
                res.writeHead(200,{'Content-Type':'text/html; charset=utf-8'});
                res.end(mypages.genSexobySexPage(pessoasOrdenadas)) // ainda nao esta definida
            })
            .catch(erro => { 
                //console.log("Erro "+ erro) // VER ESTE ERRO
                res.writeHead(200,{'Content-Type':'text/html; charset=utf-8'});
                res.end("<p>Erro  :" + erro + " </p>")
            }) 
    }


    else if (req.url == '/desporto'){
        axios.get('http://localhost:3000/pessoas')
            .then(function(resp){ 
                var pessoas = resp.data 


                res.writeHead(200,{'Content-Type':'text/html; charset=utf-8'});
                res.end(mypages.genDesportoPage(pessoas)) // ainda nao esta definida
            })
            .catch(erro => { 
                console.log("Erro "+ erro)
                res.writeHead(200,{'Content-Type':'text/html; charset=utf-8'});
                res.end("<p>Erro :" + erro + " </p>")
            }) 
    }

    else if (req.url.match(/desporto\/[a-zA-Z]+/)){
        axios.get('http://localhost:3000/pessoas')
            .then(function(resp){ 
                var pessoas = resp.data 
                let pessoasOrdenadas = pessoas.sort(
                    (p1,p2) => (p1.nome < p2.nome) ? -1 : 1 // nao usa o utf 8 dai os acentuados serem ultimos , assume sempre o ascii
                ) 
                
                var desporto = decodeURIComponent(req.url.substring(10))

                var lista = new Array()
            
                pessoasOrdenadas.forEach((p) => {
                    if(p.desportos.includes(desporto)) lista.push(p)
                })

                res.writeHead(200,{'Content-Type':'text/html; charset=utf-8'});
                res.end(mypages.genListaPage(lista)) // ainda nao esta definida
            })
            .catch(erro => { 
                console.log("Erro "+ erro)
                res.writeHead(200,{'Content-Type':'text/html; charset=utf-8'});
                res.end("<p>Erro :" + erro + " </p>")
            }) 
    }


    else if (req.url == '/profissoes'){
        axios.get('http://localhost:3000/pessoas')
            .then(function(resp){ 
                var pessoas = resp.data 
                if(pessoas.length != 2000) {console.log("Dataset com o tamanho errado.")} // console.log("Recuperei " + pessoas.length + " registos")
                res.writeHead(200,{'Content-Type':'text/html; charset=utf-8'});
                res.end(mypages.genProfissoesPage(pessoas)) // ainda nao esta definida
            })
            .catch(erro => { 
                console.log("Erro "+ erro)
                res.writeHead(200,{'Content-Type':'text/html; charset=utf-8'});
                res.end("<p>Erro  :" + erro + " </p>")
            }) 
    }

    
    else if(req.url.match(/w3\.css/)){ // para mandarmos o css necessario
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
    else if(req.url.match(/p\d+/)){ 
        axios.get('http://localhost:3000/pessoas/' + req.url.substring(9)) // contamos caracters a partir de /
        .then(function(resp){ 
            var pessoas = resp.data 
            res.writeHead(200,{'Content-Type':'text/html; charset=utf-8'});
            res.end(mypages.genPessoaPage(pessoas))
        })
        .catch(erro => { 
        console.log("Erro "+ erro)
        res.writeHead(200,{'Content-Type':'text/html; charset=utf-8'});
        res.end("<p>Erro + " + erro + " </p>")
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