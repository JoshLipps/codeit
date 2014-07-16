/*global process*/
/*
https://www.hackerrank.com/challenges/utopian-tree
Input Format
The first line contains an integer, T, the number of test cases.
T lines follow. Each line contains an integer, N, that denotes the number of cycles for that test case.

Constraints
1 <= T <= 10
0 <= N <= 60

Output Format
For each test case, print the height of the Utopian tree after N cycles.
*/

//monsoon *= 2 ;summer += 1
function utopianTree(season) {
  'use strict';
  var nextSeason = season - 1;

  //base hight of tree is 1
  if(season === 0){
    return 1;
  //even seasons are summer
  } else if( (season % 2) === 0 ) {
    return ( utopianTree(nextSeason) + 1 );
  //other(odd) seasons are monsoon
  } else {
    return ( utopianTree(nextSeason) * 2 );
  }
}


function processData(input) {
  'use strict';
  var parse_fun = function (s) { return parseInt(s, 10); };

  var lines = input.split('\n');
  var T = parse_fun(lines.shift());

  var data = lines.splice(0, T).map(parse_fun);
  var solutions = [];
  var res = "";

  // logic here
  solutions = data.map(utopianTree);

  res = solutions.join("\n");
  process.stdout.write(""+res+"\n");

}

process.stdin.resume();
process.stdin.setEncoding("ascii");
var _input = "";
process.stdin.on("data", function (input) { _input += input; });
process.stdin.on("end", function () { processData(_input); });
