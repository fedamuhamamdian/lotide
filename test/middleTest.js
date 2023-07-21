const assertArraysEqual = require('../assertArraysEqual')
const middle = require('../middle');


assertArraysEqual(middle([1]), []); // Output:  Passed
assertArraysEqual(middle([1, 2]), []); // Output:  Passed
assertArraysEqual(middle([1, 2, 3]), [2]); // Output:  Passed
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // Output:  Passed
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // Output:  Passed
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // Output:  Passed