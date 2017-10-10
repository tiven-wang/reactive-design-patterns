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
  describe('#sleep()', function() {
    let user;
    before(function() {
      user = new User('Tiven');
    });
    it('should waking without timeout', async function(){
      this.timeout(1000);
      let status = await user.sleep();
      assert.equal(status, "waking", "User should be waking");
    });
  });

// Testing Service-Level Agreements
  describe('#eat()', function() {
    let user;
    before(function() {
      user = new User('Tiven');
    });
    it('should eaten within latency', function(done){
      // this.timeout(10000);
      let n = 200, times = n;
      let timings = [];
      while(times > 0) {
        let start = Date.now();
        user.eat().then(()=> {
          let stop = Date.now();
          timings.push(stop - start);
          if(timings.length == n) {
            timings.sort();
            // console.log(timings[Math.ceil(95/100*timings.length)-1]);
            assert.ok(timings[Math.ceil(95/100*timings.length)-1] < 950);
            done();
          }
        });
        times--;
      }
    });
  });
});
