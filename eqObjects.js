const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log ("✅✅✅ Assertion Passed: " + actual + " === " + expected);
  }
    else {
          console.log ("🛑🛑🛑 Assertion Failed: " + actual + " !== " + expected); 
      }
  };
  
const eqObjects = function(object1, object2) {
    const keys1 = Object.keys(object1);
    const keys2 = Object.keys(object2);
  
    if (keys1.length !== keys2.length) {
      return false;
    }
    for (const key of keys1) {
        const value1 = object1[key];
        const value2 = object2[key];
    
        if (Array.isArray(value1) && Array.isArray(value2)) {
          if (!eqArrays(value1, value2)) {
            return false;
          }
        } else if (value1 !== value2) {
          return false;
        }
      }
    return true;
}
const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject); // => true

const longSleeveMultiColorShirtObject= { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject);