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

User.prototype.delete = async function (username) {
  await deleteUser(this);
};

function deleteUser(user) {
  return new Promise((resolve, reject) => {
    setTimeout(()=> {
      resolve();
    });
  });
}

module.exports = User;
