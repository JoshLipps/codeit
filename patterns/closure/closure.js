//use strict;


var something = (function() {
   var blah = "yo";

   return {
     thing: blah
   };
})();

console.log(something.thing);
//console.log(blah);


var a = 1;
function outer(test) {
  var outside = 0;
  var fun = function () {
    //inside
      var inside = 0;
      console.log("Inside: " + inside + " Outside: " + outside);

      inside += 1;
      outside += 1;
  };
  return fun;
}

var caller = outer();
caller();
caller()
var caller2 = outer();
caller2();
caller();
