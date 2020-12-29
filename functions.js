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
            console.log("ssn 2");
            break;
        default:
            console.log("different ssn");
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
contacts.set('Jessie', {
    phone: "213-555-1234",
    address: "123 N 1st Ave"
})
contacts.has('Jessie') // true
contacts.get('Hilary') // undefined
contacts.set('Hilary', {
    phone: "617-555-4321",
    address: "321 S 2nd St"
})
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
function mathSample() {
    let price = 200;
    let result = 0;
    console.log("price = " + price.toString());
    // addition
    result = price + 100;
    console.log("price + 100 = " + result.toString());

    // subtraction
    result = price - 10;
    console.log("price - 10 = " + result.toString());

    // multiplication
    result = price * 2;
    console.log("price * 2 = " + result.toString());

    // division
    result = price / 2;
    console.log("price / 2 = " + result.toString());

    // exponential
    result = price ** 2;
    console.log("price ** 2 = " + result.toString());

    // modulus
    result = price % 3;
    console.log("price % 3 = " + result.toString());

    // Increment
    result = price++;
    console.log(" result = price++ =" + result.toString());
    console.log("price = " + price.toString());

    result = ++price;
    console.log(" result = ++price = " + result.toString());

    // decrement
    result = price--;
    console.log(" result = price-- =" + result.toString());
    console.log("price = " + price.toString());

    result = --price;
    console.log(" result = --price = " + result.toString());
}
// Assignment Operators
function assignmentSample() {
    let price = 200;
    console.log("price = " + price.toString());

    // Addition
    price += 100;
    console.log("price += 100 " + price.toString());

    // Subtraction
    price -= 100;
    console.log("price -= 100 " + price.toString());

    // Multiplication
    price *= 2;
    console.log("price *= 2 " + price.toString());

    // division
    price /= 2;
    console.log("price /= 2 " + price.toString());

    // exponentiation
    price **= 2;
    console.log("price **= 2 " + price.toString());

    // modulus
    price %= 2;
    console.log("price %= 2 " + price.toString());
}
/**
 * Truthy and Falsy values
 * logical operators And, Or and Not
 * Short ciruiting
 * Definition : any variable with value ("Hey", 10 etc) or a boolean true is true.
 * Any variable = false, null, undefined, NaN, "" is false
 */

function trueFalseSample() {
    let price = 20;
    let color = "Red";
    let result;
    console.log("Check for 'true' values");
    // evaluate the expression
    result = price > 10;
    console.log(result);

    // Test the expression
    if (price > 10) {
        console.log("Price is > 10");
    }

    // check if price has something other than zero
    if (price) {
        console.log("Price is > 0");
    }

    // Check if color has characters in it
    if (color) {
        console.log("Color has a value");
    }

    console.log("");
    console.log("Check for 'false' values");

    // set value to null, it becomes false 
    color = null;
    console.log("color == null = " + Boolean(color));

    // set value to empty string, it becomes false
    color = "";
    console.log("color == '' = " + Boolean(color));

    // Set value to undefined, it becomes false
    color = undefined;
    console.log("color == undefined = " + Boolean(color));

    // declare variable and don't initialize it is False
    let value;
    console.log("'let value' = " + Boolean(value));

    // Result of NaN is false
    value = 100 / "test";
    console.log("100 / 'test' = " + Boolean(value));

}

function logicalSample() {
    let price = 200;
    // AND (&&) Operators
    if (price > 10 && price < 1600) {
        console.log("price > 10 && price < 1600 is true");
    }

    // AND (&&) Operators
    if (price > 10 && price < 200) {
        console.log("price > 10 && price < 200 is true");
    } else {
        console.log("price > 10 && price < 200 is 'false'");
    }

    // OR (||) Operator
    if (price > 10 || price < 1600) {
        console.log("price > 10 || price < 1600 is 'true'");
    }
    // OR (||) Operator
    if (price > 10 || price > 1600) {
        console.log("price > 10 || price > 1600 is 'true'");
    }

    // NOT (!) Operator
    if (!(price < 10)) {
        console.log("!(price < 10) is 'true'");
    }
}

// Short ciruiting
function shortCircuitAndSample() {
    let result;
    // if first result is false, the second part is never evaludated
    result = isColorRed("Black") && isGreaterThan1400(1400);
}

function isColorRed(value) {
    console.log("In the isColorRed() function");
    return value == "Red";
}

function isGreaterThan1400(value) {
    console.log("In the isGreaterThan1400() function");
    return value > 1400;
}

function shortCircuitOrSample() {
    let result;
    console.log("");
    console.log("Calling isColorRed() first");

    // each expression is evaluated until one returns a true
    result = isColorRed("Red") || isGreaterThan1400(200);

    // Each expression is evaludated until one returns a true the rest are skipped
    console.log("");
    console.log("Calling isGreaterThan1400() first");
    result = isGreaterThan1400(200) || isColorRed("Black");
}

// Utilizing Javascript exception handling
function simpleTryCatch() {
    let result;
    try {
        result = x1 / 10;
    } catch (error) {
        console.log(error.message);
    }
}

function finallyTryCatch() {
    let result;
    try {
        console.log("An error will occur.")
        result = x1 / 10;
        console.log("This line will never run.")
    } catch (error) {
        console.log("In the catch block" + error.message);
    } finally {
        console.log("In the 'finally' block.")
    }
}

// Throw a custom error object
function throwError() {
    try {
        attemptDivision();
    } catch (error) {
        console.log(error.message + " - Error type : " + error.name);
    }
}

function attemptDivision() {
    let result;
    try {
        result = x1 / 10;
    } catch (error) {
        // Always include at least a 'message' and 'name' properties
        throw {
            "message": "In the attemptDivision() method the following error occurred : " + error.message,
            "name": "CustomError"
        };
    }
}

// Types of Errors
/**
 * ReferenceRrror, RangeError, TypeError,URIError,SyntaxError,EvalError
 */
function referenceError() {
    let result;
    try {
        // Reference Error because 'x' is not defined
        result = x1 / 10;
    } catch (error) {
        handleError(error)
    }
}

function rangeErrorSample() {
    let result = 0;
    try {
        // Range error becquse a number cannot have 200 significant digits
        result.toPrecision(200);
    } catch (error) {
        handleError(error);
    }
}

function typeErrorSample() {
    let result = 0;
    try {
        // Type error because result is numeric
        result.toUpperCase();
    } catch (error) {
        handleError(error);
    }
}

function uriSample() {
    let uri = "http://www.netinc.com/path%%%/file name";
    try {
        // URI error
        decodeURI(uri);
    } catch (error) {
        handleError(error);
    }
}

function syntaxErrorSample() {
    try {
        // Syntax error because missing a final single quote
        let sum = eval("Alert('Hello)");
    } catch (error) {
        handleError(error);
    }
}

function handleError(error) {
    switch (error.name) {
        case 'ReferenceError':
            console.log("Reference error: " + error.message);
            break;
        case 'RangeError':
            console.log("Range error: " + error.message);
            break;
        case 'TypeError':
            console.log("Type error: " + error.message);
            break;
        case 'URIError':
            console.log("URI error: " + error.message);
            break;
        case 'SyntaxError':
            console.log("Syntax error: " + error.message);
            break;
        case 'EvalError':
            console.log("Evaluation error: " + error.message);
            break;
        default:
            console.log("Error Type: " + error.name + "- Message: " + error.message);
            break;
    }
}

/**
 * Different data types
 * - Primitive
 * - Objects
 * How to determine data types
 * - typeof operators
 * - constructor property
 * - instanceof operator
 * 
 * Primitive Data Types
 * boolean = true or false
 * null = no value
 * undefined = a variable declared, but has no value
 * number = integers, decimal, float etc
 * string = a series (array) of characters
 * 
 * Object Data Types
 * new Array = a collection of values
 * new Error = contains a name an error Message
 * new Function = a block of code
 * new Object = A wrapper around any type
 * new RegExp = A regular expression
 * 
 * new Boolean = an object that contains trye or false
 * new Number = an object that contains a numeric values
 * new String = an object that contains a characters
 * NOTE: use the primitive 'boolean', 'number' or 'string' isntead of these when possible
 * 
 */
let _products = [{
        productID: 680,
        name: "HL Road Frame - Black, 58",
        productNumber: "FR-R92B-58",
        color: "Black",
        standardCost: 1059.31,
        listPrice: 1431.50
    },
    {
        productID: 707,
        name: "Sport-100 Helmet, Red",
        productNumber: "HL-R92B-58",
        color: "Red",
        standardCost: 19.31,
        listPrice: 31.50
    },
    {
        productID: 709,
        name: "Mountain Bike Socks, Medium",
        productNumber: "SO-B909-58",
        color: "Green",
        standardCost: 3.31,
        listPrice: 5.50
    }
]

function typeofSample() {
    let product = _products[0];
    let introDate = new Date();
    let strValue = new String();
    let isActive = false;
    let result;
    let value = null;

    console.log("_products = " + typeof _products);
    console.log("product = " + typeof product);
    console.log("product.productID = " + typeof product.productID);
    console.log("product.productNumber = " + typeof product.productNumber);
    console.log("strValue = " + typeof strValue);
    console.log("introDate = " + typeof introDate);
    console.log("isActive = " + typeof isActive);
    console.log("result = " + typeof result);
    console.log("value = " + typeof value);
    console.log("typeofSample() = "+typeof typeofSample);
}

/**
 * Object Data Type / Constructor
 * All object data types inherit from object (not primitive)
 * object has constructor property
 * returns a reference to the object itself
 */

 function constructorSample(){
     let product = _products[0];
     let introDate = new Date();
     let strValue = new String();
     let isActive = false;
     console.log("_products = "+_products.constructor.toString);
     console.log("product = " +product.constructor.toString);
     console.log("product.productID = " +product.productID.constructor.toString);
     console.log("product.productNumber = " +  product.productNumber.constructor.toString);
     console.log("introDate = " +  introDate.constructor.toString);
     console.log("strValue = " + strValue.constructor.toString);
     console.log("isActive = " +  isActive.constructor.toString);
     console.log("typeofSample() = "+ constructorSample.constructor.toString);
 }