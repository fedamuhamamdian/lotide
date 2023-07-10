const assertEqual = require('./assertEqual');


const head = function (array) {
    if (array.length === 0) {
        return undefined;
    }
    return array [0];
};
//Test codes
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([42]), 42);
assertEqual(head([]), undefined);