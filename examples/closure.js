/**
/* Closure in JavaScript
**/


var func = [];

for (var i = 0; i < 5; i++) {
  func[i] = function(){
    return i;
  }
}


// How do you solve this issue?
