/*global process" */
/*
https://www.hackerrank.com/challenges/the-love-letter-mystery
*/

function loveLetter(word){
  var count = 0;
  var half = Math.floor( (word.length / 2) );

  //count towards the middle from both sides
  for(var i = 0; i < half; i++) {
    count  += letterDifference( word[i], word[(word.length - 1 - i)] );
  }

  return count;
}

function letterDifference(a,b){
  var diff = 0;
  diff = Math.abs( ( a.charCodeAt() - b.charCodeAt() ) );
  return diff;
}

function processData(input) {
  "use strict";
  var parse_fun = function (s) { return parseInt(s, 10); };

  var lines = input.split('\n');
  var T = parse_fun(lines.shift());

  var data = lines.splice(0, T);
  var res = "";
  var solutions = [];

  // logic here

  solutions = data.map(loveLetter);

  res = solutions.join("\n");

  process.stdout.write(""+res+"\n");
  }

process.stdin.resume();
process.stdin.setEncoding("ascii");
var _input = "";
process.stdin.on("data", function (input) { _input += input; });
process.stdin.on("end", function () { processData(_input); });
