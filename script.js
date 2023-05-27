//-----------------------------CHAPTER 1-----------------------------
console.log('Hello, World')
console.log('Gunish Katar')

//Variables
name = 'Peter Pan'
console.log(name)
sentence = 'How are you today'
console.log(sentence)

//Operators
// Basic Operators, * / ** + -
// food = Number(prompt('What is the food amount'))
// tip = Number(prompt('Enter the tip percentage'))/100
// tipAmount = food*tip

// CONVERTINT STRING 100 INTO NUMBER 100
// totalFoodCost = food + tipAmount

// console.log('Tip amount', tipAmount)
// console.log('Total', totalFoodCost)

//NOTE: JAVASCRIPT VARIABLES CVAN HOLD DIFFERENT DATA TYPES: NUMBERS, STRINGS, OBJECTS, AND MORE.
// IN THE CASE MENTIONED ABOVE, WE HANDLED NUMBER AS TEXT WHICH CAUSED THIS WEIRD OUTCOME.
//NOTE: TO CONVERT STRING 100 INTO NUMBER 100 WE HAVE TO USE THE FUNCTION CALLED NUMBER. WE HAVE TO WRAP THE STRING VALUE OF THE NUMBER

//User Input
// the prompt() is a built in javaScript functionality that helps you get inputs from a user through the browser.

//NOTE: IN RELAITY WE DONT USE PROMPTS OR ALERTS. WE RATHER USE FORMS, INPUTS, OR MORE COMPLICATED STUFF.

//XXXXXXXXXXXXXXXXXXXXXXXX------------------------XXXXXXXXXXXXXXXXXXXXXXXXX

//------------------------CHAPTER 2: BABY WEATHER APP------------------------

// DATA TYPES
//Some of the data types are
// 1. Number: integer and decimals
// 2. String: '' or ""
// 3. Arrays: []
// 4. Objects: {}
// 5. booleans: true or false

//Number: Any kind of number including decimals
var numberExample  = 10
console.log(numberExample)
console.log(100, 2.5)

//Strings: Zero or more characters written inside the quotes
var stringWithSingleQuotes = 'This is for single string'
var stringWithDoubleQuotes = "This is for double quotes"

console.log(stringWithSingleQuotes)
console.log(stringWithDoubleQuotes)

//Arrays: Looks like a python list
var arrayExample = [
  'A string',
  879,
  "Another String"
]

console.log(arrayExample)

//Objects: Looks like a python dictionary
var objectExample = {
  name: 'Gunish',
  age: 27,
  isInterested: false
}

console.log(objectExample)

//Boolean: either true or false
var booleanExampleTrue = true
var booleanExampleFalse = false

console.log(booleanExampleTrue, booleanExampleFalse)

// Math Operations
// 1. Multiply: *
// 2. Divide: /
// 3. Exponent: **
// 4. Modulo(Remainder): %
// 5. Addition: +
// 6. Subtraction: -


// Maths functions or methods
// 1. floor: Math.floor(value)
// YOU CAN THINK OF IT AS FLOOR VALUE OR LOWER LIMIT
// Defination: Math.floor() method rounds a number down to the nearest integer, and return the result
console.log('This is for Math.floor: ',Math.floor(2.5))

// 2. ceil: Math.ceil(value)
// YOU CAN THINK OF IT AS CEILING VALUE OR UPPER LIMIT 
// Defination: Math.ceil() method rounds a number up to the nearest integer, and return the result
console.log('This is for Math.ceil: ',Math.ceil(2.5))

//3. random: Gives a random number between 0(inclusive) and 1(exclusive)
console.log(Math.floor(Math.random()*3))

//3 types of variables
// 1. var: Value can be changed
// 2. const: Value cannot be changed
// 3. let: Value can be changed

// NOTE: Use const only when you know that the value is goingh to chnaged or will change. otherwise use let 

//NOTE: NEVER USE var. IT'S OUTDATED.

//Comparion Operators
// == (double equal) - checks for equality
x==8 //false
x==5 //true
x=='5' //true

// === (triple equal sign) - checks for equality and data type
x===5 //true
x==='5' // false - because data type mismatch

// >, < - greater than, less than
8 > x //true
x < 8 //false

// >=, <= - greater than or equal to, less than or equal to
35 >= x // true
8 <= x // true

// != - not equal to
x != 8 // true

// !== - not equal value or type
x !== "35" // true - same value, different type
x !== 35 // false - same value, same type



//XXXXXXXXXXXXXXXXXXXXXXXX------------------------XXXXXXXXXXXXXXXXXXXXXXXXX

//---------------------------------CHAPTER 3: FUNCTIONS-------------------------------

