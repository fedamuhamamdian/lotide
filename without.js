  
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
  function without (source, itemTobeRemoved) {
    let newArray = [];

    for (let items of source) {
        if (! itemTobeRemoved.includes (items)) {
            newArray.push(items)
        }
    }
    return newArray;
  }
console.log (without([1, 2, 3], [1]));
 // => [2, 3]
console.log (without(["1", "2", "3"], [1, 2, "3"]));
 // => ["1", "2"]