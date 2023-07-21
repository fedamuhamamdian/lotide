const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const flatten = function(arr) {
  const flattened = [];

  for (const item of arr) {
    if (Array.isArray(item)) {
      for (const nestedItem of item) {
        flattened.push(nestedItem);
      }
    } else {
      flattened.push(item);
    }
  }

  return flattened;
};
console.log(flatten([1, 2, [3, 4], 5, [6]]));
console.log(flatten([[1,2], 3, [[4, 5, 6], 7]]));