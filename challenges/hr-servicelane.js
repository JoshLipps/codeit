//https://www.hackerrank.com/challenges/service-lane

var __input_stdin = "";
var __input_stdin_array = "";
var __input_currentline = 0;

process.stdin.on('data', function (data) {
    __input_stdin += data;
});

function serviceLane(widths, tests) {
    var i = 0;
    var tested = [];
    tests.forEach( function(test,index,array) {
      var size = 3;
      for(i=test[0]; i<=test[1]; i+=1) {
        if(size > widths[i]) {
          size = widths[i];
        }
      }
      tested[index] = size;
    });
    return tested.join("\n");
}

/*
Input Format
The first line of input contains two integers - N & T, where N is the length of the freeway, and T is the number of test cases. The next line has N space separated integers which represents the width array.

T test cases follow. Each test case contains two integers - i & j, where i is the index of segment through which Calvin enters the service lane and j is the index of the lane segment where he exits.
*/
process.stdin.on('end', function () {
    __input_stdin_array = __input_stdin.split("\n");
    var res = null;
    var test = [];
    var tests = [];
    var widths = [];

    //burn N and T
    __input_currentline += 1;

    //grab widths
    widths = __input_stdin_array[__input_currentline].trim().split(" ");
    widths.forEach(function(e,i,a) {
      a[i] = parseInt(e);
    });
    __input_currentline += 1;
    //console.dir(widths);

    //grab tests
    for(__input_currentline;__input_currentline < __input_stdin_array.length; __input_currentline +=1) {
      test = __input_stdin_array[__input_currentline].trim().split(" ");
      if(test[0]){
        tests.push( [ parseInt(test[0]), parseInt(test[1]) ] );
      }
    }
    //tests.pop();//drop off empty row
    //console.dir(tests);

    res = serviceLane(widths, tests);
    process.stdout.write(""+res+"\n");

});
