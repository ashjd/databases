var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      var queryString = 'SELECT * FROM MESSAGES';
      
      exports.connectToDb(queryString, function(data) {
        callback(data);
      });
    }, // a function which produces all the messages

    post: function (str, callback) {
      var queryString = 'INSERT INTO MESSAGES (message, username, roomname) VALUES (' + str + ');';
      exports.connectToDb(queryString, function(data) {
        callback(data);
      });
      // insert a new row inside messages table with corresponding fields
    } // a function which can be used to insert a message into the database
  },

  users: {

    get: function (callback) {
      var queryString = 'SELECT username FROM MESSAGES';
      exports.connectToDb(queryString, function(data) {
        callback(data);
      });
    },
    post: function (str, callback) {
      var queryString = 'INSERT INTO MESSAGES (message, username, roomname) VALUES ("In mercy\'s name, three days is all I need.", ' + str + ', "undefined");';
      exports.connectToDb(queryString, function(data) {
        callback(data);
      });

    }
  }
};

exports.connectToDb = function(queryString, callback) {
  db.query(queryString, function(err, results) {
    if (err) {
      throw err;
    } else {
      // var data = '';
      // for (var i in rows) {
      //   data += rows[i] + '\n';
      // }
      callback(results);
    }
  });
};


