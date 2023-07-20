//---------------------------------CHAPTER 7: Array & Object Exercise-------------------------
// Starting Point: 2:04:33

const letterCounter = (phrase) => {
	
	let result = 0
	for(const a in phrase){
		// console.log(Number(a)+1)	
		result = a
	}

	return {Results: result}
}

// console.log('---------------')
const phrase = 'Can you go to the grocery store with them'
console.log(letterCounter(phrase))

// Two ways of parsing a string using for loop

// Way 1: Prints index
// const dinnerTime = 'Dinner Time'
// for(const a in dinnerTime){
// 		console.log(a)		
// }

// console.log('**********************************')

// Way 2: prints letters
// for(const a of dinnerTime){
// 		console.log(a)		
// }

// console.log(`------111------`);

const leng = 'YO! MAMA!'

console.log('Length of a String using length property,', leng.length);

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

// A website for vizualizing code executions
// pythontutor.com

const functionToCount = (StringChar) => {
	let counter = 0
	for (let name of StringChar) {
		counter += 1
	}

	return {Answer: counter}
}

const a = '123456789'
console.log('Number of charactersd in the sentence is,', functionToCount(a))

const ab = 'Hi there! How are you. Let\'s play a game.'

const freq = (ab) => {
	let freqObject = {}
	for (let name of ab) {
		if(name in freqObject){
			freqObject[name] += 1
		}else{
			freqObject[name] = 1
		}
	}
	
	return freqObject
}

console.log(freq(ab))

const countingWords = (phrase) => {
	let wordArray = phrase.split(" ")
	wordDictionary = {}
	for (let word of wordArray) {
		if(word in wordDictionary){
			wordDictionary[word] += 1
		}else{
			wordDictionary[word] = 1
		}
	}

	return wordDictionary
}

console.log(countingWords('Hello Ji, aap kaise ho. Aap mere sath kaise ho.'))

//XXXXXXXXXXXXXXXXXXXXXXXX------------------------XXXXXXXXXXXXXXXXXXXXXXXXX