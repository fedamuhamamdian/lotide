const assertArraysEqual = require('../assertArraysEqual'); 

assertArraysEqual([1, 2, 3, 4], [1, 2, 3, 4]); // =>true
assertArraysEqual([1, 2, 3, 4], [1, "2", 3, 4]); // =>false
