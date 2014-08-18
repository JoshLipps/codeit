/*global process*/


function palendromable(string){
  var map = {};
  var oddSets = 0;

  //count all letters in a map
  for(var i=0; i<string.length; i++){
    var letter = string[i];
    if( map[letter] === undefined) {
      map[letter] = 1;
    } else {
      map[letter] += 1;
    }
  }

  for(var key in map){
    //console.log(key + ": " + map[key]);
    oddSets += ( map[key]%2 );
  }

  if(oddSets > 1){
    return "NO";
  } else {
    return "YES";
  }
}

function processData(input) {
  "use strict";

  var lines = input.split('\n');
  var data = lines.shift();


  var res = "";

  res = palendromable(data);

  process.stdout.write(""+res+"\n");
  }

process.stdin.resume();
process.stdin.setEncoding("ascii");
var _input = "";
process.stdin.on("data", function (input) { _input += input; });
process.stdin.on("end", function () { processData(_input); });
