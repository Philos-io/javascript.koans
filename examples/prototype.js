/**
/* Object prototype in JavaScript
**/

function User(name){
  this.name = name;
}


// 1.
User.prototype.age = 32;

console.log(User.prototype);
console.log(Object.prototype.prototype);


var user = new User("davy");
console.log(user.age);

User.prototype = {age: 20};

console.log(User.prototype);

var user = new User("Davy");
console.log(User.prototype.prototype);

console.log(Function.prototype.prototype);

console.log(Number.prototype.prototype);

console.log(Boolean.prototype.prototype);
