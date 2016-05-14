var db = require('../db');

module.exports = {
  messages: {
    get: function () {

      // var queryString = 'SELECT * IN MESSAGES';
    
    }, // a function which produces all the messages


    post: function () {
      db.connect(function(err) {
        if (err) {
          throw err;
        } else {
          var queryString = 'INSERT INTO MESSAGES (message, username, roomname) VALUES (?,?,?);';
          db.query(queryString, function(err, rows, fields) {
            if (err) {
              throw err;
            } else {
              for (var i in rows) {
                console.log(rows[i]);
              }
            }
          });
        }
      });
      // insert a new row inside messages table with corresponding fields
    } // a function which can be used to insert a message into the database
  },

  users: {

    get: function () {
      // var queryString = 'SELECT users IN MESSAGES';
    },
    post: function () {

    }
  }
};



