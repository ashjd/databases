var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {

      models.messages.get();

    }, // a function which handles a get request for all messages 
    post: function (req, res) {

      models.messages.post();

    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {

      models.users.get();

    },
    post: function (req, res) {

      models.users.post();

    }
  }
};

// exports.collectData = function(request, callback) {
//   var data = '';
//   request.on('data', function(chunk) {
//     data += chunk;
//   });
//   request.on('end', function() {
//     callback(data);
//   });
// };