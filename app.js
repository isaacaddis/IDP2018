
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes');

var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// Routes

app.get('/', routes.index);
app.get('/illness', routes.illness);
app.get('/gmos', routes.gmos);
app.get('/dehydration', routes.dehydration);
app.get('/fermentation', routes.fermentation);
app.get('/irradiation', routes.irradiation);
app.get('/pasteurization', routes.pasteurization);
app.get('/preservatives', routes.preservatives);
app.get('/refrigeration', routes.refrigeration);
app.get('/workscited', routes.workscited);
app.get('/simulation',routes.simulation);
app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});
