const assertArraysEqual = require('./assertArraysEqual');
const map = function(arr, callback) {
  const result = [];
  for (const item of arr) {
    result.push(callback(item));
  }
  return result;
};
const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);