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
console.log('Values stored in the counties array : '+countries);

console.log('Zero Index : '+countries[0]); // USA
console.log('First Index : '+countries[1]); // Pakistan
console.log('Second Index : '+countries[2]); // India
console.log('Third Index : '+countries[3]); // UK
console.log('Forth Index : '+countries[4]); // undefined

// Manipulating Arrays
// push() will add the items to the end of the array
countries.push('Canada');
console.log('After using push() : '+countries); // USA, Pakistan, India, UK, Canada

// pop() will takes off the last element from the array
countries.pop();
console.log('After using pop() : ' +countries); // USA, Pakistan, India, UK

// shift()
console.log('Before using shift() : ' +countries);
const afterShift = countries.shift();
console.log('After using shift() : '+afterShift);
console.log('After using shift() : '+countries);

// unshift()
countries.unshift('USA' ,'Afghanistan');
console.log('After using unshift() : '+countries);

// slice() creates a brand new array which is a slice of an other array.
console.log('Before using slice() : '+countries);
const newCountries = countries.slice(1,3);
console.log('After using slice() : '+newCountries);

// The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
console.log('Before using splice() for deletion : '+countries);
countries.splice(0,2); // for deletion first argument is the index of the element and second argument is the number of values we want to delete
console.log('After deleting using splice() : '+countries);
// splice() for insertion
console.log('Before using splice() for insertion : '+countries);
countries.splice(0,2,'foo','faa');
console.log('After inserting using splice() : '+countries);

// Array Searcing and Looping
