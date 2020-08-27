var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var loginRouter = require('./routes/login');
var enrollRouter = require('./routes/enroll');
var loginreceiveRouter = require('./routes/login_receive');
var enrollreceiveRouter = require('./routes/enroll_receive');
var logoutRouter = require('./routes/logout');
var postsRouter = require('./routes/posts');
var writeRouter = require('./routes/write');
var wreceiveRouter = require('./routes/write_receive');
var wreceiveFileRouter = require('./routes/write_receive_file');
var postRouter = require('./routes/post');
var commentRouter = require('./routes/comment');
var profileRouter = require('./routes/profile');
var historyRouter = require('./routes/history');
var deletePostRouter = require('./routes/post_delete');
var deleteCommentRouter = require('./routes/comment_delete');
var fixPostRouter = require('./routes/p_fix');
var ureceiveRouter = require('./routes/update_receive');
var ureceiveFileRouter = require('./routes/update_receive_file');


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
app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: true,
  cookie:{
    maxAge: 24000 * 60 * 60
  }
}));

app.use('/', indexRouter);
app.use('/login', loginRouter);
app.use('/enroll', enrollRouter);
app.use('/login_receive', loginreceiveRouter);
app.use('/enroll_receive', enrollreceiveRouter);
app.use('/posts', postsRouter);
app.use('/write', writeRouter);
app.use('/write_receive', wreceiveRouter);
app.use('/write_receive_file', wreceiveFileRouter);
app.use('/post',postRouter);
app.use('/comment', commentRouter);
app.use('/profile', profileRouter);
app.use('/logout', logoutRouter);
app.use('/history', historyRouter);
app.use('/post_delete', deletePostRouter);
app.use('/comment_delete', deleteCommentRouter);
app.use('/pfix', fixPostRouter);
app.use('/update_receive', ureceiveRouter);
app.use('/update_receive_file', ureceiveFileRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});



module.exports = app;
