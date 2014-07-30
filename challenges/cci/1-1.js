/*
1.1
Implement an algorithm to determine if a string has all unique characters.
What if you cannot use additional data structures?
*/

var uniq = "uniq";
var nonuniq = "abcdea";
var empty = "";
var single = "a";

//no data structure, O(n^2)
function isUniqString(string) {
  var first = "";
  var rest = "";
  
  if(typeof string !== "string") return false;
  if(string.length === 0 || string.length === 1) return true;
  if(typeof string !== "string") return false;

  first = string[0];
  rest = string.slice(1);

  if(rest.indexOf(first) === -1){
    return isUniqString(rest);
  } else {
    return false;
  }

}

//using map, O(n)
function isUniqStringMap(string) {
  if(typeof string !== "string") return false;

  var letterMap = {}, letter = "";
  for(var i=0; i<string.length; i += 1){
    letter = string[i];

    if(letterMap[letter]){
      return false;
    } else {
      letterMap[letter] = true;
    }
  }
  //(no dups)
  return true;
}

console.log( isUniqStringMap(empty) ); //true
console.log( isUniqString(empty) ); //true


console.log( isUniqStringMap(nonuniq) ); //false
console.log( isUniqString(nonuniq) ); //false

console.log( isUniqStringMap(single) ); //false
console.log( isUniqString(single) ); //false

console.log( isUniqStringMap(uniq) ); //t
console.log( isUniqString(uniq) ); //t

console.log(isUniqStringMap(null));
console.log(isUniqString(null));
