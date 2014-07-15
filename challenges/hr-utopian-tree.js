

var __input_stdin = "";
var __input_stdin_array = "";
var __input_currentline = 0;

process.stdin.on('data', function (data) {
    __input_stdin += data;
});



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
process.stdin.on('end', function () {
    __input_stdin_array = __input_stdin.split("\n");
    var res = null;
    var test = 0;
    var tests = [];
    var solutions = [];

    //burn N
    __input_currentline += 1;


    //grab tests
    for(__input_currentline;__input_currentline < __input_stdin_array.length; __input_currentline +=1) {
      test = parseInt( __input_stdin_array[__input_currentline].trim() );
      if( typeof test === "number"){
        tests.push(test);
      }
    }
    //tests.pop();//drop off empty row
    //console.dir(tests);
    tests.forEach(function(e,i,a) {
      solutions[i] = utopianTree(e);
    });

    res = solutions.join("");
    process.stdout.write(""+res+"\n");

});
