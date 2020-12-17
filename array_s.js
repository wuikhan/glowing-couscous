// create an initialize an array
// accessing array items
// manipulating arrays
// slice() and splice
// array searching and looping
// arrays in the DOM

// Create an Initialize an array
let values = [1, 2, 3];

// Initialize an array
let values2 = Array.of(1, 2, 3);

const values3 = ['a', 'b', 'c'];
console.log(values3);
console.log('type of : '+typeof values3);
console.log('is this array ? ' +Array.isArray(values3));

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

// access the elements of an array
const countries = ['USA', 'Pakistan', 'India', 'UK'];
console.log(countries[0]); // USA
console.log(countries[1]); // Pakistan
console.log(countries[2]); // India
console.log(countries[3]); // UK
console.log(countries[4]); // undefined