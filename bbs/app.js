var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var sha256 = require('sha256');

var indexRouter = require('./routes/index');
var testRouter = require('./routes/test');
var loginRouter = require('./routes/login');
var enrollRouter = require('./routes/enroll');
var loginreceiveRouter = require('./routes/login_receive');
var enrollreceiveRouter = require('./routes/enroll_receive');
var postsRouter = require('./routes/posts');
var writeRouter = require('./routes/write');
var wreceiveRouter = require('./routes/write_receive');
var postRouter = require('./routes/post');
var postreceiveRouter = require('./routes/post_receive');

var sequelize = require('./models').sequelize;
sequelize.sync();


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/test', testRouter);
app.use('/login', loginRouter);
app.use('/enroll', enrollRouter);
app.use('/login_receive', loginreceiveRouter);
app.use('/enroll_receive', enrollreceiveRouter);
app.use('/posts', postsRouter);
app.use('/write', writeRouter);
app.use('/write_receive', wreceiveRouter);
app.use('/post',postRouter);
app.use('/post_receive', postreceiveRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
