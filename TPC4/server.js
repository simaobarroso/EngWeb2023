// server que vai ter receber pedidos post get, etc 
// ver exemplo da aula


var http = require('http')
var axios = require('axios')
var templates = require('./genPags')
var static = require('./static.js')
const { parse } = require('querystring');


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


                if (req.url == "/"){
                    res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'})
                    res.write(templates.mainPage(d))
                    res.end()
                }
                // GET /register/user
                else if((req.url == "/register/user") ){
                     res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'})
                     res.write(templates.formPage(d))
                     //res.write("<h1>TESTE</h1>")
                     res.end()
                }
                    break
                 /*
                // GET / --------------------------------------------------------------------
                if((req.url == "/") ){
                    axios.get("http://localhost:3000/alunos?_sort=nome")
                        .then(response => {
                            var alunos = response.data
                            // Render page with the student's list
                            res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'})
                            res.write(templates.studentsListPage(alunos, d))
                            res.end()
                        })
                        .catch(function(erro){
                            res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'})
                            res.write("<p>Não foi possível obter a lista de alunos... Erro: " + erro)
                            res.end()
                        })
                }
               
                // GET /alunos/:id --------------------------------------------------------------------
                else if(/\/alunos\/(A|PG)[0-9]+$/i.test(req.url)){
                    var idAluno = req.url.split("/")[2]
                    axios.get("http://localhost:3000/alunos/" + idAluno)
                        .then( response => {
                            let a = response.data
                            // Add code to render page with the student record
                            res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'})
                            res.end(templates.studentPage(a, d))
                        })
                }
                // GET /alunos/registo --------------------------------------------------------------------
                else if(req.url == "/alunos/registo"){
                    // Add code to render page with the student form
                    res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'})
                    res.write(templates.studentFormPage(d))
                    res.end()
                }
                // GET /alunos/edit/:id --------------------------------------------------------------------
                else if(/\/alunos\/edit\/(A|PG)[0-9]+$/i.test(req.url)){ // i significa ignore case
                    // Get aluno record
                    var idAluno = req.url.split("/")[3]
                    axios.get("http://localhost:3000/alunos/" + idAluno)
                    .then(response =>{
                        let a = response.data
                        res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'})
                        res.write(templates.studentFormEditPage(a,d))
                        res.end()
                    })
                    .catch(function(erro){
                        res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'})
                        res.write(`<p> Nao foi possivel obter o resgisto do aluno ${idAluno}... Erro: ` + erro)
                        res.end()
                    })
                    
                }
                else if(/\/alunos\/delete\/(A|PG)[0-9]+$/i.test(req.url)){ // i significa ignore case
                    // Get aluno record
                    var idAluno = req.url.split("/")[3]
                    axios.delete('http://localhost:3000/alunos/' +  idAluno)
                        .then(resp => {
                            res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'})
                            res.write(`<p> Apagou o aluno ${idAluno}`)
                            res.end()
                        }).catch(error => {
                                console.log('Erro: ' + error);
                            })
                }      
                else{
                    res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'})
                    res.write("<p>" + req.method + " " + req.url + " unsupported on this server.</p>")
                    res.end()
                }
                break
                */
               /*
                case "POST":
                    if(req.url == '/alunos/registo'){
                        res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'})
                        // res.write(studentFormPage(d))
                        res.end('<p>Yet to be done... </p>')
                    }
                    else if(/\/alunos\/edit\/(A|PG)[0-9]+$/i.test(req.url)){
                        collectRequestBodyData(req, result => {
                            if(result){
                                axios.put('http://localhost:3000/alunos/'+ result.id, result)
                                        .then(resp => {
                                            res.writeHead(201, {'Content-Type': 'text/html;charset=utf-8'})
                                            res.write('<p>Update: ' + JSON.stringify(result) +'</p>')
                                            res.end()
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
                    */
                default: 
                    res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'})
                    res.write("<p>" + req.method + " unsupported in this server.</p>")
                    res.end()
            }
        }
        
    })
    
tpc4server.listen(5555, ()=>{
        console.log("Servidor à escuta na porta 5555...")
})
    