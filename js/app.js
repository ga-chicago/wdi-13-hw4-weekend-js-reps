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
  	console.log('mooooooo');
  } else {
  	console.log("Hey! You're not a cow");
  }


//---------------E. DRIVER'S ED

// Make a variable that will hold a person's age. Be semantic.
const personAge = 14;
// Write code that will print out "Here are the keys", if the age is 16 years or older.
if (personAge >= 16) {
	console.log('Here are the keys');
} else {
	console.log("Sorry you're too young.")
}
// If the age is younger than 16, a message should print "Sorry, you're too young.



//-----------------II LOOPS

// Write a loop that will print out all the numbers from 0 to 10, inclusive.
for(let i = 0; i <= 10; i++) {
	console.log(i);
}

// Write a loop that will print out all the numbers from 10 up to and including 400.





































