/**
* Constructor design pattern in JavaScript
**/

function Employee(name){
  this.name = name;
}

// Without the 'new operator'
var employee = Employee('Davy');

// with the 'new operator'
var employee = new Employee('Davy');
