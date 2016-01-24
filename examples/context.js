/**
* Context 'this' in JavaScript
**/

// Object literal
var company = {
  name: 'Philos Lab',
  mentors: ['Alex', 'Brecht', 'Davy'],
  addMentor: function(name){
     return this.mentors.push(name);
  }
};

// What's 'this' refers to?
company.addMentor('Juan'); // =>

// What's 'this' refers to?
var addMentor = company.addMentor;


// new operator
var Company = function(name){
  this.name = name;
  this.mentors = ['Alex', 'Brecht', 'Davy'];
};

// What 'this' refers to?
var company = Company('Philos Lab');


// What 'this' refers to?
var company = new Company('Philos Lab');

// Init function
var Company = function(name){
  this.name = name;
  this.mentors = [];

  function init(){
    this.mentors.push('Alex');
    this.mentors.push('Brecht');
    this.mentors.push('Davy');
  }

  init();
};


// hijack the context with 'call' and 'apply'
addMentor.call(company, 'Juan');
addMentor.apply(company, ['Juan']);
