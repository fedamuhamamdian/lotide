const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const without = function(source, itemTobeRemoved) {
  const result = [];
  for (const items of source) {
    if (!itemTobeRemoved.includes(items)) {
      result.push(items);
    }
  }
  return result;
};

/*
//Test codes:
console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
*/