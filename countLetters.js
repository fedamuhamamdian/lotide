const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log ("✅✅✅ Assertion Passed: " + actual + " === " + expected);
  }
    else {
          console.log ("🛑🛑🛑 Assertion Failed: " + actual + " !== " + expected); 
      }
  };

const countLetters = function(sent) {
    const result = {};
  
    for (const letter of sent) {
      if (letter !== ' ') {
        if (result[letter]) {
          result[letter] += 1;
        } else {
          result[letter] = 1;
        }
      }
    }
  
    return result;
  };

const sentence = "fedamuhammadian";
console.log (countLetters (sentence));
