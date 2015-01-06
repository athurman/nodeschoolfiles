// A module that is part of node core
var fs = require('fs');
var myNumber = 0;

// Because node is asynchronous, we must use a callback function to retrieve
// the contents, and upon a success, we are then able to carry out the task.
function retrieveNewLines(callback) {
  fs.readFile(process.argv[2], function doneReading(err, fileContents) {
    myNumber = fileContents.toString().split('\n').length -1;
    callback();
  })
}

function logNewLines() {
  console.log(myNumber)
}
// :: Reference: https://github.com/maxogden/art-of-node#callbacks ::
// After readFile is done the callback variable will be invoked (callback()).
// Only functions can be invoked, so if you pass in anything other than a
// function it will cause an error.
retrieveNewLines(logNewLines)

// ::: RESULTS :::

//                  ACTUAL                                  EXPECTED
// ────────────────────────────────────────────────────────────────────────────────

//    "16"                                ==    "16"
//    ""                                  ==    ""

// ────────────────────────────────────────────────────────────────────────────────

// ✓ Submission results match expected
// ✓ Used asynchronous method: fs.readFile()

// # PASS

// Your solution to MY FIRST ASYNC I/O! passed!

// Here's the official solution in case you want to compare notes:

// ────────────────────────────────────────────────────────────────────────────────
//     var fs = require('fs')
//     var file = process.argv[2]
//     fs.readFile(file, function (err, contents) {
//       // fs.readFile(file, 'utf8', callback) can also be used
//       var lines = contents.toString().split('\n').length - 1
//       console.log(lines)
//     })
// ────────────────────────────────────────────────────────────────────────────────
