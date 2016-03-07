/**
* Context in JavaScript
**/
var expect = require('chai').expect;

xdescribe('Context in JavaScript', function(){

  var company = {
    name: 'Philos Lab',
    mentors: ['Alex', 'Brecht', 'Davy'],
    addMentor: function(name){
      this.mentors.push('Juan');
      return this;
    }
  };

  it('What is "this" refer to?', function(){
    var context = company.addMentor();
    // Fill in the expectation
    expect().toEqual();


    //-------------------------------------------------------
    var context = function(){
      return function init(){
        return this;
      }();
    };

    var result = context();
    // Fill in the expectation
    expect().toEqual();


    //-------------------------------------------------------
    var context = function(){
      return function init(){
        return this;
      }();
    };

    var result = context();
    // Fill in the expectation
    expect().toEqual();
  });

  it('Should switch the context', function(){
    var context = company.addMentor();
    expect(context).toEqual({name: 'Wemanity'});
  });

});
