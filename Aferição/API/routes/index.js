var express = require('express');
var router = express.Router();
var emd = require('../controllers/emd')

/* GET home page. */
router.get('/api/emd', function(req, res, next) {
  emd.p1()
    .then(dados => {
      res.json(dados);
    })
    .catch(erro => res.status(601).json({erro:erro}))
  
});


router.get('/api/emd/modalidades', function(req, res, next) {
  emd.p3()
    .then(dados => {
      res.json(dados);
    })
    .catch(erro => res.status(601).json({erro:erro}))
  
});

router.get('/api/emd?res=OK', function(req, res, next) {
  emd.p4()
    .then(dados => {
      res.json(dados);
    })
    .catch(erro => res.status(601).json({erro:erro}))
  
});

router.get('/api/emd?modalidade=:x', function(req, res, next) {
  emd.p5(req.params.x)
    .then(dados => {
      res.json(dados);
    })
    .catch(erro => res.status(601).json({erro:erro}))
  
});

router.get('/api/atletas?gen=F', function(req, res, next) {
  emd.p6()
    .then(dados => {
      res.json(dados);
    })
    .catch(erro => res.status(601).json({erro:erro}))
  
});

router.get('/api/atletas?clube=:x', function(req, res, next) {
  emd.p7(req.params.x)
    .then(dados => {
      res.json(dados);
    })
    .catch(erro => res.status(601).json({erro:erro}))
  
});

router.get('/api/emd/:id', function(req, res, next) {
  emd.p2(req.params.id)
    .then(dados => {
      res.json(dados);
    })
    .catch(erro => res.status(601).json({erro:erro}))
  
});







module.exports = router;
