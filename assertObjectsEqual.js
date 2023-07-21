const eqObjects = require('./eqObjects');

const assertObjectsEqual = function(actual, expected) {
  const util = require('util');
  const isEqual = eqObjects(actual, expected);

  if (isEqual) {
    console.log(`✅ Assertion Passed: ${util.inspect(actual)} === ${util.inspect(expected)}`);
  } else {
    console.log(`🛑 Assertion Failed: ${util.inspect(actual)} !== ${util.inspect(expected)}`);
  }
};

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 2, a: 1 };
const obj3 = { a: 1, b: 3 };
const obj4 = { a: 1, b: 2, c: 3 };


assertObjectsEqual(obj1, obj2);
assertObjectsEqual(obj1, obj3);
assertObjectsEqual(obj4, obj2);