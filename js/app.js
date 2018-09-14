console.log("works");

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
  const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';

  console.log(a < b);
  console.log(c > d);
  console.log('Name' == 'Name');
  console.log(true != false);
  console.log(false == false == false == false == false == false == true);
  console.log(false == false);
  console.log(e == 'Kevin');
  console.log(a + b == c);
  console.log(a * a == d);
  console.log(48 == '48');



//------------the farm--------------//
//
// Declare a variable animal. Set it to be either "cow" or something else.
// Write code that will print out "mooooo" if the it is equal to cow.
// Change your code so that if the variable animal is anything other than a cow, it will print "Hey! You're not a cow."
// Commit.
const animal = "cat";
if (animal != "cow") {
	console.log("mooooo");
} else {
	console.log("Hey! you're not a cow!");
}
