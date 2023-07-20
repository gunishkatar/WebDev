//---------------------------------CHAPTER 8: Array Methods-------------------------
//High Order Functions
//1. .map(): Loops and returns array
//2. .filter(): Loops and returns array with matching conditions
//3. reduce()

// Starting Point: 3:01:31

// To use: map()
let add = [5,4,3,2,1].map(numb => console.log(Number(numb) + 1))
// OR
let expo = [1,2,3,4,5].map(numb => {
	return numb**2
})

console.log(expo)

//Now, we will write a function to double the number passed as a parameter

const doubleTheNumber = (numbersToDouble) =>{
	return numbersToDouble.map(number => number * 2 )
}



//To use: .filter()

// First we will try to create a filter manually
console.log(doubleTheNumber([2,3,4]))
const filter = (numbers, greaterThan) => {
	let result = []
	for (let number of numbers) {
		if (number > greaterThan){
			result.push(number)
		}
	}
	return result
}
console.log(filter([1,2,3,4,5,6,7,8],3))

//Now, we will use the .filter()
const num = [1,2,3,4,5,6,7,8]
num.filter(number => number>3)

//Another example
let grtr = [1,2,9,10,11].filter(number => number>=10 || number < 3)
console.log(grtr)

//Example
const actors = [
	{name: 'Jhonny', netWorth: 20000000},
	{name: 'Amber', netWorth: 20},
	{name: 'William', netWorth: 25000000}
]

let result
//3:20:07


// To use: .reduce()

//XXXXXXXXXXXXXXXXXXXXXXXX------------------------XXXXXXXXXXXXXXXXXXXXXXXXX