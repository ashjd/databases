var models = require('../models');
var db = require('../db');


exports.headers = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10, // Seconds.
  'Content-Type': 'text/html'
};

module.exports = {
  messages: {
    get: function (req, res) {

      models.messages.get(function(data) {
        exports.sendResponse(res, data, 200);
      });

    }, // a function which handles a get request for all messages 
    post: function (req, res) {

      exports.collectData(req, function(err, data) {
        if (err) {
          throw err;
        } else {
          console.log ('data is = ', data);
          models.messages.post( '"hello there", "aj", "lobby"', function(data) {
            exports.sendResponse(res, data, 201);
          });
        }
      });

    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {

      models.users.get(function(data) {
        exports.sendResponse(res, data, 200);
      });

    },
    post: function (req, res) {
      exports.collectData(req, function(err, data) {
        if (err) {
          throw err;
        } else {
          console.log('data:' + data);
          models.users.post('"ash"', function(data) {
            exports.sendResponse(res, data, 201);
          });
        }
      });
    }
  }
};

exports.collectData = function(request, callback) {
  var data = '';
  request.on('data', function(chunk) {
    data += chunk;
  });
  request.on('end', function() {
    callback(data);
  });
};

exports.sendResponse = function(response, obj, status) {
  status = status || 200;
  response.writeHead(status, exports.headers);
  response.end(obj);
};

exports.connectToDb = function(queryString, callback) {
  db.query(queryString, function(err, rows, fields) {
    if (err) {
      throw err;
    } else {
      var data = '';
      for (var i in rows) {
        console.log(rows[i]);
        data += rows[i] + '\n';
      }
      callback(data);
    }
  });
};

