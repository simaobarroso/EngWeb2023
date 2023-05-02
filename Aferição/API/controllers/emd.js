/*var Emd = require("../models/emd")

// GET /api/emd
module.exports.p1 = () => {
    return Emd
     .find({}, { nome: 1, resultado: 1, data: 1 })
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
*/

var EMD = require('../models/emd')

// API: 1
module.exports.getEMDList = () => {
    return EMD.find({}, {_id:1,nome:1,dataEMD:1,resultado:1})
        .sort({nome:1})
        .then(dados => {
            return dados
        })
        .catch(erro => {
            return erro
        })
}

// API: 2
module.exports.getEMD= id => {
    return EMD.findOne({_id: id})
        .then(dados => {
            return dados
        })
        .catch(erro => {
            return erro
        })
}

// API: 3
module.exports.getModalidades= () => {
    return EMD.distinct('modalidade')
        .then(dados => {
            return dados
        })
        .catch(erro => {
            return erro
        })
}

// API: 4
module.exports.getAprovados= () => {
    return EMD.find({resultado:true})
        .then(dados => {
            return dados
        })
        .catch(erro => {
            return erro
        })
}

// API: 5
module.exports.getXModalidade= x => {
    return EMD.find({modalidade:x})
        .then(dados => {
            return dados
        })
        .catch(erro => {
            return erro
        })
}

// API : 6
module.exports.getFemininos= () => {
    return EMD.find({'género':'F'},{nome:1}).sort({"nome.primeiro":1,"nome.último":-1})
        .then(dados => {
            return dados
        })
        .catch(erro => {
            return erro
        })
}

// API: 7
module.exports.getXClube= x => {
    return EMD.find({clube:x},{nome:1}).sort({"nome.primeiro":1,"nome.último":-1})
        .then(dados => {
            return dados
        })
        .catch(erro => {
            return erro
        })
}

module.exports.addEMD = p => {
    return EMD.create(p)
    .then(dados => {
        return dados
    })
    .catch(erro => {
        return erro
    })
}

module.exports.updateEMD = p => {
    return EMD.updateOne({_id: p._id}, p)
    .then(dados=>{
        return dados
    })
    .catch(erro =>{
        return erro
    })
}

module.exports.deleteEMD = id => {
    return EMD.deleteOne({_id: id})
    .then(dados => {
        return dados
    })
    .catch(erro => {
        return erro
    })
}

module.exports.list = () => {
    return EMD.find()
        .sort({index:1})
        .then(dados => {
            return dados
        })
        .catch(erro => {
            return erro
        })
}