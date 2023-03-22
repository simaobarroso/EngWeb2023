var express = require('express');
var router = express.Router();
var Pessoa = require('../controllers/pessoa')

/* GET home page. */
router.get('/pessoa', function(req, res, next) {
  Pessoa.list()
    .then(dados => {
      res.json(dados);
    })
    .catch(erro => res.status(601).json({erro:erro}))
  
});

router.get('/pessoa/:id', function(req, res, next) {
  Pessoa.getPessoa(req.params.id)
    .then(dados => {
      res.json(dados);
    })
    .catch(erro => res.status(602).json({erro:erro}))
  
});


// temos que testar com o postman (ou curl)
router.post('/pessoa',(req,res) => {
  Pessoa.addPessoa(req.body)
    .then(dados => res.status(201).json(dados))
    .catch(erro => res.status(603).json({erro:erro}))

})

router.put('/pessoa/:id',(req,res) => {
  Pessoa.updatePessoa(req.body)
    .then(dados => res.json(dados))
    .catch(erro => res.status(604).json({erro:erro}))

})

router.delete('/treinos/:id',(req,res) => {
  Pessoa.deletePessoa(req.params.id)
    .then(dados => res.json(dados))
    .catch(erro => res.status(605).json({erro:erro}))
})

module.exports = router;
