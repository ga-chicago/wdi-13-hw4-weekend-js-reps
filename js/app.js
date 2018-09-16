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
const randomThings = [1, 10, "Hello", true];
// How do you access the 1st element in the array?
randomThings[0];
// Change the value of "Hello" to "World".
randomThings[2] = "World";
// Check the value of the array to make sure it updated the array. How? Why, yes! console.log();
console.log(randomThings);
//-------------------Change values-----------------//
// Given the following array const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
const ourClass = ["Salty", "Zoom,", "Sardine", "Slack", "Github"];
// What would you write to access the 3rd element of the array?
ourClass[2];
// // Change the value of "Github" to "Octocat"
ourClass[4] = "Octocat"
// // Add a new element, "Cloud City" to the array.
ourClass.push("Cloud City");
//
//console.log();'ing it'
console.log(ourClass);
