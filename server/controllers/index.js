var models = require('../models');
var db = require('../db');


module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get(function(data) {
        res.json(data);
        console.log('get data in messages - ', data);
        res.end(data);
      });
    }, // a function which handles a get request for all messages 
    post: function (req, res) {
      console.log('Serving request type ' + req.method + ' for url ' + req.url);
      var message = '\"' + req.body.message.toString() + '\"';
      var username = '\"' + req.body.username.toString() + '\"';
      var roomname = '\"' + req.body.roomname.toString() + '\"';
      var input = message + ', ' + username + ', ' + roomname;
      console.log('input', input);
      models.messages.post(input, function(data) {
        console.log('done');
        res.end('done');
      });

    } // a function which handles posting a message to the database
  },

  users: {
    get: function (req, res) {
      models.users.get(function(data) {
        console.log('data - ', data);
        res.end(data);
      });
    },
    post: function (req, res) {
      console.log('Serving request type ' + req.method + ' for url ' + req.url);
      models.users.post('\"' + req.body.username.toString() + '\"', function(data) {
        console.log('done');
        res.end('done');
      });
    }
  }
};


