// server que vai ter receber pedidos post get, etc 
// ver exemplo da aula


var http = require('http')
var axios = require('axios')
var templates = require('./genPags')
var static = require('./static.js')
const { parse } = require('querystring');

var lenTasks; // rever maneira melhor de fazer isto

//aux Functions
function collectRequestBodyData(request, callback) {
    if(request.headers['content-type'] === 'application/x-www-form-urlencoded') {
        let body = '';
        request.on('data', chunk => {
            body += chunk.toString();
        });
        request.on('end', () => {
            callback(parse(body));
        });
    }
    else {
        callback(null); // result chega null
    }
}


var tpc4server = http.createServer(function (req, res) {
    var d = new Date().toISOString().substring(0, 16)
    console.log(req.method + " " + req.url + " " + d)

    // Handling request
    if(static.staticResource(req,res)){
        static.serveStaticResource(req, res)
    }
    else{
        switch(req.method){
            case "GET": 
                if(/\/done\/[0-9]+$/.test(req.url)){
                    var taskId = req.url.split("/")[2]
                    console.log(taskId)
                 axios.get("http://localhost:3000/tasks/"+ taskId )
                    .then(response =>{
                    let aux = response.data
                    axios.put("http://localhost:3000/tasks/"+ taskId, { 
                            "id" : aux.id,
                            "due_date": aux.due_date,
                            "who" : aux.who,
                            "what_task": aux.what_task,
                            "done" : 1
                        })
                        .then(resp => {

                            res.writeHead(301, {Location: 'http://localhost:7777/'});
                            res.end();
                          

                        }).catch(error => {
                            console.log('Erro: ' + error);
                        })
                        
                })  
               
            }

            else  if(/\/delete\/[0-9]+$/.test(req.url)){
                var taskId = req.url.split("/")[2]
    
                axios.delete("http://localhost:3000/tasks/"+ taskId,)
                    .then(resp => {

                        res.writeHead(301, {Location: 'http://localhost:7777/'});
                        res.end();
                      

                    }).catch(error => {
                        console.log('Erro: ' + error);
                    })
                     
           
        }


                // GET /register/user
                else if((req.url == "/register/user") ){
                    axios.get("http://localhost:3000/users/" )
                    .then(response =>{
                        res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'})
                        let id = response.data.length +1
                        res.write(templates.formPage(d,id))
                        //res.write("<h1>TESTE</h1>")
                        res.end()
                    })
                    .catch(function(erro){
                        res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'})
                        res.write(`<p> USERS ERROR JSON-SERVER! ... Erro:   ` + erro)
                        res.end()
                    })

                }
                    
                // GET /tasks/edit/:id --------------------------------------------------------------------
                else if(/\/tasks\/edit\/[0-9]+$/.test(req.url)){
                    var taskId = req.url.split("/")[3]
                    console.log(taskId)
                    axios.get("http://localhost:3000/tasks/" + taskId)
                        .then( response => {
                            let a = response.data
                            res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'})
                            res.end(templates.editPageTasks(a, d))
                        })
                        .catch(error => {
                            console.log('Erro: ' + error);
                        })
                }

                else if (req.url == "/"){
                    axios.get("http://localhost:3000/users/" )
                    .then(response =>{
                            var users = response.data
                            // outra maneira : https://www.storyblok.com/tp/how-to-send-multiple-requests-using-axios
                            axios.get("http://localhost:3000/tasks?_sort=due_date")
                                .then(response =>{
                                var tasks = response.data
                                lenTasks = response.data.length
                                res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'})
                                res.write(templates.mainPage(d,users,tasks))
                                res.end()
                        })
                        .catch(function(erro){
                            res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'})
                            res.write(`<p> TASKS ERROR JSON-SERVER! ... Erro:   ` + erro)
                            res.end()
                        })
                    })
                    .catch(function(erro){
                        res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'})
                        res.write(`<p> USERS ERROR JSON-SERVER!... ErroE:   ` + erro)
                        res.end()
                    })
                    
                } 
                else{
                    res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'})
                    res.write("<p>" + req.method + " " + req.url + " unsupported on this server.</p>")
                    res.end()
                }
                break

                case "POST":
                    if(req.url == '/register/user'){
                        collectRequestBodyData(req, result => {
                            if(result){
                                console.log('http://localhost:3000/users/'+ result.id)
                                axios.post('http://localhost:3000/users/', {
                                    "id": result.id,
                                    "name" : result.name
                                })
                                        .then(resp => {
                                            res.writeHead(301, {Location: 'http://localhost:7777/'});
                                            res.end();
                                          
                                            /*
                                            res.writeHead(201, {'Content-Type': 'text/html;charset=utf-8'})
                                            res.write(templates.sucessPage(d)) //falta o mode
                                            res.end()
                                            */
                                        }).catch(error => {
                                            console.log('Erro: ' + error);
                                        })
                            }
                            else{
                                res.writeHead(201, {'Content-Type': 'text/html;charset=utf-8'})
                                res.write("<p>Unable to collect data from body...</p>")
                                res.end()
                            }
                        });
                    }
                    
                    else if(req.url == '/'){
                        collectRequestBodyData(req, result => {
                            if(result){
                                axios.post('http://localhost:3000/tasks/', { // put vs post
                                    "id" : lenTasks+1, // PROBLEMA COM ISTO TEMOS DE IR A PAGINA INICIAL SEMPRE ANTES DE SUBMETER UM PEDIDO !!!!
                                    "due_date": result.due_date,
                                    "who" : result.who,
                                    "what_task": result.what_task,
                                    "done" : 0
                                })
                                        .then(resp => {
                                            /*
                                            res.writeHead(201, {'Content-Type': 'text/html;charset=utf-8'})
                                            res.write(templates.sucessPage(d))//'<p>Update: ' + JSON.stringify(result) +'</p>')
                                            res.end()
                                            */
                                            res.writeHead(301, {Location: 'http://localhost:7777/'});
                                            res.end();
                      
                                           /*
                                            res.writeHead(201, {'Content-Type': 'text/html;charset=utf-8'})
                                            res.write(templates.sucessPage(d)) //falta o mode
                                            res.end()
                                            */
                                        }).catch(error => {
                                            console.log('Erro: ' + error);
                                        })
                            }
                            else{
                                res.writeHead(201, {'Content-Type': 'text/html;charset=utf-8'})
                                res.write("<p>Unable to collect data from body...</p>")
                                res.end()
                            }
                        });
                    }
                    /*
                    else{
                        res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'})
                        res.write('<p>Unsupported POST request: ' + req.url + '</p>')
                        res.write('<p><a href="/">Return</a></p>')
                        res.end()
                    }
                   // break
                */
                //case "PUT": // REVER HTML PUT
                    // PARA O CASO DO BOTAO EDIT E DONE    + edit     
                else if(/\/tasks\/edit\/[0-9]+$/.test(req.url)){
                    var taskId = req.url.split("/")[3]
                        collectRequestBodyData(req, result => {
                            if(result){
                                axios.put('http://localhost:3000/tasks/' + taskId, result)
                                        .then(resp => {
                                            res.writeHead(301, {Location: 'http://localhost:7777/'});
                                            res.end();
                                          
                                            /*
                                            res.writeHead(201, {'Content-Type': 'text/html;charset=utf-8'})
                                            res.write(templates.sucessPage(d))//'<p>Update: ' + JSON.stringify(result) +'</p>')
                                            res.end()
                                            */
                                        }).catch(error => {
                                            console.log('Erro: ' + error);
                                        })
                            }
                            else{
                                res.writeHead(201, {'Content-Type': 'text/html;charset=utf-8'})
                                res.write("<p>Unable to collect data from body...</p>")
                                res.end()
                            }
                        });
                    }


                    else{
                        res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'})
                        res.write('<p>Unsupported POST request: ' + req.url + '</p>')
                        res.write('<p><a href="/">Return</a></p>')
                        res.end()
                    }    
                break
                default: 
                    res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'})
                    res.write("<p>" + req.method + " unsupported in this server.</p>")
                    res.end()
            }
        }
        
    })
    
tpc4server.listen(7777, ()=>{
        console.log("Servidor à escuta na porta 7777...")
})
    