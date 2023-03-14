var express = require('express');
var router = express.Router();
var Aluno = require('../controllers/aluno') // norma. geralmente nome capitalidazdo

// podemos usar o json server

// roteador controlador (seta para baixo e para cima entre este e o ultimo)
// orm
// modelo

/* GET  page. */
router.get('/', function(req, res, next) {
  var data = new Date().toISOString().substring(0, 16)
  Aluno.list()
    .then(alunos => {
      res.render('index', { slist: alunos, d:data });
    })
    .catch(erro => {
      res.render('error', { error: erro, message:"Erro na obtencao da lista de alunos"});
    })
  //res.render('index', { slist: [], d:data });// pega no template, gera pag e envia a pag // {dicionario }
});

/* GET Student Page  page. */
router.get('/alunos/:idAluno', function(req, res, next) { //deixamos de usar regex req.params.idAluno
  var data = new Date().toISOString().substring(0, 16)
  Aluno.getAluno(req.params.idAluno)
    .then(aluno => {
      res.render('aluno', { a: aluno, d:data });
    })
    .catch(erro => {
      res.render('error', { error: erro, message:"Erro na obtencao do registo do aluno"});
    })
  //res.render('index', { slist: [], d:data });// pega no template, gera pag e envia a pag // {dicionario }
});

module.exports = router;
