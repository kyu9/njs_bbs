const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const loginreceiveRouter = require('./routes/login_receive');
const enrollreceiveRouter = require('./routes/enroll_receive');
const logoutRouter = require('./routes/logout');
const postsRouter = require('./routes/posts');
const wreceiveRouter = require('./routes/write_receive');
const wreceiveFileRouter = require('./routes/write_receive_file');
const postRouter = require('./routes/post');
const commentRouter = require('./routes/comment');
const profileRouter = require('./routes/profile');
const historyRouter = require('./routes/history');
const deletePostRouter = require('./routes/post_delete');
const deleteCommentRouter = require('./routes/comment_delete');
const fixPostRouter = require('./routes/p_fix');
const ureceiveRouter = require('./routes/update_receive');
const ureceiveFileRouter = require('./routes/update_receive_file');

const sequelize = require('./models').sequelize;
sequelize.sync();

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'))
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())

app.get('/login', function(req, res){
  res.render('login')
})
app.get('/enroll', function(req, res){
  res.render('enroll')
})
app.get('/write', function(req, res){
  res.render('write')
})

app.use('/', indexRouter);
app.use('/login_receive', loginreceiveRouter);
app.use('/enroll_receive', enrollreceiveRouter);
app.use('/posts', postsRouter);
app.use('/write_receive', wreceiveRouter);
app.use('/write_receive_file', wreceiveFileRouter);
app.use('/post',  postRouter);
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

app.use((err, req, res, next)=>{
  let apiError = err
  if(!err.status){
    apiError = createError(err)
  }

  //에러는 로컬에서만 나오도록
  res.locals.message = apiError.message
  res.locals.error = process.env.NODE_ENV === 'development' ? apiError : {}

  return res.status(apiError.status)
      .json({message: apiError.message})
})

module.exports = app
