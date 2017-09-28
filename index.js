'use strict';

var User = function() {
};

User.prototype.save = function (callback) {
  setTimeout(function() {
    callback('error')
  }, 1000);
};

module.exports = User;
