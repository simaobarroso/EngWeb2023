// gerador das varias paginas a utilizar pela aplicacao
// simaobarroso - 3 marco 2023

exports.genMainPage = function(){ // nao precisa de receber argumentos, a pagina e` independemente do dataset usado
    var data = new Date().toISOString().substring(0,16)

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
        <li class="w3-ul w3-hoverable"><a href="/listaordenadas">Lista Ordenada de Pessoas</a></li>
        <li class="w3-ul w3-hoverable"><a href="/sexo">Distribuição Por Sexo</a></li>
        <li class="w3-ul w3-hoverable"><a href="/desporto">Distribuição Por Desporto</a></li>
        <li class="w3-ul w3-hoverable"><a href="/profissoes">Top 10 Profissões</a></li>
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
        <title>TPC3</title>
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


exports.genSexoPage = function(lista){ 
    var data = new Date().toISOString().substring(0,16)
    // por isto mais identado
    var pagHTML = ` 
    <!DOCTYPE html>
        <html>
    <head>
        <title>Sexo</title>
        <meta charset = "utf-8"/>
        <link rel="stylesheet" href="w3.css"/> 
    </head>
    <body>
        <div class="w3-card-4">

        <header class="w3-container w3-teal">
      <h1>Lista de Sexos na Base de Dados (${lista.length})</h1>
    </header>
    
    <a href = "/">[Voltar ao Inicio]</a>
      <div class="w3-container">
                            <div class="w3-container">
                            <table class="w3-table-all">
                                <tr>
                                    <th>Rank</th>
                                    <th>Sexo</th>
                                    <th>Número de Pessoas</th>
                                </tr>
     `   
    let sex = {
        "feminino" : 0,
        "masculino" : 0
    }

    for(let i =0; i<lista.length; i++){
        if (sex.hasOwnProperty(lista[i].sexo)) {
            sex[lista[i].sexo]++
        }
        else {
            sex[lista[i].sexo] = 1
        }
     } 

     var entries = Object.entries(sex);

entries.sort(function(a, b) {
  return b[1] - a[1];
});

    let i = 0
      for(let j in entries){
        i++
         pagHTML += `
                                <tr>
                        <td>${i}</td>
                        <td>${entries[j][0]}</td>
                        <td>
                            <a href="/sexo/${entries[j][0]}">
                            ${entries[j][1]}
                            </a>
                        </td>
                </tr>

         `
        } 
      

    pagHTML += `
        </table>
                        </div>
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
        <title>Sexo</title>
        <meta charset = "utf-8"/>
        <link rel="stylesheet" href="w3.css">
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

exports.genDesportoPage = function(pessoas){
    var data = new Date().toISOString().substring(0,16)
    var pagHTML = ` 
    <!DOCTYPE html>
        <html>
    <head>
        <title>Desporto</title>
        <meta charset = "utf-8"/>
        <link rel="stylesheet" href="w3.css"/> 
    </head>
    <body>
        <div class="w3-card-4">

        <header class="w3-container w3-teal">
      <h1>Lista de Desportos na Base de Dados</h1>
    </header>
    
    <a href = "/">[Voltar ao Inicio]</a>
     <div class="w3-container">
                            <div class="w3-container">
                            <table class="w3-table-all">
                                <tr>
                                    <th>Rank</th>
                                    <th>Desporto</th>
                                    <th>Número de Pessoas</th>
                                </tr>
     `   

     let desportosDict = new Object()
     pessoas.forEach((p) => {
             p.desportos.forEach((d) => {
                 if (desportosDict.hasOwnProperty(d)) {
                     desportosDict[d]++
                 }
                 else {
                     desportosDict[d] = 1
                 }
             }
         )
     }

 )

 var entries = Object.entries(desportosDict);

 entries.sort(function(a, b) {
   return b[1] - a[1];
 });
 
    let i = 0
      for(let j in entries){
        i++
         pagHTML += `
                                <tr>
                        <td>${i}</td>
                        <td>${entries[j][0]}</td>
                        <td>
                            <a href="/desporto/${entries[j][0]}">
                            ${entries[j][1]}
                            </a>
                        </td>
                </tr>

         `
        } 
      


        /*
     for(var desporto in desportosDict){
        pagHTML += `
            <li class="w3-ul w3-hoverable"><a href="/desporto/${desporto}">${desporto} - ${desportosDict[desporto]}</a></li>
        `
       } 
       */

    pagHTML += `
     </table>
                        </div>
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

exports.genProfissoesPage = function(lista){
    var data = new Date().toISOString().substring(0,16)
    var pagHTML = ` 
    <!DOCTYPE html>
        <html>
    <head>
        <title>Profissões</title>
        <meta charset = "utf-8"/>
        <link rel="stylesheet" href="w3.css"/> 
    </head>
    <body>
        <div class="w3-card-4">

        <header class="w3-container w3-teal">
      <h1>Lista de Profissões na Base de Dados</h1>
    </header>
    
    <a href = "/">[Voltar ao Inicio]</a>
    
    <div class="w3-container">
                            <div class="w3-container">
                            <table class="w3-table-all">
                                <tr>
                                    <th>Rank</th>
                                    <th>Profissão</th>
                                    <th>Número de Pessoas</th>
                                </tr>

    

    
     `   


     let profDict = new Object()
     lista.forEach((p) => {
        {
        if (profDict.hasOwnProperty(p.profissao)) {
            profDict[p.profissao]++
        }
        else {
            profDict[p.profissao] = 1  
     }
        }
    }
    )



var entries = Object.entries(profDict);

entries.sort(function(a, b) {
  return b[1] - a[1];
});

var top10 = entries.slice(0, 10);
 
//console.log(top10)

    let i = 0
     for(var prof in top10){
        i++
        pagHTML += `
                    <tr>
                        <td>${i}</td>
                        <td>${top10[prof][0]}</td>
                        <td>
                            <a href="/profissoes/${top10[prof][0]}">
                            ${top10[prof][1]}
                            </a>
                        </td>
                </tr>
        `
       } 


    pagHTML += `
       </table>
                        </div>
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

exports.genPessoaPage = function(pessoa){
    var data = new Date().toISOString().substring(0,16)
   

    var pagHTML = `
    <!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8"/>
        <title>Pessoa</title>
        <link rel="stylesheet" href="w3.css"/>
    </head>
    <body>
       <a href = "/">[Voltar ao Inicio]</a>
        <div class="w3-card-4">
        <header class="w3-container w3-teal">
          <h1 class="w3-center">${pessoa.nome}</h1>
        </header>
        <ul class="w3-ul w3-card-4 w3-hoverable " style="width:100%">
            <li><b>Idade: </b> ${pessoa.idade}</li>
            <li><b>Sexo: </b> ${pessoa.sexo}</li>
            <li><b>Morada: </b> ${pessoa.morada.cidade} - ${pessoa.morada.distrito}</li>
            <li><b>BI: </b> ${pessoa.BI}</li>
            <li><b>Descrição: </b> ${pessoa.descrição}</li>
            <li><b>Profissão: </b> ${pessoa.profissao}</li>
            <li><b>Partido Político: </b> ${pessoa.partido_politico.party_abbr} - ${pessoa.partido_politico.party_name}</li>
            <li><b>Marca do carro: </b>${pessoa.marca_carro}</li>
            <li><b>Desportos:</b>
            `
        
        for(let i = 0; i < pessoa.desportos.length ; i++){
            pagHTML += ` ${pessoa.desportos[i]}`
            if(i < pessoa.desportos.length - 1) pagHTML += `, `
        }
        
        pagHTML += `</li>
        <li><b>Animais:</b>
        `
        for(let i = 0; i < pessoa.animais.length ; i++){
            pagHTML += ` ${pessoa.animais[i]}`
            if(i < pessoa.animais.length - 1) pagHTML += `, `
        }

        pagHTML += `</li>
        <li><b>Figuras públicas PT:</b>
        `

        for(let i = 0; i < pessoa.figura_publica_pt.length ; i++){
            pagHTML += ` ${pessoa.figura_publica_pt[i]}`
            if(i < pessoa.figura_publica_pt.length - 1) pagHTML += `, `
        }

        pagHTML += `</li>
        <li><b>Destinos favoritos:</b>
        `

        for(let i = 0; i < pessoa.destinos_favoritos.length ; i++){
            pagHTML += ` ${pessoa.destinos_favoritos[i]}`
            if(i < pessoa.destinos_favoritos.length - 1) pagHTML += `, `
        }

        pagHTML += `</li>    
            </ul>
        <div class="w3-container w3-margin-top">
            <table class="w3-table-all w3-centered w3-hoverable w3-large" style="width: 100%;">
            <tr>
              <th>Fumador</th>
              <th>Gosta de cinema</th>
              <th>Gosta de viajar</th>
              <th>Acorda cedo</th>
              <th>Gosta de ler</th>
              <th>Gosta de música</th>
              <th>Gosta de comer</th>
              <th>Gosta de animais de estimação</th>
              <th>Gosta de dançar</th>
              <th>Comida Favorita</th>
            </tr>
            <tr>`

            for(var key in pessoa.atributos){
                if(pessoa.atributos[key] === true){
                    pagHTML += `<th>Sim</th>`
                }
                else if(pessoa.atributos[key] === false){
                    pagHTML += `<th>Não</th>`
                }
                else {
                    pagHTML += `<th>${pessoa.atributos[key]}</th>`
                }
            }    
        
        pagHTML += `</tr></table></div>
        <a href = "/">[Voltar ao Inicio]</a>
        <footer class="w3-container w3-blue">
        <h5>TPC3 de EW por simao : ${data}</h5>
      </footer>
        </div>
        
    </body>
</html>
    `
    return pagHTML
}
