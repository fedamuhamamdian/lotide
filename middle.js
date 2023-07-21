const assertArraysEqual = require('./assertArraysEqual');

const middle = function(arr) {
  const length = arr.length;
  if (length <= 2) {
    return [];
  }

  const middleIndex = Math.floor(length / 2);

  if (length % 2 === 0) {
    return [arr[middleIndex - 1], arr[middleIndex]];
  } else {
    return [arr[middleIndex]];
  }
};

module.exports = middle;  