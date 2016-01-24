/**
* Module in JavaScript
**/

describe('Module in JavaScript', function(){

  function Company(){

    var name = 'Philos Lab';

    var founded = 2014;

    function getInfo(){
      return {
        name: name,
        founded: founded
      };
    }

    function getMentors(){
      return ['Davy', 'Juan', 'Alex', 'Brecht'];
    }

    return {
      getInfo: getInfo
    }
  }

  it('should have a property of type function', function(){
    var company = Company();
    expect
  })
});
