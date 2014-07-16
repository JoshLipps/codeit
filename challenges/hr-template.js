'use strict';


function processData(input) {
var parse_fun = function (s) { return parseInt(s, 10); };

var lines = input.split('\n');
var T = parse_fun(lines.shift());

var data = lines.splice(0, T).map(parse_fun);

// logic here
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
var _input = "";
process.stdin.on("data", function (input) { _input += input; });
process.stdin.on("end", function () { processData(_input); });
