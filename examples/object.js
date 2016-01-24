/**
/* Object in JavaScript
**/

// 1. Objects created with syntax constructs

var obj = {name: "Davy"};

var bootcamp = Object.create(obj);

console.log(obj.__proto__ === Object.prototype);

console.log(bootcamp.__proto__ === obj);
