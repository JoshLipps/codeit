use strict;

//self calling constructor

function Something() {
   if(!(this instanceof Something)){
      return new Something();
   }

   this.property = "value";
}

var thing = new Something();

console.log(thing.property);