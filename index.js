'use strict';

var User = function(username) {
  this.username = username;
};

User.prototype.save = function (callback) {
  let that = this;
  setTimeout(function() {
    that.status = "saved";
    callback()
  }, 1000);
};

User.prototype.update = function (username) {
  this.username = username;
  let that = this;
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      that.status = "updated";
      if(username) {
        resolve(that);
      }else {
        reject("update fail!");
      }
    }, 1000);
  });
};

User.prototype.delete = function () {
  return new Promise((resolve, reject) => {
    setTimeout(()=> {
      resolve('deleted');
    }, 1000);
  });
};

User.prototype.sleep = function () {
  return new Promise((resolve, reject) => {
    setTimeout(()=> {
      resolve('waking');
    }, 10000);
  });
};

module.exports = User;
