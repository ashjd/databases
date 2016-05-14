var express = require('express');
var db = require('./db');

// Middleware
var morgan = require('morgan');
var parser = require('body-parser');

// Router
var router = require('./routes.js');

var app = express();
module.exports.app = app;





var results = db.query('INSERT INTO MESSAGES (message, username, roomname) VALUES ("hi", "aj", "lobby")', function(err, rows, fields) {
  if (err) {
    throw err;
  } else {
    var data = '';
    for (var i in rows) {
      console.log('rows' + rows[i]);
      data += rows[i] + '\n';
    }
    return data;
  }
}); 






// Set what we are listening on.
app.set('port', 3000);

// Logging and parsing
app.use(morgan('dev'));
app.use(parser.json());

// Set up our routes
app.use('/classes', router);

// Serve the client files
app.use(express.static(__dirname + '/../client'));

// If we are being run directly, run the server.
if (!module.parent) {
  app.listen(app.get('port'));
  console.log('Listening on', app.get('port'));
  console.log('results' + results);
}

