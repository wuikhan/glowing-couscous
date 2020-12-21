// create an initialize an array
// accessing array items
// manipulating arrays
// slice() and splice
// array searching and looping
// arrays in the DOM


'use strict';

// Create an Initialize an array
let values = [1, 2, 3];

// Initialize an array
let values2 = Array.of(1, 2, 3);

const values3 = ['a', 'b', 'c'];
console.log(values3);
console.log('type of : ' + typeof values3);
console.log('is this array ? ' + Array.isArray(values3));

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

// access the elements of an array
const countries = ['USA', 'Pakistan', 'India', 'UK'];
console.log('Values stored in the counties array : ' + countries);

console.log('Zero Index : ' + countries[0]); // USA
console.log('First Index : ' + countries[1]); // Pakistan
console.log('Second Index : ' + countries[2]); // India
console.log('Third Index : ' + countries[3]); // UK
console.log('Forth Index : ' + countries[4]); // undefined

// Manipulating Arrays
// push() will add the items to the end of the array
countries.push('Canada');
console.log('After using push() : ' + countries); // USA, Pakistan, India, UK, Canada

// pop() will takes off the last element from the array
countries.pop();
console.log('After using pop() : ' + countries); // USA, Pakistan, India, UK

// shift()
console.log('Before using shift() : ' + countries);
const afterShift = countries.shift();
console.log('After using shift() : ' + afterShift);
console.log('After using shift() : ' + countries);

// unshift()
countries.unshift('USA', 'Afghanistan');
console.log('After using unshift() : ' + countries);

// slice() creates a brand new array which is a slice of an other array.
console.log('Before using slice() : ' + countries);
const newCountries = countries.slice(1, 3);
console.log('After using slice() : ' + newCountries);

// The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
console.log('Before using splice() for deletion : ' + countries);
countries.splice(0, 2); // for deletion first argument is the index of the element and second argument is the number of values we want to delete
console.log('After deleting using splice() : ' + countries);
// splice() for insertion
console.log('Before using splice() for insertion : ' + countries);
countries.splice(0, 2, 'foo', 'faa');
console.log('After inserting using splice() : ' + countries);

// Array Searcing and Looping
// to get the control over looping

// indexOf : Returns the index of the first occurrence of a value in an array.
console.log('The index of UK is : ' + countries.indexOf('UK'));

// filter() 
const alphabets = ['a', 'b', 'c'];
const set = alphabets.filter(function (item) {
    console.log('item : ' + item);
    return item > 'b';
});
console.log(set);

// find()
const findFunc = ['aa', 'bbb', 'cccc'];
const found = findFunc.find(function (item) {
    console.log('item : ' + item);
    return item.length > 2;
});
console.log(found);

// forEach()
countries.forEach(function (item) {
    console.log(item); // foo faa UK
})

// Arrays in the DOM

const containers = document.getElementsByClassName('container');
containers[3].classList.add('d-none');
console.log(containers.length);
console.log(containers);

// Scope and Hoisting
// Global Scope
const app = {
    productId: 12345,
    username: 'John',
    sex: 'male'
}

function showProduct() {
    console.log(app.productId);
}

showProduct();

// function scope is limited to the functions, variables cannot be accessed outside the function
function showUsername() {
    let username = 'Waqas'
}
//console.log(username); //Uncaught ReferenceError: username is not defined


function showProductId() {
    let productId = 12345;
    function fix() {
        let productId = 45678;
        console.log('in fix : ', productId);
    }
    fix();
    console.log('in showProductId : ', productId);
}

showProductId();

// var and hoisting
// hoisiting mean 
showHelp();

function showHelp() {
    console.log('hoisting example');
}

x = 5;
console.log(x);
var x;

/*
y = 50;
console.log(y); // Uncaught ReferenceError: Cannot access 'y' before initialization
let y;
*/

function simpleSwitch() {
    let ssn = 2;
    switch (ssn) {
        case 1:
            console.log("ssn 1");
            break;
        case 2:
        case 3:
        case 4:
            console.log("ssn is in between 2 and 4");
            break;
        default:
            console.log("unknown ssn");
            break;
    }
}

function multipleSwitch() {
    let color = "red";
    switch (color) {
        case "red":
        case "Pink":
            console.log("color is red");
            document.getElementById("multipleSwitch").innerHTML = "red";
            break;
        case "Blue":
        case "Light Blue":
        case "Dark Blue":
            console.log("color is blue");
            document.getElementById("multipleSwitch").innerHTML = "blue";
            break;
        default:
            console.log("unknown color");
            document.getElementById("multipleSwitch").innerHTML = "unknown";
    }
}
// switch does a strict comparison
// type and value must match 


// maps() 
let contacts = new Map()
contacts.set('Jessie', {phone: "213-555-1234", address: "123 N 1st Ave"})
contacts.has('Jessie') // true
contacts.get('Hilary') // undefined
contacts.set('Hilary', {phone: "617-555-4321", address: "321 S 2nd St"})
contacts.get('Jessie') // {phone: "213-555-1234", address: "123 N 1st Ave"}
contacts.delete('Raymond') // false
contacts.delete('Jessie') // true
console.log(contacts.size) // 1

console.log(contacts);

// Module : Using Math and Comparison Operators
/**
 * - Math
 * - Assignment
 * - Comparison
 * Plus sign with strings and numbers
 * 'use strict' functionality
 **/

// Math Operators
function mathSample(){
    let price = 200;
    let result = 0;
    console.log("price = "+price.toString());
// addition
result = price + 100;
console.log("price + 100 = "+result.toString());

// subtraction
result = price - 10;
console.log("price - 10 = "+result.toString());

// multiplication
result = price * 2;
console.log("price * 2 = "+result.toString());

// division
result = price / 2;
console.log("price / 2 = "+result.toString());

// exponential
result = price ** 2;
console.log("price ** 2 = "+result.toString());

// modulus
result = price % 3;
console.log("price % 3 = "+result.toString());

// Increment
result = price++;
console.log(" result = price++ ="+result.toString());
console.log("price = "+price.toString());

result = ++price;
console.log(" result = ++price = "+result.toString());

// decrement
result = price--;
console.log(" result = price-- ="+result.toString());
console.log("price = "+price.toString());

result = --price;
console.log(" result = --price = "+result.toString());


}