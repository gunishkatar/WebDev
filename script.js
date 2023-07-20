//-----------------------------CHAPTER 1-----------------------------
console.log("Hello, World");
console.log("Gunish Katar");

//Variables
name = "Peter Pan";
console.log(name);
sentence = "How are you today";
console.log(sentence);

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
var numberExample = 10;
console.log(numberExample);
console.log(100, 2.5);

//Strings: Zero or more characters written inside the quotes
var stringWithSingleQuotes = "This is for single string";
var stringWithDoubleQuotes = "This is for double quotes";

console.log(stringWithSingleQuotes);
console.log(stringWithDoubleQuotes);

//Arrays: Looks like a python list
var arrayExample = ["A string", 879, "Another String"];

console.log(arrayExample);

//Objects: Looks like a python dictionary
var objectExample = {
	name: "Gunish",
	age: 27,
	isInterested: false,
};

console.log(objectExample);

//Boolean: either true or false
var booleanExampleTrue = true;
var booleanExampleFalse = false;

console.log(booleanExampleTrue, booleanExampleFalse);

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
console.log("This is for Math.floor: ", Math.floor(2.5));

// 2. ceil: Math.ceil(value)
// YOU CAN THINK OF IT AS CEILING VALUE OR UPPER LIMIT
// Defination: Math.ceil() method rounds a number up to the nearest integer, and return the result
console.log("This is for Math.ceil: ", Math.ceil(2.5));

//3. random: Gives a random number between 0(inclusive) and 1(exclusive)
console.log(Math.floor(Math.random() * 3));

//3 types of variables
// 1. var: Value can be changed
// 2. const: Value cannot be changed
// 3. let: Value can be changed

// NOTE: Use const only when you know that the value is goingh to chnaged or will change. otherwise use let

//NOTE: NEVER USE var. IT'S OUTDATED.

//Comparion Operators
// == (double equal) - checks for equality
let x = 0;
x == 8; //false
x == 5; //true
x == "5"; //true

// === (triple equal sign) - checks for equality and data type
x === 5; //true
x === "5"; // false - because data type mismatch

// >, < - greater than, less than
8 > x; //true
x < 8; //false

// >=, <= - greater than or equal to, less than or equal to
35 >= x; // true
8 <= x; // true

// != - not equal to
x != 8; // true

// !== - not equal value or type
x !== "35"; // true - same value, different type
x !== 35; // false - same value, same type

//XXXXXXXXXXXXXXXXXXXXXXXX------------------------XXXXXXXXXXXXXXXXXXXXXXXXX

//---------------------------------CHAPTER 3: FUNCTIONS-------------------------------

// Funtions
function sayMyName() {
	let myName = prompt("Please enter your name:");
	console.log("Welcome,", myName);
}

// sayMyName()

function tipCalculator() {
	let foodAmount = Number(prompt("Enter the bill amount:"));
	let tipPercentage = Number(prompt("Enter the %tip: "));
	let tipMultiplier = tipPercentage / 100;
	return foodAmount + foodAmount * tipMultiplier;
}

// console.log(tipCalculator())

function whatYourName(name) {
	// It shouldn't be
	let greettings = "hi " + name + ", welcome to Mariott";
	let greeting_InTemplateLiteral = `hi ${name}, welcome to Mariott`; // Using Template Literal
	console.log(greeting_InTemplateLiteral);
}

whatYourName("Gunish K.");

// ------NOTE: Template Literal
// Template literals provide an easy way to interpolate variables and expressions into strings.
// Interpolation is an efficient way of concatenation.

//ES6 way of writing function.
// Arrow functions

// Regular functions (old)
function myFunction(name) {
	console.log(`hi ${name}`);
}

// Arrow functions (new)
const myFunctionArrow = (name) => {
	console.log(`hi $(name)`);
};

//Arrow function with explicit Example
const sumArrow = (a, b) => {
	return a + b;
};

// One benefit of writing arrow function is that they have implicit return. If user don't write return keyword then also the function will return. Like in the fowwloing manner

// Arrow function with Implicit return
// const sumImplicit = (a,b) = > a + b

//XXXXXXXXXXXXXXXXXXXXXXXX------------------------XXXXXXXXXXXXXXXXXXXXXXXXX

//---------------------------------CHAPTER 4: ARRAYS-------------------------------
// Starting point: 1:11:33(Cursor point of the Youtube video)

// Chapter 1: Basic sof Arrays
const array_ = ["apple", "banana", "grape", 5];
console.log(array_);
console.log(array_[0]);
array_.push("cookies"); // appending or adding a new value in JS array. it adds element at the end of the array
console.log(array_);

const listArray = [0, 1, 2, 3, 4, 5];
console.log(listArray.slice(0, 3)); // slice gets element from 0 (INCLUSIVE) & 3 (EXCLUSIVE)

// Some array methods: push, indexof, length, slice

//Example of push
listArray.push(6);

//Example of slice
listArray.slice(0, 4);

//Example of indexOf
console.log(listArray.indexOf(4));

//Example of length
console.log(listArray.length); //length is a property, not a method


//XXXXXXXXXXXXXXXXXXXXXXXX------------------------XXXXXXXXXXXXXXXXXXXXXXXXX

//---------------------------------CHAPTER 5: OBJECTS-------------------------------

// OBJECTS

//Example
const person = {
	name: 'Gunish katar',
	shirt: 'White'
}

console.log(person)

//Accessing Objects:
//1. Dot notation
//2. [] brackets

//1. Dot Notation
console.log(person.name)
console.log(person.shirt)

// [] bracket notation
console.log(person['name'])
console.log(person['shirt'])

//Adding a new property to an object
person.phone = 9028802206	//Way 1
person['city'] = 'Halifax'	//Way 2
console.log(person.city)

//Objects in function
const introducer = (name, shirt, city) => {
	const person = {
		name: name,
		shirt: shirt,
		city: city,
		assets: 100000,
		liabilities: 50000,
		netWorth: function() {
			return person.assets - person.liabilities
		}

	}

	const introStatement = `Hello, my name is ${person.name}. I am wearing ${person.shirt} color shirt & i live in ${person.city}. I have $${person.netWorth()} USD networth`

	return introStatement
}

console.log(introducer('Gunish Katar', 'Black', 'Halifax'))

//XXXXXXXXXXXXXXXXXXXXXXXX------------------------XXXXXXXXXXXXXXXXXXXXXXXXX

//---------------------------------CHAPTER 6: FOR LOOPS-------------------------------
// Starting Point: 1:45:40
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (let i = 0; i < arr.length; i++) {

	if (arr[i] % 2 != 0) {
		console.log(arr[i])
	}
}

// Better for loop syntax
for (const a of arr) {
	console.log(a)
}

// NOTE: in shows index while of shows content
ar = ['a','b']
console.log(`------------`);
for (const property in ar) {
   console.log(property);
}

for (let prop of ar) {
   console.log(prop);
}


// for (const a of arr.length) {
// 	console.log(arr[a])
// }

//XXXXXXXXXXXXXXXXXXXXXXXX------------------------XXXXXXXXXXXXXXXXXXXXXXXXX

//---------------------------------CHAPTER 7: Array & Object Exercise-------------------------
// Starting Point: 2:04:33

const letterCounter = () => {
	const phrase = 'Can you go to the grocery store with me'
	let result = 0
	for(const a in phrase){
		console.log(Number(a)+1)	
		result = a
	}

	return {result: result}
}

console.log('---------------')
letterCounter()

// Two ways of parsing a string using for loop

// Way 1: Prints index
const dinnerTime = 'Dinner Time'
for(const a in dinnerTime){
		console.log(a)		
}

console.log('**********************************')

// Way 2: prints letters
for(const a of dinnerTime){
		console.log(a)		
}

console.log(`------111------`);

const leng = 'YO! MAMA!'

console.log(leng.length);

//Sum of array

numberList = [1,2,5,13,22,34,5]
const sumArray = (NumberArray) =>{
	ans = 0
	for(let a of numberList){
		ans += a	
	}

	return {Sum: ans}
}

console.log(sumArray(numberList))



//XXXXXXXXXXXXXXXXXXXXXXXX------------------------XXXXXXXXXXXXXXXXXXXXXXXXX

