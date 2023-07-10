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

  function assertArraysEqual (actual, expected) {
    if (eqArrays === true )  {
        console.log ("Passed");
    }
    else {
        console.log ("Failed");
    }
  }

  function flatten(arr) {
    let flattenedArray = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        for (let j = 0; j < arr[i].length; j++) {
          flattenedArray.push(arr[i][j]);
        }
      } else {
        flattenedArray.push(arr[i]);
      }
    }
  
    return flattenedArray;
  }
  console.log(flatten([1, 2, [3, 4], 5, [6]]));