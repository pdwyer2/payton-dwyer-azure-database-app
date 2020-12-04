var createError = require('http-errors');
var express = require('express');
var path = require('path');
var debug = require('debug')('app4')

var indexRouter = require('./routes/index');
var inventoryRouter = require('./routes/read');
var addInventoryRouter = require('./routes/add');
var editInventoryRouter = require('./routes/update');
var delteInventoryRouter = require('./routes/delete')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/read', inventoryRouter);
app.use('/add', addInventoryRouter);
app.use('/update', editInventoryRouter);
app.use('/delete', delteInventoryRouter);


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

app.set('port', process.env.PORT || 3000)

var server = app.listen(app.get('port'), function () {
  debug('Express server listening on port ' + server.address().port)
})
//module.exports = app;

//For viewing locally:
//npm start
//http://localhost:3000 in browser