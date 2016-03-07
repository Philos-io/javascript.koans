var expect = require('chai').expect;

xdescribe('JavaScript Inheritance Patterns', function(){

  describe('Pseudoclassical pattern', function(){

    var extendPrototype = function(child, parent) {
      child.prototype = parent.prototype;
    };

    // base Animal object
    var Animal = function() {};
    // inhertiable attributes / methods
    Animal.prototype = {
        name: '',
        gender: '',
        planetOfBirth: 'Earth',
        getGender: function () {
            return this.gender;
        }
    };

    var Male = function(name){
      this.name = name;
      this.gender = 'Male';
    };

    // Customer inherit from Person
    extendPrototype(Male, Animal);


    var dog = new Male('dog');
    it('Analysing an instance of Male', function(){
      // What will be his gender?
      // Where was he born?
    });

    var Female = function(name){
      this.name = name;
      this.gender = 'Female'; // By default we set it
    };

    // Employee inherit from Person
    extendPrototype(Female, Animal);


    var cat = new Female('cat');
    it('Analysing an instance of Female', function(){
      // What will be his gender?
      // Where was she born?
    });

    // Changing the planetOfBirth for the Male to "Pluton"
    Male.prototype.planetOfBirth = "Pluton";

    it('Analysing dog and cat', function(){
      // Where were they born?
    });

  });

  describe('Functional pattern', function(){

    var animal = function(name) {
      var that = {};
      that.name = name || '';
      that.gender = '';
      that.planetOfBirth = 'Earth';
      that.getGender = function () {
          return this.gender;
      };
      return that;
    };

    var male = function(name){
      var that = animal(name);
      that.name = name;
      that.gender = "Male";
      return that;
    };

    var dog = male('joe');
    it('Analysing dog', function(){
      // What will be his gender?
      // Where was he born?
    });

    var female = function(name){
      var that = animal(name);
      that.name = name;
      that.gender = "Female";
      return that;
    };

    var cat = female('ana');
    it('Analysing cat', function(){
      // What will be his gender?
      // Where was he born?
    });

    // Changing the planetOfBirth for the dog to "Pluton"
    dog.planetOfBirth = "Pluton";

    it('Analysing dog and cat', function(){
      // Where were they born?
    });
  });

  describe('Prototypal pattern', function(){
    // base Animal object
    var Animal = function() {};
    // inhertiable attributes / methods
    Animal.prototype = {
        name: '',
        gender: '',
        planetOfBirth: 'Earth',
        getGender: function () {
            return this.gender;
        }
    };

    var Male = function(name){
      Animal.call(this);
      this.name = name;
      this.gender = 'Male';
    };
    Male.prototype = Object.create(Animal.prototype);

    var dog = new Male('dog');
    it('Analysing an instance of Male', function(){
      // What will be his gender?
      // Where was he born?
    });

    var Female = function(name){
      Animal.call(this);
      this.name = name;
      this.gender = 'Female';
    };
    Female.prototype = Object.create(Animal.prototype);

    var cat = new Female('dog');
    it('Analysing an instance of Female', function(){
      // What will be his gender?
      // Where was she born?
    });

    // Changing the planetOfBirth for the Male to "Pluton"
    Male.prototype.planetOfBirth = "Pluton";

    it('Analysing dog and cat', function(){
      // Where were they born?
    });
  });
});
