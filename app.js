require('dotenv').config();
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var methodOverride = require('method-override'); 
const session = require('express-session');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var coursesRouter = require('./routes/courses'); // Añadir la ruta de los cursos
var adminRouter = require('./routes/admin'); // Nueva ruta de administración

var app = express();

// Conectar a la base de datos
const connectDB = require('./config/database');
connectDB();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method')); 

// Middleware de inicio de sesión
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: { 
    maxAge: 100000, // Duración de la sesión en milisegundos
    secure: false  // Cambia a true si usas HTTPS
  }
}));

// Rutas
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/admin', adminRouter); // Usa la ruta de admin antes de la ruta de cursos
app.use('/courses', coursesRouter); // Usar la ruta de los cursos

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
