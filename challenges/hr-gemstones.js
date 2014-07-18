/*global process*/
/*
  https://www.hackerrank.com/challenges/gem-stones
  Input Format
  The first line consists of N, the number of rocks.
  Each of the next N lines contain rocks' composition. Each composition consists of lowercase letters of English alphabet.

  Output Format
  Print the number gem-elements that exist in those rocks.

  Constraints
  1 ≤ N ≤ 100
  Each composition consists of only small latin letters ('a'-'z').
  1 ≤ Length of each composition ≤ 100
*/

function gemStones(data) {
  var map = {};
  var current = data.shift();

  //put first element into map
  for(var i = 0; i < current.length; i += 1){
    map[current[i]] = true;
  }

  //for stone
  data.forEach(function(stone){
    var gems = Object.keys(map);

    gems.forEach(function(gem) {
        //check every stone for gem if not present it's not a gem
        if(stone.indexOf(gem) === -1){
          delete map[gem];
        }
    });
  });

  return Object.keys(map).length;
}


function processData(input) {
  'use strict';
  var parse_fun = function (s) { return parseInt(s, 10); };

  var lines = input.split('\n');
  var N = parse_fun(lines.shift());

  var data = lines.splice(0, N);
  var solution = "0";
  var res = "";

  // logic here
  solution = gemStones(data);

  res = solution;
  process.stdout.write(""+res+"\n");

}

process.stdin.resume();
process.stdin.setEncoding("ascii");
var _input = "";
process.stdin.on("data", function (input) { _input += input; });
process.stdin.on("end", function () { processData(_input); });
