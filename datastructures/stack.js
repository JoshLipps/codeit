

//quick answer array in a closure... d'oh

function Stack() {
   if( !(this instanceof Stack) ){
      return new Stack();
   }

   this.stack = [];
}
