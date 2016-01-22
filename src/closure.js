/**
/* Closure in JavaScript
**/


var func = [];

for (var i = 0; i < 5; i++) {
  func[i] = function(){
    return i;
  }
}

// What are the values of :
console.log(func[0]());
console.log(func[1]());
console.log(func[2]());
console.log(func[3]());
console.log(func[4]());


// How do you solve this issue?
for (var i = 0; i < 5; i++) {
  func[i] = (function(arg){
    return function(){
      return arg;
    }
  })(i);
}

console.log(func[0]());
console.log(func[1]());
console.log(func[2]());
console.log(func[3]());
console.log(func[4]());

// Private properties with closure: Example from mdn
var counter = (function() {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function() {
      changeBy(1);
    },
    decrement: function() {
      changeBy(-1);
    },
    value: function() {
      return privateCounter;
    }
  };
})();
