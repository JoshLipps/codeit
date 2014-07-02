

//self calling constructor

function Something() {
  "use strict";
  
  if(!(this instanceof Something)){
    return new Something();
  }

  this.property = "value";
}

var thing = new Something();

console.log(thing.property);
