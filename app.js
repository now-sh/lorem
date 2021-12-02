const express = require('express');
const http = require('http');
const path = require('path');
const cors = require('cors');

const routes = require('./routes');
const indexRoutes = require('./routes/index');

const app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(express.favicon('./public/favicon.ico'));

// app.use(express.logger('dev'));
app.use(cors());
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser('metaphorpsum'));
app.use(express.session());
app.use(app.router);

app.use(express.static(__dirname + '/public'));
app.use(require('less-middleware')(path.join(__dirname, '/public')));

if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

require('./routes')(app);

http.createServer(app).listen(app.get('port'), function () {
  console.log(
    'Express server listening on http://localhost:' + app.get('port')
  );
});
