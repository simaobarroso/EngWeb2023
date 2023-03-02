// gerador das varias paginas a utilizar pela aplicacao
// simaobarroso - 3 marco 2023

exports.genMainPage = function(){ // nao precisa de receber argumentos, a pagina e` independemente do dataset usado
    var data = new Date().toISOString().substring(0,16)

    // experimentar o href com http://localhost:5555/pessoas/
    // melhorar CSS
    // mais erro de ol !!!!!!
    var pagHTML = `

        <!DOCTYPE html>
        <html>
    <head>
        <title>Main Page</title>
        <meta charset = "utf-8"/>
        <link rel="stylesheet" href="w3.css"/> 
    </head>


    <header class="w3-container w3-teal">
        <h1>TPC3 - Engenharia Web</h1>
    </header>


    <ol w3-hoverable class="w3-ul w3-xxlarge">
        <li class="w3-ul w3-hoverable"><a href="/lista">Lista de Pessoas</a></li>
        <li class="w3-ul w3-hoverable"><a href="/sexo">Distribuicao Por Sexo</a></li>
        <li class="w3-ul w3-hoverable"><a href="/desporto">Distribuicao Por Desporto</a></li>
        <li class="w3-ul w3-hoverable"><a href="/profissoes">Top 10 profissoes</a></li>
     </ol>
   

    <footer class="w3-container w3-blue">
      <h5>TPC3 de EW por simao : ${data}</h5>
    </footer>
        </body>
    </html>
    `
    return pagHTML
}

exports.genListaPage = function(lista){
    var data = new Date().toISOString().substring(0,16)
    // por isto mais identado
    var pagHTML = ` 
    <!DOCTYPE html>
        <html>
    <head>
        <title>Aula3</title>
        <meta charset = "utf-8"/>
        <link rel="stylesheet" href="w3.css"/> 
    </head>
    <body>
        <div class="w3-card-4">

        <header class="w3-container w3-teal">
      <h1>Lista de Pessoas na Base de Dados (${lista.length})</h1>
    </header>
    
    <a href = "/">[Voltar ao Inicio]</a>

    <div class="w3-container">
    <table class="w3-table-all">
        <tr>
        <th>ID</th>
      <th>Nome</th>
      <th>Idade</th>
      <th>Sexo</th>
      <th>Cidade</th>
        </tr>
     `   
     
     for(let i =0; i<lista.length; i++){
        // podemos fazer com id
        pagHTML += `
        <tr>
        <td>${lista[i].id}</td>
        <td> <a href="http://localhost:5555/pessoas/${lista[i].id}" /a> ${lista[i].nome}</td>
        <td>${lista[i].idade}</td>
        <td>${lista[i].sexo}</td>
        <td>${lista[i].morada.cidade}</td>
    </tr>`
     }
     
    
    
    pagHTML += `
    </table>
    <a href = "/">[Voltar ao Inicio]</a>

    </div>
    <footer class="w3-container w3-blue">
      <h5>TPC3 de EW por simao :  ${data}</h5>
    </footer>
    
    </div>
    </body>
    </html>
    `
    return pagHTML
}





// Para gerar a pagica de distribuicao por sexo (lista de sexos)
// FAlta fazer redirecionamento

exports.genSexoPage = function(lista){ 
    var data = new Date().toISOString().substring(0,16)
    // por isto mais identado
    var pagHTML = ` 
    <!DOCTYPE html>
        <html>
    <head>
        <title>Aula3</title>
        <meta charset = "utf-8"/>
        <link rel="stylesheet" href="w3.css"/> 
    </head>
    <body>
        <div class="w3-card-4">

        <header class="w3-container w3-teal">
      <h1>Lista de Sexos na Base de Dados (${lista.length})</h1>
    </header>
    
    <a href = "/">[Voltar ao Inicio]</a>
    <ul w3-hoverable class="w3-ul w3-xxlarge">
     `   
    let sex = []

    for(let i =0; i<lista.length; i++){
      if(!sex.includes(lista[i].sexo)){
        sex .push(lista[i].sexo)
        // console.log(sex)
      }
     } 

     for(let j =0; j<sex.length; j++){
        pagHTML += `
            <li class="w3-ul w3-hoverable"><a href="/sexo/${sex[j]}">${sex[j]}</a></li>
        `
       } 
     

    pagHTML += `
    </ul>
    <a href = "/">[Voltar ao Inicio]</a>

    </div>
    <footer class="w3-container w3-blue">
      <h5>TPC3 de EW por simao :  ${data}</h5>
    </footer>
    
    </div>
    </body>
    </html>
    `
    return pagHTML
}

exports.genSexobySexPage = function(lista){
    var data = new Date().toISOString().substring(0,16)

    // estava a dar um erro no css dai o href="https://www.w3schools.com/w3css/4/w3.css"

    // por isto mais identado
    var pagHTML = ` 
    <!DOCTYPE html>
        <html>
    <head>
        <title>Aula3</title>
        <meta charset = "utf-8"/>
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    </head>
    <body>
        <div class="w3-card-4">

        <header class="w3-container w3-teal">
      <h1>Lista de Pessoas do Sexo ${lista[1].sexo} na Base de Dados (${lista.length})</h1>
    </header>
    
    <a href = "/">[Voltar ao Inicio]</a>

    <div class="w3-container">
    <table class="w3-table-all">
        <tr>
        <th>ID</th>
      <th>Nome</th>
      <th>Idade</th>
      <th>Sexo</th>
      <th>Cidade</th>
        </tr>
     `   
     
     for(let i =0; i<lista.length; i++){
        // podemos fazer com id
        pagHTML += `
        <tr>
        <td>${lista[i].id}</td>
        <td> <a href="http://localhost:5555/pessoas/${lista[i].id}" /a> ${lista[i].nome}</td>
        <td>${lista[i].idade}</td>
        <td>${lista[i].sexo}</td>
        <td>${lista[i].morada.cidade}</td>
    </tr>`
     }
     
    
    
    pagHTML += `
    </table>
    <a href = "/">[Voltar ao Inicio]</a>

    </div>
    <footer class="w3-container w3-blue">
      <h5>TPC3 de EW por simao :  ${data}</h5>
    </footer>
    
    </div>
    </body>
    </html>
    `
    return pagHTML
}

/*
exports.genDesportoPage(lista) = function(lista){
    pagHTML = `<h1>AINDA NAO FOI FEITO</h1>`
    return pagHTML
}

exports.genProfissoesPage(lista) = function(lista){
    pagHTML = `<h1>AINDA NAO FOI FEITO</h1>`
    return pagHTML
}
*/
