/**
/* Hoisting in JavaScript
**/

function Company(){

  init();

  var init = function(){
    this.employees.push('Davy');
    this.employees.push('Max');
  }
}

//var company = new Company();



function getMentors(){
  return mentors;

  var mentors = ['Davy', 'Juan', 'Alex', 'Brecht'];
}

var mentors = getMentors();


//
function getCandidates(){
  return candidates();

  function candidates(){
       return ['Davy', 'Juan', 'Alex', 'Brecht'];
  }
}
