

//quick answer array in a closure... d'oh
/*
function Stack() {
   if( !(this instanceof Stack) ){
      return new Stack();
   }

   this.stack = [];
}*/


//module pattern, array hijaking style

//accept array?
JAL = JAL || {};
JAL.stack = JAL.stack || (function(){
  //private members
  var stack = [];

  //public functions

  return {
    push: stack.push,
    pop: stack.pop
  };
}());
