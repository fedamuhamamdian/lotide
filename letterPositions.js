const assertArraysEqual = require('./assertArraysEqual');
const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    const letter = sentence[i];
    if (letter !== ' ') {
      if (results[letter]) {
        results[letter].push(i);
      } else {
        results[letter] = [i];
      }
    }
  }
  
  return results;
};

const sentence = "hello";
console.log(letterPositions (sentence).e);
assertArraysEqual(letterPositions(sentence).e, [1]);