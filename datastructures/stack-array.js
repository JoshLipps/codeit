//simple stack, module pattern, array index style
JAL = JAL || {};
JAL.stack = JAL.stack || (function(){
  //private members
  var stack = [];
  var next = 0;

  //public functions

  return {
    push: function(node){
      //handl error use strict?
      if(node === undefined)
        return new Error("Can't push undefined");
      //stack at next open space is whatever
      stack[next] = node;
      next += 1;
    },
    pop: function(){
      if(next === 0)
        return null;


    }
  };
}());
