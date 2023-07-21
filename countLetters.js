const assertEqual = require('./assertEqual');
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

const sentence = "LHL";
console.log(countLetters(sentence));
