console.log("works");

//PART 1//
//------------Variables & Datatypes--------------//

// How do we assign a value to a variable?
// --we assign a value to a variable with const or let and using the = to assign a value to our variable
// How do we change the value of a variable?
// --we change the value of a variable by declaring the first variable with let, so it can be changed. declaring a var with const and you can't redefine it by just assigning a new value.
// How do we assign an existing variable to a new variable?
//--by calling the variable and using the = sign to assign it a new value. then you call the variable and it should have the new value
// Remind me, what are declare, assign, and define?
//--declare is when you just declare a variables existence
//-- asign is when you give the variable you declared a value with the = sign
//--defining a value is when you declare a variable and assign it a value, then the var is defined.
// What is pseudocoding and why should you do it?
// --pseudocoding is where you write out steps on how you think every step of the program should go
// What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
//--a majority of the time should be spent thinking and pseudocoding about how you think you're going to solve the problem. Solve the problem one step at a time, and check your work every step of the way.

//------------strings--------------//
// Create a variable called firstVariable.
// Assign it the value of the string "Hello World"
// Change the value of this variable to some number.
// Store the value of firstVariable in a new variable called secondVariable
// Change the value of secondVariable to any string.
// What is the value of firstVariable?
// Create a variable called yourName and set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable yourName so that it returns a new string with them concatenated.

// let firstVariable = "Hello World";
//  firstVariable = 44;
// let secondVariable = firstVariable;
// secondVariable = "any string";
// //the value of firstVariable is 44
// let yourName = "fil";
// console.log("Hello, my name is " + yourName + ".");

//------------Booleans--------------//
// Using the provided variable definitions, replace the blanks so that all log statements print true in the console. Answers should be all be valid JS syntax and not weird things that don't make sense but happen to print true to the console.
  // const a = 4;
  // const b = 53;
  // const c = 57;
  // const d = 16;
  // const e = 'Kevin';

  // console.log(a < b);
  // console.log(c > d);
  // console.log('Name' == 'Name');
  // console.log(true != false);
  // console.log(false == false == false == false == false == false == true);
  // console.log(false == false);
  // console.log(e == 'Kevin');
  // console.log(a + b == c);
  // console.log(a * a == d);
  // console.log(48 == '48');



//------------the farm--------------//
//
// Declare a variable animal. Set it to be either "cow" or something else.
// Write code that will print out "mooooo" if the it is equal to cow.
// Change your code so that if the variable animal is anything other than a cow, it will print "Hey! You're not a cow."
// Commit.
// const animal = "cat";
// if (animal == "cow") {
// 	console.log("mooooo");
// } else {
// 	console.log("Hey! you're not a cow!");
// }

//------------------Driver's Ed----------------//
// Make a variable that will hold a person's age. Be semantic.
// Write code that will print out "Here are the keys", if the age is 16 years or older.
// If the age is younger than 16, a message should print "Sorry, you're too young."

// const age = 18;
// 	if (age > 16){
// 		console.log('Here are the keys');
// 	} else {
// 		console.log("Ain't old nuff");
// 	};

//PART 2
//-----------------LOOPS------------------//
//-----------------The basics-------------//
// Write a loop that will print out all the numbers from 0 to 10, inclusive.
// Write a loop that will print out all the numbers from 10 up to and including 400.
// Write a loop that will print out every third number starting with 12 and going no higher than 4000.

// for (i = 1; i <= 10; i++){
// 	console.log(i);
// }

//--------------Get even -----------------//

// Print out the even numbers that are within the range of 1 - 100.
// Adjust your code to add a message next to even numbers only that says: "<-- is an even number".

//print out 1-100
//check if even

// for (let i = 1;  i<= 100; i++){
// 	if(i % 2 === 0){
// 	console.log(i + "<- is even");
// }
// }

//--------------Give me five-------------//

// For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five.
//print 1-100
// for (let i = 1; i <= 100; i++){
// 	//if I is divisble by 5 with no remainder
// 	if (i % 5 === 0){
// 		//consolelog result
// 		console.log("i found a " + i + " high five!");
// 	} else if (i % 3 === 0) {
// 		console.log("i found a " + i + " three is a crowd");
// 	}


//-----------------_Savings account --------------//
// Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
// const bankAccount = [sum];
// //make an empty variable for bank account, which will get populated from the sum variable, which will get populated from the for loop. 
// //for loop , console logs 1-10, 
// //i just need to figure out how to push  the numbers it console logs into 
// const addSum = (sum) => {
// 	for (let i=1;i<=10;i++) {
// 		const sum = 0;
// 		// bankAccount = sum += i;
// 		// const sum = 0;
// 		// sum += i;
// 		// console.log(sum);
// 		// i += sum; <--figure out how to put the looping value and push it into bankAccount
// 		// console.log(sum);
// 	}
// }
// console.log(bankAccount);

//attempt 2
// let sum = 0;
// for (i = 1; i <= 10; i++){
// 	//was resulting in 45, then i added a = and it worked. wasn't this the 1 digit whatever you were talking about? when its off by one digit or something

// 	sum += i;
// }
// console.log(sum);
//ugh const n let, this one worked like right away

//You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
// let sum = 0;
// for (i = 1; i <= 100; i++){
// 	sum += i * 2;
// }
// console.log(sum);

//totally worked like i wanted it to. sweeeet.

//-----------------Multiples of 3 and 5-------------------------//
// Find the sum of all the multiples of 3 or 5 below 1000. If a previous question you've done has helpful bits of code in it that partially solves this problem, look back at them.
// let sum = 0;
// for (i = 1; i <= 1000; i++){
// 	if (i % 3 === 0 && i % 5 === 0)
// 	sum += i;
// }
// console.log(sum);

//PART 3
//-----------------ARRAYS & CONTROL FLOW------------------//
//-----------------Talk about it-------------//
// What are the things in an array called?
// -- elements 
// Do Arrays guarantee those things will be in order?
//-- yes
// What real-life thing could you model with an array?
// -- a list of people, a bunch of numbers, a combination of strings, numbers and booleans. 
//-----------------Easy does it-------------//
// Create an array that contains three quotes and store it in a variable called quotes.
//--const quotes = ["quote1", "quote2", "quote3"];
//-----------------Accessing elements------------------//
// Given the following array 
// const randomThings = [1, 10, "Hello", true];
// // How do you access the 1st element in the array?
// randomThings[0];
// // Change the value of "Hello" to "World".
// randomThings[2] = "World";
// // Check the value of the array to make sure it updated the array. How? Why, yes! console.log();
// console.log(randomThings);
//-------------------Change values-----------------//
// Given the following array const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
// const ourClass = ["Salty", "Zoom,", "Sardine", "Slack", "Github"];
// // What would you write to access the 3rd element of the array?
// ourClass[2];
// // // Change the value of "Github" to "Octocat"
// ourClass[4] = "Octocat"
// // // Add a new element, "Cloud City" to the array.
// ourClass.push("Cloud City");
// //console.log();'ing it'
// console.log(ourClass);
//-------------------Mix it up-----------------//
// Given the following array: 
// const myArray = [5, 10, 500, 20];
// // Add the string "Egon" to the end of the array. Add another string of your choice to the end of the array.
// myArray.push("egon");
// myArray.push("Hi, Im a string");
// // Remove the 5 from the beginning of the array.
// myArray.shift(5);
// // Add the string "Bob Marley" to the beginning of the array.
// myArray.unshift("Bob Marley");
// // Remove the string of your choise(choise!?!?!..CHOISE!?!?!) from the end of the array.
// myArray.splice(3,1,);
// // Reverse this array using Array.prototype.reverse(). Did you mutate the array? What does mutate mean? Did the .reverse() method return anything?
// //well i had prototype in there and it didn't change anything so i took it out and it reversed the string
// myArray.reverse();
// console.log(myArray);
//---------------Biggie smalls-------------------//
// Create a variable that contains an integer.
const integer = 11;
// Write an if ... else statement that:
if (integer < 100){
	console.log("little number");
// console.log()s "little number" if the number is entered is less than 100
} else if (integer >= 100){
// console.log()s big number if the number is greater than or equal to 100.
	console.log("big number ");
}
//----------------Monkey in the middle---------------//
// Write an if ... else if ... else statement:
if (integer < 5){
// console.log() little number if the number entered is less than 5.
	console.log("little number"); 
// If the number entered is more than 10, log big number.
} else if (integer > 10) {
// Otherwise, log "monkey". 
	console.log("monkey");
}
//-----------------What's in your closet?---------------------//
const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],[
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
  ],[
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
];
// What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.
// console.log("Kristyn is rocking that " + kristynsCloset[4] + " today!");
// Kristyn just bought some sweet shades! Add "raybans" to her closet after "yellow knit hat".
kristynsCloset.splice(6, 0, "raybans");
// console.log(kristynsCloset);
// Kristyn spilled coffee on her hat... modify this item to read "stained knit hat" instead of yellow.
kristynsCloset[5] = "stained knit hat";
// console.log(kristynsCloset);
// Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirts array.
thomsCloset[0] [0];
// In the same way, access one item from Thom's pants array.
thomsCloset[0];
// Access one item from Thom's accessories array.
thomsCloset[2];
// Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"
console.log("Thom is looking fierce in a " + thomsCloset[0] [0] + " , " + "and " + thomsCloset[2] [1] + "!");
// Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas
thomsCloset[1][2] = "Footie Pajamas";
console.log("Thom is wearing just " + thomsCloset[1][2] + " this winter.");
//-----------------PART 4-----------------//
//----------------printGreeting----------------//
// Do you think you could write a function called printGreeting with a parameter name that returns a greeting with the argument interpolated into the greeting?
//SKIPT
//----------------printCool-------------------//
// Write a function printCool that accepts one parameter, name as an argument. The function should print the name and a message saying that that person is cool.
const printCool = (name) => {
	console.log("Hey you, " + name + " you're pretty cool.");
}
printCool("Fil");
//-------------------calculateCube-----------------//
// Write a function calculateCube that takes a single number and prints the volume of a cube made from that number.
const calculateCube = (num) =>{
	console.log(Math.pow(num, 3));
}

calculateCube(3);
//-------------isVowel------------------//
// Write a function isVowel that takes a character (i.e. a string of length 1) and 
// returns true if it is a vowel, false otherwise. The vowel could be upper or lower case.

const isVowel = (a) =>{
const vowel = ["a", "e", "i", "o", "u"];
for (let i = 0; i< vowel.length; i++){
	if (a === vowel[i]) {
		return true;
	} else {
		return false
	}
}
}
console.log(isVowel("f"));
//---------------getTwoLengths------------//
// Write a function getTwoLengths that accepts two parameters (strings). The function should return an array of numbers where each number is the length of the corresponding string.
const getTwoLengths = (string1, string2) => {
	console.log(string1.length, string2.length);

}
getTwoLengths("hi", "turbo");
getTwoLengths("ahahahahahaahahahahahaha", "");

//----------------getMultipleLengths-------------//
// Write a function getMultipleLengths that accepts a single parameter as an argument: an array of strings. The function should return an array of numbers where each number is the length of the corresponding string.
const getMultipleLengths = (string) => {
	let stringLength = [];
		for (let i = 0; i < string.length; i++){
			let array = string[i];
			stringLength.push(array.length);
		}
			return stringLength;
}
console.log(getMultipleLengths(["hi", "poop", "destiny"]));


//--------------maxOfThree-------------//
// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them. If all numbers are the same, it doesn't matter which one is returned. If the two largest numbers are the same, one of them should be returned.
const maxOfThree = (num1, num2, num3) => {
	if (num1 && num2 < num3){
		console.log(num3);
	} if (num2 && num3 < num1){
		console.log(num1);
	} if ( num3  && num1 < num2){
		console.log(num2);
	}
	}
maxOfThree(31,2993,99);

//-----------------printLongestWord-------------//

// Write a function printLongestWord that accepts a single argument, an array of strings. The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array.

const printLongestWord = (string) => {
	let longestWord = "";

	string.forEach(function(word){
		if(word.length > longestWord.length){
			longestWord = word;
		}
	});
	return longestWord;
}
let words = printLongestWord(["destiny", "mountains", "snowboarding"]);
console.log(words);

//first attempt
// const printLongestWord = (string) => {
// 	//split string into an array of strings
// 	let stringSplit = string.split(" ");
// 	//variable that will hold length of longest word
// 	let longestWord = 0;
// 		//for loop that checks if the number being iterated is longer than the longest word
// 		for(i = 0; i < stringSplit.length; i++){
// 			if(stringSplit[i].length > longestWord){
// 				longestWord = stringSplit[i].length;
// 			}
// 		}
// 		return longestWord;
// }
// printLongestWord("Destiny is a poopest fart");

//---------------Transmogify------------------//
// Write a Javascript function called transmogrify. This function should accept three arguments, which you can assume will be numbers. Your function should return the "transmogrified" result.
// The transmogrified result of three numbers is the product of the first two numbers, raised to the power of the third number.
// For example, the transmogrified result of 5, 3, and 2 is (5 times 3) to the power of 2 is 225.

//--------------reverseWordOrder---------------//

const reverseWordOrder = (string) => {
	let newString = " ";
	for (let i = string.length -1 ; i >= 0; i--){
		newString += string[i];
	}
	return newString;
}
console.log(reverseWordOrder("hey this is a string"));
//my attempt. i couldn't figure out how to make it so it reverses the words themselves.

//-------------------- Get down and dirty with Math.random()------------------//
// Write a function that will return a random integer between 1 and 10. Test it.
// const randInt = () => {
// 	return Math.floor(Math.random()*10) + 1//if you don't add one then the function won't return up to the highest number..i think;
// }
// console.log(randInt());
// Write a function that will return a random integer between 10 and 100. Test it.
// const randInt = (min, max) => {
// 	return (Math.random()*(max-min+1) + min);
// }
// console.log(randInt(10,100));
// Write a function that will return a random number between 532 and 13267. Test it.
// const randInt = (min, max) => {
// 	return Math.floor(Math.random()*(max-min+1) + min);
// }
// console.log(randInt(532,13267));
// Write a function that will return a random number between 1 and 10. Test it.
// const randInt = (min, max) => {
// 	return Math.floor(Math.random()*(max-min+1) + min//if you don't do + min at the end it won't include the max number);
// }
// console.log(randInt(1,10));
// Add a few more quotes to the quotes array from question III-B-1 above. Write a function that will take an array as a parameter, and return a random element from that array. Call your function a few times, passing in the quotes array. Give it a nice semantic name like getRandomElement.

const quotes = ["quote1", "quote2", "quote3", "quote4", "quote5", "quote6"];
const getRandomElement = (quotes) => {
	return quotes[Math.floor(Math.random()*quotes.length)];
} 
console.log(getRandomElement(quotes));