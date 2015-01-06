// modules used:
var fs = require('fs');
var path = require('path');

// Empt Array to add to:
var filteredFiles = [];

module.exports = function (dirName, filter, callback) {
  fs.readdir(dirName, function (err, list) {
    if (err)
      return callback(err);

    list.forEach(function(file) {
      if(path.extname(file) === '.' + filter)
        filteredFiles.push(file);
    });
    return callback(null, filteredFiles);
  });
}

// # PASS
// Your solution to MAKE IT MODULAR passed!
// Here's the official solution in case you want to compare notes:

// ────────────────────────────────────────────────────────────────────────────────
// solution_filter.js:

//     var fs = require('fs')
//     var path = require('path')

//     module.exports = function (dir, filterStr, callback) {

//       fs.readdir(dir, function (err, list) {
//         if (err)
//           return callback(err)

//         list = list.filter(function (file) {
//           return path.extname(file) === '.' + filterStr
//         })

//         callback(null, list)
//       })
//     }

// ────────────────────────────────────────────────────────────────────────────────
