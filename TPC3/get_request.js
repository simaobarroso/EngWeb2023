const axios = require('axios')

// rota = url do pedido
axios.get('http://localhost:3000/pessoas') // precisamos da rota do pedido
// metodologia de promessas -> usamos try catch ou outras
// mas e` aconselhado o then
    .then(function(resp){ // sintax tradcional
        // axios -> dados vem no campo data
        var pessoas = resp.data // e` uma lista de dicionarios/objetos. Se perguntarmos o tipo
        console.log("Recuperei " + pessoas.length + " registos") // exercicio
        console.log(pessoas[3].nome)
    })
    .catch(erro => { // sintax moderna
        console.log("Erro "+ erro)

    }) // callback para o insucesso



// sitax moderna vs tradicional

