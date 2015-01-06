// created module:
var mymodule = require('./mymodule.js');

var pathDir = process.argv[2];
var filter = process.argv[3];

mymodule(pathDir, filter, function(err, list){
  if (err)
    throw err;
  console.log(list.join('\n'));
});

// # PASS
// Your solution to MAKE IT MODULAR passed!
// Here's the official solution in case you want to compare notes:

// ────────────────────────────────────────────────────────────────────────────────
// solution.js:

//     var filterFn = require('./solution_filter.js')
//     var dir = process.argv[2]
//     var filterStr = process.argv[3]

//     filterFn(dir, filterStr, function (err, list) {
//       if (err)
//         return console.error('There was an error:', err)

//       list.forEach(function (file) {
//         console.log(file)
//       })
//     })

// ────────────────────────────────────────────────────────────────────────────────
