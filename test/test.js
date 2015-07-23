var path = require('path');
var should = require("chai").should();
var Animal = require(path.join(process.cwd(), '/lib/animal'));

describe('Mocha + Chai', function(){
  it('truthyness', function(){
    true.should.be.true;
    false.should.be.false;
  })
})


describe('Thanks', function() {
  var thanks = require(path.join(process.cwd(), '/lib/thanks'));


it('should thank me for downloading my app');
  thanks.should.equal('Thanks for downloading my app');

});


//TESTING AN 'ANIMAL' OBJECT

describe('animal', function () {
  describe('constructor', function() {
    it('should return an animal object', function () {
      var animal = new Animal();

      animal.should.be.an('object');
      animal.should.be.an.instanceOf(Animal);
    })
  });
  it('should be alive', function () {
    var animal = new Animal();

    animal.isAlive.should.be.true;
  })
});

describe('#becute()', function () {
  var animal = new Animal();
  it('should make the animal cute', function () {
    animal.isCute.should.not.be.true;
    animal.beCute();
    animal.isCute.should.be.true;
  });
  it('should accept a type', function () {
    var cat = new Animal('cat');
    var dog = new Animal('dog');

    cat.type.should.equal('cat');
    dog.type.should.equal('dog');
});
  it('should be a prototype method', function () {
    animal.should.respondTo('beCute');
    animal.should.not.have.ownProperty('beCute');
  });
});

describe('#updateHealthStats()', function () {
  it('should change the health', function (done) {
    this.timeout(30000);

    var animal = new Animal();
    var health = animal.health;

    animal.updateHealthStats(function () {
      animal.health.should.not.equal(health);
      done();
    });
  });
});

// THIS TEST IS TESTING THE TESTING. MIND BLOWN.

  describe('Tests', function() {
    it('truthyness', function() {
      true.should.equal(true);
  });
});

// TEST ARRAY WITH MAP FUNCTIONS

describe('Array', function () {
  describe('#map()', function () {
    it('should create a new array with the return value of the inner fn', function () {
      var array = [1,2,3,4,5];

      var output = array.map(function (item) {
        return item * item;
      })
      output.should.eql([1,4,9,16,25]);
    });

  it('should return an array of items that return truthy in the inner fn', function () {
    var array = [1,2,3,4,5];

    var output = array.filter(function (item) {
      return item %2;
    });
    output.should.eql([1,3,5]);
  })
    it('should keep the same length', function () {
      var array = [1,2,3,4,5];

      var length = array.map(function (item) {
        return false;
      }).length;
      length.should.equal(array.length);
    });

    it('should not mutate the original array', function () {
      var array = [1,2,3,4,5];

      array.map(function () {
        return false;
      });
      array.should.eql([1,2,3,4,5]);
    });
  });
});
