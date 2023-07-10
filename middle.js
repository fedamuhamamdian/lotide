const eqArrays = function (arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let i =0; i<arr1.length; i++) {
        if (arr1[i] !== arr2 [i]) {
            return false;
        }
        return true; 
    }
  }

const assertArraysEqual = function (actual, expected) {
    if (eqArrays (actual, expected))  {
        console.log ("✅ Assertion Passed");
    }
    else {
        console.log ("❌ Assertion Failed");
    }
  }

function middle(arr) {
    if (arr.length <= 2) {
      return [];
    }
    if (arr.length % 2 !== 0) {
      const middleIn = Math.floor(arr.length / 2);
      return [arr[middleIn]];
    }
    const middleIn1 = arr.length / 2 - 1;
    const middleIn2 = arr.length / 2;
    return [arr[middleIn1], arr[middleIn2]];
  }

  console.log (middle([1, 2]));
  console.log (middle([1, 2, 3, 4, 5]));
  console.log (middle([1, 2, 3, 4, 5, 6]));
  