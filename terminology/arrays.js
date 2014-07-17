//array forEach

var array = ["1","2","3","4"];

console.dir(array);
array.forEach( function(element,index,array) {
  array[index] = parseInt(element);
});
console.dir(array);
