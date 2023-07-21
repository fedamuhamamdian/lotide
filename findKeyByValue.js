const assertEqual = require('./assertEqual');
const findByValue = function(object, value) {
  for (const key in object) {
    if (object [key] === value) {
      return key;
    }
  }
  return undefined;
};

const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findByValue(bestTVShowsByGenre, "The Wire"), "drama"); //=> shoudl pass
assertEqual(findByValue(bestTVShowsByGenre, "That '70s Show"), undefined); //=> shoudl pass
assertEqual(findByValue(bestTVShowsByGenre, "The Expanse"),"sciFi"); //=> shoudl pass