var express = require('express');
var router = express.Router();
var Todo = require('../controllers/todo')

/* GET home page. */
router.get('/', function(req, res, next) {
  var data = new Date().toISOString().substring(0, 16)
  Todo.tasksList()
  .then(tasks =>{
    var auxT = 0
    for (let i = 0;i<tasks.length;i++){
      if (parseInt(tasks[i].id) > auxT){
          auxT = parseInt(tasks[i].id)
      }
    }
    auxT +=1
    Todo.usersList()
      .then(users =>{
        var auxU = 0
        for (let i = 0;i<users.length;i++){
          if (parseInt(users[i].id) > auxU){
              auxU = parseInt(users[i].id) +1
          }
        }
        res.render('index', { title: 'To-do App', uList : users, tList : tasks,idU : auxU,idT : auxT, d : data});
    })
    .catch(erro => {
      res.render('error', {error: erro, message: "Erro na obtenção da lista Utilizadores"})
    })
  })
  .catch(erro => {
    res.render('error', {error: erro, message: "Erro na obtenção da lista de Tasks"})
  })
});

/* Get delete/task/:id*/
router.get('/task/delete/:id', function(req, res, next) {
  // fazer uma confirm page????
  Todo.deleteTask(req.params.id)
    .then(
      res.redirect('/')
    )
    .catch(erro => {
      res.render('error', {error: erro, message: "Erro a eliminar uma task"})
    })
});

/* Get /task/done/:id*/
router.get('/task/done/:id', function(req, res, next) {
  // fazer uma confirm page????
  console.log(req.params.id)
  Todo.doneTask(req.params.id)
    .then(
      res.redirect('/')
    )
    .catch(erro => {
      res.render('error', {error: erro, message: "Erro a colocar uma task como done"})
    })
});

router.get('/task/edit/:id', function(req, res, next) {
  var data = new Date().toISOString().substring(0, 16)
  //console.log(req.params.id)
  Todo.getTask(req.params.id)
    .then( t =>{
      Todo.usersList()
      .then(users =>{
        tt = 'Task ' + t.id
        res.render('editTask', { title: tt , t : t,uList : users, d : data})
    })
    .catch(erro => {
      res.render('error', {error: erro, message: "Erro na obtenção da lista Utilizadores"})
    })
        
      }
    )
    .catch(erro => {
      res.render('error', {error: erro, message: "Erro no get da task"})
    })
});



router.post('/edit/task', function(req, res, next) {
  Todo.updateTask(req.body)
    .then(
      res.redirect('/')
    )
    .catch(erro => {
      res.render('error', {error: erro, message: "Erro na alteração da task"})
    })
});


/* Post User */
router.post('/add/user', function(req, res, next) {
  var data = new Date().toISOString().substring(0, 16)
  Todo.addUser(req.body)
    .then( user =>{ // posso retirar este user e o => e os {} ???
      res.redirect('/')
      }
    )
    .catch(erro => {
      res.render('error', {error: erro, message: "Erro na alteração do registo de aluno"})
    })
});

/* Post Task */
router.post('/add/task', function(req, res, next) {
  var data = new Date().toISOString().substring(0, 16)
  Todo.addTask(req.body)
    .then(
      res.redirect('/')
    )
    .catch(erro => {
      res.render('error', {error: erro, message: "Erro na alteração do registo de aluno"})
    })
});

module.exports = router;
