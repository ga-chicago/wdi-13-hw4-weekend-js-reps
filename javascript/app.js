console.log("JS IS RUNNING!");
////////////////////////////////////////////////////////////////////////////////////////////////////
// I. Variables & Datatypes

// A. Q + A

// How do we assign a value to a variable?
// The variable must be declared before assignment of any value (usually with const/let/var). 
// Then it can be assigned (=) a value;
// Declaring/Assigning is usually referred to as Defining

// How do we change the value of a variable?
// We change a variable's value by reassigning one.
// However one must pay attention to the declared variable type!
// const variables cannot be reassigned!
// let ex1 = 5;
// const ex2 = 7;
// ex1 = ex1*2;
// ex2 = ex2*5; //==> app.js:20 Uncaught TypeError: Assignment to constant variable.

// How do we assign an existing variable to a new variable?
// A new empty variable can be assigned any object, so another variable is cool!
// const variable = 5;
// const newVar = variable;
// console.log(newVar); //==> 5

// Remind me, what are declare, assign, and define?
// Declare: Bring variable into existence
// Assign: assign it a value using =
// Define: Declare+Assign

// What is pseudocoding and why should you do it?
// Pseudocode: Writing out in plain text the processes that will make up the code
// Awesome for being able to take a step back and keep track of the mechanics/where we are
// Awesome for breaking down into tiny bits the mechanics of the code

// What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
// The Masters once said: "Timewise, programming is 75-90% planning, and 10-25% actually typing code."

// 🔴 Commit.
////////////////////////////////////////


// B. Strings

// Create a variable called firstVariable.
//==> Must declare variable with a let because we will be changing its value
let firstVariable;
// Assign it the value of the string "Hello World"
firstVariable = "Hello World";
// Change the value of this variable to some number.
firstVariable = 9;
// Store the value of firstVariable in a new variable called secondVariable
let secondVariable = firstVariable;
// Change the value of secondVariable to any string.
secondVariable = "Goodbye World";
// What is the value of firstVariable?
console.log(firstVariable); // ==> 9
// Create a variable called yourName and set it equal to your name as a string. 
let yourName = "Charlotte";
// Then, write an expression that takes the string "Hello, my name is " and the variable yourName so that it returns a new string with them concatenated.
// ex: Hello, my name is Jean Valjean
console.log("Hello, my name is " + yourName);;

// 🔴 Commit.
////////////////////////////////////////


// C. Booleans

// Using the provided variable definitions, replace the blanks so that all log statements print true in the console. Answers should be all be valid JS syntax and not weird things that don't make sense but happen to print true to the console.
  const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';

  console.log(a <= b);
  console.log(c >= d);
  console.log('Name' === 'Name');
  console.log(true !== false);
  console.log(false === false === false === false === false === false === true);
  console.log(false === false)
  console.log(e === 'Kevin');
  console.log(a !== b <= c);
  console.log(a !== a <= d);
  console.log(48 == '48');

// 🔴 Commit.
////////////////////////////////////////


// D. The Farm

// Declare a variable animal. Set it to be either "cow" or something else.
let animal = "cow";
// Write code that will print out "mooooo" if the it is equal to cow.
// Change your code so that if the variable animal is anything other than a cow, it will print "Hey! You're not a cow."
if (animal === "cow") {
	console.log("mooooo");
} else {
	console.log("Hey! You're not a cow.");
}

// 🔴 Commit.
////////////////////////////////////////


// E. Driver's Ed

// Make a variable that will hold a person's age. Be semantic.
// Use let because personAge will probably be reassigned!
let personAge = 23;
// Write code that will print out "Here are the keys", if the age is 16 years or older.
// If the age is younger than 16, a message should print "Sorry, you're too young."
if (personAge >= 16) {
	console.log("Here are the keys");

} else {
	console.log("Sorry, you're too young.");
}

// 🔴 Commit.
////////////////////////////////////////////////////////////////////////////////////////////////////



// II. Loops
// Remember: USE let when you initialize your for loops!
// This is GOOD: for(let i = 0;i < 100; i++)
// This is NO GOOD: for(i = 0; i < 100; i++)


// A. The basics

// Write a loop that will print out all the numbers from 0 to 10, inclusive.
for (let i = 0; i <= 10; i++) {
	// console.log(i);
}
// Write a loop that will print out all the numbers from 10 up to and including 400.
for (let i = 10; i <= 400; i++) {
	// console.log(i);
}
// Write a loop that will print out every third number starting with 12 and going no higher than 4000.
for (let i = 12; i <= 4000; i += 3) {
	// console.log(i);
}
// 🔴 Commit.


// B. Get even

// Print out the even numbers that are within the range of 1 - 100.
// Adjust your code to add a message next to even numbers only that says: "<-- is an even number".
for (let i = 1; i <= 100; i++) {
	if (i % 2 === 0) {
		// console.log(i + " <-- is an even number");
	}
}
// 🔴 Commit.


// C. Give me Five

// For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five.
// Example Output:
// I found a 5. High five!
// I found a 10. High five!
// Add to the code from above to print out "I found a number. Three is a crowd" if the number is a multiple of three.
// Example Output:
// I found a 3. Three is a crowd
// I found a 5. High five!
// I found a 6. Three is a crowd
// I found a 9. Three is a crowd
// I found a 10. High five!
for (let i = 0; i <= 100; i++) {
	if (i % 15 === 0) {
		// console.log(i + " <-- I found a number. High five!");
		// console.log(i + " <-- I found a number. Three is a crowd");
	} else if (i % 5 === 0) {
		// console.log(i + " <-- I found a number. High five!");
	} else if (i % 3 === 0) {
		// console.log(i + " <-- I found a number. Three is a crowd");
	}
}
// 🔴 Commit.


// D. Savings account

// Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
// Check your work! Your bank_account should have $55 in it.
// You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
// Check your work! Your bank_account should have $10,100 in it.
let bank_account = 0;
for (let i = 1; i <= 10; i++) {
	bank_account = bank_account + i;
}
console.log(`You have $${bank_account} in your bank account!`);

let bank_account2 = 0;
for (let i = 1; i <= 100; i++) {
	bank_account2 = bank_account2 + 2 * i;
}
console.log(`You have $${bank_account2} in your bank account!`);
// 🔴 Commit.


// E. Multiples of 3 and 5

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000. If a previous question you've done has helpful bits of code in it that partially solves this problem, look back at them.
// You just solved Project Euler problem 1!
// Are you having dejà vu? This just in! From the "Read the entire problem before you start" dept: This problem was on a previous assignment. You may skip it if you've already done it, just include a comment saying that you've already done it. If you've now done the problem twice, perhaps next time you'll read the whole problem before starting it.
let sum = 0;
// I'm assuming "below" means "strictly below"
for (i = 0; i < 1000; i++) {
	if (i % 3 === 0 || i % 5 === 0) {
		sum = sum + i;
		// console.log(`sum: ${sum}, and i: ${i}`);
	}
}
console.log(`${sum} <-- Sum of all the multiples of 3 or 5 below 1000`);
// 🔴 Commit.



// // III. Arrays & Control flow

// // A. Talk about it:

// // What are the things in an array called?
// Arrays are objects that contain items called elements. Each element can be accessed through its index, its value can be any JavaScript value.
// // Do Arrays guarantee those things will be in order?
// The items in an array will be in the order they are written out in the array definition. It is however possible to modify these items, including their order. Objects aren't guaranteed to stay in order.
// // What real-life thing could you model with an array?
// Quite literally Anything. Any person, place, or thing that possesses properties can be modeled with an array.
// Example:
const myDog = ["Zelda", 8, ["brown", "black", "white"], "Sleepbarking and farting in my bed"];
console.log(myDog);
// 🔴 Commit.


// B. Easy Does It

// Create an array that contains three quotes and store it in a variable called quotes.
let quotes = [
	"Grant me the serenity to accept the things I cannot change, the courage to change the things I can, and the wisdom to know the difference.", 
	"Killing must feel good to God, too. He does it all the time, and are we not created in his image?",
	"YOU OWE ME AWE."
]
console.log(quotes);
// 🔴 Commit.


// C. Accessing elements

// Given the following array 
const randomThings = [1, 10, "Hello", true]
// How do you access the 1st element in the array?
// The first item's index in an array is 0.
randomThings[0];
// Change the value of "Hello" to "World".
randomThings[2] = "World";
// Check the value of the array to make sure it updated the array. How? Why, yes! 
console.log(randomThings);
// 🔴 Commit.


// D. Change values

// Given the following array const 
ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];
// What would you write to access the 3rd element of the array?
ourClass[2];
// Change the value of "Github" to "Octocat"
ourClass[4] = "Octocat";
// Add a new element, "Cloud City" to the array.
ourClass.push("Cloud City");
console.log(ourClass);
// 🔴 Commit.


// E. Mix It Up

// Given the following array: 
const myArray = [5, 10, 500, 20];
// Add the string "Egon" to the end of the array. Add another string of your choice to the end of the array.
myArray.push("Egon");
myArray.push("Dolarhyde");
// console.log(myArray);
// Remove the 5 from the beginning of the array.
myArray.splice(0, 1)
// vv Or this can be used, but I find it less precise...
// myArray.shift();
console.log(myArray);
// Add the string "Bob Marley" to the beginning of the array.   
myArray.unshift("Bob Marley");
console.log(myArray);
// Remove the string of your choise from the end of the array.
myArray.splice(myArray.length - 1, 1);
console.log(myArray);
// Reverse this array using Array.prototype.reverse(). Did you mutate the array? What does mutate mean? Did the .reverse() method return anything?
myArray.reverse();
// The array has indeed been mutated. That means that the value of the variable has been reassigned.
// The .reverse() method returns the reversed array, meaning myArray.reverse() has the value of the reversed array and can be used as such in the future.
console.log(myArray);
// 🔴 Commit.


// F. Biggie Smalls

// Create a variable that contains an integer.
let numberF = 8;
// Write an if ... else statement that:
// console.log()s "little number" if the number is entered is less than 100
if (numberF < 100) {
	console.log("little number");
// console.log()s big number if the number is greater than or equal to 100.
} else {
	console.log("big number");
};
// 🔴 Commit.


// G. Monkey in the Middle

// Write an if ... else if ... else statement:
// console.log() little number if the number entered is less than 5.
let numberG = 8;
if (numberG < 5) {
	console.log("little number");
// If the number entered is more than 10, log big number.
} else if (numberG > 10) {
	console.log("big number");
// Otherwise, log "monkey". 
} else {
	console.log("monkey");
}
// 🔴 Commit.


// H. What's in Your Closet?

// Below, we've given you examples of Kristyn and Thom's closets modeled as data in JavaScript.
const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];

// // Thom's closet is more complicated. Check out this nested data structure!!
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
console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!");
// Kristyn just bought some sweet shades! Add "raybans" to her closet after "yellow knit hat".
kristynsCloset.splice(kristynsCloset.indexOf("marshmallow peeps"), 0, "raybans");
// console.log(kristynsCloset); // Test
// Kristyn spilled coffee on her hat... modify this item to read "stained knit hat" instead of yellow.
kristynsCloset.splice(kristynsCloset.indexOf("yellow knit hat"), 1, "stained knit hat");
console.log(kristynsCloset); // Test
// Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirts array.
// In the same way, access one item from Thom's pants array.
// Access one item from Thom's accessories array.
// Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"
// I like making my pockito choose for me, gonna define a randomizer to avoid repetition
const randomNumber = (limit) => {
  return Math.floor(Math.random() * Math.floor(limit));
}
console.log(`Thom is looking fierce in a ${thomsCloset[0][randomNumber(thomsCloset[0].length)]}, ${thomsCloset[1][randomNumber(thomsCloset[1].length)]} and ${thomsCloset[2][randomNumber(thomsCloset[2].length)]}!`);
// Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.
thomsCloset[1].splice(thomsCloset[1].indexOf("PJs"), 1, "Footie Pajamas");
console.log(thomsCloset);
// 🔴 Commit.



// IV. Functions


// A. printGreeting

// Do you think you could write a function called printGreeting with a parameter name that returns a greeting with the argument interpolated into the greeting?
// Like so?
// console.log(printGreeting("Slimer"));
// => Hello there, Slimer!
// You think you could? I think so too. Feel free to skip this problem, because you've already done it. If you've done the problem twice, read entire problems carefully before doing them from now on.
// I dont' mind redoing, good practice :)
const printGreeting = (name) => {
	return `Hello there, ${name}!`; 
}
console.log(printGreeting("Slimer"));
// 🔴 Commit.


// B. printCool

// Write a function printCool that accepts one parameter, name as an argument. The function should print the name and a message saying that that person is cool.
// console.log(printCool("Captain Reynolds"));
// => "Captain Reynolds is cool";
const printCool = (name) => {
	return `${name} is hella cool`; 
}
console.log(printCool("Hela"));
// 🔴 Commit.


// C. calculateCube

// Write a function calculateCube that takes a single number and prints the volume of a cube made from that number.
// console.log(calculateCube(5));
// => 125
const calculateCube = (number) => {
	// Use Matgh.pow(a, b) which is a^b
	return `${Math.pow(number, 3)} is the cube of ${number}`;
}
console.log(calculateCube(5));
// 🔴 Commit.


// D. isVowel
// Write a function isVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. The vowel could be upper or lower case.
// console.log(isVowel("a"));
// => true
const isVowel = (string) => {
	// Make string toLowerCase to avoid condition repetition overload
	string.toLowerCase();
	if (string.length === 1 && string === "a" || string === "e" || string === "i" || string === "o" || string === "u" || string === "y") {
		return true;
	} else if (string.length > 1) {
		return `Not a letter :( Feed me a letter!`
	} else {
		return false;
	}
}
console.log(isVowel("a"));
// 🔴 Commit.


// E. getTwoLengths

// Write a function getTwoLengths that accepts two parameters (strings). The function should return an array of numbers where each number is the length of the corresponding string.
// console.log(getTwoLengths("Hank", "Hippopopalous"));
// => [4, 13]
const getTwoLengths = (string1, string2)  => {
	return [string1.length, string2.length];
}
console.log(getTwoLengths("Hank", "Hippopopalous"));
// 🔴 Commit.


// F. getMultipleLengths

// Write a function getMultipleLengths that accepts a single parameter as an argument: an array of strings. The function should return an array of numbers where each number is the length of the corresponding string.
const getMultipleLengths = (arrayOfStrings) => {
	// Create new array arrayOfStringsLengths to store lengths outside of for loop
	let arrayOfStringsLengths = [];
	// Loop through array of strings
	for (let i = 0; i < arrayOfStrings.length; i++) {
		// Get the length of each string and push it into arrayOfStringsLengths
		arrayOfStringsLengths.push(arrayOfStrings[i].length);
	}
	return arrayOfStringsLengths;
}
console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));
// => [5, 4, 2, 2, 4]
// 🔴 Commit.


// G. maxOfThree

// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them. If all numbers are the same, it doesn't matter which one is returned. If the two largest numbers are the same, one of them should be returned.
const maxOfThree = (num1, num2, num3) => {
	// Easy way
	// return Math.max(num1, num2, num3);
	// No Google way:
	if (num1 >= num2 && num1 >= num3) {
		return num1;
	} else if (num2 >= num1 && num2 >= num3) {
		return num2;
	} else {
		return num3;
	}
}
console.log(maxOfThree(6, 9, 1));
// => 9
// 🔴 Commit.


// H. printLongestWord

// Write a function printLongestWord that accepts a single argument, an array of strings. The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array.
// Create new array arrayOfStringsLengths to store lengths outside of function
let arrayOfStringsLengths = [];

const printLongestWord = (arrayOfStrings) => {
	// Loop through array of strings
	for (let i = 0; i < arrayOfStrings.length; i++) {
		// Get the length of each string and push it into arrayOfStringsLengths
		arrayOfStringsLengths.push(arrayOfStrings[i].length);
	}
	// Find the largest number in arrayOfStringsLengths and store it in the variable longestWordLength
	 const longestWordLength = Math.max(...arrayOfStringsLengths);
	 // Find the index of the number with that value and store it in the variable longestWordIndex
	 const longestWordIndex = arrayOfStringsLengths.indexOf(longestWordLength);
	 // return word in arrayOfStrings with that same index
	 return arrayOfStrings[longestWordIndex];
}
console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));
// => "Peanutbutter"
// 🔴 Commit.


// I. transmogrify

// Write a Javascript function called transmogrify. This function should accept three arguments, which you can assume will be numbers. Your function should return the "transmogrified" result.
// The transmogrified result of three numbers is the product of the first two numbers, raised to the power of the third number.
// For example, the transmogrified result of 5, 3, and 2 is (5 times 3) to the power of 2 is 225.
const transmogrify = (num1, num2, num3) => {
	return Math.pow(num1 * num2, num3);	
}
console.log(transmogrify(5, 3, 2));
// => 225
// 🔴 Commit.


// J. reverseWordOrder v2

// Without using .split(), .reverse(), or .join(), write a function reverseWordOrder that accepts a single argument, a string. The function should return a string with the order of the words reversed. Don't worry about punctuation.
// See if you can do it without googling.
// Remember: Jim showed you today that you can index directly into a string:
// "hello world"[6]
// => "w"
// That and basic loops and variables and arrays are all you need to solve this without the Array methods.
// Define empty string oneWord that will store characters one at a time to make a word, then be emptied
let oneWordCharacters = "";
// Define empty array that will hold the words converted to strings
let stringedWords = [];
// Define newSentence variable that will holde the entire sentence
let newSentence = "";
reverseWordOrder = (string) => {
	// Empty variables to clean up for next function use
	stringedWords = [];
	newSentence = "";
	// Loop through the string array characters (add a unit of length for the following to work)
	for (let i = 0; i < string.length; i++) {
		// Log the characters into the variable oneWordCharacters
		oneWordCharacters += string[i];
		// When loop hits a blank space or undefined store oneWordCharacters into stringedWords
		if (string[i] === " ") {
			stringedWords[stringedWords.length] = oneWordCharacters;
			oneWordCharacters = "";
		// Take care of the last word by taking advantage of undefined
		} else if (string[i+1] === undefined) {
			// Add a space at the end of the last word (which will come first)
			stringedWords[stringedWords.length] = oneWordCharacters + " ";
			oneWordCharacters = "";
		}
	}	
	// Remove the space at the end of the first word (which will come last)
	// Having a hard time without .pop() or .splice()
	// stringedWords[0][stringedWords[0].length-1] = ""; // Doesn't work
	// Now loop through the new stringedWords Array in reverse
	for (let j = stringedWords.length-1; j >= 0; j--) {
		newSentence += stringedWords[j];
	}
	return newSentence;
}
console.log(reverseWordOrder("Ishmael me Call"));
// // => "Call me Ishmael"
console.log(reverseWordOrder("I use Lâncome on my comb"));
// => "comb my on Lâncome use I"
// 🔴 Commit.


// K. Get down and dirty with Math.random()

// Write a function that will return a random integer between 1 and 10. Test it.
const randomInteger = (min, max) => {
	return Math.floor(Math.random() * (max+1 - min) + min);
}
// Write a function that will return a random integer between 10 and 100. Test it.
console.log(randomInteger(10, 100));
// Write a function that will return a random number between 532 and 13267. Test it.
console.log(randomInteger(532, 13267));
// Write a function that will return a random number between 1 and 10. Test it.
console.log(randomInteger(1, 10));
// Add a few more quotes to the quotes array from question III-B-1 above. Write a function that will take an array as a parameter, and return a random element from that array. Call your function a few times, passing in the quotes array. Give it a nice semantic name like getRandomElement.
// Adding a few more quotes
quotes[quotes.length] = "Chill out, d*ckwad.";
quotes[quotes.length] = "Plum Island Animal Disease Research Facility. Sounds charming.";
const getRandomElement = (array) => {
	return quotes[randomInteger(0, quotes.length-1)];
}
console.log(getRandomElement(quotes));
console.log(getRandomElement(quotes));
console.log(getRandomElement(quotes));
// 🔴 Commit.



// V. Objects

// Let's set up an object data structure. Let's say we have a website that sells products, and we have a user of our website, and we want to store that user's data. The object data structure is a good way to organize the data from our user.


// A. Make a user object

// Create an object called user.
// Write into the object the key-value pairs for name, email, age, and purchased. Set the value of purchased to an empty array []. Set the other values to whatever you would like.
const user = {
	name: "John Connor",
	email: "chillout91@aol.com",
	age: 10,
	purchased: []
};
// 🔴 Commit.


// B. Update the user

// Our user has changed his or her email address. Without changing the original user object, update the email value to a new email address.
user.email = "he.llbeback91@aol.com";
// Our user has had a birthday! Without changing the original user object, increment the age value using the postfix operator. Hint: age++
user.age++;
// 🔴 Commit.


// C. Adding keys and values

// You have decided to add your user's location to the data that you want to collect.
// Without changing the original user object, add a new key location to the object, and give it a value or some-or-other location (a string).
user.location = "LA";
// 🔴 Commit.


// D. Shopaholic!

// Our user has purchased an item! They have purchased some "carbohydrates". Using .push(), add the string "carbohydrates" to the purchased array.
user.purchased.push("carbohydrates");
// Our user has purchased an item! They have purchased some "peace of mind". Using .push(), add the string "peace of mind" to the purchased array.
user.purchased.push("peace of mind");
// Our user has purchased an item! They have purchased some "Merino jodhpurs". Using .push(), add the string "Merino jodhpurs" to the purchased array.
user.purchased.push("Merino jodhpurs");
// Console.log just the "Merino jodhpurs" from the purchased array.
console.log(user.purchased[user.purchased.indexOf("Merino jodhpurs")]);
// 🔴 Commit.


// E. Object-within-object

// Remember that you can add an object to an existing object in the same way that you can add any new property/value pair.
// If we want to give our user a friend with a name and age, we could write:
// user.friend = {
//     name: "Grace Hopper",
//     age: 85
// }
// When we console.log user, we would see the friend object added to our user object.
// Write a friend object into your user object and give the friend a name, age, location, and purchased array (empty for now)
user.friend = {
	name: "Lyra Silvertongue",
	age: 11,
	location: "Brytain",
	purchased: []
}
// Console.log just the friend's name
console.log(user.friend.name);
// Console.log just the friend's location
console.log(user.friend.location);
// CHANGE the friend's age to 55
user.friend.age = 55;
// The friend has purchased "The One Ring". Use .push() to add "The One Ring" to the friend's purchased array.
user.friend.purchased.push("The One Ring");
// The friend has purchased "A latte". Use .push() to add "A latte" to the friend's purchased array.
user.friend.purchased.push("A latte")
// Console.log just "A latte" from the friend's purchased array.
console.log(user.friend.purchased[user.friend.purchased.indexOf("A latte")]);
// 🔴 Commit.


// F. Loops

// Write a for loop that iterates over the User's purchased array (NOT the friend's purchased array), and prints each element to the console.
for (let i = 0; i < user.purchased.length; i++) {
	console.log(user.purchased[i]);
}
// Write a for loop that iterates over the Friend's purchased array, and prints each element to the console.
for (let j = 0; j < user.friend.purchased.length; j++) {
	console.log(user.friend.purchased[j]);
}
// 🔴 Commit.


// G. Functions can operate on objects

// Write a single function updateUser that takes no parameters. When the function is run, it should:
// it should increment the user's age by 1
// make the user's name uppercase
// The function does not need a return statement, it will merely modify the user object.
const updateUser = () => {
	user.age++;
	user.name = user.name.toUpperCase();
}
// Write a function oldAndLoud that performs the exact same tasks as updateUser, but instead of hard-coding it to only work on our user object, make it take a parameter person, and have it modify the object that is passed in as an argument when the function is called. Call your oldAndLoud function with user as the argument.
const oldAndLoud = (person) => {
	person.age++;
	person.name = person.name.toUpperCase();
}
console.log(oldAndLoud(user));
// 🔴 Commit.





// Hungry for More?


// Cat Combinator

// 1. Mama cat

// Define an object called cat1 that contains the following properties:
// name
// breed
// age (a number)
const cat1 = {
	name: "King Bumi",
	breed: "Long Hair Tabby",
	age: 112
}
// console.log the cat's age
console.log(cat1.age);
// console.log the cat's breed
console.log(cat1.breed);


// 2. Papa cat

// Define an object called cat2 that also contains the properties:
// name
// breed
// age (a number)
const cat2 = {
	name: "Muta",
	breed: "Big Fat Cat",
	age: "unknown"
}


// 3. Combine Cats!

// The cats are multiplying!
// Write a function combineCats that has two parameters mama, and papa. The function will take two arguments -- each a cat object.
// Pass cat1 and cat2 as arguments to the combineCats function. The function should console.log them.
// Example:
// combineCats(cat1, cat2)
// { name: "Joe", age: 19, breed: "Mog" }
// { name: "Jam", age: 45, breed: "Siamese" }
// This is to demonstrate that functions can take objects as arguments
// You could also invoke the combineCats function by writing the objects straight into the parentheses:
// combineCats({ name: "Craig", age: 20, breed: "unknown" }, { name: "Linda", age: 20, breed: "undefined" });
// Make it so the combineCats function will return a combination of the two incoming cats
// The result should be an object wherein the
// name is a concatenation of the parents' names
// the age is 1
// the breed is each of the parents' breeds with a hyphen in between
// Example:
// console.log(combineCats(cat1, cat2));
// Result:
// { name: "JoeJam", age: 1, breed: "Mog-Siamese" }
// This is to demonstrate that a function can return an object
const combineCats = (mama, papa) => {
	console.log(mama);
	console.log(papa);
	const babyCat = {};
	babyCat.name = mama.name + papa.name;
	babyCat.age = 1;
	babyCat.breed = mama.breed + "-" + papa.breed;
	return babyCat;
}
console.log(combineCats(cat1, cat2));



// 4. Cat brain bender
// If combineCats returns an object, and if combineCats takes objects as arguments, then it stands to reason that:

// catCombinator can use itself as its own argument.

// Take a second to stew on that . . .

// What is the result of:

// console.log(combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2)));
// Whoa . . .

// The above console.log is two levels deep of combineCats.

// Write a console.log that is three levels deep of combineCats. combineCats should have two arguments, each which are combineCats, each which have two arguments, each which are combineCats.
// Your output should look something like:
























































































