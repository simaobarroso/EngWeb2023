var Emd = require("../models/emd")

// GET /api/emd
module.exports.p1 = () => {
    return Exame.find({}, { nome: 1, resultado: 1, data: 1 })
      .then((resposta) => {
        return resposta;
      })
      .catch((erro) => {
        return erro;
      });
  };


module.exports.p2 = id => {
    return Emd
    .findOne({_id:id})
    .then(dados=>{
        return dados
    })
    .catch(erro =>{
        return erro
    })
}

// db.exames.distinct("modalidade")
module.exports.p3 = () => {
    return Emd
    .distinct("modalidade")
    .then(dados=>{
        return dados
    })
    .catch(erro =>{
        return erro
    })
}

// GET /api/emd?res=OK - Devolve a lista de EMD com resultado "true";
module.exports.p4 = () => {
    return Emd
    .find({resultado:true})
    .then(dados=>{
        return dados
    })
    .catch(erro =>{
        return erro
    })
}

// GET /api/emd?modalidade=X
module.exports.p5 = x => {
    return Emd
    .find({modalidade:x})
    .then(dados=>{
        return dados
    })
    .catch(erro =>{
        return erro
    })
}

// GET /api/atletas?gen=F
module.exports.p6 = () => {
    return Emd
    .find({género:"F"})
    .sort({data:-1})
    .then(dados=>{
        return dados
    })
    .catch(erro =>{
        return erro
    })
}


// GET /api/atletas?clube=x
module.exports.p7 = x => {
    return Emd
    .find({clube:x})
    .sort({data:-1})
    .then(dados=>{
        return dados
    })
    .catch(erro =>{
        return erro
    })
}