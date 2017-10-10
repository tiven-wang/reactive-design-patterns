var assert = require('assert');
var User = require('../index');

// Synchronous work/test
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
});

// Asynchronous work/test
describe('User', function() {
  describe('#save()', function() {
    it('should save without error', function(done) {
      var user = new User('Tiven');
      user.save(function(err) {
        if (err) {
          done(err);
        }else {
          assert.equal(user.status, "saved", "User should be saved");
          done();
        }
      });
    });
  });

// Promise async work/test
  describe('#update()', function() {
    let user;
    before(function() {
      user = new User('Tiven');
    });

    it('should update without error', function() {
      return user.update('tiwen').then((user)=> {
        assert.equal(user.status, "updated", "User should be updated");
      });
    });

    it('should update without error', function() {
      return user.update();
    });
  });

// Async/Await async work/test
  describe('#delete()', function() {
    let user;
    before(function() {
      user = new User('Tiven');
    });

    it('should delete without error', async function() {
      let status = await user.delete();
      assert.equal(status, "deleted", "User should be deleted");
    });
  });

// Async Timeout
  describe('#sleep', function() {
    let user;
    before(function() {
      user = new User('Tiven');
    });
    it('should waking without timeout', async function(){
      this.timeout(5000);
      let status = await user.sleep();
      assert.equal(status, "waking", "User should be waking");
    });
  });
});
