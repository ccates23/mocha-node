 function Animal(type) {
  this.type = type;
  this.isAlive = true;
  this.health = 1;
}

Animal.prototype.beCute = function () {
 this.isCute = true;
};

Animal.prototype.updateHealthStats = function (){
	var self = this;

	setTimeout(function () {
		self.health = Math.random();
		cb();
}, 30000);
};


module.exports = Animal;