console.log('HOMEWORK');


//1. VARIABLES AND DATATYPES

// How do we assign a value to a variable?

//a. We assign a value to a variable with '='


// How do we change the value of a variable?

//a. By using the name of that same variable = to a different value.

// How do we assign an existing variable to a new variable?

// a. By declaring a new variable and making it equal to the name of the existing variable.

// Remind me, what are declare, assign, and define?

//a. when you declare a variable reserves the space for a variable to be used later.
//b. when you are assigning a variable you are setting the value.
//c. when you define a variable comprises both the declaration and assignment.

// What is pseudocoding and why should you do it?

//a. writing the code in english to understand the steps it takes to get things done properly! Helps to make a guidline.

// What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?

// a. 75-90% planning and 10-25% actually code



//--------------------B. STRINGS
// 1. Create a variable called firstVariable.
// Assign it the value of the string "Hello World"
// Change the value of this variable to some number.
// Store the value of firstVariable in a new variable called secondVariable
// Change the value of secondVariable to any string.
// What is the value of firstVariable?

let firstVariable = 'Hello World';
//reassinging variable to number
firstVariable = 6;
//check
console.log(firstVariable);
//creating new variable equal to existing variable
let secondVariable = firstVariable;
//check
console.log(secondVariable);
//change new variable to any string
secondVariable = 'Any String';
//check
console.log(secondVariable);
//value of first variable.
console.log(firstVariable);

// 2. Create a variable called yourName and set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable yourName so that it returns a new string with them concatenated.

let yourName = 'Josh Hepworth';
console.log('Hello, my name is ' + yourName);


// ----------------C. BOOLEANS

  const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';

  console.log(a < b);
  console.log(c > d);
  console.log('Name' =='Name');
  console.log(true != false);
  console.log(false == false == false == false == false == false == true);
  console.log(false == false)
  console.log(e ==='Kevin');
  console.log(a + b ==c);
  console.log(a * a == d);
  console.log(48 == '48');


  //--------------D. THE FARM


// Declare a variable animal. Set it to be either "cow" or something else.
// Write code that will print out "mooooo" if the it is equal to cow.
// Change your code so that if the variable animal is anything other than a cow, it will print "Hey! You're not a cow."

  const animal = 'cow';
  if('cow'== animal) {
  	// console.log('mooooooo');
  } else {
  	// console.log("Hey! You're not a cow");
  }


//---------------E. DRIVER'S ED

// Make a variable that will hold a person's age. Be semantic.
const personAge = 14;
// Write code that will print out "Here are the keys", if the age is 16 years or older.
if (personAge >= 16) {
	// console.log('Here are the keys');
} else {
	// console.log("Sorry you're too young.")
}
// If the age is younger than 16, a message should print "Sorry, you're too young.



//-----------------II. LOOPS


// ------A. THE BASICS


// Write a loop that will print out all the numbers from 0 to 10, inclusive.
for(let i = 0; i <= 10; i++) {
	// console.log(i);
}

// Write a loop that will print out all the numbers from 10 up to and including 400.

for(let i = 10; i <= 400; i++) {
	// console.log(i);
}

// Write a loop that will print out every third number starting with 12 and going no higher than 4000.

for (let i = 12; i <= 4000; i += 3){
	// console.log(i);
}

//------B. GET EVEN

// Print out the even numbers that are within the range of 1 - 100.

for (let i = 1; i <= 100; i++) {
	if (i % 2 === 0) {
		// console.log(i, '<--Is an even number' );
	}
}

// Adjust your code to add a message next to even numbers only that says: "<-- is an even number".

//-------C. GIVE ME FIVE

// For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five.

for (let i = 0; i <= 100; i++)
	if(i % 5 === 0) {
		// console.log(`I found a ${i}. High five!`);
		// Add to the code from above to print out "I found a number. Three is a crowd" if the number is a multiple of three.
	} else if (i % 3 === 0) {
		// console.log(`I found a ${i}. Three is a crowd`);
	}

// -------D. SAVINGS ACCOUNT

// Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.

let bankAccount = [1,2,3,4,5,6,7,8,9,10];

let sum = 0;

for( let i = 0; i < bankAccount.length; i++) {
	sum += bankAccount[i];
}

// console.log(`My bank account only has $${sum}`);


// You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.



let newBankAccount = 0;
for (let i = 0; i <= 100; i++) {
	newBankAccount += i * 2;
}
// console.log(`Hooray I got a bonus! Now i have $${newBankAccount} in my account!!`);



//---------E. Multiples of 3 and 5

//I've already done it!

//----------III Arrays & Control flow
//------Talk About it

// A. What are the things in an array called?

//Element

// B. Do Arrays guarantee those things will be in order?

//Yes

//C. What real-life thing could you model with an array?

//When you would need to hold a list of usernames together
//for a website perhaps.

//-----Easy does it

//A. Create an array that contains three quotes and store it in a variable called quotes.


// let array = ['Love for all, Hatred for none', 'Every moment is a fresh beggining', 'Die with memories, not dreams'];

// let quotes = array;

// console.log(quotes);


//-------Accessing elements


// Given the following array const randomThings = [1, 10, "Hello", true]

// How do you access the 1st element in the array?

// console.log(randomThings[0]);
//or just randomThings[0];

// Change the value of "Hello" to "World".

// randomThings[2] = "World";

// Check the value of the array to make sure it updated the array. How? Why, yes! console.log();

const randomThings = [1, 10, "Hello", true]


randomThings[2] = "World";

// console.log(randomThings);


//---------Changing Values

const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]

//What would you write to access the 3rd element of the array?

ourClass[2];

//Change the value of "Github" to "Octocat"

ourClass[4] = "Octocat"

//Add a new element, "Cloud City" to the array.

ourClass.push("Cloud City")

// console.log(ourClass);

//-----------Mix It Up

const myArray = [5, 10, 500, 20]

//b. Add the string "Egon" to the end of the array. Add another string of your choice to the end of the array.

myArray.push('Egon', 'Turtle')
// console.log(myArray);

// a. Remove the 5 from the beginning of the array.

myArray.shift();
// console.log(myArray);

//c. Add the string "Bob Marley" to the beginning of the array.

myArray.unshift('Bob Marley');
// console.log(myArray);

//d.  Remove the string of your choise from the end of the array.

myArray.pop()
// console.log(myArray);

// e. Reverse this array using Array.prototype.reverse(). Did you mutate the array? What does mutate mean? Did the .reverse() method return anything?

myArray.reverse();
console.log(myArray);

//I used a mutation method to change the entirety of the array. When you mutate you are changing the array itself, non-mutating methods will return an array with the changes though.


//--------F. Notorious B.I.G.

// Create a variable that contains an integer.

const number = (50);


// Write an if ... else statement that:
// console.log()s "little number" if the number is entered is less than 100
if (number < 100) {
  // console.log('Little number');
  
  // console.log()s big number if the number is greater than or equal to 100
} else if (number >= 100) {
  // console.log('Big number')
}

//---------G. Monkey in the Middle

// Write an if ... else if ... else statement:
const isNumber = (5);
// console.log() little number if the number entered is less than 5.
if (isNumber < 5) {
  // console.log('little number')
  // If the number entered is more than 10, log big number.
} else if (isNumber > 10) {
  // console.log('big number')
  // Otherwise, log "monkey".
} else {
  // console.log('monkey')
}

 
//-----------H. What's in Your Closet


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

console.log('Kristyn is rocking that ' + kristynsCloset[2] + ' today! But where is the right one?');


// Kristyn just bought some sweet shades! Add "raybans" to her closet after "yellow knit hat".

kristynsCloset.splice(6,0,'raybans');
// console.log(kristynsCloset);

// Kristyn spilled coffee on her hat... modify this item to read "stained knit hat" instead of yellow.

kristynsCloset[5] = 'stained knit hat';
// console.log(kristynsCloset);

// Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirts array.

thomsCloset[0][0];
// console.log(thomsCloset[0][0])

// In the same way, access one item from Thom's pants array.

thomsCloset[1][0];
// console.log(thomsCloset[1][0]);

// Access one item from Thom's accessories array.

thomsCloset[2][0];
// console.log(thomsCloset[2][0]);

// Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"

// console.log("Thom is looking fierce in a " + thomsCloset[0][0] + ", " + thomsCloset[1][1] + " and " + thomsCloset[2][0] + "!" )

// Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.

thomsCloset[1][2] = 'Footie Pajamas';
// console.log("Thom is wearing some very expensive and stylish " + thomsCloset[1][2] + " this winter.");


//-------------Functions

//B. printCool

// Write a function printCool that accepts one parameter, name as an argument. The function should print the name and a message saying that that person is cool.

const printCool = (name) => {
console.log(`${name} is cool` )

}

printCool("Captain Reynolds")


//C. calculateCube

// Write a function calculateCube that takes a single number and prints the volume of a cube made from that number.

const calculateCube = (cube) => {
console.log(cube);
}

calculateCube(5*5*5);


//D. isVowel

// Write a function isVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. The vowel could be upper or lower case.

const isVowel = (letter) => {
  let vowels = ['a','e','i','o','u'];
  for(let i = 0; i < vowels.length; i++) {
    if(letter === vowels[i]) {
      return true;
    }
  }
  return false;
};
console.log(isVowel('f'));

//E. getTwoLengths

// Write a function getTwoLengths that accepts two parameters (strings). The function should return an array of numbers where each number is the length of the corresponding string.


const getTwoLengths = (a,b) => {
console.log(a.length, b.length);

}
getTwoLengths('hello','sir');


//F. getMultipleLengths

// Write a function getMultipleLengths that accepts a single parameter as an argument: an array of strings. The function should return an array of numbers where each number is the length of the corresponding string.


const getMultipleLengths = (string) => {
    let stringLengthArray = [];
    for(let i = 0; i < string.length; i++) {
        let array = string[i];
        stringLengthArray.push(array.length);
    }
    return stringLengthArray;
}

console.log(getMultipleLengths(['So','how', 'have','you', 'been']));

//G. maxofThree

// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them. If all numbers are the same, it doesn't matter which one is returned. If the two largest numbers are the same, one of them should be returned.

const maxOfThree = (num1,num2,num3) => {
if(num1 && num2 < num3) {
  console.log(num3);
} if (num2 && num3 < num1) {
  console.log(num1);
} if (num3 && num1 < num2) {
  console.log(num2);
}
}
//It doesnt look great..but it works
maxOfThree(11,11,8)

//H. printLongestWord

//Write a function printLongestWord that accepts a single argument, an array of strings. The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array.



function printLongestWord(array) {
  let longestWord = "";

  array.forEach(function(word) {
    if(word.length > longestWord.length) {
      longestWord = word;
    }
  });

  return longestWord;
}

let word = printLongestWord(["What","a","long", "weekend", "that", "was", "over", "too", "quickly"]);
console.log(word);


//I. transmogrify

const transmogrify = (num1,num2,num3) => {

}



//J. reverseWordOrder v2

//Without using .split(), .reverse(), or .join(), write a function reverseWordOrder that accepts a single argument, a string. The function should return a string with the order of the words reversed. Don't worry about punctuation.

// See if you can do it without googling.

// Remember: Jim showed you today that you can index directly into a string:

const reverseWordOrder = (string) => {
    let reverse = '';
    for(let i = string.length - 1; i >= 0; i--) {
        reverse += string[i];
    }
    return reverse;
}

console.log(reverseWordOrder('matilda has come'));


//K. Get down and diry with Math random


// a. Write a function that will return a random integer between 1 and 10. Test it.

// const randomInteger = () => { 
//   return Math.floor(Math.random()*10)+1;
// }

// console.log(randomInteger());

// b. Write a function that will return a random integer between 10 and 100. Test it.

// function getRandomInteger(min, max) {
//   return Math.floor(Math.random()*(max - min + 1) + min);
// }
// console.log(getRandomInteger(10,100))

//  c. Write a function that will return a random number between 532 and 13267. Test it.

// function getRandomInteger(min, max) {
//   return Math.floor(Math.random()*(max - min + 1) + min);
// }
// console.log(getRandomInteger(532,13267))

//d.  Write a function that will return a random number between 1 and 10. Test it.

// const randomInteger = () => { 
//   return Math.random()*10;
// }

// console.log(randomInteger());


// Add a few more quotes to the quotes array from question III-B-1 above. Write a function that will take an array as a parameter, and return a random element from that array. Call your function a few times, passing in the quotes array. Give it a nice semantic name like getRandomElement.

// let array = ['Love for all, Hatred for none', 'Every moment is a fresh beggining', 'Die with memories, not dreams'];

// array.push('There is nothing permanent except change', 'You cannot shake hands with a clenched fist.', 'Learning never exhausts the mind.')
// console.log(array);
let quotes = ['Love for all, Hatred for none', 'Every moment is a fresh beggining', 'Die with memories, not dreams', 'There is nothing permanent except change', 'You cannot shake hands with a clenched fist','Learning never exhausts the mind'];
const getRandomElement = (quotes) => {
  
return quotes[Math.floor(Math.random()*quotes.length)]
}
console.log(getRandomElement(quotes));

//-------------Objects

//Let's set up an object data structure. Let's say we have a website that sells products, and we have a user of our website, and we want to store that user's data. The object data structure is a good way to organize the data from our user.

//A. Make a user object

//Create an object called user.

const user = {
  name: 'Josh',
  email: 'Josh@gmail.com',
  age: 27,
  purchased: []
}
// Write in to the object the key-value pairs for name, email, age, and purchased. Set the value of purchased to an empty array []. Set the other values to whatever you would like.

//B. Update the user

//Our user has changed his or her email address. Without changing the original user object, update the email value to a new email address.

user.email = 'newemail@gmail.com';
// console.log(user);

//Our user has had a birthday! Without changing the original user object, increment the age value using the postfix operator. Hint: age++

user.age++;
// console.log(user);

//C. Adding keys and values

//Without changing the original user object, add a new key location to the object, and give it a value or some-or-other location (a string).

user.location = 'Chicago';
// console.log(user);






















