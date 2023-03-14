var createError = require('http-errors'); // usar para tratamento de erros
var express = require('express'); // vamos utilizar o express
var path = require('path'); // vamos usar localmente -> abstrai se estamos a trabalhar em windows ou linux
//var cookieParser = require('cookie-parser'); //nao vamos usar cookies tao cedo
var logger = require('morgan'); //pacote que nos da log dos pedidos que vem ao servidor

var indexRouter = require('./routes/index'); 
//var usersRouter = require('./routes/users'); // nesta aplicacao nao temos users

var app = express(); // criamos a aplicacao e executamos express

// view engine setup
app.set('views', path.join(__dirname, 'views')); //onde estao os views
app.set('view engine', 'pug'); // motor de render -> pug

// a partir ddaquie e` execucao
// pipeline vertical da execucao (enquanto nao houver uma funcao que lhe de resposta, continua)
app.use(logger('dev')); // usado em apaches
app.use(express.json()); 
app.use(express.urlencoded({ extended: false })); // estas 2 ultimas vai por informacao no body (faz o que o chunk fazia antigamente)
//app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public'))); // configuracai dos recursos estaticos

app.use('/', indexRouter); // se a rota do pedido coicindir com esta, vai entrar naquela funcao
// se nao conseguir responder ao pedidio, passa para a do 404
//app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
