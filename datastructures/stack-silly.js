//simple stack, module pattern, array hijaking style
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
