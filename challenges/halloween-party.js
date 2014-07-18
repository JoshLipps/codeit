/*global process*/
/*
https://www.hackerrank.com/challenges/halloween-party
*/

function chocoCuts(cuts){
  var half = (cuts / 2);
  //magic for odds
  var high = Math.floor(half);
  var low = Math.ceil(half);

  return ( high * low) ;
}

function processData(input) {
  "use strict";
  var parse_fun = function (s) { return parseInt(s, 10); };

  var lines = input.split('\n');
  var T = parse_fun(lines.shift());

  var data = lines.splice(0, T).map(parse_fun);
  var solutions = [];
  var res = "";
  // logic here

  solutions = data.map(chocoCuts);

  res = solutions.join("\n");

  process.stdout.write("" + res + "\n");
  }

process.stdin.resume();
process.stdin.setEncoding("ascii");
var _input = "";
process.stdin.on("data", function (input) { _input += input; });
process.stdin.on("end", function () { processData(_input); });
